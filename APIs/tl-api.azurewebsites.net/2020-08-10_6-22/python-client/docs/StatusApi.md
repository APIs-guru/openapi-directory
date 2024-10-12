# openapi_client.StatusApi

All URIs are relative to *https://tl-api.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**status_get**](StatusApi.md#status_get) | **GET** /api/Status | Get the current status of message


# **status_get**
> MessageStatus status_get(message_id=message_id)

Get the current status of message

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.models.message_status import MessageStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://tl-api.azurewebsites.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://tl-api.azurewebsites.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StatusApi(api_client)
    message_id = 'message_id_example' # str | respose of POST request (optional)

    try:
        # Get the current status of message
        api_response = api_instance.status_get(message_id=message_id)
        print("The response of StatusApi->status_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatusApi->status_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message_id** | **str**| respose of POST request | [optional] 

### Return type

[**MessageStatus**](MessageStatus.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | same response result will retrun with different status and messageText |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

