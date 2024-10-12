# openapi_client.ShippingMethodsApi

All URIs are relative to *https://api.jumpseller.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**shipping_methods_id_json_delete**](ShippingMethodsApi.md#shipping_methods_id_json_delete) | **DELETE** /shipping_methods/{id}.json | Delete an existing Shipping Method.
[**shipping_methods_id_json_get**](ShippingMethodsApi.md#shipping_methods_id_json_get) | **GET** /shipping_methods/{id}.json | Retrieve a single Shipping Method.
[**shipping_methods_id_json_put**](ShippingMethodsApi.md#shipping_methods_id_json_put) | **PUT** /shipping_methods/{id}.json | Update a Shipping Method.
[**shipping_methods_json_get**](ShippingMethodsApi.md#shipping_methods_json_get) | **GET** /shipping_methods.json | Retrieve all Store&#39;s Shipping Methods.
[**shipping_methods_json_post**](ShippingMethodsApi.md#shipping_methods_json_post) | **POST** /shipping_methods.json | Creates a Shipping Method.


# **shipping_methods_id_json_delete**
> str shipping_methods_id_json_delete(login, authtoken, id)

Delete an existing Shipping Method.

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
    api_instance = openapi_client.ShippingMethodsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Shipping Method

    try:
        # Delete an existing Shipping Method.
        api_response = api_instance.shipping_methods_id_json_delete(login, authtoken, id)
        print("The response of ShippingMethodsApi->shipping_methods_id_json_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShippingMethodsApi->shipping_methods_id_json_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Shipping Method | 

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
**404** | Shipping Method Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shipping_methods_id_json_get**
> ShippingMethod shipping_methods_id_json_get(login, authtoken, id)

Retrieve a single Shipping Method.

### Example


```python
import openapi_client
from openapi_client.models.shipping_method import ShippingMethod
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
    api_instance = openapi_client.ShippingMethodsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Shipping Method

    try:
        # Retrieve a single Shipping Method.
        api_response = api_instance.shipping_methods_id_json_get(login, authtoken, id)
        print("The response of ShippingMethodsApi->shipping_methods_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShippingMethodsApi->shipping_methods_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Shipping Method | 

### Return type

[**ShippingMethod**](ShippingMethod.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | ShippingMethod Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shipping_methods_id_json_put**
> ShippingMethod shipping_methods_id_json_put(login, authtoken, id, shipping_method_edit)

Update a Shipping Method.

### Example


```python
import openapi_client
from openapi_client.models.shipping_method import ShippingMethod
from openapi_client.models.shipping_method_edit import ShippingMethodEdit
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
    api_instance = openapi_client.ShippingMethodsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Shipping Method
    shipping_method_edit = openapi_client.ShippingMethodEdit() # ShippingMethodEdit | Shipping Method parameters.

    try:
        # Update a Shipping Method.
        api_response = api_instance.shipping_methods_id_json_put(login, authtoken, id, shipping_method_edit)
        print("The response of ShippingMethodsApi->shipping_methods_id_json_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShippingMethodsApi->shipping_methods_id_json_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Shipping Method | 
 **shipping_method_edit** | [**ShippingMethodEdit**](ShippingMethodEdit.md)| Shipping Method parameters. | 

### Return type

[**ShippingMethod**](ShippingMethod.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Shipping Method Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shipping_methods_json_get**
> List[ShippingMethod] shipping_methods_json_get(login, authtoken)

Retrieve all Store's Shipping Methods.

### Example


```python
import openapi_client
from openapi_client.models.shipping_method import ShippingMethod
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
    api_instance = openapi_client.ShippingMethodsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.

    try:
        # Retrieve all Store's Shipping Methods.
        api_response = api_instance.shipping_methods_json_get(login, authtoken)
        print("The response of ShippingMethodsApi->shipping_methods_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShippingMethodsApi->shipping_methods_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 

### Return type

[**List[ShippingMethod]**](ShippingMethod.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of Shipping Methods |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shipping_methods_json_post**
> ShippingMethod shipping_methods_json_post(login, authtoken, shipping_method_edit)

Creates a Shipping Method.

### Example


```python
import openapi_client
from openapi_client.models.shipping_method import ShippingMethod
from openapi_client.models.shipping_method_edit import ShippingMethodEdit
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
    api_instance = openapi_client.ShippingMethodsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    shipping_method_edit = openapi_client.ShippingMethodEdit() # ShippingMethodEdit | Shipping Method parameters.

    try:
        # Creates a Shipping Method.
        api_response = api_instance.shipping_methods_json_post(login, authtoken, shipping_method_edit)
        print("The response of ShippingMethodsApi->shipping_methods_json_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShippingMethodsApi->shipping_methods_json_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **shipping_method_edit** | [**ShippingMethodEdit**](ShippingMethodEdit.md)| Shipping Method parameters. | 

### Return type

[**ShippingMethod**](ShippingMethod.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | ShippingMethod Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

