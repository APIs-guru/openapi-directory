# openapi_client.ProjectsApi

All URIs are relative to *https://firebaseappcheck.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**firebaseappcheck_projects_apps_app_attest_config_batch_get**](ProjectsApi.md#firebaseappcheck_projects_apps_app_attest_config_batch_get) | **GET** /v1beta/{parent}/apps/-/appAttestConfig:batchGet | 
[**firebaseappcheck_projects_apps_debug_tokens_create**](ProjectsApi.md#firebaseappcheck_projects_apps_debug_tokens_create) | **POST** /v1beta/{parent}/debugTokens | 
[**firebaseappcheck_projects_apps_debug_tokens_list**](ProjectsApi.md#firebaseappcheck_projects_apps_debug_tokens_list) | **GET** /v1beta/{parent}/debugTokens | 
[**firebaseappcheck_projects_apps_device_check_config_batch_get**](ProjectsApi.md#firebaseappcheck_projects_apps_device_check_config_batch_get) | **GET** /v1beta/{parent}/apps/-/deviceCheckConfig:batchGet | 
[**firebaseappcheck_projects_apps_exchange_app_attest_assertion**](ProjectsApi.md#firebaseappcheck_projects_apps_exchange_app_attest_assertion) | **POST** /v1beta/{app}:exchangeAppAttestAssertion | 
[**firebaseappcheck_projects_apps_exchange_app_attest_attestation**](ProjectsApi.md#firebaseappcheck_projects_apps_exchange_app_attest_attestation) | **POST** /v1beta/{app}:exchangeAppAttestAttestation | 
[**firebaseappcheck_projects_apps_exchange_custom_token**](ProjectsApi.md#firebaseappcheck_projects_apps_exchange_custom_token) | **POST** /v1beta/{app}:exchangeCustomToken | 
[**firebaseappcheck_projects_apps_exchange_debug_token**](ProjectsApi.md#firebaseappcheck_projects_apps_exchange_debug_token) | **POST** /v1beta/{app}:exchangeDebugToken | 
[**firebaseappcheck_projects_apps_exchange_device_check_token**](ProjectsApi.md#firebaseappcheck_projects_apps_exchange_device_check_token) | **POST** /v1beta/{app}:exchangeDeviceCheckToken | 
[**firebaseappcheck_projects_apps_exchange_play_integrity_token**](ProjectsApi.md#firebaseappcheck_projects_apps_exchange_play_integrity_token) | **POST** /v1beta/{app}:exchangePlayIntegrityToken | 
[**firebaseappcheck_projects_apps_exchange_recaptcha_enterprise_token**](ProjectsApi.md#firebaseappcheck_projects_apps_exchange_recaptcha_enterprise_token) | **POST** /v1beta/{app}:exchangeRecaptchaEnterpriseToken | 
[**firebaseappcheck_projects_apps_exchange_recaptcha_token**](ProjectsApi.md#firebaseappcheck_projects_apps_exchange_recaptcha_token) | **POST** /v1beta/{app}:exchangeRecaptchaToken | 
[**firebaseappcheck_projects_apps_exchange_recaptcha_v3_token**](ProjectsApi.md#firebaseappcheck_projects_apps_exchange_recaptcha_v3_token) | **POST** /v1beta/{app}:exchangeRecaptchaV3Token | 
[**firebaseappcheck_projects_apps_exchange_safety_net_token**](ProjectsApi.md#firebaseappcheck_projects_apps_exchange_safety_net_token) | **POST** /v1beta/{app}:exchangeSafetyNetToken | 
[**firebaseappcheck_projects_apps_generate_app_attest_challenge**](ProjectsApi.md#firebaseappcheck_projects_apps_generate_app_attest_challenge) | **POST** /v1beta/{app}:generateAppAttestChallenge | 
[**firebaseappcheck_projects_apps_generate_play_integrity_challenge**](ProjectsApi.md#firebaseappcheck_projects_apps_generate_play_integrity_challenge) | **POST** /v1beta/{app}:generatePlayIntegrityChallenge | 
[**firebaseappcheck_projects_apps_play_integrity_config_batch_get**](ProjectsApi.md#firebaseappcheck_projects_apps_play_integrity_config_batch_get) | **GET** /v1beta/{parent}/apps/-/playIntegrityConfig:batchGet | 
[**firebaseappcheck_projects_apps_recaptcha_config_batch_get**](ProjectsApi.md#firebaseappcheck_projects_apps_recaptcha_config_batch_get) | **GET** /v1beta/{parent}/apps/-/recaptchaConfig:batchGet | 
[**firebaseappcheck_projects_apps_recaptcha_enterprise_config_batch_get**](ProjectsApi.md#firebaseappcheck_projects_apps_recaptcha_enterprise_config_batch_get) | **GET** /v1beta/{parent}/apps/-/recaptchaEnterpriseConfig:batchGet | 
[**firebaseappcheck_projects_apps_recaptcha_v3_config_batch_get**](ProjectsApi.md#firebaseappcheck_projects_apps_recaptcha_v3_config_batch_get) | **GET** /v1beta/{parent}/apps/-/recaptchaV3Config:batchGet | 
[**firebaseappcheck_projects_apps_safety_net_config_batch_get**](ProjectsApi.md#firebaseappcheck_projects_apps_safety_net_config_batch_get) | **GET** /v1beta/{parent}/apps/-/safetyNetConfig:batchGet | 
[**firebaseappcheck_projects_services_batch_update**](ProjectsApi.md#firebaseappcheck_projects_services_batch_update) | **POST** /v1beta/{parent}/services:batchUpdate | 
[**firebaseappcheck_projects_services_list**](ProjectsApi.md#firebaseappcheck_projects_services_list) | **GET** /v1beta/{parent}/services | 
[**firebaseappcheck_projects_services_resource_policies_batch_update**](ProjectsApi.md#firebaseappcheck_projects_services_resource_policies_batch_update) | **POST** /v1beta/{parent}/resourcePolicies:batchUpdate | 
[**firebaseappcheck_projects_services_resource_policies_create**](ProjectsApi.md#firebaseappcheck_projects_services_resource_policies_create) | **POST** /v1beta/{parent}/resourcePolicies | 
[**firebaseappcheck_projects_services_resource_policies_delete**](ProjectsApi.md#firebaseappcheck_projects_services_resource_policies_delete) | **DELETE** /v1beta/{name} | 
[**firebaseappcheck_projects_services_resource_policies_get**](ProjectsApi.md#firebaseappcheck_projects_services_resource_policies_get) | **GET** /v1beta/{name} | 
[**firebaseappcheck_projects_services_resource_policies_list**](ProjectsApi.md#firebaseappcheck_projects_services_resource_policies_list) | **GET** /v1beta/{parent}/resourcePolicies | 
[**firebaseappcheck_projects_services_resource_policies_patch**](ProjectsApi.md#firebaseappcheck_projects_services_resource_policies_patch) | **PATCH** /v1beta/{name} | 
[**firebaseappcheck_projects_verify_app_check_token**](ProjectsApi.md#firebaseappcheck_projects_verify_app_check_token) | **POST** /v1beta/{project}:verifyAppCheckToken | 


# **firebaseappcheck_projects_apps_app_attest_config_batch_get**
> GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse firebaseappcheck_projects_apps_app_attest_config_batch_get(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, names=names)



Atomically gets the AppAttestConfigs for the specified list of apps.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_batch_get_app_attest_configs_response import GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse
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

[**GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse**](GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse.md)

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
> GoogleFirebaseAppcheckV1betaDebugToken firebaseappcheck_projects_apps_debug_tokens_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_debug_token=google_firebase_appcheck_v1beta_debug_token)



Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_debug_token import GoogleFirebaseAppcheckV1betaDebugToken
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
    google_firebase_appcheck_v1beta_debug_token = openapi_client.GoogleFirebaseAppcheckV1betaDebugToken() # GoogleFirebaseAppcheckV1betaDebugToken |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_debug_tokens_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_debug_token=google_firebase_appcheck_v1beta_debug_token)
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
 **google_firebase_appcheck_v1beta_debug_token** | [**GoogleFirebaseAppcheckV1betaDebugToken**](GoogleFirebaseAppcheckV1betaDebugToken.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1betaDebugToken**](GoogleFirebaseAppcheckV1betaDebugToken.md)

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

# **firebaseappcheck_projects_apps_debug_tokens_list**
> GoogleFirebaseAppcheckV1betaListDebugTokensResponse firebaseappcheck_projects_apps_debug_tokens_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_list_debug_tokens_response import GoogleFirebaseAppcheckV1betaListDebugTokensResponse
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

[**GoogleFirebaseAppcheckV1betaListDebugTokensResponse**](GoogleFirebaseAppcheckV1betaListDebugTokensResponse.md)

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
> GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse firebaseappcheck_projects_apps_device_check_config_batch_get(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, names=names)



Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_batch_get_device_check_configs_response import GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse
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

[**GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse**](GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse.md)

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
> GoogleFirebaseAppcheckV1betaAppCheckToken firebaseappcheck_projects_apps_exchange_app_attest_assertion(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_exchange_app_attest_assertion_request=google_firebase_appcheck_v1beta_exchange_app_attest_assertion_request)



Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_app_check_token import GoogleFirebaseAppcheckV1betaAppCheckToken
from openapi_client.models.google_firebase_appcheck_v1beta_exchange_app_attest_assertion_request import GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest
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
    google_firebase_appcheck_v1beta_exchange_app_attest_assertion_request = openapi_client.GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest() # GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_exchange_app_attest_assertion(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_exchange_app_attest_assertion_request=google_firebase_appcheck_v1beta_exchange_app_attest_assertion_request)
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
 **google_firebase_appcheck_v1beta_exchange_app_attest_assertion_request** | [**GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest**](GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1betaAppCheckToken**](GoogleFirebaseAppcheckV1betaAppCheckToken.md)

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
> GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse firebaseappcheck_projects_apps_exchange_app_attest_attestation(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_exchange_app_attest_attestation_request=google_firebase_appcheck_v1beta_exchange_app_attest_attestation_request)



Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_exchange_app_attest_attestation_request import GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest
from openapi_client.models.google_firebase_appcheck_v1beta_exchange_app_attest_attestation_response import GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse
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
    google_firebase_appcheck_v1beta_exchange_app_attest_attestation_request = openapi_client.GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest() # GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_exchange_app_attest_attestation(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_exchange_app_attest_attestation_request=google_firebase_appcheck_v1beta_exchange_app_attest_attestation_request)
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
 **google_firebase_appcheck_v1beta_exchange_app_attest_attestation_request** | [**GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest**](GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse**](GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse.md)

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
> GoogleFirebaseAppcheckV1betaAppCheckToken firebaseappcheck_projects_apps_exchange_custom_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_exchange_custom_token_request=google_firebase_appcheck_v1beta_exchange_custom_token_request)



Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_app_check_token import GoogleFirebaseAppcheckV1betaAppCheckToken
from openapi_client.models.google_firebase_appcheck_v1beta_exchange_custom_token_request import GoogleFirebaseAppcheckV1betaExchangeCustomTokenRequest
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
    google_firebase_appcheck_v1beta_exchange_custom_token_request = openapi_client.GoogleFirebaseAppcheckV1betaExchangeCustomTokenRequest() # GoogleFirebaseAppcheckV1betaExchangeCustomTokenRequest |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_exchange_custom_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_exchange_custom_token_request=google_firebase_appcheck_v1beta_exchange_custom_token_request)
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
 **google_firebase_appcheck_v1beta_exchange_custom_token_request** | [**GoogleFirebaseAppcheckV1betaExchangeCustomTokenRequest**](GoogleFirebaseAppcheckV1betaExchangeCustomTokenRequest.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1betaAppCheckToken**](GoogleFirebaseAppcheckV1betaAppCheckToken.md)

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
> GoogleFirebaseAppcheckV1betaAppCheckToken firebaseappcheck_projects_apps_exchange_debug_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_exchange_debug_token_request=google_firebase_appcheck_v1beta_exchange_debug_token_request)



Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_app_check_token import GoogleFirebaseAppcheckV1betaAppCheckToken
from openapi_client.models.google_firebase_appcheck_v1beta_exchange_debug_token_request import GoogleFirebaseAppcheckV1betaExchangeDebugTokenRequest
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
    google_firebase_appcheck_v1beta_exchange_debug_token_request = openapi_client.GoogleFirebaseAppcheckV1betaExchangeDebugTokenRequest() # GoogleFirebaseAppcheckV1betaExchangeDebugTokenRequest |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_exchange_debug_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_exchange_debug_token_request=google_firebase_appcheck_v1beta_exchange_debug_token_request)
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
 **google_firebase_appcheck_v1beta_exchange_debug_token_request** | [**GoogleFirebaseAppcheckV1betaExchangeDebugTokenRequest**](GoogleFirebaseAppcheckV1betaExchangeDebugTokenRequest.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1betaAppCheckToken**](GoogleFirebaseAppcheckV1betaAppCheckToken.md)

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
> GoogleFirebaseAppcheckV1betaAppCheckToken firebaseappcheck_projects_apps_exchange_device_check_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_exchange_device_check_token_request=google_firebase_appcheck_v1beta_exchange_device_check_token_request)



Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_app_check_token import GoogleFirebaseAppcheckV1betaAppCheckToken
from openapi_client.models.google_firebase_appcheck_v1beta_exchange_device_check_token_request import GoogleFirebaseAppcheckV1betaExchangeDeviceCheckTokenRequest
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
    google_firebase_appcheck_v1beta_exchange_device_check_token_request = openapi_client.GoogleFirebaseAppcheckV1betaExchangeDeviceCheckTokenRequest() # GoogleFirebaseAppcheckV1betaExchangeDeviceCheckTokenRequest |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_exchange_device_check_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_exchange_device_check_token_request=google_firebase_appcheck_v1beta_exchange_device_check_token_request)
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
 **google_firebase_appcheck_v1beta_exchange_device_check_token_request** | [**GoogleFirebaseAppcheckV1betaExchangeDeviceCheckTokenRequest**](GoogleFirebaseAppcheckV1betaExchangeDeviceCheckTokenRequest.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1betaAppCheckToken**](GoogleFirebaseAppcheckV1betaAppCheckToken.md)

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
> GoogleFirebaseAppcheckV1betaAppCheckToken firebaseappcheck_projects_apps_exchange_play_integrity_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_exchange_play_integrity_token_request=google_firebase_appcheck_v1beta_exchange_play_integrity_token_request)



Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_app_check_token import GoogleFirebaseAppcheckV1betaAppCheckToken
from openapi_client.models.google_firebase_appcheck_v1beta_exchange_play_integrity_token_request import GoogleFirebaseAppcheckV1betaExchangePlayIntegrityTokenRequest
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
    google_firebase_appcheck_v1beta_exchange_play_integrity_token_request = openapi_client.GoogleFirebaseAppcheckV1betaExchangePlayIntegrityTokenRequest() # GoogleFirebaseAppcheckV1betaExchangePlayIntegrityTokenRequest |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_exchange_play_integrity_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_exchange_play_integrity_token_request=google_firebase_appcheck_v1beta_exchange_play_integrity_token_request)
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
 **google_firebase_appcheck_v1beta_exchange_play_integrity_token_request** | [**GoogleFirebaseAppcheckV1betaExchangePlayIntegrityTokenRequest**](GoogleFirebaseAppcheckV1betaExchangePlayIntegrityTokenRequest.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1betaAppCheckToken**](GoogleFirebaseAppcheckV1betaAppCheckToken.md)

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
> GoogleFirebaseAppcheckV1betaAppCheckToken firebaseappcheck_projects_apps_exchange_recaptcha_enterprise_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_exchange_recaptcha_enterprise_token_request=google_firebase_appcheck_v1beta_exchange_recaptcha_enterprise_token_request)



Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an App Check token AppCheckToken.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_app_check_token import GoogleFirebaseAppcheckV1betaAppCheckToken
from openapi_client.models.google_firebase_appcheck_v1beta_exchange_recaptcha_enterprise_token_request import GoogleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequest
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
    google_firebase_appcheck_v1beta_exchange_recaptcha_enterprise_token_request = openapi_client.GoogleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequest() # GoogleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequest |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_exchange_recaptcha_enterprise_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_exchange_recaptcha_enterprise_token_request=google_firebase_appcheck_v1beta_exchange_recaptcha_enterprise_token_request)
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
 **google_firebase_appcheck_v1beta_exchange_recaptcha_enterprise_token_request** | [**GoogleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequest**](GoogleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequest.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1betaAppCheckToken**](GoogleFirebaseAppcheckV1betaAppCheckToken.md)

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

# **firebaseappcheck_projects_apps_exchange_recaptcha_token**
> GoogleFirebaseAppcheckV1betaAppCheckToken firebaseappcheck_projects_apps_exchange_recaptcha_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_exchange_recaptcha_token_request=google_firebase_appcheck_v1beta_exchange_recaptcha_token_request)



Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_app_check_token import GoogleFirebaseAppcheckV1betaAppCheckToken
from openapi_client.models.google_firebase_appcheck_v1beta_exchange_recaptcha_token_request import GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest
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
    google_firebase_appcheck_v1beta_exchange_recaptcha_token_request = openapi_client.GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest() # GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_exchange_recaptcha_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_exchange_recaptcha_token_request=google_firebase_appcheck_v1beta_exchange_recaptcha_token_request)
        print("The response of ProjectsApi->firebaseappcheck_projects_apps_exchange_recaptcha_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_apps_exchange_recaptcha_token: %s\n" % e)
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
 **google_firebase_appcheck_v1beta_exchange_recaptcha_token_request** | [**GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest**](GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1betaAppCheckToken**](GoogleFirebaseAppcheckV1betaAppCheckToken.md)

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
> GoogleFirebaseAppcheckV1betaAppCheckToken firebaseappcheck_projects_apps_exchange_recaptcha_v3_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_exchange_recaptcha_v3_token_request=google_firebase_appcheck_v1beta_exchange_recaptcha_v3_token_request)



Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_app_check_token import GoogleFirebaseAppcheckV1betaAppCheckToken
from openapi_client.models.google_firebase_appcheck_v1beta_exchange_recaptcha_v3_token_request import GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest
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
    google_firebase_appcheck_v1beta_exchange_recaptcha_v3_token_request = openapi_client.GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest() # GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_exchange_recaptcha_v3_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_exchange_recaptcha_v3_token_request=google_firebase_appcheck_v1beta_exchange_recaptcha_v3_token_request)
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
 **google_firebase_appcheck_v1beta_exchange_recaptcha_v3_token_request** | [**GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest**](GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1betaAppCheckToken**](GoogleFirebaseAppcheckV1betaAppCheckToken.md)

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
> GoogleFirebaseAppcheckV1betaAppCheckToken firebaseappcheck_projects_apps_exchange_safety_net_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_exchange_safety_net_token_request=google_firebase_appcheck_v1beta_exchange_safety_net_token_request)



Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_app_check_token import GoogleFirebaseAppcheckV1betaAppCheckToken
from openapi_client.models.google_firebase_appcheck_v1beta_exchange_safety_net_token_request import GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest
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
    google_firebase_appcheck_v1beta_exchange_safety_net_token_request = openapi_client.GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest() # GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_exchange_safety_net_token(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_exchange_safety_net_token_request=google_firebase_appcheck_v1beta_exchange_safety_net_token_request)
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
 **google_firebase_appcheck_v1beta_exchange_safety_net_token_request** | [**GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest**](GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1betaAppCheckToken**](GoogleFirebaseAppcheckV1betaAppCheckToken.md)

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
> GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse firebaseappcheck_projects_apps_generate_app_attest_challenge(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, body=body)



Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_generate_app_attest_challenge_response import GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse
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

[**GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse**](GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse.md)

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
> GoogleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeResponse firebaseappcheck_projects_apps_generate_play_integrity_challenge(app, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, body=body)



Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_generate_play_integrity_challenge_response import GoogleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeResponse
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

[**GoogleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeResponse**](GoogleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeResponse.md)

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
> GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse firebaseappcheck_projects_apps_play_integrity_config_batch_get(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, names=names)



Atomically gets the PlayIntegrityConfigs for the specified list of apps.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_batch_get_play_integrity_configs_response import GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse
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

[**GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse**](GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse.md)

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

# **firebaseappcheck_projects_apps_recaptcha_config_batch_get**
> GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse firebaseappcheck_projects_apps_recaptcha_config_batch_get(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, names=names)



Atomically gets the RecaptchaConfigs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_batch_get_recaptcha_configs_response import GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse
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
    parent = 'parent_example' # str | Required. The parent project name shared by all RecaptchaConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
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
    names = ['names_example'] # List[str] | Required. The relative resource names of the RecaptchaConfigs to retrieve, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaConfig ``` A maximum of 100 objects can be retrieved in a batch. (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_apps_recaptcha_config_batch_get(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, names=names)
        print("The response of ProjectsApi->firebaseappcheck_projects_apps_recaptcha_config_batch_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_apps_recaptcha_config_batch_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent project name shared by all RecaptchaConfigs being retrieved, in the format &#x60;&#x60;&#x60; projects/{project_number} &#x60;&#x60;&#x60; The parent collection in the &#x60;name&#x60; field of any resource being retrieved must match this field, or the entire batch fails. | 
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
 **names** | [**List[str]**](str.md)| Required. The relative resource names of the RecaptchaConfigs to retrieve, in the format: &#x60;&#x60;&#x60; projects/{project_number}/apps/{app_id}/recaptchaConfig &#x60;&#x60;&#x60; A maximum of 100 objects can be retrieved in a batch. | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse**](GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse.md)

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
> GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse firebaseappcheck_projects_apps_recaptcha_enterprise_config_batch_get(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, names=names)



Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_batch_get_recaptcha_enterprise_configs_response import GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse
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

[**GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse**](GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse.md)

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
> GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse firebaseappcheck_projects_apps_recaptcha_v3_config_batch_get(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, names=names)



Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_batch_get_recaptcha_v3_configs_response import GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse
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

[**GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse**](GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse.md)

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
> GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse firebaseappcheck_projects_apps_safety_net_config_batch_get(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, names=names)



Atomically gets the SafetyNetConfigs for the specified list of apps.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_batch_get_safety_net_configs_response import GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse
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

[**GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse**](GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse.md)

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
> GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse firebaseappcheck_projects_services_batch_update(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_batch_update_services_request=google_firebase_appcheck_v1beta_batch_update_services_request)



Atomically updates the specified Service configurations.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_batch_update_services_request import GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest
from openapi_client.models.google_firebase_appcheck_v1beta_batch_update_services_response import GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse
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
    google_firebase_appcheck_v1beta_batch_update_services_request = openapi_client.GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest() # GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_services_batch_update(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_batch_update_services_request=google_firebase_appcheck_v1beta_batch_update_services_request)
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
 **google_firebase_appcheck_v1beta_batch_update_services_request** | [**GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest**](GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse**](GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse.md)

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

# **firebaseappcheck_projects_services_list**
> GoogleFirebaseAppcheckV1betaListServicesResponse firebaseappcheck_projects_services_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_list_services_response import GoogleFirebaseAppcheckV1betaListServicesResponse
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
    page_size = 56 # int | The maximum number of Services to return in the response. Only explicitly configured services are returned. The server may return fewer than this at its own discretion. If no value is specified or set to zero (or too large a value is specified), the server will impose its own limit. (optional)
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
 **page_size** | **int**| The maximum number of Services to return in the response. Only explicitly configured services are returned. The server may return fewer than this at its own discretion. If no value is specified or set to zero (or too large a value is specified), the server will impose its own limit. | [optional] 
 **page_token** | **str**| Token returned from a previous call to ListServices indicating where in the set of Services to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListServices must match the call that provided the page token; if they do not match, the result is undefined. | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1betaListServicesResponse**](GoogleFirebaseAppcheckV1betaListServicesResponse.md)

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

# **firebaseappcheck_projects_services_resource_policies_batch_update**
> GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesResponse firebaseappcheck_projects_services_resource_policies_batch_update(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_batch_update_resource_policies_request=google_firebase_appcheck_v1beta_batch_update_resource_policies_request)



Atomically updates the specified ResourcePolicy configurations.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_batch_update_resource_policies_request import GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesRequest
from openapi_client.models.google_firebase_appcheck_v1beta_batch_update_resource_policies_response import GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesResponse
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
    parent = 'parent_example' # str | Required. The parent project name and the service, in the format ``` projects/{project_number}/services/{service_id} ``` The parent collection in the `name` field of any resource being updated must match this field, or the entire batch fails.
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
    google_firebase_appcheck_v1beta_batch_update_resource_policies_request = openapi_client.GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesRequest() # GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesRequest |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_services_resource_policies_batch_update(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_batch_update_resource_policies_request=google_firebase_appcheck_v1beta_batch_update_resource_policies_request)
        print("The response of ProjectsApi->firebaseappcheck_projects_services_resource_policies_batch_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_services_resource_policies_batch_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent project name and the service, in the format &#x60;&#x60;&#x60; projects/{project_number}/services/{service_id} &#x60;&#x60;&#x60; The parent collection in the &#x60;name&#x60; field of any resource being updated must match this field, or the entire batch fails. | 
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
 **google_firebase_appcheck_v1beta_batch_update_resource_policies_request** | [**GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesRequest**](GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesRequest.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesResponse**](GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesResponse.md)

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

# **firebaseappcheck_projects_services_resource_policies_create**
> GoogleFirebaseAppcheckV1betaResourcePolicy firebaseappcheck_projects_services_resource_policies_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_resource_policy=google_firebase_appcheck_v1beta_resource_policy)



Creates the specified ResourcePolicy configuration.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_resource_policy import GoogleFirebaseAppcheckV1betaResourcePolicy
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
    parent = 'parent_example' # str | Required. The relative resource name of the parent service in which the specified ResourcePolicy will be created, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS)
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
    google_firebase_appcheck_v1beta_resource_policy = openapi_client.GoogleFirebaseAppcheckV1betaResourcePolicy() # GoogleFirebaseAppcheckV1betaResourcePolicy |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_services_resource_policies_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_resource_policy=google_firebase_appcheck_v1beta_resource_policy)
        print("The response of ProjectsApi->firebaseappcheck_projects_services_resource_policies_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_services_resource_policies_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The relative resource name of the parent service in which the specified ResourcePolicy will be created, in the format: &#x60;&#x60;&#x60; projects/{project_number}/services/{service_id} &#x60;&#x60;&#x60; Note that the &#x60;service_id&#x60; element must be a supported service ID. Currently, the following service IDs are supported: * &#x60;oauth2.googleapis.com&#x60; (Google Identity for iOS) | 
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
 **google_firebase_appcheck_v1beta_resource_policy** | [**GoogleFirebaseAppcheckV1betaResourcePolicy**](GoogleFirebaseAppcheckV1betaResourcePolicy.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1betaResourcePolicy**](GoogleFirebaseAppcheckV1betaResourcePolicy.md)

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

# **firebaseappcheck_projects_services_resource_policies_delete**
> object firebaseappcheck_projects_services_resource_policies_delete(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, etag=etag)



Deletes the specified ResourcePolicy configuration.

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
    name = 'name_example' # str | Required. The relative resource name of the ResourcePolicy to delete, in the format: ``` projects/{project_number}/services/{service_id}/resourcePolicies/{resource_name} ```
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
    etag = 'etag_example' # str | The checksum to be validated against the current ResourcePolicy, to ensure the client has an up-to-date value before proceeding. The user can obtain this from the ResourcePolicy object that they last received. This etag is strongly validated. (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_services_resource_policies_delete(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, etag=etag)
        print("The response of ProjectsApi->firebaseappcheck_projects_services_resource_policies_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_services_resource_policies_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The relative resource name of the ResourcePolicy to delete, in the format: &#x60;&#x60;&#x60; projects/{project_number}/services/{service_id}/resourcePolicies/{resource_name} &#x60;&#x60;&#x60; | 
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
 **etag** | **str**| The checksum to be validated against the current ResourcePolicy, to ensure the client has an up-to-date value before proceeding. The user can obtain this from the ResourcePolicy object that they last received. This etag is strongly validated. | [optional] 

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

# **firebaseappcheck_projects_services_resource_policies_get**
> GoogleFirebaseAppcheckV1betaResourcePolicy firebaseappcheck_projects_services_resource_policies_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Gets the requested ResourcePolicy configuration.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_resource_policy import GoogleFirebaseAppcheckV1betaResourcePolicy
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
    name = 'name_example' # str | Required. The relative resource name of the ResourcePolicy to retrieve, in the format: ``` projects/{project_number}/services/{service_id}/resourcePolicies/{resource_policy_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS) `resource_policy_id` is a system-generated UID used as the resource ID for the policy.
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
        api_response = api_instance.firebaseappcheck_projects_services_resource_policies_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of ProjectsApi->firebaseappcheck_projects_services_resource_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_services_resource_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The relative resource name of the ResourcePolicy to retrieve, in the format: &#x60;&#x60;&#x60; projects/{project_number}/services/{service_id}/resourcePolicies/{resource_policy_id} &#x60;&#x60;&#x60; Note that the &#x60;service_id&#x60; element must be a supported service ID. Currently, the following service IDs are supported: * &#x60;oauth2.googleapis.com&#x60; (Google Identity for iOS) &#x60;resource_policy_id&#x60; is a system-generated UID used as the resource ID for the policy. | 
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

[**GoogleFirebaseAppcheckV1betaResourcePolicy**](GoogleFirebaseAppcheckV1betaResourcePolicy.md)

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

# **firebaseappcheck_projects_services_resource_policies_list**
> GoogleFirebaseAppcheckV1betaListResourcePoliciesResponse firebaseappcheck_projects_services_resource_policies_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token)



Lists all ResourcePolicy configurations for the specified project and service.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_list_resource_policies_response import GoogleFirebaseAppcheckV1betaListResourcePoliciesResponse
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
    parent = 'parent_example' # str | Required. The relative resource name of the parent project and service for which to list each associated ResourcePolicy, in the format: ``` projects/{project_number}/services/{service_name} ```
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
    filter = 'filter_example' # str | Optional. Filters the results by the specified rule. For the exact syntax of this field, please consult the [AIP-160](https://google.aip.dev/160) standard. Currently, since the only fields in the ResourcePolicy resource are the scalar fields `enforcement_mode` and `target_resource`, this method does not support the traversal operator (`.`) or the has operator (`:`). Here are some examples of valid filters: * `enforcement_mode = ENFORCED` * `target_resource = \"//oauth2.googleapis.com/projects/12345/oauthClients/\"` * `enforcement_mode = ENFORCED AND target_resource = \"//oauth2.googleapis.com/projects/12345/oauthClients/\"` (optional)
    page_size = 56 # int | The maximum number of ResourcePolicys to return in the response. Only explicitly configured policies are returned. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. (optional)
    page_token = 'page_token_example' # str | Token returned from a previous call to ListResourcePolicies indicating where in the set of ResourcePolicys to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListResourcePolicies must match the call that provided the page token; if they do not match, the result is undefined. (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_services_resource_policies_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->firebaseappcheck_projects_services_resource_policies_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_services_resource_policies_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The relative resource name of the parent project and service for which to list each associated ResourcePolicy, in the format: &#x60;&#x60;&#x60; projects/{project_number}/services/{service_name} &#x60;&#x60;&#x60; | 
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
 **filter** | **str**| Optional. Filters the results by the specified rule. For the exact syntax of this field, please consult the [AIP-160](https://google.aip.dev/160) standard. Currently, since the only fields in the ResourcePolicy resource are the scalar fields &#x60;enforcement_mode&#x60; and &#x60;target_resource&#x60;, this method does not support the traversal operator (&#x60;.&#x60;) or the has operator (&#x60;:&#x60;). Here are some examples of valid filters: * &#x60;enforcement_mode &#x3D; ENFORCED&#x60; * &#x60;target_resource &#x3D; \&quot;//oauth2.googleapis.com/projects/12345/oauthClients/\&quot;&#x60; * &#x60;enforcement_mode &#x3D; ENFORCED AND target_resource &#x3D; \&quot;//oauth2.googleapis.com/projects/12345/oauthClients/\&quot;&#x60; | [optional] 
 **page_size** | **int**| The maximum number of ResourcePolicys to return in the response. Only explicitly configured policies are returned. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. | [optional] 
 **page_token** | **str**| Token returned from a previous call to ListResourcePolicies indicating where in the set of ResourcePolicys to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListResourcePolicies must match the call that provided the page token; if they do not match, the result is undefined. | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1betaListResourcePoliciesResponse**](GoogleFirebaseAppcheckV1betaListResourcePoliciesResponse.md)

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

# **firebaseappcheck_projects_services_resource_policies_patch**
> GoogleFirebaseAppcheckV1betaResourcePolicy firebaseappcheck_projects_services_resource_policies_patch(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, google_firebase_appcheck_v1beta_resource_policy=google_firebase_appcheck_v1beta_resource_policy)



Updates the specified ResourcePolicy configuration.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_resource_policy import GoogleFirebaseAppcheckV1betaResourcePolicy
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
    name = 'name_example' # str | Required. The relative name of the resource configuration object, in the format: ``` projects/{project_number}/services/{service_id}/resourcePolicies/{resource_policy_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS) `resource_policy_id` is a system-generated UID used as the resource ID for the policy.
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
    update_mask = 'update_mask_example' # str | Required. A comma-separated list of names of fields in the ResourcePolicy to update. Example: `enforcement_mode`. (optional)
    google_firebase_appcheck_v1beta_resource_policy = openapi_client.GoogleFirebaseAppcheckV1betaResourcePolicy() # GoogleFirebaseAppcheckV1betaResourcePolicy |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_services_resource_policies_patch(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, google_firebase_appcheck_v1beta_resource_policy=google_firebase_appcheck_v1beta_resource_policy)
        print("The response of ProjectsApi->firebaseappcheck_projects_services_resource_policies_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_services_resource_policies_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The relative name of the resource configuration object, in the format: &#x60;&#x60;&#x60; projects/{project_number}/services/{service_id}/resourcePolicies/{resource_policy_id} &#x60;&#x60;&#x60; Note that the &#x60;service_id&#x60; element must be a supported service ID. Currently, the following service IDs are supported: * &#x60;oauth2.googleapis.com&#x60; (Google Identity for iOS) &#x60;resource_policy_id&#x60; is a system-generated UID used as the resource ID for the policy. | 
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
 **update_mask** | **str**| Required. A comma-separated list of names of fields in the ResourcePolicy to update. Example: &#x60;enforcement_mode&#x60;. | [optional] 
 **google_firebase_appcheck_v1beta_resource_policy** | [**GoogleFirebaseAppcheckV1betaResourcePolicy**](GoogleFirebaseAppcheckV1betaResourcePolicy.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1betaResourcePolicy**](GoogleFirebaseAppcheckV1betaResourcePolicy.md)

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

# **firebaseappcheck_projects_verify_app_check_token**
> GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenResponse firebaseappcheck_projects_verify_app_check_token(project, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_verify_app_check_token_request=google_firebase_appcheck_v1beta_verify_app_check_token_request)



Verifies the given App Check token and returns token usage signals that callers may act upon. This method currently only supports App Check tokens exchanged from the following attestation providers: * Play Integrity API * App Attest * DeviceCheck (`DCDevice` tokens) * reCAPTCHA Enterprise * reCAPTCHA v3 * Custom providers App Check tokens exchanged from debug secrets are also supported. Calling this method on an otherwise valid App Check token with an unsupported provider will cause an HTTP 400 error to be returned. Returns whether this token was already consumed before this call. If this is the first time this method has seen the given App Check token, the field `already_consumed` in the response will be absent. The given token will then be marked as `already_consumed` (set to `true`) for all future invocations of this method for that token. Note that if the given App Check token is invalid, an HTTP 403 error is returned instead of a response object, regardless whether the token was already consumed. Currently, when evaluating whether an App Check token was already consumed, only calls to this exact method are counted. Use of the App Check token elsewhere will not mark the token as being already consumed. The caller must have the [`firebaseappcheck.appCheckTokens.verify`](https://firebase.google.com/docs/projects/iam/permissions#app-check) permission to call this method. This permission is part of the [Firebase App Check Token Verifier role](https://firebase.google.com/docs/projects/iam/roles-predefined-product#app-check).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_firebase_appcheck_v1beta_verify_app_check_token_request import GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenRequest
from openapi_client.models.google_firebase_appcheck_v1beta_verify_app_check_token_response import GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenResponse
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
    project = 'project_example' # str | Required. The relative resource name of the project for which the token was minted, in the format: ``` projects/{project_number} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
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
    google_firebase_appcheck_v1beta_verify_app_check_token_request = openapi_client.GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenRequest() # GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenRequest |  (optional)

    try:
        api_response = api_instance.firebaseappcheck_projects_verify_app_check_token(project, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_firebase_appcheck_v1beta_verify_app_check_token_request=google_firebase_appcheck_v1beta_verify_app_check_token_request)
        print("The response of ProjectsApi->firebaseappcheck_projects_verify_app_check_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->firebaseappcheck_projects_verify_app_check_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| Required. The relative resource name of the project for which the token was minted, in the format: &#x60;&#x60;&#x60; projects/{project_number} &#x60;&#x60;&#x60; If necessary, the &#x60;project_number&#x60; element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google&#39;s [AIP 2510](https://google.aip.dev/cloud/2510) standard. | 
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
 **google_firebase_appcheck_v1beta_verify_app_check_token_request** | [**GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenRequest**](GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenRequest.md)|  | [optional] 

### Return type

[**GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenResponse**](GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenResponse.md)

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

