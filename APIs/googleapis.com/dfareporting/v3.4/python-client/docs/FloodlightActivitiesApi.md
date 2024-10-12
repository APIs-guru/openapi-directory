# openapi_client.FloodlightActivitiesApi

All URIs are relative to *https://dfareporting.googleapis.com/dfareporting/v3.4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dfareporting_floodlight_activities_delete**](FloodlightActivitiesApi.md#dfareporting_floodlight_activities_delete) | **DELETE** /userprofiles/{profileId}/floodlightActivities/{id} | 
[**dfareporting_floodlight_activities_generatetag**](FloodlightActivitiesApi.md#dfareporting_floodlight_activities_generatetag) | **POST** /userprofiles/{profileId}/floodlightActivities/generatetag | 
[**dfareporting_floodlight_activities_get**](FloodlightActivitiesApi.md#dfareporting_floodlight_activities_get) | **GET** /userprofiles/{profileId}/floodlightActivities/{id} | 
[**dfareporting_floodlight_activities_insert**](FloodlightActivitiesApi.md#dfareporting_floodlight_activities_insert) | **POST** /userprofiles/{profileId}/floodlightActivities | 
[**dfareporting_floodlight_activities_list**](FloodlightActivitiesApi.md#dfareporting_floodlight_activities_list) | **GET** /userprofiles/{profileId}/floodlightActivities | 
[**dfareporting_floodlight_activities_patch**](FloodlightActivitiesApi.md#dfareporting_floodlight_activities_patch) | **PATCH** /userprofiles/{profileId}/floodlightActivities | 
[**dfareporting_floodlight_activities_update**](FloodlightActivitiesApi.md#dfareporting_floodlight_activities_update) | **PUT** /userprofiles/{profileId}/floodlightActivities | 


# **dfareporting_floodlight_activities_delete**
> dfareporting_floodlight_activities_delete(profile_id, id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Deletes an existing floodlight activity.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dfareporting.googleapis.com/dfareporting/v3.4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dfareporting.googleapis.com/dfareporting/v3.4"
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
    api_instance = openapi_client.FloodlightActivitiesApi(api_client)
    profile_id = 'profile_id_example' # str | User profile ID associated with this request.
    id = 'id_example' # str | Floodlight activity ID.
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
        api_instance.dfareporting_floodlight_activities_delete(profile_id, id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
    except Exception as e:
        print("Exception when calling FloodlightActivitiesApi->dfareporting_floodlight_activities_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| User profile ID associated with this request. | 
 **id** | **str**| Floodlight activity ID. | 
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

void (empty response body)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dfareporting_floodlight_activities_generatetag**
> FloodlightActivitiesGenerateTagResponse dfareporting_floodlight_activities_generatetag(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, floodlight_activity_id=floodlight_activity_id)



Generates a tag for a floodlight activity.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.floodlight_activities_generate_tag_response import FloodlightActivitiesGenerateTagResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dfareporting.googleapis.com/dfareporting/v3.4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dfareporting.googleapis.com/dfareporting/v3.4"
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
    api_instance = openapi_client.FloodlightActivitiesApi(api_client)
    profile_id = 'profile_id_example' # str | User profile ID associated with this request.
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
    floodlight_activity_id = 'floodlight_activity_id_example' # str | Floodlight activity ID for which we want to generate a tag. (optional)

    try:
        api_response = api_instance.dfareporting_floodlight_activities_generatetag(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, floodlight_activity_id=floodlight_activity_id)
        print("The response of FloodlightActivitiesApi->dfareporting_floodlight_activities_generatetag:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FloodlightActivitiesApi->dfareporting_floodlight_activities_generatetag: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| User profile ID associated with this request. | 
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
 **floodlight_activity_id** | **str**| Floodlight activity ID for which we want to generate a tag. | [optional] 

### Return type

[**FloodlightActivitiesGenerateTagResponse**](FloodlightActivitiesGenerateTagResponse.md)

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

# **dfareporting_floodlight_activities_get**
> FloodlightActivity dfareporting_floodlight_activities_get(profile_id, id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Gets one floodlight activity by ID.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.floodlight_activity import FloodlightActivity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dfareporting.googleapis.com/dfareporting/v3.4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dfareporting.googleapis.com/dfareporting/v3.4"
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
    api_instance = openapi_client.FloodlightActivitiesApi(api_client)
    profile_id = 'profile_id_example' # str | User profile ID associated with this request.
    id = 'id_example' # str | Floodlight activity ID.
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
        api_response = api_instance.dfareporting_floodlight_activities_get(profile_id, id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of FloodlightActivitiesApi->dfareporting_floodlight_activities_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FloodlightActivitiesApi->dfareporting_floodlight_activities_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| User profile ID associated with this request. | 
 **id** | **str**| Floodlight activity ID. | 
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

[**FloodlightActivity**](FloodlightActivity.md)

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

# **dfareporting_floodlight_activities_insert**
> FloodlightActivity dfareporting_floodlight_activities_insert(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, floodlight_activity=floodlight_activity)



Inserts a new floodlight activity.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.floodlight_activity import FloodlightActivity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dfareporting.googleapis.com/dfareporting/v3.4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dfareporting.googleapis.com/dfareporting/v3.4"
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
    api_instance = openapi_client.FloodlightActivitiesApi(api_client)
    profile_id = 'profile_id_example' # str | User profile ID associated with this request.
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
    floodlight_activity = openapi_client.FloodlightActivity() # FloodlightActivity |  (optional)

    try:
        api_response = api_instance.dfareporting_floodlight_activities_insert(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, floodlight_activity=floodlight_activity)
        print("The response of FloodlightActivitiesApi->dfareporting_floodlight_activities_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FloodlightActivitiesApi->dfareporting_floodlight_activities_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| User profile ID associated with this request. | 
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
 **floodlight_activity** | [**FloodlightActivity**](FloodlightActivity.md)|  | [optional] 

### Return type

[**FloodlightActivity**](FloodlightActivity.md)

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

# **dfareporting_floodlight_activities_list**
> FloodlightActivitiesListResponse dfareporting_floodlight_activities_list(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, floodlight_activity_group_ids=floodlight_activity_group_ids, floodlight_activity_group_name=floodlight_activity_group_name, floodlight_activity_group_tag_string=floodlight_activity_group_tag_string, floodlight_activity_group_type=floodlight_activity_group_type, floodlight_configuration_id=floodlight_configuration_id, ids=ids, max_results=max_results, page_token=page_token, search_string=search_string, sort_field=sort_field, sort_order=sort_order, tag_string=tag_string)



Retrieves a list of floodlight activities, possibly filtered. This method supports paging.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.floodlight_activities_list_response import FloodlightActivitiesListResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dfareporting.googleapis.com/dfareporting/v3.4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dfareporting.googleapis.com/dfareporting/v3.4"
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
    api_instance = openapi_client.FloodlightActivitiesApi(api_client)
    profile_id = 'profile_id_example' # str | User profile ID associated with this request.
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
    advertiser_id = 'advertiser_id_example' # str | Select only floodlight activities for the specified advertiser ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result. (optional)
    floodlight_activity_group_ids = ['floodlight_activity_group_ids_example'] # List[str] | Select only floodlight activities with the specified floodlight activity group IDs. (optional)
    floodlight_activity_group_name = 'floodlight_activity_group_name_example' # str | Select only floodlight activities with the specified floodlight activity group name. (optional)
    floodlight_activity_group_tag_string = 'floodlight_activity_group_tag_string_example' # str | Select only floodlight activities with the specified floodlight activity group tag string. (optional)
    floodlight_activity_group_type = 'floodlight_activity_group_type_example' # str | Select only floodlight activities with the specified floodlight activity group type. (optional)
    floodlight_configuration_id = 'floodlight_configuration_id_example' # str | Select only floodlight activities for the specified floodlight configuration ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result. (optional)
    ids = ['ids_example'] # List[str] | Select only floodlight activities with the specified IDs. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result. (optional)
    max_results = 56 # int | Maximum number of results to return. (optional)
    page_token = 'page_token_example' # str | Value of the nextPageToken from the previous result page. (optional)
    search_string = 'search_string_example' # str | Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, \"floodlightactivity*2015\" will return objects with names like \"floodlightactivity June 2015\", \"floodlightactivity April 2015\", or simply \"floodlightactivity 2015\". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \"floodlightactivity\" will match objects with name \"my floodlightactivity activity\", \"floodlightactivity 2015\", or simply \"floodlightactivity\". (optional)
    sort_field = 'sort_field_example' # str | Field by which to sort the list. (optional)
    sort_order = 'sort_order_example' # str | Order of sorted results. (optional)
    tag_string = 'tag_string_example' # str | Select only floodlight activities with the specified tag string. (optional)

    try:
        api_response = api_instance.dfareporting_floodlight_activities_list(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, advertiser_id=advertiser_id, floodlight_activity_group_ids=floodlight_activity_group_ids, floodlight_activity_group_name=floodlight_activity_group_name, floodlight_activity_group_tag_string=floodlight_activity_group_tag_string, floodlight_activity_group_type=floodlight_activity_group_type, floodlight_configuration_id=floodlight_configuration_id, ids=ids, max_results=max_results, page_token=page_token, search_string=search_string, sort_field=sort_field, sort_order=sort_order, tag_string=tag_string)
        print("The response of FloodlightActivitiesApi->dfareporting_floodlight_activities_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FloodlightActivitiesApi->dfareporting_floodlight_activities_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| User profile ID associated with this request. | 
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
 **advertiser_id** | **str**| Select only floodlight activities for the specified advertiser ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result. | [optional] 
 **floodlight_activity_group_ids** | [**List[str]**](str.md)| Select only floodlight activities with the specified floodlight activity group IDs. | [optional] 
 **floodlight_activity_group_name** | **str**| Select only floodlight activities with the specified floodlight activity group name. | [optional] 
 **floodlight_activity_group_tag_string** | **str**| Select only floodlight activities with the specified floodlight activity group tag string. | [optional] 
 **floodlight_activity_group_type** | **str**| Select only floodlight activities with the specified floodlight activity group type. | [optional] 
 **floodlight_configuration_id** | **str**| Select only floodlight activities for the specified floodlight configuration ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result. | [optional] 
 **ids** | [**List[str]**](str.md)| Select only floodlight activities with the specified IDs. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result. | [optional] 
 **max_results** | **int**| Maximum number of results to return. | [optional] 
 **page_token** | **str**| Value of the nextPageToken from the previous result page. | [optional] 
 **search_string** | **str**| Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, \&quot;floodlightactivity*2015\&quot; will return objects with names like \&quot;floodlightactivity June 2015\&quot;, \&quot;floodlightactivity April 2015\&quot;, or simply \&quot;floodlightactivity 2015\&quot;. Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of \&quot;floodlightactivity\&quot; will match objects with name \&quot;my floodlightactivity activity\&quot;, \&quot;floodlightactivity 2015\&quot;, or simply \&quot;floodlightactivity\&quot;. | [optional] 
 **sort_field** | **str**| Field by which to sort the list. | [optional] 
 **sort_order** | **str**| Order of sorted results. | [optional] 
 **tag_string** | **str**| Select only floodlight activities with the specified tag string. | [optional] 

### Return type

[**FloodlightActivitiesListResponse**](FloodlightActivitiesListResponse.md)

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

# **dfareporting_floodlight_activities_patch**
> FloodlightActivity dfareporting_floodlight_activities_patch(profile_id, id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, floodlight_activity=floodlight_activity)



Updates an existing floodlight activity. This method supports patch semantics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.floodlight_activity import FloodlightActivity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dfareporting.googleapis.com/dfareporting/v3.4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dfareporting.googleapis.com/dfareporting/v3.4"
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
    api_instance = openapi_client.FloodlightActivitiesApi(api_client)
    profile_id = 'profile_id_example' # str | User profile ID associated with this request.
    id = 'id_example' # str | FloodlightActivity ID.
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
    floodlight_activity = openapi_client.FloodlightActivity() # FloodlightActivity |  (optional)

    try:
        api_response = api_instance.dfareporting_floodlight_activities_patch(profile_id, id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, floodlight_activity=floodlight_activity)
        print("The response of FloodlightActivitiesApi->dfareporting_floodlight_activities_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FloodlightActivitiesApi->dfareporting_floodlight_activities_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| User profile ID associated with this request. | 
 **id** | **str**| FloodlightActivity ID. | 
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
 **floodlight_activity** | [**FloodlightActivity**](FloodlightActivity.md)|  | [optional] 

### Return type

[**FloodlightActivity**](FloodlightActivity.md)

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

# **dfareporting_floodlight_activities_update**
> FloodlightActivity dfareporting_floodlight_activities_update(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, floodlight_activity=floodlight_activity)



Updates an existing floodlight activity.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.floodlight_activity import FloodlightActivity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dfareporting.googleapis.com/dfareporting/v3.4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dfareporting.googleapis.com/dfareporting/v3.4"
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
    api_instance = openapi_client.FloodlightActivitiesApi(api_client)
    profile_id = 'profile_id_example' # str | User profile ID associated with this request.
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
    floodlight_activity = openapi_client.FloodlightActivity() # FloodlightActivity |  (optional)

    try:
        api_response = api_instance.dfareporting_floodlight_activities_update(profile_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, floodlight_activity=floodlight_activity)
        print("The response of FloodlightActivitiesApi->dfareporting_floodlight_activities_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FloodlightActivitiesApi->dfareporting_floodlight_activities_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profile_id** | **str**| User profile ID associated with this request. | 
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
 **floodlight_activity** | [**FloodlightActivity**](FloodlightActivity.md)|  | [optional] 

### Return type

[**FloodlightActivity**](FloodlightActivity.md)

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

