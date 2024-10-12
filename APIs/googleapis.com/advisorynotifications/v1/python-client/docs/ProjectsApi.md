# openapi_client.ProjectsApi

All URIs are relative to *https://advisorynotifications.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**advisorynotifications_projects_locations_notifications_get**](ProjectsApi.md#advisorynotifications_projects_locations_notifications_get) | **GET** /v1/{name} | 
[**advisorynotifications_projects_locations_notifications_list**](ProjectsApi.md#advisorynotifications_projects_locations_notifications_list) | **GET** /v1/{parent}/notifications | 


# **advisorynotifications_projects_locations_notifications_get**
> GoogleCloudAdvisorynotificationsV1Notification advisorynotifications_projects_locations_notifications_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, language_code=language_code)



Gets a notification.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_advisorynotifications_v1_notification import GoogleCloudAdvisorynotificationsV1Notification
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://advisorynotifications.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://advisorynotifications.googleapis.com"
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
    name = 'name_example' # str | Required. A name of the notification to retrieve. Format: organizations/{organization}/locations/{location}/notifications/{notification} or projects/{projects}/locations/{location}/notifications/{notification}.
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
    language_code = 'language_code_example' # str | ISO code for requested localization language. If unset, will be interpereted as \"en\". If the requested language is valid, but not supported for this notification, English will be returned with an \"Not applicable\" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error. (optional)

    try:
        api_response = api_instance.advisorynotifications_projects_locations_notifications_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, language_code=language_code)
        print("The response of ProjectsApi->advisorynotifications_projects_locations_notifications_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->advisorynotifications_projects_locations_notifications_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. A name of the notification to retrieve. Format: organizations/{organization}/locations/{location}/notifications/{notification} or projects/{projects}/locations/{location}/notifications/{notification}. | 
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
 **language_code** | **str**| ISO code for requested localization language. If unset, will be interpereted as \&quot;en\&quot;. If the requested language is valid, but not supported for this notification, English will be returned with an \&quot;Not applicable\&quot; LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error. | [optional] 

### Return type

[**GoogleCloudAdvisorynotificationsV1Notification**](GoogleCloudAdvisorynotificationsV1Notification.md)

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

# **advisorynotifications_projects_locations_notifications_list**
> GoogleCloudAdvisorynotificationsV1ListNotificationsResponse advisorynotifications_projects_locations_notifications_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, language_code=language_code, page_size=page_size, page_token=page_token, view=view)



Lists notifications under a given parent.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_advisorynotifications_v1_list_notifications_response import GoogleCloudAdvisorynotificationsV1ListNotificationsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://advisorynotifications.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://advisorynotifications.googleapis.com"
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
    parent = 'parent_example' # str | Required. The parent, which owns this collection of notifications. Must be of the form \"organizations/{organization}/locations/{location}\" or \"projects/{project}/locations/{location}\"
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
    language_code = 'language_code_example' # str | ISO code for requested localization language. If unset, will be interpereted as \"en\". If the requested language is valid, but not supported for this notification, English will be returned with an \"Not applicable\" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error. (optional)
    page_size = 56 # int | The maximum number of notifications to return. The service may return fewer than this value. If unspecified or equal to 0, at most 50 notifications will be returned. The maximum value is 50; values above 50 will be coerced to 50. (optional)
    page_token = 'page_token_example' # str | A page token returned from a previous request. When paginating, all other parameters provided in the request must match the call that returned the page token. (optional)
    view = 'view_example' # str | Specifies which parts of the notification resource should be returned in the response. (optional)

    try:
        api_response = api_instance.advisorynotifications_projects_locations_notifications_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, language_code=language_code, page_size=page_size, page_token=page_token, view=view)
        print("The response of ProjectsApi->advisorynotifications_projects_locations_notifications_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->advisorynotifications_projects_locations_notifications_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The parent, which owns this collection of notifications. Must be of the form \&quot;organizations/{organization}/locations/{location}\&quot; or \&quot;projects/{project}/locations/{location}\&quot; | 
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
 **language_code** | **str**| ISO code for requested localization language. If unset, will be interpereted as \&quot;en\&quot;. If the requested language is valid, but not supported for this notification, English will be returned with an \&quot;Not applicable\&quot; LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error. | [optional] 
 **page_size** | **int**| The maximum number of notifications to return. The service may return fewer than this value. If unspecified or equal to 0, at most 50 notifications will be returned. The maximum value is 50; values above 50 will be coerced to 50. | [optional] 
 **page_token** | **str**| A page token returned from a previous request. When paginating, all other parameters provided in the request must match the call that returned the page token. | [optional] 
 **view** | **str**| Specifies which parts of the notification resource should be returned in the response. | [optional] 

### Return type

[**GoogleCloudAdvisorynotificationsV1ListNotificationsResponse**](GoogleCloudAdvisorynotificationsV1ListNotificationsResponse.md)

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

