# openapi_client.GroupsApi

All URIs are relative to *https://api.snyk.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_a_member_to_an_organization_within_a_group**](GroupsApi.md#add_a_member_to_an_organization_within_a_group) | **POST** /group/{groupId}/org/{orgId}/members | Add a member to an organization within a group
[**delete_tag_from_group**](GroupsApi.md#delete_tag_from_group) | **POST** /group/{groupId}/tags/delete | Delete tag from group
[**list_all_members_in_a_group**](GroupsApi.md#list_all_members_in_a_group) | **GET** /group/{groupId}/members | List all members in a group
[**list_all_organizations_in_a_group**](GroupsApi.md#list_all_organizations_in_a_group) | **GET** /group/{groupId}/orgs | List all organizations in a group
[**list_all_roles_in_a_group**](GroupsApi.md#list_all_roles_in_a_group) | **GET** /group/{groupId}/roles | List all roles in a group
[**list_all_tags_in_a_group**](GroupsApi.md#list_all_tags_in_a_group) | **GET** /group/{groupId}/tags | List all tags in a group
[**update_group_settings**](GroupsApi.md#update_group_settings) | **PUT** /group/{groupId}/settings | Update group settings
[**view_group_settings**](GroupsApi.md#view_group_settings) | **GET** /group/{groupId}/settings | View group settings


# **add_a_member_to_an_organization_within_a_group**
> add_a_member_to_an_organization_within_a_group(group_id, org_id, add_a_member_to_an_organization_within_a_group_request=add_a_member_to_an_organization_within_a_group_request)

Add a member to an organization within a group



### Example


```python
import openapi_client
from openapi_client.models.add_a_member_to_an_organization_within_a_group_request import AddAMemberToAnOrganizationWithinAGroupRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroupsApi(api_client)
    group_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The group ID. The `API_KEY` must have access admin to this group.
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID we want to add the member to. The `API_KEY` must have access to this organization.
    add_a_member_to_an_organization_within_a_group_request = openapi_client.AddAMemberToAnOrganizationWithinAGroupRequest() # AddAMemberToAnOrganizationWithinAGroupRequest |  (optional)

    try:
        # Add a member to an organization within a group
        api_instance.add_a_member_to_an_organization_within_a_group(group_id, org_id, add_a_member_to_an_organization_within_a_group_request=add_a_member_to_an_organization_within_a_group_request)
    except Exception as e:
        print("Exception when calling GroupsApi->add_a_member_to_an_organization_within_a_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The group ID. The &#x60;API_KEY&#x60; must have access admin to this group. | 
 **org_id** | **str**| The organization ID we want to add the member to. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **add_a_member_to_an_organization_within_a_group_request** | [**AddAMemberToAnOrganizationWithinAGroupRequest**](AddAMemberToAnOrganizationWithinAGroupRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_tag_from_group**
> DeleteTagFromGroup200Response delete_tag_from_group(group_id, delete_tag_from_group_request=delete_tag_from_group_request)

Delete tag from group



### Example


```python
import openapi_client
from openapi_client.models.delete_tag_from_group200_response import DeleteTagFromGroup200Response
from openapi_client.models.delete_tag_from_group_request import DeleteTagFromGroupRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroupsApi(api_client)
    group_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The group ID. The `API_KEY` must have access admin to this group.
    delete_tag_from_group_request = openapi_client.DeleteTagFromGroupRequest() # DeleteTagFromGroupRequest |  (optional)

    try:
        # Delete tag from group
        api_response = api_instance.delete_tag_from_group(group_id, delete_tag_from_group_request=delete_tag_from_group_request)
        print("The response of GroupsApi->delete_tag_from_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->delete_tag_from_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The group ID. The &#x60;API_KEY&#x60; must have access admin to this group. | 
 **delete_tag_from_group_request** | [**DeleteTagFromGroupRequest**](DeleteTagFromGroupRequest.md)|  | [optional] 

### Return type

[**DeleteTagFromGroup200Response**](DeleteTagFromGroup200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_all_members_in_a_group**
> List[object] list_all_members_in_a_group(group_id)

List all members in a group



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroupsApi(api_client)
    group_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The group ID. The `API_KEY` must have access admin to this group.

    try:
        # List all members in a group
        api_response = api_instance.list_all_members_in_a_group(group_id)
        print("The response of GroupsApi->list_all_members_in_a_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->list_all_members_in_a_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The group ID. The &#x60;API_KEY&#x60; must have access admin to this group. | 

### Return type

**List[object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_all_organizations_in_a_group**
> list_all_organizations_in_a_group(group_id, per_page=per_page, page=page, name=name)

List all organizations in a group



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroupsApi(api_client)
    group_id = 'a060a49f-636e-480f-9e14-38e773b2a97f' # str | The group ID. The `API_KEY` must have READ access to this group and LIST organizations access in this group.
    per_page = 100 # float | The number of results to return (maximum is 100). (optional) (default to 100)
    page = 1 # float | For pagination - offset (from which to start returning results). (optional)
    name = 'my' # str | Only organizations that have a name that **starts with** this value (case insensitive) will be returned. (optional)

    try:
        # List all organizations in a group
        api_instance.list_all_organizations_in_a_group(group_id, per_page=per_page, page=page, name=name)
    except Exception as e:
        print("Exception when calling GroupsApi->list_all_organizations_in_a_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The group ID. The &#x60;API_KEY&#x60; must have READ access to this group and LIST organizations access in this group. | 
 **per_page** | **float**| The number of results to return (maximum is 100). | [optional] [default to 100]
 **page** | **float**| For pagination - offset (from which to start returning results). | [optional] 
 **name** | **str**| Only organizations that have a name that **starts with** this value (case insensitive) will be returned. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_all_roles_in_a_group**
> list_all_roles_in_a_group(group_id)

List all roles in a group



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroupsApi(api_client)
    group_id = 'a060a49f-636e-480f-9e14-38e773b2a97f' # str | The group ID. The `API_KEY` must have READ access to this group.

    try:
        # List all roles in a group
        api_instance.list_all_roles_in_a_group(group_id)
    except Exception as e:
        print("Exception when calling GroupsApi->list_all_roles_in_a_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The group ID. The &#x60;API_KEY&#x60; must have READ access to this group. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_all_tags_in_a_group**
> ListAllTagsInAGroup200Response list_all_tags_in_a_group(group_id, per_page=per_page, page=page)

List all tags in a group



### Example


```python
import openapi_client
from openapi_client.models.list_all_tags_in_a_group200_response import ListAllTagsInAGroup200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroupsApi(api_client)
    group_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The group ID. The `API_KEY` must have access admin to this group.
    per_page = 10 # float | The number of results to return (the default is 1000). (optional)
    page = 1 # float | The offset from which to start returning results from. (optional)

    try:
        # List all tags in a group
        api_response = api_instance.list_all_tags_in_a_group(group_id, per_page=per_page, page=page)
        print("The response of GroupsApi->list_all_tags_in_a_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->list_all_tags_in_a_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The group ID. The &#x60;API_KEY&#x60; must have access admin to this group. | 
 **per_page** | **float**| The number of results to return (the default is 1000). | [optional] 
 **page** | **float**| The offset from which to start returning results from. | [optional] 

### Return type

[**ListAllTagsInAGroup200Response**](ListAllTagsInAGroup200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Link -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_group_settings**
> ViewGroupSettings200Response update_group_settings(group_id)

Update group settings



### Example


```python
import openapi_client
from openapi_client.models.view_group_settings200_response import ViewGroupSettings200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroupsApi(api_client)
    group_id = 'group_id_example' # str | Automatically added

    try:
        # Update group settings
        api_response = api_instance.update_group_settings(group_id)
        print("The response of GroupsApi->update_group_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->update_group_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| Automatically added | 

### Return type

[**ViewGroupSettings200Response**](ViewGroupSettings200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **view_group_settings**
> ViewGroupSettings200Response view_group_settings(group_id)

View group settings



### Example


```python
import openapi_client
from openapi_client.models.view_group_settings200_response import ViewGroupSettings200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroupsApi(api_client)
    group_id = 'b61bc07c-27c6-42b3-8b04-0f228ed31a67' # str | The group ID. The `API_KEY` must have admin access to this group.

    try:
        # View group settings
        api_response = api_instance.view_group_settings(group_id)
        print("The response of GroupsApi->view_group_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->view_group_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The group ID. The &#x60;API_KEY&#x60; must have admin access to this group. | 

### Return type

[**ViewGroupSettings200Response**](ViewGroupSettings200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

