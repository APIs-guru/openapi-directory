# openapi_client.ReadyApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_ready**](ReadyApi.md#get_ready) | **GET** /ready | Get the readiness of an instance at startup


# **get_ready**
> Ready get_ready(zap_trace_span=zap_trace_span)

Get the readiness of an instance at startup

### Example


```python
import openapi_client
from openapi_client.models.ready import Ready
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReadyApi(api_client)
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Get the readiness of an instance at startup
        api_response = api_instance.get_ready(zap_trace_span=zap_trace_span)
        print("The response of ReadyApi->get_ready:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReadyApi->get_ready: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Ready**](Ready.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The instance is ready |  -  |
**0** | Non 2XX error response from server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

