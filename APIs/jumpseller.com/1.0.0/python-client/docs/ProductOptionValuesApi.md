# openapi_client.ProductOptionValuesApi

All URIs are relative to *https://api.jumpseller.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**products_id_options_option_id_values_count_json_get**](ProductOptionValuesApi.md#products_id_options_option_id_values_count_json_get) | **GET** /products/{id}/options/{option_id}/values/count.json | Count all Product Option Values.
[**products_id_options_option_id_values_json_get**](ProductOptionValuesApi.md#products_id_options_option_id_values_json_get) | **GET** /products/{id}/options/{option_id}/values.json | Retrieve all Product Option Values.
[**products_id_options_option_id_values_json_post**](ProductOptionValuesApi.md#products_id_options_option_id_values_json_post) | **POST** /products/{id}/options/{option_id}/values.json | Create a new Product Option Value.
[**products_id_options_option_id_values_value_id_json_delete**](ProductOptionValuesApi.md#products_id_options_option_id_values_value_id_json_delete) | **DELETE** /products/{id}/options/{option_id}/values/{value_id}.json | Delete a Product Option Value.
[**products_id_options_option_id_values_value_id_json_get**](ProductOptionValuesApi.md#products_id_options_option_id_values_value_id_json_get) | **GET** /products/{id}/options/{option_id}/values/{value_id}.json | Retrieve a single Product Option Value.
[**products_id_options_option_id_values_value_id_json_put**](ProductOptionValuesApi.md#products_id_options_option_id_values_value_id_json_put) | **PUT** /products/{id}/options/{option_id}/values/{value_id}.json | Modify an existing Product Option Value.


# **products_id_options_option_id_values_count_json_get**
> Count products_id_options_option_id_values_count_json_get(login, authtoken, id, option_id)

Count all Product Option Values.

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
    api_instance = openapi_client.ProductOptionValuesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | ID of the Product
    option_id = 56 # int | ID of the Product Option

    try:
        # Count all Product Option Values.
        api_response = api_instance.products_id_options_option_id_values_count_json_get(login, authtoken, id, option_id)
        print("The response of ProductOptionValuesApi->products_id_options_option_id_values_count_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductOptionValuesApi->products_id_options_option_id_values_count_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| ID of the Product | 
 **option_id** | **int**| ID of the Product Option | 

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

# **products_id_options_option_id_values_json_get**
> List[ProductOptionValue] products_id_options_option_id_values_json_get(login, authtoken, id, option_id)

Retrieve all Product Option Values.

### Example


```python
import openapi_client
from openapi_client.models.product_option_value import ProductOptionValue
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
    api_instance = openapi_client.ProductOptionValuesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | ID of the Product
    option_id = 56 # int | ID of the Product Option

    try:
        # Retrieve all Product Option Values.
        api_response = api_instance.products_id_options_option_id_values_json_get(login, authtoken, id, option_id)
        print("The response of ProductOptionValuesApi->products_id_options_option_id_values_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductOptionValuesApi->products_id_options_option_id_values_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| ID of the Product | 
 **option_id** | **int**| ID of the Product Option | 

### Return type

[**List[ProductOptionValue]**](ProductOptionValue.md)

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

# **products_id_options_option_id_values_json_post**
> ProductOptionValue products_id_options_option_id_values_json_post(login, authtoken, id, option_id, product_option_value_edit)

Create a new Product Option Value.

### Example


```python
import openapi_client
from openapi_client.models.product_option_value import ProductOptionValue
from openapi_client.models.product_option_value_edit import ProductOptionValueEdit
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
    api_instance = openapi_client.ProductOptionValuesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Product
    option_id = 56 # int | Id of the Product Option
    product_option_value_edit = openapi_client.ProductOptionValueEdit() # ProductOptionValueEdit | Product Option Value parameters.

    try:
        # Create a new Product Option Value.
        api_response = api_instance.products_id_options_option_id_values_json_post(login, authtoken, id, option_id, product_option_value_edit)
        print("The response of ProductOptionValuesApi->products_id_options_option_id_values_json_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductOptionValuesApi->products_id_options_option_id_values_json_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Product | 
 **option_id** | **int**| Id of the Product Option | 
 **product_option_value_edit** | [**ProductOptionValueEdit**](ProductOptionValueEdit.md)| Product Option Value parameters. | 

### Return type

[**ProductOptionValue**](ProductOptionValue.md)

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

# **products_id_options_option_id_values_value_id_json_delete**
> str products_id_options_option_id_values_value_id_json_delete(login, authtoken, id, option_id, value_id)

Delete a Product Option Value.

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
    api_instance = openapi_client.ProductOptionValuesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Product
    option_id = 56 # int | Id of the Product Option
    value_id = 56 # int | ID of the Product Option Value

    try:
        # Delete a Product Option Value.
        api_response = api_instance.products_id_options_option_id_values_value_id_json_delete(login, authtoken, id, option_id, value_id)
        print("The response of ProductOptionValuesApi->products_id_options_option_id_values_value_id_json_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductOptionValuesApi->products_id_options_option_id_values_value_id_json_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Product | 
 **option_id** | **int**| Id of the Product Option | 
 **value_id** | **int**| ID of the Product Option Value | 

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

# **products_id_options_option_id_values_value_id_json_get**
> ProductOptionValue products_id_options_option_id_values_value_id_json_get(login, authtoken, id, option_id, value_id)

Retrieve a single Product Option Value.

### Example


```python
import openapi_client
from openapi_client.models.product_option_value import ProductOptionValue
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
    api_instance = openapi_client.ProductOptionValuesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Product
    option_id = 56 # int | Id of the Product Option
    value_id = 56 # int | ID of the Product Option Value

    try:
        # Retrieve a single Product Option Value.
        api_response = api_instance.products_id_options_option_id_values_value_id_json_get(login, authtoken, id, option_id, value_id)
        print("The response of ProductOptionValuesApi->products_id_options_option_id_values_value_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductOptionValuesApi->products_id_options_option_id_values_value_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Product | 
 **option_id** | **int**| Id of the Product Option | 
 **value_id** | **int**| ID of the Product Option Value | 

### Return type

[**ProductOptionValue**](ProductOptionValue.md)

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

# **products_id_options_option_id_values_value_id_json_put**
> ProductOptionValue products_id_options_option_id_values_value_id_json_put(login, authtoken, id, option_id, value_id, product_option_value_edit)

Modify an existing Product Option Value.

### Example


```python
import openapi_client
from openapi_client.models.product_option_value import ProductOptionValue
from openapi_client.models.product_option_value_edit import ProductOptionValueEdit
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
    api_instance = openapi_client.ProductOptionValuesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Product
    option_id = 56 # int | Id of the Product Option
    value_id = 56 # int | Id of the Product Option Value
    product_option_value_edit = openapi_client.ProductOptionValueEdit() # ProductOptionValueEdit | Product option value parameters to change

    try:
        # Modify an existing Product Option Value.
        api_response = api_instance.products_id_options_option_id_values_value_id_json_put(login, authtoken, id, option_id, value_id, product_option_value_edit)
        print("The response of ProductOptionValuesApi->products_id_options_option_id_values_value_id_json_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductOptionValuesApi->products_id_options_option_id_values_value_id_json_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Product | 
 **option_id** | **int**| Id of the Product Option | 
 **value_id** | **int**| Id of the Product Option Value | 
 **product_option_value_edit** | [**ProductOptionValueEdit**](ProductOptionValueEdit.md)| Product option value parameters to change | 

### Return type

[**ProductOptionValue**](ProductOptionValue.md)

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

