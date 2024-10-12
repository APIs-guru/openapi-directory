# openapi_client.V1Api

All URIs are relative to *https://servicebroker.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**servicebroker_get_iam_policy**](V1Api.md#servicebroker_get_iam_policy) | **GET** /v1/{resource}:getIamPolicy | 
[**servicebroker_set_iam_policy**](V1Api.md#servicebroker_set_iam_policy) | **POST** /v1/{resource}:setIamPolicy | 
[**servicebroker_test_iam_permissions**](V1Api.md#servicebroker_test_iam_permissions) | **POST** /v1/{resource}:testIamPermissions | 


# **servicebroker_get_iam_policy**
> GoogleIamV1Policy servicebroker_get_iam_policy(resource, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, options_requested_policy_version=options_requested_policy_version)



Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_iam_v1_policy import GoogleIamV1Policy
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://servicebroker.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://servicebroker.googleapis.com"
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
    api_instance = openapi_client.V1Api(api_client)
    resource = 'resource_example' # str | REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    options_requested_policy_version = 56 # int | Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. (optional)

    try:
        api_response = api_instance.servicebroker_get_iam_policy(resource, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, options_requested_policy_version=options_requested_policy_version)
        print("The response of V1Api->servicebroker_get_iam_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling V1Api->servicebroker_get_iam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource** | **str**| REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **options_requested_policy_version** | **int**| Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. | [optional] 

### Return type

[**GoogleIamV1Policy**](GoogleIamV1Policy.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **servicebroker_set_iam_policy**
> GoogleIamV1Policy servicebroker_set_iam_policy(resource, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, google_iam_v1_set_iam_policy_request=google_iam_v1_set_iam_policy_request)



Sets the access control policy on the specified resource. Replaces any existing policy.  Can return Public Errors: NOT_FOUND, INVALID_ARGUMENT and PERMISSION_DENIED

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_iam_v1_policy import GoogleIamV1Policy
from openapi_client.models.google_iam_v1_set_iam_policy_request import GoogleIamV1SetIamPolicyRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://servicebroker.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://servicebroker.googleapis.com"
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
    api_instance = openapi_client.V1Api(api_client)
    resource = 'resource_example' # str | REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    google_iam_v1_set_iam_policy_request = openapi_client.GoogleIamV1SetIamPolicyRequest() # GoogleIamV1SetIamPolicyRequest |  (optional)

    try:
        api_response = api_instance.servicebroker_set_iam_policy(resource, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, google_iam_v1_set_iam_policy_request=google_iam_v1_set_iam_policy_request)
        print("The response of V1Api->servicebroker_set_iam_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling V1Api->servicebroker_set_iam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource** | **str**| REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **google_iam_v1_set_iam_policy_request** | [**GoogleIamV1SetIamPolicyRequest**](GoogleIamV1SetIamPolicyRequest.md)|  | [optional] 

### Return type

[**GoogleIamV1Policy**](GoogleIamV1Policy.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **servicebroker_test_iam_permissions**
> GoogleIamV1TestIamPermissionsResponse servicebroker_test_iam_permissions(resource, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, google_iam_v1_test_iam_permissions_request=google_iam_v1_test_iam_permissions_request)



Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may \"fail open\" without warning.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_iam_v1_test_iam_permissions_request import GoogleIamV1TestIamPermissionsRequest
from openapi_client.models.google_iam_v1_test_iam_permissions_response import GoogleIamV1TestIamPermissionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://servicebroker.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://servicebroker.googleapis.com"
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
    api_instance = openapi_client.V1Api(api_client)
    resource = 'resource_example' # str | REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    google_iam_v1_test_iam_permissions_request = openapi_client.GoogleIamV1TestIamPermissionsRequest() # GoogleIamV1TestIamPermissionsRequest |  (optional)

    try:
        api_response = api_instance.servicebroker_test_iam_permissions(resource, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, google_iam_v1_test_iam_permissions_request=google_iam_v1_test_iam_permissions_request)
        print("The response of V1Api->servicebroker_test_iam_permissions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling V1Api->servicebroker_test_iam_permissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource** | **str**| REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **google_iam_v1_test_iam_permissions_request** | [**GoogleIamV1TestIamPermissionsRequest**](GoogleIamV1TestIamPermissionsRequest.md)|  | [optional] 

### Return type

[**GoogleIamV1TestIamPermissionsResponse**](GoogleIamV1TestIamPermissionsResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

