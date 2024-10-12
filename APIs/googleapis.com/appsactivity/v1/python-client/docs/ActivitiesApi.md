# openapi_client.ActivitiesApi

All URIs are relative to *https://www.googleapis.com/appsactivity/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appsactivity_activities_list**](ActivitiesApi.md#appsactivity_activities_list) | **GET** /activities | 


# **appsactivity_activities_list**
> ListActivitiesResponse appsactivity_activities_list(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, drive_ancestor_id=drive_ancestor_id, drive_file_id=drive_file_id, grouping_strategy=grouping_strategy, page_size=page_size, page_token=page_token, source=source, user_id=user_id)



Returns a list of activities visible to the current logged in user. Visible activities are determined by the visibility settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_activities_response import ListActivitiesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/appsactivity/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/appsactivity/v1"
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
    api_instance = openapi_client.ActivitiesApi(api_client)
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    drive_ancestor_id = 'drive_ancestor_id_example' # str | Identifies the Drive folder containing the items for which to return activities. (optional)
    drive_file_id = 'drive_file_id_example' # str | Identifies the Drive item to return activities for. (optional)
    grouping_strategy = 'grouping_strategy_example' # str | Indicates the strategy to use when grouping singleEvents items in the associated combinedEvent object. (optional)
    page_size = 56 # int | The maximum number of events to return on a page. The response includes a continuation token if there are more events. (optional)
    page_token = 'page_token_example' # str | A token to retrieve a specific page of results. (optional)
    source = 'source_example' # str | The Google service from which to return activities. Possible values of source are:  - drive.google.com (optional)
    user_id = 'user_id_example' # str | The ID used for ACL checks (does not filter the resulting event list by the assigned value). Use the special value me to indicate the currently authenticated user. (optional)

    try:
        api_response = api_instance.appsactivity_activities_list(alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, drive_ancestor_id=drive_ancestor_id, drive_file_id=drive_file_id, grouping_strategy=grouping_strategy, page_size=page_size, page_token=page_token, source=source, user_id=user_id)
        print("The response of ActivitiesApi->appsactivity_activities_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActivitiesApi->appsactivity_activities_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **drive_ancestor_id** | **str**| Identifies the Drive folder containing the items for which to return activities. | [optional] 
 **drive_file_id** | **str**| Identifies the Drive item to return activities for. | [optional] 
 **grouping_strategy** | **str**| Indicates the strategy to use when grouping singleEvents items in the associated combinedEvent object. | [optional] 
 **page_size** | **int**| The maximum number of events to return on a page. The response includes a continuation token if there are more events. | [optional] 
 **page_token** | **str**| A token to retrieve a specific page of results. | [optional] 
 **source** | **str**| The Google service from which to return activities. Possible values of source are:  - drive.google.com | [optional] 
 **user_id** | **str**| The ID used for ACL checks (does not filter the resulting event list by the assigned value). Use the special value me to indicate the currently authenticated user. | [optional] 

### Return type

[**ListActivitiesResponse**](ListActivitiesResponse.md)

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

