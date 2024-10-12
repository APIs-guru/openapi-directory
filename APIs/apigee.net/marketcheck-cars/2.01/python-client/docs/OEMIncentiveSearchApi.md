# openapi_client.OEMIncentiveSearchApi

All URIs are relative to *https://marketcheck-prod.apigee.net/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oem_search**](OEMIncentiveSearchApi.md#oem_search) | **GET** /search/car/incentive/oem | Gets oem incentive listings for the given search criteria


# **oem_search**
> SearchResponse oem_search(api_key=api_key, offer_type=offer_type, year=year, make=make, model=model, trim=trim, msrp=msrp, apr=apr, monthly=monthly, monthly_per_thousand=monthly_per_thousand, down_payment=down_payment, due_at_signing=due_at_signing, security_deposit=security_deposit, disposition_fee=disposition_fee, acquisition_fee=acquisition_fee, duration=duration, dealer_contribution=dealer_contribution, mileage_charge=mileage_charge, mileage_charge_limit=mileage_charge_limit, cashback_amount=cashback_amount, cashback_target_group=cashback_target_group, lease_end_purchase_option=lease_end_purchase_option, net_capitalised_cost=net_capitalised_cost, gross_capitalised_cost=gross_capitalised_cost, total_monthly_payment=total_monthly_payment, zip=zip, city=city, state=state, country=country, latitude=latitude, longitude=longitude, radius=radius, search_text=search_text, last_seen_range=last_seen_range, first_seen_range=first_seen_range, sort_by=sort_by, sort_order=sort_order, rows=rows, start=start, facets=facets, range_facets=range_facets, facet_sort=facet_sort, stats=stats)

Gets oem incentive listings for the given search criteria

