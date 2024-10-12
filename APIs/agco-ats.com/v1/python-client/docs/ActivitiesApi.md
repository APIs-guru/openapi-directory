# openapi_client.ActivitiesApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activities_delete_activity**](ActivitiesApi.md#activities_delete_activity) | **DELETE** /api/v2/activities/{activityID} | Mark the delete flag for the Activity
[**activities_get_activities**](ActivitiesApi.md#activities_get_activities) | **GET** /api/v2/activities | Get Activities
[**activities_get_activity**](ActivitiesApi.md#activities_get_activity) | **GET** /api/v2/activities/{activityID} | Get an Activity by ID
[**activities_post_activity**](ActivitiesApi.md#activities_post_activity) | **POST** /api/v2/activities | Create an Activity
[**activities_put_activity**](ActivitiesApi.md#activities_put_activity) | **PUT** /api/v2/activities/{activityID} | Update an Activity


# **activities_delete_activity**
> activities_delete_activity(activity_id)

Mark the delete flag for the Activity

Deletes an Activity. When successful, the response is empty.  If unsuccessful, an appropriate              ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActivitiesApi(api_client)
    activity_id = 56 # int | The id of the activity to delete

    try:
        # Mark the delete flag for the Activity
        api_instance.activities_delete_activity(activity_id)
    except Exception as e:
        print("Exception when calling ActivitiesApi->activities_delete_activity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activity_id** | **int**| The id of the activity to delete | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **activities_get_activities**
> APIPagedResponseBuildSystemSharedDTOActivity activities_get_activities(limit=limit, offset=offset, is_include_deleted=is_include_deleted)

Get Activities

Gets a collection of Activities. When successful, the response is a PagedResponse of Activities.                If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_build_system_shared_dto_activity import APIPagedResponseBuildSystemSharedDTOActivity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActivitiesApi(api_client)
    limit = 56 # int | Optional. The page limit.  If not specified, the default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset.  If not specified, the default page offset is 0. (optional)
    is_include_deleted = True # bool | Does it include deleted activity, or not (optional)

    try:
        # Get Activities
        api_response = api_instance.activities_get_activities(limit=limit, offset=offset, is_include_deleted=is_include_deleted)
        print("The response of ActivitiesApi->activities_get_activities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActivitiesApi->activities_get_activities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. The page limit.  If not specified, the default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset.  If not specified, the default page offset is 0. | [optional] 
 **is_include_deleted** | **bool**| Does it include deleted activity, or not | [optional] 

### Return type

[**APIPagedResponseBuildSystemSharedDTOActivity**](APIPagedResponseBuildSystemSharedDTOActivity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **activities_get_activity**
> BuildSystemSharedDTOActivity activities_get_activity(activity_id, is_include_deleted=is_include_deleted)

Get an Activity by ID

Gets an Activity by ID. When successful, the response is the requested Activity.  If unsuccessful,              an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.build_system_shared_dto_activity import BuildSystemSharedDTOActivity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActivitiesApi(api_client)
    activity_id = 56 # int | The ID of the Activity to get.
    is_include_deleted = True # bool | Does it include deleted activity, or not (optional)

    try:
        # Get an Activity by ID
        api_response = api_instance.activities_get_activity(activity_id, is_include_deleted=is_include_deleted)
        print("The response of ActivitiesApi->activities_get_activity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActivitiesApi->activities_get_activity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activity_id** | **int**| The ID of the Activity to get. | 
 **is_include_deleted** | **bool**| Does it include deleted activity, or not | [optional] 

### Return type

[**BuildSystemSharedDTOActivity**](BuildSystemSharedDTOActivity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **activities_post_activity**
> int activities_post_activity(build_system_shared_dto_activity)

Create an Activity

Creates an Activity.  The body of the POST is the Activity to create.  The ActivityID will be assigned              on creation of the Activity.  When successful, the response is the ActivityID.  If unsuccessful, an               appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.build_system_shared_dto_activity import BuildSystemSharedDTOActivity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActivitiesApi(api_client)
    build_system_shared_dto_activity = openapi_client.BuildSystemSharedDTOActivity() # BuildSystemSharedDTOActivity | The activity to create.  The ActivityID will be assigned on creation of the Activity.

    try:
        # Create an Activity
        api_response = api_instance.activities_post_activity(build_system_shared_dto_activity)
        print("The response of ActivitiesApi->activities_post_activity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActivitiesApi->activities_post_activity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **build_system_shared_dto_activity** | [**BuildSystemSharedDTOActivity**](BuildSystemSharedDTOActivity.md)| The activity to create.  The ActivityID will be assigned on creation of the Activity. | 

### Return type

**int**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **activities_put_activity**
> activities_put_activity(activity_id, build_system_shared_dto_activity)

Update an Activity

Updates an Activity.  The body of the PUT is the updated Activity.  When successful, the response is empty.              If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.build_system_shared_dto_activity import BuildSystemSharedDTOActivity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActivitiesApi(api_client)
    activity_id = 56 # int | The id of the activity to update
    build_system_shared_dto_activity = openapi_client.BuildSystemSharedDTOActivity() # BuildSystemSharedDTOActivity | The updated activity

    try:
        # Update an Activity
        api_instance.activities_put_activity(activity_id, build_system_shared_dto_activity)
    except Exception as e:
        print("Exception when calling ActivitiesApi->activities_put_activity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activity_id** | **int**| The id of the activity to update | 
 **build_system_shared_dto_activity** | [**BuildSystemSharedDTOActivity**](BuildSystemSharedDTOActivity.md)| The updated activity | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

