# openapi_client.ProductApisApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**product_api_create_or_update**](ProductApisApi.md#product_api_create_or_update) | **PUT** /products/{productId}/apis/{apiId} | 
[**product_api_delete**](ProductApisApi.md#product_api_delete) | **DELETE** /products/{productId}/apis/{apiId} | 
[**product_api_list_by_product**](ProductApisApi.md#product_api_list_by_product) | **GET** /products/{productId}/apis | 


# **product_api_create_or_update**
> ProductApiCreateOrUpdate200Response product_api_create_or_update(product_id, api_id, api_version)



Adds an API to the specified product.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.product_api_create_or_update200_response import ProductApiCreateOrUpdate200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductApisApi(api_client)
    product_id = 'product_id_example' # str | Product identifier. Must be unique in the current API Management service instance.
    api_id = 'api_id_example' # str | API identifier. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_response = api_instance.product_api_create_or_update(product_id, api_id, api_version)
        print("The response of ProductApisApi->product_api_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApisApi->product_api_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Product identifier. Must be unique in the current API Management service instance. | 
 **api_id** | **str**| API identifier. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**ProductApiCreateOrUpdate200Response**](ProductApiCreateOrUpdate200Response.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specified API is already added to the product. |  -  |
**201** | The API was successfully added to the product. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_api_delete**
> product_api_delete(product_id, api_id, api_version)



Deletes the specified API from the specified product.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductApisApi(api_client)
    product_id = 'product_id_example' # str | Product identifier. Must be unique in the current API Management service instance.
    api_id = 'api_id_example' # str | API identifier. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_instance.product_api_delete(product_id, api_id, api_version)
    except Exception as e:
        print("Exception when calling ProductApisApi->product_api_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Product identifier. Must be unique in the current API Management service instance. | 
 **api_id** | **str**| API identifier. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The API was successfully removed from the product. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_api_list_by_product**
> ProductApiListByProduct200Response product_api_list_by_product(product_id, api_version, filter=filter, top=top, skip=skip)



Lists a collection of the APIs associated with a product.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.product_api_list_by_product200_response import ProductApiListByProduct200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductApisApi(api_client)
    product_id = 'product_id_example' # str | Product identifier. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    filter = 'filter_example' # str | | Field       | Supported operators    | Supported functions                         | |-------------|------------------------|---------------------------------------------| | id          | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | name        | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | description | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | serviceUrl  | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | path        | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |  (optional)
    top = 56 # int | Number of records to return. (optional)
    skip = 56 # int | Number of records to skip. (optional)

    try:
        api_response = api_instance.product_api_list_by_product(product_id, api_version, filter=filter, top=top, skip=skip)
        print("The response of ProductApisApi->product_api_list_by_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApisApi->product_api_list_by_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Product identifier. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **filter** | **str**| | Field       | Supported operators    | Supported functions                         | |-------------|------------------------|---------------------------------------------| | id          | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | name        | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | description | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | serviceUrl  | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | path        | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith |  | [optional] 
 **top** | **int**| Number of records to return. | [optional] 
 **skip** | **int**| Number of records to skip. | [optional] 

### Return type

[**ProductApiListByProduct200Response**](ProductApiListByProduct200Response.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body contains a collection of Api entities in the product. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

