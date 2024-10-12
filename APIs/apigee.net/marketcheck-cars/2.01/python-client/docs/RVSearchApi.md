# openapi_client.RVSearchApi

All URIs are relative to *https://marketcheck-prod.apigee.net/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listing_rv_id_extra_get**](RVSearchApi.md#listing_rv_id_extra_get) | **GET** /listing/rv/{id}/extra | Long text RV Listings attributes for Listing with the given id
[**listing_rv_id_get**](RVSearchApi.md#listing_rv_id_get) | **GET** /listing/rv/{id} | RV listing by id
[**listing_rv_id_media_get**](RVSearchApi.md#listing_rv_id_media_get) | **GET** /listing/rv/{id}/media | Listing media by id
[**listing_rv_uk_id_extra_get**](RVSearchApi.md#listing_rv_uk_id_extra_get) | **GET** /listing/rv/uk/{id}/extra | Long text RV Listings attributes for Listing with the given id
[**listing_rv_uk_id_get**](RVSearchApi.md#listing_rv_uk_id_get) | **GET** /listing/rv/uk/{id} | RV listing by id
[**listing_rv_uk_id_media_get**](RVSearchApi.md#listing_rv_uk_id_media_get) | **GET** /listing/rv/uk/{id}/media | Listing media by id
[**search_rv_active_get**](RVSearchApi.md#search_rv_active_get) | **GET** /search/rv/active | Gets active RV listings for the given search criteria
[**search_rv_auto_complete_get**](RVSearchApi.md#search_rv_auto_complete_get) | **GET** /search/rv/auto-complete | API for auto-completion of inputs
[**search_rv_uk_active_get**](RVSearchApi.md#search_rv_uk_active_get) | **GET** /search/rv/uk/active | Gets active RV listings for the given search criteria


# **listing_rv_id_extra_get**
> ListingExtraAttributes listing_rv_id_extra_get(id, api_key=api_key)

Long text RV Listings attributes for Listing with the given id

Get RV listing options, features, seller comments

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.listing_extra_attributes import ListingExtraAttributes
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketcheck-prod.apigee.net/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketcheck-prod.apigee.net/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: authorizeEndpoint
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RVSearchApi(api_client)
    id = 'id_example' # str | Listing id to get all the listing attributes
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)

    try:
        # Long text RV Listings attributes for Listing with the given id
        api_response = api_instance.listing_rv_id_extra_get(id, api_key=api_key)
        print("The response of RVSearchApi->listing_rv_id_extra_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RVSearchApi->listing_rv_id_extra_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Listing id to get all the listing attributes | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**ListingExtraAttributes**](ListingExtraAttributes.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RV ListingAttributes for the given listing id |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listing_rv_id_get**
> RVListing listing_rv_id_get(id, api_key=api_key)

RV listing by id

Get a particular RV listing by its id

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.rv_listing import RVListing
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketcheck-prod.apigee.net/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketcheck-prod.apigee.net/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: authorizeEndpoint
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RVSearchApi(api_client)
    id = 'id_example' # str | Listing id to get all the listing attributes
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)

    try:
        # RV listing by id
        api_response = api_instance.listing_rv_id_get(id, api_key=api_key)
        print("The response of RVSearchApi->listing_rv_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RVSearchApi->listing_rv_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Listing id to get all the listing attributes | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**RVListing**](RVListing.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RV listing for the given id |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listing_rv_id_media_get**
> ListingMedia listing_rv_id_media_get(id, api_key=api_key)

Listing media by id

Get listing media (photo, photos) by id

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.listing_media import ListingMedia
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketcheck-prod.apigee.net/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketcheck-prod.apigee.net/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: authorizeEndpoint
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RVSearchApi(api_client)
    id = 'id_example' # str | Listing id to get all the listing attributes
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)

    try:
        # Listing media by id
        api_response = api_instance.listing_rv_id_media_get(id, api_key=api_key)
        print("The response of RVSearchApi->listing_rv_id_media_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RVSearchApi->listing_rv_id_media_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Listing id to get all the listing attributes | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**ListingMedia**](ListingMedia.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Listing Media for the given listing id |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listing_rv_uk_id_extra_get**
> ListingExtraAttributes listing_rv_uk_id_extra_get(id, api_key=api_key)

Long text RV Listings attributes for Listing with the given id

Get RV listing options, features, seller comments

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.listing_extra_attributes import ListingExtraAttributes
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketcheck-prod.apigee.net/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketcheck-prod.apigee.net/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: authorizeEndpoint
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RVSearchApi(api_client)
    id = 'id_example' # str | Listing id to get all the listing attributes
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)

    try:
        # Long text RV Listings attributes for Listing with the given id
        api_response = api_instance.listing_rv_uk_id_extra_get(id, api_key=api_key)
        print("The response of RVSearchApi->listing_rv_uk_id_extra_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RVSearchApi->listing_rv_uk_id_extra_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Listing id to get all the listing attributes | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**ListingExtraAttributes**](ListingExtraAttributes.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RV ListingAttributes for the given listing id |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listing_rv_uk_id_get**
> RVListing listing_rv_uk_id_get(id, api_key=api_key)

RV listing by id

Get a particular RV listing by its id

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.rv_listing import RVListing
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketcheck-prod.apigee.net/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketcheck-prod.apigee.net/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: authorizeEndpoint
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RVSearchApi(api_client)
    id = 'id_example' # str | Listing id to get all the listing attributes
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)

    try:
        # RV listing by id
        api_response = api_instance.listing_rv_uk_id_get(id, api_key=api_key)
        print("The response of RVSearchApi->listing_rv_uk_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RVSearchApi->listing_rv_uk_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Listing id to get all the listing attributes | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**RVListing**](RVListing.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RV listing for the given id |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listing_rv_uk_id_media_get**
> ListingMedia listing_rv_uk_id_media_get(id, api_key=api_key)

Listing media by id

Get listing media (photo, photos) by id

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.listing_media import ListingMedia
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketcheck-prod.apigee.net/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketcheck-prod.apigee.net/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: authorizeEndpoint
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RVSearchApi(api_client)
    id = 'id_example' # str | Listing id to get all the listing attributes
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)

    try:
        # Listing media by id
        api_response = api_instance.listing_rv_uk_id_media_get(id, api_key=api_key)
        print("The response of RVSearchApi->listing_rv_uk_id_media_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RVSearchApi->listing_rv_uk_id_media_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Listing id to get all the listing attributes | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**ListingMedia**](ListingMedia.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Listing Media for the given listing id |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_rv_active_get**
> RVSearchResponse search_rv_active_get(api_key=api_key, price_range=price_range, miles_range=miles_range, msrp_range=msrp_range, year_range=year_range, search_text=search_text, latitude=latitude, longitude=longitude, radius=radius, year=year, make=make, model=model, model_o=model_o, vin=vin, inventory_type=inventory_type, stock_no=stock_no, source=source, dealer_name=dealer_name, dealer_id=dealer_id, exterior_color=exterior_color, interior_color=interior_color, engine=engine, fuel_type=fuel_type, transmission=transmission, var_class=var_class, state=state, city=city, zip=zip, msa_code=msa_code, sort_by=sort_by, sort_order=sort_order, rows=rows, start=start, facets=facets, range_facets=range_facets, facet_sort=facet_sort, stats=stats, last_seen_range=last_seen_range, first_seen_range=first_seen_range, last_seen_days=last_seen_days, first_seen_days=first_seen_days, slideouts=slideouts, length_range=length_range, length=length, base_exterior_color=base_exterior_color, base_interior_color=base_interior_color, seating_capacity=seating_capacity, fresh_water_capacity=fresh_water_capacity, sleeps=sleeps, cylinders=cylinders, number_of_awnings=number_of_awnings, doors=doors, gvwr=gvwr)

Gets active RV listings for the given search criteria

This endpoint provides search on RV inventory. This API produces a list of currently active RV from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows.   The search API facilitates the following use cases -  1. Search RV around a given geo-point within a given radius  2. Search RV for a specific year / make / model or combination of these  3. Search RV matching multiple year, make, model combinatins in the same search request 4. Filter results by most RV specification attributes 5. Filter RV within a given price / miles range 6. Specify a sort order for the results on price / miles / listed date  7. Search RV for a given City / State combination  8. Get Facets to build the search drill downs  9. Get Market averages for price/miles for your search

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.rv_search_response import RVSearchResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketcheck-prod.apigee.net/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketcheck-prod.apigee.net/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: authorizeEndpoint
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RVSearchApi(api_client)
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    price_range = 'price_range_example' # str | Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    miles_range = 'miles_range_example' # str | Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    msrp_range = 'msrp_range_example' # str | MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    year_range = 'year_range_example' # str | Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 (optional)
    search_text = 'search_text_example' # str | To search a substring across entire document (optional)
    latitude = 3.4 # float | Latitude component of location (optional)
    longitude = 3.4 # float | Longitude component of location (optional)
    radius = 56 # int | Radius around the search location (Unit - Miles) (optional)
    year = 'year_example' # str | To filter listing on their year (optional)
    make = 'make_example' # str | To filter listings on their make (optional)
    model = 'model_example' # str | To filter listings on their model (optional)
    model_o = 'model_o_example' # str | To filter listings on their model orig (as described on the webpage) (optional)
    vin = 'vin_example' # str | To filter listing on their VIN (optional)
    inventory_type = 'inventory_type_example' # str | To filter listing on their condition. Either used or new (optional)
    stock_no = 'stock_no_example' # str | To filter listing on their stock number on lot (optional)
    source = 'source_example' # str | To filter listing on their source (optional)
    dealer_name = 'dealer_name_example' # str | Filter listings on dealer_name (optional)
    dealer_id = 'dealer_id_example' # str | Dealer id to filter the listings. (optional)
    exterior_color = 'exterior_color_example' # str | Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated (optional)
    interior_color = 'interior_color_example' # str | Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated (optional)
    engine = 'engine_example' # str | To filter listing on their engine (optional)
    fuel_type = 'fuel_type_example' # str | To filter listing on their fuel type (optional)
    transmission = 'transmission_example' # str | To filter listing on their transmission (optional)
    var_class = 'var_class_example' # str | Filter RV listings on class (optional)
    state = 'state_example' # str | To filter listing on State in which they are listed (optional)
    city = 'city_example' # str | To filter listing on City in which they are listed (optional)
    zip = 'zip_example' # str | To filter listing on ZIP around which they are listed (optional)
    msa_code = 'msa_code_example' # str | To filter listing on msa code in which they are listed (optional)
    sort_by = 'sort_by_example' # str | Sort by field. Default sort field is distance from the given point (optional)
    sort_order = 'sort_order_example' # str | Sort order - asc or desc. Default sort order is asc (optional)
    rows = 10 # int | Number of results to return. Default is 10. Max is 50 (optional) (default to 10)
    start = 0 # int | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
    facets = 'facets_example' # str | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional)
    range_facets = 'range_facets_example' # str | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional)
    facet_sort = count # str | Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param (optional) (default to count)
    stats = 'stats_example' # str | The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. (optional)
    last_seen_range = 'last_seen_range_example' # str | Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    first_seen_range = 'first_seen_range_example' # str | First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    last_seen_days = 'last_seen_days_example' # str | Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional)
    first_seen_days = 'first_seen_days_example' # str | First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional)
    slideouts = 'slideouts_example' # str | Filter RV listings on slideouts (optional)
    length_range = 'length_range_example' # str | length range to filter listings with the length in the range given. Range to be given in the format - min-max e.g. 50-200 (optional)
    length = 'length_example' # str | Filter RV listings on length (optional)
    base_exterior_color = 'base_exterior_color_example' # str | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional)
    base_interior_color = 'base_interior_color_example' # str | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional)
    seating_capacity = 'seating_capacity_example' # str | To filter on vehicle seating capacity (optional)
    fresh_water_capacity = 'fresh_water_capacity_example' # str | To filter on fresh water capacity of vehicle (optional)
    sleeps = 'sleeps_example' # str | To filter data based on sleeps (optional)
    cylinders = 'cylinders_example' # str | To filter listing on their cylinders (optional)
    number_of_awnings = 'number_of_awnings_example' # str | To filter on number_of_awnings (optional)
    doors = 'doors_example' # str | Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated (optional)
    gvwr = 'gvwr_example' # str | To filter on the maximum total weight of your vehicle (optional)

    try:
        # Gets active RV listings for the given search criteria
        api_response = api_instance.search_rv_active_get(api_key=api_key, price_range=price_range, miles_range=miles_range, msrp_range=msrp_range, year_range=year_range, search_text=search_text, latitude=latitude, longitude=longitude, radius=radius, year=year, make=make, model=model, model_o=model_o, vin=vin, inventory_type=inventory_type, stock_no=stock_no, source=source, dealer_name=dealer_name, dealer_id=dealer_id, exterior_color=exterior_color, interior_color=interior_color, engine=engine, fuel_type=fuel_type, transmission=transmission, var_class=var_class, state=state, city=city, zip=zip, msa_code=msa_code, sort_by=sort_by, sort_order=sort_order, rows=rows, start=start, facets=facets, range_facets=range_facets, facet_sort=facet_sort, stats=stats, last_seen_range=last_seen_range, first_seen_range=first_seen_range, last_seen_days=last_seen_days, first_seen_days=first_seen_days, slideouts=slideouts, length_range=length_range, length=length, base_exterior_color=base_exterior_color, base_interior_color=base_interior_color, seating_capacity=seating_capacity, fresh_water_capacity=fresh_water_capacity, sleeps=sleeps, cylinders=cylinders, number_of_awnings=number_of_awnings, doors=doors, gvwr=gvwr)
        print("The response of RVSearchApi->search_rv_active_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RVSearchApi->search_rv_active_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **price_range** | **str**| Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **miles_range** | **str**| Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **msrp_range** | **str**| MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **year_range** | **str**| Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 | [optional] 
 **search_text** | **str**| To search a substring across entire document | [optional] 
 **latitude** | **float**| Latitude component of location | [optional] 
 **longitude** | **float**| Longitude component of location | [optional] 
 **radius** | **int**| Radius around the search location (Unit - Miles) | [optional] 
 **year** | **str**| To filter listing on their year | [optional] 
 **make** | **str**| To filter listings on their make | [optional] 
 **model** | **str**| To filter listings on their model | [optional] 
 **model_o** | **str**| To filter listings on their model orig (as described on the webpage) | [optional] 
 **vin** | **str**| To filter listing on their VIN | [optional] 
 **inventory_type** | **str**| To filter listing on their condition. Either used or new | [optional] 
 **stock_no** | **str**| To filter listing on their stock number on lot | [optional] 
 **source** | **str**| To filter listing on their source | [optional] 
 **dealer_name** | **str**| Filter listings on dealer_name | [optional] 
 **dealer_id** | **str**| Dealer id to filter the listings. | [optional] 
 **exterior_color** | **str**| Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated | [optional] 
 **interior_color** | **str**| Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated | [optional] 
 **engine** | **str**| To filter listing on their engine | [optional] 
 **fuel_type** | **str**| To filter listing on their fuel type | [optional] 
 **transmission** | **str**| To filter listing on their transmission | [optional] 
 **var_class** | **str**| Filter RV listings on class | [optional] 
 **state** | **str**| To filter listing on State in which they are listed | [optional] 
 **city** | **str**| To filter listing on City in which they are listed | [optional] 
 **zip** | **str**| To filter listing on ZIP around which they are listed | [optional] 
 **msa_code** | **str**| To filter listing on msa code in which they are listed | [optional] 
 **sort_by** | **str**| Sort by field. Default sort field is distance from the given point | [optional] 
 **sort_order** | **str**| Sort order - asc or desc. Default sort order is asc | [optional] 
 **rows** | **int**| Number of results to return. Default is 10. Max is 50 | [optional] [default to 10]
 **start** | **int**| Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | [optional] [default to 0]
 **facets** | **str**| The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | [optional] 
 **range_facets** | **str**| The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | [optional] 
 **facet_sort** | **str**| Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param | [optional] [default to count]
 **stats** | **str**| The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. | [optional] 
 **last_seen_range** | **str**| Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **first_seen_range** | **str**| First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **last_seen_days** | **str**| Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 | [optional] 
 **first_seen_days** | **str**| First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 | [optional] 
 **slideouts** | **str**| Filter RV listings on slideouts | [optional] 
 **length_range** | **str**| length range to filter listings with the length in the range given. Range to be given in the format - min-max e.g. 50-200 | [optional] 
 **length** | **str**| Filter RV listings on length | [optional] 
 **base_exterior_color** | **str**| Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | [optional] 
 **base_interior_color** | **str**| Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | [optional] 
 **seating_capacity** | **str**| To filter on vehicle seating capacity | [optional] 
 **fresh_water_capacity** | **str**| To filter on fresh water capacity of vehicle | [optional] 
 **sleeps** | **str**| To filter data based on sleeps | [optional] 
 **cylinders** | **str**| To filter listing on their cylinders | [optional] 
 **number_of_awnings** | **str**| To filter on number_of_awnings | [optional] 
 **doors** | **str**| Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated | [optional] 
 **gvwr** | **str**| To filter on the maximum total weight of your vehicle | [optional] 

### Return type

[**RVSearchResponse**](RVSearchResponse.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of all RV listings matching the search &amp; filter criteria |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_rv_auto_complete_get**
> SearchAutoCompleteResponse search_rv_auto_complete_get(var_field, input, api_key=api_key, year=year, make=make, model=model, trim=trim, body_type=body_type, vehicle_type=vehicle_type, transmission=transmission, drivetrain=drivetrain, fuel_type=fuel_type, color=color, engine=engine, state=state, city=city, inventory_type=inventory_type, ignore_case=ignore_case, term_counts=term_counts, sort_by=sort_by, seller_type=seller_type, radius=radius, zip=zip, facet_min_count=facet_min_count)

API for auto-completion of inputs

Auto-complete the inputs of your end users

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.search_auto_complete_response import SearchAutoCompleteResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketcheck-prod.apigee.net/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketcheck-prod.apigee.net/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: authorizeEndpoint
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RVSearchApi(api_client)
    var_field = 'var_field_example' # str | Field name for which you want auto-completion
    input = 'input_example' # str | Input entered so far
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    year = 'year_example' # str | To filter listing on their year (optional)
    make = 'make_example' # str | To filter listings on their make (optional)
    model = 'model_example' # str | To filter listings on their model (optional)
    trim = 'trim_example' # str | To filter listing on their trim (optional)
    body_type = 'body_type_example' # str | To filter listing on their body type (optional)
    vehicle_type = 'vehicle_type_example' # str | To filter listing on their vehicle type (optional)
    transmission = 'transmission_example' # str | To filter listing on their transmission (optional)
    drivetrain = 'drivetrain_example' # str | To filter listing on their drivetrain (optional)
    fuel_type = 'fuel_type_example' # str | To filter listing on their fuel type (optional)
    color = 'color_example' # str | Color of the vehicle (optional)
    engine = 'engine_example' # str | To filter listing on their engine (optional)
    state = 'state_example' # str | To filter listing on State in which they are listed (optional)
    city = 'city_example' # str | To filter listing on City in which they are listed (optional)
    inventory_type = 'inventory_type_example' # str | To filter listing on their condition. Either used or new (optional)
    ignore_case = True # bool | Boolean variable to indicate ignore case of current input (optional) (default to True)
    term_counts = False # bool | Boolean variable to indicate wheather to include term counts as well in response (optional) (default to False)
    sort_by = index # str | Sort the response, either by index or count(default) (optional) (default to index)
    seller_type = 'seller_type_example' # str | seller type for autocomplete (optional)
    radius = 56 # int | Radius around the search location (Unit - Miles) (optional)
    zip = 'zip_example' # str | To filter listing on ZIP around which they are listed (optional)
    facet_min_count = 1 # float | Provide minimum count value for facets (optional) (default to 1)

    try:
        # API for auto-completion of inputs
        api_response = api_instance.search_rv_auto_complete_get(var_field, input, api_key=api_key, year=year, make=make, model=model, trim=trim, body_type=body_type, vehicle_type=vehicle_type, transmission=transmission, drivetrain=drivetrain, fuel_type=fuel_type, color=color, engine=engine, state=state, city=city, inventory_type=inventory_type, ignore_case=ignore_case, term_counts=term_counts, sort_by=sort_by, seller_type=seller_type, radius=radius, zip=zip, facet_min_count=facet_min_count)
        print("The response of RVSearchApi->search_rv_auto_complete_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RVSearchApi->search_rv_auto_complete_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_field** | **str**| Field name for which you want auto-completion | 
 **input** | **str**| Input entered so far | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **year** | **str**| To filter listing on their year | [optional] 
 **make** | **str**| To filter listings on their make | [optional] 
 **model** | **str**| To filter listings on their model | [optional] 
 **trim** | **str**| To filter listing on their trim | [optional] 
 **body_type** | **str**| To filter listing on their body type | [optional] 
 **vehicle_type** | **str**| To filter listing on their vehicle type | [optional] 
 **transmission** | **str**| To filter listing on their transmission | [optional] 
 **drivetrain** | **str**| To filter listing on their drivetrain | [optional] 
 **fuel_type** | **str**| To filter listing on their fuel type | [optional] 
 **color** | **str**| Color of the vehicle | [optional] 
 **engine** | **str**| To filter listing on their engine | [optional] 
 **state** | **str**| To filter listing on State in which they are listed | [optional] 
 **city** | **str**| To filter listing on City in which they are listed | [optional] 
 **inventory_type** | **str**| To filter listing on their condition. Either used or new | [optional] 
 **ignore_case** | **bool**| Boolean variable to indicate ignore case of current input | [optional] [default to True]
 **term_counts** | **bool**| Boolean variable to indicate wheather to include term counts as well in response | [optional] [default to False]
 **sort_by** | **str**| Sort the response, either by index or count(default) | [optional] [default to index]
 **seller_type** | **str**| seller type for autocomplete | [optional] 
 **radius** | **int**| Radius around the search location (Unit - Miles) | [optional] 
 **zip** | **str**| To filter listing on ZIP around which they are listed | [optional] 
 **facet_min_count** | **float**| Provide minimum count value for facets | [optional] [default to 1]

### Return type

[**SearchAutoCompleteResponse**](SearchAutoCompleteResponse.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Unique terms available in given field for auto completion |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_rv_uk_active_get**
> UKRVSearchResponse search_rv_uk_active_get(api_key=api_key, price_range=price_range, miles_range=miles_range, msrp_range=msrp_range, year_range=year_range, search_text=search_text, latitude=latitude, longitude=longitude, radius=radius, year=year, make=make, model=model, vin=vin, source=source, dealer_name=dealer_name, dealer_id=dealer_id, exterior_color=exterior_color, interior_color=interior_color, engine_size=engine_size, fuel_type=fuel_type, category=category, state=state, city=city, county=county, postal_code=postal_code, zip=zip, sort_by=sort_by, sort_order=sort_order, rows=rows, start=start, facets=facets, range_facets=range_facets, facet_sort=facet_sort, stats=stats, last_seen_range=last_seen_range, first_seen_range=first_seen_range, last_seen_days=last_seen_days, first_seen_days=first_seen_days, base_exterior_color=base_exterior_color, base_interior_color=base_interior_color, seating_capacity=seating_capacity, cylinders=cylinders, doors=doors, mtplm=mtplm, sub_category=sub_category, availability_status=availability_status, berths=berths, inventory_type=inventory_type, width_range=width_range, exterior_length_range=exterior_length_range, interior_length_range=interior_length_range, drive_type=drive_type, steering=steering, chassis=chassis, transmission=transmission)

Gets active RV listings for the given search criteria

This endpoint provides search on RV inventory. This API produces a list of currently active RV from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows.   The search API facilitates the following use cases -  1. Search RV around a given geo-point within a given radius  2. Search RV for a specific year / make / model or combination of these  3. Search RV matching multiple year, make, model combinatins in the same search request 4. Filter results by most RV specification attributes 5. Filter RV within a given price / miles range 6. Specify a sort order for the results on price / miles / listed date  7. Search RV for a given City / State combination  8. Get Facets to build the search drill downs  9. Get Market averages for price/miles for your search

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.ukrv_search_response import UKRVSearchResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketcheck-prod.apigee.net/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketcheck-prod.apigee.net/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: authorizeEndpoint
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RVSearchApi(api_client)
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    price_range = 'price_range_example' # str | Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    miles_range = 'miles_range_example' # str | Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    msrp_range = 'msrp_range_example' # str | MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    year_range = 'year_range_example' # str | Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 (optional)
    search_text = 'search_text_example' # str | To search a substring across entire document (optional)
    latitude = 3.4 # float | Latitude component of location (optional)
    longitude = 3.4 # float | Longitude component of location (optional)
    radius = 56 # int | Radius around the search location (Unit - Miles) (optional)
    year = 'year_example' # str | To filter listing on their year (optional)
    make = 'make_example' # str | To filter listings on their make (optional)
    model = 'model_example' # str | To filter listings on their model (optional)
    vin = 'vin_example' # str | To filter listing on their VIN (optional)
    source = 'source_example' # str | To filter listing on their source (optional)
    dealer_name = 'dealer_name_example' # str | Filter listings on dealer_name (optional)
    dealer_id = 'dealer_id_example' # str | Dealer id to filter the listings. (optional)
    exterior_color = 'exterior_color_example' # str | Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated (optional)
    interior_color = 'interior_color_example' # str | Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated (optional)
    engine_size = 'engine_size_example' # str | Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated (optional)
    fuel_type = 'fuel_type_example' # str | To filter listing on their fuel type (optional)
    category = 'category_example' # str | Filter RV listings on category (optional)
    state = 'state_example' # str | To filter listing on State in which they are listed (optional)
    city = 'city_example' # str | To filter listing on City in which they are listed (optional)
    county = 'county_example' # str | To filter listing on county in which they are listed (optional)
    postal_code = 'postal_code_example' # str | To filter listing on postal code around which they are listed (optional)
    zip = 'zip_example' # str | To filter listing on ZIP around which they are listed (optional)
    sort_by = 'sort_by_example' # str | Sort by field. Default sort field is distance from the given point (optional)
    sort_order = 'sort_order_example' # str | Sort order - asc or desc. Default sort order is asc (optional)
    rows = 10 # int | Number of results to return. Default is 10. Max is 50 (optional) (default to 10)
    start = 0 # int | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
    facets = 'facets_example' # str | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional)
    range_facets = 'range_facets_example' # str | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional)
    facet_sort = count # str | Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param (optional) (default to count)
    stats = 'stats_example' # str | The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. (optional)
    last_seen_range = 'last_seen_range_example' # str | Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    first_seen_range = 'first_seen_range_example' # str | First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    last_seen_days = 'last_seen_days_example' # str | Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional)
    first_seen_days = 'first_seen_days_example' # str | First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional)
    base_exterior_color = 'base_exterior_color_example' # str | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional)
    base_interior_color = 'base_interior_color_example' # str | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional)
    seating_capacity = 'seating_capacity_example' # str | To filter on vehicle seating capacity (optional)
    cylinders = 'cylinders_example' # str | To filter listing on their cylinders (optional)
    doors = 'doors_example' # str | Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated (optional)
    mtplm = 'mtplm_example' # str | To filter rv on mtplm (optional)
    sub_category = 'sub_category_example' # str | To filter rv on their sub-category (optional)
    availability_status = 'availability_status_example' # str | To filter rv on their availability_status (optional)
    berths = 'berths_example' # str | To filter rv on their berths (optional)
    inventory_type = 'inventory_type_example' # str | To filter listing on their condition. Either used or new (optional)
    width_range = 'width_range_example' # str | width range to filter listings on width in the range given. Range to be given in the format - min-max e.g. 4-8 (optional)
    exterior_length_range = 'exterior_length_range_example' # str | width range to filter listings on exterior_length in the range given. Range to be given in the format - min-max e.g. 4-8 (optional)
    interior_length_range = 'interior_length_range_example' # str | width range to filter listings on interior_length in the range given. Range to be given in the format - min-max e.g. 4-8 (optional)
    drive_type = 'drive_type_example' # str | To filter rv on their drive_type (optional)
    steering = 'steering_example' # str | To filter rv on their steering (optional)
    chassis = 'chassis_example' # str | To filter rv on their chassis (optional)
    transmission = 'transmission_example' # str | To filter listing on their transmission (optional)

    try:
        # Gets active RV listings for the given search criteria
        api_response = api_instance.search_rv_uk_active_get(api_key=api_key, price_range=price_range, miles_range=miles_range, msrp_range=msrp_range, year_range=year_range, search_text=search_text, latitude=latitude, longitude=longitude, radius=radius, year=year, make=make, model=model, vin=vin, source=source, dealer_name=dealer_name, dealer_id=dealer_id, exterior_color=exterior_color, interior_color=interior_color, engine_size=engine_size, fuel_type=fuel_type, category=category, state=state, city=city, county=county, postal_code=postal_code, zip=zip, sort_by=sort_by, sort_order=sort_order, rows=rows, start=start, facets=facets, range_facets=range_facets, facet_sort=facet_sort, stats=stats, last_seen_range=last_seen_range, first_seen_range=first_seen_range, last_seen_days=last_seen_days, first_seen_days=first_seen_days, base_exterior_color=base_exterior_color, base_interior_color=base_interior_color, seating_capacity=seating_capacity, cylinders=cylinders, doors=doors, mtplm=mtplm, sub_category=sub_category, availability_status=availability_status, berths=berths, inventory_type=inventory_type, width_range=width_range, exterior_length_range=exterior_length_range, interior_length_range=interior_length_range, drive_type=drive_type, steering=steering, chassis=chassis, transmission=transmission)
        print("The response of RVSearchApi->search_rv_uk_active_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RVSearchApi->search_rv_uk_active_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **price_range** | **str**| Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **miles_range** | **str**| Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **msrp_range** | **str**| MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **year_range** | **str**| Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 | [optional] 
 **search_text** | **str**| To search a substring across entire document | [optional] 
 **latitude** | **float**| Latitude component of location | [optional] 
 **longitude** | **float**| Longitude component of location | [optional] 
 **radius** | **int**| Radius around the search location (Unit - Miles) | [optional] 
 **year** | **str**| To filter listing on their year | [optional] 
 **make** | **str**| To filter listings on their make | [optional] 
 **model** | **str**| To filter listings on their model | [optional] 
 **vin** | **str**| To filter listing on their VIN | [optional] 
 **source** | **str**| To filter listing on their source | [optional] 
 **dealer_name** | **str**| Filter listings on dealer_name | [optional] 
 **dealer_id** | **str**| Dealer id to filter the listings. | [optional] 
 **exterior_color** | **str**| Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated | [optional] 
 **interior_color** | **str**| Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated | [optional] 
 **engine_size** | **str**| Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated | [optional] 
 **fuel_type** | **str**| To filter listing on their fuel type | [optional] 
 **category** | **str**| Filter RV listings on category | [optional] 
 **state** | **str**| To filter listing on State in which they are listed | [optional] 
 **city** | **str**| To filter listing on City in which they are listed | [optional] 
 **county** | **str**| To filter listing on county in which they are listed | [optional] 
 **postal_code** | **str**| To filter listing on postal code around which they are listed | [optional] 
 **zip** | **str**| To filter listing on ZIP around which they are listed | [optional] 
 **sort_by** | **str**| Sort by field. Default sort field is distance from the given point | [optional] 
 **sort_order** | **str**| Sort order - asc or desc. Default sort order is asc | [optional] 
 **rows** | **int**| Number of results to return. Default is 10. Max is 50 | [optional] [default to 10]
 **start** | **int**| Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | [optional] [default to 0]
 **facets** | **str**| The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | [optional] 
 **range_facets** | **str**| The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | [optional] 
 **facet_sort** | **str**| Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param | [optional] [default to count]
 **stats** | **str**| The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. | [optional] 
 **last_seen_range** | **str**| Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **first_seen_range** | **str**| First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **last_seen_days** | **str**| Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 | [optional] 
 **first_seen_days** | **str**| First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 | [optional] 
 **base_exterior_color** | **str**| Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | [optional] 
 **base_interior_color** | **str**| Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | [optional] 
 **seating_capacity** | **str**| To filter on vehicle seating capacity | [optional] 
 **cylinders** | **str**| To filter listing on their cylinders | [optional] 
 **doors** | **str**| Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated | [optional] 
 **mtplm** | **str**| To filter rv on mtplm | [optional] 
 **sub_category** | **str**| To filter rv on their sub-category | [optional] 
 **availability_status** | **str**| To filter rv on their availability_status | [optional] 
 **berths** | **str**| To filter rv on their berths | [optional] 
 **inventory_type** | **str**| To filter listing on their condition. Either used or new | [optional] 
 **width_range** | **str**| width range to filter listings on width in the range given. Range to be given in the format - min-max e.g. 4-8 | [optional] 
 **exterior_length_range** | **str**| width range to filter listings on exterior_length in the range given. Range to be given in the format - min-max e.g. 4-8 | [optional] 
 **interior_length_range** | **str**| width range to filter listings on interior_length in the range given. Range to be given in the format - min-max e.g. 4-8 | [optional] 
 **drive_type** | **str**| To filter rv on their drive_type | [optional] 
 **steering** | **str**| To filter rv on their steering | [optional] 
 **chassis** | **str**| To filter rv on their chassis | [optional] 
 **transmission** | **str**| To filter listing on their transmission | [optional] 

### Return type

[**UKRVSearchResponse**](UKRVSearchResponse.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of all RV listings matching the search &amp; filter criteria |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

