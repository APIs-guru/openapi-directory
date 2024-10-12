# openapi_client.ProductVariantsApi

All URIs are relative to *https://api.jumpseller.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**products_id_variants_count_json_get**](ProductVariantsApi.md#products_id_variants_count_json_get) | **GET** /products/{id}/variants/count.json | Count all Product Variants.
[**products_id_variants_json_get**](ProductVariantsApi.md#products_id_variants_json_get) | **GET** /products/{id}/variants.json | Retrieve all Product Variants.
[**products_id_variants_json_post**](ProductVariantsApi.md#products_id_variants_json_post) | **POST** /products/{id}/variants.json | Create a new Product Variant.
[**products_id_variants_variant_id_json_get**](ProductVariantsApi.md#products_id_variants_variant_id_json_get) | **GET** /products/{id}/variants/{variant_id}.json | Retrieve a single Product Variant.
[**products_id_variants_variant_id_json_put**](ProductVariantsApi.md#products_id_variants_variant_id_json_put) | **PUT** /products/{id}/variants/{variant_id}.json | Modify an existing Product Variant.


# **products_id_variants_count_json_get**
> Count products_id_variants_count_json_get(login, authtoken, id)

Count all Product Variants.

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
    api_instance = openapi_client.ProductVariantsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | ID of the Product

    try:
        # Count all Product Variants.
        api_response = api_instance.products_id_variants_count_json_get(login, authtoken, id)
        print("The response of ProductVariantsApi->products_id_variants_count_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductVariantsApi->products_id_variants_count_json_get: %s\n" % e)
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

# **products_id_variants_json_get**
> List[Variant] products_id_variants_json_get(login, authtoken, id)

Retrieve all Product Variants.

### Example


```python
import openapi_client
from openapi_client.models.variant import Variant
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
    api_instance = openapi_client.ProductVariantsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | ID of the Product

    try:
        # Retrieve all Product Variants.
        api_response = api_instance.products_id_variants_json_get(login, authtoken, id)
        print("The response of ProductVariantsApi->products_id_variants_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductVariantsApi->products_id_variants_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| ID of the Product | 

### Return type

[**List[Variant]**](Variant.md)

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

# **products_id_variants_json_post**
> Variant products_id_variants_json_post(login, authtoken, id, variant_edit)

Create a new Product Variant.

### Example


```python
import openapi_client
from openapi_client.models.variant import Variant
from openapi_client.models.variant_edit import VariantEdit
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
    api_instance = openapi_client.ProductVariantsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Product
    variant_edit = openapi_client.VariantEdit() # VariantEdit | Product Variant parameters.

    try:
        # Create a new Product Variant.
        api_response = api_instance.products_id_variants_json_post(login, authtoken, id, variant_edit)
        print("The response of ProductVariantsApi->products_id_variants_json_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductVariantsApi->products_id_variants_json_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Product | 
 **variant_edit** | [**VariantEdit**](VariantEdit.md)| Product Variant parameters. | 

### Return type

[**Variant**](Variant.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Product Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_id_variants_variant_id_json_get**
> Variant products_id_variants_variant_id_json_get(login, authtoken, id, variant_id)

Retrieve a single Product Variant.

### Example


```python
import openapi_client
from openapi_client.models.variant import Variant
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
    api_instance = openapi_client.ProductVariantsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Product
    variant_id = 56 # int | Id of the Product Variant

    try:
        # Retrieve a single Product Variant.
        api_response = api_instance.products_id_variants_variant_id_json_get(login, authtoken, id, variant_id)
        print("The response of ProductVariantsApi->products_id_variants_variant_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductVariantsApi->products_id_variants_variant_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Product | 
 **variant_id** | **int**| Id of the Product Variant | 

### Return type

[**Variant**](Variant.md)

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

# **products_id_variants_variant_id_json_put**
> Variant products_id_variants_variant_id_json_put(login, authtoken, id, variant_id, variant_edit)

Modify an existing Product Variant.

### Example


```python
import openapi_client
from openapi_client.models.variant import Variant
from openapi_client.models.variant_edit import VariantEdit
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
    api_instance = openapi_client.ProductVariantsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Product
    variant_id = 56 # int | Id of the Product Variant
    variant_edit = openapi_client.VariantEdit() # VariantEdit | Product Variant parameters to change

    try:
        # Modify an existing Product Variant.
        api_response = api_instance.products_id_variants_variant_id_json_put(login, authtoken, id, variant_id, variant_edit)
        print("The response of ProductVariantsApi->products_id_variants_variant_id_json_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductVariantsApi->products_id_variants_variant_id_json_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Product | 
 **variant_id** | **int**| Id of the Product Variant | 
 **variant_edit** | [**VariantEdit**](VariantEdit.md)| Product Variant parameters to change | 

### Return type

[**Variant**](Variant.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Product Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

