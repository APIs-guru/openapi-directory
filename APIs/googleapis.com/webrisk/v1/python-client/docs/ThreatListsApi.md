# openapi_client.ThreatListsApi

All URIs are relative to *https://webrisk.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webrisk_threat_lists_compute_diff**](ThreatListsApi.md#webrisk_threat_lists_compute_diff) | **GET** /v1/threatLists:computeDiff | 


# **webrisk_threat_lists_compute_diff**
> GoogleCloudWebriskV1ComputeThreatListDiffResponse webrisk_threat_lists_compute_diff(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, constraints_max_database_entries=constraints_max_database_entries, constraints_max_diff_entries=constraints_max_diff_entries, constraints_supported_compressions=constraints_supported_compressions, threat_type=threat_type, version_token=version_token)



Gets the most recent threat list diffs. These diffs should be applied to a local database of hashes to keep it up-to-date. If the local database is empty or excessively out-of-date, a complete snapshot of the database will be returned. This Method only updates a single ThreatList at a time. To update multiple ThreatList databases, this method needs to be called once for each list.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_webrisk_v1_compute_threat_list_diff_response import GoogleCloudWebriskV1ComputeThreatListDiffResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://webrisk.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://webrisk.googleapis.com"
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
    api_instance = openapi_client.ThreatListsApi(api_client)
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
    constraints_max_database_entries = 56 # int | Sets the maximum number of entries that the client is willing to have in the local database. This should be a power of 2 between 2**10 and 2**20. If zero, no database size limit is set. (optional)
    constraints_max_diff_entries = 56 # int | The maximum size in number of entries. The diff will not contain more entries than this value. This should be a power of 2 between 2**10 and 2**20. If zero, no diff size limit is set. (optional)
    constraints_supported_compressions = ['constraints_supported_compressions_example'] # List[str] | The compression types supported by the client. (optional)
    threat_type = 'threat_type_example' # str | Required. The threat list to update. Only a single ThreatType should be specified per request. If you want to handle multiple ThreatTypes, you must make one request per ThreatType. (optional)
    version_token = 'version_token_example' # str | The current version token of the client for the requested list (the client version that was received from the last successful diff). If the client does not have a version token (this is the first time calling ComputeThreatListDiff), this may be left empty and a full database snapshot will be returned. (optional)

    try:
        api_response = api_instance.webrisk_threat_lists_compute_diff(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, constraints_max_database_entries=constraints_max_database_entries, constraints_max_diff_entries=constraints_max_diff_entries, constraints_supported_compressions=constraints_supported_compressions, threat_type=threat_type, version_token=version_token)
        print("The response of ThreatListsApi->webrisk_threat_lists_compute_diff:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThreatListsApi->webrisk_threat_lists_compute_diff: %s\n" % e)
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
 **constraints_max_database_entries** | **int**| Sets the maximum number of entries that the client is willing to have in the local database. This should be a power of 2 between 2**10 and 2**20. If zero, no database size limit is set. | [optional] 
 **constraints_max_diff_entries** | **int**| The maximum size in number of entries. The diff will not contain more entries than this value. This should be a power of 2 between 2**10 and 2**20. If zero, no diff size limit is set. | [optional] 
 **constraints_supported_compressions** | [**List[str]**](str.md)| The compression types supported by the client. | [optional] 
 **threat_type** | **str**| Required. The threat list to update. Only a single ThreatType should be specified per request. If you want to handle multiple ThreatTypes, you must make one request per ThreatType. | [optional] 
 **version_token** | **str**| The current version token of the client for the requested list (the client version that was received from the last successful diff). If the client does not have a version token (this is the first time calling ComputeThreatListDiff), this may be left empty and a full database snapshot will be returned. | [optional] 

### Return type

[**GoogleCloudWebriskV1ComputeThreatListDiffResponse**](GoogleCloudWebriskV1ComputeThreatListDiffResponse.md)

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

