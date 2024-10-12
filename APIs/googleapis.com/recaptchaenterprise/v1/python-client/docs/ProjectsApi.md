# openapi_client.ProjectsApi

All URIs are relative to *https://recaptchaenterprise.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recaptchaenterprise_projects_assessments_annotate**](ProjectsApi.md#recaptchaenterprise_projects_assessments_annotate) | **POST** /v1/{name}:annotate | 
[**recaptchaenterprise_projects_assessments_create**](ProjectsApi.md#recaptchaenterprise_projects_assessments_create) | **POST** /v1/{parent}/assessments | 
[**recaptchaenterprise_projects_firewallpolicies_create**](ProjectsApi.md#recaptchaenterprise_projects_firewallpolicies_create) | **POST** /v1/{parent}/firewallpolicies | 
[**recaptchaenterprise_projects_firewallpolicies_list**](ProjectsApi.md#recaptchaenterprise_projects_firewallpolicies_list) | **GET** /v1/{parent}/firewallpolicies | 
[**recaptchaenterprise_projects_firewallpolicies_reorder**](ProjectsApi.md#recaptchaenterprise_projects_firewallpolicies_reorder) | **POST** /v1/{parent}/firewallpolicies:reorder | 
[**recaptchaenterprise_projects_keys_create**](ProjectsApi.md#recaptchaenterprise_projects_keys_create) | **POST** /v1/{parent}/keys | 
[**recaptchaenterprise_projects_keys_delete**](ProjectsApi.md#recaptchaenterprise_projects_keys_delete) | **DELETE** /v1/{name} | 
[**recaptchaenterprise_projects_keys_get_metrics**](ProjectsApi.md#recaptchaenterprise_projects_keys_get_metrics) | **GET** /v1/{name} | 
[**recaptchaenterprise_projects_keys_list**](ProjectsApi.md#recaptchaenterprise_projects_keys_list) | **GET** /v1/{parent}/keys | 
[**recaptchaenterprise_projects_keys_migrate**](ProjectsApi.md#recaptchaenterprise_projects_keys_migrate) | **POST** /v1/{name}:migrate | 
[**recaptchaenterprise_projects_keys_patch**](ProjectsApi.md#recaptchaenterprise_projects_keys_patch) | **PATCH** /v1/{name} | 
[**recaptchaenterprise_projects_keys_retrieve_legacy_secret_key**](ProjectsApi.md#recaptchaenterprise_projects_keys_retrieve_legacy_secret_key) | **GET** /v1/{key}:retrieveLegacySecretKey | 
[**recaptchaenterprise_projects_relatedaccountgroupmemberships_search**](ProjectsApi.md#recaptchaenterprise_projects_relatedaccountgroupmemberships_search) | **POST** /v1/{project}/relatedaccountgroupmemberships:search | 
[**recaptchaenterprise_projects_relatedaccountgroups_list**](ProjectsApi.md#recaptchaenterprise_projects_relatedaccountgroups_list) | **GET** /v1/{parent}/relatedaccountgroups | 
[**recaptchaenterprise_projects_relatedaccountgroups_memberships_list**](ProjectsApi.md#recaptchaenterprise_projects_relatedaccountgroups_memberships_list) | **GET** /v1/{parent}/memberships | 


# **recaptchaenterprise_projects_assessments_annotate**
> object recaptchaenterprise_projects_assessments_annotate(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_recaptchaenterprise_v1_annotate_assessment_request=google_cloud_recaptchaenterprise_v1_annotate_assessment_request)



Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_recaptchaenterprise_v1_annotate_assessment_request import GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://recaptchaenterprise.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://recaptchaenterprise.googleapis.com"
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
    name = 'name_example' # str | Required. The resource name of the Assessment, in the format `projects/{project}/assessments/{assessment}`.
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
    google_cloud_recaptchaenterprise_v1_annotate_assessment_request = openapi_client.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest() # GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest |  (optional)

    try:
        api_response = api_instance.recaptchaenterprise_projects_assessments_annotate(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_recaptchaenterprise_v1_annotate_assessment_request=google_cloud_recaptchaenterprise_v1_annotate_assessment_request)
        print("The response of ProjectsApi->recaptchaenterprise_projects_assessments_annotate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->recaptchaenterprise_projects_assessments_annotate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The resource name of the Assessment, in the format &#x60;projects/{project}/assessments/{assessment}&#x60;. | 
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
 **google_cloud_recaptchaenterprise_v1_annotate_assessment_request** | [**GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest**](GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest.md)|  | [optional] 

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

# **recaptchaenterprise_projects_assessments_create**
> GoogleCloudRecaptchaenterpriseV1Assessment recaptchaenterprise_projects_assessments_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_recaptchaenterprise_v1_assessment=google_cloud_recaptchaenterprise_v1_assessment)



Creates an Assessment of the likelihood an event is legitimate.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_recaptchaenterprise_v1_assessment import GoogleCloudRecaptchaenterpriseV1Assessment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://recaptchaenterprise.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://recaptchaenterprise.googleapis.com"
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
    parent = 'parent_example' # str | Required. The name of the project in which the assessment will be created, in the format `projects/{project}`.
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
    google_cloud_recaptchaenterprise_v1_assessment = openapi_client.GoogleCloudRecaptchaenterpriseV1Assessment() # GoogleCloudRecaptchaenterpriseV1Assessment |  (optional)

    try:
        api_response = api_instance.recaptchaenterprise_projects_assessments_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_recaptchaenterprise_v1_assessment=google_cloud_recaptchaenterprise_v1_assessment)
        print("The response of ProjectsApi->recaptchaenterprise_projects_assessments_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->recaptchaenterprise_projects_assessments_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The name of the project in which the assessment will be created, in the format &#x60;projects/{project}&#x60;. | 
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
 **google_cloud_recaptchaenterprise_v1_assessment** | [**GoogleCloudRecaptchaenterpriseV1Assessment**](GoogleCloudRecaptchaenterpriseV1Assessment.md)|  | [optional] 

### Return type

[**GoogleCloudRecaptchaenterpriseV1Assessment**](GoogleCloudRecaptchaenterpriseV1Assessment.md)

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

# **recaptchaenterprise_projects_firewallpolicies_create**
> GoogleCloudRecaptchaenterpriseV1FirewallPolicy recaptchaenterprise_projects_firewallpolicies_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_recaptchaenterprise_v1_firewall_policy=google_cloud_recaptchaenterprise_v1_firewall_policy)



Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can be executed. A project may have a maximum of 1000 policies.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_recaptchaenterprise_v1_firewall_policy import GoogleCloudRecaptchaenterpriseV1FirewallPolicy
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://recaptchaenterprise.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://recaptchaenterprise.googleapis.com"
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
    parent = 'parent_example' # str | Required. The name of the project this policy will apply to, in the format `projects/{project}`.
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
    google_cloud_recaptchaenterprise_v1_firewall_policy = openapi_client.GoogleCloudRecaptchaenterpriseV1FirewallPolicy() # GoogleCloudRecaptchaenterpriseV1FirewallPolicy |  (optional)

    try:
        api_response = api_instance.recaptchaenterprise_projects_firewallpolicies_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_recaptchaenterprise_v1_firewall_policy=google_cloud_recaptchaenterprise_v1_firewall_policy)
        print("The response of ProjectsApi->recaptchaenterprise_projects_firewallpolicies_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->recaptchaenterprise_projects_firewallpolicies_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The name of the project this policy will apply to, in the format &#x60;projects/{project}&#x60;. | 
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
 **google_cloud_recaptchaenterprise_v1_firewall_policy** | [**GoogleCloudRecaptchaenterpriseV1FirewallPolicy**](GoogleCloudRecaptchaenterpriseV1FirewallPolicy.md)|  | [optional] 

### Return type

[**GoogleCloudRecaptchaenterpriseV1FirewallPolicy**](GoogleCloudRecaptchaenterpriseV1FirewallPolicy.md)

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

# **recaptchaenterprise_projects_firewallpolicies_list**
> GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse recaptchaenterprise_projects_firewallpolicies_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



Returns the list of all firewall policies that belong to a project.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_recaptchaenterprise_v1_list_firewall_policies_response import GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://recaptchaenterprise.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://recaptchaenterprise.googleapis.com"
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
    parent = 'parent_example' # str | Required. The name of the project to list the policies for, in the format `projects/{project}`.
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
    page_size = 56 # int | Optional. The maximum number of policies to return. Default is 10. Max limit is 1000. (optional)
    page_token = 'page_token_example' # str | Optional. The next_page_token value returned from a previous. ListFirewallPoliciesRequest, if any. (optional)

    try:
        api_response = api_instance.recaptchaenterprise_projects_firewallpolicies_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->recaptchaenterprise_projects_firewallpolicies_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->recaptchaenterprise_projects_firewallpolicies_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The name of the project to list the policies for, in the format &#x60;projects/{project}&#x60;. | 
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
 **page_size** | **int**| Optional. The maximum number of policies to return. Default is 10. Max limit is 1000. | [optional] 
 **page_token** | **str**| Optional. The next_page_token value returned from a previous. ListFirewallPoliciesRequest, if any. | [optional] 

### Return type

[**GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse**](GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse.md)

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

# **recaptchaenterprise_projects_firewallpolicies_reorder**
> object recaptchaenterprise_projects_firewallpolicies_reorder(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_recaptchaenterprise_v1_reorder_firewall_policies_request=google_cloud_recaptchaenterprise_v1_reorder_firewall_policies_request)



Reorders all firewall policies.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_recaptchaenterprise_v1_reorder_firewall_policies_request import GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://recaptchaenterprise.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://recaptchaenterprise.googleapis.com"
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
    parent = 'parent_example' # str | Required. The name of the project to list the policies for, in the format `projects/{project}`.
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
    google_cloud_recaptchaenterprise_v1_reorder_firewall_policies_request = openapi_client.GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesRequest() # GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesRequest |  (optional)

    try:
        api_response = api_instance.recaptchaenterprise_projects_firewallpolicies_reorder(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_recaptchaenterprise_v1_reorder_firewall_policies_request=google_cloud_recaptchaenterprise_v1_reorder_firewall_policies_request)
        print("The response of ProjectsApi->recaptchaenterprise_projects_firewallpolicies_reorder:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->recaptchaenterprise_projects_firewallpolicies_reorder: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The name of the project to list the policies for, in the format &#x60;projects/{project}&#x60;. | 
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
 **google_cloud_recaptchaenterprise_v1_reorder_firewall_policies_request** | [**GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesRequest**](GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesRequest.md)|  | [optional] 

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

# **recaptchaenterprise_projects_keys_create**
> GoogleCloudRecaptchaenterpriseV1Key recaptchaenterprise_projects_keys_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_recaptchaenterprise_v1_key=google_cloud_recaptchaenterprise_v1_key)



Creates a new reCAPTCHA Enterprise key.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_recaptchaenterprise_v1_key import GoogleCloudRecaptchaenterpriseV1Key
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://recaptchaenterprise.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://recaptchaenterprise.googleapis.com"
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
    parent = 'parent_example' # str | Required. The name of the project in which the key will be created, in the format `projects/{project}`.
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
    google_cloud_recaptchaenterprise_v1_key = openapi_client.GoogleCloudRecaptchaenterpriseV1Key() # GoogleCloudRecaptchaenterpriseV1Key |  (optional)

    try:
        api_response = api_instance.recaptchaenterprise_projects_keys_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_recaptchaenterprise_v1_key=google_cloud_recaptchaenterprise_v1_key)
        print("The response of ProjectsApi->recaptchaenterprise_projects_keys_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->recaptchaenterprise_projects_keys_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The name of the project in which the key will be created, in the format &#x60;projects/{project}&#x60;. | 
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
 **google_cloud_recaptchaenterprise_v1_key** | [**GoogleCloudRecaptchaenterpriseV1Key**](GoogleCloudRecaptchaenterpriseV1Key.md)|  | [optional] 

### Return type

[**GoogleCloudRecaptchaenterpriseV1Key**](GoogleCloudRecaptchaenterpriseV1Key.md)

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

# **recaptchaenterprise_projects_keys_delete**
> object recaptchaenterprise_projects_keys_delete(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Deletes the specified key.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://recaptchaenterprise.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://recaptchaenterprise.googleapis.com"
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
    name = 'name_example' # str | Required. The name of the key to be deleted, in the format `projects/{project}/keys/{key}`.
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
        api_response = api_instance.recaptchaenterprise_projects_keys_delete(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of ProjectsApi->recaptchaenterprise_projects_keys_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->recaptchaenterprise_projects_keys_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The name of the key to be deleted, in the format &#x60;projects/{project}/keys/{key}&#x60;. | 
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

# **recaptchaenterprise_projects_keys_get_metrics**
> GoogleCloudRecaptchaenterpriseV1Metrics recaptchaenterprise_projects_keys_get_metrics(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Get some aggregated metrics for a Key. This data can be used to build dashboards.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_recaptchaenterprise_v1_metrics import GoogleCloudRecaptchaenterpriseV1Metrics
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://recaptchaenterprise.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://recaptchaenterprise.googleapis.com"
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
    name = 'name_example' # str | Required. The name of the requested metrics, in the format `projects/{project}/keys/{key}/metrics`.
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
        api_response = api_instance.recaptchaenterprise_projects_keys_get_metrics(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of ProjectsApi->recaptchaenterprise_projects_keys_get_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->recaptchaenterprise_projects_keys_get_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The name of the requested metrics, in the format &#x60;projects/{project}/keys/{key}/metrics&#x60;. | 
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

[**GoogleCloudRecaptchaenterpriseV1Metrics**](GoogleCloudRecaptchaenterpriseV1Metrics.md)

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

# **recaptchaenterprise_projects_keys_list**
> GoogleCloudRecaptchaenterpriseV1ListKeysResponse recaptchaenterprise_projects_keys_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



Returns the list of all keys that belong to a project.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_recaptchaenterprise_v1_list_keys_response import GoogleCloudRecaptchaenterpriseV1ListKeysResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://recaptchaenterprise.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://recaptchaenterprise.googleapis.com"
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
    parent = 'parent_example' # str | Required. The name of the project that contains the keys that will be listed, in the format `projects/{project}`.
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
    page_size = 56 # int | Optional. The maximum number of keys to return. Default is 10. Max limit is 1000. (optional)
    page_token = 'page_token_example' # str | Optional. The next_page_token value returned from a previous. ListKeysRequest, if any. (optional)

    try:
        api_response = api_instance.recaptchaenterprise_projects_keys_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->recaptchaenterprise_projects_keys_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->recaptchaenterprise_projects_keys_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The name of the project that contains the keys that will be listed, in the format &#x60;projects/{project}&#x60;. | 
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
 **page_size** | **int**| Optional. The maximum number of keys to return. Default is 10. Max limit is 1000. | [optional] 
 **page_token** | **str**| Optional. The next_page_token value returned from a previous. ListKeysRequest, if any. | [optional] 

### Return type

[**GoogleCloudRecaptchaenterpriseV1ListKeysResponse**](GoogleCloudRecaptchaenterpriseV1ListKeysResponse.md)

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

# **recaptchaenterprise_projects_keys_migrate**
> GoogleCloudRecaptchaenterpriseV1Key recaptchaenterprise_projects_keys_migrate(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_recaptchaenterprise_v1_migrate_key_request=google_cloud_recaptchaenterprise_v1_migrate_key_request)



Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_recaptchaenterprise_v1_key import GoogleCloudRecaptchaenterpriseV1Key
from openapi_client.models.google_cloud_recaptchaenterprise_v1_migrate_key_request import GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://recaptchaenterprise.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://recaptchaenterprise.googleapis.com"
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
    name = 'name_example' # str | Required. The name of the key to be migrated, in the format `projects/{project}/keys/{key}`.
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
    google_cloud_recaptchaenterprise_v1_migrate_key_request = openapi_client.GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest() # GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest |  (optional)

    try:
        api_response = api_instance.recaptchaenterprise_projects_keys_migrate(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_recaptchaenterprise_v1_migrate_key_request=google_cloud_recaptchaenterprise_v1_migrate_key_request)
        print("The response of ProjectsApi->recaptchaenterprise_projects_keys_migrate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->recaptchaenterprise_projects_keys_migrate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The name of the key to be migrated, in the format &#x60;projects/{project}/keys/{key}&#x60;. | 
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
 **google_cloud_recaptchaenterprise_v1_migrate_key_request** | [**GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest**](GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest.md)|  | [optional] 

### Return type

[**GoogleCloudRecaptchaenterpriseV1Key**](GoogleCloudRecaptchaenterpriseV1Key.md)

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

# **recaptchaenterprise_projects_keys_patch**
> GoogleCloudRecaptchaenterpriseV1Key recaptchaenterprise_projects_keys_patch(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, google_cloud_recaptchaenterprise_v1_key=google_cloud_recaptchaenterprise_v1_key)



Updates the specified key.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_recaptchaenterprise_v1_key import GoogleCloudRecaptchaenterpriseV1Key
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://recaptchaenterprise.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://recaptchaenterprise.googleapis.com"
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
    name = 'name_example' # str | Identifier. The resource name for the Key in the format `projects/{project}/keys/{key}`.
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
    update_mask = 'update_mask_example' # str | Optional. The mask to control which fields of the key get updated. If the mask is not present, all fields will be updated. (optional)
    google_cloud_recaptchaenterprise_v1_key = openapi_client.GoogleCloudRecaptchaenterpriseV1Key() # GoogleCloudRecaptchaenterpriseV1Key |  (optional)

    try:
        api_response = api_instance.recaptchaenterprise_projects_keys_patch(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, google_cloud_recaptchaenterprise_v1_key=google_cloud_recaptchaenterprise_v1_key)
        print("The response of ProjectsApi->recaptchaenterprise_projects_keys_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->recaptchaenterprise_projects_keys_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Identifier. The resource name for the Key in the format &#x60;projects/{project}/keys/{key}&#x60;. | 
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
 **update_mask** | **str**| Optional. The mask to control which fields of the key get updated. If the mask is not present, all fields will be updated. | [optional] 
 **google_cloud_recaptchaenterprise_v1_key** | [**GoogleCloudRecaptchaenterpriseV1Key**](GoogleCloudRecaptchaenterpriseV1Key.md)|  | [optional] 

### Return type

[**GoogleCloudRecaptchaenterpriseV1Key**](GoogleCloudRecaptchaenterpriseV1Key.md)

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

# **recaptchaenterprise_projects_keys_retrieve_legacy_secret_key**
> GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse recaptchaenterprise_projects_keys_retrieve_legacy_secret_key(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, key=key)



Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_recaptchaenterprise_v1_retrieve_legacy_secret_key_response import GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://recaptchaenterprise.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://recaptchaenterprise.googleapis.com"
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
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)

    try:
        api_response = api_instance.recaptchaenterprise_projects_keys_retrieve_legacy_secret_key(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, key=key)
        print("The response of ProjectsApi->recaptchaenterprise_projects_keys_retrieve_legacy_secret_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->recaptchaenterprise_projects_keys_retrieve_legacy_secret_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 

### Return type

[**GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse**](GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse.md)

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

# **recaptchaenterprise_projects_relatedaccountgroupmemberships_search**
> GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse recaptchaenterprise_projects_relatedaccountgroupmemberships_search(project, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_recaptchaenterprise_v1_search_related_account_group_memberships_request=google_cloud_recaptchaenterprise_v1_search_related_account_group_memberships_request)



Search group memberships related to a given account.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_recaptchaenterprise_v1_search_related_account_group_memberships_request import GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest
from openapi_client.models.google_cloud_recaptchaenterprise_v1_search_related_account_group_memberships_response import GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://recaptchaenterprise.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://recaptchaenterprise.googleapis.com"
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
    project = 'project_example' # str | Required. The name of the project to search related account group memberships from. Specify the project name in the following format: `projects/{project}`.
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
    google_cloud_recaptchaenterprise_v1_search_related_account_group_memberships_request = openapi_client.GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest() # GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest |  (optional)

    try:
        api_response = api_instance.recaptchaenterprise_projects_relatedaccountgroupmemberships_search(project, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_recaptchaenterprise_v1_search_related_account_group_memberships_request=google_cloud_recaptchaenterprise_v1_search_related_account_group_memberships_request)
        print("The response of ProjectsApi->recaptchaenterprise_projects_relatedaccountgroupmemberships_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->recaptchaenterprise_projects_relatedaccountgroupmemberships_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| Required. The name of the project to search related account group memberships from. Specify the project name in the following format: &#x60;projects/{project}&#x60;. | 
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
 **google_cloud_recaptchaenterprise_v1_search_related_account_group_memberships_request** | [**GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest**](GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest.md)|  | [optional] 

### Return type

[**GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse**](GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse.md)

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

# **recaptchaenterprise_projects_relatedaccountgroups_list**
> GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse recaptchaenterprise_projects_relatedaccountgroups_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



List groups of related accounts.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_recaptchaenterprise_v1_list_related_account_groups_response import GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://recaptchaenterprise.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://recaptchaenterprise.googleapis.com"
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
    parent = 'parent_example' # str | Required. The name of the project to list related account groups from, in the format `projects/{project}`.
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
    page_size = 56 # int | Optional. The maximum number of groups to return. The service might return fewer than this value. If unspecified, at most 50 groups are returned. The maximum value is 1000; values above 1000 are coerced to 1000. (optional)
    page_token = 'page_token_example' # str | Optional. A page token, received from a previous `ListRelatedAccountGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRelatedAccountGroups` must match the call that provided the page token. (optional)

    try:
        api_response = api_instance.recaptchaenterprise_projects_relatedaccountgroups_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->recaptchaenterprise_projects_relatedaccountgroups_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->recaptchaenterprise_projects_relatedaccountgroups_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The name of the project to list related account groups from, in the format &#x60;projects/{project}&#x60;. | 
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
 **page_size** | **int**| Optional. The maximum number of groups to return. The service might return fewer than this value. If unspecified, at most 50 groups are returned. The maximum value is 1000; values above 1000 are coerced to 1000. | [optional] 
 **page_token** | **str**| Optional. A page token, received from a previous &#x60;ListRelatedAccountGroups&#x60; call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to &#x60;ListRelatedAccountGroups&#x60; must match the call that provided the page token. | [optional] 

### Return type

[**GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse**](GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse.md)

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

# **recaptchaenterprise_projects_relatedaccountgroups_memberships_list**
> GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse recaptchaenterprise_projects_relatedaccountgroups_memberships_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



Get memberships in a group of related accounts.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_recaptchaenterprise_v1_list_related_account_group_memberships_response import GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://recaptchaenterprise.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://recaptchaenterprise.googleapis.com"
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
    parent = 'parent_example' # str | Required. The resource name for the related account group in the format `projects/{project}/relatedaccountgroups/{relatedaccountgroup}`.
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
    page_size = 56 # int | Optional. The maximum number of accounts to return. The service might return fewer than this value. If unspecified, at most 50 accounts are returned. The maximum value is 1000; values above 1000 are coerced to 1000. (optional)
    page_token = 'page_token_example' # str | Optional. A page token, received from a previous `ListRelatedAccountGroupMemberships` call. When paginating, all other parameters provided to `ListRelatedAccountGroupMemberships` must match the call that provided the page token. (optional)

    try:
        api_response = api_instance.recaptchaenterprise_projects_relatedaccountgroups_memberships_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->recaptchaenterprise_projects_relatedaccountgroups_memberships_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->recaptchaenterprise_projects_relatedaccountgroups_memberships_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The resource name for the related account group in the format &#x60;projects/{project}/relatedaccountgroups/{relatedaccountgroup}&#x60;. | 
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
 **page_size** | **int**| Optional. The maximum number of accounts to return. The service might return fewer than this value. If unspecified, at most 50 accounts are returned. The maximum value is 1000; values above 1000 are coerced to 1000. | [optional] 
 **page_token** | **str**| Optional. A page token, received from a previous &#x60;ListRelatedAccountGroupMemberships&#x60; call. When paginating, all other parameters provided to &#x60;ListRelatedAccountGroupMemberships&#x60; must match the call that provided the page token. | [optional] 

### Return type

[**GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse**](GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse.md)

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

