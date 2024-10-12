# openapi_client.DefaultApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**post_signin**](DefaultApi.md#post_signin) | **POST** /signin | Exchange basic auth credentials for session
[**post_signout**](DefaultApi.md#post_signout) | **POST** /signout | Expire the current session


# **post_signin**
> post_signin(zap_trace_span=zap_trace_span)

Exchange basic auth credentials for session

### Example

* Basic Authentication (BasicAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: BasicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Exchange basic auth credentials for session
        api_instance.post_signin(zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling DefaultApi->post_signin: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successfully authenticated |  -  |
**401** | Unauthorized access |  -  |
**403** | user account is disabled |  -  |
**0** | Unsuccessful authentication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_signout**
> post_signout(zap_trace_span=zap_trace_span)

Expire the current session

### Example


```python
import openapi_client
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
    api_instance = openapi_client.DefaultApi(api_client)
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Expire the current session
        api_instance.post_signout(zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling DefaultApi->post_signout: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Session successfully expired |  -  |
**401** | Unauthorized access |  -  |
**0** | Unsuccessful session expiry |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

