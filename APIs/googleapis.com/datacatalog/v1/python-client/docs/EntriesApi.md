# openapi_client.EntriesApi

All URIs are relative to *https://datacatalog.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**datacatalog_entries_lookup**](EntriesApi.md#datacatalog_entries_lookup) | **GET** /v1/entries:lookup | 


# **datacatalog_entries_lookup**
> GoogleCloudDatacatalogV1Entry datacatalog_entries_lookup(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, fully_qualified_name=fully_qualified_name, linked_resource=linked_resource, location=location, project=project, sql_resource=sql_resource)



Gets an entry by its target resource name. The resource name comes from the source Google Cloud Platform service.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_datacatalog_v1_entry import GoogleCloudDatacatalogV1Entry
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://datacatalog.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://datacatalog.googleapis.com"
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
    api_instance = openapi_client.EntriesApi(api_client)
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
    fully_qualified_name = 'fully_qualified_name_example' # str | [Fully Qualified Name (FQN)](https://cloud.google.com//data-catalog/docs/fully-qualified-names) of the resource. FQNs take two forms: * For non-regionalized resources: `{SYSTEM}:{PROJECT}.{PATH_TO_RESOURCE_SEPARATED_WITH_DOTS}` * For regionalized resources: `{SYSTEM}:{PROJECT}.{LOCATION_ID}.{PATH_TO_RESOURCE_SEPARATED_WITH_DOTS}` Example for a DPMS table: `dataproc_metastore:{PROJECT_ID}.{LOCATION_ID}.{INSTANCE_ID}.{DATABASE_ID}.{TABLE_ID}` (optional)
    linked_resource = 'linked_resource_example' # str | The full name of the Google Cloud Platform resource the Data Catalog entry represents. For more information, see [Full Resource Name] (https://cloud.google.com/apis/design/resource_names#full_resource_name). Full names are case-sensitive. For example: * `//bigquery.googleapis.com/projects/{PROJECT_ID}/datasets/{DATASET_ID}/tables/{TABLE_ID}` * `//pubsub.googleapis.com/projects/{PROJECT_ID}/topics/{TOPIC_ID}` (optional)
    location = 'location_example' # str | Location where the lookup should be performed. Required to lookup entry that is not a part of `DPMS` or `DATAPLEX` `integrated_system` using its `fully_qualified_name`. Ignored in other cases. (optional)
    project = 'project_example' # str | Project where the lookup should be performed. Required to lookup entry that is not a part of `DPMS` or `DATAPLEX` `integrated_system` using its `fully_qualified_name`. Ignored in other cases. (optional)
    sql_resource = 'sql_resource_example' # str | The SQL name of the entry. SQL names are case-sensitive. Examples: * `pubsub.topic.{PROJECT_ID}.{TOPIC_ID}` * `pubsub.topic.{PROJECT_ID}.`\\``{TOPIC.ID.SEPARATED.WITH.DOTS}`\\` * `bigquery.table.{PROJECT_ID}.{DATASET_ID}.{TABLE_ID}` * `bigquery.dataset.{PROJECT_ID}.{DATASET_ID}` * `datacatalog.entry.{PROJECT_ID}.{LOCATION_ID}.{ENTRY_GROUP_ID}.{ENTRY_ID}` Identifiers (`*_ID`) should comply with the [Lexical structure in Standard SQL] (https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical). (optional)

    try:
        api_response = api_instance.datacatalog_entries_lookup(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, fully_qualified_name=fully_qualified_name, linked_resource=linked_resource, location=location, project=project, sql_resource=sql_resource)
        print("The response of EntriesApi->datacatalog_entries_lookup:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EntriesApi->datacatalog_entries_lookup: %s\n" % e)
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
 **fully_qualified_name** | **str**| [Fully Qualified Name (FQN)](https://cloud.google.com//data-catalog/docs/fully-qualified-names) of the resource. FQNs take two forms: * For non-regionalized resources: &#x60;{SYSTEM}:{PROJECT}.{PATH_TO_RESOURCE_SEPARATED_WITH_DOTS}&#x60; * For regionalized resources: &#x60;{SYSTEM}:{PROJECT}.{LOCATION_ID}.{PATH_TO_RESOURCE_SEPARATED_WITH_DOTS}&#x60; Example for a DPMS table: &#x60;dataproc_metastore:{PROJECT_ID}.{LOCATION_ID}.{INSTANCE_ID}.{DATABASE_ID}.{TABLE_ID}&#x60; | [optional] 
 **linked_resource** | **str**| The full name of the Google Cloud Platform resource the Data Catalog entry represents. For more information, see [Full Resource Name] (https://cloud.google.com/apis/design/resource_names#full_resource_name). Full names are case-sensitive. For example: * &#x60;//bigquery.googleapis.com/projects/{PROJECT_ID}/datasets/{DATASET_ID}/tables/{TABLE_ID}&#x60; * &#x60;//pubsub.googleapis.com/projects/{PROJECT_ID}/topics/{TOPIC_ID}&#x60; | [optional] 
 **location** | **str**| Location where the lookup should be performed. Required to lookup entry that is not a part of &#x60;DPMS&#x60; or &#x60;DATAPLEX&#x60; &#x60;integrated_system&#x60; using its &#x60;fully_qualified_name&#x60;. Ignored in other cases. | [optional] 
 **project** | **str**| Project where the lookup should be performed. Required to lookup entry that is not a part of &#x60;DPMS&#x60; or &#x60;DATAPLEX&#x60; &#x60;integrated_system&#x60; using its &#x60;fully_qualified_name&#x60;. Ignored in other cases. | [optional] 
 **sql_resource** | **str**| The SQL name of the entry. SQL names are case-sensitive. Examples: * &#x60;pubsub.topic.{PROJECT_ID}.{TOPIC_ID}&#x60; * &#x60;pubsub.topic.{PROJECT_ID}.&#x60;\\&#x60;&#x60;{TOPIC.ID.SEPARATED.WITH.DOTS}&#x60;\\&#x60; * &#x60;bigquery.table.{PROJECT_ID}.{DATASET_ID}.{TABLE_ID}&#x60; * &#x60;bigquery.dataset.{PROJECT_ID}.{DATASET_ID}&#x60; * &#x60;datacatalog.entry.{PROJECT_ID}.{LOCATION_ID}.{ENTRY_GROUP_ID}.{ENTRY_ID}&#x60; Identifiers (&#x60;*_ID&#x60;) should comply with the [Lexical structure in Standard SQL] (https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical). | [optional] 

### Return type

[**GoogleCloudDatacatalogV1Entry**](GoogleCloudDatacatalogV1Entry.md)

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

