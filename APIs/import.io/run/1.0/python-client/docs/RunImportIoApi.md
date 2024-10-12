# openapi_client.RunImportIoApi

All URIs are relative to *https://run.import.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**extractor_extractor_id_cancel_post**](RunImportIoApi.md#extractor_extractor_id_cancel_post) | **POST** /extractor/{extractorId}/cancel | Cancel an existing crawl.
[**extractor_extractor_id_start_post**](RunImportIoApi.md#extractor_extractor_id_start_post) | **POST** /extractor/{extractorId}/start | Launch a crawl from an extractor that a user owns.


# **extractor_extractor_id_cancel_post**
> Dict[str, str] extractor_extractor_id_cancel_post(extractor_id)

Cancel an existing crawl.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://run.import.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://run.import.io"
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
    api_instance = openapi_client.RunImportIoApi(api_client)
    extractor_id = 'extractor_id_example' # str | extractorId

    try:
        # Cancel an existing crawl.
        api_response = api_instance.extractor_extractor_id_cancel_post(extractor_id)
        print("The response of RunImportIoApi->extractor_extractor_id_cancel_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunImportIoApi->extractor_extractor_id_cancel_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extractor_id** | **str**| extractorId | 

### Return type

**Dict[str, str]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | No in progress crawl found to cancel. |  -  |
**401** | User doesn&#39;t own this extractor, or doesn&#39;t have a valid session. |  -  |
**404** | Unable to find supplied extractor ID. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extractor_extractor_id_start_post**
> Dict[str, str] extractor_extractor_id_start_post(extractor_id)

Launch a crawl from an extractor that a user owns.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://run.import.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://run.import.io"
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
    api_instance = openapi_client.RunImportIoApi(api_client)
    extractor_id = 'extractor_id_example' # str | the id of the extractor to start crawling with

    try:
        # Launch a crawl from an extractor that a user owns.
        api_response = api_instance.extractor_extractor_id_start_post(extractor_id)
        print("The response of RunImportIoApi->extractor_extractor_id_start_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunImportIoApi->extractor_extractor_id_start_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extractor_id** | **str**| the id of the extractor to start crawling with | 

### Return type

**Dict[str, str]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Extractor is archived or a crawl already in progress. |  -  |
**401** | User doesn&#39;t own this extractor, or doesn&#39;t have a valid session. |  -  |
**404** | Unable to find supplied extractor ID. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

