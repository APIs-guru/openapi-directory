# openapi_client.AuthApi

All URIs are relative to *https://openapi.space/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login**](AuthApi.md#login) | **POST** /auth/login | Log in to OpenAPI space
[**login_apinf**](AuthApi.md#login_apinf) | **POST** /auth/login/apinf | Log in to OpenAPI space using an APInf account
[**login_apinf_token**](AuthApi.md#login_apinf_token) | **POST** /auth/login/apinf_token | Log in to OpenAPI space using an APInf authentication token
[**logout**](AuthApi.md#logout) | **POST** /auth/logout | Log out from OpenAPI space
[**ping**](AuthApi.md#ping) | **POST** /auth/ping | Check whether or not you are authenticated
[**register**](AuthApi.md#register) | **POST** /auth/register | Register to OpenAPI space


# **login**
> LoginToken login(body=body)

Log in to OpenAPI space

### Example


```python
import openapi_client
from openapi_client.models.credentials import Credentials
from openapi_client.models.login_token import LoginToken
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://openapi.space/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.space/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthApi(api_client)
    body = openapi_client.Credentials() # Credentials | the user credentials (optional)

    try:
        # Log in to OpenAPI space
        api_response = api_instance.login(body=body)
        print("The response of AuthApi->login:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->login: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Credentials**](Credentials.md)| the user credentials | [optional] 

### Return type

[**LoginToken**](LoginToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | login successful |  -  |
**401** | invalid password |  -  |
**404** | user not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **login_apinf**
> LoginToken login_apinf(body=body)

Log in to OpenAPI space using an APInf account

### Example


```python
import openapi_client
from openapi_client.models.login_apinf_request import LoginApinfRequest
from openapi_client.models.login_token import LoginToken
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://openapi.space/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.space/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthApi(api_client)
    body = openapi_client.LoginApinfRequest() # LoginApinfRequest | the APInf username and password (optional)

    try:
        # Log in to OpenAPI space using an APInf account
        api_response = api_instance.login_apinf(body=body)
        print("The response of AuthApi->login_apinf:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->login_apinf: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LoginApinfRequest**](LoginApinfRequest.md)| the APInf username and password | [optional] 

### Return type

[**LoginToken**](LoginToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | login successful |  -  |
**401** | invalid username or password |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **login_apinf_token**
> LoginToken login_apinf_token(body=body)

Log in to OpenAPI space using an APInf authentication token

### Example


```python
import openapi_client
from openapi_client.models.login_apinf_token_request import LoginApinfTokenRequest
from openapi_client.models.login_token import LoginToken
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://openapi.space/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.space/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthApi(api_client)
    body = openapi_client.LoginApinfTokenRequest() # LoginApinfTokenRequest | the APInf authentication token and user ID (optional)

    try:
        # Log in to OpenAPI space using an APInf authentication token
        api_response = api_instance.login_apinf_token(body=body)
        print("The response of AuthApi->login_apinf_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->login_apinf_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LoginApinfTokenRequest**](LoginApinfTokenRequest.md)| the APInf authentication token and user ID | [optional] 

### Return type

[**LoginToken**](LoginToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | login successful |  -  |
**401** | invalid user ID or auth token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logout**
> logout()

Log out from OpenAPI space

### Example

* Api Key Authentication (AuthToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://openapi.space/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.space/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: AuthToken
configuration.api_key['AuthToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['AuthToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthApi(api_client)

    try:
        # Log out from OpenAPI space
        api_instance.logout()
    except Exception as e:
        print("Exception when calling AuthApi->logout: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[AuthToken](../README.md#AuthToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | logout successful |  -  |
**403** | user was not logged in |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ping**
> Registration ping()

Check whether or not you are authenticated

### Example

* Api Key Authentication (AuthToken):

```python
import openapi_client
from openapi_client.models.registration import Registration
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://openapi.space/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.space/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: AuthToken
configuration.api_key['AuthToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['AuthToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthApi(api_client)

    try:
        # Check whether or not you are authenticated
        api_response = api_instance.ping()
        print("The response of AuthApi->ping:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->ping: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Registration**](Registration.md)

### Authorization

[AuthToken](../README.md#AuthToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | logged in |  -  |
**403** | not logged in |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **register**
> LoginToken register(body=body)

Register to OpenAPI space

### Example


```python
import openapi_client
from openapi_client.models.login_token import LoginToken
from openapi_client.models.registration import Registration
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://openapi.space/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.space/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthApi(api_client)
    body = openapi_client.Registration() # Registration | registration details (optional)

    try:
        # Register to OpenAPI space
        api_response = api_instance.register(body=body)
        print("The response of AuthApi->register:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->register: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Registration**](Registration.md)| registration details | [optional] 

### Return type

[**LoginToken**](LoginToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | registration successful |  -  |
**409** | username or email taken |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

