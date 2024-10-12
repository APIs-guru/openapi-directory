# openapi_client.OrganizationsApi

All URIs are relative to *https://policysimulator.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**policysimulator_organizations_locations_org_policy_violations_previews_create**](OrganizationsApi.md#policysimulator_organizations_locations_org_policy_violations_previews_create) | **POST** /v1/{parent}/orgPolicyViolationsPreviews | 
[**policysimulator_organizations_locations_org_policy_violations_previews_list**](OrganizationsApi.md#policysimulator_organizations_locations_org_policy_violations_previews_list) | **GET** /v1/{parent}/orgPolicyViolationsPreviews | 
[**policysimulator_organizations_locations_org_policy_violations_previews_org_policy_violations_list**](OrganizationsApi.md#policysimulator_organizations_locations_org_policy_violations_previews_org_policy_violations_list) | **GET** /v1/{parent}/orgPolicyViolations | 


# **policysimulator_organizations_locations_org_policy_violations_previews_create**
> GoogleLongrunningOperation policysimulator_organizations_locations_org_policy_violations_previews_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, org_policy_violations_preview_id=org_policy_violations_preview_id, google_cloud_policysimulator_v1_org_policy_violations_preview=google_cloud_policysimulator_v1_org_policy_violations_preview)



CreateOrgPolicyViolationsPreview creates an OrgPolicyViolationsPreview for the proposed changes in the provided OrgPolicyViolationsPreview.OrgPolicyOverlay. The changes to OrgPolicy are specified by this `OrgPolicyOverlay`. The resources to scan are inferred from these specified changes.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_policysimulator_v1_org_policy_violations_preview import GoogleCloudPolicysimulatorV1OrgPolicyViolationsPreview
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://policysimulator.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://policysimulator.googleapis.com"
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
    api_instance = openapi_client.OrganizationsApi(api_client)
    parent = 'parent_example' # str | Required. The organization under which this OrgPolicyViolationsPreview will be created. Example: `organizations/my-example-org/locations/global`
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
    org_policy_violations_preview_id = 'org_policy_violations_preview_id_example' # str | Optional. An optional user-specified ID for the OrgPolicyViolationsPreview. If not provided, a random ID will be generated. (optional)
    google_cloud_policysimulator_v1_org_policy_violations_preview = openapi_client.GoogleCloudPolicysimulatorV1OrgPolicyViolationsPreview() # GoogleCloudPolicysimulatorV1OrgPolicyViolationsPreview |  (optional)

    try:
        api_response = api_instance.policysimulator_organizations_locations_org_policy_violations_previews_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, org_policy_violations_preview_id=org_policy_violations_preview_id, google_cloud_policysimulator_v1_org_policy_violations_preview=google_cloud_policysimulator_v1_org_policy_violations_preview)
        print("The response of OrganizationsApi->policysimulator_organizations_locations_org_policy_violations_previews_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->policysimulator_organizations_locations_org_policy_violations_previews_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The organization under which this OrgPolicyViolationsPreview will be created. Example: &#x60;organizations/my-example-org/locations/global&#x60; | 
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
 **org_policy_violations_preview_id** | **str**| Optional. An optional user-specified ID for the OrgPolicyViolationsPreview. If not provided, a random ID will be generated. | [optional] 
 **google_cloud_policysimulator_v1_org_policy_violations_preview** | [**GoogleCloudPolicysimulatorV1OrgPolicyViolationsPreview**](GoogleCloudPolicysimulatorV1OrgPolicyViolationsPreview.md)|  | [optional] 

### Return type

[**GoogleLongrunningOperation**](GoogleLongrunningOperation.md)

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

# **policysimulator_organizations_locations_org_policy_violations_previews_list**
> GoogleCloudPolicysimulatorV1ListOrgPolicyViolationsPreviewsResponse policysimulator_organizations_locations_org_policy_violations_previews_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



ListOrgPolicyViolationsPreviews lists each OrgPolicyViolationsPreview in an organization. Each OrgPolicyViolationsPreview is available for at least 7 days.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_policysimulator_v1_list_org_policy_violations_previews_response import GoogleCloudPolicysimulatorV1ListOrgPolicyViolationsPreviewsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://policysimulator.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://policysimulator.googleapis.com"
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
    api_instance = openapi_client.OrganizationsApi(api_client)
    parent = 'parent_example' # str | Required. The parent the violations are scoped to. Format: `organizations/{organization}/locations/{location}` Example: `organizations/my-example-org/locations/global`
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
    page_size = 56 # int | Optional. The maximum number of items to return. The service may return fewer than this value. If unspecified, at most 5 items will be returned. The maximum value is 10; values above 10 will be coerced to 10. (optional)
    page_token = 'page_token_example' # str | Optional. A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters must match the call that provided the page token. (optional)

    try:
        api_response = api_instance.policysimulator_organizations_locations_org_policy_violations_previews_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of OrganizationsApi->policysimulator_organizations_locations_org_policy_violations_previews_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->policysimulator_organizations_locations_org_policy_violations_previews_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent the violations are scoped to. Format: &#x60;organizations/{organization}/locations/{location}&#x60; Example: &#x60;organizations/my-example-org/locations/global&#x60; | 
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
 **page_size** | **int**| Optional. The maximum number of items to return. The service may return fewer than this value. If unspecified, at most 5 items will be returned. The maximum value is 10; values above 10 will be coerced to 10. | [optional] 
 **page_token** | **str**| Optional. A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters must match the call that provided the page token. | [optional] 

### Return type

[**GoogleCloudPolicysimulatorV1ListOrgPolicyViolationsPreviewsResponse**](GoogleCloudPolicysimulatorV1ListOrgPolicyViolationsPreviewsResponse.md)

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

# **policysimulator_organizations_locations_org_policy_violations_previews_org_policy_violations_list**
> GoogleCloudPolicysimulatorV1ListOrgPolicyViolationsResponse policysimulator_organizations_locations_org_policy_violations_previews_org_policy_violations_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



ListOrgPolicyViolations lists the OrgPolicyViolations that are present in an OrgPolicyViolationsPreview.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_policysimulator_v1_list_org_policy_violations_response import GoogleCloudPolicysimulatorV1ListOrgPolicyViolationsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://policysimulator.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://policysimulator.googleapis.com"
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
    api_instance = openapi_client.OrganizationsApi(api_client)
    parent = 'parent_example' # str | Required. The OrgPolicyViolationsPreview to get OrgPolicyViolations from. Format: organizations/{organization}/locations/{location}/orgPolicyViolationsPreviews/{orgPolicyViolationsPreview}
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
    page_size = 56 # int | Optional. The maximum number of items to return. The service may return fewer than this value. If unspecified, at most 50 items will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. (optional)
    page_token = 'page_token_example' # str | Optional. A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters must match the call that provided the page token. (optional)

    try:
        api_response = api_instance.policysimulator_organizations_locations_org_policy_violations_previews_org_policy_violations_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of OrganizationsApi->policysimulator_organizations_locations_org_policy_violations_previews_org_policy_violations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->policysimulator_organizations_locations_org_policy_violations_previews_org_policy_violations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The OrgPolicyViolationsPreview to get OrgPolicyViolations from. Format: organizations/{organization}/locations/{location}/orgPolicyViolationsPreviews/{orgPolicyViolationsPreview} | 
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
 **page_size** | **int**| Optional. The maximum number of items to return. The service may return fewer than this value. If unspecified, at most 50 items will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. | [optional] 
 **page_token** | **str**| Optional. A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters must match the call that provided the page token. | [optional] 

### Return type

[**GoogleCloudPolicysimulatorV1ListOrgPolicyViolationsResponse**](GoogleCloudPolicysimulatorV1ListOrgPolicyViolationsResponse.md)

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

