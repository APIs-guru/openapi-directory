# openapi-client

Hereafter is the documentation of the private API of [Pims: Pointages Intelligents pour le Monde du Spectacle](https://pims.io). This API is designed for 3rd-party softwares, editors and partners. Its main purpose is to give access the core data of a Pims customer (i.e. events, ticket counts and promotions).

## Authentication
The API uses [basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication), meaning you will need a username and password to get authorized.

As each customer in Pims has its own domain (e.g. caramba.pims.io, gdp.pims.io...), each credentials will be valid for one domain/customer only. If you need dedicated credentials for one domain, please contact us. (In any case, we will need an explicit agreement from the customer before we create these credentials.)

<div class=\"info\">
To make your life easy, you can try all endpoints with the public credentials below, pointing to our [demo domain](https://demo.pims.io):
  <ul>
    <li>Base path: `https://demo.pims.io/api`</li>
    <li>Username: `demo`</li>
    <li>Password: `q83792db2GCvgYVdKpU3yG3R`</li>
  </ul>
</div>

## Response format
The API returns JSON and matches the [HAL specification](http://stateless.co/hal_specification.html). The `Content-Type` of each response will be `application/hal+json`, unless an error occurs.

Please note that this documentation describes all responses “as if” they were plain JSON. The specificities of HAL are ignored on purpose, in order to remain compact and avoid repetition.
<div style=\"-webkit-column-count: 2; -moz-column-count: 2; column-count: 2; -webkit-column-rule: 1px dotted #e0e0e0; -moz-column-rule: 1px dotted #e0e0e0; column-rule: 1px dotted #e0e0e0;\">
 <div style=\"display: inline-block; width:100%;\">
  <strong>So when you read in the doc:</strong>
<pre><code class=\"lang-json\">{
 <span class=\"token string\">\"id\"</span>: <span class=\"token number\">123</span>,
 <span class=\"token string\">\"property1\"</span>: <span class=\"token string\">\"Lorem ipsum\"</span>,
 <span class=\"token string\">\"object\"</span>: {
  <span class=\"token string\">\"id\"</span>: <span class=\"token number\">456</span>,
  <span class=\"token string\">\"property2\"</span>: <span class=\"token number\">7.89</span>
 }
}</code></pre>
 </div>
 <div style=\"display: inline-block; width:100%;\">
  <strong>... you'll get in the Real World®:</strong>
<pre><code class=\"lang-json\">{
 <span class=\"token string\">\"id\"</span>: <span class=\"token number\">123</span>,
 <span class=\"token string\">\"property2\"</span>: <span class=\"token string\">\"Lorem ipsum\"</span>,
 <span class=\"token string\">\"_embedded\"</span>: {
  <span class=\"token string\">\"object\"</span>: {
   <span class=\"token string\">\"id\"</span>: <span class=\"token number\">456</span>,
   <span class=\"token string\">\"property2\"</span>: <span class=\"token number\">7.89</span>,
   <span class=\"token string\">\"_links\"</span>: {
    <span class=\"token string\">\"self\"</span>: {
     <span class=\"token string\">\"href\"</span>: <span class=\"token string\">\"https://api.mydomain.com/other-item/456\"</span>
    }
   }
  }
 }
 <span class=\"token string\">\"_links\"</span>: {
  <span class=\"token string\">\"self\"</span>: {
   <span class=\"token string\">\"href\"</span>: <span class=\"token string\">\"https://api.mydomain.com/item/123\"</span>
  }
 }
}</code></pre>
 </div>
</div>

