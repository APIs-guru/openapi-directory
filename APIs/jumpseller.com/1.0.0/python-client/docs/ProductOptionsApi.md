# openapi_client.ProductOptionsApi

All URIs are relative to *https://api.jumpseller.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**products_id_options_count_json_get**](ProductOptionsApi.md#products_id_options_count_json_get) | **GET** /products/{id}/options/count.json | Count all Product Options.
[**products_id_options_json_get**](ProductOptionsApi.md#products_id_options_json_get) | **GET** /products/{id}/options.json | Retrieve all Product Options.
[**products_id_options_json_post**](ProductOptionsApi.md#products_id_options_json_post) | **POST** /products/{id}/options.json | Create a new Product Option.
[**products_id_options_option_id_json_delete**](ProductOptionsApi.md#products_id_options_option_id_json_delete) | **DELETE** /products/{id}/options/{option_id}.json | Delete a Product Option.
[**products_id_options_option_id_json_get**](ProductOptionsApi.md#products_id_options_option_id_json_get) | **GET** /products/{id}/options/{option_id}.json | Retrieve a single Product Option.
[**products_id_options_option_id_json_put**](ProductOptionsApi.md#products_id_options_option_id_json_put) | **PUT** /products/{id}/options/{option_id}.json | Modify an existing Product Option.


# **products_id_options_count_json_get**
> Count products_id_options_count_json_get(login, authtoken, id)

Count all Product Options.

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
    api_instance = openapi_client.ProductOptionsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | ID of the Product

    try:
        # Count all Product Options.
        api_response = api_instance.products_id_options_count_json_get(login, authtoken, id)
        print("The response of ProductOptionsApi->products_id_options_count_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductOptionsApi->products_id_options_count_json_get: %s\n" % e)
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

# **products_id_options_json_get**
> List[ProductOption] products_id_options_json_get(login, authtoken, id)

Retrieve all Product Options.

### Example


```python
import openapi_client
from openapi_client.models.product_option import ProductOption
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
    api_instance = openapi_client.ProductOptionsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | ID of the Product

    try:
        # Retrieve all Product Options.
        api_response = api_instance.products_id_options_json_get(login, authtoken, id)
        print("The response of ProductOptionsApi->products_id_options_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductOptionsApi->products_id_options_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| ID of the Product | 

### Return type

[**List[ProductOption]**](ProductOption.md)

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

# **products_id_options_json_post**
> ProductOption products_id_options_json_post(login, authtoken, id, product_option_edit)

Create a new Product Option.

### Example


```python
import openapi_client
from openapi_client.models.product_option import ProductOption
from openapi_client.models.product_option_edit import ProductOptionEdit
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
    api_instance = openapi_client.ProductOptionsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Product
    product_option_edit = openapi_client.ProductOptionEdit() # ProductOptionEdit | Product Option parameters.

    try:
        # Create a new Product Option.
        api_response = api_instance.products_id_options_json_post(login, authtoken, id, product_option_edit)
        print("The response of ProductOptionsApi->products_id_options_json_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductOptionsApi->products_id_options_json_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Product | 
 **product_option_edit** | [**ProductOptionEdit**](ProductOptionEdit.md)| Product Option parameters. | 

### Return type

[**ProductOption**](ProductOption.md)

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

# **products_id_options_option_id_json_delete**
> str products_id_options_option_id_json_delete(login, authtoken, id, option_id)

Delete a Product Option.

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
    api_instance = openapi_client.ProductOptionsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Product
    option_id = 56 # int | Id of the Product Option

    try:
        # Delete a Product Option.
        api_response = api_instance.products_id_options_option_id_json_delete(login, authtoken, id, option_id)
        print("The response of ProductOptionsApi->products_id_options_option_id_json_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductOptionsApi->products_id_options_option_id_json_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Product | 
 **option_id** | **int**| Id of the Product Option | 

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

# **products_id_options_option_id_json_get**
> ProductOption products_id_options_option_id_json_get(login, authtoken, id, option_id)

Retrieve a single Product Option.

### Example


```python
import openapi_client
from openapi_client.models.product_option import ProductOption
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
    api_instance = openapi_client.ProductOptionsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Product
    option_id = 56 # int | Id of the Product Option

    try:
        # Retrieve a single Product Option.
        api_response = api_instance.products_id_options_option_id_json_get(login, authtoken, id, option_id)
        print("The response of ProductOptionsApi->products_id_options_option_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductOptionsApi->products_id_options_option_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Product | 
 **option_id** | **int**| Id of the Product Option | 

### Return type

[**ProductOption**](ProductOption.md)

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

# **products_id_options_option_id_json_put**
> ProductOption products_id_options_option_id_json_put(login, authtoken, id, option_id, product_option_edit)

Modify an existing Product Option.

### Example


```python
import openapi_client
from openapi_client.models.product_option import ProductOption
from openapi_client.models.product_option_edit import ProductOptionEdit
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
    api_instance = openapi_client.ProductOptionsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Product
    option_id = 56 # int | Id of the Product Option
    product_option_edit = openapi_client.ProductOptionEdit() # ProductOptionEdit | Product option parameters to change

    try:
        # Modify an existing Product Option.
        api_response = api_instance.products_id_options_option_id_json_put(login, authtoken, id, option_id, product_option_edit)
        print("The response of ProductOptionsApi->products_id_options_option_id_json_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductOptionsApi->products_id_options_option_id_json_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Product | 
 **option_id** | **int**| Id of the Product Option | 
 **product_option_edit** | [**ProductOptionEdit**](ProductOptionEdit.md)| Product option parameters to change | 

### Return type

[**ProductOption**](ProductOption.md)

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

