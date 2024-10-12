# openapi_client.BroadcastServicesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v2_broadcastservices_get**](BroadcastServicesApi.md#api_v2_broadcastservices_get) | **GET** /api/v2/broadcastservices | Gets broadcast services matching the given criteria.
[**api_v2_broadcastservices_id_get**](BroadcastServicesApi.md#api_v2_broadcastservices_id_get) | **GET** /api/v2/broadcastservices/{id} | Returns the broadcast service matching the given ID.


# **api_v2_broadcastservices_get**
> List[Episode] api_v2_broadcastservices_get(page_start=page_start, page_size=page_size, order_by_id=order_by_id)

Gets broadcast services matching the given criteria.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.models.episode import Episode
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
    api_instance = openapi_client.BroadcastServicesApi(api_client)
    page_start = 0 # int | The start page of the results to return. The first item is indexed at 0. (optional) (default to 0)
    page_size = 500 # int | The number of items to return. Must be between 0 and 500, inclusive. (optional) (default to 500)
    order_by_id = 'order_by_id_example' # str | The sort order of the list of broadcast services, based on broadcast service ID. If unspecified, the broadcast services are returned in random order. If using paging to iterate through the results, sort order should be specified. (optional)

    try:
        # Gets broadcast services matching the given criteria.
        api_response = api_instance.api_v2_broadcastservices_get(page_start=page_start, page_size=page_size, order_by_id=order_by_id)
        print("The response of BroadcastServicesApi->api_v2_broadcastservices_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BroadcastServicesApi->api_v2_broadcastservices_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_start** | **int**| The start page of the results to return. The first item is indexed at 0. | [optional] [default to 0]
 **page_size** | **int**| The number of items to return. Must be between 0 and 500, inclusive. | [optional] [default to 500]
 **order_by_id** | **str**| The sort order of the list of broadcast services, based on broadcast service ID. If unspecified, the broadcast services are returned in random order. If using paging to iterate through the results, sort order should be specified. | [optional] 

### Return type

[**List[Episode]**](Episode.md)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The matching broadcast services. |  -  |
**400** | The request is missing required data or invalid. |  -  |
**403** | Authorization failed, username or password not found or incorrect. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_broadcastservices_id_get**
> BroadcastService api_v2_broadcastservices_id_get(id)

Returns the broadcast service matching the given ID.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.models.broadcast_service import BroadcastService
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
    api_instance = openapi_client.BroadcastServicesApi(api_client)
    id = 56 # int | The ID of the broadcast service to find.

    try:
        # Returns the broadcast service matching the given ID.
        api_response = api_instance.api_v2_broadcastservices_id_get(id)
        print("The response of BroadcastServicesApi->api_v2_broadcastservices_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BroadcastServicesApi->api_v2_broadcastservices_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the broadcast service to find. | 

### Return type

[**BroadcastService**](BroadcastService.md)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The matching broadcast service. |  -  |
**403** | Authorization failed, or the user is not permitted to view this broadcast service. |  -  |
**404** | The broadcast service cannot be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

