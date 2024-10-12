# openapi_client.HTMLApi

All URIs are relative to *https://api.nextauth.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_html_enrol**](HTMLApi.md#get_html_enrol) | **GET** /servers/{serverid}/sessions/html/enrol | Generate HTML to enrol a new user
[**get_html_footer**](HTMLApi.md#get_html_footer) | **GET** /servers/{serverid}/sessions/html/footer | Generic HTML to add to footer. Required for login/logout/enrol functionality.
[**get_html_login**](HTMLApi.md#get_html_login) | **GET** /servers/{serverid}/sessions/html/login | Generate HTML for the login block
[**get_session_0**](HTMLApi.md#get_session_0) | **GET** /servers/{serverid}/sessions/ | Check if the user is logged in
[**logout_0**](HTMLApi.md#logout_0) | **POST** /servers/{serverid}/sessions/logout | Force a logout on the given session


# **get_html_enrol**
> str get_html_enrol(serverid, x_nonce, name=name, userid=userid)

Generate HTML to enrol a new user

Generate HTML to enrol a new user. Required permission: 'sessions'. 

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
    api_instance = openapi_client.HTMLApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    x_nonce = 'x_nonce_example' # str | Nonce to identify the browser/webserver session
    name = 'name_example' # str | Name to forward to the nextAuth app for this account (optional)
    userid = 'userid_example' # str | User name to register this user under (optional)

    try:
        # Generate HTML to enrol a new user
        api_response = api_instance.get_html_enrol(serverid, x_nonce, name=name, userid=userid)
        print("The response of HTMLApi->get_html_enrol:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HTMLApi->get_html_enrol: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **x_nonce** | **str**| Nonce to identify the browser/webserver session | 
 **name** | **str**| Name to forward to the nextAuth app for this account | [optional] 
 **userid** | **str**| User name to register this user under | [optional] 

### Return type

**str**

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Generated HTML. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_html_footer**
> str get_html_footer(serverid, x_nonce, html_footer_body=html_footer_body)

Generic HTML to add to footer. Required for login/logout/enrol functionality.

HTML to add to footer of HTML page. Required permission: 'sessions'. 

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.models.html_footer_body import HtmlFooterBody
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
    api_instance = openapi_client.HTMLApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    x_nonce = 'x_nonce_example' # str | Nonce to identify the browser/webserver session
    html_footer_body = openapi_client.HtmlFooterBody() # HtmlFooterBody | Additional sessions that should be monitored through the websocket. (optional)

    try:
        # Generic HTML to add to footer. Required for login/logout/enrol functionality.
        api_response = api_instance.get_html_footer(serverid, x_nonce, html_footer_body=html_footer_body)
        print("The response of HTMLApi->get_html_footer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HTMLApi->get_html_footer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **x_nonce** | **str**| Nonce to identify the browser/webserver session | 
 **html_footer_body** | [**HtmlFooterBody**](HtmlFooterBody.md)| Additional sessions that should be monitored through the websocket. | [optional] 

### Return type

**str**

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Generated HTML. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_html_login**
> str get_html_login(serverid, x_nonce, user_context=user_context)

Generate HTML for the login block

Generate HTML for the login block. Required permission: 'sessions'. 

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
    api_instance = openapi_client.HTMLApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    x_nonce = 'x_nonce_example' # str | Nonce to identify the browser/webserver session
    user_context = openapi_client.UserContext() # UserContext | Session information to display to user. (optional)

    try:
        # Generate HTML for the login block
        api_response = api_instance.get_html_login(serverid, x_nonce, user_context=user_context)
        print("The response of HTMLApi->get_html_login:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HTMLApi->get_html_login: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **x_nonce** | **str**| Nonce to identify the browser/webserver session | 
 **user_context** | [**UserContext**](UserContext.md)| Session information to display to user. | [optional] 

### Return type

**str**

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Generated HTML. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_session_0**
> LoginStatus get_session_0(serverid, x_nonce)

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
    api_instance = openapi_client.HTMLApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    x_nonce = 'x_nonce_example' # str | Nonce to identify the browser/webserver session

    try:
        # Check if the user is logged in
        api_response = api_instance.get_session_0(serverid, x_nonce)
        print("The response of HTMLApi->get_session_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HTMLApi->get_session_0: %s\n" % e)
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

# **logout_0**
> logout_0(serverid, x_nonce)

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
    api_instance = openapi_client.HTMLApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    x_nonce = 'x_nonce_example' # str | Nonce to identify the browser/webserver session

    try:
        # Force a logout on the given session
        api_instance.logout_0(serverid, x_nonce)
    except Exception as e:
        print("Exception when calling HTMLApi->logout_0: %s\n" % e)
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

