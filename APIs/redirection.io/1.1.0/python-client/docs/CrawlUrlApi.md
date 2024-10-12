# openapi_client.CrawlUrlApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_crawl_url_collection**](CrawlUrlApi.md#get_crawl_url_collection) | **GET** /crawl-urls | Retrieves the collection of CrawlUrl resources.
[**get_crawl_url_item**](CrawlUrlApi.md#get_crawl_url_item) | **GET** /crawl-urls/{id} | Retrieves a CrawlUrl resource.


# **get_crawl_url_collection**
> List[CrawlUrlRead] get_crawl_url_collection(page=page)

Retrieves the collection of CrawlUrl resources.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.crawl_url_read import CrawlUrlRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrawlUrlApi(api_client)
    page = 56 # int | The collection page number (optional)

    try:
        # Retrieves the collection of CrawlUrl resources.
        api_response = api_instance.get_crawl_url_collection(page=page)
        print("The response of CrawlUrlApi->get_crawl_url_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrawlUrlApi->get_crawl_url_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| The collection page number | [optional] 

### Return type

[**List[CrawlUrlRead]**](CrawlUrlRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | CrawlUrl collection response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_crawl_url_item**
> CrawlUrlRead get_crawl_url_item(id)

Retrieves a CrawlUrl resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.crawl_url_read import CrawlUrlRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrawlUrlApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieves a CrawlUrl resource.
        api_response = api_instance.get_crawl_url_item(id)
        print("The response of CrawlUrlApi->get_crawl_url_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrawlUrlApi->get_crawl_url_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**CrawlUrlRead**](CrawlUrlRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | CrawlUrl resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

