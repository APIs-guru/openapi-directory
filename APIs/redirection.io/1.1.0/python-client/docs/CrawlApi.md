# openapi_client.CrawlApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_crawl_item**](CrawlApi.md#cancel_crawl_item) | **POST** /crawls/{id}/cancel | Creates a Crawl resource.
[**get_crawl_collection**](CrawlApi.md#get_crawl_collection) | **GET** /crawls | Retrieves the collection of Crawl resources.
[**get_crawl_item**](CrawlApi.md#get_crawl_item) | **GET** /crawls/{id} | Retrieves a Crawl resource.
[**post_crawl_collection**](CrawlApi.md#post_crawl_collection) | **POST** /crawls | Creates a Crawl resource.


# **cancel_crawl_item**
> CrawlReadDetails cancel_crawl_item(id, crawl=crawl)

Creates a Crawl resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.crawl import Crawl
from openapi_client.models.crawl_read_details import CrawlReadDetails
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
    api_instance = openapi_client.CrawlApi(api_client)
    id = 'id_example' # str | 
    crawl = openapi_client.Crawl() # Crawl | The new Crawl resource (optional)

    try:
        # Creates a Crawl resource.
        api_response = api_instance.cancel_crawl_item(id, crawl=crawl)
        print("The response of CrawlApi->cancel_crawl_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrawlApi->cancel_crawl_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **crawl** | [**Crawl**](Crawl.md)| The new Crawl resource | [optional] 

### Return type

[**CrawlReadDetails**](CrawlReadDetails.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Crawl resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_crawl_collection**
> List[CrawlRead] get_crawl_collection(project_id, first_url=first_url, sort_created_at=sort_created_at, page=page)

Retrieves the collection of Crawl resources.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.crawl_read import CrawlRead
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
    api_instance = openapi_client.CrawlApi(api_client)
    project_id = 'project_id_example' # str | 
    first_url = 'first_url_example' # str |  (optional)
    sort_created_at = 'sort_created_at_example' # str |  (optional)
    page = 56 # int | The collection page number (optional)

    try:
        # Retrieves the collection of Crawl resources.
        api_response = api_instance.get_crawl_collection(project_id, first_url=first_url, sort_created_at=sort_created_at, page=page)
        print("The response of CrawlApi->get_crawl_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrawlApi->get_crawl_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**|  | 
 **first_url** | **str**|  | [optional] 
 **sort_created_at** | **str**|  | [optional] 
 **page** | **int**| The collection page number | [optional] 

### Return type

[**List[CrawlRead]**](CrawlRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Crawl collection response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_crawl_item**
> CrawlReadDetails get_crawl_item(id)

Retrieves a Crawl resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.crawl_read_details import CrawlReadDetails
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
    api_instance = openapi_client.CrawlApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieves a Crawl resource.
        api_response = api_instance.get_crawl_item(id)
        print("The response of CrawlApi->get_crawl_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrawlApi->get_crawl_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**CrawlReadDetails**](CrawlReadDetails.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Crawl resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_crawl_collection**
> Crawl post_crawl_collection(crawl=crawl)

Creates a Crawl resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.crawl import Crawl
from openapi_client.models.crawl_write import CrawlWrite
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
    api_instance = openapi_client.CrawlApi(api_client)
    crawl = openapi_client.CrawlWrite() # CrawlWrite | The new Crawl resource (optional)

    try:
        # Creates a Crawl resource.
        api_response = api_instance.post_crawl_collection(crawl=crawl)
        print("The response of CrawlApi->post_crawl_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrawlApi->post_crawl_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crawl** | [**CrawlWrite**](CrawlWrite.md)| The new Crawl resource | [optional] 

### Return type

[**Crawl**](Crawl.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Crawl resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

