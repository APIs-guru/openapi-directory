# openapi_client.TeamsMembershipsApi

All URIs are relative to *https://connect.signl4.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teams_team_id_memberships_get**](TeamsMembershipsApi.md#teams_team_id_memberships_get) | **GET** /teams/{teamId}/memberships | Get all invites of a team.
[**teams_team_id_memberships_post**](TeamsMembershipsApi.md#teams_team_id_memberships_post) | **POST** /teams/{teamId}/memberships | Invite users to a team
[**teams_team_id_memberships_resend_invite_mail_post**](TeamsMembershipsApi.md#teams_team_id_memberships_resend_invite_mail_post) | **POST** /teams/{teamId}/memberships/resendInviteMail | Sends invite email again if an invite exists
[**teams_team_id_memberships_user_id_delete**](TeamsMembershipsApi.md#teams_team_id_memberships_user_id_delete) | **DELETE** /teams/{teamId}/memberships/{userId} | Removes a user or invitation from a team, and may delete the user if he is not in any team.
[**teams_team_id_memberships_user_id_put**](TeamsMembershipsApi.md#teams_team_id_memberships_user_id_put) | **PUT** /teams/{teamId}/memberships/{userId} | Update user&#39;s team membership.


# **teams_team_id_memberships_get**
> List[InvitedUserInfo] teams_team_id_memberships_get(team_id)

Get all invites of a team.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.invited_user_info import InvitedUserInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamsMembershipsApi(api_client)
    team_id = 'team_id_example' # str | Team ID of team you want to request.

    try:
        # Get all invites of a team.
        api_response = api_instance.teams_team_id_memberships_get(team_id)
        print("The response of TeamsMembershipsApi->teams_team_id_memberships_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsMembershipsApi->teams_team_id_memberships_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| Team ID of team you want to request. | 

### Return type

[**List[InvitedUserInfo]**](InvitedUserInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User invitations are returned. |  -  |
**204** | Request was canceled. |  -  |
**400** | Required parameters or authentifaction info could not be found in the request/claims. |  -  |
**403** | You&#39;re not allowed to request the access all required entities. |  -  |
**404** | Required entities could not be found in the database. |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_team_id_memberships_post**
> List[UserInvitationResult] teams_team_id_memberships_post(team_id, users_invitation=users_invitation)

Invite users to a team

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.user_invitation_result import UserInvitationResult
from openapi_client.models.users_invitation import UsersInvitation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamsMembershipsApi(api_client)
    team_id = 'team_id_example' # str | Id of team the user should be invited to.
    users_invitation = openapi_client.UsersInvitation() # UsersInvitation | Information about user to invite and inviter id. (optional)

    try:
        # Invite users to a team
        api_response = api_instance.teams_team_id_memberships_post(team_id, users_invitation=users_invitation)
        print("The response of TeamsMembershipsApi->teams_team_id_memberships_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsMembershipsApi->teams_team_id_memberships_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| Id of team the user should be invited to. | 
 **users_invitation** | [**UsersInvitation**](UsersInvitation.md)| Information about user to invite and inviter id. | [optional] 

### Return type

[**List[UserInvitationResult]**](UserInvitationResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User invitation results are returned. |  -  |
**204** | Request was canceled. |  -  |
**400** | Required parameters or authentifaction info could not be found in the request/claims. |  -  |
**403** | You&#39;re not allowed to request the access all required entities. |  -  |
**404** | Required entities could not be found in the database. |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_team_id_memberships_resend_invite_mail_post**
> str teams_team_id_memberships_resend_invite_mail_post(team_id, user_invitation_info=user_invitation_info)

Sends invite email again if an invite exists

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.user_invitation_info import UserInvitationInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamsMembershipsApi(api_client)
    team_id = 'team_id_example' # str | Team ID of team with invited user.
    user_invitation_info = openapi_client.UserInvitationInfo() # UserInvitationInfo | Information which user should be invited again. (optional)

    try:
        # Sends invite email again if an invite exists
        api_response = api_instance.teams_team_id_memberships_resend_invite_mail_post(team_id, user_invitation_info=user_invitation_info)
        print("The response of TeamsMembershipsApi->teams_team_id_memberships_resend_invite_mail_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsMembershipsApi->teams_team_id_memberships_resend_invite_mail_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| Team ID of team with invited user. | 
 **user_invitation_info** | [**UserInvitationInfo**](UserInvitationInfo.md)| Information which user should be invited again. | [optional] 

### Return type

**str**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_team_id_memberships_user_id_delete**
> str teams_team_id_memberships_user_id_delete(team_id, user_id, requester_user_id=requester_user_id)

Removes a user or invitation from a team, and may delete the user if he is not in any team.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamsMembershipsApi(api_client)
    team_id = 'team_id_example' # str | ID of the team the user should be deleted from
    user_id = 'user_id_example' # str | ID of the user that should be deleted
    requester_user_id = 'requester_user_id_example' # str | User ID of user which will remove the other user. (optional)

    try:
        # Removes a user or invitation from a team, and may delete the user if he is not in any team.
        api_response = api_instance.teams_team_id_memberships_user_id_delete(team_id, user_id, requester_user_id=requester_user_id)
        print("The response of TeamsMembershipsApi->teams_team_id_memberships_user_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsMembershipsApi->teams_team_id_memberships_user_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| ID of the team the user should be deleted from | 
 **user_id** | **str**| ID of the user that should be deleted | 
 **requester_user_id** | **str**| User ID of user which will remove the other user. | [optional] 

### Return type

**str**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success message |  -  |
**204** | Request was canceled. |  -  |
**400** | Required parameters or authentifaction info could not be found in the request/claims. |  -  |
**403** | You&#39;re not allowed to request the access all required entities. |  -  |
**404** | Required entities could not be found in the database. |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_team_id_memberships_user_id_put**
> UserInfo teams_team_id_memberships_user_id_put(team_id, user_id, requester_user_id=requester_user_id, user_membership=user_membership)

Update user's team membership.

Updates the user's team membership. You can move the user to another team within the subscription  and/or change the user's role.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.user_info import UserInfo
from openapi_client.models.user_membership import UserMembership
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamsMembershipsApi(api_client)
    team_id = 'team_id_example' # str | Team the user you want to update belongs to at the moment.
    user_id = 'user_id_example' # str | User ID of user you want to update.
    requester_user_id = 'requester_user_id_example' # str | User ID of user which you want to change role with. This must be provided when using an api key. This user must have role administrator (for setting administrator role) or team administrator (for setting  rights. (optional)
    user_membership = openapi_client.UserMembership() # UserMembership | Information about role id and target team id. (optional)

    try:
        # Update user's team membership.
        api_response = api_instance.teams_team_id_memberships_user_id_put(team_id, user_id, requester_user_id=requester_user_id, user_membership=user_membership)
        print("The response of TeamsMembershipsApi->teams_team_id_memberships_user_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsMembershipsApi->teams_team_id_memberships_user_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| Team the user you want to update belongs to at the moment. | 
 **user_id** | **str**| User ID of user you want to update. | 
 **requester_user_id** | **str**| User ID of user which you want to change role with. This must be provided when using an api key. This user must have role administrator (for setting administrator role) or team administrator (for setting  rights. | [optional] 
 **user_membership** | [**UserMembership**](UserMembership.md)| Information about role id and target team id. | [optional] 

### Return type

[**UserInfo**](UserInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User was successfully updated. |  -  |
**204** | Request was canceled. |  -  |
**400** | Required parameters or authentifaction info could not be found in the request/claims. |  -  |
**403** | You&#39;re not allowed to request the access all required entities. |  -  |
**404** | Required entities could not be found in the database. |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

