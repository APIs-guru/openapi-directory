# openapi_client.ProductsApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**product_create_or_update**](ProductsApi.md#product_create_or_update) | **PUT** /products/{productId} | 
[**product_delete**](ProductsApi.md#product_delete) | **DELETE** /products/{productId} | 
[**product_get**](ProductsApi.md#product_get) | **GET** /products/{productId} | 
[**product_list**](ProductsApi.md#product_list) | **GET** /products | 
[**product_update**](ProductsApi.md#product_update) | **PATCH** /products/{productId} | 


# **product_create_or_update**
> ProductContract product_create_or_update(product_id, api_version, parameters)



Creates or Updates a product.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.product_contract import ProductContract
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
    api_instance = openapi_client.ProductsApi(api_client)
    product_id = 'product_id_example' # str | Product identifier. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    parameters = openapi_client.ProductContract() # ProductContract | Create or update parameters.

    try:
        api_response = api_instance.product_create_or_update(product_id, api_version, parameters)
        print("The response of ProductsApi->product_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->product_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Product identifier. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **parameters** | [**ProductContract**](ProductContract.md)| Create or update parameters. | 

### Return type

[**ProductContract**](ProductContract.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Product was successfully updated. |  -  |
**201** | Product was successfully created. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_delete**
> product_delete(product_id, if_match, api_version, delete_subscriptions=delete_subscriptions)



Delete product.

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
    api_instance = openapi_client.ProductsApi(api_client)
    product_id = 'product_id_example' # str | Product identifier. Must be unique in the current API Management service instance.
    if_match = 'if_match_example' # str | ETag of the Product Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    delete_subscriptions = True # bool | Delete existing subscriptions to the product or not. (optional)

    try:
        api_instance.product_delete(product_id, if_match, api_version, delete_subscriptions=delete_subscriptions)
    except Exception as e:
        print("Exception when calling ProductsApi->product_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Product identifier. Must be unique in the current API Management service instance. | 
 **if_match** | **str**| ETag of the Product Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **delete_subscriptions** | **bool**| Delete existing subscriptions to the product or not. | [optional] 

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
**204** | The product was successfully deleted. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_get**
> ProductContract product_get(product_id, api_version)



Gets the details of the product specified by its identifier.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.product_contract import ProductContract
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
    api_instance = openapi_client.ProductsApi(api_client)
    product_id = 'product_id_example' # str | Product identifier. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_response = api_instance.product_get(product_id, api_version)
        print("The response of ProductsApi->product_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->product_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Product identifier. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**ProductContract**](ProductContract.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body contains the specified Product entity. |  * ETag - Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_list**
> ProductCollection product_list(api_version, filter=filter, top=top, skip=skip, expand_groups=expand_groups)



Lists a collection of products in the specified service instance.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.product_collection import ProductCollection
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
    api_instance = openapi_client.ProductsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    filter = 'filter_example' # str | | Field       | Supported operators    | Supported functions                         | |-------------|------------------------|---------------------------------------------| | id          | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | name        | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | description | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | terms       | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | state       | eq                     |                                             | (optional)
    top = 56 # int | Number of records to return. (optional)
    skip = 56 # int | Number of records to skip. (optional)
    expand_groups = True # bool | When set to true, the response contains an array of groups that have visibility to the product. The default is false. (optional)

    try:
        api_response = api_instance.product_list(api_version, filter=filter, top=top, skip=skip, expand_groups=expand_groups)
        print("The response of ProductsApi->product_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->product_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **filter** | **str**| | Field       | Supported operators    | Supported functions                         | |-------------|------------------------|---------------------------------------------| | id          | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | name        | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | description | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | terms       | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | state       | eq                     |                                             | | [optional] 
 **top** | **int**| Number of records to return. | [optional] 
 **skip** | **int**| Number of records to skip. | [optional] 
 **expand_groups** | **bool**| When set to true, the response contains an array of groups that have visibility to the product. The default is false. | [optional] 

### Return type

[**ProductCollection**](ProductCollection.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Collection of the Product entities for the specified API Management service instance. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_update**
> product_update(product_id, if_match, api_version, parameters)



Update product.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.product_update_parameters import ProductUpdateParameters
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
    api_instance = openapi_client.ProductsApi(api_client)
    product_id = 'product_id_example' # str | Product identifier. Must be unique in the current API Management service instance.
    if_match = 'if_match_example' # str | ETag of the Product Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    parameters = openapi_client.ProductUpdateParameters() # ProductUpdateParameters | Update parameters.

    try:
        api_instance.product_update(product_id, if_match, api_version, parameters)
    except Exception as e:
        print("Exception when calling ProductsApi->product_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Product identifier. Must be unique in the current API Management service instance. | 
 **if_match** | **str**| ETag of the Product Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **parameters** | [**ProductUpdateParameters**](ProductUpdateParameters.md)| Update parameters. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content in case of Update Successful. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

