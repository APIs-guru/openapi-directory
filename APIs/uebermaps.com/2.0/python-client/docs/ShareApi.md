# openapi_client.ShareApi

All URIs are relative to *http://uebermaps.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**share_map_id_get**](ShareApi.md#share_map_id_get) | **GET** /share/map/{id} | Get secret access token to share map


# **share_map_id_get**
> MapWithAuthToken share_map_id_get(id)

Get secret access token to share map

Get secret access token of an uebermap with access set to 'Secret link'. Pass the 'token' on every request you make to access this uebermap and its resources. F.e. token=1-x_gqu7eLBe3uKoAGAGXy

### Example


```python
import openapi_client
from openapi_client.models.map_with_auth_token import MapWithAuthToken
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ShareApi(api_client)
    id = 56 # int | Id of map

    try:
        # Get secret access token to share map
        api_response = api_instance.share_map_id_get(id)
        print("The response of ShareApi->share_map_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareApi->share_map_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Id of map | 

### Return type

[**MapWithAuthToken**](MapWithAuthToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains map data and a secret token to access this map. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

