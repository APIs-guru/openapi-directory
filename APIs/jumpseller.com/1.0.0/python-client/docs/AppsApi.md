# openapi_client.AppsApi

All URIs are relative to *https://api.jumpseller.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jsapps_code_json_delete**](AppsApi.md#jsapps_code_json_delete) | **DELETE** /jsapps/{code}.json | Delete an existing JSApp.
[**jsapps_code_json_get**](AppsApi.md#jsapps_code_json_get) | **GET** /jsapps/{code}.json | Retrieve a JSApp.
[**jsapps_json_get**](AppsApi.md#jsapps_json_get) | **GET** /jsapps.json | Retrieve all the Store&#39;s JSApps.
[**jsapps_json_post**](AppsApi.md#jsapps_json_post) | **POST** /jsapps.json | Create a Store JSApp.


# **jsapps_code_json_delete**
> str jsapps_code_json_delete(login, authtoken, code)

Delete an existing JSApp.

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
    api_instance = openapi_client.AppsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    code = 'code_example' # str | Code of the App

    try:
        # Delete an existing JSApp.
        api_response = api_instance.jsapps_code_json_delete(login, authtoken, code)
        print("The response of AppsApi->jsapps_code_json_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->jsapps_code_json_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **code** | **str**| Code of the App | 

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
**404** | App Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jsapps_code_json_get**
> JSApp jsapps_code_json_get(login, authtoken, code)

Retrieve a JSApp.

### Example


```python
import openapi_client
from openapi_client.models.js_app import JSApp
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
    api_instance = openapi_client.AppsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    code = 'code_example' # str | Code of the App

    try:
        # Retrieve a JSApp.
        api_response = api_instance.jsapps_code_json_get(login, authtoken, code)
        print("The response of AppsApi->jsapps_code_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->jsapps_code_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **code** | **str**| Code of the App | 

### Return type

[**JSApp**](JSApp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jsapps_json_get**
> App jsapps_json_get(login, authtoken)

Retrieve all the Store's JSApps.

### Example


```python
import openapi_client
from openapi_client.models.app import App
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
    api_instance = openapi_client.AppsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.

    try:
        # Retrieve all the Store's JSApps.
        api_response = api_instance.jsapps_json_get(login, authtoken)
        print("The response of AppsApi->jsapps_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->jsapps_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 

### Return type

[**App**](App.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jsapps_json_post**
> JSApp jsapps_json_post(login, authtoken, js_app_edit)

Create a Store JSApp.

### Example


```python
import openapi_client
from openapi_client.models.js_app import JSApp
from openapi_client.models.js_app_edit import JSAppEdit
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
    api_instance = openapi_client.AppsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    js_app_edit = openapi_client.JSAppEdit() # JSAppEdit | JSApp parameters to create

    try:
        # Create a Store JSApp.
        api_response = api_instance.jsapps_json_post(login, authtoken, js_app_edit)
        print("The response of AppsApi->jsapps_json_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->jsapps_json_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **js_app_edit** | [**JSAppEdit**](JSAppEdit.md)| JSApp parameters to create | 

### Return type

[**JSApp**](JSApp.md)

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