### Errors
Errors return JSON too and tries to match the [Problem Details for HTTP APIs specification](https://tools.ietf.org/html/rfc7807). If it does not match this spec, that's either a bug or a compatibility issue. Please contact us to solve the problem.

The `Content-Type` of errors will be `application/problem+json`. The content will match the following JSON:
```json
{
 \"type\": \"https://tools.ietf.org/html/rfc2616#section-10\",
    \"title\": \"Not Found\",
 \"status\": 404,
    \"detail\": \"Entity not found\"
}
```

## Versioning
The API is fully versionned, using an URL-versioning scheme: `https://demo.pims.io/api/v1/events`, `https://demo.pims.io/api/v2/events`,...

The version part of the URL is optional, and will be completed with the last stable version if omitted.

## Pagination
All responses corresponding to a collection of resources (e.g. `/venues` or `/series/:id/events`) are paginated. When so, you will only get the first 25 resources you asked for.

If you need to get more resources in one call, you can use the `page_size` query parameter. E.g. `/venues?page_size=50` to get the 50 first venues.

Also note that with HAL, the navigation in paginated responses is a piece of cake, as you can see below:
```json
{
 \"_links\": {
  \"self\": {
   \"href\": \"https://demo.pims.io/api/v1/events?page=1\"
  },
  \"first\": {
   \"href\": \"https://demo.pims.io/api/v1/events\"
  },
  \"last\": {
   \"href\": \"https://demo.pims.io/api/v1/events?page=14\"
  },
  \"next\": {
   \"href\": \"https://demo.pims.io/api/v1/events?page=2\"
  }
 },
 \"_embedded\": {
   ... // data content goes here
 },
 \"page_count\": 14,
 \"page_size\": 25,
 \"total_items\": 331,
 \"page\": 1
}
```

## Filtering and sorting
Every textual filter (e.g. `/events?label=U2`) and/or sort (e.g. `/events?sort=label`) performed with the API uses UTF8_UNICODE_CI collation, meaning it is:
- Case insensitive: “Chloé” will be considered the same as “CHLOÉ”;
- Diacritic insensitive: “Chloé” will be considered the same as “Chloe”.

When performing a sort, it will always be *ascending* by default. To make it *descending*, just use a minus sign (`-`) in front of the parameter value (e.g. `/events?sort=-label`).

## I18n
In responses, some labels can be translated (e.g. promotion types, event input types, etc.). These translatable labels are clearly indicated in the documentation below.

By default, they will be displayed in English, but you can change this behaviour via the `Accept-Language` header. E.g., use `fr` as a value for French.

## PHP SDK
We provide a simple yet convenient SDK for the PHP language, see [the Github page of the project](https://github.com/pimssas/pims-api-client-php).

## And now?
Generaly, you will start by [fetching one or more events](#tag/Events). An <span class=\"definition\">event</span> can be anything that occurs in one venue at one given date and time: a concert, a play, a match, a conference, etc. Additionnally, you can explore the [series](#tag/Series): a <span class=\"definition\">series</span> is just a group of events (e.g. a tour or a festival).

Once you retrieved the events you were interested in, you can look for the sales (<span class=\"definition\">ticket counts</span>):
- Get a quick overview with [`/events/:id/ticket-counts`](#operation/fetchAllTicketCounts)
- Or get a full insight by calling these endpoints:
    1. [`/events/:id/categories`](#operation/fetchAllEventsCategories)
    2. [`/events/:id/channels`](#operation/fetchAllEventsChannels)
    3. [`/events/:id/ticket-counts/detailed`](#operation/fetchAllDetailedTicketCounts)

Eventually, you may also want to fetch the [promotions](#tag/Promotions). A <span class=\"definition\">promotion</span> can be anything meant to leverage the sales: ads, marketing campaigns, buzz or news around the event, etc. A promotion can be linked to any combination of events and/or series.

This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0
- Package version: 1.0.0
- Generator version: 7.9.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

## Requirements.

Python 3.7+

## Installation & Usage
### pip install

If the python package is hosted on a repository, you can install directly using:

```sh
pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git`)

Then import the package:
```python
import openapi_client
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import openapi_client
```

### Tests

Execute `pytest` to run the tests.

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.pims.io/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.pims.io/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: Basic Auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CapacitiesApi(api_client)
    event_id = 56 # int | ID of the targeted event.
    show_ignored = False # bool | If set to `false`, show only the [event-]categories which are not ignored. If set to `true`, show everything. (optional) (default to False)
    sort = date # str | Sort the capacities in the corresponding order. (optional) (default to date)
    page_size = 25 # int | Pagination size, i.e. maximum number of items to be displayed in the response. (optional) (default to 25)

    try:
        # Find all capacities for one event
        api_response = api_instance.fetch_all_events_capacities(event_id, show_ignored=show_ignored, sort=sort, page_size=page_size)
        print("The response of CapacitiesApi->fetch_all_events_capacities:\n")
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CapacitiesApi->fetch_all_events_capacities: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *https://demo.pims.io/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CapacitiesApi* | [**fetch_all_events_capacities**](docs/CapacitiesApi.md#fetch_all_events_capacities) | **GET** /events/{event_id}/capacities | Find all capacities for one event
*CapacitiesApi* | [**fetch_one_event_capacity**](docs/CapacitiesApi.md#fetch_one_event_capacity) | **GET** /events/{event_id}/capacities/{capacity_id} | Get one capacity by ID
*CategoriesApi* | [**fetch_all_categories**](docs/CategoriesApi.md#fetch_all_categories) | **GET** /categories | Find all categories
*CategoriesApi* | [**fetch_all_events_categories**](docs/CategoriesApi.md#fetch_all_events_categories) | **GET** /events/{event_id}/categories | Find all categories for one event
*CategoriesApi* | [**fetch_one_category**](docs/CategoriesApi.md#fetch_one_category) | **GET** /categories/{category_id} | Get one category by ID
*CategoriesApi* | [**fetch_one_event_category**](docs/CategoriesApi.md#fetch_one_event_category) | **GET** /events/{event_id}/categories/{category_id} | Get one event category by ID
*ChannelsApi* | [**fetch_all_channels**](docs/ChannelsApi.md#fetch_all_channels) | **GET** /channels | Find all channels
*ChannelsApi* | [**fetch_all_events_channels**](docs/ChannelsApi.md#fetch_all_events_channels) | **GET** /events/{event_id}/channels | Find all channels for one event
*ChannelsApi* | [**fetch_one_channel**](docs/ChannelsApi.md#fetch_one_channel) | **GET** /channels/{channel_id} | Get one channel by ID
*ChannelsApi* | [**fetch_one_event_channel**](docs/ChannelsApi.md#fetch_one_event_channel) | **GET** /events/{event_id}/channels/{channel_id} | Get one event channel by ID
*CountsApi* | [**fetch_all_detailed_ticket_counts**](docs/CountsApi.md#fetch_all_detailed_ticket_counts) | **GET** /events/{event_id}/ticket-counts/detailed | Find all detailed ticket counts for one event
*CountsApi* | [**fetch_all_ticket_counts**](docs/CountsApi.md#fetch_all_ticket_counts) | **GET** /events/{event_id}/ticket-counts | Find all ticket counts for one event
*CountsApi* | [**fetch_one_detailed_ticket_count**](docs/CountsApi.md#fetch_one_detailed_ticket_count) | **GET** /events/{event_id}/ticket-counts/detailed/{ticket_count_id} | Get one detailed ticket count by ID
*CountsApi* | [**fetch_one_ticket_count**](docs/CountsApi.md#fetch_one_ticket_count) | **GET** /events/{event_id}/ticket-counts/{ticket_count_id} | Get one ticket count by ID
*EventsApi* | [**fetch_all_events**](docs/EventsApi.md#fetch_all_events) | **GET** /events | Find all events
*EventsApi* | [**fetch_all_series_events**](docs/EventsApi.md#fetch_all_series_events) | **GET** /series/{series_id}/events | Find all events for one series
*EventsApi* | [**fetch_all_venues_events**](docs/EventsApi.md#fetch_all_venues_events) | **GET** /venues/{venue_id}/events | Find all events for one venue
*EventsApi* | [**fetch_one_event**](docs/EventsApi.md#fetch_one_event) | **GET** /events/{event_id} | Get one event by ID
*PriceRangesApi* | [**fetch_all_price_ranges**](docs/PriceRangesApi.md#fetch_all_price_ranges) | **GET** /price-ranges | Find all price ranges
*PriceRangesApi* | [**fetch_one_price_range**](docs/PriceRangesApi.md#fetch_one_price_range) | **GET** /price-ranges/{price_range_id} | Get one price range by ID
*PromotionsApi* | [**fetch_all_events_promotions**](docs/PromotionsApi.md#fetch_all_events_promotions) | **GET** /events/{event_id}/promotions | Find all promotions for one event
*PromotionsApi* | [**fetch_all_promotions**](docs/PromotionsApi.md#fetch_all_promotions) | **GET** /promotions | Find all promotions
*PromotionsApi* | [**fetch_all_series_promotions**](docs/PromotionsApi.md#fetch_all_series_promotions) | **GET** /series/{series_id}/promotions | Find all promotions for one series
*PromotionsApi* | [**fetch_one_promotion**](docs/PromotionsApi.md#fetch_one_promotion) | **GET** /promotions/{promotion_id} | Get one promotion by ID
*SeriesApi* | [**fetch_all_series**](docs/SeriesApi.md#fetch_all_series) | **GET** /series | Find all series
*SeriesApi* | [**fetch_one_series**](docs/SeriesApi.md#fetch_one_series) | **GET** /series/{series_id} | Get one series by ID
*VenuesApi* | [**fetch_all_venues**](docs/VenuesApi.md#fetch_all_venues) | **GET** /venues | Find all venues
*VenuesApi* | [**fetch_one_venue**](docs/VenuesApi.md#fetch_one_venue) | **GET** /venues/{venue_id} | Get one venue by ID


## Documentation For Models

 - [CategoriesEntity](docs/CategoriesEntity.md)
 - [ChannelsEntity](docs/ChannelsEntity.md)
 - [Error401](docs/Error401.md)
 - [Error403](docs/Error403.md)
 - [Error404](docs/Error404.md)
 - [Error422](docs/Error422.md)
 - [Error500](docs/Error500.md)
 - [EventsCapacitiesEntity](docs/EventsCapacitiesEntity.md)
 - [EventsCapacitiesEntityEventCategoriesInner](docs/EventsCapacitiesEntityEventCategoriesInner.md)
 - [EventsCategoriesEntity](docs/EventsCategoriesEntity.md)
 - [EventsCategoriesEntityEventPriceRangesInner](docs/EventsCategoriesEntityEventPriceRangesInner.md)
 - [EventsChannelsEntity](docs/EventsChannelsEntity.md)
 - [EventsEntity](docs/EventsEntity.md)
 - [EventsEntityContract](docs/EventsEntityContract.md)
 - [EventsEntityContractPartner](docs/EventsEntityContractPartner.md)
 - [EventsEntityContractType](docs/EventsEntityContractType.md)
 - [EventsEntityInputType](docs/EventsEntityInputType.md)
 - [PriceRangesEntity](docs/PriceRangesEntity.md)
 - [PromotionsEntity](docs/PromotionsEntity.md)
 - [PromotionsEntityAppliedToInner](docs/PromotionsEntityAppliedToInner.md)
 - [PromotionsEntityCost](docs/PromotionsEntityCost.md)
 - [PromotionsEntityCostState](docs/PromotionsEntityCostState.md)
 - [PromotionsEntityCostType](docs/PromotionsEntityCostType.md)
 - [PromotionsEntitySupplier](docs/PromotionsEntitySupplier.md)
 - [PromotionsEntityType](docs/PromotionsEntityType.md)
 - [PromotionsEntityTypeFamily](docs/PromotionsEntityTypeFamily.md)
 - [SeriesEntity](docs/SeriesEntity.md)
 - [SeriesEntityContract](docs/SeriesEntityContract.md)
 - [SeriesEntityContractPartner](docs/SeriesEntityContractPartner.md)
 - [SeriesEntityContractType](docs/SeriesEntityContractType.md)
 - [SeriesEntityType](docs/SeriesEntityType.md)
 - [TicketCountsDetailedEntity](docs/TicketCountsDetailedEntity.md)
 - [TicketCountsDetailedEntityEventChannelsInner](docs/TicketCountsDetailedEntityEventChannelsInner.md)
 - [TicketCountsDetailedEntityEventChannelsInnerEventCategoriesInner](docs/TicketCountsDetailedEntityEventChannelsInnerEventCategoriesInner.md)
 - [TicketCountsDetailedEntityEventChannelsInnerEventCategoriesInnerEventPriceRangesInner](docs/TicketCountsDetailedEntityEventChannelsInnerEventCategoriesInnerEventPriceRangesInner.md)
 - [TicketCountsEntity](docs/TicketCountsEntity.md)
 - [VenuesEntity](docs/VenuesEntity.md)
 - [VenuesEntityType](docs/VenuesEntityType.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="Basic Auth"></a>
### Basic Auth

- **Type**: HTTP basic authentication


## Author

support@pims.io


