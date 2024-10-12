# openapi_client.PublisherApi

All URIs are relative to *https://api.isbndb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**publisher_name_get**](PublisherApi.md#publisher_name_get) | **GET** /publisher/{name} | Gets publisher details
[**publishers_query_get**](PublisherApi.md#publishers_query_get) | **GET** /publishers/{query} | Search publishers


# **publisher_name_get**
> Publisher publisher_name_get(name, page=page, page_size=page_size)

Gets publisher details

Returns details and a list of books by the publisher.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.publisher import Publisher
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
    api_instance = openapi_client.PublisherApi(api_client)
    name = 'name_example' # str | The name of a publisher in the Publisher's database
    page = 'page_example' # str | The number of page to retrieve, please note the API will not return more than 10,000 results no matter how you paginate them (optional)
    page_size = 'page_size_example' # str | How many items should be returned per page, maximum of 1,000 (optional)

    try:
        # Gets publisher details
        api_response = api_instance.publisher_name_get(name, page=page, page_size=page_size)
        print("The response of PublisherApi->publisher_name_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublisherApi->publisher_name_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of a publisher in the Publisher&#39;s database | 
 **page** | **str**| The number of page to retrieve, please note the API will not return more than 10,000 results no matter how you paginate them | [optional] 
 **page_size** | **str**| How many items should be returned per page, maximum of 1,000 | [optional] 

### Return type

[**Publisher**](Publisher.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The publisher name was found in the database |  * Access-Control-Allow-Origin - CORS Header to allow different origin responses <br>  |
**404** | Publisher not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **publishers_query_get**
> publishers_query_get(query, page_size=page_size, page=page)

Search publishers

This returns a list of publishers that match the given query

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
    api_instance = openapi_client.PublisherApi(api_client)
    query = 'query_example' # str | A string to search for in the Publisher’s database
    page_size = 'page_size_example' # str | How many items should be returned per page, maximum of 1,000 (optional)
    page = 'page_example' # str | The number of page to retrieve, please note the API will not return more than 10,000 results no matter how you paginate them (optional)

    try:
        # Search publishers
        api_instance.publishers_query_get(query, page_size=page_size, page=page)
    except Exception as e:
        print("Exception when calling PublisherApi->publishers_query_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| A string to search for in the Publisher’s database | 
 **page_size** | **str**| How many items should be returned per page, maximum of 1,000 | [optional] 
 **page** | **str**| The number of page to retrieve, please note the API will not return more than 10,000 results no matter how you paginate them | [optional] 

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
**200** | The query string found results in the publisher&#39;s database |  * Access-Control-Allow-Origin - CORS Header to allow different origin responses <br>  |
**404** | There are no results in the publisher&#39;s database for the given query |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

