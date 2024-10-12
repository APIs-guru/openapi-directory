# openapi_client.CompanyCreditsApi

All URIs are relative to *https://etmdb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**company_credits_search_read**](CompanyCreditsApi.md#company_credits_search_read) | **GET** /api/v1/company-credits/search/{movie_title} | Return company credits search result
[**company_credits_searchall_read**](CompanyCreditsApi.md#company_credits_searchall_read) | **GET** /api/v1/company-credits/searchall/{param} | Return company credits search result


# **company_credits_search_read**
> company_credits_search_read(movie_title)

Return company credits search result

Return company credits search result  ### Response Class (Status 200)  * __{movie_title}__: Used as a key word to search company credits for the movie * You can use both Amharic or English charset/font to search  For more details on how company credits are listed [see here][ref]. [ref]: https://etmdb.com/en/movie-list/-updated_date

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://etmdb.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://etmdb.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CompanyCreditsApi(api_client)
    movie_title = 'movie_title_example' # str | 

    try:
        # Return company credits search result
        api_instance.company_credits_search_read(movie_title)
    except Exception as e:
        print("Exception when calling CompanyCreditsApi->company_credits_search_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **movie_title** | **str**|  | 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **company_credits_searchall_read**
> company_credits_searchall_read(param)

Return company credits search result

Return company credits search result  ### Response Class (Status 200) __{param}__ argument can be * company name * movie title or * company credit description (such as production, cinematography, etc)  For more details on how company credits are listed [see here][ref]. [ref]: https://etmdb.com/en/company-list/company_name

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://etmdb.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://etmdb.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CompanyCreditsApi(api_client)
    param = 'param_example' # str | 

    try:
        # Return company credits search result
        api_instance.company_credits_searchall_read(param)
    except Exception as e:
        print("Exception when calling CompanyCreditsApi->company_credits_searchall_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **param** | **str**|  | 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

