# openapi_client.ProjectsApi

All URIs are relative to *https://bigquerydatatransfer.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bigquerydatatransfer_projects_locations_data_sources_check_valid_creds**](ProjectsApi.md#bigquerydatatransfer_projects_locations_data_sources_check_valid_creds) | **POST** /v1/{name}:checkValidCreds | 
[**bigquerydatatransfer_projects_locations_data_sources_list**](ProjectsApi.md#bigquerydatatransfer_projects_locations_data_sources_list) | **GET** /v1/{parent}/dataSources | 
[**bigquerydatatransfer_projects_locations_enroll_data_sources**](ProjectsApi.md#bigquerydatatransfer_projects_locations_enroll_data_sources) | **POST** /v1/{name}:enrollDataSources | 
[**bigquerydatatransfer_projects_locations_list**](ProjectsApi.md#bigquerydatatransfer_projects_locations_list) | **GET** /v1/{name}/locations | 
[**bigquerydatatransfer_projects_locations_unenroll_data_sources**](ProjectsApi.md#bigquerydatatransfer_projects_locations_unenroll_data_sources) | **POST** /v1/{name}:unenrollDataSources | 
[**bigquerydatatransfer_projects_transfer_configs_create**](ProjectsApi.md#bigquerydatatransfer_projects_transfer_configs_create) | **POST** /v1/{parent}/transferConfigs | 
[**bigquerydatatransfer_projects_transfer_configs_list**](ProjectsApi.md#bigquerydatatransfer_projects_transfer_configs_list) | **GET** /v1/{parent}/transferConfigs | 
[**bigquerydatatransfer_projects_transfer_configs_patch**](ProjectsApi.md#bigquerydatatransfer_projects_transfer_configs_patch) | **PATCH** /v1/{name} | 
[**bigquerydatatransfer_projects_transfer_configs_runs_delete**](ProjectsApi.md#bigquerydatatransfer_projects_transfer_configs_runs_delete) | **DELETE** /v1/{name} | 
[**bigquerydatatransfer_projects_transfer_configs_runs_get**](ProjectsApi.md#bigquerydatatransfer_projects_transfer_configs_runs_get) | **GET** /v1/{name} | 
[**bigquerydatatransfer_projects_transfer_configs_runs_list**](ProjectsApi.md#bigquerydatatransfer_projects_transfer_configs_runs_list) | **GET** /v1/{parent}/runs | 
[**bigquerydatatransfer_projects_transfer_configs_runs_transfer_logs_list**](ProjectsApi.md#bigquerydatatransfer_projects_transfer_configs_runs_transfer_logs_list) | **GET** /v1/{parent}/transferLogs | 
[**bigquerydatatransfer_projects_transfer_configs_schedule_runs**](ProjectsApi.md#bigquerydatatransfer_projects_transfer_configs_schedule_runs) | **POST** /v1/{parent}:scheduleRuns | 
[**bigquerydatatransfer_projects_transfer_configs_start_manual_runs**](ProjectsApi.md#bigquerydatatransfer_projects_transfer_configs_start_manual_runs) | **POST** /v1/{parent}:startManualRuns | 


# **bigquerydatatransfer_projects_locations_data_sources_check_valid_creds**
> CheckValidCredsResponse bigquerydatatransfer_projects_locations_data_sources_check_valid_creds(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, body=body)



Returns true if valid credentials exist for the given data source and requesting user.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.check_valid_creds_response import CheckValidCredsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://bigquerydatatransfer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://bigquerydatatransfer.googleapis.com"
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
    name = 'name_example' # str | Required. The data source in the form: `projects/{project_id}/dataSources/{data_source_id}` or `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`.
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
        api_response = api_instance.bigquerydatatransfer_projects_locations_data_sources_check_valid_creds(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, body=body)
        print("The response of ProjectsApi->bigquerydatatransfer_projects_locations_data_sources_check_valid_creds:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->bigquerydatatransfer_projects_locations_data_sources_check_valid_creds: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The data source in the form: &#x60;projects/{project_id}/dataSources/{data_source_id}&#x60; or &#x60;projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}&#x60;. | 
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

[**CheckValidCredsResponse**](CheckValidCredsResponse.md)

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

# **bigquerydatatransfer_projects_locations_data_sources_list**
> ListDataSourcesResponse bigquerydatatransfer_projects_locations_data_sources_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)



Lists supported data sources and returns their settings.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_data_sources_response import ListDataSourcesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://bigquerydatatransfer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://bigquerydatatransfer.googleapis.com"
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
    parent = 'parent_example' # str | Required. The BigQuery project id for which data sources should be returned. Must be in the form: `projects/{project_id}` or `projects/{project_id}/locations/{location_id}`
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
    page_size = 56 # int | Page size. The default page size is the maximum value of 1000 results. (optional)
    page_token = 'page_token_example' # str | Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results. (optional)

    try:
        api_response = api_instance.bigquerydatatransfer_projects_locations_data_sources_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->bigquerydatatransfer_projects_locations_data_sources_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->bigquerydatatransfer_projects_locations_data_sources_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The BigQuery project id for which data sources should be returned. Must be in the form: &#x60;projects/{project_id}&#x60; or &#x60;projects/{project_id}/locations/{location_id}&#x60; | 
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
 **page_size** | **int**| Page size. The default page size is the maximum value of 1000 results. | [optional] 
 **page_token** | **str**| Pagination token, which can be used to request a specific page of &#x60;ListDataSourcesRequest&#x60; list results. For multiple-page results, &#x60;ListDataSourcesResponse&#x60; outputs a &#x60;next_page&#x60; token, which can be used as the &#x60;page_token&#x60; value to request the next page of list results. | [optional] 

### Return type

[**ListDataSourcesResponse**](ListDataSourcesResponse.md)

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

# **bigquerydatatransfer_projects_locations_enroll_data_sources**
> object bigquerydatatransfer_projects_locations_enroll_data_sources(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, enroll_data_sources_request=enroll_data_sources_request)



Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.enroll_data_sources_request import EnrollDataSourcesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://bigquerydatatransfer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://bigquerydatatransfer.googleapis.com"
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
    name = 'name_example' # str | The name of the project resource in the form: `projects/{project_id}`
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
    enroll_data_sources_request = openapi_client.EnrollDataSourcesRequest() # EnrollDataSourcesRequest |  (optional)

    try:
        api_response = api_instance.bigquerydatatransfer_projects_locations_enroll_data_sources(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, enroll_data_sources_request=enroll_data_sources_request)
        print("The response of ProjectsApi->bigquerydatatransfer_projects_locations_enroll_data_sources:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->bigquerydatatransfer_projects_locations_enroll_data_sources: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the project resource in the form: &#x60;projects/{project_id}&#x60; | 
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
 **enroll_data_sources_request** | [**EnrollDataSourcesRequest**](EnrollDataSourcesRequest.md)|  | [optional] 

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

# **bigquerydatatransfer_projects_locations_list**
> ListLocationsResponse bigquerydatatransfer_projects_locations_list(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token)



Lists information about the supported locations for this service.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_locations_response import ListLocationsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://bigquerydatatransfer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://bigquerydatatransfer.googleapis.com"
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
    name = 'name_example' # str | The resource that owns the locations collection, if applicable.
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
    filter = 'filter_example' # str | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `\"displayName=tokyo\"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). (optional)
    page_size = 56 # int | The maximum number of results to return. If not set, the service selects a default. (optional)
    page_token = 'page_token_example' # str | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. (optional)

    try:
        api_response = api_instance.bigquerydatatransfer_projects_locations_list(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->bigquerydatatransfer_projects_locations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->bigquerydatatransfer_projects_locations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The resource that owns the locations collection, if applicable. | 
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
 **filter** | **str**| A filter to narrow down results to a preferred subset. The filtering language accepts strings like &#x60;\&quot;displayName&#x3D;tokyo\&quot;&#x60;, and is documented in more detail in [AIP-160](https://google.aip.dev/160). | [optional] 
 **page_size** | **int**| The maximum number of results to return. If not set, the service selects a default. | [optional] 
 **page_token** | **str**| A page token received from the &#x60;next_page_token&#x60; field in the response. Send that page token to receive the subsequent page. | [optional] 

### Return type

[**ListLocationsResponse**](ListLocationsResponse.md)

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

# **bigquerydatatransfer_projects_locations_unenroll_data_sources**
> object bigquerydatatransfer_projects_locations_unenroll_data_sources(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, unenroll_data_sources_request=unenroll_data_sources_request)



Unenroll data sources in a user project. This allows users to remove transfer configurations for these data sources. They will no longer appear in the ListDataSources RPC and will also no longer appear in the [BigQuery UI](https://console.cloud.google.com/bigquery). Data transfers configurations of unenrolled data sources will not be scheduled.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.unenroll_data_sources_request import UnenrollDataSourcesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://bigquerydatatransfer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://bigquerydatatransfer.googleapis.com"
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
    name = 'name_example' # str | The name of the project resource in the form: `projects/{project_id}`
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
    unenroll_data_sources_request = openapi_client.UnenrollDataSourcesRequest() # UnenrollDataSourcesRequest |  (optional)

    try:
        api_response = api_instance.bigquerydatatransfer_projects_locations_unenroll_data_sources(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, unenroll_data_sources_request=unenroll_data_sources_request)
        print("The response of ProjectsApi->bigquerydatatransfer_projects_locations_unenroll_data_sources:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->bigquerydatatransfer_projects_locations_unenroll_data_sources: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the project resource in the form: &#x60;projects/{project_id}&#x60; | 
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
 **unenroll_data_sources_request** | [**UnenrollDataSourcesRequest**](UnenrollDataSourcesRequest.md)|  | [optional] 

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

# **bigquerydatatransfer_projects_transfer_configs_create**
> TransferConfig bigquerydatatransfer_projects_transfer_configs_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, authorization_code=authorization_code, service_account_name=service_account_name, version_info=version_info, transfer_config=transfer_config)



Creates a new data transfer configuration.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.transfer_config import TransferConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://bigquerydatatransfer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://bigquerydatatransfer.googleapis.com"
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
    parent = 'parent_example' # str | Required. The BigQuery project id where the transfer configuration should be created. Must be in the format projects/{project_id}/locations/{location_id} or projects/{project_id}. If specified location and location of the destination bigquery dataset do not match - the request will fail.
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
    authorization_code = 'authorization_code_example' # str | Optional OAuth2 authorization code to use with this transfer configuration. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' and new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, make a request to the following URL: https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=authorization_code&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the a data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to create the transfer config. (optional)
    service_account_name = 'service_account_name_example' # str | Optional service account email. If this field is set, the transfer config will be created with this service account's credentials. It requires that the requesting user calling this API has permissions to act as this service account. Note that not all data sources support service account credentials when creating a transfer config. For the latest list of data sources, read about [using service accounts](https://cloud.google.com/bigquery-transfer/docs/use-service-accounts). (optional)
    version_info = 'version_info_example' # str | Optional version info. This is required only if `transferConfig.dataSourceId` is not 'youtube_channel' and new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain version info, make a request to the following URL: https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=version_info&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the a data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to create the transfer config. (optional)
    transfer_config = openapi_client.TransferConfig() # TransferConfig |  (optional)

    try:
        api_response = api_instance.bigquerydatatransfer_projects_transfer_configs_create(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, authorization_code=authorization_code, service_account_name=service_account_name, version_info=version_info, transfer_config=transfer_config)
        print("The response of ProjectsApi->bigquerydatatransfer_projects_transfer_configs_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->bigquerydatatransfer_projects_transfer_configs_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The BigQuery project id where the transfer configuration should be created. Must be in the format projects/{project_id}/locations/{location_id} or projects/{project_id}. If specified location and location of the destination bigquery dataset do not match - the request will fail. | 
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
 **authorization_code** | **str**| Optional OAuth2 authorization code to use with this transfer configuration. This is required only if &#x60;transferConfig.dataSourceId&#x60; is &#39;youtube_channel&#39; and new credentials are needed, as indicated by &#x60;CheckValidCreds&#x60;. In order to obtain authorization_code, make a request to the following URL: https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?redirect_uri&#x3D;urn:ietf:wg:oauth:2.0:oob&amp;response_type&#x3D;authorization_code&amp;client_id&#x3D;client_id&amp;scope&#x3D;data_source_scopes * The client_id is the OAuth client_id of the a data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when &#x60;service_account_name&#x60; is used to create the transfer config. | [optional] 
 **service_account_name** | **str**| Optional service account email. If this field is set, the transfer config will be created with this service account&#39;s credentials. It requires that the requesting user calling this API has permissions to act as this service account. Note that not all data sources support service account credentials when creating a transfer config. For the latest list of data sources, read about [using service accounts](https://cloud.google.com/bigquery-transfer/docs/use-service-accounts). | [optional] 
 **version_info** | **str**| Optional version info. This is required only if &#x60;transferConfig.dataSourceId&#x60; is not &#39;youtube_channel&#39; and new credentials are needed, as indicated by &#x60;CheckValidCreds&#x60;. In order to obtain version info, make a request to the following URL: https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?redirect_uri&#x3D;urn:ietf:wg:oauth:2.0:oob&amp;response_type&#x3D;version_info&amp;client_id&#x3D;client_id&amp;scope&#x3D;data_source_scopes * The client_id is the OAuth client_id of the a data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when &#x60;service_account_name&#x60; is used to create the transfer config. | [optional] 
 **transfer_config** | [**TransferConfig**](TransferConfig.md)|  | [optional] 

### Return type

[**TransferConfig**](TransferConfig.md)

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

# **bigquerydatatransfer_projects_transfer_configs_list**
> ListTransferConfigsResponse bigquerydatatransfer_projects_transfer_configs_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, data_source_ids=data_source_ids, page_size=page_size, page_token=page_token)



Returns information about all transfer configs owned by a project in the specified location.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_transfer_configs_response import ListTransferConfigsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://bigquerydatatransfer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://bigquerydatatransfer.googleapis.com"
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
    parent = 'parent_example' # str | Required. The BigQuery project id for which transfer configs should be returned: `projects/{project_id}` or `projects/{project_id}/locations/{location_id}`
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
    data_source_ids = ['data_source_ids_example'] # List[str] | When specified, only configurations of requested data sources are returned. (optional)
    page_size = 56 # int | Page size. The default page size is the maximum value of 1000 results. (optional)
    page_token = 'page_token_example' # str | Pagination token, which can be used to request a specific page of `ListTransfersRequest` list results. For multiple-page results, `ListTransfersResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results. (optional)

    try:
        api_response = api_instance.bigquerydatatransfer_projects_transfer_configs_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, data_source_ids=data_source_ids, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->bigquerydatatransfer_projects_transfer_configs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->bigquerydatatransfer_projects_transfer_configs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The BigQuery project id for which transfer configs should be returned: &#x60;projects/{project_id}&#x60; or &#x60;projects/{project_id}/locations/{location_id}&#x60; | 
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
 **data_source_ids** | [**List[str]**](str.md)| When specified, only configurations of requested data sources are returned. | [optional] 
 **page_size** | **int**| Page size. The default page size is the maximum value of 1000 results. | [optional] 
 **page_token** | **str**| Pagination token, which can be used to request a specific page of &#x60;ListTransfersRequest&#x60; list results. For multiple-page results, &#x60;ListTransfersResponse&#x60; outputs a &#x60;next_page&#x60; token, which can be used as the &#x60;page_token&#x60; value to request the next page of list results. | [optional] 

### Return type

[**ListTransferConfigsResponse**](ListTransferConfigsResponse.md)

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

# **bigquerydatatransfer_projects_transfer_configs_patch**
> TransferConfig bigquerydatatransfer_projects_transfer_configs_patch(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, authorization_code=authorization_code, service_account_name=service_account_name, update_mask=update_mask, version_info=version_info, transfer_config=transfer_config)



Updates a data transfer configuration. All fields must be set, even if they are not updated.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.transfer_config import TransferConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://bigquerydatatransfer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://bigquerydatatransfer.googleapis.com"
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
    name = 'name_example' # str | The resource name of the transfer config. Transfer config names have the form either `projects/{project_id}/locations/{region}/transferConfigs/{config_id}` or `projects/{project_id}/transferConfigs/{config_id}`, where `config_id` is usually a UUID, even though it is not guaranteed or required. The name is ignored when creating a transfer config.
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
    authorization_code = 'authorization_code_example' # str | Optional OAuth2 authorization code to use with this transfer configuration. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' and new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, make a request to the following URL: https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=authorization_code&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the a data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to update the transfer config. (optional)
    service_account_name = 'service_account_name_example' # str | Optional service account email. If this field is set, the transfer config will be created with this service account's credentials. It requires that the requesting user calling this API has permissions to act as this service account. Note that not all data sources support service account credentials when creating a transfer config. For the latest list of data sources, read about [using service accounts](https://cloud.google.com/bigquery-transfer/docs/use-service-accounts). (optional)
    update_mask = 'update_mask_example' # str | Required. Required list of fields to be updated in this request. (optional)
    version_info = 'version_info_example' # str | Optional version info. This is required only if `transferConfig.dataSourceId` is not 'youtube_channel' and new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain version info, make a request to the following URL: https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=version_info&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the a data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to update the transfer config. (optional)
    transfer_config = openapi_client.TransferConfig() # TransferConfig |  (optional)

    try:
        api_response = api_instance.bigquerydatatransfer_projects_transfer_configs_patch(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, authorization_code=authorization_code, service_account_name=service_account_name, update_mask=update_mask, version_info=version_info, transfer_config=transfer_config)
        print("The response of ProjectsApi->bigquerydatatransfer_projects_transfer_configs_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->bigquerydatatransfer_projects_transfer_configs_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The resource name of the transfer config. Transfer config names have the form either &#x60;projects/{project_id}/locations/{region}/transferConfigs/{config_id}&#x60; or &#x60;projects/{project_id}/transferConfigs/{config_id}&#x60;, where &#x60;config_id&#x60; is usually a UUID, even though it is not guaranteed or required. The name is ignored when creating a transfer config. | 
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
 **authorization_code** | **str**| Optional OAuth2 authorization code to use with this transfer configuration. This is required only if &#x60;transferConfig.dataSourceId&#x60; is &#39;youtube_channel&#39; and new credentials are needed, as indicated by &#x60;CheckValidCreds&#x60;. In order to obtain authorization_code, make a request to the following URL: https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?redirect_uri&#x3D;urn:ietf:wg:oauth:2.0:oob&amp;response_type&#x3D;authorization_code&amp;client_id&#x3D;client_id&amp;scope&#x3D;data_source_scopes * The client_id is the OAuth client_id of the a data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when &#x60;service_account_name&#x60; is used to update the transfer config. | [optional] 
 **service_account_name** | **str**| Optional service account email. If this field is set, the transfer config will be created with this service account&#39;s credentials. It requires that the requesting user calling this API has permissions to act as this service account. Note that not all data sources support service account credentials when creating a transfer config. For the latest list of data sources, read about [using service accounts](https://cloud.google.com/bigquery-transfer/docs/use-service-accounts). | [optional] 
 **update_mask** | **str**| Required. Required list of fields to be updated in this request. | [optional] 
 **version_info** | **str**| Optional version info. This is required only if &#x60;transferConfig.dataSourceId&#x60; is not &#39;youtube_channel&#39; and new credentials are needed, as indicated by &#x60;CheckValidCreds&#x60;. In order to obtain version info, make a request to the following URL: https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?redirect_uri&#x3D;urn:ietf:wg:oauth:2.0:oob&amp;response_type&#x3D;version_info&amp;client_id&#x3D;client_id&amp;scope&#x3D;data_source_scopes * The client_id is the OAuth client_id of the a data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when &#x60;service_account_name&#x60; is used to update the transfer config. | [optional] 
 **transfer_config** | [**TransferConfig**](TransferConfig.md)|  | [optional] 

### Return type

[**TransferConfig**](TransferConfig.md)

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

# **bigquerydatatransfer_projects_transfer_configs_runs_delete**
> object bigquerydatatransfer_projects_transfer_configs_runs_delete(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Deletes the specified transfer run.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://bigquerydatatransfer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://bigquerydatatransfer.googleapis.com"
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
    name = 'name_example' # str | Required. The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
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
        api_response = api_instance.bigquerydatatransfer_projects_transfer_configs_runs_delete(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of ProjectsApi->bigquerydatatransfer_projects_transfer_configs_runs_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->bigquerydatatransfer_projects_transfer_configs_runs_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The field will contain name of the resource requested, for example: &#x60;projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}&#x60; or &#x60;projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}&#x60; | 
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

# **bigquerydatatransfer_projects_transfer_configs_runs_get**
> TransferRun bigquerydatatransfer_projects_transfer_configs_runs_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Returns information about the particular transfer run.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.transfer_run import TransferRun
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://bigquerydatatransfer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://bigquerydatatransfer.googleapis.com"
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
    name = 'name_example' # str | Required. The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
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
        api_response = api_instance.bigquerydatatransfer_projects_transfer_configs_runs_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of ProjectsApi->bigquerydatatransfer_projects_transfer_configs_runs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->bigquerydatatransfer_projects_transfer_configs_runs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The field will contain name of the resource requested, for example: &#x60;projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}&#x60; or &#x60;projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}&#x60; | 
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

[**TransferRun**](TransferRun.md)

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

# **bigquerydatatransfer_projects_transfer_configs_runs_list**
> ListTransferRunsResponse bigquerydatatransfer_projects_transfer_configs_runs_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token, run_attempt=run_attempt, states=states)



Returns information about running and completed transfer runs.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_transfer_runs_response import ListTransferRunsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://bigquerydatatransfer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://bigquerydatatransfer.googleapis.com"
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
    parent = 'parent_example' # str | Required. Name of transfer configuration for which transfer runs should be retrieved. Format of transfer configuration resource name is: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
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
    page_size = 56 # int | Page size. The default page size is the maximum value of 1000 results. (optional)
    page_token = 'page_token_example' # str | Pagination token, which can be used to request a specific page of `ListTransferRunsRequest` list results. For multiple-page results, `ListTransferRunsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results. (optional)
    run_attempt = 'run_attempt_example' # str | Indicates how run attempts are to be pulled. (optional)
    states = ['states_example'] # List[str] | When specified, only transfer runs with requested states are returned. (optional)

    try:
        api_response = api_instance.bigquerydatatransfer_projects_transfer_configs_runs_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token, run_attempt=run_attempt, states=states)
        print("The response of ProjectsApi->bigquerydatatransfer_projects_transfer_configs_runs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->bigquerydatatransfer_projects_transfer_configs_runs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. Name of transfer configuration for which transfer runs should be retrieved. Format of transfer configuration resource name is: &#x60;projects/{project_id}/transferConfigs/{config_id}&#x60; or &#x60;projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}&#x60;. | 
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
 **page_size** | **int**| Page size. The default page size is the maximum value of 1000 results. | [optional] 
 **page_token** | **str**| Pagination token, which can be used to request a specific page of &#x60;ListTransferRunsRequest&#x60; list results. For multiple-page results, &#x60;ListTransferRunsResponse&#x60; outputs a &#x60;next_page&#x60; token, which can be used as the &#x60;page_token&#x60; value to request the next page of list results. | [optional] 
 **run_attempt** | **str**| Indicates how run attempts are to be pulled. | [optional] 
 **states** | [**List[str]**](str.md)| When specified, only transfer runs with requested states are returned. | [optional] 

### Return type

[**ListTransferRunsResponse**](ListTransferRunsResponse.md)

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

# **bigquerydatatransfer_projects_transfer_configs_runs_transfer_logs_list**
> ListTransferLogsResponse bigquerydatatransfer_projects_transfer_configs_runs_transfer_logs_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, message_types=message_types, page_size=page_size, page_token=page_token)



Returns log messages for the transfer run.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_transfer_logs_response import ListTransferLogsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://bigquerydatatransfer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://bigquerydatatransfer.googleapis.com"
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
    parent = 'parent_example' # str | Required. Transfer run name in the form: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
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
    message_types = ['message_types_example'] # List[str] | Message types to return. If not populated - INFO, WARNING and ERROR messages are returned. (optional)
    page_size = 56 # int | Page size. The default page size is the maximum value of 1000 results. (optional)
    page_token = 'page_token_example' # str | Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results. (optional)

    try:
        api_response = api_instance.bigquerydatatransfer_projects_transfer_configs_runs_transfer_logs_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, message_types=message_types, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->bigquerydatatransfer_projects_transfer_configs_runs_transfer_logs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->bigquerydatatransfer_projects_transfer_configs_runs_transfer_logs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. Transfer run name in the form: &#x60;projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}&#x60; or &#x60;projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}&#x60; | 
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
 **message_types** | [**List[str]**](str.md)| Message types to return. If not populated - INFO, WARNING and ERROR messages are returned. | [optional] 
 **page_size** | **int**| Page size. The default page size is the maximum value of 1000 results. | [optional] 
 **page_token** | **str**| Pagination token, which can be used to request a specific page of &#x60;ListTransferLogsRequest&#x60; list results. For multiple-page results, &#x60;ListTransferLogsResponse&#x60; outputs a &#x60;next_page&#x60; token, which can be used as the &#x60;page_token&#x60; value to request the next page of list results. | [optional] 

### Return type

[**ListTransferLogsResponse**](ListTransferLogsResponse.md)

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

# **bigquerydatatransfer_projects_transfer_configs_schedule_runs**
> ScheduleTransferRunsResponse bigquerydatatransfer_projects_transfer_configs_schedule_runs(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, schedule_transfer_runs_request=schedule_transfer_runs_request)



Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.schedule_transfer_runs_request import ScheduleTransferRunsRequest
from openapi_client.models.schedule_transfer_runs_response import ScheduleTransferRunsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://bigquerydatatransfer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://bigquerydatatransfer.googleapis.com"
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
    parent = 'parent_example' # str | Required. Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
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
    schedule_transfer_runs_request = openapi_client.ScheduleTransferRunsRequest() # ScheduleTransferRunsRequest |  (optional)

    try:
        api_response = api_instance.bigquerydatatransfer_projects_transfer_configs_schedule_runs(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, schedule_transfer_runs_request=schedule_transfer_runs_request)
        print("The response of ProjectsApi->bigquerydatatransfer_projects_transfer_configs_schedule_runs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->bigquerydatatransfer_projects_transfer_configs_schedule_runs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. Transfer configuration name in the form: &#x60;projects/{project_id}/transferConfigs/{config_id}&#x60; or &#x60;projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}&#x60;. | 
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
 **schedule_transfer_runs_request** | [**ScheduleTransferRunsRequest**](ScheduleTransferRunsRequest.md)|  | [optional] 

### Return type

[**ScheduleTransferRunsResponse**](ScheduleTransferRunsResponse.md)

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

# **bigquerydatatransfer_projects_transfer_configs_start_manual_runs**
> StartManualTransferRunsResponse bigquerydatatransfer_projects_transfer_configs_start_manual_runs(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, start_manual_transfer_runs_request=start_manual_transfer_runs_request)



Start manual transfer runs to be executed now with schedule_time equal to current time. The transfer runs can be created for a time range where the run_time is between start_time (inclusive) and end_time (exclusive), or for a specific run_time.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.start_manual_transfer_runs_request import StartManualTransferRunsRequest
from openapi_client.models.start_manual_transfer_runs_response import StartManualTransferRunsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://bigquerydatatransfer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://bigquerydatatransfer.googleapis.com"
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
    parent = 'parent_example' # str | Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
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
    start_manual_transfer_runs_request = openapi_client.StartManualTransferRunsRequest() # StartManualTransferRunsRequest |  (optional)

    try:
        api_response = api_instance.bigquerydatatransfer_projects_transfer_configs_start_manual_runs(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, start_manual_transfer_runs_request=start_manual_transfer_runs_request)
        print("The response of ProjectsApi->bigquerydatatransfer_projects_transfer_configs_start_manual_runs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->bigquerydatatransfer_projects_transfer_configs_start_manual_runs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Transfer configuration name in the form: &#x60;projects/{project_id}/transferConfigs/{config_id}&#x60; or &#x60;projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}&#x60;. | 
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
 **start_manual_transfer_runs_request** | [**StartManualTransferRunsRequest**](StartManualTransferRunsRequest.md)|  | [optional] 

### Return type

[**StartManualTransferRunsResponse**](StartManualTransferRunsResponse.md)

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

