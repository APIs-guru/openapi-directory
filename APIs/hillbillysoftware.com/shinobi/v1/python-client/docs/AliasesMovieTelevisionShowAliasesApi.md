# openapi_client.AliasesMovieTelevisionShowAliasesApi

All URIs are relative to *https://api.hillbillysoftware.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**aliases_by_id_get**](AliasesMovieTelevisionShowAliasesApi.md#aliases_by_id_get) | **GET** /Aliases/ByID/{AccessToken}/{imdbID} | Get known aliases for Movies or Television shows from passed imdbID
[**aliases_get**](AliasesMovieTelevisionShowAliasesApi.md#aliases_get) | **GET** /Aliases/ByName/{AccessToken}/{Title} | Get known aliases for Movies or Television shows


# **aliases_by_id_get**
> List[Aliases] aliases_by_id_get(access_token, imdb_id)

Get known aliases for Movies or Television shows from passed imdbID

### Example


```python
import openapi_client
from openapi_client.models.aliases import Aliases
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AliasesMovieTelevisionShowAliasesApi(api_client)
    access_token = 'access_token_example' # str | 
    imdb_id = 'imdb_id_example' # str | 

    try:
        # Get known aliases for Movies or Television shows from passed imdbID
        api_response = api_instance.aliases_by_id_get(access_token, imdb_id)
        print("The response of AliasesMovieTelevisionShowAliasesApi->aliases_by_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AliasesMovieTelevisionShowAliasesApi->aliases_by_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **imdb_id** | **str**|  | 

### Return type

[**List[Aliases]**](Aliases.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of known Aliases |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **aliases_get**
> List[Aliases] aliases_get(access_token, title)

Get known aliases for Movies or Television shows

### Example


```python
import openapi_client
from openapi_client.models.aliases import Aliases
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.hillbillysoftware.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.hillbillysoftware.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AliasesMovieTelevisionShowAliasesApi(api_client)
    access_token = 'access_token_example' # str | 
    title = 'title_example' # str | Title of movie or television show

    try:
        # Get known aliases for Movies or Television shows
        api_response = api_instance.aliases_get(access_token, title)
        print("The response of AliasesMovieTelevisionShowAliasesApi->aliases_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AliasesMovieTelevisionShowAliasesApi->aliases_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**|  | 
 **title** | **str**| Title of movie or television show | 

### Return type

[**List[Aliases]**](Aliases.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of known Aliases |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

