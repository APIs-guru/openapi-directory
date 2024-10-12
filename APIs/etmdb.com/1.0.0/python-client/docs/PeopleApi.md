# openapi_client.PeopleApi

All URIs are relative to *https://etmdb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**people_search_read**](PeopleApi.md#people_search_read) | **GET** /api/v1/people/search/{user} | Return cast search result


# **people_search_read**
> people_search_read(user)

Return cast search result

Return cast search result  ### Response Class (Status 200) __{param}__ argument can be * artist first name * artist last name * artist username  For more details on how cast are listed [see here][ref]. [ref]: https://etmdb.com/en/cast-list/-updated_date

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
    api_instance = openapi_client.PeopleApi(api_client)
    user = 'user_example' # str | 

    try:
        # Return cast search result
        api_instance.people_search_read(user)
    except Exception as e:
        print("Exception when calling PeopleApi->people_search_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **str**|  | 

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

