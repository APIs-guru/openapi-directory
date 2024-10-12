# openapi_client.SpotsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v2_spots_get**](SpotsApi.md#api_v2_spots_get) | **GET** /api/v2/spots | Returns the spots matching the query parameters.
[**api_v2_spots_id_delete**](SpotsApi.md#api_v2_spots_id_delete) | **DELETE** /api/v2/spots/{id} | Deletes the spot with the given ID.
[**api_v2_spots_id_get**](SpotsApi.md#api_v2_spots_id_get) | **GET** /api/v2/spots/{id} | Returns the spot matching the given ID.
[**api_v2_spots_post**](SpotsApi.md#api_v2_spots_post) | **POST** /api/v2/spots | Creates a new spot.


# **api_v2_spots_get**
> List[Spot] api_v2_spots_get(page_start=page_start, page_size=page_size, order_by_id=order_by_id)

Returns the spots matching the query parameters.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.models.spot import Spot
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SpotsApi(api_client)
    page_start = 0 # int | The start page of the spot to return. The first item is indexed at 0. (optional) (default to 0)
    page_size = 500 # int | The number of items to return. Must be between 0 and 500, inclusive. (optional) (default to 500)
    order_by_id = 'order_by_id_example' # str | The sort order of the list of spots, based on spot ID. If unspecified, the spots are returned in random order. If using paging to iterate through the results, sort order should be specified. (optional)

    try:
        # Returns the spots matching the query parameters.
        api_response = api_instance.api_v2_spots_get(page_start=page_start, page_size=page_size, order_by_id=order_by_id)
        print("The response of SpotsApi->api_v2_spots_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpotsApi->api_v2_spots_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_start** | **int**| The start page of the spot to return. The first item is indexed at 0. | [optional] [default to 0]
 **page_size** | **int**| The number of items to return. Must be between 0 and 500, inclusive. | [optional] [default to 500]
 **order_by_id** | **str**| The sort order of the list of spots, based on spot ID. If unspecified, the spots are returned in random order. If using paging to iterate through the results, sort order should be specified. | [optional] 

### Return type

[**List[Spot]**](Spot.md)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The spots matching the query parameters |  -  |
**403** | Authorization failed, or the user is not permitted to view these spots. |  -  |
**404** | The spot cannot be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_spots_id_delete**
> api_v2_spots_id_delete(id)

Deletes the spot with the given ID.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SpotsApi(api_client)
    id = 56 # int | 

    try:
        # Deletes the spot with the given ID.
        api_instance.api_v2_spots_id_delete(id)
    except Exception as e:
        print("Exception when calling SpotsApi->api_v2_spots_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

void (empty response body)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The spot was deleted. |  -  |
**403** | Authorization failed, or the user is not permitted to delete the spot. |  -  |
**404** | The spot cannot be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_spots_id_get**
> Spot api_v2_spots_id_get(id)

Returns the spot matching the given ID.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.models.spot import Spot
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SpotsApi(api_client)
    id = 56 # int | 

    try:
        # Returns the spot matching the given ID.
        api_response = api_instance.api_v2_spots_id_get(id)
        print("The response of SpotsApi->api_v2_spots_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpotsApi->api_v2_spots_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**Spot**](Spot.md)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The spot with the given ID. |  -  |
**403** | Authorization failed, or the user is not permitted to view the spot. |  -  |
**404** | The spot information cannot be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_spots_post**
> Spot api_v2_spots_post(cd_drive_uri, name, notes)

Creates a new spot.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.models.spot import Spot
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SpotsApi(api_client)
    cd_drive_uri = 'cd_drive_uri_example' # str | The URI to the spot content in CD Drive. Format should be 'cddrive:id:{value}' or 'cddrive://{path}'.
    name = 'name_example' # str | The name of the spot to create/update.
    notes = 'notes_example' # str | Notes pertaining to the spot.

    try:
        # Creates a new spot.
        api_response = api_instance.api_v2_spots_post(cd_drive_uri, name, notes)
        print("The response of SpotsApi->api_v2_spots_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpotsApi->api_v2_spots_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cd_drive_uri** | **str**| The URI to the spot content in CD Drive. Format should be &#39;cddrive:id:{value}&#39; or &#39;cddrive://{path}&#39;. | 
 **name** | **str**| The name of the spot to create/update. | 
 **notes** | **str**| Notes pertaining to the spot. | 

### Return type

[**Spot**](Spot.md)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The created spot with fields populated. |  -  |
**400** | The request is missing required data or invalid. |  -  |
**403** | Authorization failed, or the user is not permitted to create the spot. |  -  |
**404** | The information for creating the spot cannot be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

