# openapi_client.RegistrationApi

All URIs are relative to *https://api.nextauth.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_qr_enrol**](RegistrationApi.md#get_qr_enrol) | **GET** /servers/{serverid}/sessions/qr/enrol | Generate data for an enrol qr code
[**get_server_vash**](RegistrationApi.md#get_server_vash) | **GET** /servers/{serverid}/vash | Visual hash of this server
[**register_user_0**](RegistrationApi.md#register_user_0) | **POST** /servers/{serverid}/sessions/registeruser | Register a userid for the currently logged in account.
[**update_account_user_0**](RegistrationApi.md#update_account_user_0) | **PUT** /servers/{serverid}/accounts/{accountid}/user | Update user of the given account.


# **get_qr_enrol**
> bytearray get_qr_enrol(serverid, x_nonce, name, userid=userid, img=img, s=s)

Generate data for an enrol qr code

Returns the data for an enrol qr code. Required permission: 'sessions'.

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
    api_instance = openapi_client.RegistrationApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    x_nonce = 'x_nonce_example' # str | Nonce to identify the browser/webserver session
    name = 'name_example' # str | Name to forward to the nextAuth app for this account
    userid = 'userid_example' # str | User name to register this user under (optional)
    img = 'img_example' # str | 'png' for a PNG image, not set for raw data in the qr code (optional)
    s = 56 # int | size in pixels of the qr code, defaults to 500 (optional)

    try:
        # Generate data for an enrol qr code
        api_response = api_instance.get_qr_enrol(serverid, x_nonce, name, userid=userid, img=img, s=s)
        print("The response of RegistrationApi->get_qr_enrol:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistrationApi->get_qr_enrol: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **x_nonce** | **str**| Nonce to identify the browser/webserver session | 
 **name** | **str**| Name to forward to the nextAuth app for this account | 
 **userid** | **str**| User name to register this user under | [optional] 
 **img** | **str**| &#39;png&#39; for a PNG image, not set for raw data in the qr code | [optional] 
 **s** | **int**| size in pixels of the qr code, defaults to 500 | [optional] 

### Return type

**bytearray**

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Raw byte array containing the enrol qr code data (either raw or as a PNG image). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_server_vash**
> bytearray get_server_vash(serverid)

Visual hash of this server

Returns a PNG of the visual hash corresponding to this server. This visual hash is used during the registration process (optional), for the user to verify that (s)he is registering with the right server in the nextAuth app. For single-server nextAuth-enabled apps (white label or mobile SDK), the public key of the server is typically pinned within the app and hence this visual hash is not displayed to the user. Required permission: 'sessions' or 'servers'.

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
    api_instance = openapi_client.RegistrationApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id

    try:
        # Visual hash of this server
        api_response = api_instance.get_server_vash(serverid)
        print("The response of RegistrationApi->get_server_vash:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistrationApi->get_server_vash: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 

### Return type

**bytearray**

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Raw byte array containing the visual hash of this server as a PNG image. |  -  |
**404** | Server not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **register_user_0**
> register_user_0(serverid, x_nonce, userid)

Register a userid for the currently logged in account.

Register a user for the currently logged in account. You can also directly pass a user name when generating an ENROL qr code. Required permission: 'users'.

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
    api_instance = openapi_client.RegistrationApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    x_nonce = 'x_nonce_example' # str | Nonce to identify the browser/webserver session
    userid = 'userid_example' # str | Username to register

    try:
        # Register a userid for the currently logged in account.
        api_instance.register_user_0(serverid, x_nonce, userid)
    except Exception as e:
        print("Exception when calling RegistrationApi->register_user_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **x_nonce** | **str**| Nonce to identify the browser/webserver session | 
 **userid** | **str**| Username to register | 

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

# **update_account_user_0**
> Account update_account_user_0(serverid, accountid, userid)

Update user of the given account.

Update the user of the given account. Required permission: 'accounts'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.models.account import Account
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
    api_instance = openapi_client.RegistrationApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    accountid = 56 # int | Account id
    userid = 'userid_example' # str | User name

    try:
        # Update user of the given account.
        api_response = api_instance.update_account_user_0(serverid, accountid, userid)
        print("The response of RegistrationApi->update_account_user_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistrationApi->update_account_user_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **accountid** | **int**| Account id | 
 **userid** | **str**| User name | 

### Return type

[**Account**](Account.md)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Account after update |  -  |
**403** | Invalid user name |  -  |
**404** | Account not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

