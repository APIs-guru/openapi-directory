# openapi_client.CategoryApi

All URIs are relative to *https://api.apideck.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categories_all**](CategoryApi.md#categories_all) | **GET** /ecosystems/{ecosystem_id}/categories | List categories
[**categories_one**](CategoryApi.md#categories_one) | **GET** /ecosystems/{ecosystem_id}/categories/{id} | Get category
[**category_listings_all**](CategoryApi.md#category_listings_all) | **GET** /ecosystems/{ecosystem_id}/categories/{id}/listings | List category listings


# **categories_all**
> GetCategoriesResponse categories_all(ecosystem_id, cursor=cursor, limit=limit)

List categories

List categories

### Example


```python
import openapi_client
from openapi_client.models.get_categories_response import GetCategoriesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.apideck.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CategoryApi(api_client)
    ecosystem_id = 'ecosystem_id_example' # str | 
    cursor = 'cursor_example' # str | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. (optional)
    limit = 50 # int | Number of records to return (optional) (default to 50)

    try:
        # List categories
        api_response = api_instance.categories_all(ecosystem_id, cursor=cursor, limit=limit)
        print("The response of CategoryApi->categories_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryApi->categories_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ecosystem_id** | **str**|  | 
 **cursor** | **str**| Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | [optional] 
 **limit** | **int**| Number of records to return | [optional] [default to 50]

### Return type

[**GetCategoriesResponse**](GetCategoriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Categories |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categories_one**
> GetCategoryResponse categories_one(ecosystem_id, id)

Get category

Get category

### Example


```python
import openapi_client
from openapi_client.models.get_category_response import GetCategoryResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.apideck.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CategoryApi(api_client)
    ecosystem_id = 'ecosystem_id_example' # str | 
    id = 'id_example' # str | ID of the record you are acting upon.

    try:
        # Get category
        api_response = api_instance.categories_one(ecosystem_id, id)
        print("The response of CategoryApi->categories_one:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryApi->categories_one: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ecosystem_id** | **str**|  | 
 **id** | **str**| ID of the record you are acting upon. | 

### Return type

[**GetCategoryResponse**](GetCategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Category |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **category_listings_all**
> GetListingsResponse category_listings_all(ecosystem_id, id, cursor=cursor, limit=limit)

List category listings

List category listings

### Example


```python
import openapi_client
from openapi_client.models.get_listings_response import GetListingsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.apideck.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CategoryApi(api_client)
    ecosystem_id = 'ecosystem_id_example' # str | 
    id = 'id_example' # str | ID of the record you are acting upon.
    cursor = 'cursor_example' # str | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. (optional)
    limit = 50 # int | Number of records to return (optional) (default to 50)

    try:
        # List category listings
        api_response = api_instance.category_listings_all(ecosystem_id, id, cursor=cursor, limit=limit)
        print("The response of CategoryApi->category_listings_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryApi->category_listings_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ecosystem_id** | **str**|  | 
 **id** | **str**| ID of the record you are acting upon. | 
 **cursor** | **str**| Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | [optional] 
 **limit** | **int**| Number of records to return | [optional] [default to 50]

### Return type

[**GetListingsResponse**](GetListingsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Listings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

