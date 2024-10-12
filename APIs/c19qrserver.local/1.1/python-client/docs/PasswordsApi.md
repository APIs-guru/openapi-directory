# openapi_client.PasswordsApi

All URIs are relative to *http://c19qrserver.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**change_password_post**](PasswordsApi.md#change_password_post) | **POST** /changePassword | Used for changing your password
[**request_password_reset_post**](PasswordsApi.md#request_password_reset_post) | **POST** /requestPasswordReset | Used for requesting a password reset code
[**verify_password_change_post**](PasswordsApi.md#verify_password_change_post) | **POST** /verifyPasswordChange | Used for resetting your password when you forgot it


# **change_password_post**
> change_password_post(sample)

Used for changing your password

Pass in your old password and your new password

### Example

* Api Key Authentication (TokenHeader):

```python
import openapi_client
from openapi_client.models.sample import Sample
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://c19qrserver.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://c19qrserver.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenHeader
configuration.api_key['TokenHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PasswordsApi(api_client)
    sample = openapi_client.Sample() # Sample | Change Password Payload

    try:
        # Used for changing your password
        api_instance.change_password_post(sample)
    except Exception as e:
        print("Exception when calling PasswordsApi->change_password_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sample** | [**Sample**](Sample.md)| Change Password Payload | 

### Return type

void (empty response body)

### Authorization

[TokenHeader](../README.md#TokenHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **request_password_reset_post**
> RequestPasswordResetResponse request_password_reset_post(sample2)

Used for requesting a password reset code

The admin should run this on behalf of a user who forgot their password.  The API will generate a password reset code which the admin should then provide to the user. The user can use their client to reset their password. Normally the password reset code is mailed to the user, but I didn't want to do this in this case because I didn't want to  introduce the complicated dependency of having an SMTP server just for this purpose. Doing it this way makes it easy for people to adopt this  API. 

### Example

* Api Key Authentication (TokenHeader):

```python
import openapi_client
from openapi_client.models.request_password_reset_response import RequestPasswordResetResponse
from openapi_client.models.sample2 import Sample2
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://c19qrserver.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://c19qrserver.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenHeader
configuration.api_key['TokenHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PasswordsApi(api_client)
    sample2 = openapi_client.Sample2() # Sample2 | Request Password Reset Payload

    try:
        # Used for requesting a password reset code
        api_response = api_instance.request_password_reset_post(sample2)
        print("The response of PasswordsApi->request_password_reset_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PasswordsApi->request_password_reset_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sample2** | [**Sample2**](Sample2.md)| Request Password Reset Payload | 

### Return type

[**RequestPasswordResetResponse**](RequestPasswordResetResponse.md)

### Authorization

[TokenHeader](../README.md#TokenHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verify_password_change_post**
> verify_password_change_post(sample4)

Used for resetting your password when you forgot it

Another endpoint will generate a password reset code for you. You should  use the client app to submit the reset code along with the new password to change your password. 

### Example

* Api Key Authentication (TokenHeader):

```python
import openapi_client
from openapi_client.models.sample4 import Sample4
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://c19qrserver.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://c19qrserver.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenHeader
configuration.api_key['TokenHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PasswordsApi(api_client)
    sample4 = openapi_client.Sample4() # Sample4 | Password Reset Payload

    try:
        # Used for resetting your password when you forgot it
        api_instance.verify_password_change_post(sample4)
    except Exception as e:
        print("Exception when calling PasswordsApi->verify_password_change_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sample4** | [**Sample4**](Sample4.md)| Password Reset Payload | 

### Return type

void (empty response body)

### Authorization

[TokenHeader](../README.md#TokenHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

