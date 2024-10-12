# openapi_client.TabledataApi

All URIs are relative to *https://bigquery.googleapis.com/bigquery/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bigquery_tabledata_insert_all**](TabledataApi.md#bigquery_tabledata_insert_all) | **POST** /projects/{projectId}/datasets/{datasetId}/tables/{tableId}/insertAll | 
[**bigquery_tabledata_list**](TabledataApi.md#bigquery_tabledata_list) | **GET** /projects/{projectId}/datasets/{datasetId}/tables/{tableId}/data | 


# **bigquery_tabledata_insert_all**
> TableDataInsertAllResponse bigquery_tabledata_insert_all(project_id, dataset_id, table_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, table_data_insert_all_request=table_data_insert_all_request)



Streams data into BigQuery one record at a time without needing to run a load job.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.table_data_insert_all_request import TableDataInsertAllRequest
from openapi_client.models.table_data_insert_all_response import TableDataInsertAllResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://bigquery.googleapis.com/bigquery/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://bigquery.googleapis.com/bigquery/v2"
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
    api_instance = openapi_client.TabledataApi(api_client)
    project_id = 'project_id_example' # str | Required. Project ID of the destination.
    dataset_id = 'dataset_id_example' # str | Required. Dataset ID of the destination.
    table_id = 'table_id_example' # str | Required. Table ID of the destination.
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
    table_data_insert_all_request = openapi_client.TableDataInsertAllRequest() # TableDataInsertAllRequest |  (optional)

    try:
        api_response = api_instance.bigquery_tabledata_insert_all(project_id, dataset_id, table_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, table_data_insert_all_request=table_data_insert_all_request)
        print("The response of TabledataApi->bigquery_tabledata_insert_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TabledataApi->bigquery_tabledata_insert_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**| Required. Project ID of the destination. | 
 **dataset_id** | **str**| Required. Dataset ID of the destination. | 
 **table_id** | **str**| Required. Table ID of the destination. | 
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
 **table_data_insert_all_request** | [**TableDataInsertAllRequest**](TableDataInsertAllRequest.md)|  | [optional] 

### Return type

[**TableDataInsertAllResponse**](TableDataInsertAllResponse.md)

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

# **bigquery_tabledata_list**
> TableDataList bigquery_tabledata_list(project_id, dataset_id, table_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, format_options_use_int64_timestamp=format_options_use_int64_timestamp, max_results=max_results, page_token=page_token, selected_fields=selected_fields, start_index=start_index)



List the content of a table in rows.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.table_data_list import TableDataList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://bigquery.googleapis.com/bigquery/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://bigquery.googleapis.com/bigquery/v2"
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
    api_instance = openapi_client.TabledataApi(api_client)
    project_id = 'project_id_example' # str | Required. Project id of the table to list.
    dataset_id = 'dataset_id_example' # str | Required. Dataset id of the table to list.
    table_id = 'table_id_example' # str | Required. Table id of the table to list.
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
    format_options_use_int64_timestamp = True # bool | Optional. Output timestamp as usec int64. Default is false. (optional)
    max_results = 56 # int | Row limit of the table. (optional)
    page_token = 'page_token_example' # str | To retrieve the next page of table data, set this field to the string provided in the pageToken field of the response body from your previous call to tabledata.list. (optional)
    selected_fields = 'selected_fields_example' # str | Subset of fields to return, supports select into sub fields. Example: selected_fields = \"a,e.d.f\"; (optional)
    start_index = 'start_index_example' # str | Start row index of the table. (optional)

    try:
        api_response = api_instance.bigquery_tabledata_list(project_id, dataset_id, table_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, format_options_use_int64_timestamp=format_options_use_int64_timestamp, max_results=max_results, page_token=page_token, selected_fields=selected_fields, start_index=start_index)
        print("The response of TabledataApi->bigquery_tabledata_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TabledataApi->bigquery_tabledata_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**| Required. Project id of the table to list. | 
 **dataset_id** | **str**| Required. Dataset id of the table to list. | 
 **table_id** | **str**| Required. Table id of the table to list. | 
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
 **format_options_use_int64_timestamp** | **bool**| Optional. Output timestamp as usec int64. Default is false. | [optional] 
 **max_results** | **int**| Row limit of the table. | [optional] 
 **page_token** | **str**| To retrieve the next page of table data, set this field to the string provided in the pageToken field of the response body from your previous call to tabledata.list. | [optional] 
 **selected_fields** | **str**| Subset of fields to return, supports select into sub fields. Example: selected_fields &#x3D; \&quot;a,e.d.f\&quot;; | [optional] 
 **start_index** | **str**| Start row index of the table. | [optional] 

### Return type

[**TableDataList**](TableDataList.md)

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

