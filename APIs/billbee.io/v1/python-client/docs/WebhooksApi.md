# openapi_client.WebhooksApi

All URIs are relative to *https://app.billbee.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**web_hook_management_delete**](WebhooksApi.md#web_hook_management_delete) | **DELETE** /api/v1/webhooks/{id} | Deletes an existing WebHook registration.
[**web_hook_management_delete_all**](WebhooksApi.md#web_hook_management_delete_all) | **DELETE** /api/v1/webhooks | Deletes all existing WebHook registrations.
[**web_hook_management_get**](WebhooksApi.md#web_hook_management_get) | **GET** /api/v1/webhooks | Gets all registered WebHooks for a given user.
[**web_hook_management_get_filters**](WebhooksApi.md#web_hook_management_get_filters) | **GET** /api/v1/webhooks/filters | Returns a list of all known filters you can use to register webhooks
[**web_hook_management_lookup**](WebhooksApi.md#web_hook_management_lookup) | **GET** /api/v1/webhooks/{id} | Looks up a registered WebHook with the given {id} for a given user.
[**web_hook_management_post**](WebhooksApi.md#web_hook_management_post) | **POST** /api/v1/webhooks | Registers a new WebHook for a given user.
[**web_hook_management_put**](WebhooksApi.md#web_hook_management_put) | **PUT** /api/v1/webhooks/{id} | Updates an existing WebHook registration.


# **web_hook_management_delete**
> object web_hook_management_delete(id)

Deletes an existing WebHook registration.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    id = 'id_example' # str | The WebHook ID.

    try:
        # Deletes an existing WebHook registration.
        api_response = api_instance.web_hook_management_delete(id)
        print("The response of WebhooksApi->web_hook_management_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->web_hook_management_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The WebHook ID. | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **web_hook_management_delete_all**
> object web_hook_management_delete_all()

Deletes all existing WebHook registrations.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)

    try:
        # Deletes all existing WebHook registrations.
        api_response = api_instance.web_hook_management_delete_all()
        print("The response of WebhooksApi->web_hook_management_delete_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->web_hook_management_delete_all: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **web_hook_management_get**
> List[RechnungsdruckWebAppControllersApiWebHookApiModel] web_hook_management_get()

Gets all registered WebHooks for a given user.

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_web_hook_api_model import RechnungsdruckWebAppControllersApiWebHookApiModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)

    try:
        # Gets all registered WebHooks for a given user.
        api_response = api_instance.web_hook_management_get()
        print("The response of WebhooksApi->web_hook_management_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->web_hook_management_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[RechnungsdruckWebAppControllersApiWebHookApiModel]**](RechnungsdruckWebAppControllersApiWebHookApiModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **web_hook_management_get_filters**
> object web_hook_management_get_filters()

Returns a list of all known filters you can use to register webhooks

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)

    try:
        # Returns a list of all known filters you can use to register webhooks
        api_response = api_instance.web_hook_management_get_filters()
        print("The response of WebhooksApi->web_hook_management_get_filters:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->web_hook_management_get_filters: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **web_hook_management_lookup**
> RechnungsdruckWebAppControllersApiWebHookApiModel web_hook_management_lookup(id)

Looks up a registered WebHook with the given {id} for a given user.

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_web_hook_api_model import RechnungsdruckWebAppControllersApiWebHookApiModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    id = 'id_example' # str | 

    try:
        # Looks up a registered WebHook with the given {id} for a given user.
        api_response = api_instance.web_hook_management_lookup(id)
        print("The response of WebhooksApi->web_hook_management_lookup:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->web_hook_management_lookup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**RechnungsdruckWebAppControllersApiWebHookApiModel**](RechnungsdruckWebAppControllersApiWebHookApiModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **web_hook_management_post**
> RechnungsdruckWebAppControllersApiWebHookApiModel web_hook_management_post(rechnungsdruck_web_app_controllers_api_web_hook_api_model)

Registers a new WebHook for a given user.

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_web_hook_api_model import RechnungsdruckWebAppControllersApiWebHookApiModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    rechnungsdruck_web_app_controllers_api_web_hook_api_model = openapi_client.RechnungsdruckWebAppControllersApiWebHookApiModel() # RechnungsdruckWebAppControllersApiWebHookApiModel | The webhook to create. Attach ?noecho to the uri to prevent echo test.

    try:
        # Registers a new WebHook for a given user.
        api_response = api_instance.web_hook_management_post(rechnungsdruck_web_app_controllers_api_web_hook_api_model)
        print("The response of WebhooksApi->web_hook_management_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->web_hook_management_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rechnungsdruck_web_app_controllers_api_web_hook_api_model** | [**RechnungsdruckWebAppControllersApiWebHookApiModel**](RechnungsdruckWebAppControllersApiWebHookApiModel.md)| The webhook to create. Attach ?noecho to the uri to prevent echo test. | 

### Return type

[**RechnungsdruckWebAppControllersApiWebHookApiModel**](RechnungsdruckWebAppControllersApiWebHookApiModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **web_hook_management_put**
> RechnungsdruckWebAppControllersApiWebHookApiModel web_hook_management_put(id, rechnungsdruck_web_app_controllers_api_web_hook_api_model)

Updates an existing WebHook registration.

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_web_hook_api_model import RechnungsdruckWebAppControllersApiWebHookApiModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    id = 'id_example' # str | The WebHook ID.
    rechnungsdruck_web_app_controllers_api_web_hook_api_model = openapi_client.RechnungsdruckWebAppControllersApiWebHookApiModel() # RechnungsdruckWebAppControllersApiWebHookApiModel | The new webhook to use.

    try:
        # Updates an existing WebHook registration.
        api_response = api_instance.web_hook_management_put(id, rechnungsdruck_web_app_controllers_api_web_hook_api_model)
        print("The response of WebhooksApi->web_hook_management_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->web_hook_management_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The WebHook ID. | 
 **rechnungsdruck_web_app_controllers_api_web_hook_api_model** | [**RechnungsdruckWebAppControllersApiWebHookApiModel**](RechnungsdruckWebAppControllersApiWebHookApiModel.md)| The new webhook to use. | 

### Return type

[**RechnungsdruckWebAppControllersApiWebHookApiModel**](RechnungsdruckWebAppControllersApiWebHookApiModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

