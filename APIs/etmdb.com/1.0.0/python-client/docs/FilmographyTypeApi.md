# openapi_client.FilmographyTypeApi

All URIs are relative to *https://etmdb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filmography_type_search_read**](FilmographyTypeApi.md#filmography_type_search_read) | **GET** /api/v1/filmography-type/search/{filmography_description} | Return filmography type search result


# **filmography_type_search_read**
> filmography_type_search_read(filmography_description)

Return filmography type search result

Return filmography type search result  ### Response Class (Status 200)  * __{filmography_description}__: Used as a key word to search filmography types  For more details on how filmography types are listed [see here][ref]. [ref]: https://etmdb.com/en/movie-list/-updated_date

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
    api_instance = openapi_client.FilmographyTypeApi(api_client)
    filmography_description = 'filmography_description_example' # str | 

    try:
        # Return filmography type search result
        api_instance.filmography_type_search_read(filmography_description)
    except Exception as e:
        print("Exception when calling FilmographyTypeApi->filmography_type_search_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filmography_description** | **str**|  | 

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

