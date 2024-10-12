# openapi_client.OrganizationsApi

All URIs are relative to *https://beyondcorp.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**beyondcorp_organizations_locations_global_partner_tenants_browser_dlp_rules_create**](OrganizationsApi.md#beyondcorp_organizations_locations_global_partner_tenants_browser_dlp_rules_create) | **POST** /v1alpha/{parent}/browserDlpRules | 
[**beyondcorp_organizations_locations_global_partner_tenants_browser_dlp_rules_list**](OrganizationsApi.md#beyondcorp_organizations_locations_global_partner_tenants_browser_dlp_rules_list) | **GET** /v1alpha/{parent}/browserDlpRules | 
[**beyondcorp_organizations_locations_global_partner_tenants_create**](OrganizationsApi.md#beyondcorp_organizations_locations_global_partner_tenants_create) | **POST** /v1alpha/{parent}/partnerTenants | 
[**beyondcorp_organizations_locations_global_partner_tenants_list**](OrganizationsApi.md#beyondcorp_organizations_locations_global_partner_tenants_list) | **GET** /v1alpha/{parent}/partnerTenants | 
[**beyondcorp_organizations_locations_global_partner_tenants_proxy_configs_create**](OrganizationsApi.md#beyondcorp_organizations_locations_global_partner_tenants_proxy_configs_create) | **POST** /v1alpha/{parent}/proxyConfigs | 
[**beyondcorp_organizations_locations_global_partner_tenants_proxy_configs_list**](OrganizationsApi.md#beyondcorp_organizations_locations_global_partner_tenants_proxy_configs_list) | **GET** /v1alpha/{parent}/proxyConfigs | 
[**beyondcorp_organizations_locations_subscriptions_create**](OrganizationsApi.md#beyondcorp_organizations_locations_subscriptions_create) | **POST** /v1alpha/{parent}/subscriptions | 
[**beyondcorp_organizations_locations_subscriptions_list**](OrganizationsApi.md#beyondcorp_organizations_locations_subscriptions_list) | **GET** /v1alpha/{parent}/subscriptions | 


# **beyondcorp_organizations_locations_global_partner_tenants_browser_dlp_rules_create**
> GoogleLongrunningOperation beyondcorp_organizations_locations_global_partner_tenants_browser_dlp_rules_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, request_id=request_id, google_cloud_beyondcorp_partnerservices_v1alpha_browser_dlp_rule=google_cloud_beyondcorp_partnerservices_v1alpha_browser_dlp_rule)



Creates a new BrowserDlpRule in a given organization and PartnerTenant.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_beyondcorp_partnerservices_v1alpha_browser_dlp_rule import GoogleCloudBeyondcorpPartnerservicesV1alphaBrowserDlpRule
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://beyondcorp.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://beyondcorp.googleapis.com"
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
    parent = 'parent_example' # str | Required. The resource name of the BrowserDlpRule parent using the form: `organizations/{organization_id}/locations/global/partnerTenants/{partner_tenant_id}`
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
    request_id = 'request_id_example' # str | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). (optional)
    google_cloud_beyondcorp_partnerservices_v1alpha_browser_dlp_rule = openapi_client.GoogleCloudBeyondcorpPartnerservicesV1alphaBrowserDlpRule() # GoogleCloudBeyondcorpPartnerservicesV1alphaBrowserDlpRule |  (optional)

    try:
        api_response = api_instance.beyondcorp_organizations_locations_global_partner_tenants_browser_dlp_rules_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, request_id=request_id, google_cloud_beyondcorp_partnerservices_v1alpha_browser_dlp_rule=google_cloud_beyondcorp_partnerservices_v1alpha_browser_dlp_rule)
        print("The response of OrganizationsApi->beyondcorp_organizations_locations_global_partner_tenants_browser_dlp_rules_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->beyondcorp_organizations_locations_global_partner_tenants_browser_dlp_rules_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The resource name of the BrowserDlpRule parent using the form: &#x60;organizations/{organization_id}/locations/global/partnerTenants/{partner_tenant_id}&#x60; | 
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
 **request_id** | **str**| Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). | [optional] 
 **google_cloud_beyondcorp_partnerservices_v1alpha_browser_dlp_rule** | [**GoogleCloudBeyondcorpPartnerservicesV1alphaBrowserDlpRule**](GoogleCloudBeyondcorpPartnerservicesV1alphaBrowserDlpRule.md)|  | [optional] 

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

# **beyondcorp_organizations_locations_global_partner_tenants_browser_dlp_rules_list**
> GoogleCloudBeyondcorpPartnerservicesV1alphaListBrowserDlpRulesResponse beyondcorp_organizations_locations_global_partner_tenants_browser_dlp_rules_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Lists BrowserDlpRules for PartnerTenant in a given organization.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_beyondcorp_partnerservices_v1alpha_list_browser_dlp_rules_response import GoogleCloudBeyondcorpPartnerservicesV1alphaListBrowserDlpRulesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://beyondcorp.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://beyondcorp.googleapis.com"
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
    parent = 'parent_example' # str | Required. The parent partnerTenant to which the BrowserDlpRules belong. Format: `organizations/{organization_id}/locations/global/partnerTenants/{partner_tenant_id}`
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
        api_response = api_instance.beyondcorp_organizations_locations_global_partner_tenants_browser_dlp_rules_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of OrganizationsApi->beyondcorp_organizations_locations_global_partner_tenants_browser_dlp_rules_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->beyondcorp_organizations_locations_global_partner_tenants_browser_dlp_rules_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent partnerTenant to which the BrowserDlpRules belong. Format: &#x60;organizations/{organization_id}/locations/global/partnerTenants/{partner_tenant_id}&#x60; | 
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

[**GoogleCloudBeyondcorpPartnerservicesV1alphaListBrowserDlpRulesResponse**](GoogleCloudBeyondcorpPartnerservicesV1alphaListBrowserDlpRulesResponse.md)

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

# **beyondcorp_organizations_locations_global_partner_tenants_create**
> GoogleLongrunningOperation beyondcorp_organizations_locations_global_partner_tenants_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, request_id=request_id, google_cloud_beyondcorp_partnerservices_v1alpha_partner_tenant=google_cloud_beyondcorp_partnerservices_v1alpha_partner_tenant)



Creates a new BeyondCorp Enterprise partnerTenant in a given organization and can only be called by onboarded BeyondCorp Enterprise partner.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_beyondcorp_partnerservices_v1alpha_partner_tenant import GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerTenant
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://beyondcorp.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://beyondcorp.googleapis.com"
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
    parent = 'parent_example' # str | Required. The resource name of the parent organization using the form: `organizations/{organization_id}/locations/global`
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
    request_id = 'request_id_example' # str | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). (optional)
    google_cloud_beyondcorp_partnerservices_v1alpha_partner_tenant = openapi_client.GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerTenant() # GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerTenant |  (optional)

    try:
        api_response = api_instance.beyondcorp_organizations_locations_global_partner_tenants_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, request_id=request_id, google_cloud_beyondcorp_partnerservices_v1alpha_partner_tenant=google_cloud_beyondcorp_partnerservices_v1alpha_partner_tenant)
        print("The response of OrganizationsApi->beyondcorp_organizations_locations_global_partner_tenants_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->beyondcorp_organizations_locations_global_partner_tenants_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The resource name of the parent organization using the form: &#x60;organizations/{organization_id}/locations/global&#x60; | 
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
 **request_id** | **str**| Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). | [optional] 
 **google_cloud_beyondcorp_partnerservices_v1alpha_partner_tenant** | [**GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerTenant**](GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerTenant.md)|  | [optional] 

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

# **beyondcorp_organizations_locations_global_partner_tenants_list**
> GoogleCloudBeyondcorpPartnerservicesV1alphaListPartnerTenantsResponse beyondcorp_organizations_locations_global_partner_tenants_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)



Lists PartnerTenants in a given organization.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_beyondcorp_partnerservices_v1alpha_list_partner_tenants_response import GoogleCloudBeyondcorpPartnerservicesV1alphaListPartnerTenantsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://beyondcorp.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://beyondcorp.googleapis.com"
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
    parent = 'parent_example' # str | Required. The parent organization to which the PartnerTenants belong. Format: `organizations/{organization_id}/locations/global`
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
    filter = 'filter_example' # str | Optional. A filter specifying constraints of a list operation. All fields in the PartnerTenant message are supported. For example, the following query will return the PartnerTenants with displayName \"test-tenant\" organizations/${ORG_ID}/locations/${LOCATION}/partnerTenants?filter=displayName=\"test-tenant\" Nested fields are also supported. The follow query will return PartnerTenants with internal_tenant_id \"1234\" organizations/${ORG_ID}/locations/${LOCATION}/partnerTenants?filter=partnerMetadata.internalTenantId=\"1234\" For more information, please refer to https://google.aip.dev/160. (optional)
    order_by = 'order_by_example' # str | Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information. (optional)
    page_size = 56 # int | Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried. (optional)
    page_token = 'page_token_example' # str | Optional. The next_page_token value returned from a previous ListPartnerTenantsResponse, if any. (optional)

    try:
        api_response = api_instance.beyondcorp_organizations_locations_global_partner_tenants_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of OrganizationsApi->beyondcorp_organizations_locations_global_partner_tenants_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->beyondcorp_organizations_locations_global_partner_tenants_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent organization to which the PartnerTenants belong. Format: &#x60;organizations/{organization_id}/locations/global&#x60; | 
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
 **filter** | **str**| Optional. A filter specifying constraints of a list operation. All fields in the PartnerTenant message are supported. For example, the following query will return the PartnerTenants with displayName \&quot;test-tenant\&quot; organizations/${ORG_ID}/locations/${LOCATION}/partnerTenants?filter&#x3D;displayName&#x3D;\&quot;test-tenant\&quot; Nested fields are also supported. The follow query will return PartnerTenants with internal_tenant_id \&quot;1234\&quot; organizations/${ORG_ID}/locations/${LOCATION}/partnerTenants?filter&#x3D;partnerMetadata.internalTenantId&#x3D;\&quot;1234\&quot; For more information, please refer to https://google.aip.dev/160. | [optional] 
 **order_by** | **str**| Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information. | [optional] 
 **page_size** | **int**| Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response&#39;s next_page_token to determine if there are more instances left to be queried. | [optional] 
 **page_token** | **str**| Optional. The next_page_token value returned from a previous ListPartnerTenantsResponse, if any. | [optional] 

### Return type

[**GoogleCloudBeyondcorpPartnerservicesV1alphaListPartnerTenantsResponse**](GoogleCloudBeyondcorpPartnerservicesV1alphaListPartnerTenantsResponse.md)

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

# **beyondcorp_organizations_locations_global_partner_tenants_proxy_configs_create**
> GoogleLongrunningOperation beyondcorp_organizations_locations_global_partner_tenants_proxy_configs_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, request_id=request_id, google_cloud_beyondcorp_partnerservices_v1alpha_proxy_config=google_cloud_beyondcorp_partnerservices_v1alpha_proxy_config)



Creates a new BeyondCorp Enterprise ProxyConfig in a given organization and PartnerTenant. Can only be called by on onboarded Beyondcorp Enterprise partner.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_beyondcorp_partnerservices_v1alpha_proxy_config import GoogleCloudBeyondcorpPartnerservicesV1alphaProxyConfig
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://beyondcorp.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://beyondcorp.googleapis.com"
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
    parent = 'parent_example' # str | Required. The resource name of the parent PartnerTenant using the form: `organizations/{organization_id}/locations/global/partnerTenants/{partner_tenant_id}`
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
    request_id = 'request_id_example' # str | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). (optional)
    google_cloud_beyondcorp_partnerservices_v1alpha_proxy_config = openapi_client.GoogleCloudBeyondcorpPartnerservicesV1alphaProxyConfig() # GoogleCloudBeyondcorpPartnerservicesV1alphaProxyConfig |  (optional)

    try:
        api_response = api_instance.beyondcorp_organizations_locations_global_partner_tenants_proxy_configs_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, request_id=request_id, google_cloud_beyondcorp_partnerservices_v1alpha_proxy_config=google_cloud_beyondcorp_partnerservices_v1alpha_proxy_config)
        print("The response of OrganizationsApi->beyondcorp_organizations_locations_global_partner_tenants_proxy_configs_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->beyondcorp_organizations_locations_global_partner_tenants_proxy_configs_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The resource name of the parent PartnerTenant using the form: &#x60;organizations/{organization_id}/locations/global/partnerTenants/{partner_tenant_id}&#x60; | 
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
 **request_id** | **str**| Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). | [optional] 
 **google_cloud_beyondcorp_partnerservices_v1alpha_proxy_config** | [**GoogleCloudBeyondcorpPartnerservicesV1alphaProxyConfig**](GoogleCloudBeyondcorpPartnerservicesV1alphaProxyConfig.md)|  | [optional] 

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

