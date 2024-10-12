# openapi_client.UserGroupsApi

All URIs are relative to *http://learnifier.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**orgunits_orgid_usergroups_get**](UserGroupsApi.md#orgunits_orgid_usergroups_get) | **GET** /orgunits/{orgid}/usergroups | List User Groups.
[**orgunits_orgid_usergroups_groupid_get**](UserGroupsApi.md#orgunits_orgid_usergroups_groupid_get) | **GET** /orgunits/{orgid}/usergroups/{groupid} | Get user group
[**orgunits_orgid_usergroups_groupid_members_get**](UserGroupsApi.md#orgunits_orgid_usergroups_groupid_members_get) | **GET** /orgunits/{orgid}/usergroups/{groupid}/members | List of all users in group.
[**orgunits_orgid_usergroups_groupid_members_post**](UserGroupsApi.md#orgunits_orgid_usergroups_groupid_members_post) | **POST** /orgunits/{orgid}/usergroups/{groupid}/members | Add user group member.
[**orgunits_orgid_usergroups_groupid_members_uuid_delete**](UserGroupsApi.md#orgunits_orgid_usergroups_groupid_members_uuid_delete) | **DELETE** /orgunits/{orgid}/usergroups/{groupid}/members/{uuid} | Remove user group member.
[**orgunits_orgid_usergroups_post**](UserGroupsApi.md#orgunits_orgid_usergroups_post) | **POST** /orgunits/{orgid}/usergroups | Create a User Group.


# **orgunits_orgid_usergroups_get**
> List[UserGroup] orgunits_orgid_usergroups_get(orgid)

List User Groups.

Returns a list of User Groups for the org unit. 

### Example


```python
import openapi_client
from openapi_client.models.user_group import UserGroup
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserGroupsApi(api_client)
    orgid = 56 # int | ID of organization

    try:
        # List User Groups.
        api_response = api_instance.orgunits_orgid_usergroups_get(orgid)
        print("The response of UserGroupsApi->orgunits_orgid_usergroups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserGroupsApi->orgunits_orgid_usergroups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **int**| ID of organization | 

### Return type

[**List[UserGroup]**](UserGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of User Groups. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orgunits_orgid_usergroups_groupid_get**
> UserGroup orgunits_orgid_usergroups_groupid_get(orgid, groupid)

Get user group

Returns single User Group. 

### Example


```python
import openapi_client
from openapi_client.models.user_group import UserGroup
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserGroupsApi(api_client)
    orgid = 56 # int | ID of organization
    groupid = 56 # int | ID of group

    try:
        # Get user group
        api_response = api_instance.orgunits_orgid_usergroups_groupid_get(orgid, groupid)
        print("The response of UserGroupsApi->orgunits_orgid_usergroups_groupid_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserGroupsApi->orgunits_orgid_usergroups_groupid_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **int**| ID of organization | 
 **groupid** | **int**| ID of group | 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User Group. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orgunits_orgid_usergroups_groupid_members_get**
> List[User] orgunits_orgid_usergroups_groupid_members_get(orgid, groupid)

List of all users in group.

Returns a list of all members in User Groups that are based on the Global Group with this groupid. 

### Example


```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserGroupsApi(api_client)
    orgid = 56 # int | ID of organization
    groupid = 56 # int | ID of group

    try:
        # List of all users in group.
        api_response = api_instance.orgunits_orgid_usergroups_groupid_members_get(orgid, groupid)
        print("The response of UserGroupsApi->orgunits_orgid_usergroups_groupid_members_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserGroupsApi->orgunits_orgid_usergroups_groupid_members_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **int**| ID of organization | 
 **groupid** | **int**| ID of group | 

### Return type

[**List[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of users |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orgunits_orgid_usergroups_groupid_members_post**
> UserId orgunits_orgid_usergroups_groupid_members_post(orgid, groupid, body)

Add user group member.

Adds a user to user group. 

### Example


```python
import openapi_client
from openapi_client.models.add_user_group_member import AddUserGroupMember
from openapi_client.models.user_id import UserId
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserGroupsApi(api_client)
    orgid = 56 # int | ID of organization
    groupid = 56 # int | ID of group
    body = openapi_client.AddUserGroupMember() # AddUserGroupMember | 

    try:
        # Add user group member.
        api_response = api_instance.orgunits_orgid_usergroups_groupid_members_post(orgid, groupid, body)
        print("The response of UserGroupsApi->orgunits_orgid_usergroups_groupid_members_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserGroupsApi->orgunits_orgid_usergroups_groupid_members_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **int**| ID of organization | 
 **groupid** | **int**| ID of group | 
 **body** | [**AddUserGroupMember**](AddUserGroupMember.md)|  | 

### Return type

[**UserId**](UserId.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User ID of added user |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orgunits_orgid_usergroups_groupid_members_uuid_delete**
> orgunits_orgid_usergroups_groupid_members_uuid_delete(orgid, groupid, uuid)

Remove user group member.

Removes a user from a user group. 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserGroupsApi(api_client)
    orgid = 56 # int | ID of organization
    groupid = 56 # int | ID of group
    uuid = 'uuid_example' # str | UUID of user to remove from group.

    try:
        # Remove user group member.
        api_instance.orgunits_orgid_usergroups_groupid_members_uuid_delete(orgid, groupid, uuid)
    except Exception as e:
        print("Exception when calling UserGroupsApi->orgunits_orgid_usergroups_groupid_members_uuid_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **int**| ID of organization | 
 **groupid** | **int**| ID of group | 
 **uuid** | **str**| UUID of user to remove from group. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orgunits_orgid_usergroups_post**
> List[GroupId] orgunits_orgid_usergroups_post(orgid, body)

Create a User Group.

Create a User Group. 

### Example


```python
import openapi_client
from openapi_client.models.add_user_group import AddUserGroup
from openapi_client.models.group_id import GroupId
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserGroupsApi(api_client)
    orgid = 56 # int | ID of organization
    body = openapi_client.AddUserGroup() # AddUserGroup | 

    try:
        # Create a User Group.
        api_response = api_instance.orgunits_orgid_usergroups_post(orgid, body)
        print("The response of UserGroupsApi->orgunits_orgid_usergroups_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserGroupsApi->orgunits_orgid_usergroups_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **int**| ID of organization | 
 **body** | [**AddUserGroup**](AddUserGroup.md)|  | 

### Return type

[**List[GroupId]**](GroupId.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of User Groups. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

