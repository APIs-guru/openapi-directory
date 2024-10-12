# openapi_client.CinemaDetailApi

All URIs are relative to *https://etmdb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cinema_detail_search_read**](CinemaDetailApi.md#cinema_detail_search_read) | **GET** /api/v1/cinema-detail/search/{cinema_name} | Return cinema details search result


# **cinema_detail_search_read**
> cinema_detail_search_read(cinema_name)

Return cinema details search result

Return cinema details search result  ### Response Class (Status 200)  * __{cinema_name}__: Used as a key word to search cinemas,  For more details on how cinemas are listed [see here][ref]. [ref]: https://etmdb.com/en/cinema-list/-updated_date

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
    api_instance = openapi_client.CinemaDetailApi(api_client)
    cinema_name = 'cinema_name_example' # str | 

    try:
        # Return cinema details search result
        api_instance.cinema_detail_search_read(cinema_name)
    except Exception as e:
        print("Exception when calling CinemaDetailApi->cinema_detail_search_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cinema_name** | **str**|  | 

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

