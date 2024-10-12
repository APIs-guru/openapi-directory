# openapi_client.AccountsApi

All URIs are relative to *https://identitytoolkit.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**identitytoolkit_accounts_mfa_enrollment_finalize**](AccountsApi.md#identitytoolkit_accounts_mfa_enrollment_finalize) | **POST** /v2/accounts/mfaEnrollment:finalize | 
[**identitytoolkit_accounts_mfa_enrollment_start**](AccountsApi.md#identitytoolkit_accounts_mfa_enrollment_start) | **POST** /v2/accounts/mfaEnrollment:start | 
[**identitytoolkit_accounts_mfa_enrollment_withdraw**](AccountsApi.md#identitytoolkit_accounts_mfa_enrollment_withdraw) | **POST** /v2/accounts/mfaEnrollment:withdraw | 
[**identitytoolkit_accounts_mfa_sign_in_finalize**](AccountsApi.md#identitytoolkit_accounts_mfa_sign_in_finalize) | **POST** /v2/accounts/mfaSignIn:finalize | 
[**identitytoolkit_accounts_mfa_sign_in_start**](AccountsApi.md#identitytoolkit_accounts_mfa_sign_in_start) | **POST** /v2/accounts/mfaSignIn:start | 
[**identitytoolkit_accounts_revoke_token**](AccountsApi.md#identitytoolkit_accounts_revoke_token) | **POST** /v2/accounts:revokeToken | 


# **identitytoolkit_accounts_mfa_enrollment_finalize**
> GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse identitytoolkit_accounts_mfa_enrollment_finalize(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_request=google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_request)



Finishes enrolling a second factor for the user.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_request import GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest
from openapi_client.models.google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_response import GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://identitytoolkit.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://identitytoolkit.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_request = openapi_client.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest() # GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest |  (optional)

    try:
        api_response = api_instance.identitytoolkit_accounts_mfa_enrollment_finalize(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_request=google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_request)
        print("The response of AccountsApi->identitytoolkit_accounts_mfa_enrollment_finalize:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->identitytoolkit_accounts_mfa_enrollment_finalize: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_request** | [**GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest**](GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest.md)|  | [optional] 

### Return type

[**GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse**](GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **identitytoolkit_accounts_mfa_enrollment_start**
> GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse identitytoolkit_accounts_mfa_enrollment_start(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_identitytoolkit_v2_start_mfa_enrollment_request=google_cloud_identitytoolkit_v2_start_mfa_enrollment_request)



Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_identitytoolkit_v2_start_mfa_enrollment_request import GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest
from openapi_client.models.google_cloud_identitytoolkit_v2_start_mfa_enrollment_response import GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://identitytoolkit.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://identitytoolkit.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    google_cloud_identitytoolkit_v2_start_mfa_enrollment_request = openapi_client.GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest() # GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest |  (optional)

    try:
        api_response = api_instance.identitytoolkit_accounts_mfa_enrollment_start(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_identitytoolkit_v2_start_mfa_enrollment_request=google_cloud_identitytoolkit_v2_start_mfa_enrollment_request)
        print("The response of AccountsApi->identitytoolkit_accounts_mfa_enrollment_start:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->identitytoolkit_accounts_mfa_enrollment_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **google_cloud_identitytoolkit_v2_start_mfa_enrollment_request** | [**GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest**](GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest.md)|  | [optional] 

### Return type

[**GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse**](GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **identitytoolkit_accounts_mfa_enrollment_withdraw**
> GoogleCloudIdentitytoolkitV2WithdrawMfaResponse identitytoolkit_accounts_mfa_enrollment_withdraw(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_identitytoolkit_v2_withdraw_mfa_request=google_cloud_identitytoolkit_v2_withdraw_mfa_request)



Revokes one second factor from the enrolled second factors for an account.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_identitytoolkit_v2_withdraw_mfa_request import GoogleCloudIdentitytoolkitV2WithdrawMfaRequest
from openapi_client.models.google_cloud_identitytoolkit_v2_withdraw_mfa_response import GoogleCloudIdentitytoolkitV2WithdrawMfaResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://identitytoolkit.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://identitytoolkit.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    google_cloud_identitytoolkit_v2_withdraw_mfa_request = openapi_client.GoogleCloudIdentitytoolkitV2WithdrawMfaRequest() # GoogleCloudIdentitytoolkitV2WithdrawMfaRequest |  (optional)

    try:
        api_response = api_instance.identitytoolkit_accounts_mfa_enrollment_withdraw(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_identitytoolkit_v2_withdraw_mfa_request=google_cloud_identitytoolkit_v2_withdraw_mfa_request)
        print("The response of AccountsApi->identitytoolkit_accounts_mfa_enrollment_withdraw:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->identitytoolkit_accounts_mfa_enrollment_withdraw: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **google_cloud_identitytoolkit_v2_withdraw_mfa_request** | [**GoogleCloudIdentitytoolkitV2WithdrawMfaRequest**](GoogleCloudIdentitytoolkitV2WithdrawMfaRequest.md)|  | [optional] 

### Return type

[**GoogleCloudIdentitytoolkitV2WithdrawMfaResponse**](GoogleCloudIdentitytoolkitV2WithdrawMfaResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **identitytoolkit_accounts_mfa_sign_in_finalize**
> GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse identitytoolkit_accounts_mfa_sign_in_finalize(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_identitytoolkit_v2_finalize_mfa_sign_in_request=google_cloud_identitytoolkit_v2_finalize_mfa_sign_in_request)



Verifies the MFA challenge and performs sign-in

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_identitytoolkit_v2_finalize_mfa_sign_in_request import GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest
from openapi_client.models.google_cloud_identitytoolkit_v2_finalize_mfa_sign_in_response import GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://identitytoolkit.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://identitytoolkit.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    google_cloud_identitytoolkit_v2_finalize_mfa_sign_in_request = openapi_client.GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest() # GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest |  (optional)

    try:
        api_response = api_instance.identitytoolkit_accounts_mfa_sign_in_finalize(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_identitytoolkit_v2_finalize_mfa_sign_in_request=google_cloud_identitytoolkit_v2_finalize_mfa_sign_in_request)
        print("The response of AccountsApi->identitytoolkit_accounts_mfa_sign_in_finalize:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->identitytoolkit_accounts_mfa_sign_in_finalize: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **google_cloud_identitytoolkit_v2_finalize_mfa_sign_in_request** | [**GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest**](GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest.md)|  | [optional] 

### Return type

[**GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse**](GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **identitytoolkit_accounts_mfa_sign_in_start**
> GoogleCloudIdentitytoolkitV2StartMfaSignInResponse identitytoolkit_accounts_mfa_sign_in_start(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_identitytoolkit_v2_start_mfa_sign_in_request=google_cloud_identitytoolkit_v2_start_mfa_sign_in_request)



Sends the MFA challenge

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_identitytoolkit_v2_start_mfa_sign_in_request import GoogleCloudIdentitytoolkitV2StartMfaSignInRequest
from openapi_client.models.google_cloud_identitytoolkit_v2_start_mfa_sign_in_response import GoogleCloudIdentitytoolkitV2StartMfaSignInResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://identitytoolkit.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://identitytoolkit.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    google_cloud_identitytoolkit_v2_start_mfa_sign_in_request = openapi_client.GoogleCloudIdentitytoolkitV2StartMfaSignInRequest() # GoogleCloudIdentitytoolkitV2StartMfaSignInRequest |  (optional)

    try:
        api_response = api_instance.identitytoolkit_accounts_mfa_sign_in_start(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_identitytoolkit_v2_start_mfa_sign_in_request=google_cloud_identitytoolkit_v2_start_mfa_sign_in_request)
        print("The response of AccountsApi->identitytoolkit_accounts_mfa_sign_in_start:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->identitytoolkit_accounts_mfa_sign_in_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **google_cloud_identitytoolkit_v2_start_mfa_sign_in_request** | [**GoogleCloudIdentitytoolkitV2StartMfaSignInRequest**](GoogleCloudIdentitytoolkitV2StartMfaSignInRequest.md)|  | [optional] 

### Return type

[**GoogleCloudIdentitytoolkitV2StartMfaSignInResponse**](GoogleCloudIdentitytoolkitV2StartMfaSignInResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **identitytoolkit_accounts_revoke_token**
> object identitytoolkit_accounts_revoke_token(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_identitytoolkit_v2_revoke_token_request=google_cloud_identitytoolkit_v2_revoke_token_request)



Revokes a user's token from an Identity Provider (IdP). This is done by manually providing an IdP credential, and the token types for revocation. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_identitytoolkit_v2_revoke_token_request import GoogleCloudIdentitytoolkitV2RevokeTokenRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://identitytoolkit.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://identitytoolkit.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    google_cloud_identitytoolkit_v2_revoke_token_request = openapi_client.GoogleCloudIdentitytoolkitV2RevokeTokenRequest() # GoogleCloudIdentitytoolkitV2RevokeTokenRequest |  (optional)

    try:
        api_response = api_instance.identitytoolkit_accounts_revoke_token(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_identitytoolkit_v2_revoke_token_request=google_cloud_identitytoolkit_v2_revoke_token_request)
        print("The response of AccountsApi->identitytoolkit_accounts_revoke_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->identitytoolkit_accounts_revoke_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **google_cloud_identitytoolkit_v2_revoke_token_request** | [**GoogleCloudIdentitytoolkitV2RevokeTokenRequest**](GoogleCloudIdentitytoolkitV2RevokeTokenRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

