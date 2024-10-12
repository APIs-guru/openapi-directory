# openapi_client.RelyingpartyApi

All URIs are relative to *https://www.googleapis.com/identitytoolkit/v3/relyingparty*

Method | HTTP request | Description
------------- | ------------- | -------------
[**identitytoolkit_relyingparty_create_auth_uri**](RelyingpartyApi.md#identitytoolkit_relyingparty_create_auth_uri) | **POST** /createAuthUri | 
[**identitytoolkit_relyingparty_delete_account**](RelyingpartyApi.md#identitytoolkit_relyingparty_delete_account) | **POST** /deleteAccount | 
[**identitytoolkit_relyingparty_download_account**](RelyingpartyApi.md#identitytoolkit_relyingparty_download_account) | **POST** /downloadAccount | 
[**identitytoolkit_relyingparty_email_link_signin**](RelyingpartyApi.md#identitytoolkit_relyingparty_email_link_signin) | **POST** /emailLinkSignin | 
[**identitytoolkit_relyingparty_get_account_info**](RelyingpartyApi.md#identitytoolkit_relyingparty_get_account_info) | **POST** /getAccountInfo | 
[**identitytoolkit_relyingparty_get_oob_confirmation_code**](RelyingpartyApi.md#identitytoolkit_relyingparty_get_oob_confirmation_code) | **POST** /getOobConfirmationCode | 
[**identitytoolkit_relyingparty_get_project_config**](RelyingpartyApi.md#identitytoolkit_relyingparty_get_project_config) | **GET** /getProjectConfig | 
[**identitytoolkit_relyingparty_get_public_keys**](RelyingpartyApi.md#identitytoolkit_relyingparty_get_public_keys) | **GET** /publicKeys | 
[**identitytoolkit_relyingparty_get_recaptcha_param**](RelyingpartyApi.md#identitytoolkit_relyingparty_get_recaptcha_param) | **GET** /getRecaptchaParam | 
[**identitytoolkit_relyingparty_reset_password**](RelyingpartyApi.md#identitytoolkit_relyingparty_reset_password) | **POST** /resetPassword | 
[**identitytoolkit_relyingparty_send_verification_code**](RelyingpartyApi.md#identitytoolkit_relyingparty_send_verification_code) | **POST** /sendVerificationCode | 
[**identitytoolkit_relyingparty_set_account_info**](RelyingpartyApi.md#identitytoolkit_relyingparty_set_account_info) | **POST** /setAccountInfo | 
[**identitytoolkit_relyingparty_set_project_config**](RelyingpartyApi.md#identitytoolkit_relyingparty_set_project_config) | **POST** /setProjectConfig | 
[**identitytoolkit_relyingparty_sign_out_user**](RelyingpartyApi.md#identitytoolkit_relyingparty_sign_out_user) | **POST** /signOutUser | 
[**identitytoolkit_relyingparty_signup_new_user**](RelyingpartyApi.md#identitytoolkit_relyingparty_signup_new_user) | **POST** /signupNewUser | 
[**identitytoolkit_relyingparty_upload_account**](RelyingpartyApi.md#identitytoolkit_relyingparty_upload_account) | **POST** /uploadAccount | 
[**identitytoolkit_relyingparty_verify_assertion**](RelyingpartyApi.md#identitytoolkit_relyingparty_verify_assertion) | **POST** /verifyAssertion | 
[**identitytoolkit_relyingparty_verify_custom_token**](RelyingpartyApi.md#identitytoolkit_relyingparty_verify_custom_token) | **POST** /verifyCustomToken | 
[**identitytoolkit_relyingparty_verify_password**](RelyingpartyApi.md#identitytoolkit_relyingparty_verify_password) | **POST** /verifyPassword | 
[**identitytoolkit_relyingparty_verify_phone_number**](RelyingpartyApi.md#identitytoolkit_relyingparty_verify_phone_number) | **POST** /verifyPhoneNumber | 


# **identitytoolkit_relyingparty_create_auth_uri**
> CreateAuthUriResponse identitytoolkit_relyingparty_create_auth_uri(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_create_auth_uri_request=identitytoolkit_relyingparty_create_auth_uri_request)



Creates the URI used by the IdP to authenticate the user.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.create_auth_uri_response import CreateAuthUriResponse
from openapi_client.models.identitytoolkit_relyingparty_create_auth_uri_request import IdentitytoolkitRelyingpartyCreateAuthUriRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/identitytoolkit/v3/relyingparty
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
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
    api_instance = openapi_client.RelyingpartyApi(api_client)
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    identitytoolkit_relyingparty_create_auth_uri_request = openapi_client.IdentitytoolkitRelyingpartyCreateAuthUriRequest() # IdentitytoolkitRelyingpartyCreateAuthUriRequest |  (optional)

    try:
        api_response = api_instance.identitytoolkit_relyingparty_create_auth_uri(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_create_auth_uri_request=identitytoolkit_relyingparty_create_auth_uri_request)
        print("The response of RelyingpartyApi->identitytoolkit_relyingparty_create_auth_uri:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelyingpartyApi->identitytoolkit_relyingparty_create_auth_uri: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **identitytoolkit_relyingparty_create_auth_uri_request** | [**IdentitytoolkitRelyingpartyCreateAuthUriRequest**](IdentitytoolkitRelyingpartyCreateAuthUriRequest.md)|  | [optional] 

### Return type

[**CreateAuthUriResponse**](CreateAuthUriResponse.md)

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

# **identitytoolkit_relyingparty_delete_account**
> DeleteAccountResponse identitytoolkit_relyingparty_delete_account(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_delete_account_request=identitytoolkit_relyingparty_delete_account_request)



Delete user account.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.delete_account_response import DeleteAccountResponse
from openapi_client.models.identitytoolkit_relyingparty_delete_account_request import IdentitytoolkitRelyingpartyDeleteAccountRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/identitytoolkit/v3/relyingparty
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
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
    api_instance = openapi_client.RelyingpartyApi(api_client)
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    identitytoolkit_relyingparty_delete_account_request = openapi_client.IdentitytoolkitRelyingpartyDeleteAccountRequest() # IdentitytoolkitRelyingpartyDeleteAccountRequest |  (optional)

    try:
        api_response = api_instance.identitytoolkit_relyingparty_delete_account(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_delete_account_request=identitytoolkit_relyingparty_delete_account_request)
        print("The response of RelyingpartyApi->identitytoolkit_relyingparty_delete_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelyingpartyApi->identitytoolkit_relyingparty_delete_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **identitytoolkit_relyingparty_delete_account_request** | [**IdentitytoolkitRelyingpartyDeleteAccountRequest**](IdentitytoolkitRelyingpartyDeleteAccountRequest.md)|  | [optional] 

### Return type

[**DeleteAccountResponse**](DeleteAccountResponse.md)

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

# **identitytoolkit_relyingparty_download_account**
> DownloadAccountResponse identitytoolkit_relyingparty_download_account(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_download_account_request=identitytoolkit_relyingparty_download_account_request)



Batch download user accounts.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.download_account_response import DownloadAccountResponse
from openapi_client.models.identitytoolkit_relyingparty_download_account_request import IdentitytoolkitRelyingpartyDownloadAccountRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/identitytoolkit/v3/relyingparty
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
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
    api_instance = openapi_client.RelyingpartyApi(api_client)
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    identitytoolkit_relyingparty_download_account_request = openapi_client.IdentitytoolkitRelyingpartyDownloadAccountRequest() # IdentitytoolkitRelyingpartyDownloadAccountRequest |  (optional)

    try:
        api_response = api_instance.identitytoolkit_relyingparty_download_account(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_download_account_request=identitytoolkit_relyingparty_download_account_request)
        print("The response of RelyingpartyApi->identitytoolkit_relyingparty_download_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelyingpartyApi->identitytoolkit_relyingparty_download_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **identitytoolkit_relyingparty_download_account_request** | [**IdentitytoolkitRelyingpartyDownloadAccountRequest**](IdentitytoolkitRelyingpartyDownloadAccountRequest.md)|  | [optional] 

### Return type

[**DownloadAccountResponse**](DownloadAccountResponse.md)

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

# **identitytoolkit_relyingparty_email_link_signin**
> EmailLinkSigninResponse identitytoolkit_relyingparty_email_link_signin(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_email_link_signin_request=identitytoolkit_relyingparty_email_link_signin_request)



Reset password for a user.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.email_link_signin_response import EmailLinkSigninResponse
from openapi_client.models.identitytoolkit_relyingparty_email_link_signin_request import IdentitytoolkitRelyingpartyEmailLinkSigninRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/identitytoolkit/v3/relyingparty
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
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
    api_instance = openapi_client.RelyingpartyApi(api_client)
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    identitytoolkit_relyingparty_email_link_signin_request = openapi_client.IdentitytoolkitRelyingpartyEmailLinkSigninRequest() # IdentitytoolkitRelyingpartyEmailLinkSigninRequest |  (optional)

    try:
        api_response = api_instance.identitytoolkit_relyingparty_email_link_signin(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_email_link_signin_request=identitytoolkit_relyingparty_email_link_signin_request)
        print("The response of RelyingpartyApi->identitytoolkit_relyingparty_email_link_signin:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelyingpartyApi->identitytoolkit_relyingparty_email_link_signin: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **identitytoolkit_relyingparty_email_link_signin_request** | [**IdentitytoolkitRelyingpartyEmailLinkSigninRequest**](IdentitytoolkitRelyingpartyEmailLinkSigninRequest.md)|  | [optional] 

### Return type

[**EmailLinkSigninResponse**](EmailLinkSigninResponse.md)

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

# **identitytoolkit_relyingparty_get_account_info**
> GetAccountInfoResponse identitytoolkit_relyingparty_get_account_info(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_get_account_info_request=identitytoolkit_relyingparty_get_account_info_request)



Returns the account info.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.get_account_info_response import GetAccountInfoResponse
from openapi_client.models.identitytoolkit_relyingparty_get_account_info_request import IdentitytoolkitRelyingpartyGetAccountInfoRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/identitytoolkit/v3/relyingparty
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
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
    api_instance = openapi_client.RelyingpartyApi(api_client)
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    identitytoolkit_relyingparty_get_account_info_request = openapi_client.IdentitytoolkitRelyingpartyGetAccountInfoRequest() # IdentitytoolkitRelyingpartyGetAccountInfoRequest |  (optional)

    try:
        api_response = api_instance.identitytoolkit_relyingparty_get_account_info(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_get_account_info_request=identitytoolkit_relyingparty_get_account_info_request)
        print("The response of RelyingpartyApi->identitytoolkit_relyingparty_get_account_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelyingpartyApi->identitytoolkit_relyingparty_get_account_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **identitytoolkit_relyingparty_get_account_info_request** | [**IdentitytoolkitRelyingpartyGetAccountInfoRequest**](IdentitytoolkitRelyingpartyGetAccountInfoRequest.md)|  | [optional] 

### Return type

[**GetAccountInfoResponse**](GetAccountInfoResponse.md)

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

# **identitytoolkit_relyingparty_get_oob_confirmation_code**
> GetOobConfirmationCodeResponse identitytoolkit_relyingparty_get_oob_confirmation_code(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, relyingparty=relyingparty)



Get a code for user action confirmation.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.get_oob_confirmation_code_response import GetOobConfirmationCodeResponse
from openapi_client.models.relyingparty import Relyingparty
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/identitytoolkit/v3/relyingparty
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
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
    api_instance = openapi_client.RelyingpartyApi(api_client)
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    relyingparty = openapi_client.Relyingparty() # Relyingparty |  (optional)

    try:
        api_response = api_instance.identitytoolkit_relyingparty_get_oob_confirmation_code(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, relyingparty=relyingparty)
        print("The response of RelyingpartyApi->identitytoolkit_relyingparty_get_oob_confirmation_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelyingpartyApi->identitytoolkit_relyingparty_get_oob_confirmation_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **relyingparty** | [**Relyingparty**](Relyingparty.md)|  | [optional] 

### Return type

[**GetOobConfirmationCodeResponse**](GetOobConfirmationCodeResponse.md)

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

# **identitytoolkit_relyingparty_get_project_config**
> IdentitytoolkitRelyingpartyGetProjectConfigResponse identitytoolkit_relyingparty_get_project_config(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, delegated_project_number=delegated_project_number, project_number=project_number)



Get project configuration.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.identitytoolkit_relyingparty_get_project_config_response import IdentitytoolkitRelyingpartyGetProjectConfigResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/identitytoolkit/v3/relyingparty
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
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
    api_instance = openapi_client.RelyingpartyApi(api_client)
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    delegated_project_number = 'delegated_project_number_example' # str | Delegated GCP project number of the request. (optional)
    project_number = 'project_number_example' # str | GCP project number of the request. (optional)

    try:
        api_response = api_instance.identitytoolkit_relyingparty_get_project_config(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, delegated_project_number=delegated_project_number, project_number=project_number)
        print("The response of RelyingpartyApi->identitytoolkit_relyingparty_get_project_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelyingpartyApi->identitytoolkit_relyingparty_get_project_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **delegated_project_number** | **str**| Delegated GCP project number of the request. | [optional] 
 **project_number** | **str**| GCP project number of the request. | [optional] 

### Return type

[**IdentitytoolkitRelyingpartyGetProjectConfigResponse**](IdentitytoolkitRelyingpartyGetProjectConfigResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **identitytoolkit_relyingparty_get_public_keys**
> Dict[str, str] identitytoolkit_relyingparty_get_public_keys(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Get token signing public key.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/identitytoolkit/v3/relyingparty
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
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
    api_instance = openapi_client.RelyingpartyApi(api_client)
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.identitytoolkit_relyingparty_get_public_keys(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of RelyingpartyApi->identitytoolkit_relyingparty_get_public_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelyingpartyApi->identitytoolkit_relyingparty_get_public_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

**Dict[str, str]**

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **identitytoolkit_relyingparty_get_recaptcha_param**
> GetRecaptchaParamResponse identitytoolkit_relyingparty_get_recaptcha_param(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Get recaptcha secure param.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.get_recaptcha_param_response import GetRecaptchaParamResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/identitytoolkit/v3/relyingparty
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
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
    api_instance = openapi_client.RelyingpartyApi(api_client)
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.identitytoolkit_relyingparty_get_recaptcha_param(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of RelyingpartyApi->identitytoolkit_relyingparty_get_recaptcha_param:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelyingpartyApi->identitytoolkit_relyingparty_get_recaptcha_param: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**GetRecaptchaParamResponse**](GetRecaptchaParamResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **identitytoolkit_relyingparty_reset_password**
> ResetPasswordResponse identitytoolkit_relyingparty_reset_password(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_reset_password_request=identitytoolkit_relyingparty_reset_password_request)



Reset password for a user.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.identitytoolkit_relyingparty_reset_password_request import IdentitytoolkitRelyingpartyResetPasswordRequest
from openapi_client.models.reset_password_response import ResetPasswordResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/identitytoolkit/v3/relyingparty
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
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
    api_instance = openapi_client.RelyingpartyApi(api_client)
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    identitytoolkit_relyingparty_reset_password_request = openapi_client.IdentitytoolkitRelyingpartyResetPasswordRequest() # IdentitytoolkitRelyingpartyResetPasswordRequest |  (optional)

    try:
        api_response = api_instance.identitytoolkit_relyingparty_reset_password(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_reset_password_request=identitytoolkit_relyingparty_reset_password_request)
        print("The response of RelyingpartyApi->identitytoolkit_relyingparty_reset_password:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelyingpartyApi->identitytoolkit_relyingparty_reset_password: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **identitytoolkit_relyingparty_reset_password_request** | [**IdentitytoolkitRelyingpartyResetPasswordRequest**](IdentitytoolkitRelyingpartyResetPasswordRequest.md)|  | [optional] 

### Return type

[**ResetPasswordResponse**](ResetPasswordResponse.md)

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

# **identitytoolkit_relyingparty_send_verification_code**
> IdentitytoolkitRelyingpartySendVerificationCodeResponse identitytoolkit_relyingparty_send_verification_code(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_send_verification_code_request=identitytoolkit_relyingparty_send_verification_code_request)



Send SMS verification code.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.identitytoolkit_relyingparty_send_verification_code_request import IdentitytoolkitRelyingpartySendVerificationCodeRequest
from openapi_client.models.identitytoolkit_relyingparty_send_verification_code_response import IdentitytoolkitRelyingpartySendVerificationCodeResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/identitytoolkit/v3/relyingparty
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
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
    api_instance = openapi_client.RelyingpartyApi(api_client)
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    identitytoolkit_relyingparty_send_verification_code_request = openapi_client.IdentitytoolkitRelyingpartySendVerificationCodeRequest() # IdentitytoolkitRelyingpartySendVerificationCodeRequest |  (optional)

    try:
        api_response = api_instance.identitytoolkit_relyingparty_send_verification_code(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_send_verification_code_request=identitytoolkit_relyingparty_send_verification_code_request)
        print("The response of RelyingpartyApi->identitytoolkit_relyingparty_send_verification_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelyingpartyApi->identitytoolkit_relyingparty_send_verification_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **identitytoolkit_relyingparty_send_verification_code_request** | [**IdentitytoolkitRelyingpartySendVerificationCodeRequest**](IdentitytoolkitRelyingpartySendVerificationCodeRequest.md)|  | [optional] 

### Return type

[**IdentitytoolkitRelyingpartySendVerificationCodeResponse**](IdentitytoolkitRelyingpartySendVerificationCodeResponse.md)

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

# **identitytoolkit_relyingparty_set_account_info**
> SetAccountInfoResponse identitytoolkit_relyingparty_set_account_info(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_set_account_info_request=identitytoolkit_relyingparty_set_account_info_request)



Set account info for a user.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.identitytoolkit_relyingparty_set_account_info_request import IdentitytoolkitRelyingpartySetAccountInfoRequest
from openapi_client.models.set_account_info_response import SetAccountInfoResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/identitytoolkit/v3/relyingparty
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
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
    api_instance = openapi_client.RelyingpartyApi(api_client)
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    identitytoolkit_relyingparty_set_account_info_request = openapi_client.IdentitytoolkitRelyingpartySetAccountInfoRequest() # IdentitytoolkitRelyingpartySetAccountInfoRequest |  (optional)

    try:
        api_response = api_instance.identitytoolkit_relyingparty_set_account_info(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_set_account_info_request=identitytoolkit_relyingparty_set_account_info_request)
        print("The response of RelyingpartyApi->identitytoolkit_relyingparty_set_account_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelyingpartyApi->identitytoolkit_relyingparty_set_account_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **identitytoolkit_relyingparty_set_account_info_request** | [**IdentitytoolkitRelyingpartySetAccountInfoRequest**](IdentitytoolkitRelyingpartySetAccountInfoRequest.md)|  | [optional] 

### Return type

[**SetAccountInfoResponse**](SetAccountInfoResponse.md)

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

# **identitytoolkit_relyingparty_set_project_config**
> IdentitytoolkitRelyingpartySetProjectConfigResponse identitytoolkit_relyingparty_set_project_config(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_set_project_config_request=identitytoolkit_relyingparty_set_project_config_request)



Set project configuration.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.identitytoolkit_relyingparty_set_project_config_request import IdentitytoolkitRelyingpartySetProjectConfigRequest
from openapi_client.models.identitytoolkit_relyingparty_set_project_config_response import IdentitytoolkitRelyingpartySetProjectConfigResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/identitytoolkit/v3/relyingparty
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
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
    api_instance = openapi_client.RelyingpartyApi(api_client)
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    identitytoolkit_relyingparty_set_project_config_request = openapi_client.IdentitytoolkitRelyingpartySetProjectConfigRequest() # IdentitytoolkitRelyingpartySetProjectConfigRequest |  (optional)

    try:
        api_response = api_instance.identitytoolkit_relyingparty_set_project_config(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_set_project_config_request=identitytoolkit_relyingparty_set_project_config_request)
        print("The response of RelyingpartyApi->identitytoolkit_relyingparty_set_project_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelyingpartyApi->identitytoolkit_relyingparty_set_project_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **identitytoolkit_relyingparty_set_project_config_request** | [**IdentitytoolkitRelyingpartySetProjectConfigRequest**](IdentitytoolkitRelyingpartySetProjectConfigRequest.md)|  | [optional] 

### Return type

[**IdentitytoolkitRelyingpartySetProjectConfigResponse**](IdentitytoolkitRelyingpartySetProjectConfigResponse.md)

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

# **identitytoolkit_relyingparty_sign_out_user**
> IdentitytoolkitRelyingpartySignOutUserResponse identitytoolkit_relyingparty_sign_out_user(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_sign_out_user_request=identitytoolkit_relyingparty_sign_out_user_request)



Sign out user.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.identitytoolkit_relyingparty_sign_out_user_request import IdentitytoolkitRelyingpartySignOutUserRequest
from openapi_client.models.identitytoolkit_relyingparty_sign_out_user_response import IdentitytoolkitRelyingpartySignOutUserResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/identitytoolkit/v3/relyingparty
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
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
    api_instance = openapi_client.RelyingpartyApi(api_client)
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    identitytoolkit_relyingparty_sign_out_user_request = openapi_client.IdentitytoolkitRelyingpartySignOutUserRequest() # IdentitytoolkitRelyingpartySignOutUserRequest |  (optional)

    try:
        api_response = api_instance.identitytoolkit_relyingparty_sign_out_user(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_sign_out_user_request=identitytoolkit_relyingparty_sign_out_user_request)
        print("The response of RelyingpartyApi->identitytoolkit_relyingparty_sign_out_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelyingpartyApi->identitytoolkit_relyingparty_sign_out_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **identitytoolkit_relyingparty_sign_out_user_request** | [**IdentitytoolkitRelyingpartySignOutUserRequest**](IdentitytoolkitRelyingpartySignOutUserRequest.md)|  | [optional] 

### Return type

[**IdentitytoolkitRelyingpartySignOutUserResponse**](IdentitytoolkitRelyingpartySignOutUserResponse.md)

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

# **identitytoolkit_relyingparty_signup_new_user**
> SignupNewUserResponse identitytoolkit_relyingparty_signup_new_user(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_signup_new_user_request=identitytoolkit_relyingparty_signup_new_user_request)



Signup new user.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.identitytoolkit_relyingparty_signup_new_user_request import IdentitytoolkitRelyingpartySignupNewUserRequest
from openapi_client.models.signup_new_user_response import SignupNewUserResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/identitytoolkit/v3/relyingparty
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
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
    api_instance = openapi_client.RelyingpartyApi(api_client)
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    identitytoolkit_relyingparty_signup_new_user_request = openapi_client.IdentitytoolkitRelyingpartySignupNewUserRequest() # IdentitytoolkitRelyingpartySignupNewUserRequest |  (optional)

    try:
        api_response = api_instance.identitytoolkit_relyingparty_signup_new_user(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_signup_new_user_request=identitytoolkit_relyingparty_signup_new_user_request)
        print("The response of RelyingpartyApi->identitytoolkit_relyingparty_signup_new_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelyingpartyApi->identitytoolkit_relyingparty_signup_new_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **identitytoolkit_relyingparty_signup_new_user_request** | [**IdentitytoolkitRelyingpartySignupNewUserRequest**](IdentitytoolkitRelyingpartySignupNewUserRequest.md)|  | [optional] 

### Return type

[**SignupNewUserResponse**](SignupNewUserResponse.md)

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

# **identitytoolkit_relyingparty_upload_account**
> UploadAccountResponse identitytoolkit_relyingparty_upload_account(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_upload_account_request=identitytoolkit_relyingparty_upload_account_request)



Batch upload existing user accounts.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.identitytoolkit_relyingparty_upload_account_request import IdentitytoolkitRelyingpartyUploadAccountRequest
from openapi_client.models.upload_account_response import UploadAccountResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/identitytoolkit/v3/relyingparty
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
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
    api_instance = openapi_client.RelyingpartyApi(api_client)
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    identitytoolkit_relyingparty_upload_account_request = openapi_client.IdentitytoolkitRelyingpartyUploadAccountRequest() # IdentitytoolkitRelyingpartyUploadAccountRequest |  (optional)

    try:
        api_response = api_instance.identitytoolkit_relyingparty_upload_account(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_upload_account_request=identitytoolkit_relyingparty_upload_account_request)
        print("The response of RelyingpartyApi->identitytoolkit_relyingparty_upload_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelyingpartyApi->identitytoolkit_relyingparty_upload_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **identitytoolkit_relyingparty_upload_account_request** | [**IdentitytoolkitRelyingpartyUploadAccountRequest**](IdentitytoolkitRelyingpartyUploadAccountRequest.md)|  | [optional] 

### Return type

[**UploadAccountResponse**](UploadAccountResponse.md)

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

# **identitytoolkit_relyingparty_verify_assertion**
> VerifyAssertionResponse identitytoolkit_relyingparty_verify_assertion(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_verify_assertion_request=identitytoolkit_relyingparty_verify_assertion_request)



Verifies the assertion returned by the IdP.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.identitytoolkit_relyingparty_verify_assertion_request import IdentitytoolkitRelyingpartyVerifyAssertionRequest
from openapi_client.models.verify_assertion_response import VerifyAssertionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/identitytoolkit/v3/relyingparty
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
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
    api_instance = openapi_client.RelyingpartyApi(api_client)
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    identitytoolkit_relyingparty_verify_assertion_request = openapi_client.IdentitytoolkitRelyingpartyVerifyAssertionRequest() # IdentitytoolkitRelyingpartyVerifyAssertionRequest |  (optional)

    try:
        api_response = api_instance.identitytoolkit_relyingparty_verify_assertion(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_verify_assertion_request=identitytoolkit_relyingparty_verify_assertion_request)
        print("The response of RelyingpartyApi->identitytoolkit_relyingparty_verify_assertion:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelyingpartyApi->identitytoolkit_relyingparty_verify_assertion: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **identitytoolkit_relyingparty_verify_assertion_request** | [**IdentitytoolkitRelyingpartyVerifyAssertionRequest**](IdentitytoolkitRelyingpartyVerifyAssertionRequest.md)|  | [optional] 

### Return type

[**VerifyAssertionResponse**](VerifyAssertionResponse.md)

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

# **identitytoolkit_relyingparty_verify_custom_token**
> VerifyCustomTokenResponse identitytoolkit_relyingparty_verify_custom_token(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_verify_custom_token_request=identitytoolkit_relyingparty_verify_custom_token_request)



Verifies the developer asserted ID token.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.identitytoolkit_relyingparty_verify_custom_token_request import IdentitytoolkitRelyingpartyVerifyCustomTokenRequest
from openapi_client.models.verify_custom_token_response import VerifyCustomTokenResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/identitytoolkit/v3/relyingparty
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
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
    api_instance = openapi_client.RelyingpartyApi(api_client)
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    identitytoolkit_relyingparty_verify_custom_token_request = openapi_client.IdentitytoolkitRelyingpartyVerifyCustomTokenRequest() # IdentitytoolkitRelyingpartyVerifyCustomTokenRequest |  (optional)

    try:
        api_response = api_instance.identitytoolkit_relyingparty_verify_custom_token(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_verify_custom_token_request=identitytoolkit_relyingparty_verify_custom_token_request)
        print("The response of RelyingpartyApi->identitytoolkit_relyingparty_verify_custom_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelyingpartyApi->identitytoolkit_relyingparty_verify_custom_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **identitytoolkit_relyingparty_verify_custom_token_request** | [**IdentitytoolkitRelyingpartyVerifyCustomTokenRequest**](IdentitytoolkitRelyingpartyVerifyCustomTokenRequest.md)|  | [optional] 

### Return type

[**VerifyCustomTokenResponse**](VerifyCustomTokenResponse.md)

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

# **identitytoolkit_relyingparty_verify_password**
> VerifyPasswordResponse identitytoolkit_relyingparty_verify_password(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_verify_password_request=identitytoolkit_relyingparty_verify_password_request)



Verifies the user entered password.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.identitytoolkit_relyingparty_verify_password_request import IdentitytoolkitRelyingpartyVerifyPasswordRequest
from openapi_client.models.verify_password_response import VerifyPasswordResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/identitytoolkit/v3/relyingparty
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
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
    api_instance = openapi_client.RelyingpartyApi(api_client)
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    identitytoolkit_relyingparty_verify_password_request = openapi_client.IdentitytoolkitRelyingpartyVerifyPasswordRequest() # IdentitytoolkitRelyingpartyVerifyPasswordRequest |  (optional)

    try:
        api_response = api_instance.identitytoolkit_relyingparty_verify_password(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_verify_password_request=identitytoolkit_relyingparty_verify_password_request)
        print("The response of RelyingpartyApi->identitytoolkit_relyingparty_verify_password:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelyingpartyApi->identitytoolkit_relyingparty_verify_password: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **identitytoolkit_relyingparty_verify_password_request** | [**IdentitytoolkitRelyingpartyVerifyPasswordRequest**](IdentitytoolkitRelyingpartyVerifyPasswordRequest.md)|  | [optional] 

### Return type

[**VerifyPasswordResponse**](VerifyPasswordResponse.md)

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

# **identitytoolkit_relyingparty_verify_phone_number**
> IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse identitytoolkit_relyingparty_verify_phone_number(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_verify_phone_number_request=identitytoolkit_relyingparty_verify_phone_number_request)



Verifies ownership of a phone number and creates/updates the user account accordingly.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.identitytoolkit_relyingparty_verify_phone_number_request import IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest
from openapi_client.models.identitytoolkit_relyingparty_verify_phone_number_response import IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/identitytoolkit/v3/relyingparty
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
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
    api_instance = openapi_client.RelyingpartyApi(api_client)
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    identitytoolkit_relyingparty_verify_phone_number_request = openapi_client.IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest() # IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest |  (optional)

    try:
        api_response = api_instance.identitytoolkit_relyingparty_verify_phone_number(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, identitytoolkit_relyingparty_verify_phone_number_request=identitytoolkit_relyingparty_verify_phone_number_request)
        print("The response of RelyingpartyApi->identitytoolkit_relyingparty_verify_phone_number:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RelyingpartyApi->identitytoolkit_relyingparty_verify_phone_number: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **identitytoolkit_relyingparty_verify_phone_number_request** | [**IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest**](IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest.md)|  | [optional] 

### Return type

[**IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse**](IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse.md)

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

