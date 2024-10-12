# openapi_client.CredentialOperationsApi

All URIs are relative to *http://okta.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**change_password**](CredentialOperationsApi.md#change_password) | **POST** /api/v1/users/{userId}/credentials/change_password | Change Password
[**change_recovery_question**](CredentialOperationsApi.md#change_recovery_question) | **POST** /api/v1/users/{userId}/credentials/change_recovery_question | Change Recovery Question
[**forgot_password_one_time_code**](CredentialOperationsApi.md#forgot_password_one_time_code) | **POST** /api/v1/users/{userId}/credentials/forgot_password | Forgot Password (One Time Code)
[**set_recovery_credential**](CredentialOperationsApi.md#set_recovery_credential) | **PUT** /api/v1/users/{userId} | Set Recovery Credential


# **change_password**
> change_password(user_id, change_password_request=change_password_request)

Change Password

Change Password

### Example


```python
import openapi_client
from openapi_client.models.change_password_request import ChangePasswordRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://okta.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://okta.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CredentialOperationsApi(api_client)
    user_id = 'user_id_example' # str | 
    change_password_request = {"newPassword":{"value":"uTVM,TPw55"},"oldPassword":{"value":"{{password}}"}} # ChangePasswordRequest |  (optional)

    try:
        # Change Password
        api_instance.change_password(user_id, change_password_request=change_password_request)
    except Exception as e:
        print("Exception when calling CredentialOperationsApi->change_password: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 
 **change_password_request** | [**ChangePasswordRequest**](ChangePasswordRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **change_recovery_question**
> change_recovery_question(user_id, change_recovery_question_request=change_recovery_question_request)

Change Recovery Question

Change Recovery Question

### Example


```python
import openapi_client
from openapi_client.models.change_recovery_question_request import ChangeRecoveryQuestionRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://okta.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://okta.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CredentialOperationsApi(api_client)
    user_id = 'user_id_example' # str | 
    change_recovery_question_request = {"password":{"value":"{{password}}"},"recovery_question":{"answer":"My recovery credentials are updated","question":"What happens when I update my question"}} # ChangeRecoveryQuestionRequest |  (optional)

    try:
        # Change Recovery Question
        api_instance.change_recovery_question(user_id, change_recovery_question_request=change_recovery_question_request)
    except Exception as e:
        print("Exception when calling CredentialOperationsApi->change_recovery_question: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 
 **change_recovery_question_request** | [**ChangeRecoveryQuestionRequest**](ChangeRecoveryQuestionRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forgot_password_one_time_code**
> forgot_password_one_time_code(user_id, send_email=send_email)

Forgot Password (One Time Code)

Forgot Password (One Time Code)

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://okta.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://okta.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CredentialOperationsApi(api_client)
    user_id = 'user_id_example' # str | 
    send_email = 'false' # str |  (optional)

    try:
        # Forgot Password (One Time Code)
        api_instance.forgot_password_one_time_code(user_id, send_email=send_email)
    except Exception as e:
        print("Exception when calling CredentialOperationsApi->forgot_password_one_time_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 
 **send_email** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_recovery_credential**
> set_recovery_credential(user_id, set_recovery_credential_request=set_recovery_credential_request)

Set Recovery Credential

Set Recovery Credential

### Example


```python
import openapi_client
from openapi_client.models.set_recovery_credential_request import SetRecoveryCredentialRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://okta.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://okta.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CredentialOperationsApi(api_client)
    user_id = 'user_id_example' # str | 
    set_recovery_credential_request = {"credentials":{"recovery_question":{"answer":"Annie Oakley","question":"Who's a major player in the cowboy scene?"}}} # SetRecoveryCredentialRequest |  (optional)

    try:
        # Set Recovery Credential
        api_instance.set_recovery_credential(user_id, set_recovery_credential_request=set_recovery_credential_request)
    except Exception as e:
        print("Exception when calling CredentialOperationsApi->set_recovery_credential: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 
 **set_recovery_credential_request** | [**SetRecoveryCredentialRequest**](SetRecoveryCredentialRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

