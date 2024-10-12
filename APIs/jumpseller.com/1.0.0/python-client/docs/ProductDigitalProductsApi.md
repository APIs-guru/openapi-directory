# openapi_client.ProductDigitalProductsApi

All URIs are relative to *https://api.jumpseller.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**products_id_digital_products_count_json_get**](ProductDigitalProductsApi.md#products_id_digital_products_count_json_get) | **GET** /products/{id}/digital_products/count.json | Count all Product DigitalProducts.
[**products_id_digital_products_digital_product_id_json_delete**](ProductDigitalProductsApi.md#products_id_digital_products_digital_product_id_json_delete) | **DELETE** /products/{id}/digital_products/{digital_product_id}.json | Delete a Product DigitalProduct.
[**products_id_digital_products_digital_product_id_json_get**](ProductDigitalProductsApi.md#products_id_digital_products_digital_product_id_json_get) | **GET** /products/{id}/digital_products/{digital_product_id}.json | Retrieve a single Product DigitalProduct.
[**products_id_digital_products_json_get**](ProductDigitalProductsApi.md#products_id_digital_products_json_get) | **GET** /products/{id}/digital_products.json | Retrieve all Product DigitalProducts.
[**products_id_digital_products_json_post**](ProductDigitalProductsApi.md#products_id_digital_products_json_post) | **POST** /products/{id}/digital_products.json | Create a new Product DigitalProduct.


# **products_id_digital_products_count_json_get**
> Count products_id_digital_products_count_json_get(login, authtoken, id)

Count all Product DigitalProducts.

### Example


```python
import openapi_client
from openapi_client.models.count import Count
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductDigitalProductsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | ID of the Product

    try:
        # Count all Product DigitalProducts.
        api_response = api_instance.products_id_digital_products_count_json_get(login, authtoken, id)
        print("The response of ProductDigitalProductsApi->products_id_digital_products_count_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductDigitalProductsApi->products_id_digital_products_count_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| ID of the Product | 

### Return type

[**Count**](Count.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Product Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_id_digital_products_digital_product_id_json_delete**
> str products_id_digital_products_digital_product_id_json_delete(login, authtoken, id, digital_product_id)

Delete a Product DigitalProduct.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductDigitalProductsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Product
    digital_product_id = 56 # int | Id of the Product DigitalProduct

    try:
        # Delete a Product DigitalProduct.
        api_response = api_instance.products_id_digital_products_digital_product_id_json_delete(login, authtoken, id, digital_product_id)
        print("The response of ProductDigitalProductsApi->products_id_digital_products_digital_product_id_json_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductDigitalProductsApi->products_id_digital_products_digital_product_id_json_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Product | 
 **digital_product_id** | **int**| Id of the Product DigitalProduct | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Product Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_id_digital_products_digital_product_id_json_get**
> DigitalProduct products_id_digital_products_digital_product_id_json_get(login, authtoken, id, digital_product_id)

Retrieve a single Product DigitalProduct.

### Example


```python
import openapi_client
from openapi_client.models.digital_product import DigitalProduct
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductDigitalProductsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Product
    digital_product_id = 56 # int | Id of the Product DigitalProduct

    try:
        # Retrieve a single Product DigitalProduct.
        api_response = api_instance.products_id_digital_products_digital_product_id_json_get(login, authtoken, id, digital_product_id)
        print("The response of ProductDigitalProductsApi->products_id_digital_products_digital_product_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductDigitalProductsApi->products_id_digital_products_digital_product_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Product | 
 **digital_product_id** | **int**| Id of the Product DigitalProduct | 

### Return type

[**DigitalProduct**](DigitalProduct.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Product Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_id_digital_products_json_get**
> List[DigitalProduct] products_id_digital_products_json_get(login, authtoken, id)

Retrieve all Product DigitalProducts.

### Example


```python
import openapi_client
from openapi_client.models.digital_product import DigitalProduct
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductDigitalProductsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | ID of the Product

    try:
        # Retrieve all Product DigitalProducts.
        api_response = api_instance.products_id_digital_products_json_get(login, authtoken, id)
        print("The response of ProductDigitalProductsApi->products_id_digital_products_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductDigitalProductsApi->products_id_digital_products_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| ID of the Product | 

### Return type

[**List[DigitalProduct]**](DigitalProduct.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Product Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_id_digital_products_json_post**
> DigitalProduct products_id_digital_products_json_post(login, authtoken, id, digital_product_edit)

Create a new Product DigitalProduct.

### Example


```python
import openapi_client
from openapi_client.models.digital_product import DigitalProduct
from openapi_client.models.digital_product_edit import DigitalProductEdit
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductDigitalProductsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Product
    digital_product_edit = openapi_client.DigitalProductEdit() # DigitalProductEdit | Product DigitalProduct parameters.

    try:
        # Create a new Product DigitalProduct.
        api_response = api_instance.products_id_digital_products_json_post(login, authtoken, id, digital_product_edit)
        print("The response of ProductDigitalProductsApi->products_id_digital_products_json_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductDigitalProductsApi->products_id_digital_products_json_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Product | 
 **digital_product_edit** | [**DigitalProductEdit**](DigitalProductEdit.md)| Product DigitalProduct parameters. | 

### Return type

[**DigitalProduct**](DigitalProduct.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

