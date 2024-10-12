# openapi_client.ProjectsApi

All URIs are relative to *https://firebaseappcheck.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**firebaseappcheck_projects_apps_app_attest_config_batch_get**](ProjectsApi.md#firebaseappcheck_projects_apps_app_attest_config_batch_get) | **GET** /v1/{parent}/apps/-/appAttestConfig:batchGet | 
[**firebaseappcheck_projects_apps_debug_tokens_create**](ProjectsApi.md#firebaseappcheck_projects_apps_debug_tokens_create) | **POST** /v1/{parent}/debugTokens | 
[**firebaseappcheck_projects_apps_debug_tokens_delete**](ProjectsApi.md#firebaseappcheck_projects_apps_debug_tokens_delete) | **DELETE** /v1/{name} | 
[**firebaseappcheck_projects_apps_debug_tokens_list**](ProjectsApi.md#firebaseappcheck_projects_apps_debug_tokens_list) | **GET** /v1/{parent}/debugTokens | 
[**firebaseappcheck_projects_apps_device_check_config_batch_get**](ProjectsApi.md#firebaseappcheck_projects_apps_device_check_config_batch_get) | **GET** /v1/{parent}/apps/-/deviceCheckConfig:batchGet | 
[**firebaseappcheck_projects_apps_exchange_app_attest_assertion**](ProjectsApi.md#firebaseappcheck_projects_apps_exchange_app_attest_assertion) | **POST** /v1/{app}:exchangeAppAttestAssertion | 
[**firebaseappcheck_projects_apps_exchange_app_attest_attestation**](ProjectsApi.md#firebaseappcheck_projects_apps_exchange_app_attest_attestation) | **POST** /v1/{app}:exchangeAppAttestAttestation | 
[**firebaseappcheck_projects_apps_exchange_custom_token**](ProjectsApi.md#firebaseappcheck_projects_apps_exchange_custom_token) | **POST** /v1/{app}:exchangeCustomToken | 
[**firebaseappcheck_projects_apps_exchange_debug_token**](ProjectsApi.md#firebaseappcheck_projects_apps_exchange_debug_token) | **POST** /v1/{app}:exchangeDebugToken | 
[**firebaseappcheck_projects_apps_exchange_device_check_token**](ProjectsApi.md#firebaseappcheck_projects_apps_exchange_device_check_token) | **POST** /v1/{app}:exchangeDeviceCheckToken | 
[**firebaseappcheck_projects_apps_exchange_play_integrity_token**](ProjectsApi.md#firebaseappcheck_projects_apps_exchange_play_integrity_token) | **POST** /v1/{app}:exchangePlayIntegrityToken | 
[**firebaseappcheck_projects_apps_exchange_recaptcha_enterprise_token**](ProjectsApi.md#firebaseappcheck_projects_apps_exchange_recaptcha_enterprise_token) | **POST** /v1/{app}:exchangeRecaptchaEnterpriseToken | 
[**firebaseappcheck_projects_apps_exchange_recaptcha_v3_token**](ProjectsApi.md#firebaseappcheck_projects_apps_exchange_recaptcha_v3_token) | **POST** /v1/{app}:exchangeRecaptchaV3Token | 
[**firebaseappcheck_projects_apps_exchange_safety_net_token**](ProjectsApi.md#firebaseappcheck_projects_apps_exchange_safety_net_token) | **POST** /v1/{app}:exchangeSafetyNetToken | 
[**firebaseappcheck_projects_apps_generate_app_attest_challenge**](ProjectsApi.md#firebaseappcheck_projects_apps_generate_app_attest_challenge) | **POST** /v1/{app}:generateAppAttestChallenge | 
[**firebaseappcheck_projects_apps_generate_play_integrity_challenge**](ProjectsApi.md#firebaseappcheck_projects_apps_generate_play_integrity_challenge) | **POST** /v1/{app}:generatePlayIntegrityChallenge | 
[**firebaseappcheck_projects_apps_play_integrity_config_batch_get**](ProjectsApi.md#firebaseappcheck_projects_apps_play_integrity_config_batch_get) | **GET** /v1/{parent}/apps/-/playIntegrityConfig:batchGet | 
[**firebaseappcheck_projects_apps_recaptcha_enterprise_config_batch_get**](ProjectsApi.md#firebaseappcheck_projects_apps_recaptcha_enterprise_config_batch_get) | **GET** /v1/{parent}/apps/-/recaptchaEnterpriseConfig:batchGet | 
[**firebaseappcheck_projects_apps_recaptcha_v3_config_batch_get**](ProjectsApi.md#firebaseappcheck_projects_apps_recaptcha_v3_config_batch_get) | **GET** /v1/{parent}/apps/-/recaptchaV3Config:batchGet | 
[**firebaseappcheck_projects_apps_safety_net_config_batch_get**](ProjectsApi.md#firebaseappcheck_projects_apps_safety_net_config_batch_get) | **GET** /v1/{parent}/apps/-/safetyNetConfig:batchGet | 
[**firebaseappcheck_projects_services_batch_update**](ProjectsApi.md#firebaseappcheck_projects_services_batch_update) | **POST** /v1/{parent}/services:batchUpdate | 
[**firebaseappcheck_projects_services_get**](ProjectsApi.md#firebaseappcheck_projects_services_get) | **GET** /v1/{name} | 
[**firebaseappcheck_projects_services_list**](ProjectsApi.md#firebaseappcheck_projects_services_list) | **GET** /v1/{parent}/services | 
[**firebaseappcheck_projects_services_patch**](ProjectsApi.md#firebaseappcheck_projects_services_patch) | **PATCH** /v1/{name} | 


# **firebaseappcheck_projects_apps_app_attest_config_batch_get**
> GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse firebaseappcheck_projects_apps_app_attest_config_batch_get(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, names=names)



Atomically gets the AppAttestConfigs for the specified list of apps.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1_batch_get_app_attest_configs_response import GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappcheck.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappcheck.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. The parent project name shared by all AppAttestConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
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
    names = ['names_example'] # List[str] | Required. The relative resource names of the AppAttestConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/appAttestConfig ``` A maximum of 100 objects can be retrieved in a batch. (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_app_attest_config_batch_get(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, names=names)
        print("The response of ProjectsApi->firebaseappcheck_projects_apps_app_attest_config_batch_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_apps_app_attest_config_batch_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent project name shared by all AppAttestConfigs being retrieved, in the format &#x60;&#x60;&#x60; projects/{project_number} &#x60;&#x60;&#x60; The parent collection in the &#x60;name&#x60; field of any resource being retrieved must match this field, or the entire batch fails. | 
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
 **names** | [**List[str]**](str.md)| Required. The relative resource names of the AppAttestConfigs to retrieve, in the format &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id}/appAttestConfig &#x60;&#x60;&#x60; A maximum of 100 objects can be retrieved in a batch. | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse**](GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse.md)

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

# **firebaseappcheck_projects_apps_debug_tokens_create**
> GoogleFirebaseAppcheckV1DebugToken firebaseappcheck_projects_apps_debug_tokens_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1_debug_token=google_firebase_appcheck_v1_debug_token)



Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1_debug_token import GoogleFirebaseAppcheckV1DebugToken
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappcheck.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappcheck.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. The relative resource name of the parent app in which the specified DebugToken will be created, in the format: ``` projects/{project_number}/apps/{app_id} ```
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
    google_firebase_appcheck_v1_debug_token = openapi_client.GoogleFirebaseAppcheckV1DebugToken() # GoogleFirebaseAppcheckV1DebugToken |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_debug_tokens_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1_debug_token=google_firebase_appcheck_v1_debug_token)
        print("The response of ProjectsApi->firebaseappcheck_projects_apps_debug_tokens_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_apps_debug_tokens_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The relative resource name of the parent app in which the specified DebugToken will be created, in the format: &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id} &#x60;&#x60;&#x60; | 
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
 **google_firebase_appcheck_v1_debug_token** | [**GoogleFirebaseAppcheckV1DebugToken**](GoogleFirebaseAppcheckV1DebugToken.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1DebugToken**](GoogleFirebaseAppcheckV1DebugToken.md)

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

# **firebaseappcheck_projects_apps_debug_tokens_delete**
> object firebaseappcheck_projects_apps_debug_tokens_delete(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Deletes the specified DebugToken. A deleted debug token cannot be used to exchange for an App Check token. Use this method when you suspect the secret `token` has been compromised or when you no longer need the debug token.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappcheck.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappcheck.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    name = 'name_example' # str | Required. The relative resource name of the DebugToken to delete, in the format: ``` projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} ```
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

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_debug_tokens_delete(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of ProjectsApi->firebaseappcheck_projects_apps_debug_tokens_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_apps_debug_tokens_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The relative resource name of the DebugToken to delete, in the format: &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} &#x60;&#x60;&#x60; | 
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

### Return type

**object**

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

# **firebaseappcheck_projects_apps_debug_tokens_list**
> GoogleFirebaseAppcheckV1ListDebugTokensResponse firebaseappcheck_projects_apps_debug_tokens_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1_list_debug_tokens_response import GoogleFirebaseAppcheckV1ListDebugTokensResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappcheck.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappcheck.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. The relative resource name of the parent app for which to list each associated DebugToken, in the format: ``` projects/{project_number}/apps/{app_id} ```
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
    page_size = 56 # int | The maximum number of DebugTokens to return in the response. Note that an app can have at most 20 debug tokens. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. (optional)
    page_token = 'page_token_example' # str | Token returned from a previous call to ListDebugTokens indicating where in the set of DebugTokens to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDebugTokens must match the call that provided the page token; if they do not match, the result is undefined. (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_debug_tokens_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->firebaseappcheck_projects_apps_debug_tokens_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_apps_debug_tokens_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The relative resource name of the parent app for which to list each associated DebugToken, in the format: &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id} &#x60;&#x60;&#x60; | 
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
 **page_size** | **int**| The maximum number of DebugTokens to return in the response. Note that an app can have at most 20 debug tokens. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. | [optional] 
 **page_token** | **str**| Token returned from a previous call to ListDebugTokens indicating where in the set of DebugTokens to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDebugTokens must match the call that provided the page token; if they do not match, the result is undefined. | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1ListDebugTokensResponse**](GoogleFirebaseAppcheckV1ListDebugTokensResponse.md)

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

# **firebaseappcheck_projects_apps_device_check_config_batch_get**
> GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse firebaseappcheck_projects_apps_device_check_config_batch_get(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, names=names)



Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1_batch_get_device_check_configs_response import GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappcheck.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappcheck.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. The parent project name shared by all DeviceCheckConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
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
    names = ['names_example'] # List[str] | Required. The relative resource names of the DeviceCheckConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/deviceCheckConfig ``` A maximum of 100 objects can be retrieved in a batch. (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_device_check_config_batch_get(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, names=names)
        print("The response of ProjectsApi->firebaseappcheck_projects_apps_device_check_config_batch_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_apps_device_check_config_batch_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent project name shared by all DeviceCheckConfigs being retrieved, in the format &#x60;&#x60;&#x60; projects/{project_number} &#x60;&#x60;&#x60; The parent collection in the &#x60;name&#x60; field of any resource being retrieved must match this field, or the entire batch fails. | 
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
 **names** | [**List[str]**](str.md)| Required. The relative resource names of the DeviceCheckConfigs to retrieve, in the format &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id}/deviceCheckConfig &#x60;&#x60;&#x60; A maximum of 100 objects can be retrieved in a batch. | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse**](GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse.md)

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

# **firebaseappcheck_projects_apps_exchange_app_attest_assertion**
> GoogleFirebaseAppcheckV1AppCheckToken firebaseappcheck_projects_apps_exchange_app_attest_assertion(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1_exchange_app_attest_assertion_request=google_firebase_appcheck_v1_exchange_app_attest_assertion_request)



Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1_app_check_token import GoogleFirebaseAppcheckV1AppCheckToken
from openapi_client.models.google_firebase_appcheck_v1_exchange_app_attest_assertion_request import GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappcheck.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappcheck.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    app = 'app_example' # str | Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
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
    google_firebase_appcheck_v1_exchange_app_attest_assertion_request = openapi_client.GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest() # GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_exchange_app_attest_assertion(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1_exchange_app_attest_assertion_request=google_firebase_appcheck_v1_exchange_app_attest_assertion_request)
        print("The response of ProjectsApi->firebaseappcheck_projects_apps_exchange_app_attest_assertion:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_apps_exchange_app_attest_assertion: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **str**| Required. The relative resource name of the iOS app, in the format: &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id} &#x60;&#x60;&#x60; If necessary, the &#x60;project_number&#x60; element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google&#39;s [AIP 2510](https://google.aip.dev/cloud/2510) standard. | 
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
 **google_firebase_appcheck_v1_exchange_app_attest_assertion_request** | [**GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest**](GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1AppCheckToken**](GoogleFirebaseAppcheckV1AppCheckToken.md)

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

# **firebaseappcheck_projects_apps_exchange_app_attest_attestation**
> GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse firebaseappcheck_projects_apps_exchange_app_attest_attestation(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1_exchange_app_attest_attestation_request=google_firebase_appcheck_v1_exchange_app_attest_attestation_request)



Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1_exchange_app_attest_attestation_request import GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest
from openapi_client.models.google_firebase_appcheck_v1_exchange_app_attest_attestation_response import GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappcheck.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappcheck.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    app = 'app_example' # str | Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
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
    google_firebase_appcheck_v1_exchange_app_attest_attestation_request = openapi_client.GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest() # GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_exchange_app_attest_attestation(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1_exchange_app_attest_attestation_request=google_firebase_appcheck_v1_exchange_app_attest_attestation_request)
        print("The response of ProjectsApi->firebaseappcheck_projects_apps_exchange_app_attest_attestation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_apps_exchange_app_attest_attestation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **str**| Required. The relative resource name of the iOS app, in the format: &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id} &#x60;&#x60;&#x60; If necessary, the &#x60;project_number&#x60; element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google&#39;s [AIP 2510](https://google.aip.dev/cloud/2510) standard. | 
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
 **google_firebase_appcheck_v1_exchange_app_attest_attestation_request** | [**GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest**](GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse**](GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse.md)

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

# **firebaseappcheck_projects_apps_exchange_custom_token**
> GoogleFirebaseAppcheckV1AppCheckToken firebaseappcheck_projects_apps_exchange_custom_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1_exchange_custom_token_request=google_firebase_appcheck_v1_exchange_custom_token_request)



Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1_app_check_token import GoogleFirebaseAppcheckV1AppCheckToken
from openapi_client.models.google_firebase_appcheck_v1_exchange_custom_token_request import GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappcheck.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappcheck.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    app = 'app_example' # str | Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
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
    google_firebase_appcheck_v1_exchange_custom_token_request = openapi_client.GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest() # GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_exchange_custom_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1_exchange_custom_token_request=google_firebase_appcheck_v1_exchange_custom_token_request)
        print("The response of ProjectsApi->firebaseappcheck_projects_apps_exchange_custom_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_apps_exchange_custom_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **str**| Required. The relative resource name of the app, in the format: &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id} &#x60;&#x60;&#x60; If necessary, the &#x60;project_number&#x60; element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google&#39;s [AIP 2510](https://google.aip.dev/cloud/2510) standard. | 
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
 **google_firebase_appcheck_v1_exchange_custom_token_request** | [**GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest**](GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1AppCheckToken**](GoogleFirebaseAppcheckV1AppCheckToken.md)

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

# **firebaseappcheck_projects_apps_exchange_debug_token**
> GoogleFirebaseAppcheckV1AppCheckToken firebaseappcheck_projects_apps_exchange_debug_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1_exchange_debug_token_request=google_firebase_appcheck_v1_exchange_debug_token_request)



Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1_app_check_token import GoogleFirebaseAppcheckV1AppCheckToken
from openapi_client.models.google_firebase_appcheck_v1_exchange_debug_token_request import GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappcheck.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappcheck.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    app = 'app_example' # str | Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
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
    google_firebase_appcheck_v1_exchange_debug_token_request = openapi_client.GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest() # GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_exchange_debug_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1_exchange_debug_token_request=google_firebase_appcheck_v1_exchange_debug_token_request)
        print("The response of ProjectsApi->firebaseappcheck_projects_apps_exchange_debug_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_apps_exchange_debug_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **str**| Required. The relative resource name of the app, in the format: &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id} &#x60;&#x60;&#x60; If necessary, the &#x60;project_number&#x60; element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google&#39;s [AIP 2510](https://google.aip.dev/cloud/2510) standard. | 
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
 **google_firebase_appcheck_v1_exchange_debug_token_request** | [**GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest**](GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1AppCheckToken**](GoogleFirebaseAppcheckV1AppCheckToken.md)

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

# **firebaseappcheck_projects_apps_exchange_device_check_token**
> GoogleFirebaseAppcheckV1AppCheckToken firebaseappcheck_projects_apps_exchange_device_check_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1_exchange_device_check_token_request=google_firebase_appcheck_v1_exchange_device_check_token_request)



Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1_app_check_token import GoogleFirebaseAppcheckV1AppCheckToken
from openapi_client.models.google_firebase_appcheck_v1_exchange_device_check_token_request import GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappcheck.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappcheck.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    app = 'app_example' # str | Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
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
    google_firebase_appcheck_v1_exchange_device_check_token_request = openapi_client.GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest() # GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_exchange_device_check_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1_exchange_device_check_token_request=google_firebase_appcheck_v1_exchange_device_check_token_request)
        print("The response of ProjectsApi->firebaseappcheck_projects_apps_exchange_device_check_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_apps_exchange_device_check_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **str**| Required. The relative resource name of the iOS app, in the format: &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id} &#x60;&#x60;&#x60; If necessary, the &#x60;project_number&#x60; element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google&#39;s [AIP 2510](https://google.aip.dev/cloud/2510) standard. | 
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
 **google_firebase_appcheck_v1_exchange_device_check_token_request** | [**GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest**](GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1AppCheckToken**](GoogleFirebaseAppcheckV1AppCheckToken.md)

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

# **firebaseappcheck_projects_apps_exchange_play_integrity_token**
> GoogleFirebaseAppcheckV1AppCheckToken firebaseappcheck_projects_apps_exchange_play_integrity_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1_exchange_play_integrity_token_request=google_firebase_appcheck_v1_exchange_play_integrity_token_request)



Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1_app_check_token import GoogleFirebaseAppcheckV1AppCheckToken
from openapi_client.models.google_firebase_appcheck_v1_exchange_play_integrity_token_request import GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappcheck.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappcheck.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    app = 'app_example' # str | Required. The relative resource name of the Android app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
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
    google_firebase_appcheck_v1_exchange_play_integrity_token_request = openapi_client.GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest() # GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_exchange_play_integrity_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1_exchange_play_integrity_token_request=google_firebase_appcheck_v1_exchange_play_integrity_token_request)
        print("The response of ProjectsApi->firebaseappcheck_projects_apps_exchange_play_integrity_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_apps_exchange_play_integrity_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **str**| Required. The relative resource name of the Android app, in the format: &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id} &#x60;&#x60;&#x60; If necessary, the &#x60;project_number&#x60; element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google&#39;s [AIP 2510](https://google.aip.dev/cloud/2510) standard. | 
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
 **google_firebase_appcheck_v1_exchange_play_integrity_token_request** | [**GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest**](GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1AppCheckToken**](GoogleFirebaseAppcheckV1AppCheckToken.md)

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

# **firebaseappcheck_projects_apps_exchange_recaptcha_enterprise_token**
> GoogleFirebaseAppcheckV1AppCheckToken firebaseappcheck_projects_apps_exchange_recaptcha_enterprise_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1_exchange_recaptcha_enterprise_token_request=google_firebase_appcheck_v1_exchange_recaptcha_enterprise_token_request)



Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an AppCheckToken.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1_app_check_token import GoogleFirebaseAppcheckV1AppCheckToken
from openapi_client.models.google_firebase_appcheck_v1_exchange_recaptcha_enterprise_token_request import GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappcheck.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappcheck.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    app = 'app_example' # str | Required. The relative resource name of the web app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
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
    google_firebase_appcheck_v1_exchange_recaptcha_enterprise_token_request = openapi_client.GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest() # GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_exchange_recaptcha_enterprise_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1_exchange_recaptcha_enterprise_token_request=google_firebase_appcheck_v1_exchange_recaptcha_enterprise_token_request)
        print("The response of ProjectsApi->firebaseappcheck_projects_apps_exchange_recaptcha_enterprise_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_apps_exchange_recaptcha_enterprise_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **str**| Required. The relative resource name of the web app, in the format: &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id} &#x60;&#x60;&#x60; If necessary, the &#x60;project_number&#x60; element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google&#39;s [AIP 2510](https://google.aip.dev/cloud/2510) standard. | 
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
 **google_firebase_appcheck_v1_exchange_recaptcha_enterprise_token_request** | [**GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest**](GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1AppCheckToken**](GoogleFirebaseAppcheckV1AppCheckToken.md)

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

# **firebaseappcheck_projects_apps_exchange_recaptcha_v3_token**
> GoogleFirebaseAppcheckV1AppCheckToken firebaseappcheck_projects_apps_exchange_recaptcha_v3_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1_exchange_recaptcha_v3_token_request=google_firebase_appcheck_v1_exchange_recaptcha_v3_token_request)



Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1_app_check_token import GoogleFirebaseAppcheckV1AppCheckToken
from openapi_client.models.google_firebase_appcheck_v1_exchange_recaptcha_v3_token_request import GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappcheck.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappcheck.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    app = 'app_example' # str | Required. The relative resource name of the web app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
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
    google_firebase_appcheck_v1_exchange_recaptcha_v3_token_request = openapi_client.GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest() # GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_exchange_recaptcha_v3_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1_exchange_recaptcha_v3_token_request=google_firebase_appcheck_v1_exchange_recaptcha_v3_token_request)
        print("The response of ProjectsApi->firebaseappcheck_projects_apps_exchange_recaptcha_v3_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_apps_exchange_recaptcha_v3_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **str**| Required. The relative resource name of the web app, in the format: &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id} &#x60;&#x60;&#x60; If necessary, the &#x60;project_number&#x60; element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google&#39;s [AIP 2510](https://google.aip.dev/cloud/2510) standard. | 
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
 **google_firebase_appcheck_v1_exchange_recaptcha_v3_token_request** | [**GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest**](GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1AppCheckToken**](GoogleFirebaseAppcheckV1AppCheckToken.md)

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

# **firebaseappcheck_projects_apps_exchange_safety_net_token**
> GoogleFirebaseAppcheckV1AppCheckToken firebaseappcheck_projects_apps_exchange_safety_net_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1_exchange_safety_net_token_request=google_firebase_appcheck_v1_exchange_safety_net_token_request)



Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1_app_check_token import GoogleFirebaseAppcheckV1AppCheckToken
from openapi_client.models.google_firebase_appcheck_v1_exchange_safety_net_token_request import GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappcheck.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappcheck.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    app = 'app_example' # str | Required. The relative resource name of the Android app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
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
    google_firebase_appcheck_v1_exchange_safety_net_token_request = openapi_client.GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest() # GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_exchange_safety_net_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1_exchange_safety_net_token_request=google_firebase_appcheck_v1_exchange_safety_net_token_request)
        print("The response of ProjectsApi->firebaseappcheck_projects_apps_exchange_safety_net_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_apps_exchange_safety_net_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **str**| Required. The relative resource name of the Android app, in the format: &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id} &#x60;&#x60;&#x60; If necessary, the &#x60;project_number&#x60; element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google&#39;s [AIP 2510](https://google.aip.dev/cloud/2510) standard. | 
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
 **google_firebase_appcheck_v1_exchange_safety_net_token_request** | [**GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest**](GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1AppCheckToken**](GoogleFirebaseAppcheckV1AppCheckToken.md)

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

# **firebaseappcheck_projects_apps_generate_app_attest_challenge**
> GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse firebaseappcheck_projects_apps_generate_app_attest_challenge(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, body=body)



Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1_generate_app_attest_challenge_response import GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappcheck.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappcheck.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    app = 'app_example' # str | Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
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
    body = None # object |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_generate_app_attest_challenge(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, body=body)
        print("The response of ProjectsApi->firebaseappcheck_projects_apps_generate_app_attest_challenge:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_apps_generate_app_attest_challenge: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **str**| Required. The relative resource name of the iOS app, in the format: &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id} &#x60;&#x60;&#x60; If necessary, the &#x60;project_number&#x60; element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google&#39;s [AIP 2510](https://google.aip.dev/cloud/2510) standard. | 
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
 **body** | **object**|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse**](GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse.md)

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

# **firebaseappcheck_projects_apps_generate_play_integrity_challenge**
> GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse firebaseappcheck_projects_apps_generate_play_integrity_challenge(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, body=body)



Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1_generate_play_integrity_challenge_response import GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappcheck.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappcheck.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    app = 'app_example' # str | Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
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
    body = None # object |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_generate_play_integrity_challenge(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, body=body)
        print("The response of ProjectsApi->firebaseappcheck_projects_apps_generate_play_integrity_challenge:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_apps_generate_play_integrity_challenge: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **str**| Required. The relative resource name of the app, in the format: &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id} &#x60;&#x60;&#x60; If necessary, the &#x60;project_number&#x60; element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google&#39;s [AIP 2510](https://google.aip.dev/cloud/2510) standard. | 
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
 **body** | **object**|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse**](GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse.md)

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

# **firebaseappcheck_projects_apps_play_integrity_config_batch_get**
> GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse firebaseappcheck_projects_apps_play_integrity_config_batch_get(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, names=names)



Atomically gets the PlayIntegrityConfigs for the specified list of apps.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1_batch_get_play_integrity_configs_response import GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappcheck.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappcheck.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. The parent project name shared by all PlayIntegrityConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
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
    names = ['names_example'] # List[str] | Required. The relative resource names of the PlayIntegrityConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/playIntegrityConfig ``` A maximum of 100 objects can be retrieved in a batch. (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_play_integrity_config_batch_get(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, names=names)
        print("The response of ProjectsApi->firebaseappcheck_projects_apps_play_integrity_config_batch_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_apps_play_integrity_config_batch_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent project name shared by all PlayIntegrityConfigs being retrieved, in the format &#x60;&#x60;&#x60; projects/{project_number} &#x60;&#x60;&#x60; The parent collection in the &#x60;name&#x60; field of any resource being retrieved must match this field, or the entire batch fails. | 
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
 **names** | [**List[str]**](str.md)| Required. The relative resource names of the PlayIntegrityConfigs to retrieve, in the format &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id}/playIntegrityConfig &#x60;&#x60;&#x60; A maximum of 100 objects can be retrieved in a batch. | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse**](GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse.md)

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

# **firebaseappcheck_projects_apps_recaptcha_enterprise_config_batch_get**
> GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse firebaseappcheck_projects_apps_recaptcha_enterprise_config_batch_get(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, names=names)



Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1_batch_get_recaptcha_enterprise_configs_response import GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappcheck.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappcheck.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. The parent project name shared by all RecaptchaEnterpriseConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
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
    names = ['names_example'] # List[str] | Required. The relative resource names of the RecaptchaEnterpriseConfigs to retrieve, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig ``` A maximum of 100 objects can be retrieved in a batch. (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_recaptcha_enterprise_config_batch_get(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, names=names)
        print("The response of ProjectsApi->firebaseappcheck_projects_apps_recaptcha_enterprise_config_batch_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_apps_recaptcha_enterprise_config_batch_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent project name shared by all RecaptchaEnterpriseConfigs being retrieved, in the format &#x60;&#x60;&#x60; projects/{project_number} &#x60;&#x60;&#x60; The parent collection in the &#x60;name&#x60; field of any resource being retrieved must match this field, or the entire batch fails. | 
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
 **names** | [**List[str]**](str.md)| Required. The relative resource names of the RecaptchaEnterpriseConfigs to retrieve, in the format: &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig &#x60;&#x60;&#x60; A maximum of 100 objects can be retrieved in a batch. | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse**](GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse.md)

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

# **firebaseappcheck_projects_apps_recaptcha_v3_config_batch_get**
> GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse firebaseappcheck_projects_apps_recaptcha_v3_config_batch_get(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, names=names)



Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1_batch_get_recaptcha_v3_configs_response import GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappcheck.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappcheck.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. The parent project name shared by all RecaptchaV3Configs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
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
    names = ['names_example'] # List[str] | Required. The relative resource names of the RecaptchaV3Configs to retrieve, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaV3Config ``` A maximum of 100 objects can be retrieved in a batch. (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_recaptcha_v3_config_batch_get(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, names=names)
        print("The response of ProjectsApi->firebaseappcheck_projects_apps_recaptcha_v3_config_batch_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_apps_recaptcha_v3_config_batch_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent project name shared by all RecaptchaV3Configs being retrieved, in the format &#x60;&#x60;&#x60; projects/{project_number} &#x60;&#x60;&#x60; The parent collection in the &#x60;name&#x60; field of any resource being retrieved must match this field, or the entire batch fails. | 
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
 **names** | [**List[str]**](str.md)| Required. The relative resource names of the RecaptchaV3Configs to retrieve, in the format: &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id}/recaptchaV3Config &#x60;&#x60;&#x60; A maximum of 100 objects can be retrieved in a batch. | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse**](GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse.md)

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

# **firebaseappcheck_projects_apps_safety_net_config_batch_get**
> GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse firebaseappcheck_projects_apps_safety_net_config_batch_get(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, names=names)



Atomically gets the SafetyNetConfigs for the specified list of apps.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1_batch_get_safety_net_configs_response import GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappcheck.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappcheck.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. The parent project name shared by all SafetyNetConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
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
    names = ['names_example'] # List[str] | Required. The relative resource names of the SafetyNetConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/safetyNetConfig ``` A maximum of 100 objects can be retrieved in a batch. (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_safety_net_config_batch_get(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, names=names)
        print("The response of ProjectsApi->firebaseappcheck_projects_apps_safety_net_config_batch_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_apps_safety_net_config_batch_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent project name shared by all SafetyNetConfigs being retrieved, in the format &#x60;&#x60;&#x60; projects/{project_number} &#x60;&#x60;&#x60; The parent collection in the &#x60;name&#x60; field of any resource being retrieved must match this field, or the entire batch fails. | 
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
 **names** | [**List[str]**](str.md)| Required. The relative resource names of the SafetyNetConfigs to retrieve, in the format &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id}/safetyNetConfig &#x60;&#x60;&#x60; A maximum of 100 objects can be retrieved in a batch. | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse**](GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse.md)

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

# **firebaseappcheck_projects_services_batch_update**
> GoogleFirebaseAppcheckV1BatchUpdateServicesResponse firebaseappcheck_projects_services_batch_update(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1_batch_update_services_request=google_firebase_appcheck_v1_batch_update_services_request)



Atomically updates the specified Service configurations.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1_batch_update_services_request import GoogleFirebaseAppcheckV1BatchUpdateServicesRequest
from openapi_client.models.google_firebase_appcheck_v1_batch_update_services_response import GoogleFirebaseAppcheckV1BatchUpdateServicesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappcheck.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappcheck.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. The parent project name shared by all Service configurations being updated, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being updated must match this field, or the entire batch fails.
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
    google_firebase_appcheck_v1_batch_update_services_request = openapi_client.GoogleFirebaseAppcheckV1BatchUpdateServicesRequest() # GoogleFirebaseAppcheckV1BatchUpdateServicesRequest |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_services_batch_update(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1_batch_update_services_request=google_firebase_appcheck_v1_batch_update_services_request)
        print("The response of ProjectsApi->firebaseappcheck_projects_services_batch_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_services_batch_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent project name shared by all Service configurations being updated, in the format &#x60;&#x60;&#x60; projects/{project_number} &#x60;&#x60;&#x60; The parent collection in the &#x60;name&#x60; field of any resource being updated must match this field, or the entire batch fails. | 
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
 **google_firebase_appcheck_v1_batch_update_services_request** | [**GoogleFirebaseAppcheckV1BatchUpdateServicesRequest**](GoogleFirebaseAppcheckV1BatchUpdateServicesRequest.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1BatchUpdateServicesResponse**](GoogleFirebaseAppcheckV1BatchUpdateServicesResponse.md)

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

# **firebaseappcheck_projects_services_get**
> GoogleFirebaseAppcheckV1Service firebaseappcheck_projects_services_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Gets the Service configuration for the specified service name.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1_service import GoogleFirebaseAppcheckV1Service
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappcheck.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappcheck.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    name = 'name_example' # str | Required. The relative resource name of the Service to retrieve, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore)
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

    try:
        api_response = api_instance.firebaseappcheck_projects_services_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of ProjectsApi->firebaseappcheck_projects_services_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_services_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The relative resource name of the Service to retrieve, in the format: &#x60;&#x60;&#x60; projects/{project_number}/services/{service_id} &#x60;&#x60;&#x60; Note that the &#x60;service_id&#x60; element must be a supported service ID. Currently, the following service IDs are supported: * &#x60;firebasestorage.googleapis.com&#x60; (Cloud Storage for Firebase) * &#x60;firebasedatabase.googleapis.com&#x60; (Firebase Realtime Database) * &#x60;firestore.googleapis.com&#x60; (Cloud Firestore) | 
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

### Return type

[**GoogleFirebaseAppcheckV1Service**](GoogleFirebaseAppcheckV1Service.md)

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

# **firebaseappcheck_projects_services_list**
> GoogleFirebaseAppcheckV1ListServicesResponse firebaseappcheck_projects_services_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1_list_services_response import GoogleFirebaseAppcheckV1ListServicesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappcheck.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappcheck.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    parent = 'parent_example' # str | Required. The relative resource name of the parent project for which to list each associated Service, in the format: ``` projects/{project_number} ```
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
    page_size = 56 # int | The maximum number of Services to return in the response. Only explicitly configured services are returned. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. (optional)
    page_token = 'page_token_example' # str | Token returned from a previous call to ListServices indicating where in the set of Services to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListServices must match the call that provided the page token; if they do not match, the result is undefined. (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_services_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->firebaseappcheck_projects_services_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_services_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The relative resource name of the parent project for which to list each associated Service, in the format: &#x60;&#x60;&#x60; projects/{project_number} &#x60;&#x60;&#x60; | 
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
 **page_size** | **int**| The maximum number of Services to return in the response. Only explicitly configured services are returned. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. | [optional] 
 **page_token** | **str**| Token returned from a previous call to ListServices indicating where in the set of Services to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListServices must match the call that provided the page token; if they do not match, the result is undefined. | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1ListServicesResponse**](GoogleFirebaseAppcheckV1ListServicesResponse.md)

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

# **firebaseappcheck_projects_services_patch**
> GoogleFirebaseAppcheckV1Service firebaseappcheck_projects_services_patch(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, google_firebase_appcheck_v1_service=google_firebase_appcheck_v1_service)



Updates the specified Service configuration.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1_service import GoogleFirebaseAppcheckV1Service
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://firebaseappcheck.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://firebaseappcheck.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    name = 'name_example' # str | Required. The relative resource name of the service configuration object, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore)
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
    update_mask = 'update_mask_example' # str | Required. A comma-separated list of names of fields in the Service to update. Example: `enforcement_mode`. (optional)
    google_firebase_appcheck_v1_service = openapi_client.GoogleFirebaseAppcheckV1Service() # GoogleFirebaseAppcheckV1Service |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_services_patch(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, google_firebase_appcheck_v1_service=google_firebase_appcheck_v1_service)
        print("The response of ProjectsApi->firebaseappcheck_projects_services_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_services_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The relative resource name of the service configuration object, in the format: &#x60;&#x60;&#x60; projects/{project_number}/services/{service_id} &#x60;&#x60;&#x60; Note that the &#x60;service_id&#x60; element must be a supported service ID. Currently, the following service IDs are supported: * &#x60;firebasestorage.googleapis.com&#x60; (Cloud Storage for Firebase) * &#x60;firebasedatabase.googleapis.com&#x60; (Firebase Realtime Database) * &#x60;firestore.googleapis.com&#x60; (Cloud Firestore) | 
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
 **update_mask** | **str**| Required. A comma-separated list of names of fields in the Service to update. Example: &#x60;enforcement_mode&#x60;. | [optional] 
 **google_firebase_appcheck_v1_service** | [**GoogleFirebaseAppcheckV1Service**](GoogleFirebaseAppcheckV1Service.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1Service**](GoogleFirebaseAppcheckV1Service.md)

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