# **beyondcorp_organizations_locations_global_partner_tenants_proxy_configs_list**
> GoogleCloudBeyondcorpPartnerservicesV1alphaListProxyConfigsResponse beyondcorp_organizations_locations_global_partner_tenants_proxy_configs_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)



Lists ProxyConfigs for PartnerTenant in a given organization.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_beyondcorp_partnerservices_v1alpha_list_proxy_configs_response import GoogleCloudBeyondcorpPartnerservicesV1alphaListProxyConfigsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://beyondcorp.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://beyondcorp.googleapis.com"
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
    parent = 'parent_example' # str | Required. The parent organization to which the ProxyConfigs belong. Format: `organizations/{organization_id}/locations/global/partnerTenants/{partner_tenant_id}`
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
    filter = 'filter_example' # str | Optional. A filter specifying constraints of a list operation. All fields in the ProxyConfig message are supported. For example, the following query will return the ProxyConfigs with displayName \"test-config\" organizations/${ORG_ID}/locations/global/partnerTenants/${PARTNER_TENANT_ID}/proxyConfigs?filter=displayName=\"test-config\" Nested fields are also supported. The follow query will return ProxyConfigs with pacUri \"example.com/pac.pac\" organizations/${ORG_ID}/locations/global/partnerTenants/${PARTNER_TENANT_ID}/proxyConfigs?filter=routingInfo.pacUri=\"example.com/pac.pac\" For more information, please refer to https://google.aip.dev/160. (optional)
    order_by = 'order_by_example' # str | Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information. (optional)
    page_size = 56 # int | Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried. (optional)
    page_token = 'page_token_example' # str | Optional. The next_page_token value returned from a previous ListProxyConfigsRequest, if any. (optional)

    try:
        api_response = api_instance.beyondcorp_organizations_locations_global_partner_tenants_proxy_configs_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of OrganizationsApi->beyondcorp_organizations_locations_global_partner_tenants_proxy_configs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->beyondcorp_organizations_locations_global_partner_tenants_proxy_configs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent organization to which the ProxyConfigs belong. Format: &#x60;organizations/{organization_id}/locations/global/partnerTenants/{partner_tenant_id}&#x60; | 
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
 **filter** | **str**| Optional. A filter specifying constraints of a list operation. All fields in the ProxyConfig message are supported. For example, the following query will return the ProxyConfigs with displayName \&quot;test-config\&quot; organizations/${ORG_ID}/locations/global/partnerTenants/${PARTNER_TENANT_ID}/proxyConfigs?filter&#x3D;displayName&#x3D;\&quot;test-config\&quot; Nested fields are also supported. The follow query will return ProxyConfigs with pacUri \&quot;example.com/pac.pac\&quot; organizations/${ORG_ID}/locations/global/partnerTenants/${PARTNER_TENANT_ID}/proxyConfigs?filter&#x3D;routingInfo.pacUri&#x3D;\&quot;example.com/pac.pac\&quot; For more information, please refer to https://google.aip.dev/160. | [optional] 
 **order_by** | **str**| Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information. | [optional] 
 **page_size** | **int**| Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response&#39;s next_page_token to determine if there are more instances left to be queried. | [optional] 
 **page_token** | **str**| Optional. The next_page_token value returned from a previous ListProxyConfigsRequest, if any. | [optional] 

