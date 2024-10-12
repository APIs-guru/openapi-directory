# openapi_client.ProjectsApi

All URIs are relative to *https://policyanalyzer.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**policyanalyzer_projects_locations_activity_types_activities_query**](ProjectsApi.md#policyanalyzer_projects_locations_activity_types_activities_query) | **GET** /v1/{parent}/activities:query | 


# **policyanalyzer_projects_locations_activity_types_activities_query**
> GoogleCloudPolicyanalyzerV1QueryActivityResponse policyanalyzer_projects_locations_activity_types_activities_query(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token)



Queries policy activities on Google Cloud resources.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_policyanalyzer_v1_query_activity_response import GoogleCloudPolicyanalyzerV1QueryActivityResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://policyanalyzer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://policyanalyzer.googleapis.com"
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
    parent = 'parent_example' # str | Required. The container resource on which to execute the request. Acceptable formats: `projects/[PROJECT_ID|PROJECT_NUMBER]/locations/[LOCATION]/activityTypes/[ACTIVITY_TYPE]` LOCATION here refers to Google Cloud Locations: https://cloud.google.com/about/locations/
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
    filter = 'filter_example' # str | Optional. Filter expression to restrict the activities returned. For serviceAccountLastAuthentication activities, supported filters are: - `activities.full_resource_name {=} [STRING]` - `activities.fullResourceName {=} [STRING]` where `[STRING]` is the full resource name of the service account. For serviceAccountKeyLastAuthentication activities, supported filters are: - `activities.full_resource_name {=} [STRING]` - `activities.fullResourceName {=} [STRING]` where `[STRING]` is the full resource name of the service account key. (optional)
    page_size = 56 # int | Optional. The maximum number of results to return from this request. Max limit is 1000. Non-positive values are ignored. The presence of `nextPageToken` in the response indicates that more results might be available. (optional)
    page_token = 'page_token_example' # str | Optional. If present, then retrieve the next batch of results from the preceding call to this method. `pageToken` must be the value of `nextPageToken` from the previous response. The values of other method parameters should be identical to those in the previous call. (optional)

    try:
        api_response = api_instance.policyanalyzer_projects_locations_activity_types_activities_query(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token)
        print("The response of ProjectsApi->policyanalyzer_projects_locations_activity_types_activities_query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->policyanalyzer_projects_locations_activity_types_activities_query: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The container resource on which to execute the request. Acceptable formats: &#x60;projects/[PROJECT_ID|PROJECT_NUMBER]/locations/[LOCATION]/activityTypes/[ACTIVITY_TYPE]&#x60; LOCATION here refers to Google Cloud Locations: https://cloud.google.com/about/locations/ | 
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
 **filter** | **str**| Optional. Filter expression to restrict the activities returned. For serviceAccountLastAuthentication activities, supported filters are: - &#x60;activities.full_resource_name {&#x3D;} [STRING]&#x60; - &#x60;activities.fullResourceName {&#x3D;} [STRING]&#x60; where &#x60;[STRING]&#x60; is the full resource name of the service account. For serviceAccountKeyLastAuthentication activities, supported filters are: - &#x60;activities.full_resource_name {&#x3D;} [STRING]&#x60; - &#x60;activities.fullResourceName {&#x3D;} [STRING]&#x60; where &#x60;[STRING]&#x60; is the full resource name of the service account key. | [optional] 
 **page_size** | **int**| Optional. The maximum number of results to return from this request. Max limit is 1000. Non-positive values are ignored. The presence of &#x60;nextPageToken&#x60; in the response indicates that more results might be available. | [optional] 
 **page_token** | **str**| Optional. If present, then retrieve the next batch of results from the preceding call to this method. &#x60;pageToken&#x60; must be the value of &#x60;nextPageToken&#x60; from the previous response. The values of other method parameters should be identical to those in the previous call. | [optional] 

### Return type

[**GoogleCloudPolicyanalyzerV1QueryActivityResponse**](GoogleCloudPolicyanalyzerV1QueryActivityResponse.md)

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