This endpoint is the meat of the API and serves many purposes. This API produces a list of currently active oem incentive from the market for the given search criteria. The API results are limited to allow pagination upto 10000 rows.   The search API facilitates the following use cases -  1. Search Cars around a given geo-point within a given radius  2. Search cars for a specific year / make / model or combination of these  3. Search cars matching multiple year, make, model combinatins in the same search request 4. Filter results by most car specification attributes 5. Search for similar cars by VIN or Taxonomy VIN  6. Filter cars within a given price / miles / days on market (dom) range 7. Specify a sort order for the results on price / miles / dom / listed date  8. Search cars for a given City / State combination  9. Get Facets to build the search drill downs  10. Get Market averages for price/miles/dom for your search

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.search_response import SearchResponse
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
    api_instance = openapi_client.OEMIncentiveSearchApi(api_client)
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    offer_type = 'offer_type_example' # str | The type of the incentive (optional)
    year = 'year_example' # str | To filter listing on their year (optional)
    make = 'make_example' # str | To filter listings on their make (optional)
    model = 'model_example' # str | To filter listings on their model (optional)
    trim = 'trim_example' # str | To filter listing on their trim (optional)
    msrp = 'msrp_example' # str | MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    apr = 'apr_example' # str | APR range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    monthly = 'monthly_example' # str | To filter listing on Monthly payment amount, usually populated in Lease offers (optional)
    monthly_per_thousand = 'monthly_per_thousand_example' # str | To filter listing on monthly amount to be paid by customer for every $1000 financed at the advertised APR rate (optional)
    down_payment = 'down_payment_example' # str | To filter listing on down payment offer on car (optional)
    due_at_signing = 'due_at_signing_example' # str | To filter listing on total amount due at signing, that usually includes first month payment, down payment, acquisition fee etc (optional)
    security_deposit = 'security_deposit_example' # str | To filter listing on security deposit required for the offer (optional)
    disposition_fee = 'disposition_fee_example' # str | To filter listing on disposition fee of the car (optional)
    acquisition_fee = 'acquisition_fee_example' # str | To filter listing on acquisition fee of the car (optional)
    duration = 'duration_example' # str | To filter listing on offer duration in months (optional)
    dealer_contribution = 'dealer_contribution_example' # str | To filter listing on any contribution from dealer's side (optional)
    mileage_charge = 'mileage_charge_example' # str | Mileage Charge Range range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 100-1000 (optional)
    mileage_charge_limit = 'mileage_charge_limit_example' # str | To filter listing on mileage charge limit the offer is valid up to under the default clauses (optional)
    cashback_amount = 'cashback_amount_example' # str | To filter listing on cashback amounts listed in offer (optional)
    cashback_target_group = 'cashback_target_group_example' # str | To filter listing on the demographic or any other entity for whom this cashback offer is for. Not all target groups are identified but the most common ones are tagged like Military, Grad students Current owners etc (optional)
    lease_end_purchase_option = 'lease_end_purchase_option_example' # str | To filter listing on amount at the lease end to pay for buying the car (optional)
    net_capitalised_cost = 'net_capitalised_cost_example' # str | To filter listing on net capitalised cost of the car (optional)
    gross_capitalised_cost = 'gross_capitalised_cost_example' # str | To filter listing on gross capitalised cost of the car (optional)
    total_monthly_payment = 'total_monthly_payment_example' # str | To filter listing on gross capitalised cost of the car (optional)
    zip = 'zip_example' # str | To filter listing on ZIP around which they are listed (optional)
    city = 'city_example' # str | To filter listing on City in which they are listed (optional)
    state = 'state_example' # str | To filter listing on State in which they are listed (optional)
    country = US # str | To filter listing on Country in which they are listed (optional) (default to US)
    latitude = 3.4 # float | Latitude component of location (optional)
    longitude = 3.4 # float | Longitude component of location (optional)
    radius = 56 # int | Radius around the search location (Unit - Miles) (optional)
    search_text = 'search_text_example' # str | To search a substring across entire document (optional)
    last_seen_range = 'last_seen_range_example' # str | Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    first_seen_range = 'first_seen_range_example' # str | First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    sort_by = 'sort_by_example' # str | Sort by field. Default sort field is distance from the given point (optional)
    sort_order = 'sort_order_example' # str | Sort order - asc or desc. Default sort order is asc (optional)
    rows = 10 # int | Number of results to return. Default is 10. Max is 50 (optional) (default to 10)
    start = 0 # int | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
    facets = 'facets_example' # str | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional)
    range_facets = 'range_facets_example' # str | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional)
    facet_sort = count # str | Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param (optional) (default to count)
    stats = 'stats_example' # str | The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. (optional)

    try:
        # Gets oem incentive listings for the given search criteria
        api_response = api_instance.oem_search(api_key=api_key, offer_type=offer_type, year=year, make=make, model=model, trim=trim, msrp=msrp, apr=apr, monthly=monthly, monthly_per_thousand=monthly_per_thousand, down_payment=down_payment, due_at_signing=due_at_signing, security_deposit=security_deposit, disposition_fee=disposition_fee, acquisition_fee=acquisition_fee, duration=duration, dealer_contribution=dealer_contribution, mileage_charge=mileage_charge, mileage_charge_limit=mileage_charge_limit, cashback_amount=cashback_amount, cashback_target_group=cashback_target_group, lease_end_purchase_option=lease_end_purchase_option, net_capitalised_cost=net_capitalised_cost, gross_capitalised_cost=gross_capitalised_cost, total_monthly_payment=total_monthly_payment, zip=zip, city=city, state=state, country=country, latitude=latitude, longitude=longitude, radius=radius, search_text=search_text, last_seen_range=last_seen_range, first_seen_range=first_seen_range, sort_by=sort_by, sort_order=sort_order, rows=rows, start=start, facets=facets, range_facets=range_facets, facet_sort=facet_sort, stats=stats)
        print("The response of OEMIncentiveSearchApi->oem_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OEMIncentiveSearchApi->oem_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **offer_type** | **str**| The type of the incentive | [optional] 
 **year** | **str**| To filter listing on their year | [optional] 
 **make** | **str**| To filter listings on their make | [optional] 
 **model** | **str**| To filter listings on their model | [optional] 
 **trim** | **str**| To filter listing on their trim | [optional] 
 **msrp** | **str**| MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **apr** | **str**| APR range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **monthly** | **str**| To filter listing on Monthly payment amount, usually populated in Lease offers | [optional] 
 **monthly_per_thousand** | **str**| To filter listing on monthly amount to be paid by customer for every $1000 financed at the advertised APR rate | [optional] 
 **down_payment** | **str**| To filter listing on down payment offer on car | [optional] 
 **due_at_signing** | **str**| To filter listing on total amount due at signing, that usually includes first month payment, down payment, acquisition fee etc | [optional] 
 **security_deposit** | **str**| To filter listing on security deposit required for the offer | [optional] 
 **disposition_fee** | **str**| To filter listing on disposition fee of the car | [optional] 
 **acquisition_fee** | **str**| To filter listing on acquisition fee of the car | [optional] 
 **duration** | **str**| To filter listing on offer duration in months | [optional] 
 **dealer_contribution** | **str**| To filter listing on any contribution from dealer&#39;s side | [optional] 
 **mileage_charge** | **str**| Mileage Charge Range range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 100-1000 | [optional] 
 **mileage_charge_limit** | **str**| To filter listing on mileage charge limit the offer is valid up to under the default clauses | [optional] 
 **cashback_amount** | **str**| To filter listing on cashback amounts listed in offer | [optional] 
 **cashback_target_group** | **str**| To filter listing on the demographic or any other entity for whom this cashback offer is for. Not all target groups are identified but the most common ones are tagged like Military, Grad students Current owners etc | [optional] 
 **lease_end_purchase_option** | **str**| To filter listing on amount at the lease end to pay for buying the car | [optional] 
 **net_capitalised_cost** | **str**| To filter listing on net capitalised cost of the car | [optional] 
 **gross_capitalised_cost** | **str**| To filter listing on gross capitalised cost of the car | [optional] 
 **total_monthly_payment** | **str**| To filter listing on gross capitalised cost of the car | [optional] 
 **zip** | **str**| To filter listing on ZIP around which they are listed | [optional] 
 **city** | **str**| To filter listing on City in which they are listed | [optional] 
 **state** | **str**| To filter listing on State in which they are listed | [optional] 
 **country** | **str**| To filter listing on Country in which they are listed | [optional] [default to US]
 **latitude** | **float**| Latitude component of location | [optional] 
 **longitude** | **float**| Longitude component of location | [optional] 
 **radius** | **int**| Radius around the search location (Unit - Miles) | [optional] 
 **search_text** | **str**| To search a substring across entire document | [optional] 
 **last_seen_range** | **str**| Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **first_seen_range** | **str**| First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **sort_by** | **str**| Sort by field. Default sort field is distance from the given point | [optional] 
 **sort_order** | **str**| Sort order - asc or desc. Default sort order is asc | [optional] 
 **rows** | **int**| Number of results to return. Default is 10. Max is 50 | [optional] [default to 10]
 **start** | **int**| Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | [optional] [default to 0]
 **facets** | **str**| The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | [optional] 
 **range_facets** | **str**| The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | [optional] 
 **facet_sort** | **str**| Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param | [optional] [default to count]
 **stats** | **str**| The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. | [optional] 

### Return type

[**SearchResponse**](SearchResponse.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of all oem incentive listings matching the search &amp; filter criteria |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

