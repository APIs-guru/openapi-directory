# openapi_client.LocationEndpointsApi

All URIs are relative to */api/v1/premium*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find_places_find_places_get**](LocationEndpointsApi.md#find_places_find_places_get) | **GET** /find_places | Search for places. Complete words required.
[**find_places_prefix_find_places_prefix_get**](LocationEndpointsApi.md#find_places_prefix_find_places_prefix_get) | **GET** /find_places_prefix | Prefix search for places. Useful for autocomplete forms.
[**nearest_place_nearest_place_get**](LocationEndpointsApi.md#nearest_place_nearest_place_get) | **GET** /nearest_place | Returns the nearest named location for a given GPS coordinates.


# **find_places_find_places_get**
> List[FindPlacesModel] find_places_find_places_get(text, language=language, key=key)

Search for places. Complete words required.

## Search for places  You can use this endpoint to obtain `place_id` of the location you want, to be used in `point` endpoint. The response also contains detailed information about the location, such as coordinates, timezone and the country the place belongs to.  Unlike the `/find_place_prefix` endpoint, complete words are required here. You can search for cities, mountains, lakes, countries, ZIP codes, etc. The response can contain multiple places, sorted by relevance. You can then identify the one you want by coordinates, country, or the administrative area.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import openapi_client
from openapi_client.models.find_places_model import FindPlacesModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1/premium
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1/premium"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LocationEndpointsApi(api_client)
    text = 'text_example' # str | Place name or ZIP code
    language = openapi_client.Language() # Language | The language of text summaries and place names (variable names are never translated). Available languages are:     * ``en``: English    * ``es``: Spanish    * ``fr``: French    * ``de``: German    * ``pl``: Polish    * ``pt``: Portuguese    * ``cs``: Czech  (optional)
    key = 'key_example' # str | Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header. (optional)

    try:
        # Search for places. Complete words required.
        api_response = api_instance.find_places_find_places_get(text, language=language, key=key)
        print("The response of LocationEndpointsApi->find_places_find_places_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocationEndpointsApi->find_places_find_places_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **str**| Place name or ZIP code | 
 **language** | [**Language**](.md)| The language of text summaries and place names (variable names are never translated). Available languages are:     * &#x60;&#x60;en&#x60;&#x60;: English    * &#x60;&#x60;es&#x60;&#x60;: Spanish    * &#x60;&#x60;fr&#x60;&#x60;: French    * &#x60;&#x60;de&#x60;&#x60;: German    * &#x60;&#x60;pl&#x60;&#x60;: Polish    * &#x60;&#x60;pt&#x60;&#x60;: Portuguese    * &#x60;&#x60;cs&#x60;&#x60;: Czech  | [optional] 
 **key** | **str**| Your unique API key. You can either specify it in this parameter, or set it in &#x60;X-API-Key&#x60; header. | [optional] 

### Return type

[**List[FindPlacesModel]**](FindPlacesModel.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Error in passed parameter. |  -  |
**402** | Maximum requests per day limit exceeded. |  -  |
**403** | API key not not specified or invalid. |  -  |
**422** | Validation Error |  -  |
**429** | Maximum requests per minute limit exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_places_prefix_find_places_prefix_get**
> List[FindPlacesModel] find_places_prefix_find_places_prefix_get(text, language=language, key=key)

Prefix search for places. Useful for autocomplete forms.

## Search for places by prefix  You can use this endpoint to obtain `place_id` of the location you want, to be used in `point` endpoint. The response also contains detailed information about the location, such as coordinates, timezone and the country the place belongs to.  Unlike the `/find_places` endpoint, you should only specify the prefix of the place you are looking for. This is particularly useful for autocomplete forms. You can search for cities, mountains, lakes, countries, ZIP codes, etc. The response can contain multiple places, sorted by relevance. You can then identify the one you want by coordinates, country, or the administrative area.

### Example

* Api Key Authentication (APIKeyHeader):

```python
import openapi_client
from openapi_client.models.find_places_model import FindPlacesModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1/premium
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1/premium"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LocationEndpointsApi(api_client)
    text = 'text_example' # str | Place name or ZIP code
    language = openapi_client.Language() # Language | The language of text summaries and place names (variable names are never translated). Available languages are:     * ``en``: English    * ``es``: Spanish    * ``fr``: French    * ``de``: German    * ``pl``: Polish    * ``pt``: Portuguese    * ``cs``: Czech  (optional)
    key = 'key_example' # str | Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header. (optional)

    try:
        # Prefix search for places. Useful for autocomplete forms.
        api_response = api_instance.find_places_prefix_find_places_prefix_get(text, language=language, key=key)
        print("The response of LocationEndpointsApi->find_places_prefix_find_places_prefix_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocationEndpointsApi->find_places_prefix_find_places_prefix_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **str**| Place name or ZIP code | 
 **language** | [**Language**](.md)| The language of text summaries and place names (variable names are never translated). Available languages are:     * &#x60;&#x60;en&#x60;&#x60;: English    * &#x60;&#x60;es&#x60;&#x60;: Spanish    * &#x60;&#x60;fr&#x60;&#x60;: French    * &#x60;&#x60;de&#x60;&#x60;: German    * &#x60;&#x60;pl&#x60;&#x60;: Polish    * &#x60;&#x60;pt&#x60;&#x60;: Portuguese    * &#x60;&#x60;cs&#x60;&#x60;: Czech  | [optional] 
 **key** | **str**| Your unique API key. You can either specify it in this parameter, or set it in &#x60;X-API-Key&#x60; header. | [optional] 

### Return type

[**List[FindPlacesModel]**](FindPlacesModel.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Error in passed parameter. |  -  |
**402** | Maximum requests per day limit exceeded. |  -  |
**403** | API key not not specified or invalid. |  -  |
**422** | Validation Error |  -  |
**429** | Maximum requests per minute limit exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **nearest_place_nearest_place_get**
> FindPlacesModel nearest_place_nearest_place_get(lat, lon, language=language, key=key)

Returns the nearest named location for a given GPS coordinates.

## Search for nearest place by coordinates  You can use this endpoint to find the nearest place from given coordinates.  *Note: If you specify coordinates of a secluded place (e.g. middle of the ocean), the nearest point can be very far from the coordinates.*

### Example

* Api Key Authentication (APIKeyHeader):

```python
import openapi_client
from openapi_client.models.find_places_model import FindPlacesModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1/premium
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1/premium"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIKeyHeader
configuration.api_key['APIKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LocationEndpointsApi(api_client)
    lat = 'lat_example' # str | Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4
    lon = 'lon_example' # str | Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4
    language = openapi_client.Language() # Language | The language of text summaries and place names (variable names are never translated). Available languages are:     * ``en``: English    * ``es``: Spanish    * ``fr``: French    * ``de``: German    * ``pl``: Polish    * ``pt``: Portuguese    * ``cs``: Czech  (optional)
    key = 'key_example' # str | Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header. (optional)

    try:
        # Returns the nearest named location for a given GPS coordinates.
        api_response = api_instance.nearest_place_nearest_place_get(lat, lon, language=language, key=key)
        print("The response of LocationEndpointsApi->nearest_place_nearest_place_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocationEndpointsApi->nearest_place_nearest_place_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **str**| Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4 | 
 **lon** | **str**| Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4 | 
 **language** | [**Language**](.md)| The language of text summaries and place names (variable names are never translated). Available languages are:     * &#x60;&#x60;en&#x60;&#x60;: English    * &#x60;&#x60;es&#x60;&#x60;: Spanish    * &#x60;&#x60;fr&#x60;&#x60;: French    * &#x60;&#x60;de&#x60;&#x60;: German    * &#x60;&#x60;pl&#x60;&#x60;: Polish    * &#x60;&#x60;pt&#x60;&#x60;: Portuguese    * &#x60;&#x60;cs&#x60;&#x60;: Czech  | [optional] 
 **key** | **str**| Your unique API key. You can either specify it in this parameter, or set it in &#x60;X-API-Key&#x60; header. | [optional] 

### Return type

[**FindPlacesModel**](FindPlacesModel.md)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Error in passed parameter. |  -  |
**402** | Maximum requests per day limit exceeded. |  -  |
**403** | API key not not specified or invalid. |  -  |
**422** | Validation Error |  -  |
**429** | Maximum requests per minute limit exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