### Return type

[**GoogleCloudBeyondcorpPartnerservicesV1alphaListProxyConfigsResponse**](GoogleCloudBeyondcorpPartnerservicesV1alphaListProxyConfigsResponse.md)

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

# **beyondcorp_organizations_locations_subscriptions_create**
> GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription beyondcorp_organizations_locations_subscriptions_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_beyondcorp_saasplatform_subscriptions_v1alpha_subscription=google_cloud_beyondcorp_saasplatform_subscriptions_v1alpha_subscription)



Creates a new BeyondCorp Enterprise Subscription in a given organization. Location will always be global as BeyondCorp subscriptions are per organization.

### Example


```python
import openapi_client
from openapi_client.models.google_cloud_beyondcorp_saasplatform_subscriptions_v1alpha_subscription import GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://beyondcorp.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://beyondcorp.googleapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    parent = 'parent_example' # str | Required. The resource name of the subscription location using the form: `organizations/{organization_id}/locations/{location}`
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
    google_cloud_beyondcorp_saasplatform_subscriptions_v1alpha_subscription = openapi_client.GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription() # GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription |  (optional)

    try:
        api_response = api_instance.beyondcorp_organizations_locations_subscriptions_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_beyondcorp_saasplatform_subscriptions_v1alpha_subscription=google_cloud_beyondcorp_saasplatform_subscriptions_v1alpha_subscription)
        print("The response of OrganizationsApi->beyondcorp_organizations_locations_subscriptions_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->beyondcorp_organizations_locations_subscriptions_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The resource name of the subscription location using the form: &#x60;organizations/{organization_id}/locations/{location}&#x60; | 
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
 **google_cloud_beyondcorp_saasplatform_subscriptions_v1alpha_subscription** | [**GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription**](GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription.md)|  | [optional] 

### Return type

[**GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription**](GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription.md)

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

# **beyondcorp_organizations_locations_subscriptions_list**
> GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse beyondcorp_organizations_locations_subscriptions_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



Lists Subscriptions in a given organization and location.

### Example


```python
import openapi_client
from openapi_client.models.google_cloud_beyondcorp_saasplatform_subscriptions_v1alpha_list_subscriptions_response import GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://beyondcorp.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://beyondcorp.googleapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    parent = 'parent_example' # str | Required. The resource name of Subscription using the form: `organizations/{organization_id}/locations/{location}`
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
    page_size = 56 # int | Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried. (optional)
    page_token = 'page_token_example' # str | Optional. The next_page_token value returned from a previous ListSubscriptionsRequest, if any. (optional)

    try:
        api_response = api_instance.beyondcorp_organizations_locations_subscriptions_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of OrganizationsApi->beyondcorp_organizations_locations_subscriptions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->beyondcorp_organizations_locations_subscriptions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The resource name of Subscription using the form: &#x60;organizations/{organization_id}/locations/{location}&#x60; | 
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
 **page_size** | **int**| Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response&#39;s next_page_token to determine if there are more instances left to be queried. | [optional] 
 **page_token** | **str**| Optional. The next_page_token value returned from a previous ListSubscriptionsRequest, if any. | [optional] 

### Return type

[**GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse**](GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

