# openapi_client.UpdateGroupsApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v2_update_groups_id_get**](UpdateGroupsApi.md#api_v2_update_groups_id_get) | **GET** /api/v2/UpdateGroups/{ID} | Get a specific Update Group by ID.
[**update_groups_add_update_group_user**](UpdateGroupsApi.md#update_groups_add_update_group_user) | **POST** /api/v2/UpdateGroups/{id}/Users/{userID} | Add an updateGroup that a user can see.
[**update_groups_delete**](UpdateGroupsApi.md#update_groups_delete) | **DELETE** /api/v2/UpdateGroups/{ID} | Delete an Update Group.
[**update_groups_get**](UpdateGroupsApi.md#update_groups_get) | **GET** /api/v2/UpdateGroups | Get a list of Update Groups.  Update Groups are used by the client to register for a specific type of update.
[**update_groups_get_update_group_bundles**](UpdateGroupsApi.md#update_groups_get_update_group_bundles) | **GET** /api/v2/UpdateGroups/{ID}/Bundles | Get a list of bundles for UpdateGroup.
[**update_groups_post**](UpdateGroupsApi.md#update_groups_post) | **POST** /api/v2/UpdateGroups | Add a new Update Group.  The report field is a string that has a dot based request for a specific piece of submitted data.
[**update_groups_put**](UpdateGroupsApi.md#update_groups_put) | **PUT** /api/v2/UpdateGroups/{ID} | Modify an Update Group.
[**update_groups_remove_update_group_user**](UpdateGroupsApi.md#update_groups_remove_update_group_user) | **DELETE** /api/v2/UpdateGroups/{id}/Users/{userID} | Deletes an update group a user could see.


# **api_v2_update_groups_id_get**
> UpdateSystemModelsUpdateGroup api_v2_update_groups_id_get(id)

Get a specific Update Group by ID.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_update_group import UpdateSystemModelsUpdateGroup
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
    api_instance = openapi_client.UpdateGroupsApi(api_client)
    id = 'id_example' # str | The ID of the Update Group

    try:
        # Get a specific Update Group by ID.
        api_response = api_instance.api_v2_update_groups_id_get(id)
        print("The response of UpdateGroupsApi->api_v2_update_groups_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UpdateGroupsApi->api_v2_update_groups_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the Update Group | 

### Return type

[**UpdateSystemModelsUpdateGroup**](UpdateSystemModelsUpdateGroup.md)

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

# **update_groups_add_update_group_user**
> update_groups_add_update_group_user(id, user_id)

Add an updateGroup that a user can see.

No Documentation Found.

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
    api_instance = openapi_client.UpdateGroupsApi(api_client)
    id = 'id_example' # str | The ID of the update group
    user_id = 56 # int | The userID to link to the update group

    try:
        # Add an updateGroup that a user can see.
        api_instance.update_groups_add_update_group_user(id, user_id)
    except Exception as e:
        print("Exception when calling UpdateGroupsApi->update_groups_add_update_group_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the update group | 
 **user_id** | **int**| The userID to link to the update group | 

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

# **update_groups_delete**
> update_groups_delete(id)

Delete an Update Group.

No Documentation Found.

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
    api_instance = openapi_client.UpdateGroupsApi(api_client)
    id = 'id_example' # str | The ID of the Update Group to Delete

    try:
        # Delete an Update Group.
        api_instance.update_groups_delete(id)
    except Exception as e:
        print("Exception when calling UpdateGroupsApi->update_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the Update Group to Delete | 

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

# **update_groups_get**
> APIPagedResponseUpdateSystemModelsUpdateGroup update_groups_get(limit=limit, offset=offset, user_id=user_id)

Get a list of Update Groups.  Update Groups are used by the client to register for a specific type of update.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_update_system_models_update_group import APIPagedResponseUpdateSystemModelsUpdateGroup
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
    api_instance = openapi_client.UpdateGroupsApi(api_client)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)
    user_id = 56 # int | Optional. The user ID to sort update groups by the user's access (optional)

    try:
        # Get a list of Update Groups.  Update Groups are used by the client to register for a specific type of update.
        api_response = api_instance.update_groups_get(limit=limit, offset=offset, user_id=user_id)
        print("The response of UpdateGroupsApi->update_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UpdateGroupsApi->update_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 
 **user_id** | **int**| Optional. The user ID to sort update groups by the user&#39;s access | [optional] 

### Return type

[**APIPagedResponseUpdateSystemModelsUpdateGroup**](APIPagedResponseUpdateSystemModelsUpdateGroup.md)

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

# **update_groups_get_update_group_bundles**
> APIPagedResponseUpdateSystemModelsBundle update_groups_get_update_group_bundles(id, include_inactive, limit=limit, offset=offset)

Get a list of bundles for UpdateGroup.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_update_system_models_bundle import APIPagedResponseUpdateSystemModelsBundle
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
    api_instance = openapi_client.UpdateGroupsApi(api_client)
    id = 'id_example' # str | The UpdateGroupID
    include_inactive = True # bool | Include Inactive Bundles (true|false)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)

    try:
        # Get a list of bundles for UpdateGroup.
        api_response = api_instance.update_groups_get_update_group_bundles(id, include_inactive, limit=limit, offset=offset)
        print("The response of UpdateGroupsApi->update_groups_get_update_group_bundles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UpdateGroupsApi->update_groups_get_update_group_bundles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The UpdateGroupID | 
 **include_inactive** | **bool**| Include Inactive Bundles (true|false) | 
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIPagedResponseUpdateSystemModelsBundle**](APIPagedResponseUpdateSystemModelsBundle.md)

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

# **update_groups_post**
> str update_groups_post(update_system_models_update_group)

Add a new Update Group.  The report field is a string that has a dot based request for a specific piece of submitted data.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_update_group import UpdateSystemModelsUpdateGroup
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
    api_instance = openapi_client.UpdateGroupsApi(api_client)
    update_system_models_update_group = openapi_client.UpdateSystemModelsUpdateGroup() # UpdateSystemModelsUpdateGroup | 

    try:
        # Add a new Update Group.  The report field is a string that has a dot based request for a specific piece of submitted data.
        api_response = api_instance.update_groups_post(update_system_models_update_group)
        print("The response of UpdateGroupsApi->update_groups_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UpdateGroupsApi->update_groups_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_system_models_update_group** | [**UpdateSystemModelsUpdateGroup**](UpdateSystemModelsUpdateGroup.md)|  | 

### Return type

**str**

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

# **update_groups_put**
> update_groups_put(id, update_system_models_update_group)

Modify an Update Group.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_update_group import UpdateSystemModelsUpdateGroup
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
    api_instance = openapi_client.UpdateGroupsApi(api_client)
    id = 'id_example' # str | ID of the Update Group
    update_system_models_update_group = openapi_client.UpdateSystemModelsUpdateGroup() # UpdateSystemModelsUpdateGroup | The Update Group to update.

    try:
        # Modify an Update Group.
        api_instance.update_groups_put(id, update_system_models_update_group)
    except Exception as e:
        print("Exception when calling UpdateGroupsApi->update_groups_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of the Update Group | 
 **update_system_models_update_group** | [**UpdateSystemModelsUpdateGroup**](UpdateSystemModelsUpdateGroup.md)| The Update Group to update. | 

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

# **update_groups_remove_update_group_user**
> update_groups_remove_update_group_user(id, user_id)

Deletes an update group a user could see.

No Documentation Found.

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
    api_instance = openapi_client.UpdateGroupsApi(api_client)
    id = 'id_example' # str | The ID of the update group
    user_id = 56 # int | The userID to link to the update group

    try:
        # Deletes an update group a user could see.
        api_instance.update_groups_remove_update_group_user(id, user_id)
    except Exception as e:
        print("Exception when calling UpdateGroupsApi->update_groups_remove_update_group_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the update group | 
 **user_id** | **int**| The userID to link to the update group | 

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

