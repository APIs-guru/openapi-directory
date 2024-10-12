# openapi_client.ProductApi

All URIs are relative to *https://api.apideck.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**product_listings_all**](ProductApi.md#product_listings_all) | **GET** /ecosystems/{ecosystem_id}/products/{id}/listings | List product listings
[**products_all**](ProductApi.md#products_all) | **GET** /ecosystems/{ecosystem_id}/products | List products
[**products_one**](ProductApi.md#products_one) | **GET** /ecosystems/{ecosystem_id}/products/{id} | Get product


# **product_listings_all**
> GetListingsResponse product_listings_all(ecosystem_id, id, cursor=cursor, limit=limit)

List product listings

List product listings

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
    api_instance = openapi_client.ProductApi(api_client)
    ecosystem_id = 'ecosystem_id_example' # str | 
    id = 'id_example' # str | ID of the record you are acting upon.
    cursor = 'cursor_example' # str | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. (optional)
    limit = 50 # int | Number of records to return (optional) (default to 50)

    try:
        # List product listings
        api_response = api_instance.product_listings_all(ecosystem_id, id, cursor=cursor, limit=limit)
        print("The response of ProductApi->product_listings_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_listings_all: %s\n" % e)
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

# **products_all**
> GetProductsResponse products_all(ecosystem_id)

List products

List products

### Example


```python
import openapi_client
from openapi_client.models.get_products_response import GetProductsResponse
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
    api_instance = openapi_client.ProductApi(api_client)
    ecosystem_id = 'ecosystem_id_example' # str | 

    try:
        # List products
        api_response = api_instance.products_all(ecosystem_id)
        print("The response of ProductApi->products_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->products_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ecosystem_id** | **str**|  | 

### Return type

[**GetProductsResponse**](GetProductsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Products |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_one**
> GetProductResponse products_one(ecosystem_id, id)

Get product

Get product

### Example


```python
import openapi_client
from openapi_client.models.get_product_response import GetProductResponse
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
    api_instance = openapi_client.ProductApi(api_client)
    ecosystem_id = 'ecosystem_id_example' # str | 
    id = 'id_example' # str | ID of the record you are acting upon.

    try:
        # Get product
        api_response = api_instance.products_one(ecosystem_id, id)
        print("The response of ProductApi->products_one:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->products_one: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ecosystem_id** | **str**|  | 
 **id** | **str**| ID of the record you are acting upon. | 

### Return type

[**GetProductResponse**](GetProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Product |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

