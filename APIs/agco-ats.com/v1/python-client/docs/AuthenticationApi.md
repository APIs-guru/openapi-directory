# openapi_client.AuthenticationApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authentication_default**](AuthenticationApi.md#authentication_default) | **POST** /api/v2/Authentication | Authenticate a user.
[**authentication_is_alive**](AuthenticationApi.md#authentication_is_alive) | **GET** /api/v2/Authentication/IsAlive | Acknowledges the connection to the API
[**authentication_put_manage_tokens**](AuthenticationApi.md#authentication_put_manage_tokens) | **PUT** /api/v2/AuthenticatedUsers/{UserID}/Tokens | Manage API tokens.
[**authentication_request_password_reset**](AuthenticationApi.md#authentication_request_password_reset) | **POST** /api/v2/Authentication/RequestPasswordReset | Request a password reset.
[**authentication_reset_pasword**](AuthenticationApi.md#authentication_reset_pasword) | **POST** /api/v2/Authentication/ResetPasword | Reset a password


# **authentication_default**
> APIModelsAuthenticatedUser authentication_default(api_models_credentials)

Authenticate a user.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_models_authenticated_user import APIModelsAuthenticatedUser
from openapi_client.models.api_models_credentials import APIModelsCredentials
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationApi(api_client)
    api_models_credentials = openapi_client.APIModelsCredentials() # APIModelsCredentials | Create a user account.

    try:
        # Authenticate a user.
        api_response = api_instance.authentication_default(api_models_credentials)
        print("The response of AuthenticationApi->authentication_default:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationApi->authentication_default: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_models_credentials** | [**APIModelsCredentials**](APIModelsCredentials.md)| Create a user account. | 

### Return type

[**APIModelsAuthenticatedUser**](APIModelsAuthenticatedUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authentication_is_alive**
> authentication_is_alive()

Acknowledges the connection to the API

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationApi(api_client)

    try:
        # Acknowledges the connection to the API
        api_instance.authentication_is_alive()
    except Exception as e:
        print("Exception when calling AuthenticationApi->authentication_is_alive: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authentication_put_manage_tokens**
> authentication_put_manage_tokens(user_id, api_models_token_options)

Manage API tokens.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_models_token_options import APIModelsTokenOptions
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationApi(api_client)
    user_id = 56 # int | 
    api_models_token_options = openapi_client.APIModelsTokenOptions() # APIModelsTokenOptions | The options for token management.

    try:
        # Manage API tokens.
        api_instance.authentication_put_manage_tokens(user_id, api_models_token_options)
    except Exception as e:
        print("Exception when calling AuthenticationApi->authentication_put_manage_tokens: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**|  | 
 **api_models_token_options** | [**APIModelsTokenOptions**](APIModelsTokenOptions.md)| The options for token management. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authentication_request_password_reset**
> authentication_request_password_reset(api_models_password_reset_request)

Request a password reset.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_models_password_reset_request import APIModelsPasswordResetRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationApi(api_client)
    api_models_password_reset_request = openapi_client.APIModelsPasswordResetRequest() # APIModelsPasswordResetRequest | The password reset request.

    try:
        # Request a password reset.
        api_instance.authentication_request_password_reset(api_models_password_reset_request)
    except Exception as e:
        print("Exception when calling AuthenticationApi->authentication_request_password_reset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_models_password_reset_request** | [**APIModelsPasswordResetRequest**](APIModelsPasswordResetRequest.md)| The password reset request. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authentication_reset_pasword**
> authentication_reset_pasword(api_models_password_reset)

Reset a password

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_models_password_reset import APIModelsPasswordReset
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthenticationApi(api_client)
    api_models_password_reset = openapi_client.APIModelsPasswordReset() # APIModelsPasswordReset | The password reset detail.

    try:
        # Reset a password
        api_instance.authentication_reset_pasword(api_models_password_reset)
    except Exception as e:
        print("Exception when calling AuthenticationApi->authentication_reset_pasword: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_models_password_reset** | [**APIModelsPasswordReset**](APIModelsPasswordReset.md)| The password reset detail. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

