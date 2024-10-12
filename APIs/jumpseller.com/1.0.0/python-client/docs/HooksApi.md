# openapi_client.HooksApi

All URIs are relative to *https://api.jumpseller.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hooks_id_json_delete**](HooksApi.md#hooks_id_json_delete) | **DELETE** /hooks/{id}.json | Delete an existing Hook.
[**hooks_id_json_get**](HooksApi.md#hooks_id_json_get) | **GET** /hooks/{id}.json | Retrieve a single Hook.
[**hooks_id_json_put**](HooksApi.md#hooks_id_json_put) | **PUT** /hooks/{id}.json | Update a Hook.
[**hooks_json_get**](HooksApi.md#hooks_json_get) | **GET** /hooks.json | Retrieve all Hooks.
[**hooks_json_post**](HooksApi.md#hooks_json_post) | **POST** /hooks.json | Create a new Hook.


# **hooks_id_json_delete**
> str hooks_id_json_delete(login, authtoken, id)

Delete an existing Hook.

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
    api_instance = openapi_client.HooksApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Hook

    try:
        # Delete an existing Hook.
        api_response = api_instance.hooks_id_json_delete(login, authtoken, id)
        print("The response of HooksApi->hooks_id_json_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HooksApi->hooks_id_json_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Hook | 

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
**404** | Hook Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hooks_id_json_get**
> Hook hooks_id_json_get(login, authtoken, id)

Retrieve a single Hook.

### Example


```python
import openapi_client
from openapi_client.models.hook import Hook
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
    api_instance = openapi_client.HooksApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Hook

    try:
        # Retrieve a single Hook.
        api_response = api_instance.hooks_id_json_get(login, authtoken, id)
        print("The response of HooksApi->hooks_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HooksApi->hooks_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Hook | 

### Return type

[**Hook**](Hook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Hook Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hooks_id_json_put**
> Hook hooks_id_json_put(login, authtoken, id, hook_edit)

Update a Hook.

### Example


```python
import openapi_client
from openapi_client.models.hook import Hook
from openapi_client.models.hook_edit import HookEdit
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
    api_instance = openapi_client.HooksApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Hook
    hook_edit = openapi_client.HookEdit() # HookEdit | Hook parameters.

    try:
        # Update a Hook.
        api_response = api_instance.hooks_id_json_put(login, authtoken, id, hook_edit)
        print("The response of HooksApi->hooks_id_json_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HooksApi->hooks_id_json_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Hook | 
 **hook_edit** | [**HookEdit**](HookEdit.md)| Hook parameters. | 

### Return type

[**Hook**](Hook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Hook Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hooks_json_get**
> List[Hook] hooks_json_get(login, authtoken, limit=limit, page=page)

Retrieve all Hooks.

### Example


```python
import openapi_client
from openapi_client.models.hook import Hook
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
    api_instance = openapi_client.HooksApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    limit = 50 # int | List restriction (optional) (default to 50)
    page = 1 # int | List page (optional) (default to 1)

    try:
        # Retrieve all Hooks.
        api_response = api_instance.hooks_json_get(login, authtoken, limit=limit, page=page)
        print("The response of HooksApi->hooks_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HooksApi->hooks_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **limit** | **int**| List restriction | [optional] [default to 50]
 **page** | **int**| List page | [optional] [default to 1]

### Return type

[**List[Hook]**](Hook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of Hooks |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hooks_json_post**
> Hook hooks_json_post(login, authtoken, hook_edit)

Create a new Hook.

### Example


```python
import openapi_client
from openapi_client.models.hook import Hook
from openapi_client.models.hook_edit import HookEdit
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
    api_instance = openapi_client.HooksApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    hook_edit = openapi_client.HookEdit() # HookEdit | Hook parameters.

    try:
        # Create a new Hook.
        api_response = api_instance.hooks_json_post(login, authtoken, hook_edit)
        print("The response of HooksApi->hooks_json_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HooksApi->hooks_json_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **hook_edit** | [**HookEdit**](HookEdit.md)| Hook parameters. | 

### Return type

[**Hook**](Hook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Hook Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

