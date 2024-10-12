# openapi_client.OrganizationsApi

All URIs are relative to *https://api.snyk.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_a_new_organization**](OrganizationsApi.md#create_a_new_organization) | **POST** /org | Create a new organization
[**delete_pending_user_provision**](OrganizationsApi.md#delete_pending_user_provision) | **DELETE** /org/{orgId}/provision | Delete pending user provision
[**invite_users**](OrganizationsApi.md#invite_users) | **POST** /org/{orgId}/invite | Invite users
[**list_all_the_organizations_a_user_belongs_to**](OrganizationsApi.md#list_all_the_organizations_a_user_belongs_to) | **GET** /orgs | List all the organizations a user belongs to
[**list_members**](OrganizationsApi.md#list_members) | **GET** /org/{orgId}/members | List Members
[**list_pending_user_provisions**](OrganizationsApi.md#list_pending_user_provisions) | **GET** /org/{orgId}/provision | List pending user provisions
[**org_org_id_notification_settings_get**](OrganizationsApi.md#org_org_id_notification_settings_get) | **GET** /org/{orgId}/notification-settings | Get organization notification settings
[**provision_a_user_to_the_organization**](OrganizationsApi.md#provision_a_user_to_the_organization) | **POST** /org/{orgId}/provision | Provision a user to the organization
[**remove_a_member_from_the_organization**](OrganizationsApi.md#remove_a_member_from_the_organization) | **DELETE** /org/{orgId}/members/{userId} | Remove a member from the organization
[**remove_organization**](OrganizationsApi.md#remove_organization) | **DELETE** /org/{orgId} | Remove organization
[**set_notification_settings**](OrganizationsApi.md#set_notification_settings) | **PUT** /org/{orgId}/notification-settings | Set notification settings
[**update_a_member_in_the_organization**](OrganizationsApi.md#update_a_member_in_the_organization) | **PUT** /org/{orgId}/members/{userId} | Update a member in the organization
[**update_a_members_role_in_the_organization**](OrganizationsApi.md#update_a_members_role_in_the_organization) | **PUT** /org/{orgId}/members/update/{userId} | Update a member&#39;s role in the organization
[**update_organization_settings**](OrganizationsApi.md#update_organization_settings) | **PUT** /org/{orgId}/settings | Update organization settings
[**view_organization_settings**](OrganizationsApi.md#view_organization_settings) | **GET** /org/{orgId}/settings | View organization settings


# **create_a_new_organization**
> create_a_new_organization(create_a_new_organization_request=create_a_new_organization_request)

Create a new organization



### Example


```python
import openapi_client
from openapi_client.models.create_a_new_organization_request import CreateANewOrganizationRequest
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
    api_instance = openapi_client.OrganizationsApi(api_client)
    create_a_new_organization_request = openapi_client.CreateANewOrganizationRequest() # CreateANewOrganizationRequest |  (optional)

    try:
        # Create a new organization
        api_instance.create_a_new_organization(create_a_new_organization_request=create_a_new_organization_request)
    except Exception as e:
        print("Exception when calling OrganizationsApi->create_a_new_organization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_a_new_organization_request** | [**CreateANewOrganizationRequest**](CreateANewOrganizationRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8, application/json, charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | A group of errors that happened in the process of creating a new organization and were unexpected |  -  |
**401** | Authorization errors. |  -  |
**422** | A group of errors that show input errors about the parameters provided in the request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_pending_user_provision**
> DeletePendingUserProvision200Response delete_pending_user_provision(org_id)

Delete pending user provision



### Example


```python
import openapi_client
from openapi_client.models.delete_pending_user_provision200_response import DeletePendingUserProvision200Response
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
    api_instance = openapi_client.OrganizationsApi(api_client)
    org_id = '25065eb1-109c-4c3e-9503-68fc56ef6f44' # str | The organization ID.

    try:
        # Delete pending user provision
        api_response = api_instance.delete_pending_user_provision(org_id)
        print("The response of OrganizationsApi->delete_pending_user_provision:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->delete_pending_user_provision: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. | 

### Return type

[**DeletePendingUserProvision200Response**](DeletePendingUserProvision200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Provided &#x60;API_KEY&#x60; has no user provision permission or does not have permissions in role being provisioned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **invite_users**
> invite_users(org_id, invite_users_request=invite_users_request)

Invite users



### Example


```python
import openapi_client
from openapi_client.models.invite_users_request import InviteUsersRequest
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
    api_instance = openapi_client.OrganizationsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID. The `API_KEY` must have admin access to this organization.
    invite_users_request = openapi_client.InviteUsersRequest() # InviteUsersRequest |  (optional)

    try:
        # Invite users
        api_instance.invite_users(org_id, invite_users_request=invite_users_request)
    except Exception as e:
        print("Exception when calling OrganizationsApi->invite_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have admin access to this organization. | 
 **invite_users_request** | [**InviteUsersRequest**](InviteUsersRequest.md)|  | [optional] 

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

# **list_all_the_organizations_a_user_belongs_to**
> list_all_the_organizations_a_user_belongs_to()

List all the organizations a user belongs to



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
    api_instance = openapi_client.OrganizationsApi(api_client)

    try:
        # List all the organizations a user belongs to
        api_instance.list_all_the_organizations_a_user_belongs_to()
    except Exception as e:
        print("Exception when calling OrganizationsApi->list_all_the_organizations_a_user_belongs_to: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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

# **list_members**
> List[object] list_members(org_id, include_group_admins=include_group_admins)

List Members



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
    api_instance = openapi_client.OrganizationsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID.
    include_group_admins = False # bool | Include group administrators who also have access to this organization. (optional) (default to False)

    try:
        # List Members
        api_response = api_instance.list_members(org_id, include_group_admins=include_group_admins)
        print("The response of OrganizationsApi->list_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->list_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. | 
 **include_group_admins** | **bool**| Include group administrators who also have access to this organization. | [optional] [default to False]

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

# **list_pending_user_provisions**
> List[object] list_pending_user_provisions(org_id)

List pending user provisions



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
    api_instance = openapi_client.OrganizationsApi(api_client)
    org_id = '25065eb1-109c-4c3e-9503-68fc56ef6f44' # str | The organization ID.

    try:
        # List pending user provisions
        api_response = api_instance.list_pending_user_provisions(org_id)
        print("The response of OrganizationsApi->list_pending_user_provisions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->list_pending_user_provisions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. | 

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
**403** | Provided &#x60;API_KEY&#x60; has no user provision permission or does not have permissions in role being provisioned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_org_id_notification_settings_get**
> OrgOrgIdNotificationSettingsGet200Response org_org_id_notification_settings_get(org_id)

Get organization notification settings



### Example


```python
import openapi_client
from openapi_client.models.org_org_id_notification_settings_get200_response import OrgOrgIdNotificationSettingsGet200Response
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
    api_instance = openapi_client.OrganizationsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID. The `API_KEY` must have access to this organization.

    try:
        # Get organization notification settings
        api_response = api_instance.org_org_id_notification_settings_get(org_id)
        print("The response of OrganizationsApi->org_org_id_notification_settings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->org_org_id_notification_settings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have access to this organization. | 

### Return type

[**OrgOrgIdNotificationSettingsGet200Response**](OrgOrgIdNotificationSettingsGet200Response.md)

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

# **provision_a_user_to_the_organization**
> ProvisionAUserToTheOrganization200Response provision_a_user_to_the_organization(org_id, provision_a_user_to_the_organization_request=provision_a_user_to_the_organization_request)

Provision a user to the organization



### Example


```python
import openapi_client
from openapi_client.models.provision_a_user_to_the_organization200_response import ProvisionAUserToTheOrganization200Response
from openapi_client.models.provision_a_user_to_the_organization_request import ProvisionAUserToTheOrganizationRequest
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
    api_instance = openapi_client.OrganizationsApi(api_client)
    org_id = '25065eb1-109c-4c3e-9503-68fc56ef6f44' # str | The organization ID. The `API_KEY` must not exceed the permissions being granted to the provisioned user.
    provision_a_user_to_the_organization_request = openapi_client.ProvisionAUserToTheOrganizationRequest() # ProvisionAUserToTheOrganizationRequest |  (optional)

    try:
        # Provision a user to the organization
        api_response = api_instance.provision_a_user_to_the_organization(org_id, provision_a_user_to_the_organization_request=provision_a_user_to_the_organization_request)
        print("The response of OrganizationsApi->provision_a_user_to_the_organization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->provision_a_user_to_the_organization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must not exceed the permissions being granted to the provisioned user. | 
 **provision_a_user_to_the_organization_request** | [**ProvisionAUserToTheOrganizationRequest**](ProvisionAUserToTheOrganizationRequest.md)|  | [optional] 

### Return type

[**ProvisionAUserToTheOrganization200Response**](ProvisionAUserToTheOrganization200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Provided &#x60;API_KEY&#x60; has no user provision permission or does not have permissions in role being provisioned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_a_member_from_the_organization**
> remove_a_member_from_the_organization(org_id, user_id)

Remove a member from the organization



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
    api_instance = openapi_client.OrganizationsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID. The `API_KEY` must admin have access to this organization.
    user_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The user ID we want to remove.

    try:
        # Remove a member from the organization
        api_instance.remove_a_member_from_the_organization(org_id, user_id)
    except Exception as e:
        print("Exception when calling OrganizationsApi->remove_a_member_from_the_organization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must admin have access to this organization. | 
 **user_id** | **str**| The user ID we want to remove. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_organization**
> remove_organization(org_id)

Remove organization



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
    api_instance = openapi_client.OrganizationsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID. The `API_KEY` must have permission to delete the provided organization. Currently this operation is only supported for organizations without any projects.

    try:
        # Remove organization
        api_instance.remove_organization(org_id)
    except Exception as e:
        print("Exception when calling OrganizationsApi->remove_organization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have permission to delete the provided organization. Currently this operation is only supported for organizations without any projects. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_notification_settings**
> OrgOrgIdNotificationSettingsGet200Response set_notification_settings(org_id, set_notification_settings_request=set_notification_settings_request)

Set notification settings



### Example


```python
import openapi_client
from openapi_client.models.org_org_id_notification_settings_get200_response import OrgOrgIdNotificationSettingsGet200Response
from openapi_client.models.set_notification_settings_request import SetNotificationSettingsRequest
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
    api_instance = openapi_client.OrganizationsApi(api_client)
    org_id = 'org_id_example' # str | Automatically added
    set_notification_settings_request = openapi_client.SetNotificationSettingsRequest() # SetNotificationSettingsRequest |  (optional)

    try:
        # Set notification settings
        api_response = api_instance.set_notification_settings(org_id, set_notification_settings_request=set_notification_settings_request)
        print("The response of OrganizationsApi->set_notification_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->set_notification_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| Automatically added | 
 **set_notification_settings_request** | [**SetNotificationSettingsRequest**](SetNotificationSettingsRequest.md)|  | [optional] 

### Return type

[**OrgOrgIdNotificationSettingsGet200Response**](OrgOrgIdNotificationSettingsGet200Response.md)

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

# **update_a_member_in_the_organization**
> update_a_member_in_the_organization(org_id, user_id, update_a_member_in_the_organization_request=update_a_member_in_the_organization_request)

Update a member in the organization



### Example


```python
import openapi_client
from openapi_client.models.update_a_member_in_the_organization_request import UpdateAMemberInTheOrganizationRequest
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
    api_instance = openapi_client.OrganizationsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID. The `API_KEY` must have admin access to this organization.
    user_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The user ID.
    update_a_member_in_the_organization_request = openapi_client.UpdateAMemberInTheOrganizationRequest() # UpdateAMemberInTheOrganizationRequest |  (optional)

    try:
        # Update a member in the organization
        api_instance.update_a_member_in_the_organization(org_id, user_id, update_a_member_in_the_organization_request=update_a_member_in_the_organization_request)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_a_member_in_the_organization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have admin access to this organization. | 
 **user_id** | **str**| The user ID. | 
 **update_a_member_in_the_organization_request** | [**UpdateAMemberInTheOrganizationRequest**](UpdateAMemberInTheOrganizationRequest.md)|  | [optional] 

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

# **update_a_members_role_in_the_organization**
> update_a_members_role_in_the_organization(org_id, user_id, update_a_member_s_role_in_the_organization_request=update_a_member_s_role_in_the_organization_request)

Update a member's role in the organization



### Example


```python
import openapi_client
from openapi_client.models.update_a_member_s_role_in_the_organization_request import UpdateAMemberSRoleInTheOrganizationRequest
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
    api_instance = openapi_client.OrganizationsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID. The `API_KEY` must have admin access to this organization.
    user_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The user ID.
    update_a_member_s_role_in_the_organization_request = openapi_client.UpdateAMemberSRoleInTheOrganizationRequest() # UpdateAMemberSRoleInTheOrganizationRequest |  (optional)

    try:
        # Update a member's role in the organization
        api_instance.update_a_members_role_in_the_organization(org_id, user_id, update_a_member_s_role_in_the_organization_request=update_a_member_s_role_in_the_organization_request)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_a_members_role_in_the_organization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have admin access to this organization. | 
 **user_id** | **str**| The user ID. | 
 **update_a_member_s_role_in_the_organization_request** | [**UpdateAMemberSRoleInTheOrganizationRequest**](UpdateAMemberSRoleInTheOrganizationRequest.md)|  | [optional] 

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

# **update_organization_settings**
> ViewOrganizationSettings200Response update_organization_settings(org_id, update_organization_settings_request=update_organization_settings_request)

Update organization settings

Settings that are not provided will not be modified.

### Example


```python
import openapi_client
from openapi_client.models.update_organization_settings_request import UpdateOrganizationSettingsRequest
from openapi_client.models.view_organization_settings200_response import ViewOrganizationSettings200Response
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
    api_instance = openapi_client.OrganizationsApi(api_client)
    org_id = '25065eb1-109c-4c3e-9503-68fc56ef6f44' # str | The organization ID. The `API_KEY` must have admin access to this organization.
    update_organization_settings_request = openapi_client.UpdateOrganizationSettingsRequest() # UpdateOrganizationSettingsRequest |  (optional)

    try:
        # Update organization settings
        api_response = api_instance.update_organization_settings(org_id, update_organization_settings_request=update_organization_settings_request)
        print("The response of OrganizationsApi->update_organization_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_organization_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have admin access to this organization. | 
 **update_organization_settings_request** | [**UpdateOrganizationSettingsRequest**](UpdateOrganizationSettingsRequest.md)|  | [optional] 

### Return type

[**ViewOrganizationSettings200Response**](ViewOrganizationSettings200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | If provided a setting that the &#x60;API_KEY&#x60; has no edit permission for. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **view_organization_settings**
> ViewOrganizationSettings200Response view_organization_settings(org_id)

View organization settings



### Example


```python
import openapi_client
from openapi_client.models.view_organization_settings200_response import ViewOrganizationSettings200Response
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
    api_instance = openapi_client.OrganizationsApi(api_client)
    org_id = '25065eb1-109c-4c3e-9503-68fc56ef6f44' # str | The organization ID. The `API_KEY` must have access to this organization.

    try:
        # View organization settings
        api_response = api_instance.view_organization_settings(org_id)
        print("The response of OrganizationsApi->view_organization_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->view_organization_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have access to this organization. | 

### Return type

[**ViewOrganizationSettings200Response**](ViewOrganizationSettings200Response.md)

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

