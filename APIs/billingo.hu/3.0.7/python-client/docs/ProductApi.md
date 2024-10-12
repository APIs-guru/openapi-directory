# openapi_client.ProductApi

All URIs are relative to *https://api.billingo.hu/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_product**](ProductApi.md#create_product) | **POST** /products | Create a product
[**delete_product**](ProductApi.md#delete_product) | **DELETE** /products/{id} | Delete a product
[**get_product**](ProductApi.md#get_product) | **GET** /products/{id} | Retrieve a product
[**list_product**](ProductApi.md#list_product) | **GET** /products | List all product
[**update_product**](ProductApi.md#update_product) | **PUT** /products/{id} | Update a product


# **create_product**
> Product create_product(product)

Create a product

Create a new product. Returns a product object if the create is succeded.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.product import Product
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.billingo.hu/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.billingo.hu/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductApi(api_client)
    product = openapi_client.Product() # Product | Product object that you would like to store.

    try:
        # Create a product
        api_response = api_instance.create_product(product)
        print("The response of ProductApi->create_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->create_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product** | [**Product**](Product.md)| Product object that you would like to store. | 

### Return type

[**Product**](Product.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Product created successfully. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**400** | The request is malformed. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**401** | Authorization information is missing or invalid. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**403** | Authenticated user doesn&#39;t have access to the resource. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**422** | Validation errors occured. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**500** | Internal server error. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_product**
> delete_product(id)

Delete a product

Delete an existing product.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.billingo.hu/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.billingo.hu/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductApi(api_client)
    id = 56 # int | 

    try:
        # Delete a product
        api_instance.delete_product(id)
    except Exception as e:
        print("Exception when calling ProductApi->delete_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Product deleted successfully. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**400** | The request is malformed. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**401** | Authorization information is missing or invalid. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**403** | Authenticated user doesn&#39;t have access to the resource. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**404** | Non-existent resource is requested. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**500** | Internal server error. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_product**
> Product get_product(id)

Retrieve a product

Retrieves the details of an existing product.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.product import Product
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.billingo.hu/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.billingo.hu/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductApi(api_client)
    id = 56 # int | 

    try:
        # Retrieve a product
        api_response = api_instance.get_product(id)
        print("The response of ProductApi->get_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->get_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**Product**](Product.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success response |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**400** | The request is malformed. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**401** | Authorization information is missing or invalid. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**404** | Non-existent resource is requested. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**422** | Validation errors occured. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**500** | Internal server error. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_product**
> ProductList list_product(page=page, per_page=per_page)

List all product

Returns a list of your products. The partners are returned sorted by creation date, with the most recent partners appearing first.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.product_list import ProductList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.billingo.hu/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.billingo.hu/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductApi(api_client)
    page = 56 # int |  (optional)
    per_page = 25 # int |  (optional) (default to 25)

    try:
        # List all product
        api_response = api_instance.list_product(page=page, per_page=per_page)
        print("The response of ProductApi->list_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->list_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**|  | [optional] 
 **per_page** | **int**|  | [optional] [default to 25]

### Return type

[**ProductList**](ProductList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success response |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**400** | The request is malformed. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**401** | Authorization information is missing or invalid. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**422** | Validation errors occured. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**500** | Internal server error. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_product**
> Product update_product(id, product)

Update a product

Update an existing product. Returns a product object if the update is succeded.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.product import Product
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.billingo.hu/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.billingo.hu/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductApi(api_client)
    id = 56 # int | 
    product = openapi_client.Product() # Product | Product object that you would like to update.

    try:
        # Update a product
        api_response = api_instance.update_product(id, product)
        print("The response of ProductApi->update_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->update_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **product** | [**Product**](Product.md)| Product object that you would like to update. | 

### Return type

[**Product**](Product.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Product updated successfully. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**400** | The request is malformed. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**401** | Authorization information is missing or invalid. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**403** | Authenticated user doesn&#39;t have access to the resource. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**404** | Non-existent resource is requested. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**422** | Validation errors occured. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**500** | Internal server error. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

