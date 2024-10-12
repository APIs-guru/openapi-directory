# openapi_client.DefaultApi

All URIs are relative to *https://api.goog.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**crawl**](DefaultApi.md#crawl) | **GET** /v1/crawl/{query} | Crawl
[**get_the_status_of_the_api_service**](DefaultApi.md#get_the_status_of_the_api_service) | **GET** / | Status
[**images**](DefaultApi.md#images) | **GET** /v1/images/{query} | Images
[**news**](DefaultApi.md#news) | **GET** /v1/news/{query} | News
[**search**](DefaultApi.md#search) | **GET** /v1/search/{query} | Search
[**serp**](DefaultApi.md#serp) | **POST** /v1/serp/ | SERP


# **crawl**
> Crawl200Response crawl(query)

Crawl

Perform Google Search   Parameters ---------- query : the string query to perform search. supports advance queries. Check out https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters guide for formating  Returns ------- json: a the html source of the results page

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.crawl200_response import Crawl200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.goog.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.goog.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    query = 'q=google+search+api' # str | 

    try:
        # Crawl
        api_response = api_instance.crawl(query)
        print("The response of DefaultApi->crawl:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->crawl: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**|  | 

### Return type

[**Crawl200Response**](Crawl200Response.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**404** | Not Found |  -  |
**422** | Validation Error |  -  |
**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_the_status_of_the_api_service**
> GetTheStatusOfTheAPIService200Response get_the_status_of_the_api_service()

Status

It \"status\" == true then API is up, else the API is down

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.get_the_status_of_the_api_service200_response import GetTheStatusOfTheAPIService200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.goog.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.goog.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # Status
        api_response = api_instance.get_the_status_of_the_api_service()
        print("The response of DefaultApi->get_the_status_of_the_api_service:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_the_status_of_the_api_service: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetTheStatusOfTheAPIService200Response**](GetTheStatusOfTheAPIService200Response.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **images**
> Images200Response images(query)

Images

Perform Google Image Search  Parameters ---------- query : the string query to perform search. supports advance queries.  Returns ------- json: a list of results with the link, description, and title for each result

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.images200_response import Images200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.goog.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.goog.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    query = 'query_example' # str | 

    try:
        # Images
        api_response = api_instance.images(query)
        print("The response of DefaultApi->images:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->images: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**|  | 

### Return type

[**Images200Response**](Images200Response.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **news**
> News200Response news(query)

News

Perform Google News Search   Parameters ---------- query : the string query to perform search for Google news. A simple query for `president` will be `q=president`. An example of multiple keyword would be `q=news+about+presdient+trump`. News can also be filtered by country and language. For `US` news and in English the query will be `q=trump&ceid=US:en` for news in Great Britian the query will be `q=trump&ceid=GB:en`  Returns ------- json: {\"feed\": { \"title\" : \"trump\" ...} , \"entites\": [ {\"title\" : \"Trump doubles down on divisive messaging in speech to honor Independence Day - CNN\", \"links\": []} ...]}

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.news200_response import News200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.goog.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.goog.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    query = 'query_example' # str | 

    try:
        # News
        api_response = api_instance.news(query)
        print("The response of DefaultApi->news:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->news: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**|  | 

### Return type

[**News200Response**](News200Response.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity (WebDAV) |  -  |
**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search**
> Search200Response search(query)

Search

Perform Google Search  Parameters ---------- query : the string query to perform search. supports advance queries. Check out https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters guide for formating  Returns ------- json: a list of results with the link, description, and title for each result

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.search200_response import Search200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.goog.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.goog.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    query = 'q=google+search+api' # str | 

    try:
        # Search
        api_response = api_instance.search(query)
        print("The response of DefaultApi->search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**|  | 

### Return type

[**Search200Response**](Search200Response.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**404** | Not Found |  -  |
**422** | Validation Error |  -  |
**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **serp**
> Serp200Response serp(serp_data)

SERP

Perform Google Search and search for website in Search Engine Results Pages (SERP)  Parameters ---------- query : the string query to perform search. supports advance queries. Check out https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters guide for formatting, it is recommended to set the query `&num=100`  Returns ------- json: a list of results with the query, website, searched_results, and position. json[\"position\"] will be set to -1 if website is not found in results

### Example

* Api Key Authentication (apikey):

```python
import openapi_client
from openapi_client.models.serp200_response import Serp200Response
from openapi_client.models.serp_data import SerpData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.goog.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.goog.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apikey
configuration.api_key['apikey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apikey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    serp_data = openapi_client.SerpData() # SerpData | 

    try:
        # SERP
        api_response = api_instance.serp(serp_data)
        print("The response of DefaultApi->serp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->serp: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serp_data** | [**SerpData**](SerpData.md)|  | 

### Return type

[**Serp200Response**](Serp200Response.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**404** | Not Found |  -  |
**422** | Validation Error |  -  |
**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

