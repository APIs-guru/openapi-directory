# openapi_client.RoutingKeysApi

All URIs are relative to *https://api.victorops.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_public_v1_org_routing_keys_get**](RoutingKeysApi.md#api_public_v1_org_routing_keys_get) | **GET** /api-public/v1/org/routing-keys | List routing keys with associated teams


# **api_public_v1_org_routing_keys_get**
> ListRoutingKeysResponse api_public_v1_org_routing_keys_get(x_vo_api_id, x_vo_api_key)

List routing keys with associated teams

Retrieves a list of routing keys and associated teams. This API may be called a maximum of 60 times per minute.

### Example


```python
import openapi_client
from openapi_client.models.list_routing_keys_response import ListRoutingKeysResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RoutingKeysApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key

    try:
        # List routing keys with associated teams
        api_response = api_instance.api_public_v1_org_routing_keys_get(x_vo_api_id, x_vo_api_key)
        print("The response of RoutingKeysApi->api_public_v1_org_routing_keys_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingKeysApi->api_public_v1_org_routing_keys_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 

### Return type

[**ListRoutingKeysResponse**](ListRoutingKeysResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of routing keys and associated teams |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Path not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

