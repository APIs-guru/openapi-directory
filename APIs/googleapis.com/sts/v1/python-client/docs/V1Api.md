# openapi_client.V1Api

All URIs are relative to *https://sts.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sts_introspect**](V1Api.md#sts_introspect) | **POST** /v1/introspect | 
[**sts_oauthtoken**](V1Api.md#sts_oauthtoken) | **POST** /v1/oauthtoken | 
[**sts_token**](V1Api.md#sts_token) | **POST** /v1/token | 


# **sts_introspect**
> GoogleIdentityStsV1IntrospectTokenResponse sts_introspect(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_identity_sts_v1_introspect_token_request=google_identity_sts_v1_introspect_token_request)



Gets information about a Google OAuth 2.0 access token issued by the Google Cloud [Security Token Service API](https://cloud.google.com/iam/docs/reference/sts/rest).

### Example


```python
import openapi_client
from openapi_client.models.google_identity_sts_v1_introspect_token_request import GoogleIdentityStsV1IntrospectTokenRequest
from openapi_client.models.google_identity_sts_v1_introspect_token_response import GoogleIdentityStsV1IntrospectTokenResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sts.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://sts.googleapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.V1Api(api_client)
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
    google_identity_sts_v1_introspect_token_request = openapi_client.GoogleIdentityStsV1IntrospectTokenRequest() # GoogleIdentityStsV1IntrospectTokenRequest |  (optional)

    try:
        api_response = api_instance.sts_introspect(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_identity_sts_v1_introspect_token_request=google_identity_sts_v1_introspect_token_request)
        print("The response of V1Api->sts_introspect:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling V1Api->sts_introspect: %s\n" % e)
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
 **google_identity_sts_v1_introspect_token_request** | [**GoogleIdentityStsV1IntrospectTokenRequest**](GoogleIdentityStsV1IntrospectTokenRequest.md)|  | [optional] 

### Return type

[**GoogleIdentityStsV1IntrospectTokenResponse**](GoogleIdentityStsV1IntrospectTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sts_oauthtoken**
> GoogleIdentityStsV1ExchangeOauthTokenResponse sts_oauthtoken(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_identity_sts_v1_exchange_oauth_token_request=google_identity_sts_v1_exchange_oauth_token_request)



Exchanges a credential that represents the resource owner's authorization for a Google-generated [OAuth 2.0 access token] (https://www.rfc-editor.org/rfc/rfc6749#section-5) or [refreshes an accesstoken] (https://www.rfc-editor.org/rfc/rfc6749#section-6) following [the OAuth 2.0 authorization framework] (https://tools.ietf.org/html/rfc8693) The credential can be one of the following: - An authorization code issued by the workforce identity federation authorization endpoint - A [refresh token](https://www.rfc-editor.org/rfc/rfc6749#section-10.4) issued by this endpoint This endpoint is only meant to be called by the Google Cloud CLI. Also note that this API only accepts the authorization code issued for workforce pools.

### Example


```python
import openapi_client
from openapi_client.models.google_identity_sts_v1_exchange_oauth_token_request import GoogleIdentityStsV1ExchangeOauthTokenRequest
from openapi_client.models.google_identity_sts_v1_exchange_oauth_token_response import GoogleIdentityStsV1ExchangeOauthTokenResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sts.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://sts.googleapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.V1Api(api_client)
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
    google_identity_sts_v1_exchange_oauth_token_request = openapi_client.GoogleIdentityStsV1ExchangeOauthTokenRequest() # GoogleIdentityStsV1ExchangeOauthTokenRequest |  (optional)

    try:
        api_response = api_instance.sts_oauthtoken(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_identity_sts_v1_exchange_oauth_token_request=google_identity_sts_v1_exchange_oauth_token_request)
        print("The response of V1Api->sts_oauthtoken:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling V1Api->sts_oauthtoken: %s\n" % e)
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
 **google_identity_sts_v1_exchange_oauth_token_request** | [**GoogleIdentityStsV1ExchangeOauthTokenRequest**](GoogleIdentityStsV1ExchangeOauthTokenRequest.md)|  | [optional] 

### Return type

[**GoogleIdentityStsV1ExchangeOauthTokenResponse**](GoogleIdentityStsV1ExchangeOauthTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sts_token**
> GoogleIdentityStsV1ExchangeTokenResponse sts_token(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_identity_sts_v1_exchange_token_request=google_identity_sts_v1_exchange_token_request)



Exchanges a credential for a Google OAuth 2.0 access token. The token asserts an external identity within an identity pool, or it applies a Credential Access Boundary to a Google access token. Note that workforce pools do not support Credential Access Boundaries. When you call this method, do not send the `Authorization` HTTP header in the request. This method does not require the `Authorization` header, and using the header can cause the request to fail.

### Example


```python
import openapi_client
from openapi_client.models.google_identity_sts_v1_exchange_token_request import GoogleIdentityStsV1ExchangeTokenRequest
from openapi_client.models.google_identity_sts_v1_exchange_token_response import GoogleIdentityStsV1ExchangeTokenResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sts.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://sts.googleapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.V1Api(api_client)
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
    google_identity_sts_v1_exchange_token_request = openapi_client.GoogleIdentityStsV1ExchangeTokenRequest() # GoogleIdentityStsV1ExchangeTokenRequest |  (optional)

    try:
        api_response = api_instance.sts_token(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_identity_sts_v1_exchange_token_request=google_identity_sts_v1_exchange_token_request)
        print("The response of V1Api->sts_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling V1Api->sts_token: %s\n" % e)
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
 **google_identity_sts_v1_exchange_token_request** | [**GoogleIdentityStsV1ExchangeTokenRequest**](GoogleIdentityStsV1ExchangeTokenRequest.md)|  | [optional] 

### Return type

[**GoogleIdentityStsV1ExchangeTokenResponse**](GoogleIdentityStsV1ExchangeTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

