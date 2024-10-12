# openapi_client.StatsApi

All URIs are relative to *https://api.isbndb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stats_get**](StatsApi.md#stats_get) | **GET** /stats | Gets status on the ISBNDB Database


# **stats_get**
> stats_get()

Gets status on the ISBNDB Database

Returns a status object about the ISBNDB database.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.isbndb.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.isbndb.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StatsApi(api_client)

    try:
        # Gets status on the ISBNDB Database
        api_instance.stats_get()
    except Exception as e:
        print("Exception when calling StatsApi->stats_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Stats on the ISBNDB sucessfully retrieved |  * Access-Control-Allow-Origin - CORS Header to allow different origin responses <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

