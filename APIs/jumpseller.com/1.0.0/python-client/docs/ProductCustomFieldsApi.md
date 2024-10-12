# openapi_client.ProductCustomFieldsApi

All URIs are relative to *https://api.jumpseller.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**products_id_fields_count_json_get**](ProductCustomFieldsApi.md#products_id_fields_count_json_get) | **GET** /products/{id}/fields/count.json | Count all Product Custom Fields.
[**products_id_fields_json_get**](ProductCustomFieldsApi.md#products_id_fields_json_get) | **GET** /products/{id}/fields.json | Retrieve all Product Custom Fields
[**products_id_fields_json_post**](ProductCustomFieldsApi.md#products_id_fields_json_post) | **POST** /products/{id}/fields.json | Add an existing Custom Field to a Product.
[**products_product_id_fields_field_id_json_delete**](ProductCustomFieldsApi.md#products_product_id_fields_field_id_json_delete) | **DELETE** /products/{product_id}/fields/{field_id}.json | Delete value of Product Custom Field
[**products_product_id_fields_field_id_json_put**](ProductCustomFieldsApi.md#products_product_id_fields_field_id_json_put) | **PUT** /products/{product_id}/fields/{field_id}.json | Update value of Product Custom Field


# **products_id_fields_count_json_get**
> Count products_id_fields_count_json_get(login, authtoken, id)

Count all Product Custom Fields.

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
    api_instance = openapi_client.ProductCustomFieldsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | ID of the Product

    try:
        # Count all Product Custom Fields.
        api_response = api_instance.products_id_fields_count_json_get(login, authtoken, id)
        print("The response of ProductCustomFieldsApi->products_id_fields_count_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductCustomFieldsApi->products_id_fields_count_json_get: %s\n" % e)
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

# **products_id_fields_json_get**
> List[ProductCustomField] products_id_fields_json_get(login, authtoken, id)

Retrieve all Product Custom Fields

### Example


```python
import openapi_client
from openapi_client.models.product_custom_field import ProductCustomField
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
    api_instance = openapi_client.ProductCustomFieldsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Product

    try:
        # Retrieve all Product Custom Fields
        api_response = api_instance.products_id_fields_json_get(login, authtoken, id)
        print("The response of ProductCustomFieldsApi->products_id_fields_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductCustomFieldsApi->products_id_fields_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Product | 

### Return type

[**List[ProductCustomField]**](ProductCustomField.md)

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

# **products_id_fields_json_post**
> Product products_id_fields_json_post(login, authtoken, id, add_product_custom_field)

Add an existing Custom Field to a Product.

### Example


```python
import openapi_client
from openapi_client.models.add_product_custom_field import AddProductCustomField
from openapi_client.models.product import Product
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
    api_instance = openapi_client.ProductCustomFieldsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Product
    add_product_custom_field = openapi_client.AddProductCustomField() # AddProductCustomField | Product Custom Field parameters.

    try:
        # Add an existing Custom Field to a Product.
        api_response = api_instance.products_id_fields_json_post(login, authtoken, id, add_product_custom_field)
        print("The response of ProductCustomFieldsApi->products_id_fields_json_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductCustomFieldsApi->products_id_fields_json_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Product | 
 **add_product_custom_field** | [**AddProductCustomField**](AddProductCustomField.md)| Product Custom Field parameters. | 

### Return type

[**Product**](Product.md)

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

# **products_product_id_fields_field_id_json_delete**
> MessageObject products_product_id_fields_field_id_json_delete(login, authtoken, product_id, field_id)

Delete value of Product Custom Field

### Example


```python
import openapi_client
from openapi_client.models.message_object import MessageObject
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
    api_instance = openapi_client.ProductCustomFieldsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    product_id = 56 # int | Id of the Product.
    field_id = 56 # int | Id of the Custom Field Value.

    try:
        # Delete value of Product Custom Field
        api_response = api_instance.products_product_id_fields_field_id_json_delete(login, authtoken, product_id, field_id)
        print("The response of ProductCustomFieldsApi->products_product_id_fields_field_id_json_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductCustomFieldsApi->products_product_id_fields_field_id_json_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **product_id** | **int**| Id of the Product. | 
 **field_id** | **int**| Id of the Custom Field Value. | 

### Return type

[**MessageObject**](MessageObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Product or Custom Field Value Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_product_id_fields_field_id_json_put**
> ProductCustomField products_product_id_fields_field_id_json_put(login, authtoken, product_id, field_id)

Update value of Product Custom Field

### Example


```python
import openapi_client
from openapi_client.models.product_custom_field import ProductCustomField
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
    api_instance = openapi_client.ProductCustomFieldsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    product_id = 56 # int | Id of the Product.
    field_id = 56 # int | Id of the Custom Field Value.

    try:
        # Update value of Product Custom Field
        api_response = api_instance.products_product_id_fields_field_id_json_put(login, authtoken, product_id, field_id)
        print("The response of ProductCustomFieldsApi->products_product_id_fields_field_id_json_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductCustomFieldsApi->products_product_id_fields_field_id_json_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **product_id** | **int**| Id of the Product. | 
 **field_id** | **int**| Id of the Custom Field Value. | 

### Return type

[**ProductCustomField**](ProductCustomField.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Product or Custom Field Value Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

