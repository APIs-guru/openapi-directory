# openapi_client.ProjectsApi

All URIs are relative to *https://retail.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retail_projects_enroll_solution**](ProjectsApi.md#retail_projects_enroll_solution) | **POST** /v2alpha/{project}:enrollSolution | 
[**retail_projects_list_enrolled_solutions**](ProjectsApi.md#retail_projects_list_enrolled_solutions) | **GET** /v2alpha/{parent}:enrolledSolutions | 
[**retail_projects_locations_catalogs_attributes_config_add_catalog_attribute**](ProjectsApi.md#retail_projects_locations_catalogs_attributes_config_add_catalog_attribute) | **POST** /v2alpha/{attributesConfig}:addCatalogAttribute | 
[**retail_projects_locations_catalogs_attributes_config_batch_remove_catalog_attributes**](ProjectsApi.md#retail_projects_locations_catalogs_attributes_config_batch_remove_catalog_attributes) | **POST** /v2alpha/{attributesConfig}:batchRemoveCatalogAttributes | 
[**retail_projects_locations_catalogs_attributes_config_remove_catalog_attribute**](ProjectsApi.md#retail_projects_locations_catalogs_attributes_config_remove_catalog_attribute) | **POST** /v2alpha/{attributesConfig}:removeCatalogAttribute | 
[**retail_projects_locations_catalogs_attributes_config_replace_catalog_attribute**](ProjectsApi.md#retail_projects_locations_catalogs_attributes_config_replace_catalog_attribute) | **POST** /v2alpha/{attributesConfig}:replaceCatalogAttribute | 
[**retail_projects_locations_catalogs_branches_products_add_fulfillment_places**](ProjectsApi.md#retail_projects_locations_catalogs_branches_products_add_fulfillment_places) | **POST** /v2alpha/{product}:addFulfillmentPlaces | 
[**retail_projects_locations_catalogs_branches_products_add_local_inventories**](ProjectsApi.md#retail_projects_locations_catalogs_branches_products_add_local_inventories) | **POST** /v2alpha/{product}:addLocalInventories | 
[**retail_projects_locations_catalogs_branches_products_create**](ProjectsApi.md#retail_projects_locations_catalogs_branches_products_create) | **POST** /v2alpha/{parent}/products | 
[**retail_projects_locations_catalogs_branches_products_import**](ProjectsApi.md#retail_projects_locations_catalogs_branches_products_import) | **POST** /v2alpha/{parent}/products:import | 
[**retail_projects_locations_catalogs_branches_products_list**](ProjectsApi.md#retail_projects_locations_catalogs_branches_products_list) | **GET** /v2alpha/{parent}/products | 
[**retail_projects_locations_catalogs_branches_products_purge**](ProjectsApi.md#retail_projects_locations_catalogs_branches_products_purge) | **POST** /v2alpha/{parent}/products:purge | 
[**retail_projects_locations_catalogs_branches_products_remove_fulfillment_places**](ProjectsApi.md#retail_projects_locations_catalogs_branches_products_remove_fulfillment_places) | **POST** /v2alpha/{product}:removeFulfillmentPlaces | 
[**retail_projects_locations_catalogs_branches_products_remove_local_inventories**](ProjectsApi.md#retail_projects_locations_catalogs_branches_products_remove_local_inventories) | **POST** /v2alpha/{product}:removeLocalInventories | 
[**retail_projects_locations_catalogs_branches_products_set_inventory**](ProjectsApi.md#retail_projects_locations_catalogs_branches_products_set_inventory) | **POST** /v2alpha/{name}:setInventory | 
[**retail_projects_locations_catalogs_complete_query**](ProjectsApi.md#retail_projects_locations_catalogs_complete_query) | **GET** /v2alpha/{catalog}:completeQuery | 
[**retail_projects_locations_catalogs_completion_data_import**](ProjectsApi.md#retail_projects_locations_catalogs_completion_data_import) | **POST** /v2alpha/{parent}/completionData:import | 
[**retail_projects_locations_catalogs_controls_create**](ProjectsApi.md#retail_projects_locations_catalogs_controls_create) | **POST** /v2alpha/{parent}/controls | 
[**retail_projects_locations_catalogs_controls_list**](ProjectsApi.md#retail_projects_locations_catalogs_controls_list) | **GET** /v2alpha/{parent}/controls | 
[**retail_projects_locations_catalogs_export_analytics_metrics**](ProjectsApi.md#retail_projects_locations_catalogs_export_analytics_metrics) | **POST** /v2alpha/{catalog}:exportAnalyticsMetrics | 
[**retail_projects_locations_catalogs_get_default_branch**](ProjectsApi.md#retail_projects_locations_catalogs_get_default_branch) | **GET** /v2alpha/{catalog}:getDefaultBranch | 
[**retail_projects_locations_catalogs_list**](ProjectsApi.md#retail_projects_locations_catalogs_list) | **GET** /v2alpha/{parent}/catalogs | 
[**retail_projects_locations_catalogs_merchant_center_account_links_create**](ProjectsApi.md#retail_projects_locations_catalogs_merchant_center_account_links_create) | **POST** /v2alpha/{parent}/merchantCenterAccountLinks | 
[**retail_projects_locations_catalogs_merchant_center_account_links_list**](ProjectsApi.md#retail_projects_locations_catalogs_merchant_center_account_links_list) | **GET** /v2alpha/{parent}/merchantCenterAccountLinks | 
[**retail_projects_locations_catalogs_models_create**](ProjectsApi.md#retail_projects_locations_catalogs_models_create) | **POST** /v2alpha/{parent}/models | 
[**retail_projects_locations_catalogs_models_list**](ProjectsApi.md#retail_projects_locations_catalogs_models_list) | **GET** /v2alpha/{parent}/models | 
[**retail_projects_locations_catalogs_models_pause**](ProjectsApi.md#retail_projects_locations_catalogs_models_pause) | **POST** /v2alpha/{name}:pause | 
[**retail_projects_locations_catalogs_models_resume**](ProjectsApi.md#retail_projects_locations_catalogs_models_resume) | **POST** /v2alpha/{name}:resume | 
[**retail_projects_locations_catalogs_models_tune**](ProjectsApi.md#retail_projects_locations_catalogs_models_tune) | **POST** /v2alpha/{name}:tune | 
[**retail_projects_locations_catalogs_serving_configs_add_control**](ProjectsApi.md#retail_projects_locations_catalogs_serving_configs_add_control) | **POST** /v2alpha/{servingConfig}:addControl | 
[**retail_projects_locations_catalogs_serving_configs_create**](ProjectsApi.md#retail_projects_locations_catalogs_serving_configs_create) | **POST** /v2alpha/{parent}/servingConfigs | 
[**retail_projects_locations_catalogs_serving_configs_delete**](ProjectsApi.md#retail_projects_locations_catalogs_serving_configs_delete) | **DELETE** /v2alpha/{name} | 
[**retail_projects_locations_catalogs_serving_configs_list**](ProjectsApi.md#retail_projects_locations_catalogs_serving_configs_list) | **GET** /v2alpha/{parent}/servingConfigs | 
[**retail_projects_locations_catalogs_serving_configs_patch**](ProjectsApi.md#retail_projects_locations_catalogs_serving_configs_patch) | **PATCH** /v2alpha/{name} | 
[**retail_projects_locations_catalogs_serving_configs_predict**](ProjectsApi.md#retail_projects_locations_catalogs_serving_configs_predict) | **POST** /v2alpha/{placement}:predict | 
[**retail_projects_locations_catalogs_serving_configs_remove_control**](ProjectsApi.md#retail_projects_locations_catalogs_serving_configs_remove_control) | **POST** /v2alpha/{servingConfig}:removeControl | 
[**retail_projects_locations_catalogs_serving_configs_search**](ProjectsApi.md#retail_projects_locations_catalogs_serving_configs_search) | **POST** /v2alpha/{placement}:search | 
[**retail_projects_locations_catalogs_set_default_branch**](ProjectsApi.md#retail_projects_locations_catalogs_set_default_branch) | **POST** /v2alpha/{catalog}:setDefaultBranch | 
[**retail_projects_locations_catalogs_user_events_collect**](ProjectsApi.md#retail_projects_locations_catalogs_user_events_collect) | **GET** /v2alpha/{parent}/userEvents:collect | 
[**retail_projects_locations_catalogs_user_events_import**](ProjectsApi.md#retail_projects_locations_catalogs_user_events_import) | **POST** /v2alpha/{parent}/userEvents:import | 
[**retail_projects_locations_catalogs_user_events_purge**](ProjectsApi.md#retail_projects_locations_catalogs_user_events_purge) | **POST** /v2alpha/{parent}/userEvents:purge | 
[**retail_projects_locations_catalogs_user_events_rejoin**](ProjectsApi.md#retail_projects_locations_catalogs_user_events_rejoin) | **POST** /v2alpha/{parent}/userEvents:rejoin | 
[**retail_projects_locations_catalogs_user_events_write**](ProjectsApi.md#retail_projects_locations_catalogs_user_events_write) | **POST** /v2alpha/{parent}/userEvents:write | 
[**retail_projects_operations_get**](ProjectsApi.md#retail_projects_operations_get) | **GET** /v2alpha/{name} | 
[**retail_projects_operations_list**](ProjectsApi.md#retail_projects_operations_list) | **GET** /v2alpha/{name}/operations | 
[**retail_projects_retail_project_accept_terms**](ProjectsApi.md#retail_projects_retail_project_accept_terms) | **POST** /v2alpha/{project}:acceptTerms | 


# **retail_projects_enroll_solution**
> GoogleLongrunningOperation retail_projects_enroll_solution(project, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_enroll_solution_request=google_cloud_retail_v2alpha_enroll_solution_request)



The method enrolls a solution of type Retail Search into a project. The Recommendations AI solution type is enrolled by default when your project enables Retail API, so you don't need to call the enrollSolution method for recommendations.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_enroll_solution_request import GoogleCloudRetailV2alphaEnrollSolutionRequest
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    project = 'project_example' # str | Required. Full resource name of parent. Format: `projects/{project_number_or_id}`
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
    google_cloud_retail_v2alpha_enroll_solution_request = openapi_client.GoogleCloudRetailV2alphaEnrollSolutionRequest() # GoogleCloudRetailV2alphaEnrollSolutionRequest |  (optional)

    try:
        api_response = api_instance.retail_projects_enroll_solution(project, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_enroll_solution_request=google_cloud_retail_v2alpha_enroll_solution_request)
        print("The response of ProjectsApi->retail_projects_enroll_solution:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_enroll_solution: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| Required. Full resource name of parent. Format: &#x60;projects/{project_number_or_id}&#x60; | 
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
 **google_cloud_retail_v2alpha_enroll_solution_request** | [**GoogleCloudRetailV2alphaEnrollSolutionRequest**](GoogleCloudRetailV2alphaEnrollSolutionRequest.md)|  | [optional] 

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

# **retail_projects_list_enrolled_solutions**
> GoogleCloudRetailV2alphaListEnrolledSolutionsResponse retail_projects_list_enrolled_solutions(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Lists all the retail API solutions the project has enrolled.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_list_enrolled_solutions_response import GoogleCloudRetailV2alphaListEnrolledSolutionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    parent = 'parent_example' # str | Required. Full resource name of parent. Format: `projects/{project_number_or_id}`
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
        api_response = api_instance.retail_projects_list_enrolled_solutions(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of ProjectsApi->retail_projects_list_enrolled_solutions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_list_enrolled_solutions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. Full resource name of parent. Format: &#x60;projects/{project_number_or_id}&#x60; | 
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

[**GoogleCloudRetailV2alphaListEnrolledSolutionsResponse**](GoogleCloudRetailV2alphaListEnrolledSolutionsResponse.md)

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

# **retail_projects_locations_catalogs_attributes_config_add_catalog_attribute**
> GoogleCloudRetailV2alphaAttributesConfig retail_projects_locations_catalogs_attributes_config_add_catalog_attribute(attributes_config, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_add_catalog_attribute_request=google_cloud_retail_v2alpha_add_catalog_attribute_request)



Adds the specified CatalogAttribute to the AttributesConfig. If the CatalogAttribute to add already exists, an ALREADY_EXISTS error is returned.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_add_catalog_attribute_request import GoogleCloudRetailV2alphaAddCatalogAttributeRequest
from openapi_client.models.google_cloud_retail_v2alpha_attributes_config import GoogleCloudRetailV2alphaAttributesConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    attributes_config = 'attributes_config_example' # str | Required. Full AttributesConfig resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig`
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
    google_cloud_retail_v2alpha_add_catalog_attribute_request = openapi_client.GoogleCloudRetailV2alphaAddCatalogAttributeRequest() # GoogleCloudRetailV2alphaAddCatalogAttributeRequest |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_attributes_config_add_catalog_attribute(attributes_config, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_add_catalog_attribute_request=google_cloud_retail_v2alpha_add_catalog_attribute_request)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_attributes_config_add_catalog_attribute:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_attributes_config_add_catalog_attribute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributes_config** | **str**| Required. Full AttributesConfig resource name. Format: &#x60;projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig&#x60; | 
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
 **google_cloud_retail_v2alpha_add_catalog_attribute_request** | [**GoogleCloudRetailV2alphaAddCatalogAttributeRequest**](GoogleCloudRetailV2alphaAddCatalogAttributeRequest.md)|  | [optional] 

### Return type

[**GoogleCloudRetailV2alphaAttributesConfig**](GoogleCloudRetailV2alphaAttributesConfig.md)

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

# **retail_projects_locations_catalogs_attributes_config_batch_remove_catalog_attributes**
> GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesResponse retail_projects_locations_catalogs_attributes_config_batch_remove_catalog_attributes(attributes_config, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_batch_remove_catalog_attributes_request=google_cloud_retail_v2alpha_batch_remove_catalog_attributes_request)



Removes all specified CatalogAttributes from the AttributesConfig.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_batch_remove_catalog_attributes_request import GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesRequest
from openapi_client.models.google_cloud_retail_v2alpha_batch_remove_catalog_attributes_response import GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    attributes_config = 'attributes_config_example' # str | Required. The attributes config resource shared by all catalog attributes being deleted. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig`
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
    google_cloud_retail_v2alpha_batch_remove_catalog_attributes_request = openapi_client.GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesRequest() # GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesRequest |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_attributes_config_batch_remove_catalog_attributes(attributes_config, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_batch_remove_catalog_attributes_request=google_cloud_retail_v2alpha_batch_remove_catalog_attributes_request)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_attributes_config_batch_remove_catalog_attributes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_attributes_config_batch_remove_catalog_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributes_config** | **str**| Required. The attributes config resource shared by all catalog attributes being deleted. Format: &#x60;projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig&#x60; | 
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
 **google_cloud_retail_v2alpha_batch_remove_catalog_attributes_request** | [**GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesRequest**](GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesRequest.md)|  | [optional] 

### Return type

[**GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesResponse**](GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesResponse.md)

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

# **retail_projects_locations_catalogs_attributes_config_remove_catalog_attribute**
> GoogleCloudRetailV2alphaAttributesConfig retail_projects_locations_catalogs_attributes_config_remove_catalog_attribute(attributes_config, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_remove_catalog_attribute_request=google_cloud_retail_v2alpha_remove_catalog_attribute_request)



Removes the specified CatalogAttribute from the AttributesConfig. If the CatalogAttribute to remove does not exist, a NOT_FOUND error is returned.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_attributes_config import GoogleCloudRetailV2alphaAttributesConfig
from openapi_client.models.google_cloud_retail_v2alpha_remove_catalog_attribute_request import GoogleCloudRetailV2alphaRemoveCatalogAttributeRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    attributes_config = 'attributes_config_example' # str | Required. Full AttributesConfig resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig`
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
    google_cloud_retail_v2alpha_remove_catalog_attribute_request = openapi_client.GoogleCloudRetailV2alphaRemoveCatalogAttributeRequest() # GoogleCloudRetailV2alphaRemoveCatalogAttributeRequest |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_attributes_config_remove_catalog_attribute(attributes_config, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_remove_catalog_attribute_request=google_cloud_retail_v2alpha_remove_catalog_attribute_request)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_attributes_config_remove_catalog_attribute:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_attributes_config_remove_catalog_attribute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributes_config** | **str**| Required. Full AttributesConfig resource name. Format: &#x60;projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig&#x60; | 
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
 **google_cloud_retail_v2alpha_remove_catalog_attribute_request** | [**GoogleCloudRetailV2alphaRemoveCatalogAttributeRequest**](GoogleCloudRetailV2alphaRemoveCatalogAttributeRequest.md)|  | [optional] 

### Return type

[**GoogleCloudRetailV2alphaAttributesConfig**](GoogleCloudRetailV2alphaAttributesConfig.md)

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

# **retail_projects_locations_catalogs_attributes_config_replace_catalog_attribute**
> GoogleCloudRetailV2alphaAttributesConfig retail_projects_locations_catalogs_attributes_config_replace_catalog_attribute(attributes_config, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_replace_catalog_attribute_request=google_cloud_retail_v2alpha_replace_catalog_attribute_request)



Replaces the specified CatalogAttribute in the AttributesConfig by updating the catalog attribute with the same CatalogAttribute.key. If the CatalogAttribute to replace does not exist, a NOT_FOUND error is returned.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_attributes_config import GoogleCloudRetailV2alphaAttributesConfig
from openapi_client.models.google_cloud_retail_v2alpha_replace_catalog_attribute_request import GoogleCloudRetailV2alphaReplaceCatalogAttributeRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    attributes_config = 'attributes_config_example' # str | Required. Full AttributesConfig resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig`
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
    google_cloud_retail_v2alpha_replace_catalog_attribute_request = openapi_client.GoogleCloudRetailV2alphaReplaceCatalogAttributeRequest() # GoogleCloudRetailV2alphaReplaceCatalogAttributeRequest |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_attributes_config_replace_catalog_attribute(attributes_config, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_replace_catalog_attribute_request=google_cloud_retail_v2alpha_replace_catalog_attribute_request)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_attributes_config_replace_catalog_attribute:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_attributes_config_replace_catalog_attribute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributes_config** | **str**| Required. Full AttributesConfig resource name. Format: &#x60;projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig&#x60; | 
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
 **google_cloud_retail_v2alpha_replace_catalog_attribute_request** | [**GoogleCloudRetailV2alphaReplaceCatalogAttributeRequest**](GoogleCloudRetailV2alphaReplaceCatalogAttributeRequest.md)|  | [optional] 

### Return type

[**GoogleCloudRetailV2alphaAttributesConfig**](GoogleCloudRetailV2alphaAttributesConfig.md)

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

# **retail_projects_locations_catalogs_branches_products_add_fulfillment_places**
> GoogleLongrunningOperation retail_projects_locations_catalogs_branches_products_add_fulfillment_places(product, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_add_fulfillment_places_request=google_cloud_retail_v2alpha_add_fulfillment_places_request)



We recommend that you use the ProductService.AddLocalInventories method instead of the ProductService.AddFulfillmentPlaces method. ProductService.AddLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally adds place IDs to Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the added place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_add_fulfillment_places_request import GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    product = 'product_example' # str | Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.
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
    google_cloud_retail_v2alpha_add_fulfillment_places_request = openapi_client.GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest() # GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_branches_products_add_fulfillment_places(product, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_add_fulfillment_places_request=google_cloud_retail_v2alpha_add_fulfillment_places_request)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_branches_products_add_fulfillment_places:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_branches_products_add_fulfillment_places: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product** | **str**| Required. Full resource name of Product, such as &#x60;projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id&#x60;. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. | 
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
 **google_cloud_retail_v2alpha_add_fulfillment_places_request** | [**GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest**](GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest.md)|  | [optional] 

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

# **retail_projects_locations_catalogs_branches_products_add_local_inventories**
> GoogleLongrunningOperation retail_projects_locations_catalogs_branches_products_add_local_inventories(product, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_add_local_inventories_request=google_cloud_retail_v2alpha_add_local_inventories_request)



Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating inventory information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be modified using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_add_local_inventories_request import GoogleCloudRetailV2alphaAddLocalInventoriesRequest
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    product = 'product_example' # str | Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.
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
    google_cloud_retail_v2alpha_add_local_inventories_request = openapi_client.GoogleCloudRetailV2alphaAddLocalInventoriesRequest() # GoogleCloudRetailV2alphaAddLocalInventoriesRequest |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_branches_products_add_local_inventories(product, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_add_local_inventories_request=google_cloud_retail_v2alpha_add_local_inventories_request)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_branches_products_add_local_inventories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_branches_products_add_local_inventories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product** | **str**| Required. Full resource name of Product, such as &#x60;projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id&#x60;. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. | 
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
 **google_cloud_retail_v2alpha_add_local_inventories_request** | [**GoogleCloudRetailV2alphaAddLocalInventoriesRequest**](GoogleCloudRetailV2alphaAddLocalInventoriesRequest.md)|  | [optional] 

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

# **retail_projects_locations_catalogs_branches_products_create**
> GoogleCloudRetailV2alphaProduct retail_projects_locations_catalogs_branches_products_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, product_id=product_id, google_cloud_retail_v2alpha_product=google_cloud_retail_v2alpha_product)



Creates a Product.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_product import GoogleCloudRetailV2alphaProduct
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    parent = 'parent_example' # str | Required. The parent catalog resource name, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch`.
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
    product_id = 'product_id_example' # str | Required. The ID to use for the Product, which will become the final component of the Product.name. If the caller does not have permission to create the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. This field must be unique among all Products with the same parent. Otherwise, an ALREADY_EXISTS error is returned. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. (optional)
    google_cloud_retail_v2alpha_product = openapi_client.GoogleCloudRetailV2alphaProduct() # GoogleCloudRetailV2alphaProduct |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_branches_products_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, product_id=product_id, google_cloud_retail_v2alpha_product=google_cloud_retail_v2alpha_product)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_branches_products_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_branches_products_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent catalog resource name, such as &#x60;projects/*/locations/global/catalogs/default_catalog/branches/default_branch&#x60;. | 
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
 **product_id** | **str**| Required. The ID to use for the Product, which will become the final component of the Product.name. If the caller does not have permission to create the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. This field must be unique among all Products with the same parent. Otherwise, an ALREADY_EXISTS error is returned. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 
 **google_cloud_retail_v2alpha_product** | [**GoogleCloudRetailV2alphaProduct**](GoogleCloudRetailV2alphaProduct.md)|  | [optional] 

### Return type

[**GoogleCloudRetailV2alphaProduct**](GoogleCloudRetailV2alphaProduct.md)

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

# **retail_projects_locations_catalogs_branches_products_import**
> GoogleLongrunningOperation retail_projects_locations_catalogs_branches_products_import(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_import_products_request=google_cloud_retail_v2alpha_import_products_request)



Bulk import of multiple Products. Request processing may be synchronous. Non-existing items are created. Note that it is possible for a subset of the Products to be successfully updated.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_import_products_request import GoogleCloudRetailV2alphaImportProductsRequest
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    parent = 'parent_example' # str | Required. `projects/1234/locations/global/catalogs/default_catalog/branches/default_branch` If no updateMask is specified, requires products.create permission. If updateMask is specified, requires products.update permission.
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
    google_cloud_retail_v2alpha_import_products_request = openapi_client.GoogleCloudRetailV2alphaImportProductsRequest() # GoogleCloudRetailV2alphaImportProductsRequest |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_branches_products_import(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_import_products_request=google_cloud_retail_v2alpha_import_products_request)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_branches_products_import:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_branches_products_import: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. &#x60;projects/1234/locations/global/catalogs/default_catalog/branches/default_branch&#x60; If no updateMask is specified, requires products.create permission. If updateMask is specified, requires products.update permission. | 
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
 **google_cloud_retail_v2alpha_import_products_request** | [**GoogleCloudRetailV2alphaImportProductsRequest**](GoogleCloudRetailV2alphaImportProductsRequest.md)|  | [optional] 

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

# **retail_projects_locations_catalogs_branches_products_list**
> GoogleCloudRetailV2alphaListProductsResponse retail_projects_locations_catalogs_branches_products_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token, read_mask=read_mask, require_total_size=require_total_size)



Gets a list of Products.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_list_products_response import GoogleCloudRetailV2alphaListProductsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    parent = 'parent_example' # str | Required. The parent branch resource name, such as `projects/*/locations/global/catalogs/default_catalog/branches/0`. Use `default_branch` as the branch ID, to list products under the default branch. If the caller does not have permission to list Products under this branch, regardless of whether or not this branch exists, a PERMISSION_DENIED error is returned.
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
    filter = 'filter_example' # str | A filter to apply on the list results. Supported features: * List all the products under the parent branch if filter is unset. * List Product.Type.VARIANT Products sharing the same Product.Type.PRIMARY Product. For example: `primary_product_id = \"some_product_id\"` * List Products bundled in a Product.Type.COLLECTION Product. For example: `collection_product_id = \"some_product_id\"` * List Products with a partibular type. For example: `type = \"PRIMARY\"` `type = \"VARIANT\"` `type = \"COLLECTION\"` If the field is unrecognizable, an INVALID_ARGUMENT error is returned. If the specified Product.Type.PRIMARY Product or Product.Type.COLLECTION Product does not exist, a NOT_FOUND error is returned. (optional)
    page_size = 56 # int | Maximum number of Products to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT error is returned. (optional)
    page_token = 'page_token_example' # str | A page token ListProductsResponse.next_page_token, received from a previous ProductService.ListProducts call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ProductService.ListProducts must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned. (optional)
    read_mask = 'read_mask_example' # str | The fields of Product to return in the responses. If not set or empty, the following fields are returned: * Product.name * Product.id * Product.title * Product.uri * Product.images * Product.price_info * Product.brands If \"*\" is provided, all fields are returned. Product.name is always returned no matter what mask is set. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned. (optional)
    require_total_size = True # bool | If true and page_token is empty, ListProductsResponse.total_size is set to the total count of matched items irrespective of pagination. Notice that setting this field to true affects the performance. (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_branches_products_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token, read_mask=read_mask, require_total_size=require_total_size)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_branches_products_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_branches_products_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent branch resource name, such as &#x60;projects/*/locations/global/catalogs/default_catalog/branches/0&#x60;. Use &#x60;default_branch&#x60; as the branch ID, to list products under the default branch. If the caller does not have permission to list Products under this branch, regardless of whether or not this branch exists, a PERMISSION_DENIED error is returned. | 
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
 **filter** | **str**| A filter to apply on the list results. Supported features: * List all the products under the parent branch if filter is unset. * List Product.Type.VARIANT Products sharing the same Product.Type.PRIMARY Product. For example: &#x60;primary_product_id &#x3D; \&quot;some_product_id\&quot;&#x60; * List Products bundled in a Product.Type.COLLECTION Product. For example: &#x60;collection_product_id &#x3D; \&quot;some_product_id\&quot;&#x60; * List Products with a partibular type. For example: &#x60;type &#x3D; \&quot;PRIMARY\&quot;&#x60; &#x60;type &#x3D; \&quot;VARIANT\&quot;&#x60; &#x60;type &#x3D; \&quot;COLLECTION\&quot;&#x60; If the field is unrecognizable, an INVALID_ARGUMENT error is returned. If the specified Product.Type.PRIMARY Product or Product.Type.COLLECTION Product does not exist, a NOT_FOUND error is returned. | [optional] 
 **page_size** | **int**| Maximum number of Products to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT error is returned. | [optional] 
 **page_token** | **str**| A page token ListProductsResponse.next_page_token, received from a previous ProductService.ListProducts call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ProductService.ListProducts must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 
 **read_mask** | **str**| The fields of Product to return in the responses. If not set or empty, the following fields are returned: * Product.name * Product.id * Product.title * Product.uri * Product.images * Product.price_info * Product.brands If \&quot;*\&quot; is provided, all fields are returned. Product.name is always returned no matter what mask is set. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned. | [optional] 
 **require_total_size** | **bool**| If true and page_token is empty, ListProductsResponse.total_size is set to the total count of matched items irrespective of pagination. Notice that setting this field to true affects the performance. | [optional] 

### Return type

[**GoogleCloudRetailV2alphaListProductsResponse**](GoogleCloudRetailV2alphaListProductsResponse.md)

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

# **retail_projects_locations_catalogs_branches_products_purge**
> GoogleLongrunningOperation retail_projects_locations_catalogs_branches_products_purge(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_purge_products_request=google_cloud_retail_v2alpha_purge_products_request)



Permanently deletes all selected Products under a branch. This process is asynchronous. If the request is valid, the removal will be enqueued and processed offline. Depending on the number of Products, this operation could take hours to complete. Before the operation completes, some Products may still be returned by ProductService.GetProduct or ProductService.ListProducts. Depending on the number of Products, this operation could take hours to complete. To get a sample of Products that would be deleted, set PurgeProductsRequest.force to false.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_purge_products_request import GoogleCloudRetailV2alphaPurgeProductsRequest
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    parent = 'parent_example' # str | Required. The resource name of the branch under which the products are created. The format is `projects/${projectId}/locations/global/catalogs/${catalogId}/branches/${branchId}`
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
    google_cloud_retail_v2alpha_purge_products_request = openapi_client.GoogleCloudRetailV2alphaPurgeProductsRequest() # GoogleCloudRetailV2alphaPurgeProductsRequest |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_branches_products_purge(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_purge_products_request=google_cloud_retail_v2alpha_purge_products_request)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_branches_products_purge:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_branches_products_purge: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The resource name of the branch under which the products are created. The format is &#x60;projects/${projectId}/locations/global/catalogs/${catalogId}/branches/${branchId}&#x60; | 
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
 **google_cloud_retail_v2alpha_purge_products_request** | [**GoogleCloudRetailV2alphaPurgeProductsRequest**](GoogleCloudRetailV2alphaPurgeProductsRequest.md)|  | [optional] 

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

# **retail_projects_locations_catalogs_branches_products_remove_fulfillment_places**
> GoogleLongrunningOperation retail_projects_locations_catalogs_branches_products_remove_fulfillment_places(product, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_remove_fulfillment_places_request=google_cloud_retail_v2alpha_remove_fulfillment_places_request)



We recommend that you use the ProductService.RemoveLocalInventories method instead of the ProductService.RemoveFulfillmentPlaces method. ProductService.RemoveLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally removes place IDs from a Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the removed place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_remove_fulfillment_places_request import GoogleCloudRetailV2alphaRemoveFulfillmentPlacesRequest
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    product = 'product_example' # str | Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.
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
    google_cloud_retail_v2alpha_remove_fulfillment_places_request = openapi_client.GoogleCloudRetailV2alphaRemoveFulfillmentPlacesRequest() # GoogleCloudRetailV2alphaRemoveFulfillmentPlacesRequest |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_branches_products_remove_fulfillment_places(product, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_remove_fulfillment_places_request=google_cloud_retail_v2alpha_remove_fulfillment_places_request)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_branches_products_remove_fulfillment_places:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_branches_products_remove_fulfillment_places: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product** | **str**| Required. Full resource name of Product, such as &#x60;projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id&#x60;. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. | 
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
 **google_cloud_retail_v2alpha_remove_fulfillment_places_request** | [**GoogleCloudRetailV2alphaRemoveFulfillmentPlacesRequest**](GoogleCloudRetailV2alphaRemoveFulfillmentPlacesRequest.md)|  | [optional] 

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

# **retail_projects_locations_catalogs_branches_products_remove_local_inventories**
> GoogleLongrunningOperation retail_projects_locations_catalogs_branches_products_remove_local_inventories(product, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_remove_local_inventories_request=google_cloud_retail_v2alpha_remove_local_inventories_request)



Remove local inventory information for a Product at a list of places at a removal timestamp. This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be removed using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_remove_local_inventories_request import GoogleCloudRetailV2alphaRemoveLocalInventoriesRequest
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    product = 'product_example' # str | Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.
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
    google_cloud_retail_v2alpha_remove_local_inventories_request = openapi_client.GoogleCloudRetailV2alphaRemoveLocalInventoriesRequest() # GoogleCloudRetailV2alphaRemoveLocalInventoriesRequest |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_branches_products_remove_local_inventories(product, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_remove_local_inventories_request=google_cloud_retail_v2alpha_remove_local_inventories_request)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_branches_products_remove_local_inventories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_branches_products_remove_local_inventories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product** | **str**| Required. Full resource name of Product, such as &#x60;projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id&#x60;. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. | 
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
 **google_cloud_retail_v2alpha_remove_local_inventories_request** | [**GoogleCloudRetailV2alphaRemoveLocalInventoriesRequest**](GoogleCloudRetailV2alphaRemoveLocalInventoriesRequest.md)|  | [optional] 

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

# **retail_projects_locations_catalogs_branches_products_set_inventory**
> GoogleLongrunningOperation retail_projects_locations_catalogs_branches_products_set_inventory(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_set_inventory_request=google_cloud_retail_v2alpha_set_inventory_request)



Updates inventory information for a Product while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update is enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. When inventory is updated with ProductService.CreateProduct and ProductService.UpdateProduct, the specified inventory field value(s) overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update times for the specified inventory fields are overwritten by the times of the ProductService.CreateProduct or ProductService.UpdateProduct request. If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product is used. If no inventory fields are set in SetInventoryRequest.set_mask, then any existing inventory information is preserved. Pre-existing inventory information can only be updated with ProductService.SetInventory, ProductService.AddFulfillmentPlaces, and ProductService.RemoveFulfillmentPlaces. The returned Operations is obsolete after one day, and the GetOperation API returns `NOT_FOUND` afterwards. If conflicting updates are issued, the Operations associated with the stale updates are not marked as done until they are obsolete.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_set_inventory_request import GoogleCloudRetailV2alphaSetInventoryRequest
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    name = 'name_example' # str | Immutable. Full resource name of the product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/product_id`.
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
    google_cloud_retail_v2alpha_set_inventory_request = openapi_client.GoogleCloudRetailV2alphaSetInventoryRequest() # GoogleCloudRetailV2alphaSetInventoryRequest |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_branches_products_set_inventory(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_set_inventory_request=google_cloud_retail_v2alpha_set_inventory_request)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_branches_products_set_inventory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_branches_products_set_inventory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Immutable. Full resource name of the product, such as &#x60;projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/product_id&#x60;. | 
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
 **google_cloud_retail_v2alpha_set_inventory_request** | [**GoogleCloudRetailV2alphaSetInventoryRequest**](GoogleCloudRetailV2alphaSetInventoryRequest.md)|  | [optional] 

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

# **retail_projects_locations_catalogs_complete_query**
> GoogleCloudRetailV2alphaCompleteQueryResponse retail_projects_locations_catalogs_complete_query(catalog, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, dataset=dataset, device_type=device_type, enable_attribute_suggestions=enable_attribute_suggestions, entity=entity, language_codes=language_codes, max_suggestions=max_suggestions, query=query, visitor_id=visitor_id)



Completes the specified prefix with keyword suggestions. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_complete_query_response import GoogleCloudRetailV2alphaCompleteQueryResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    catalog = 'catalog_example' # str | Required. Catalog for which the completion is performed. Full resource name of catalog, such as `projects/*/locations/global/catalogs/default_catalog`.
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
    dataset = 'dataset_example' # str | Determines which dataset to use for fetching completion. \"user-data\" will use the imported dataset through CompletionService.ImportCompletionData. \"cloud-retail\" will use the dataset generated by cloud retail based on user events. If leave empty, it will use the \"user-data\". Current supported values: * user-data * cloud-retail: This option requires enabling auto-learning function first. See [guidelines](https://cloud.google.com/retail/docs/completion-overview#generated-completion-dataset). (optional)
    device_type = 'device_type_example' # str | The device type context for completion suggestions. We recommend that you leave this field empty. It can apply different suggestions on different device types, e.g. `DESKTOP`, `MOBILE`. If it is empty, the suggestions are across all device types. Supported formats: * `UNKNOWN_DEVICE_TYPE` * `DESKTOP` * `MOBILE` * A customized string starts with `OTHER_`, e.g. `OTHER_IPHONE`. (optional)
    enable_attribute_suggestions = True # bool | If true, attribute suggestions are enabled and provided in response. This field is only available for \"cloud-retail\" dataset. (optional)
    entity = 'entity_example' # str | The entity for customers who run multiple entities, domains, sites, or regions, for example, `Google US`, `Google Ads`, `Waymo`, `google.com`, `youtube.com`, etc. If this is set, it must be an exact match with UserEvent.entity to get per-entity autocomplete results. (optional)
    language_codes = ['language_codes_example'] # List[str] | Note that this field applies for `user-data` dataset only. For requests with `cloud-retail` dataset, setting this field has no effect. The language filters applied to the output suggestions. If set, it should contain the language of the query. If not set, suggestions are returned without considering language restrictions. This is the BCP-47 language code, such as \"en-US\" or \"sr-Latn\". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). The maximum number of language codes is 3. (optional)
    max_suggestions = 56 # int | Completion max suggestions. If left unset or set to 0, then will fallback to the configured value CompletionConfig.max_suggestions. The maximum allowed max suggestions is 20. If it is set higher, it will be capped by 20. (optional)
    query = 'query_example' # str | Required. The query used to generate suggestions. The maximum number of allowed characters is 255. (optional)
    visitor_id = 'visitor_id_example' # str | Required field. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_complete_query(catalog, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, dataset=dataset, device_type=device_type, enable_attribute_suggestions=enable_attribute_suggestions, entity=entity, language_codes=language_codes, max_suggestions=max_suggestions, query=query, visitor_id=visitor_id)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_complete_query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_complete_query: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalog** | **str**| Required. Catalog for which the completion is performed. Full resource name of catalog, such as &#x60;projects/*/locations/global/catalogs/default_catalog&#x60;. | 
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
 **dataset** | **str**| Determines which dataset to use for fetching completion. \&quot;user-data\&quot; will use the imported dataset through CompletionService.ImportCompletionData. \&quot;cloud-retail\&quot; will use the dataset generated by cloud retail based on user events. If leave empty, it will use the \&quot;user-data\&quot;. Current supported values: * user-data * cloud-retail: This option requires enabling auto-learning function first. See [guidelines](https://cloud.google.com/retail/docs/completion-overview#generated-completion-dataset). | [optional] 
 **device_type** | **str**| The device type context for completion suggestions. We recommend that you leave this field empty. It can apply different suggestions on different device types, e.g. &#x60;DESKTOP&#x60;, &#x60;MOBILE&#x60;. If it is empty, the suggestions are across all device types. Supported formats: * &#x60;UNKNOWN_DEVICE_TYPE&#x60; * &#x60;DESKTOP&#x60; * &#x60;MOBILE&#x60; * A customized string starts with &#x60;OTHER_&#x60;, e.g. &#x60;OTHER_IPHONE&#x60;. | [optional] 
 **enable_attribute_suggestions** | **bool**| If true, attribute suggestions are enabled and provided in response. This field is only available for \&quot;cloud-retail\&quot; dataset. | [optional] 
 **entity** | **str**| The entity for customers who run multiple entities, domains, sites, or regions, for example, &#x60;Google US&#x60;, &#x60;Google Ads&#x60;, &#x60;Waymo&#x60;, &#x60;google.com&#x60;, &#x60;youtube.com&#x60;, etc. If this is set, it must be an exact match with UserEvent.entity to get per-entity autocomplete results. | [optional] 
 **language_codes** | [**List[str]**](str.md)| Note that this field applies for &#x60;user-data&#x60; dataset only. For requests with &#x60;cloud-retail&#x60; dataset, setting this field has no effect. The language filters applied to the output suggestions. If set, it should contain the language of the query. If not set, suggestions are returned without considering language restrictions. This is the BCP-47 language code, such as \&quot;en-US\&quot; or \&quot;sr-Latn\&quot;. For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). The maximum number of language codes is 3. | [optional] 
 **max_suggestions** | **int**| Completion max suggestions. If left unset or set to 0, then will fallback to the configured value CompletionConfig.max_suggestions. The maximum allowed max suggestions is 20. If it is set higher, it will be capped by 20. | [optional] 
 **query** | **str**| Required. The query used to generate suggestions. The maximum number of allowed characters is 255. | [optional] 
 **visitor_id** | **str**| Required field. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 

### Return type

[**GoogleCloudRetailV2alphaCompleteQueryResponse**](GoogleCloudRetailV2alphaCompleteQueryResponse.md)

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

# **retail_projects_locations_catalogs_completion_data_import**
> GoogleLongrunningOperation retail_projects_locations_catalogs_completion_data_import(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_import_completion_data_request=google_cloud_retail_v2alpha_import_completion_data_request)



Bulk import of processed completion dataset. Request processing is asynchronous. Partial updating is not supported. The operation is successfully finished only after the imported suggestions are indexed successfully and ready for serving. The process takes hours. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_import_completion_data_request import GoogleCloudRetailV2alphaImportCompletionDataRequest
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    parent = 'parent_example' # str | Required. The catalog which the suggestions dataset belongs to. Format: `projects/1234/locations/global/catalogs/default_catalog`.
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
    google_cloud_retail_v2alpha_import_completion_data_request = openapi_client.GoogleCloudRetailV2alphaImportCompletionDataRequest() # GoogleCloudRetailV2alphaImportCompletionDataRequest |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_completion_data_import(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_import_completion_data_request=google_cloud_retail_v2alpha_import_completion_data_request)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_completion_data_import:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_completion_data_import: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The catalog which the suggestions dataset belongs to. Format: &#x60;projects/1234/locations/global/catalogs/default_catalog&#x60;. | 
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
 **google_cloud_retail_v2alpha_import_completion_data_request** | [**GoogleCloudRetailV2alphaImportCompletionDataRequest**](GoogleCloudRetailV2alphaImportCompletionDataRequest.md)|  | [optional] 

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

# **retail_projects_locations_catalogs_controls_create**
> GoogleCloudRetailV2alphaControl retail_projects_locations_catalogs_controls_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, control_id=control_id, google_cloud_retail_v2alpha_control=google_cloud_retail_v2alpha_control)



Creates a Control. If the Control to create already exists, an ALREADY_EXISTS error is returned.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_control import GoogleCloudRetailV2alphaControl
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    parent = 'parent_example' # str | Required. Full resource name of parent catalog. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`
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
    control_id = 'control_id_example' # str | Required. The ID to use for the Control, which will become the final component of the Control's resource name. This value should be 4-63 characters, and valid characters are /a-z-_/. (optional)
    google_cloud_retail_v2alpha_control = openapi_client.GoogleCloudRetailV2alphaControl() # GoogleCloudRetailV2alphaControl |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_controls_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, control_id=control_id, google_cloud_retail_v2alpha_control=google_cloud_retail_v2alpha_control)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_controls_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_controls_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. Full resource name of parent catalog. Format: &#x60;projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}&#x60; | 
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
 **control_id** | **str**| Required. The ID to use for the Control, which will become the final component of the Control&#39;s resource name. This value should be 4-63 characters, and valid characters are /a-z-_/. | [optional] 
 **google_cloud_retail_v2alpha_control** | [**GoogleCloudRetailV2alphaControl**](GoogleCloudRetailV2alphaControl.md)|  | [optional] 

### Return type

[**GoogleCloudRetailV2alphaControl**](GoogleCloudRetailV2alphaControl.md)

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

# **retail_projects_locations_catalogs_controls_list**
> GoogleCloudRetailV2alphaListControlsResponse retail_projects_locations_catalogs_controls_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token)



Lists all Controls by their parent Catalog.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_list_controls_response import GoogleCloudRetailV2alphaListControlsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    parent = 'parent_example' # str | Required. The catalog resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`
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
    filter = 'filter_example' # str | Optional. A filter to apply on the list results. Supported features: * List all the products under the parent branch if filter is unset. * List controls that are used in a single ServingConfig: 'serving_config = \"boosted_home_page_cvr\"' (optional)
    page_size = 56 # int | Optional. Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000. (optional)
    page_token = 'page_token_example' # str | Optional. A page token, received from a previous `ListControls` call. Provide this to retrieve the subsequent page. (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_controls_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_controls_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_controls_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The catalog resource name. Format: &#x60;projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}&#x60; | 
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
 **filter** | **str**| Optional. A filter to apply on the list results. Supported features: * List all the products under the parent branch if filter is unset. * List controls that are used in a single ServingConfig: &#39;serving_config &#x3D; \&quot;boosted_home_page_cvr\&quot;&#39; | [optional] 
 **page_size** | **int**| Optional. Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000. | [optional] 
 **page_token** | **str**| Optional. A page token, received from a previous &#x60;ListControls&#x60; call. Provide this to retrieve the subsequent page. | [optional] 

### Return type

[**GoogleCloudRetailV2alphaListControlsResponse**](GoogleCloudRetailV2alphaListControlsResponse.md)

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

# **retail_projects_locations_catalogs_export_analytics_metrics**
> GoogleLongrunningOperation retail_projects_locations_catalogs_export_analytics_metrics(catalog, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_export_analytics_metrics_request=google_cloud_retail_v2alpha_export_analytics_metrics_request)



Exports analytics metrics. `Operation.response` is of type `ExportAnalyticsMetricsResponse`. `Operation.metadata` is of type `ExportMetadata`.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_export_analytics_metrics_request import GoogleCloudRetailV2alphaExportAnalyticsMetricsRequest
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    catalog = 'catalog_example' # str | Required. Full resource name of the parent catalog. Expected format: `projects/*/locations/*/catalogs/*`
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
    google_cloud_retail_v2alpha_export_analytics_metrics_request = openapi_client.GoogleCloudRetailV2alphaExportAnalyticsMetricsRequest() # GoogleCloudRetailV2alphaExportAnalyticsMetricsRequest |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_export_analytics_metrics(catalog, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_export_analytics_metrics_request=google_cloud_retail_v2alpha_export_analytics_metrics_request)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_export_analytics_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_export_analytics_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalog** | **str**| Required. Full resource name of the parent catalog. Expected format: &#x60;projects/*/locations/*/catalogs/*&#x60; | 
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
 **google_cloud_retail_v2alpha_export_analytics_metrics_request** | [**GoogleCloudRetailV2alphaExportAnalyticsMetricsRequest**](GoogleCloudRetailV2alphaExportAnalyticsMetricsRequest.md)|  | [optional] 

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

# **retail_projects_locations_catalogs_get_default_branch**
> GoogleCloudRetailV2alphaGetDefaultBranchResponse retail_projects_locations_catalogs_get_default_branch(catalog, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_get_default_branch_response import GoogleCloudRetailV2alphaGetDefaultBranchResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    catalog = 'catalog_example' # str | The parent catalog resource name, such as `projects/*/locations/global/catalogs/default_catalog`.
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
        api_response = api_instance.retail_projects_locations_catalogs_get_default_branch(catalog, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_get_default_branch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_get_default_branch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalog** | **str**| The parent catalog resource name, such as &#x60;projects/*/locations/global/catalogs/default_catalog&#x60;. | 
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

[**GoogleCloudRetailV2alphaGetDefaultBranchResponse**](GoogleCloudRetailV2alphaGetDefaultBranchResponse.md)

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

# **retail_projects_locations_catalogs_list**
> GoogleCloudRetailV2alphaListCatalogsResponse retail_projects_locations_catalogs_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



Lists all the Catalogs associated with the project.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_list_catalogs_response import GoogleCloudRetailV2alphaListCatalogsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    parent = 'parent_example' # str | Required. The account resource name with an associated location. If the caller does not have permission to list Catalogs under this location, regardless of whether or not this location exists, a PERMISSION_DENIED error is returned.
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
    page_size = 56 # int | Maximum number of Catalogs to return. If unspecified, defaults to 50. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT is returned. (optional)
    page_token = 'page_token_example' # str | A page token ListCatalogsResponse.next_page_token, received from a previous CatalogService.ListCatalogs call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to CatalogService.ListCatalogs must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned. (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The account resource name with an associated location. If the caller does not have permission to list Catalogs under this location, regardless of whether or not this location exists, a PERMISSION_DENIED error is returned. | 
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
 **page_size** | **int**| Maximum number of Catalogs to return. If unspecified, defaults to 50. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT is returned. | [optional] 
 **page_token** | **str**| A page token ListCatalogsResponse.next_page_token, received from a previous CatalogService.ListCatalogs call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to CatalogService.ListCatalogs must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 

### Return type

[**GoogleCloudRetailV2alphaListCatalogsResponse**](GoogleCloudRetailV2alphaListCatalogsResponse.md)

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

# **retail_projects_locations_catalogs_merchant_center_account_links_create**
> GoogleLongrunningOperation retail_projects_locations_catalogs_merchant_center_account_links_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_merchant_center_account_link=google_cloud_retail_v2alpha_merchant_center_account_link)



Creates a MerchantCenterAccountLink.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_merchant_center_account_link import GoogleCloudRetailV2alphaMerchantCenterAccountLink
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    parent = 'parent_example' # str | Required. The branch resource where this MerchantCenterAccountLink will be created. Format: `projects/{PROJECT_NUMBER}/locations/global/catalogs/{CATALOG_ID}`
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
    google_cloud_retail_v2alpha_merchant_center_account_link = openapi_client.GoogleCloudRetailV2alphaMerchantCenterAccountLink() # GoogleCloudRetailV2alphaMerchantCenterAccountLink |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_merchant_center_account_links_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_merchant_center_account_link=google_cloud_retail_v2alpha_merchant_center_account_link)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_merchant_center_account_links_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_merchant_center_account_links_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The branch resource where this MerchantCenterAccountLink will be created. Format: &#x60;projects/{PROJECT_NUMBER}/locations/global/catalogs/{CATALOG_ID}&#x60; | 
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
 **google_cloud_retail_v2alpha_merchant_center_account_link** | [**GoogleCloudRetailV2alphaMerchantCenterAccountLink**](GoogleCloudRetailV2alphaMerchantCenterAccountLink.md)|  | [optional] 

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

# **retail_projects_locations_catalogs_merchant_center_account_links_list**
> GoogleCloudRetailV2alphaListMerchantCenterAccountLinksResponse retail_projects_locations_catalogs_merchant_center_account_links_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Lists all MerchantCenterAccountLinks under the specified parent Catalog.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_list_merchant_center_account_links_response import GoogleCloudRetailV2alphaListMerchantCenterAccountLinksResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    parent = 'parent_example' # str | Required. The parent Catalog of the resource. It must match this format: `projects/{PROJECT_NUMBER}/locations/global/catalogs/{CATALOG_ID}`
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
        api_response = api_instance.retail_projects_locations_catalogs_merchant_center_account_links_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_merchant_center_account_links_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_merchant_center_account_links_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent Catalog of the resource. It must match this format: &#x60;projects/{PROJECT_NUMBER}/locations/global/catalogs/{CATALOG_ID}&#x60; | 
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

[**GoogleCloudRetailV2alphaListMerchantCenterAccountLinksResponse**](GoogleCloudRetailV2alphaListMerchantCenterAccountLinksResponse.md)

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

# **retail_projects_locations_catalogs_models_create**
> GoogleLongrunningOperation retail_projects_locations_catalogs_models_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, dry_run=dry_run, google_cloud_retail_v2alpha_model=google_cloud_retail_v2alpha_model)



Creates a new model.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_model import GoogleCloudRetailV2alphaModel
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    parent = 'parent_example' # str | Required. The parent resource under which to create the model. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`
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
    dry_run = True # bool | Optional. Whether to run a dry run to validate the request (without actually creating the model). (optional)
    google_cloud_retail_v2alpha_model = openapi_client.GoogleCloudRetailV2alphaModel() # GoogleCloudRetailV2alphaModel |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_models_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, dry_run=dry_run, google_cloud_retail_v2alpha_model=google_cloud_retail_v2alpha_model)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_models_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_models_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent resource under which to create the model. Format: &#x60;projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}&#x60; | 
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
 **dry_run** | **bool**| Optional. Whether to run a dry run to validate the request (without actually creating the model). | [optional] 
 **google_cloud_retail_v2alpha_model** | [**GoogleCloudRetailV2alphaModel**](GoogleCloudRetailV2alphaModel.md)|  | [optional] 

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

# **retail_projects_locations_catalogs_models_list**
> GoogleCloudRetailV2alphaListModelsResponse retail_projects_locations_catalogs_models_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



Lists all the models linked to this event store.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_list_models_response import GoogleCloudRetailV2alphaListModelsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    parent = 'parent_example' # str | Required. The parent for which to list models. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`
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
    page_size = 56 # int | Optional. Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000. (optional)
    page_token = 'page_token_example' # str | Optional. A page token, received from a previous `ListModels` call. Provide this to retrieve the subsequent page. (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_models_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_models_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_models_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent for which to list models. Format: &#x60;projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}&#x60; | 
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
 **page_size** | **int**| Optional. Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000. | [optional] 
 **page_token** | **str**| Optional. A page token, received from a previous &#x60;ListModels&#x60; call. Provide this to retrieve the subsequent page. | [optional] 

### Return type

[**GoogleCloudRetailV2alphaListModelsResponse**](GoogleCloudRetailV2alphaListModelsResponse.md)

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

# **retail_projects_locations_catalogs_models_pause**
> GoogleCloudRetailV2alphaModel retail_projects_locations_catalogs_models_pause(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, body=body)



Pauses the training of an existing model.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_model import GoogleCloudRetailV2alphaModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    name = 'name_example' # str | Required. The name of the model to pause. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`
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
        api_response = api_instance.retail_projects_locations_catalogs_models_pause(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, body=body)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_models_pause:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_models_pause: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The name of the model to pause. Format: &#x60;projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}&#x60; | 
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

[**GoogleCloudRetailV2alphaModel**](GoogleCloudRetailV2alphaModel.md)

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

# **retail_projects_locations_catalogs_models_resume**
> GoogleCloudRetailV2alphaModel retail_projects_locations_catalogs_models_resume(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, body=body)



Resumes the training of an existing model.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_model import GoogleCloudRetailV2alphaModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    name = 'name_example' # str | Required. The name of the model to resume. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`
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
        api_response = api_instance.retail_projects_locations_catalogs_models_resume(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, body=body)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_models_resume:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_models_resume: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The name of the model to resume. Format: &#x60;projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}&#x60; | 
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

[**GoogleCloudRetailV2alphaModel**](GoogleCloudRetailV2alphaModel.md)

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

# **retail_projects_locations_catalogs_models_tune**
> GoogleLongrunningOperation retail_projects_locations_catalogs_models_tune(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, body=body)



Tunes an existing model.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    name = 'name_example' # str | Required. The resource name of the model to tune. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`
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
        api_response = api_instance.retail_projects_locations_catalogs_models_tune(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, body=body)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_models_tune:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_models_tune: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The resource name of the model to tune. Format: &#x60;projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}&#x60; | 
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

# **retail_projects_locations_catalogs_serving_configs_add_control**
> GoogleCloudRetailV2alphaServingConfig retail_projects_locations_catalogs_serving_configs_add_control(serving_config, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_add_control_request=google_cloud_retail_v2alpha_add_control_request)



Enables a Control on the specified ServingConfig. The control is added in the last position of the list of controls it belongs to (e.g. if it's a facet spec control it will be applied in the last position of servingConfig.facetSpecIds) Returns a ALREADY_EXISTS error if the control has already been applied. Returns a FAILED_PRECONDITION error if the addition could exceed maximum number of control allowed for that type of control.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_add_control_request import GoogleCloudRetailV2alphaAddControlRequest
from openapi_client.models.google_cloud_retail_v2alpha_serving_config import GoogleCloudRetailV2alphaServingConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    serving_config = 'serving_config_example' # str | Required. The source ServingConfig resource name . Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}`
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
    google_cloud_retail_v2alpha_add_control_request = openapi_client.GoogleCloudRetailV2alphaAddControlRequest() # GoogleCloudRetailV2alphaAddControlRequest |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_serving_configs_add_control(serving_config, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_add_control_request=google_cloud_retail_v2alpha_add_control_request)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_serving_configs_add_control:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_serving_configs_add_control: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serving_config** | **str**| Required. The source ServingConfig resource name . Format: &#x60;projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}&#x60; | 
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
 **google_cloud_retail_v2alpha_add_control_request** | [**GoogleCloudRetailV2alphaAddControlRequest**](GoogleCloudRetailV2alphaAddControlRequest.md)|  | [optional] 

### Return type

[**GoogleCloudRetailV2alphaServingConfig**](GoogleCloudRetailV2alphaServingConfig.md)

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

# **retail_projects_locations_catalogs_serving_configs_create**
> GoogleCloudRetailV2alphaServingConfig retail_projects_locations_catalogs_serving_configs_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, serving_config_id=serving_config_id, google_cloud_retail_v2alpha_serving_config=google_cloud_retail_v2alpha_serving_config)



Creates a ServingConfig. A maximum of 100 ServingConfigs are allowed in a Catalog, otherwise a FAILED_PRECONDITION error is returned.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_serving_config import GoogleCloudRetailV2alphaServingConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    parent = 'parent_example' # str | Required. Full resource name of parent. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`
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
    serving_config_id = 'serving_config_id_example' # str | Required. The ID to use for the ServingConfig, which will become the final component of the ServingConfig's resource name. This value should be 4-63 characters, and valid characters are /a-z-_/. (optional)
    google_cloud_retail_v2alpha_serving_config = openapi_client.GoogleCloudRetailV2alphaServingConfig() # GoogleCloudRetailV2alphaServingConfig |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_serving_configs_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, serving_config_id=serving_config_id, google_cloud_retail_v2alpha_serving_config=google_cloud_retail_v2alpha_serving_config)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_serving_configs_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_serving_configs_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. Full resource name of parent. Format: &#x60;projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}&#x60; | 
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
 **serving_config_id** | **str**| Required. The ID to use for the ServingConfig, which will become the final component of the ServingConfig&#39;s resource name. This value should be 4-63 characters, and valid characters are /a-z-_/. | [optional] 
 **google_cloud_retail_v2alpha_serving_config** | [**GoogleCloudRetailV2alphaServingConfig**](GoogleCloudRetailV2alphaServingConfig.md)|  | [optional] 

### Return type

[**GoogleCloudRetailV2alphaServingConfig**](GoogleCloudRetailV2alphaServingConfig.md)

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

# **retail_projects_locations_catalogs_serving_configs_delete**
> object retail_projects_locations_catalogs_serving_configs_delete(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, force=force)



Deletes a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    name = 'name_example' # str | Required. The resource name of the ServingConfig to delete. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}`
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
    force = True # bool | This value only applies to the case when the target product is of type PRIMARY. When deleting a product of VARIANT/COLLECTION type, this value will be ignored. When set to true, the subsequent variant products will be deleted. When set to false, if the primary product has active variant products, an error will be returned. (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_serving_configs_delete(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, force=force)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_serving_configs_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_serving_configs_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The resource name of the ServingConfig to delete. Format: &#x60;projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}&#x60; | 
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
 **force** | **bool**| This value only applies to the case when the target product is of type PRIMARY. When deleting a product of VARIANT/COLLECTION type, this value will be ignored. When set to true, the subsequent variant products will be deleted. When set to false, if the primary product has active variant products, an error will be returned. | [optional] 

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

# **retail_projects_locations_catalogs_serving_configs_list**
> GoogleCloudRetailV2alphaListServingConfigsResponse retail_projects_locations_catalogs_serving_configs_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



Lists all ServingConfigs linked to this catalog.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_list_serving_configs_response import GoogleCloudRetailV2alphaListServingConfigsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    parent = 'parent_example' # str | Required. The catalog resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`
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
    page_size = 56 # int | Optional. Maximum number of results to return. If unspecified, defaults to 100. If a value greater than 100 is provided, at most 100 results are returned. (optional)
    page_token = 'page_token_example' # str | Optional. A page token, received from a previous `ListServingConfigs` call. Provide this to retrieve the subsequent page. (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_serving_configs_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_serving_configs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_serving_configs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The catalog resource name. Format: &#x60;projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}&#x60; | 
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
 **page_size** | **int**| Optional. Maximum number of results to return. If unspecified, defaults to 100. If a value greater than 100 is provided, at most 100 results are returned. | [optional] 
 **page_token** | **str**| Optional. A page token, received from a previous &#x60;ListServingConfigs&#x60; call. Provide this to retrieve the subsequent page. | [optional] 

### Return type

[**GoogleCloudRetailV2alphaListServingConfigsResponse**](GoogleCloudRetailV2alphaListServingConfigsResponse.md)

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

# **retail_projects_locations_catalogs_serving_configs_patch**
> GoogleCloudRetailV2alphaServingConfig retail_projects_locations_catalogs_serving_configs_patch(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, google_cloud_retail_v2alpha_serving_config=google_cloud_retail_v2alpha_serving_config)



Updates a ServingConfig.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_serving_config import GoogleCloudRetailV2alphaServingConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    name = 'name_example' # str | Immutable. Fully qualified name `projects/*/locations/global/catalogs/*/servingConfig/*`
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
    update_mask = 'update_mask_example' # str | Indicates which fields in the provided ServingConfig to update. The following are NOT supported: * ServingConfig.name If not set, all supported fields are updated. (optional)
    google_cloud_retail_v2alpha_serving_config = openapi_client.GoogleCloudRetailV2alphaServingConfig() # GoogleCloudRetailV2alphaServingConfig |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_serving_configs_patch(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, update_mask=update_mask, google_cloud_retail_v2alpha_serving_config=google_cloud_retail_v2alpha_serving_config)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_serving_configs_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_serving_configs_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Immutable. Fully qualified name &#x60;projects/*/locations/global/catalogs/*/servingConfig/*&#x60; | 
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
 **update_mask** | **str**| Indicates which fields in the provided ServingConfig to update. The following are NOT supported: * ServingConfig.name If not set, all supported fields are updated. | [optional] 
 **google_cloud_retail_v2alpha_serving_config** | [**GoogleCloudRetailV2alphaServingConfig**](GoogleCloudRetailV2alphaServingConfig.md)|  | [optional] 

### Return type

[**GoogleCloudRetailV2alphaServingConfig**](GoogleCloudRetailV2alphaServingConfig.md)

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

# **retail_projects_locations_catalogs_serving_configs_predict**
> GoogleCloudRetailV2alphaPredictResponse retail_projects_locations_catalogs_serving_configs_predict(placement, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_predict_request=google_cloud_retail_v2alpha_predict_request)



Makes a recommendation prediction.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_predict_request import GoogleCloudRetailV2alphaPredictRequest
from openapi_client.models.google_cloud_retail_v2alpha_predict_response import GoogleCloudRetailV2alphaPredictResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    placement = 'placement_example' # str | Required. Full resource name of the format: `{placement=projects/*/locations/global/catalogs/default_catalog/servingConfigs/*}` or `{placement=projects/*/locations/global/catalogs/default_catalog/placements/*}`. We recommend using the `servingConfigs` resource. `placements` is a legacy resource. The ID of the Recommendations AI serving config or placement. Before you can request predictions from your model, you must create at least one serving config or placement for it. For more information, see [Manage serving configs] (https://cloud.google.com/retail/docs/manage-configs). The full list of available serving configs can be seen at https://console.cloud.google.com/ai/retail/catalogs/default_catalog/configs
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
    google_cloud_retail_v2alpha_predict_request = openapi_client.GoogleCloudRetailV2alphaPredictRequest() # GoogleCloudRetailV2alphaPredictRequest |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_serving_configs_predict(placement, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_predict_request=google_cloud_retail_v2alpha_predict_request)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_serving_configs_predict:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_serving_configs_predict: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **placement** | **str**| Required. Full resource name of the format: &#x60;{placement&#x3D;projects/*/locations/global/catalogs/default_catalog/servingConfigs/*}&#x60; or &#x60;{placement&#x3D;projects/*/locations/global/catalogs/default_catalog/placements/*}&#x60;. We recommend using the &#x60;servingConfigs&#x60; resource. &#x60;placements&#x60; is a legacy resource. The ID of the Recommendations AI serving config or placement. Before you can request predictions from your model, you must create at least one serving config or placement for it. For more information, see [Manage serving configs] (https://cloud.google.com/retail/docs/manage-configs). The full list of available serving configs can be seen at https://console.cloud.google.com/ai/retail/catalogs/default_catalog/configs | 
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
 **google_cloud_retail_v2alpha_predict_request** | [**GoogleCloudRetailV2alphaPredictRequest**](GoogleCloudRetailV2alphaPredictRequest.md)|  | [optional] 

### Return type

[**GoogleCloudRetailV2alphaPredictResponse**](GoogleCloudRetailV2alphaPredictResponse.md)

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

# **retail_projects_locations_catalogs_serving_configs_remove_control**
> GoogleCloudRetailV2alphaServingConfig retail_projects_locations_catalogs_serving_configs_remove_control(serving_config, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_remove_control_request=google_cloud_retail_v2alpha_remove_control_request)



Disables a Control on the specified ServingConfig. The control is removed from the ServingConfig. Returns a NOT_FOUND error if the Control is not enabled for the ServingConfig.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_remove_control_request import GoogleCloudRetailV2alphaRemoveControlRequest
from openapi_client.models.google_cloud_retail_v2alpha_serving_config import GoogleCloudRetailV2alphaServingConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    serving_config = 'serving_config_example' # str | Required. The source ServingConfig resource name . Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}`
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
    google_cloud_retail_v2alpha_remove_control_request = openapi_client.GoogleCloudRetailV2alphaRemoveControlRequest() # GoogleCloudRetailV2alphaRemoveControlRequest |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_serving_configs_remove_control(serving_config, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_remove_control_request=google_cloud_retail_v2alpha_remove_control_request)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_serving_configs_remove_control:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_serving_configs_remove_control: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serving_config** | **str**| Required. The source ServingConfig resource name . Format: &#x60;projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}&#x60; | 
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
 **google_cloud_retail_v2alpha_remove_control_request** | [**GoogleCloudRetailV2alphaRemoveControlRequest**](GoogleCloudRetailV2alphaRemoveControlRequest.md)|  | [optional] 

### Return type

[**GoogleCloudRetailV2alphaServingConfig**](GoogleCloudRetailV2alphaServingConfig.md)

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

# **retail_projects_locations_catalogs_serving_configs_search**
> GoogleCloudRetailV2alphaSearchResponse retail_projects_locations_catalogs_serving_configs_search(placement, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_search_request=google_cloud_retail_v2alpha_search_request)



Performs a search. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_search_request import GoogleCloudRetailV2alphaSearchRequest
from openapi_client.models.google_cloud_retail_v2alpha_search_response import GoogleCloudRetailV2alphaSearchResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    placement = 'placement_example' # str | Required. The resource name of the Retail Search serving config, such as `projects/*/locations/global/catalogs/default_catalog/servingConfigs/default_serving_config` or the name of the legacy placement resource, such as `projects/*/locations/global/catalogs/default_catalog/placements/default_search`. This field is used to identify the serving config name and the set of models that are used to make the search.
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
    google_cloud_retail_v2alpha_search_request = openapi_client.GoogleCloudRetailV2alphaSearchRequest() # GoogleCloudRetailV2alphaSearchRequest |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_serving_configs_search(placement, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_search_request=google_cloud_retail_v2alpha_search_request)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_serving_configs_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_serving_configs_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **placement** | **str**| Required. The resource name of the Retail Search serving config, such as &#x60;projects/*/locations/global/catalogs/default_catalog/servingConfigs/default_serving_config&#x60; or the name of the legacy placement resource, such as &#x60;projects/*/locations/global/catalogs/default_catalog/placements/default_search&#x60;. This field is used to identify the serving config name and the set of models that are used to make the search. | 
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
 **google_cloud_retail_v2alpha_search_request** | [**GoogleCloudRetailV2alphaSearchRequest**](GoogleCloudRetailV2alphaSearchRequest.md)|  | [optional] 

### Return type

[**GoogleCloudRetailV2alphaSearchResponse**](GoogleCloudRetailV2alphaSearchResponse.md)

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

# **retail_projects_locations_catalogs_set_default_branch**
> object retail_projects_locations_catalogs_set_default_branch(catalog, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_set_default_branch_request=google_cloud_retail_v2alpha_set_default_branch_request)



Set a specified branch id as default branch. API methods such as SearchService.Search, ProductService.GetProduct, ProductService.ListProducts will treat requests using \"default_branch\" to the actual branch id set as default. For example, if `projects/*/locations/*/catalogs/*/branches/1` is set as default, setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/default_branch` is equivalent to setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/1`. Using multiple branches can be useful when developers would like to have a staging branch to test and verify for future usage. When it becomes ready, developers switch on the staging branch using this API while keeping using `projects/*/locations/*/catalogs/*/branches/default_branch` as SearchRequest.branch to route the traffic to this staging branch. CAUTION: If you have live predict/search traffic, switching the default branch could potentially cause outages if the ID space of the new branch is very different from the old one. More specifically: * PredictionService will only return product IDs from branch {newBranch}. * SearchService will only return product IDs from branch {newBranch} (if branch is not explicitly set). * UserEventService will only join events with products from branch {newBranch}.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_set_default_branch_request import GoogleCloudRetailV2alphaSetDefaultBranchRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    catalog = 'catalog_example' # str | Full resource name of the catalog, such as `projects/*/locations/global/catalogs/default_catalog`.
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
    google_cloud_retail_v2alpha_set_default_branch_request = openapi_client.GoogleCloudRetailV2alphaSetDefaultBranchRequest() # GoogleCloudRetailV2alphaSetDefaultBranchRequest |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_set_default_branch(catalog, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_set_default_branch_request=google_cloud_retail_v2alpha_set_default_branch_request)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_set_default_branch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_set_default_branch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalog** | **str**| Full resource name of the catalog, such as &#x60;projects/*/locations/global/catalogs/default_catalog&#x60;. | 
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
 **google_cloud_retail_v2alpha_set_default_branch_request** | [**GoogleCloudRetailV2alphaSetDefaultBranchRequest**](GoogleCloudRetailV2alphaSetDefaultBranchRequest.md)|  | [optional] 

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

# **retail_projects_locations_catalogs_user_events_collect**
> GoogleApiHttpBody retail_projects_locations_catalogs_user_events_collect(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, ets=ets, prebuilt_rule=prebuilt_rule, raw_json=raw_json, uri=uri, user_event=user_event)



Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Retail API JavaScript pixel and Google Tag Manager. Users should not call this method directly.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_api_http_body import GoogleApiHttpBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    parent = 'parent_example' # str | Required. The parent catalog name, such as `projects/1234/locations/global/catalogs/default_catalog`.
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
    ets = 'ets_example' # str | The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes. (optional)
    prebuilt_rule = 'prebuilt_rule_example' # str | The prebuilt rule name that can convert a specific type of raw_json. For example: \"ga4_bq\" rule for the GA4 user event schema. (optional)
    raw_json = 'raw_json_example' # str | An arbitrary serialized JSON string that contains necessary information that can comprise a user event. When this field is specified, the user_event field will be ignored. Note: line-delimited JSON is not supported, a single JSON only. (optional)
    uri = 'uri_example' # str | The URL including cgi-parameters but excluding the hash fragment with a length limit of 5,000 characters. This is often more useful than the referer URL, because many browsers only send the domain for 3rd party requests. (optional)
    user_event = 'user_event_example' # str | Required. URL encoded UserEvent proto with a length limit of 2,000,000 characters. (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_user_events_collect(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, ets=ets, prebuilt_rule=prebuilt_rule, raw_json=raw_json, uri=uri, user_event=user_event)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_user_events_collect:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_user_events_collect: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent catalog name, such as &#x60;projects/1234/locations/global/catalogs/default_catalog&#x60;. | 
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
 **ets** | **str**| The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes. | [optional] 
 **prebuilt_rule** | **str**| The prebuilt rule name that can convert a specific type of raw_json. For example: \&quot;ga4_bq\&quot; rule for the GA4 user event schema. | [optional] 
 **raw_json** | **str**| An arbitrary serialized JSON string that contains necessary information that can comprise a user event. When this field is specified, the user_event field will be ignored. Note: line-delimited JSON is not supported, a single JSON only. | [optional] 
 **uri** | **str**| The URL including cgi-parameters but excluding the hash fragment with a length limit of 5,000 characters. This is often more useful than the referer URL, because many browsers only send the domain for 3rd party requests. | [optional] 
 **user_event** | **str**| Required. URL encoded UserEvent proto with a length limit of 2,000,000 characters. | [optional] 

### Return type

[**GoogleApiHttpBody**](GoogleApiHttpBody.md)

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

# **retail_projects_locations_catalogs_user_events_import**
> GoogleLongrunningOperation retail_projects_locations_catalogs_user_events_import(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_import_user_events_request=google_cloud_retail_v2alpha_import_user_events_request)



Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. `Operation.response` is of type `ImportResponse`. Note that it is possible for a subset of the items to be successfully inserted. `Operation.metadata` is of type `ImportMetadata`.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_import_user_events_request import GoogleCloudRetailV2alphaImportUserEventsRequest
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    parent = 'parent_example' # str | Required. `projects/1234/locations/global/catalogs/default_catalog`
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
    google_cloud_retail_v2alpha_import_user_events_request = openapi_client.GoogleCloudRetailV2alphaImportUserEventsRequest() # GoogleCloudRetailV2alphaImportUserEventsRequest |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_user_events_import(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_import_user_events_request=google_cloud_retail_v2alpha_import_user_events_request)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_user_events_import:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_user_events_import: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. &#x60;projects/1234/locations/global/catalogs/default_catalog&#x60; | 
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
 **google_cloud_retail_v2alpha_import_user_events_request** | [**GoogleCloudRetailV2alphaImportUserEventsRequest**](GoogleCloudRetailV2alphaImportUserEventsRequest.md)|  | [optional] 

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

# **retail_projects_locations_catalogs_user_events_purge**
> GoogleLongrunningOperation retail_projects_locations_catalogs_user_events_purge(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_purge_user_events_request=google_cloud_retail_v2alpha_purge_user_events_request)



Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_purge_user_events_request import GoogleCloudRetailV2alphaPurgeUserEventsRequest
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    parent = 'parent_example' # str | Required. The resource name of the catalog under which the events are created. The format is `projects/${projectId}/locations/global/catalogs/${catalogId}`
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
    google_cloud_retail_v2alpha_purge_user_events_request = openapi_client.GoogleCloudRetailV2alphaPurgeUserEventsRequest() # GoogleCloudRetailV2alphaPurgeUserEventsRequest |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_user_events_purge(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_purge_user_events_request=google_cloud_retail_v2alpha_purge_user_events_request)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_user_events_purge:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_user_events_purge: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The resource name of the catalog under which the events are created. The format is &#x60;projects/${projectId}/locations/global/catalogs/${catalogId}&#x60; | 
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
 **google_cloud_retail_v2alpha_purge_user_events_request** | [**GoogleCloudRetailV2alphaPurgeUserEventsRequest**](GoogleCloudRetailV2alphaPurgeUserEventsRequest.md)|  | [optional] 

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

# **retail_projects_locations_catalogs_user_events_rejoin**
> GoogleLongrunningOperation retail_projects_locations_catalogs_user_events_rejoin(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_rejoin_user_events_request=google_cloud_retail_v2alpha_rejoin_user_events_request)



Starts a user-event rejoin operation with latest product catalog. Events are not annotated with detailed product information for products that are missing from the catalog when the user event is ingested. These events are stored as unjoined events with limited usage on training and serving. You can use this method to start a join operation on specified events with the latest version of product catalog. You can also use this method to correct events joined with the wrong product catalog. A rejoin operation can take hours or days to complete.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_rejoin_user_events_request import GoogleCloudRetailV2alphaRejoinUserEventsRequest
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    parent = 'parent_example' # str | Required. The parent catalog resource name, such as `projects/1234/locations/global/catalogs/default_catalog`.
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
    google_cloud_retail_v2alpha_rejoin_user_events_request = openapi_client.GoogleCloudRetailV2alphaRejoinUserEventsRequest() # GoogleCloudRetailV2alphaRejoinUserEventsRequest |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_user_events_rejoin(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_cloud_retail_v2alpha_rejoin_user_events_request=google_cloud_retail_v2alpha_rejoin_user_events_request)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_user_events_rejoin:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_user_events_rejoin: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent catalog resource name, such as &#x60;projects/1234/locations/global/catalogs/default_catalog&#x60;. | 
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
 **google_cloud_retail_v2alpha_rejoin_user_events_request** | [**GoogleCloudRetailV2alphaRejoinUserEventsRequest**](GoogleCloudRetailV2alphaRejoinUserEventsRequest.md)|  | [optional] 

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

# **retail_projects_locations_catalogs_user_events_write**
> GoogleCloudRetailV2alphaUserEvent retail_projects_locations_catalogs_user_events_write(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, write_async=write_async, google_cloud_retail_v2alpha_user_event=google_cloud_retail_v2alpha_user_event)



Writes a single user event.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_user_event import GoogleCloudRetailV2alphaUserEvent
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    parent = 'parent_example' # str | Required. The parent catalog resource name, such as `projects/1234/locations/global/catalogs/default_catalog`.
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
    write_async = True # bool | If set to true, the user event will be written asynchronously after validation, and the API will respond without waiting for the write. Therefore, silent failures can occur even if the API returns success. In case of silent failures, error messages can be found in Stackdriver logs. (optional)
    google_cloud_retail_v2alpha_user_event = openapi_client.GoogleCloudRetailV2alphaUserEvent() # GoogleCloudRetailV2alphaUserEvent |  (optional)

    try:
        api_response = api_instance.retail_projects_locations_catalogs_user_events_write(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, write_async=write_async, google_cloud_retail_v2alpha_user_event=google_cloud_retail_v2alpha_user_event)
        print("The response of ProjectsApi->retail_projects_locations_catalogs_user_events_write:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_locations_catalogs_user_events_write: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent catalog resource name, such as &#x60;projects/1234/locations/global/catalogs/default_catalog&#x60;. | 
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
 **write_async** | **bool**| If set to true, the user event will be written asynchronously after validation, and the API will respond without waiting for the write. Therefore, silent failures can occur even if the API returns success. In case of silent failures, error messages can be found in Stackdriver logs. | [optional] 
 **google_cloud_retail_v2alpha_user_event** | [**GoogleCloudRetailV2alphaUserEvent**](GoogleCloudRetailV2alphaUserEvent.md)|  | [optional] 

### Return type

[**GoogleCloudRetailV2alphaUserEvent**](GoogleCloudRetailV2alphaUserEvent.md)

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

# **retail_projects_operations_get**
> GoogleLongrunningOperation retail_projects_operations_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    name = 'name_example' # str | The name of the operation resource.
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
        api_response = api_instance.retail_projects_operations_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of ProjectsApi->retail_projects_operations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_operations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the operation resource. | 
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

[**GoogleLongrunningOperation**](GoogleLongrunningOperation.md)

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

# **retail_projects_operations_list**
> GoogleLongrunningListOperationsResponse retail_projects_operations_list(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token)



Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_longrunning_list_operations_response import GoogleLongrunningListOperationsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    name = 'name_example' # str | The name of the operation's parent resource.
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
    filter = 'filter_example' # str | The standard list filter. (optional)
    page_size = 56 # int | The standard list page size. (optional)
    page_token = 'page_token_example' # str | The standard list page token. (optional)

    try:
        api_response = api_instance.retail_projects_operations_list(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->retail_projects_operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the operation&#39;s parent resource. | 
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
 **filter** | **str**| The standard list filter. | [optional] 
 **page_size** | **int**| The standard list page size. | [optional] 
 **page_token** | **str**| The standard list page token. | [optional] 

### Return type

[**GoogleLongrunningListOperationsResponse**](GoogleLongrunningListOperationsResponse.md)

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

# **retail_projects_retail_project_accept_terms**
> GoogleCloudRetailV2alphaProject retail_projects_retail_project_accept_terms(project, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, body=body)



Accepts service terms for this project. By making requests to this API, you agree to the terms of service linked below. https://cloud.google.com/retail/data-use-terms

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_retail_v2alpha_project import GoogleCloudRetailV2alphaProject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://retail.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://retail.googleapis.com"
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
    project = 'project_example' # str | Required. Full resource name of the project. Format: `projects/{project_number_or_id}/retailProject`
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
        api_response = api_instance.retail_projects_retail_project_accept_terms(project, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, body=body)
        print("The response of ProjectsApi->retail_projects_retail_project_accept_terms:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->retail_projects_retail_project_accept_terms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| Required. Full resource name of the project. Format: &#x60;projects/{project_number_or_id}/retailProject&#x60; | 
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

[**GoogleCloudRetailV2alphaProject**](GoogleCloudRetailV2alphaProject.md)

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

