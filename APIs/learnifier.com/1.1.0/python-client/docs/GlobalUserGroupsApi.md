# openapi_client.GlobalUserGroupsApi

All URIs are relative to *http://learnifier.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**globalusergroups_get**](GlobalUserGroupsApi.md#globalusergroups_get) | **GET** /globalusergroups | List Global User Groups.
[**globalusergroups_groupid_members_get**](GlobalUserGroupsApi.md#globalusergroups_groupid_members_get) | **GET** /globalusergroups/{groupid}/members | List of all users in group.


# **globalusergroups_get**
> List[GlobalUserGroup] globalusergroups_get()

List Global User Groups.

Returns a list of Global User Groups. Global User Groups are set up for the realm, and will generate groups that can be used on the client level. 

### Example


```python
import openapi_client
from openapi_client.models.global_user_group import GlobalUserGroup
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
    api_instance = openapi_client.GlobalUserGroupsApi(api_client)

    try:
        # List Global User Groups.
        api_response = api_instance.globalusergroups_get()
        print("The response of GlobalUserGroupsApi->globalusergroups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalUserGroupsApi->globalusergroups_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[GlobalUserGroup]**](GlobalUserGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of Global User Groups. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **globalusergroups_groupid_members_get**
> List[User] globalusergroups_groupid_members_get(groupid)

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
    api_instance = openapi_client.GlobalUserGroupsApi(api_client)
    groupid = 56 # int | ID of group

    try:
        # List of all users in group.
        api_response = api_instance.globalusergroups_groupid_members_get(groupid)
        print("The response of GlobalUserGroupsApi->globalusergroups_groupid_members_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalUserGroupsApi->globalusergroups_groupid_members_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

