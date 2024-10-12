# openapi_client.PingApi

All URIs are relative to *http://scrapewebsite.email*

Method | HTTP request | Description
------------- | ------------- | -------------
[**g_etv1_ping_format**](PingApi.md#g_etv1_ping_format) | **GET** /v1/ping.json | Returns whether the system is up.


# **g_etv1_ping_format**
> g_etv1_ping_format()

Returns whether the system is up.

<p>Returns ‘pong’ if the site is up</p> 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://scrapewebsite.email
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://scrapewebsite.email"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PingApi(api_client)

    try:
        # Returns whether the system is up.
        api_instance.g_etv1_ping_format()
    except Exception as e:
        print("Exception when calling PingApi->g_etv1_ping_format: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

