# openapi_client.SessionsApi

All URIs are relative to *https://api.nextauth.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_qr_login**](SessionsApi.md#get_qr_login) | **GET** /servers/{serverid}/sessions/qr/login | Generate data for a login qr code
[**get_session**](SessionsApi.md#get_session) | **GET** /servers/{serverid}/sessions/ | Check if the user is logged in
[**logout**](SessionsApi.md#logout) | **POST** /servers/{serverid}/sessions/logout | Force a logout on the given session
[**provoke_login**](SessionsApi.md#provoke_login) | **POST** /servers/{serverid}/sessions/provokelogin | Push a login confirmation to the user&#39;s app
[**provoke_login_on_account**](SessionsApi.md#provoke_login_on_account) | **POST** /servers/{serverid}/accounts/{accountid}/provokelogin | Push a login confirmation to the user&#39;s app
[**provoke_login_on_user**](SessionsApi.md#provoke_login_on_user) | **POST** /servers/{serverid}/users/{userid}/provokelogin | Push a login confirmation to the user&#39;s app


# **get_qr_login**
> bytearray get_qr_login(serverid, x_nonce, img=img, s=s, user_context=user_context)

Generate data for a login qr code

Returns the data for a login qr code. Required permission: 'sessions'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.models.user_context import UserContext
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nextauth.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nextauth.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: role_id
configuration.api_key['role_id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['role_id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SessionsApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    x_nonce = 'x_nonce_example' # str | Nonce to identify the browser/webserver session
    img = 'img_example' # str | \"png\" for a PNG image, not set for raw data in the qr code (optional)
    s = 56 # int | size in pixels of the qr code, defaults to 500 (optional)
    user_context = openapi_client.UserContext() # UserContext | Session information to display to user. (optional)

    try:
        # Generate data for a login qr code
        api_response = api_instance.get_qr_login(serverid, x_nonce, img=img, s=s, user_context=user_context)
        print("The response of SessionsApi->get_qr_login:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionsApi->get_qr_login: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **x_nonce** | **str**| Nonce to identify the browser/webserver session | 
 **img** | **str**| \&quot;png\&quot; for a PNG image, not set for raw data in the qr code | [optional] 
 **s** | **int**| size in pixels of the qr code, defaults to 500 | [optional] 
 **user_context** | [**UserContext**](UserContext.md)| Session information to display to user. | [optional] 

### Return type

**bytearray**

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Raw byte array containing the login qr code data (either raw or as a PNG image). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_session**
> LoginStatus get_session(serverid, x_nonce)

Check if the user is logged in

Based on the browser/webserver session identifier, check if the user is logged in and return the associated username. This also returns additional information: the data for the login qr code and whether or not a loggin can be provoked directly from the server. Required permission: 'sessions'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.models.login_status import LoginStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nextauth.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nextauth.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: role_id
configuration.api_key['role_id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['role_id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SessionsApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    x_nonce = 'x_nonce_example' # str | Nonce to identify the browser/webserver session

    try:
        # Check if the user is logged in
        api_response = api_instance.get_session(serverid, x_nonce)
        print("The response of SessionsApi->get_session:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionsApi->get_session: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **x_nonce** | **str**| Nonce to identify the browser/webserver session | 

### Return type

[**LoginStatus**](LoginStatus.md)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Current login status. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logout**
> logout(serverid, x_nonce)

Force a logout on the given session

Force a logout on the given session. Required permission: 'sessions'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nextauth.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nextauth.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: role_id
configuration.api_key['role_id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['role_id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SessionsApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    x_nonce = 'x_nonce_example' # str | Nonce to identify the browser/webserver session

    try:
        # Force a logout on the given session
        api_instance.logout(serverid, x_nonce)
    except Exception as e:
        print("Exception when calling SessionsApi->logout: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **x_nonce** | **str**| Nonce to identify the browser/webserver session | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **provoke_login**
> provoke_login(serverid, x_nonce, user_context=user_context)

Push a login confirmation to the user's app

Push a login to the nextAuth app for the user to confirm, based on last account that successfully logged in for the given session. Required permission: 'sessions'. 

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.models.user_context import UserContext
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nextauth.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nextauth.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: role_id
configuration.api_key['role_id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['role_id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SessionsApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    x_nonce = 'x_nonce_example' # str | Nonce to identify the browser/webserver session
    user_context = openapi_client.UserContext() # UserContext | Session information to display to user. (optional)

    try:
        # Push a login confirmation to the user's app
        api_instance.provoke_login(serverid, x_nonce, user_context=user_context)
    except Exception as e:
        print("Exception when calling SessionsApi->provoke_login: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **x_nonce** | **str**| Nonce to identify the browser/webserver session | 
 **user_context** | [**UserContext**](UserContext.md)| Session information to display to user. | [optional] 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **provoke_login_on_account**
> provoke_login_on_account(serverid, x_nonce, accountid, user_context=user_context)

Push a login confirmation to the user's app

Push a login to the nextAuth app for the user to confirm, based on the given account (app instance). Required permission: 'sessions' or 'accounts'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.models.user_context import UserContext
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nextauth.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nextauth.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: role_id
configuration.api_key['role_id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['role_id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SessionsApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    x_nonce = 'x_nonce_example' # str | Base64 encoded nonce to identify the browser/webserver session
    accountid = 56 # int | Account id
    user_context = openapi_client.UserContext() # UserContext | Session information to display to user (optional)

    try:
        # Push a login confirmation to the user's app
        api_instance.provoke_login_on_account(serverid, x_nonce, accountid, user_context=user_context)
    except Exception as e:
        print("Exception when calling SessionsApi->provoke_login_on_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **x_nonce** | **str**| Base64 encoded nonce to identify the browser/webserver session | 
 **accountid** | **int**| Account id | 
 **user_context** | [**UserContext**](UserContext.md)| Session information to display to user | [optional] 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **provoke_login_on_user**
> provoke_login_on_user(serverid, x_nonce, userid, user_context=user_context)

Push a login confirmation to the user's app

Push a login to the nextAuth app for the user to confirm, based on the given userid. Required permission: 'sessions' or 'users'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.models.user_context import UserContext
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nextauth.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nextauth.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: role_id
configuration.api_key['role_id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['role_id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SessionsApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    x_nonce = 'x_nonce_example' # str | Nonce to identify the browser/webserver session
    userid = 'userid_example' # str | User name
    user_context = openapi_client.UserContext() # UserContext | Session information to display to user. (optional)

    try:
        # Push a login confirmation to the user's app
        api_instance.provoke_login_on_user(serverid, x_nonce, userid, user_context=user_context)
    except Exception as e:
        print("Exception when calling SessionsApi->provoke_login_on_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **x_nonce** | **str**| Nonce to identify the browser/webserver session | 
 **userid** | **str**| User name | 
 **user_context** | [**UserContext**](UserContext.md)| Session information to display to user. | [optional] 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

