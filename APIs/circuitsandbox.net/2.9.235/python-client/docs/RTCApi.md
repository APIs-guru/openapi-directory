# openapi_client.RTCApi

All URIs are relative to *https://circuitsandbox.net/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_active_sessions**](RTCApi.md#get_active_sessions) | **GET** /rtc/sessions | Gets a list of active sessions


# **get_active_sessions**
> Label get_active_sessions()

Gets a list of active sessions

Gets a list of active RTCsessions OauthScopes: CALLS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.label import Label
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RTCApi(api_client)

    try:
        # Gets a list of active sessions
        api_response = api_instance.get_active_sessions()
        print("The response of RTCApi->get_active_sessions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RTCApi->get_active_sessions: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Label**](Label.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of active RTCsessions was returned |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

