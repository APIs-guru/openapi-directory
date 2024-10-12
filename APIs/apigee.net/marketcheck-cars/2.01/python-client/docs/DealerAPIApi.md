# openapi_client.DealerAPIApi

All URIs are relative to *https://marketcheck-prod.apigee.net/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dealer_car_uk_id_get**](DealerAPIApi.md#dealer_car_uk_id_get) | **GET** /dealer/car/uk/{id} | Dealer by id
[**dealer_heavy_equipment_id_get**](DealerAPIApi.md#dealer_heavy_equipment_id_get) | **GET** /dealer/heavy-equipment/{id} | Dealer by id
[**dealer_motorcycle_id_get**](DealerAPIApi.md#dealer_motorcycle_id_get) | **GET** /dealer/motorcycle/{id} | Dealer by id
[**dealer_rv_id_get**](DealerAPIApi.md#dealer_rv_id_get) | **GET** /dealer/rv/{id} | Dealer by id
[**dealer_search**](DealerAPIApi.md#dealer_search) | **GET** /dealers/car | Find car dealers around
[**dealers_car_uk_get**](DealerAPIApi.md#dealers_car_uk_get) | **GET** /dealers/car/uk | Find car dealers around
[**dealers_heavy_equipment_get**](DealerAPIApi.md#dealers_heavy_equipment_get) | **GET** /dealers/heavy-equipment | Find car dealers around
[**dealers_motorcycle_get**](DealerAPIApi.md#dealers_motorcycle_get) | **GET** /dealers/motorcycle | Find car dealers around
[**dealers_rv_get**](DealerAPIApi.md#dealers_rv_get) | **GET** /dealers/rv | Find car dealers around
[**get_dealer**](DealerAPIApi.md#get_dealer) | **GET** /dealer/car/{id} | Dealer by id


# **dealer_car_uk_id_get**
> Dealer dealer_car_uk_id_get(id, api_key=api_key, provider=provider)

Dealer by id

Get a particular dealer's information by its id

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.dealer import Dealer
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
    api_instance = openapi_client.DealerAPIApi(api_client)
    id = 'id_example' # str | Dealer id to get all the dealer info attributes
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    provider = False # bool | boolean param to include site providers name in response (optional) (default to False)

    try:
        # Dealer by id
        api_response = api_instance.dealer_car_uk_id_get(id, api_key=api_key, provider=provider)
        print("The response of DealerAPIApi->dealer_car_uk_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DealerAPIApi->dealer_car_uk_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Dealer id to get all the dealer info attributes | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **provider** | **bool**| boolean param to include site providers name in response | [optional] [default to False]

### Return type

[**Dealer**](Dealer.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Dealer for the given id |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dealer_heavy_equipment_id_get**
> Dealer dealer_heavy_equipment_id_get(id, api_key=api_key, provider=provider)

Dealer by id

Get a particular dealer's information by its id

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.dealer import Dealer
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
    api_instance = openapi_client.DealerAPIApi(api_client)
    id = 'id_example' # str | Dealer id to get all the dealer info attributes
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    provider = False # bool | boolean param to include site providers name in response (optional) (default to False)

    try:
        # Dealer by id
        api_response = api_instance.dealer_heavy_equipment_id_get(id, api_key=api_key, provider=provider)
        print("The response of DealerAPIApi->dealer_heavy_equipment_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DealerAPIApi->dealer_heavy_equipment_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Dealer id to get all the dealer info attributes | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **provider** | **bool**| boolean param to include site providers name in response | [optional] [default to False]

### Return type

[**Dealer**](Dealer.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Dealer for the given id |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dealer_motorcycle_id_get**
> Dealer dealer_motorcycle_id_get(id, api_key=api_key, provider=provider)

Dealer by id

Get a particular dealer's information by its id

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.dealer import Dealer
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
    api_instance = openapi_client.DealerAPIApi(api_client)
    id = 'id_example' # str | Dealer id to get all the dealer info attributes
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    provider = False # bool | boolean param to include site providers name in response (optional) (default to False)

    try:
        # Dealer by id
        api_response = api_instance.dealer_motorcycle_id_get(id, api_key=api_key, provider=provider)
        print("The response of DealerAPIApi->dealer_motorcycle_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DealerAPIApi->dealer_motorcycle_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Dealer id to get all the dealer info attributes | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **provider** | **bool**| boolean param to include site providers name in response | [optional] [default to False]

### Return type

[**Dealer**](Dealer.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Dealer for the given id |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dealer_rv_id_get**
> Dealer dealer_rv_id_get(id, api_key=api_key, provider=provider)

Dealer by id

Get a particular dealer's information by its id

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.dealer import Dealer
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
    api_instance = openapi_client.DealerAPIApi(api_client)
    id = 'id_example' # str | Dealer id to get all the dealer info attributes
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    provider = False # bool | boolean param to include site providers name in response (optional) (default to False)

    try:
        # Dealer by id
        api_response = api_instance.dealer_rv_id_get(id, api_key=api_key, provider=provider)
        print("The response of DealerAPIApi->dealer_rv_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DealerAPIApi->dealer_rv_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Dealer id to get all the dealer info attributes | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **provider** | **bool**| boolean param to include site providers name in response | [optional] [default to False]

### Return type

[**Dealer**](Dealer.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Dealer for the given id |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dealer_search**
> DealersResponse dealer_search(api_key=api_key, latitude=latitude, longitude=longitude, radius=radius, rows=rows, start=start, country=country, dealer_type=dealer_type, city=city, state=state, listing_count_range=listing_count_range, inventory_url=inventory_url, zip=zip, sort_by=sort_by, sort_order=sort_order, provider=provider, facets=facets, range_facets=range_facets)

Find car dealers around

The dealers API returns a list of dealers around a given point and radius.

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.dealers_response import DealersResponse
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
    api_instance = openapi_client.DealerAPIApi(api_client)
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    latitude = 3.4 # float | Latitude component of location (optional)
    longitude = 3.4 # float | Longitude component of location (optional)
    radius = 56 # int | Radius around the search location (Unit - Miles) (optional)
    rows = 10 # int | Number of results to return. Default is 10. Max is 50 (optional) (default to 10)
    start = 0 # int | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
    country = 'country_example' # str | To filter listing on Country in which they are listed (optional)
    dealer_type = 'dealer_type_example' # str | Filter based on dealer type independant or franchise (optional)
    city = 'city_example' # str | To filter listing on City in which they are listed (optional)
    state = 'state_example' # str | To filter listing on State in which they are listed (optional)
    listing_count_range = 'listing_count_range_example' # str | To filter dealers based on their inventory size. Range can be given in the format - min-max e.g. 50-100 (optional)
    inventory_url = 'inventory_url_example' # str | inventory_url of dealer to be searched (optional)
    zip = 'zip_example' # str | To filter listing on ZIP around which they are listed (optional)
    sort_by = 'sort_by_example' # str | Sort by field. Default sort field is distance from the given point (optional)
    sort_order = 'sort_order_example' # str | Sort order - asc or desc. Default sort order is asc (optional)
    provider = False # bool | boolean param to include site providers name in response (optional) (default to False)
    facets = 'facets_example' # str | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional)
    range_facets = 'range_facets_example' # str | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional)

    try:
        # Find car dealers around
        api_response = api_instance.dealer_search(api_key=api_key, latitude=latitude, longitude=longitude, radius=radius, rows=rows, start=start, country=country, dealer_type=dealer_type, city=city, state=state, listing_count_range=listing_count_range, inventory_url=inventory_url, zip=zip, sort_by=sort_by, sort_order=sort_order, provider=provider, facets=facets, range_facets=range_facets)
        print("The response of DealerAPIApi->dealer_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DealerAPIApi->dealer_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **latitude** | **float**| Latitude component of location | [optional] 
 **longitude** | **float**| Longitude component of location | [optional] 
 **radius** | **int**| Radius around the search location (Unit - Miles) | [optional] 
 **rows** | **int**| Number of results to return. Default is 10. Max is 50 | [optional] [default to 10]
 **start** | **int**| Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | [optional] [default to 0]
 **country** | **str**| To filter listing on Country in which they are listed | [optional] 
 **dealer_type** | **str**| Filter based on dealer type independant or franchise | [optional] 
 **city** | **str**| To filter listing on City in which they are listed | [optional] 
 **state** | **str**| To filter listing on State in which they are listed | [optional] 
 **listing_count_range** | **str**| To filter dealers based on their inventory size. Range can be given in the format - min-max e.g. 50-100 | [optional] 
 **inventory_url** | **str**| inventory_url of dealer to be searched | [optional] 
 **zip** | **str**| To filter listing on ZIP around which they are listed | [optional] 
 **sort_by** | **str**| Sort by field. Default sort field is distance from the given point | [optional] 
 **sort_order** | **str**| Sort order - asc or desc. Default sort order is asc | [optional] 
 **provider** | **bool**| boolean param to include site providers name in response | [optional] [default to False]
 **facets** | **str**| The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | [optional] 
 **range_facets** | **str**| The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | [optional] 

### Return type

[**DealersResponse**](DealersResponse.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of dealers for the search |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dealers_car_uk_get**
> DealersResponse dealers_car_uk_get(api_key=api_key, latitude=latitude, longitude=longitude, radius=radius, rows=rows, start=start, country=country, dealer_type=dealer_type, city=city, county=county, listing_count_range=listing_count_range, inventory_url=inventory_url, postal_code=postal_code, sort_by=sort_by, sort_order=sort_order, provider=provider, facets=facets, range_facets=range_facets)

Find car dealers around

The dealers API returns a list of dealers around a given point and radius.

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.dealers_response import DealersResponse
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
    api_instance = openapi_client.DealerAPIApi(api_client)
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    latitude = 3.4 # float | Latitude component of location (optional)
    longitude = 3.4 # float | Longitude component of location (optional)
    radius = 56 # int | Radius around the search location (Unit - Miles) (optional)
    rows = 10 # int | Number of results to return. Default is 10. Max is 50 (optional) (default to 10)
    start = 0 # int | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
    country = 'country_example' # str | To filter listing on Country in which they are listed (optional)
    dealer_type = 'dealer_type_example' # str | Filter based on dealer type independant or franchise (optional)
    city = 'city_example' # str | To filter listing on City in which they are listed (optional)
    county = 'county_example' # str | To filter listing on county in which they are listed (optional)
    listing_count_range = 'listing_count_range_example' # str | To filter dealers based on their inventory size. Range can be given in the format - min-max e.g. 50-100 (optional)
    inventory_url = 'inventory_url_example' # str | inventory_url of dealer to be searched (optional)
    postal_code = 'postal_code_example' # str | To filter listing on postal code around which they are listed (optional)
    sort_by = 'sort_by_example' # str | Sort by field. Default sort field is distance from the given point (optional)
    sort_order = 'sort_order_example' # str | Sort order - asc or desc. Default sort order is asc (optional)
    provider = False # bool | boolean param to include site providers name in response (optional) (default to False)
    facets = 'facets_example' # str | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional)
    range_facets = 'range_facets_example' # str | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional)

    try:
        # Find car dealers around
        api_response = api_instance.dealers_car_uk_get(api_key=api_key, latitude=latitude, longitude=longitude, radius=radius, rows=rows, start=start, country=country, dealer_type=dealer_type, city=city, county=county, listing_count_range=listing_count_range, inventory_url=inventory_url, postal_code=postal_code, sort_by=sort_by, sort_order=sort_order, provider=provider, facets=facets, range_facets=range_facets)
        print("The response of DealerAPIApi->dealers_car_uk_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DealerAPIApi->dealers_car_uk_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **latitude** | **float**| Latitude component of location | [optional] 
 **longitude** | **float**| Longitude component of location | [optional] 
 **radius** | **int**| Radius around the search location (Unit - Miles) | [optional] 
 **rows** | **int**| Number of results to return. Default is 10. Max is 50 | [optional] [default to 10]
 **start** | **int**| Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | [optional] [default to 0]
 **country** | **str**| To filter listing on Country in which they are listed | [optional] 
 **dealer_type** | **str**| Filter based on dealer type independant or franchise | [optional] 
 **city** | **str**| To filter listing on City in which they are listed | [optional] 
 **county** | **str**| To filter listing on county in which they are listed | [optional] 
 **listing_count_range** | **str**| To filter dealers based on their inventory size. Range can be given in the format - min-max e.g. 50-100 | [optional] 
 **inventory_url** | **str**| inventory_url of dealer to be searched | [optional] 
 **postal_code** | **str**| To filter listing on postal code around which they are listed | [optional] 
 **sort_by** | **str**| Sort by field. Default sort field is distance from the given point | [optional] 
 **sort_order** | **str**| Sort order - asc or desc. Default sort order is asc | [optional] 
 **provider** | **bool**| boolean param to include site providers name in response | [optional] [default to False]
 **facets** | **str**| The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | [optional] 
 **range_facets** | **str**| The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | [optional] 

### Return type

[**DealersResponse**](DealersResponse.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of dealers for the search |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dealers_heavy_equipment_get**
> DealersResponse dealers_heavy_equipment_get(api_key=api_key, latitude=latitude, longitude=longitude, radius=radius, rows=rows, start=start, country=country, dealer_type=dealer_type, city=city, state=state, listing_count_range=listing_count_range, inventory_url=inventory_url, zip=zip, sort_by=sort_by, sort_order=sort_order, provider=provider, facets=facets, range_facets=range_facets)

Find car dealers around

The dealers API returns a list of dealers around a given point and radius.

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.dealers_response import DealersResponse
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
    api_instance = openapi_client.DealerAPIApi(api_client)
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    latitude = 3.4 # float | Latitude component of location (optional)
    longitude = 3.4 # float | Longitude component of location (optional)
    radius = 56 # int | Radius around the search location (Unit - Miles) (optional)
    rows = 10 # int | Number of results to return. Default is 10. Max is 50 (optional) (default to 10)
    start = 0 # int | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
    country = 'country_example' # str | To filter listing on Country in which they are listed (optional)
    dealer_type = 'dealer_type_example' # str | Filter based on dealer type independant or franchise (optional)
    city = 'city_example' # str | To filter listing on City in which they are listed (optional)
    state = 'state_example' # str | To filter listing on State in which they are listed (optional)
    listing_count_range = 'listing_count_range_example' # str | To filter dealers based on their inventory size. Range can be given in the format - min-max e.g. 50-100 (optional)
    inventory_url = 'inventory_url_example' # str | inventory_url of dealer to be searched (optional)
    zip = 'zip_example' # str | To filter listing on ZIP around which they are listed (optional)
    sort_by = 'sort_by_example' # str | Sort by field. Default sort field is distance from the given point (optional)
    sort_order = 'sort_order_example' # str | Sort order - asc or desc. Default sort order is asc (optional)
    provider = False # bool | boolean param to include site providers name in response (optional) (default to False)
    facets = 'facets_example' # str | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional)
    range_facets = 'range_facets_example' # str | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional)

    try:
        # Find car dealers around
        api_response = api_instance.dealers_heavy_equipment_get(api_key=api_key, latitude=latitude, longitude=longitude, radius=radius, rows=rows, start=start, country=country, dealer_type=dealer_type, city=city, state=state, listing_count_range=listing_count_range, inventory_url=inventory_url, zip=zip, sort_by=sort_by, sort_order=sort_order, provider=provider, facets=facets, range_facets=range_facets)
        print("The response of DealerAPIApi->dealers_heavy_equipment_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DealerAPIApi->dealers_heavy_equipment_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **latitude** | **float**| Latitude component of location | [optional] 
 **longitude** | **float**| Longitude component of location | [optional] 
 **radius** | **int**| Radius around the search location (Unit - Miles) | [optional] 
 **rows** | **int**| Number of results to return. Default is 10. Max is 50 | [optional] [default to 10]
 **start** | **int**| Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | [optional] [default to 0]
 **country** | **str**| To filter listing on Country in which they are listed | [optional] 
 **dealer_type** | **str**| Filter based on dealer type independant or franchise | [optional] 
 **city** | **str**| To filter listing on City in which they are listed | [optional] 
 **state** | **str**| To filter listing on State in which they are listed | [optional] 
 **listing_count_range** | **str**| To filter dealers based on their inventory size. Range can be given in the format - min-max e.g. 50-100 | [optional] 
 **inventory_url** | **str**| inventory_url of dealer to be searched | [optional] 
 **zip** | **str**| To filter listing on ZIP around which they are listed | [optional] 
 **sort_by** | **str**| Sort by field. Default sort field is distance from the given point | [optional] 
 **sort_order** | **str**| Sort order - asc or desc. Default sort order is asc | [optional] 
 **provider** | **bool**| boolean param to include site providers name in response | [optional] [default to False]
 **facets** | **str**| The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | [optional] 
 **range_facets** | **str**| The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | [optional] 

### Return type

[**DealersResponse**](DealersResponse.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of dealers for the search |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dealers_motorcycle_get**
> DealersResponse dealers_motorcycle_get(api_key=api_key, latitude=latitude, longitude=longitude, radius=radius, rows=rows, start=start, country=country, dealer_type=dealer_type, city=city, state=state, listing_count_range=listing_count_range, inventory_url=inventory_url, zip=zip, sort_by=sort_by, sort_order=sort_order, provider=provider, facets=facets, range_facets=range_facets)

Find car dealers around

The dealers API returns a list of dealers around a given point and radius.

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.dealers_response import DealersResponse
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
    api_instance = openapi_client.DealerAPIApi(api_client)
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    latitude = 3.4 # float | Latitude component of location (optional)
    longitude = 3.4 # float | Longitude component of location (optional)
    radius = 56 # int | Radius around the search location (Unit - Miles) (optional)
    rows = 10 # int | Number of results to return. Default is 10. Max is 50 (optional) (default to 10)
    start = 0 # int | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
    country = 'country_example' # str | To filter listing on Country in which they are listed (optional)
    dealer_type = 'dealer_type_example' # str | Filter based on dealer type independant or franchise (optional)
    city = 'city_example' # str | To filter listing on City in which they are listed (optional)
    state = 'state_example' # str | To filter listing on State in which they are listed (optional)
    listing_count_range = 'listing_count_range_example' # str | To filter dealers based on their inventory size. Range can be given in the format - min-max e.g. 50-100 (optional)
    inventory_url = 'inventory_url_example' # str | inventory_url of dealer to be searched (optional)
    zip = 'zip_example' # str | To filter listing on ZIP around which they are listed (optional)
    sort_by = 'sort_by_example' # str | Sort by field. Default sort field is distance from the given point (optional)
    sort_order = 'sort_order_example' # str | Sort order - asc or desc. Default sort order is asc (optional)
    provider = False # bool | boolean param to include site providers name in response (optional) (default to False)
    facets = 'facets_example' # str | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional)
    range_facets = 'range_facets_example' # str | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional)

    try:
        # Find car dealers around
        api_response = api_instance.dealers_motorcycle_get(api_key=api_key, latitude=latitude, longitude=longitude, radius=radius, rows=rows, start=start, country=country, dealer_type=dealer_type, city=city, state=state, listing_count_range=listing_count_range, inventory_url=inventory_url, zip=zip, sort_by=sort_by, sort_order=sort_order, provider=provider, facets=facets, range_facets=range_facets)
        print("The response of DealerAPIApi->dealers_motorcycle_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DealerAPIApi->dealers_motorcycle_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **latitude** | **float**| Latitude component of location | [optional] 
 **longitude** | **float**| Longitude component of location | [optional] 
 **radius** | **int**| Radius around the search location (Unit - Miles) | [optional] 
 **rows** | **int**| Number of results to return. Default is 10. Max is 50 | [optional] [default to 10]
 **start** | **int**| Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | [optional] [default to 0]
 **country** | **str**| To filter listing on Country in which they are listed | [optional] 
 **dealer_type** | **str**| Filter based on dealer type independant or franchise | [optional] 
 **city** | **str**| To filter listing on City in which they are listed | [optional] 
 **state** | **str**| To filter listing on State in which they are listed | [optional] 
 **listing_count_range** | **str**| To filter dealers based on their inventory size. Range can be given in the format - min-max e.g. 50-100 | [optional] 
 **inventory_url** | **str**| inventory_url of dealer to be searched | [optional] 
 **zip** | **str**| To filter listing on ZIP around which they are listed | [optional] 
 **sort_by** | **str**| Sort by field. Default sort field is distance from the given point | [optional] 
 **sort_order** | **str**| Sort order - asc or desc. Default sort order is asc | [optional] 
 **provider** | **bool**| boolean param to include site providers name in response | [optional] [default to False]
 **facets** | **str**| The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | [optional] 
 **range_facets** | **str**| The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | [optional] 

### Return type

[**DealersResponse**](DealersResponse.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of dealers for the search |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dealers_rv_get**
> DealersResponse dealers_rv_get(api_key=api_key, latitude=latitude, longitude=longitude, radius=radius, rows=rows, start=start, country=country, dealer_type=dealer_type, city=city, state=state, listing_count_range=listing_count_range, inventory_url=inventory_url, zip=zip, sort_by=sort_by, sort_order=sort_order, provider=provider, facets=facets, range_facets=range_facets)

Find car dealers around

The dealers API returns a list of dealers around a given point and radius.

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.dealers_response import DealersResponse
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
    api_instance = openapi_client.DealerAPIApi(api_client)
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    latitude = 3.4 # float | Latitude component of location (optional)
    longitude = 3.4 # float | Longitude component of location (optional)
    radius = 56 # int | Radius around the search location (Unit - Miles) (optional)
    rows = 10 # int | Number of results to return. Default is 10. Max is 50 (optional) (default to 10)
    start = 0 # int | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
    country = 'country_example' # str | To filter listing on Country in which they are listed (optional)
    dealer_type = 'dealer_type_example' # str | Filter based on dealer type independant or franchise (optional)
    city = 'city_example' # str | To filter listing on City in which they are listed (optional)
    state = 'state_example' # str | To filter listing on State in which they are listed (optional)
    listing_count_range = 'listing_count_range_example' # str | To filter dealers based on their inventory size. Range can be given in the format - min-max e.g. 50-100 (optional)
    inventory_url = 'inventory_url_example' # str | inventory_url of dealer to be searched (optional)
    zip = 'zip_example' # str | To filter listing on ZIP around which they are listed (optional)
    sort_by = 'sort_by_example' # str | Sort by field. Default sort field is distance from the given point (optional)
    sort_order = 'sort_order_example' # str | Sort order - asc or desc. Default sort order is asc (optional)
    provider = False # bool | boolean param to include site providers name in response (optional) (default to False)
    facets = 'facets_example' # str | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional)
    range_facets = 'range_facets_example' # str | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional)

    try:
        # Find car dealers around
        api_response = api_instance.dealers_rv_get(api_key=api_key, latitude=latitude, longitude=longitude, radius=radius, rows=rows, start=start, country=country, dealer_type=dealer_type, city=city, state=state, listing_count_range=listing_count_range, inventory_url=inventory_url, zip=zip, sort_by=sort_by, sort_order=sort_order, provider=provider, facets=facets, range_facets=range_facets)
        print("The response of DealerAPIApi->dealers_rv_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DealerAPIApi->dealers_rv_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **latitude** | **float**| Latitude component of location | [optional] 
 **longitude** | **float**| Longitude component of location | [optional] 
 **radius** | **int**| Radius around the search location (Unit - Miles) | [optional] 
 **rows** | **int**| Number of results to return. Default is 10. Max is 50 | [optional] [default to 10]
 **start** | **int**| Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | [optional] [default to 0]
 **country** | **str**| To filter listing on Country in which they are listed | [optional] 
 **dealer_type** | **str**| Filter based on dealer type independant or franchise | [optional] 
 **city** | **str**| To filter listing on City in which they are listed | [optional] 
 **state** | **str**| To filter listing on State in which they are listed | [optional] 
 **listing_count_range** | **str**| To filter dealers based on their inventory size. Range can be given in the format - min-max e.g. 50-100 | [optional] 
 **inventory_url** | **str**| inventory_url of dealer to be searched | [optional] 
 **zip** | **str**| To filter listing on ZIP around which they are listed | [optional] 
 **sort_by** | **str**| Sort by field. Default sort field is distance from the given point | [optional] 
 **sort_order** | **str**| Sort order - asc or desc. Default sort order is asc | [optional] 
 **provider** | **bool**| boolean param to include site providers name in response | [optional] [default to False]
 **facets** | **str**| The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | [optional] 
 **range_facets** | **str**| The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | [optional] 

### Return type

[**DealersResponse**](DealersResponse.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of dealers for the search |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dealer**
> Dealer get_dealer(id, api_key=api_key, provider=provider)

Dealer by id

Get a particular dealer's information by its id

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.dealer import Dealer
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
    api_instance = openapi_client.DealerAPIApi(api_client)
    id = 'id_example' # str | Dealer id to get all the dealer info attributes
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    provider = False # bool | boolean param to include site providers name in response (optional) (default to False)

    try:
        # Dealer by id
        api_response = api_instance.get_dealer(id, api_key=api_key, provider=provider)
        print("The response of DealerAPIApi->get_dealer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DealerAPIApi->get_dealer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Dealer id to get all the dealer info attributes | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **provider** | **bool**| boolean param to include site providers name in response | [optional] [default to False]

### Return type

[**Dealer**](Dealer.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Dealer for the given id |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

