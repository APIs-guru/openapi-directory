# openapi_client.DefaultApi

All URIs are relative to *https://www.who-hosts-this.com/APIEndpoint*

Method | HTTP request | Description
------------- | ------------- | -------------
[**status_get**](DefaultApi.md#status_get) | **GET** /Status | View usage details for the current billing period


# **status_get**
> status_get()

View usage details for the current billing period

### Example

* Api Key Authentication (QueryKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.who-hosts-this.com/APIEndpoint
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.who-hosts-this.com/APIEndpoint"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: QueryKey
configuration.api_key['QueryKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['QueryKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # View usage details for the current billing period
        api_instance.status_get()
    except Exception as e:
        print("Exception when calling DefaultApi->status_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[QueryKey](../README.md#QueryKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status of the detection and list of any found hosting providers |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

