# openapi_client.DefaultApi

All URIs are relative to *http://stream-api.betfair.com:443/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**request_post**](DefaultApi.md#request_post) | **POST** /request | 


# **request_post**
> AllResponseTypesExample request_post(all_request_types_example)



This is a socket protocol delimited by CRLF (not http)

### Example


```python
import openapi_client
from openapi_client.models.all_request_types_example import AllRequestTypesExample
from openapi_client.models.all_response_types_example import AllResponseTypesExample
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://stream-api.betfair.com:443/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://stream-api.betfair.com:443/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    all_request_types_example = openapi_client.AllRequestTypesExample() # AllRequestTypesExample | Requests are sent to socket

    try:
        api_response = api_instance.request_post(all_request_types_example)
        print("The response of DefaultApi->request_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->request_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all_request_types_example** | [**AllRequestTypesExample**](AllRequestTypesExample.md)| Requests are sent to socket | 

### Return type

[**AllResponseTypesExample**](AllResponseTypesExample.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Responses are received from socket |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

