# openapi_client.AuthApi

All URIs are relative to *https://api.tvmaze.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**auth_poll_post**](AuthApi.md#auth_poll_post) | **POST** /auth/poll | Poll whether an authentication request was confirmed
[**auth_start_post**](AuthApi.md#auth_start_post) | **POST** /auth/start | Start an authentication request
[**auth_validate_get**](AuthApi.md#auth_validate_get) | **GET** /auth/validate | Validate your authentication credentials


# **auth_poll_post**
> AuthPollPost200Response auth_poll_post(auth_poll_post_request)

Poll whether an authentication request was confirmed

Using the token acquired in the `start` endpoint, you can start polling this endpoint once every 10 seconds.  When the user has confirmed the authentication request on their end, this endpoint will return the user's API key that you can use in subsequent authenticated endpoints. Note that it'll do so only once, subsequent requests after the initial 200 response will return a 404.  For as long as the user did not yet confirm their authentication request, this endpoint will return a 403. 

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.auth_poll_post200_response import AuthPollPost200Response
from openapi_client.models.auth_poll_post_request import AuthPollPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.tvmaze.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.tvmaze.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: usertoken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthApi(api_client)
    auth_poll_post_request = openapi_client.AuthPollPostRequest() # AuthPollPostRequest | 

    try:
        # Poll whether an authentication request was confirmed
        api_response = api_instance.auth_poll_post(auth_poll_post_request)
        print("The response of AuthApi->auth_poll_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->auth_poll_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auth_poll_post_request** | [**AuthPollPostRequest**](AuthPollPostRequest.md)|  | 

### Return type

[**AuthPollPost200Response**](AuthPollPost200Response.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The user confirmed the authentication request |  -  |
**403** | The authentication request was not confirmed yet |  -  |
**404** | The authentication request was not found |  -  |
**429** | You are polling too quickly, please back off |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **auth_start_post**
> AuthStartPost200Response auth_start_post(auth_start_post_request)

Start an authentication request

If you want to access the TVmaze API on behalf of a user without querying them for their password, use this endpoint.  To get started, send a POST request containing the user's email address. The response will contain a `token`, which you can use as input to the `poll` endpoint. The user will receive an email prompting them to confirm the authentication request.  Alternatively, if you expect the user to be logged in to TVmaze on the device they are currently interacting with, you can set `email_confirmation` to false and redirect them to the `confirm_url` URL. If they are logged in to TVmaze, they will be able to confirm the authentication request instantly. 

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.auth_start_post200_response import AuthStartPost200Response
from openapi_client.models.auth_start_post_request import AuthStartPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.tvmaze.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.tvmaze.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: usertoken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthApi(api_client)
    auth_start_post_request = openapi_client.AuthStartPostRequest() # AuthStartPostRequest | 

    try:
        # Start an authentication request
        api_response = api_instance.auth_start_post(auth_start_post_request)
        print("The response of AuthApi->auth_start_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->auth_start_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auth_start_post_request** | [**AuthStartPostRequest**](AuthStartPostRequest.md)|  | 

### Return type

[**AuthStartPost200Response**](AuthStartPost200Response.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The authentication request was succesfully started |  -  |
**401** | The email address was found, but not confirmed |  -  |
**404** | The email address was not found |  -  |
**429** | You are starting authentication requests too quickly, please back off |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **auth_validate_get**
> AuthValidateGet200Response auth_validate_get()

Validate your authentication credentials

If the credentials supplied as HTTP basic are valid, the user's level of premium - if any - is returned.

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.auth_validate_get200_response import AuthValidateGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.tvmaze.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.tvmaze.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: usertoken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthApi(api_client)

    try:
        # Validate your authentication credentials
        api_response = api_instance.auth_validate_get()
        print("The response of AuthApi->auth_validate_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->auth_validate_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**AuthValidateGet200Response**](AuthValidateGet200Response.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The supplied credentials are valid |  -  |
**401** | The supplied credentials are not valid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

