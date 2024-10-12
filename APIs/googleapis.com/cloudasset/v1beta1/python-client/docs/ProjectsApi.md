# openapi_client.ProjectsApi

All URIs are relative to *https://cloudasset.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloudasset_projects_batch_get_assets_history**](ProjectsApi.md#cloudasset_projects_batch_get_assets_history) | **GET** /v1beta1/{parent}:batchGetAssetsHistory | 
[**cloudasset_projects_export_assets**](ProjectsApi.md#cloudasset_projects_export_assets) | **POST** /v1beta1/{parent}:exportAssets | 
[**cloudasset_projects_operations_get**](ProjectsApi.md#cloudasset_projects_operations_get) | **GET** /v1beta1/{name} | 


# **cloudasset_projects_batch_get_assets_history**
> BatchGetAssetsHistoryResponse cloudasset_projects_batch_get_assets_history(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, asset_names=asset_names, content_type=content_type, read_time_window_end_time=read_time_window_end_time, read_time_window_start_time=read_time_window_start_time)



Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.batch_get_assets_history_response import BatchGetAssetsHistoryResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudasset.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudasset.googleapis.com"
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
    parent = 'parent_example' # str | Required. The relative name of the root asset. It can only be an organization number (such as \"organizations/123\"), a project ID (such as \"projects/my-project-id\")\", or a project number (such as \"projects/12345\").
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
    asset_names = ['asset_names_example'] # List[str] | A list of the full names of the assets. For example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more info. The request becomes a no-op if the asset name list is empty, and the max size of the asset name list is 100 in one request. (optional)
    content_type = 'content_type_example' # str | Optional. The content type. (optional)
    read_time_window_end_time = 'read_time_window_end_time_example' # str | End time of the time window (inclusive). If not specified, the current timestamp is used instead. (optional)
    read_time_window_start_time = 'read_time_window_start_time_example' # str | Start time of the time window (exclusive). (optional)

    try:
        api_response = api_instance.cloudasset_projects_batch_get_assets_history(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, asset_names=asset_names, content_type=content_type, read_time_window_end_time=read_time_window_end_time, read_time_window_start_time=read_time_window_start_time)
        print("The response of ProjectsApi->cloudasset_projects_batch_get_assets_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->cloudasset_projects_batch_get_assets_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The relative name of the root asset. It can only be an organization number (such as \&quot;organizations/123\&quot;), a project ID (such as \&quot;projects/my-project-id\&quot;)\&quot;, or a project number (such as \&quot;projects/12345\&quot;). | 
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
 **asset_names** | [**List[str]**](str.md)| A list of the full names of the assets. For example: &#x60;//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1&#x60;. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more info. The request becomes a no-op if the asset name list is empty, and the max size of the asset name list is 100 in one request. | [optional] 
 **content_type** | **str**| Optional. The content type. | [optional] 
 **read_time_window_end_time** | **str**| End time of the time window (inclusive). If not specified, the current timestamp is used instead. | [optional] 
 **read_time_window_start_time** | **str**| Start time of the time window (exclusive). | [optional] 

### Return type

[**BatchGetAssetsHistoryResponse**](BatchGetAssetsHistoryResponse.md)

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

# **cloudasset_projects_export_assets**
> Operation cloudasset_projects_export_assets(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, export_assets_request=export_assets_request)



Exports assets with time and resource types to a given Cloud Storage location. The output format is newline-delimited JSON. This API implements the google.longrunning.Operation API allowing you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.export_assets_request import ExportAssetsRequest
from openapi_client.models.operation import Operation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudasset.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudasset.googleapis.com"
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
    parent = 'parent_example' # str | Required. The relative name of the root asset. This can only be an organization number (such as \"organizations/123\"), a project ID (such as \"projects/my-project-id\"), a project number (such as \"projects/12345\"), or a folder number (such as \"folders/123\").
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
    export_assets_request = openapi_client.ExportAssetsRequest() # ExportAssetsRequest |  (optional)

    try:
        api_response = api_instance.cloudasset_projects_export_assets(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, export_assets_request=export_assets_request)
        print("The response of ProjectsApi->cloudasset_projects_export_assets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->cloudasset_projects_export_assets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The relative name of the root asset. This can only be an organization number (such as \&quot;organizations/123\&quot;), a project ID (such as \&quot;projects/my-project-id\&quot;), a project number (such as \&quot;projects/12345\&quot;), or a folder number (such as \&quot;folders/123\&quot;). | 
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
 **export_assets_request** | [**ExportAssetsRequest**](ExportAssetsRequest.md)|  | [optional] 

### Return type

[**Operation**](Operation.md)

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

# **cloudasset_projects_operations_get**
> Operation cloudasset_projects_operations_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.operation import Operation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudasset.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudasset.googleapis.com"
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
        api_response = api_instance.cloudasset_projects_operations_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of ProjectsApi->cloudasset_projects_operations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->cloudasset_projects_operations_get: %s\n" % e)
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

[**Operation**](Operation.md)

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

