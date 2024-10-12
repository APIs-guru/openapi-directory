# openapi_client.RssImportIoApi

All URIs are relative to *https://rss.import.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**extractor_extractor_id_runs_get**](RssImportIoApi.md#extractor_extractor_id_runs_get) | **GET** /extractor/{extractorId}/runs | Get a feed of the runs performed on an extractor


# **extractor_extractor_id_runs_get**
> Dict[str, str] extractor_extractor_id_runs_get(extractor_id)

Get a feed of the runs performed on an extractor

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rss.import.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rss.import.io"
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
    api_instance = openapi_client.RssImportIoApi(api_client)
    extractor_id = 'extractor_id_example' # str | The id of the extractor to start get the crawl run data

    try:
        # Get a feed of the runs performed on an extractor
        api_response = api_instance.extractor_extractor_id_runs_get(extractor_id)
        print("The response of RssImportIoApi->extractor_extractor_id_runs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RssImportIoApi->extractor_extractor_id_runs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extractor_id** | **str**| The id of the extractor to start get the crawl run data | 

### Return type

**Dict[str, str]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | User doesn&#39;t own this extractor, or doesn&#39;t have a valid session. |  -  |
**404** | Not found: Extractor has not been run. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

