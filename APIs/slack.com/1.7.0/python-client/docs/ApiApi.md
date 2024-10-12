# openapi_client.ApiApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_test**](ApiApi.md#api_test) | **GET** /api.test | 


# **api_test**
> ApiTestSuccessSchema api_test(error=error, foo=foo)



Checks API calling code.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.api_test_success_schema import ApiTestSuccessSchema
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApiApi(api_client)
    error = 'error_example' # str | Error response to return (optional)
    foo = 'foo_example' # str | example property to return (optional)

    try:
        api_response = api_instance.api_test(error=error, foo=foo)
        print("The response of ApiApi->api_test:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiApi->api_test: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **error** | **str**| Error response to return | [optional] 
 **foo** | **str**| example property to return | [optional] 

### Return type

[**ApiTestSuccessSchema**](ApiTestSuccessSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Standard success response |  -  |
**0** | Artificial error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

