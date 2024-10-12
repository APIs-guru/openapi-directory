# openapi_client.AccountApi

All URIs are relative to *https://api.appcenter.ms*

Method | HTTP request | Description
------------- | ------------- | -------------
[**app_api_tokens_delete**](AccountApi.md#app_api_tokens_delete) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/api_tokens/{api_token_id} | 
[**app_api_tokens_list**](AccountApi.md#app_api_tokens_list) | **GET** /v0.1/apps/{owner_name}/{app_name}/api_tokens | 
[**app_api_tokens_new**](AccountApi.md#app_api_tokens_new) | **POST** /v0.1/apps/{owner_name}/{app_name}/api_tokens | 
[**app_invitations_accept**](AccountApi.md#app_invitations_accept) | **POST** /v0.1/user/invitations/apps/{invitation_token}/accept | 
[**app_invitations_create**](AccountApi.md#app_invitations_create) | **POST** /v0.1/apps/{owner_name}/{app_name}/invitations | 
[**app_invitations_create_by_email**](AccountApi.md#app_invitations_create_by_email) | **POST** /v0.1/apps/{owner_name}/{app_name}/invitations/{user_email} | 
[**app_invitations_delete**](AccountApi.md#app_invitations_delete) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/invitations/{user_email} | 
[**app_invitations_list**](AccountApi.md#app_invitations_list) | **GET** /v0.1/apps/{owner_name}/{app_name}/invitations | 
[**app_invitations_reject**](AccountApi.md#app_invitations_reject) | **POST** /v0.1/user/invitations/apps/{invitation_token}/reject | 
[**app_invitations_update_permissions**](AccountApi.md#app_invitations_update_permissions) | **PATCH** /v0.1/apps/{owner_name}/{app_name}/invitations/{user_email} | 
[**apps_create**](AccountApi.md#apps_create) | **POST** /v0.1/apps | 
[**apps_create_for_org**](AccountApi.md#apps_create_for_org) | **POST** /v0.1/orgs/{org_name}/apps | 
[**apps_delete**](AccountApi.md#apps_delete) | **DELETE** /v0.1/apps/{owner_name}/{app_name} | 
[**apps_delete_avatar**](AccountApi.md#apps_delete_avatar) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/avatar | 
[**apps_get**](AccountApi.md#apps_get) | **GET** /v0.1/apps/{owner_name}/{app_name} | 
[**apps_get_for_org_user**](AccountApi.md#apps_get_for_org_user) | **GET** /v0.1/orgs/{org_name}/users/{user_name}/apps | 
[**apps_get_teams**](AccountApi.md#apps_get_teams) | **GET** /v0.1/apps/{owner_name}/{app_name}/teams | 
[**apps_list**](AccountApi.md#apps_list) | **GET** /v0.1/apps | 
[**apps_list_for_org**](AccountApi.md#apps_list_for_org) | **GET** /v0.1/orgs/{org_name}/apps | 
[**apps_list_testers**](AccountApi.md#apps_list_testers) | **GET** /v0.1/apps/{owner_name}/{app_name}/testers | 
[**apps_remove_user**](AccountApi.md#apps_remove_user) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/users/{user_email} | 
[**apps_transfer_ownership**](AccountApi.md#apps_transfer_ownership) | **POST** /v0.1/apps/{owner_name}/{app_name}/transfer/{destination_owner_name} | 
[**apps_transfer_to_org**](AccountApi.md#apps_transfer_to_org) | **POST** /v0.1/apps/{owner_name}/{app_name}/transfer_to_org | 
[**apps_update**](AccountApi.md#apps_update) | **PATCH** /v0.1/apps/{owner_name}/{app_name} | 
[**apps_update_avatar**](AccountApi.md#apps_update_avatar) | **POST** /v0.1/apps/{owner_name}/{app_name}/avatar | 
[**apps_update_user_permissions**](AccountApi.md#apps_update_user_permissions) | **PATCH** /v0.1/apps/{owner_name}/{app_name}/users/{user_email} | 
[**azure_subscription_delete_for_app**](AccountApi.md#azure_subscription_delete_for_app) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/azure_subscriptions/{azure_subscription_id} | 
[**azure_subscription_link_for_app**](AccountApi.md#azure_subscription_link_for_app) | **POST** /v0.1/apps/{owner_name}/{app_name}/azure_subscriptions | 
[**azure_subscription_list_for_app**](AccountApi.md#azure_subscription_list_for_app) | **GET** /v0.1/apps/{owner_name}/{app_name}/azure_subscriptions | 
[**azure_subscription_list_for_org**](AccountApi.md#azure_subscription_list_for_org) | **GET** /v0.1/orgs/{org_name}/azure_subscriptions | 
[**azure_subscription_list_for_user**](AccountApi.md#azure_subscription_list_for_user) | **GET** /v0.1/azure_subscriptions | 
[**distribution_group_invitations_accept_all**](AccountApi.md#distribution_group_invitations_accept_all) | **POST** /v0.1/user/invitations/distribution_groups/accept | 
[**distribution_groups_add_apps**](AccountApi.md#distribution_groups_add_apps) | **POST** /v0.1/orgs/{org_name}/distribution_groups/{distribution_group_name}/apps | 
[**distribution_groups_add_user**](AccountApi.md#distribution_groups_add_user) | **POST** /v0.1/apps/{owner_name}/{app_name}/distribution_groups/{distribution_group_name}/members | 
[**distribution_groups_add_users_for_org**](AccountApi.md#distribution_groups_add_users_for_org) | **POST** /v0.1/orgs/{org_name}/distribution_groups/{distribution_group_name}/members | 
[**distribution_groups_bulk_delete_apps**](AccountApi.md#distribution_groups_bulk_delete_apps) | **POST** /v0.1/orgs/{org_name}/distribution_groups/{distribution_group_name}/apps/bulk_delete | 
[**distribution_groups_bulk_delete_users**](AccountApi.md#distribution_groups_bulk_delete_users) | **POST** /v0.1/orgs/{org_name}/distribution_groups/{distribution_group_name}/members/bulk_delete | 
[**distribution_groups_create**](AccountApi.md#distribution_groups_create) | **POST** /v0.1/apps/{owner_name}/{app_name}/distribution_groups | 
[**distribution_groups_create_for_org**](AccountApi.md#distribution_groups_create_for_org) | **POST** /v0.1/orgs/{org_name}/distribution_groups | 
[**distribution_groups_delete**](AccountApi.md#distribution_groups_delete) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/distribution_groups/{distribution_group_name} | 
[**distribution_groups_delete_for_org**](AccountApi.md#distribution_groups_delete_for_org) | **DELETE** /v0.1/orgs/{org_name}/distribution_groups/{distribution_group_name} | 
[**distribution_groups_details_for_org**](AccountApi.md#distribution_groups_details_for_org) | **GET** /v0.1/orgs/{org_name}/distribution_groups_details | 
[**distribution_groups_get**](AccountApi.md#distribution_groups_get) | **GET** /v0.1/apps/{owner_name}/{app_name}/distribution_groups/{distribution_group_name} | 
[**distribution_groups_get_apps**](AccountApi.md#distribution_groups_get_apps) | **GET** /v0.1/orgs/{org_name}/distribution_groups/{distribution_group_name}/apps | 
[**distribution_groups_get_for_org**](AccountApi.md#distribution_groups_get_for_org) | **GET** /v0.1/orgs/{org_name}/distribution_groups/{distribution_group_name} | 
[**distribution_groups_list**](AccountApi.md#distribution_groups_list) | **GET** /v0.1/apps/{owner_name}/{app_name}/distribution_groups | 
[**distribution_groups_list_all_testers_for_org**](AccountApi.md#distribution_groups_list_all_testers_for_org) | **GET** /v0.1/orgs/{org_name}/testers | 
[**distribution_groups_list_for_org**](AccountApi.md#distribution_groups_list_for_org) | **GET** /v0.1/orgs/{org_name}/distribution_groups | 
[**distribution_groups_list_users**](AccountApi.md#distribution_groups_list_users) | **GET** /v0.1/apps/{owner_name}/{app_name}/distribution_groups/{distribution_group_name}/members | 
[**distribution_groups_list_users_for_org**](AccountApi.md#distribution_groups_list_users_for_org) | **GET** /v0.1/orgs/{org_name}/distribution_groups/{distribution_group_name}/members | 
[**distribution_groups_patch_for_org**](AccountApi.md#distribution_groups_patch_for_org) | **PATCH** /v0.1/orgs/{org_name}/distribution_groups/{distribution_group_name} | 
[**distribution_groups_remove_user**](AccountApi.md#distribution_groups_remove_user) | **POST** /v0.1/apps/{owner_name}/{app_name}/distribution_groups/{distribution_group_name}/members/bulk_delete | 
[**distribution_groups_resend_invite**](AccountApi.md#distribution_groups_resend_invite) | **POST** /v0.1/apps/{owner_name}/{app_name}/distribution_groups/{distribution_group_name}/resend_invite | 
[**distribution_groups_resend_shared_invite**](AccountApi.md#distribution_groups_resend_shared_invite) | **POST** /v0.1/orgs/{org_name}/distribution_groups/{distribution_group_name}/resend_invite | 
[**distribution_groups_update**](AccountApi.md#distribution_groups_update) | **PATCH** /v0.1/apps/{owner_name}/{app_name}/distribution_groups/{distribution_group_name} | 
[**invitations_sent**](AccountApi.md#invitations_sent) | **GET** /v0.1/invitations/sent | 
[**org_invitations**](AccountApi.md#org_invitations) | **POST** /v0.1/orgs/{org_name}/invitations/{email}/revoke | 
[**org_invitations_accept**](AccountApi.md#org_invitations_accept) | **POST** /v0.1/user/invitations/orgs/{invitation_token}/accept | 
[**org_invitations_create**](AccountApi.md#org_invitations_create) | **POST** /v0.1/orgs/{org_name}/invitations | 
[**org_invitations_delete**](AccountApi.md#org_invitations_delete) | **DELETE** /v0.1/orgs/{org_name}/invitations | 
[**org_invitations_list_pending**](AccountApi.md#org_invitations_list_pending) | **GET** /v0.1/orgs/{org_name}/invitations | 
[**org_invitations_reject**](AccountApi.md#org_invitations_reject) | **POST** /v0.1/user/invitations/orgs/{invitation_token}/reject | 
[**org_invitations_send_new_invitation**](AccountApi.md#org_invitations_send_new_invitation) | **POST** /v0.1/orgs/{org_name}/invitations/{email}/resend | 
[**org_invitations_update**](AccountApi.md#org_invitations_update) | **PATCH** /v0.1/orgs/{org_name}/invitations/{email} | 
[**organization_delete_avatar**](AccountApi.md#organization_delete_avatar) | **DELETE** /v0.1/orgs/{org_name}/avatar | 
[**organization_update_avatar**](AccountApi.md#organization_update_avatar) | **POST** /v0.1/orgs/{org_name}/avatar | 
[**organizations_create_or_update**](AccountApi.md#organizations_create_or_update) | **POST** /v0.1/orgs | 
[**organizations_delete**](AccountApi.md#organizations_delete) | **DELETE** /v0.1/orgs/{org_name} | 
[**organizations_get**](AccountApi.md#organizations_get) | **GET** /v0.1/orgs/{org_name} | 
[**organizations_list**](AccountApi.md#organizations_list) | **GET** /v0.1/orgs | 
[**organizations_list_administered**](AccountApi.md#organizations_list_administered) | **GET** /v0.1/administeredOrgs | 
[**organizations_update**](AccountApi.md#organizations_update) | **PATCH** /v0.1/orgs/{org_name} | 
[**sharedconnection_connections**](AccountApi.md#sharedconnection_connections) | **GET** /v0.1/user/export/serviceConnections | 
[**teams_add_app**](AccountApi.md#teams_add_app) | **POST** /v0.1/orgs/{org_name}/teams/{team_name}/apps | 
[**teams_add_user**](AccountApi.md#teams_add_user) | **POST** /v0.1/orgs/{org_name}/teams/{team_name}/users | 
[**teams_create_team**](AccountApi.md#teams_create_team) | **POST** /v0.1/orgs/{org_name}/teams | 
[**teams_delete**](AccountApi.md#teams_delete) | **DELETE** /v0.1/orgs/{org_name}/teams/{team_name} | 
[**teams_get_team**](AccountApi.md#teams_get_team) | **GET** /v0.1/orgs/{org_name}/teams/{team_name} | 
[**teams_get_users**](AccountApi.md#teams_get_users) | **GET** /v0.1/orgs/{org_name}/teams/{team_name}/users | 
[**teams_list_all**](AccountApi.md#teams_list_all) | **GET** /v0.1/orgs/{org_name}/teams | 
[**teams_list_apps**](AccountApi.md#teams_list_apps) | **GET** /v0.1/orgs/{org_name}/teams/{team_name}/apps | 
[**teams_remove_app**](AccountApi.md#teams_remove_app) | **DELETE** /v0.1/orgs/{org_name}/teams/{team_name}/apps/{app_name} | 
[**teams_remove_user**](AccountApi.md#teams_remove_user) | **DELETE** /v0.1/orgs/{org_name}/teams/{team_name}/users/{user_name} | 
[**teams_update**](AccountApi.md#teams_update) | **PATCH** /v0.1/orgs/{org_name}/teams/{team_name} | 
[**teams_update_permissions**](AccountApi.md#teams_update_permissions) | **PATCH** /v0.1/orgs/{org_name}/teams/{team_name}/apps/{app_name} | 
[**user_api_tokens_delete**](AccountApi.md#user_api_tokens_delete) | **DELETE** /v0.1/api_tokens/{api_token_id} | 
[**user_api_tokens_list**](AccountApi.md#user_api_tokens_list) | **GET** /v0.1/api_tokens | 
[**user_api_tokens_new**](AccountApi.md#user_api_tokens_new) | **POST** /v0.1/api_tokens | 
[**users_get**](AccountApi.md#users_get) | **GET** /v0.1/user | 
[**users_get_for_org**](AccountApi.md#users_get_for_org) | **GET** /v0.1/orgs/{org_name}/users/{user_name} | 
[**users_get_user_metadata**](AccountApi.md#users_get_user_metadata) | **GET** /v0.1/user/metadata/optimizely | 
[**users_list**](AccountApi.md#users_list) | **GET** /v0.1/apps/{owner_name}/{app_name}/users | 
[**users_list_for_org**](AccountApi.md#users_list_for_org) | **GET** /v0.1/orgs/{org_name}/users | 
[**users_remove_from_org**](AccountApi.md#users_remove_from_org) | **DELETE** /v0.1/orgs/{org_name}/users/{user_name} | 
[**users_update**](AccountApi.md#users_update) | **PATCH** /v0.1/user | 
[**users_update_org_role**](AccountApi.md#users_update_org_role) | **PATCH** /v0.1/orgs/{org_name}/users/{user_name} | 


# **app_api_tokens_delete**
> app_api_tokens_delete(owner_name, app_name, api_token_id)



Delete the App Api Token object with the specific ID

### Example

* Basic Authentication (Basic):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: Basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    api_token_id = 'api_token_id_example' # str | The unique ID (UUID) of the api token

    try:
        api_instance.app_api_tokens_delete(owner_name, app_name, api_token_id)
    except Exception as e:
        print("Exception when calling AccountApi->app_api_tokens_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **api_token_id** | **str**| The unique ID (UUID) of the api token | 

### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**400** | Error |  -  |
**401** | Unauthorized |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_api_tokens_list**
> List[UserApiTokensList200ResponseInner] app_api_tokens_list(owner_name, app_name)



Returns App API tokens for the app

### Example

* Basic Authentication (Basic):

```python
import openapi_client
from openapi_client.models.user_api_tokens_list200_response_inner import UserApiTokensList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: Basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.app_api_tokens_list(owner_name, app_name)
        print("The response of AccountApi->app_api_tokens_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->app_api_tokens_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[UserApiTokensList200ResponseInner]**](UserApiTokensList200ResponseInner.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Error |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_api_tokens_new**
> UserApiTokensNew201Response app_api_tokens_new(owner_name, app_name, user_api_tokens_new_request=user_api_tokens_new_request)



Creates a new App API token

### Example

* Basic Authentication (Basic):

```python
import openapi_client
from openapi_client.models.user_api_tokens_new201_response import UserApiTokensNew201Response
from openapi_client.models.user_api_tokens_new_request import UserApiTokensNewRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: Basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    user_api_tokens_new_request = openapi_client.UserApiTokensNewRequest() # UserApiTokensNewRequest | Description of the token (optional)

    try:
        api_response = api_instance.app_api_tokens_new(owner_name, app_name, user_api_tokens_new_request=user_api_tokens_new_request)
        print("The response of AccountApi->app_api_tokens_new:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->app_api_tokens_new: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **user_api_tokens_new_request** | [**UserApiTokensNewRequest**](UserApiTokensNewRequest.md)| Description of the token | [optional] 

### Return type

[**UserApiTokensNew201Response**](UserApiTokensNew201Response.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**400** | Error |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_invitations_accept**
> app_invitations_accept(invitation_token, body=body)



Accepts a pending invitation for the specified user

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    invitation_token = 'invitation_token_example' # str | The app invitation token that was sent to the user
    body = None # object | allow empty body for custom http-client lib (optional)

    try:
        api_instance.app_invitations_accept(invitation_token, body=body)
    except Exception as e:
        print("Exception when calling AccountApi->app_invitations_accept: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invitation_token** | **str**| The app invitation token that was sent to the user | 
 **body** | **object**| allow empty body for custom http-client lib | [optional] 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_invitations_create**
> app_invitations_create(owner_name, app_name, app_invitations_create_request=app_invitations_create_request)



Invites a new or existing user to an app

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.app_invitations_create_request import AppInvitationsCreateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    app_invitations_create_request = openapi_client.AppInvitationsCreateRequest() # AppInvitationsCreateRequest | The email of the user to invite (optional)

    try:
        api_instance.app_invitations_create(owner_name, app_name, app_invitations_create_request=app_invitations_create_request)
    except Exception as e:
        print("Exception when calling AccountApi->app_invitations_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **app_invitations_create_request** | [**AppInvitationsCreateRequest**](AppInvitationsCreateRequest.md)| The email of the user to invite | [optional] 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_invitations_create_by_email**
> app_invitations_create_by_email(owner_name, app_name, user_email, app_invitations_create_by_email_request=app_invitations_create_by_email_request)



Invites a new or existing user to an app

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.app_invitations_create_by_email_request import AppInvitationsCreateByEmailRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    user_email = 'user_email_example' # str | The email of the user to invite
    app_invitations_create_by_email_request = openapi_client.AppInvitationsCreateByEmailRequest() # AppInvitationsCreateByEmailRequest | The role of the user to be added (optional)

    try:
        api_instance.app_invitations_create_by_email(owner_name, app_name, user_email, app_invitations_create_by_email_request=app_invitations_create_by_email_request)
    except Exception as e:
        print("Exception when calling AccountApi->app_invitations_create_by_email: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **user_email** | **str**| The email of the user to invite | 
 **app_invitations_create_by_email_request** | [**AppInvitationsCreateByEmailRequest**](AppInvitationsCreateByEmailRequest.md)| The role of the user to be added | [optional] 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_invitations_delete**
> app_invitations_delete(owner_name, app_name, user_email)



Removes a user's invitation to an app

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    user_email = 'user_email_example' # str | The email of the user to invite

    try:
        api_instance.app_invitations_delete(owner_name, app_name, user_email)
    except Exception as e:
        print("Exception when calling AccountApi->app_invitations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **user_email** | **str**| The email of the user to invite | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_invitations_list**
> AppInvitationsList200Response app_invitations_list(owner_name, app_name)



Gets the pending invitations for the app

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.app_invitations_list200_response import AppInvitationsList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.app_invitations_list(owner_name, app_name)
        print("The response of AccountApi->app_invitations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->app_invitations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**AppInvitationsList200Response**](AppInvitationsList200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_invitations_reject**
> app_invitations_reject(invitation_token, body=body)



Rejects a pending invitation for the specified user

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    invitation_token = 'invitation_token_example' # str | The app invitation token that was sent to the user
    body = None # object | allow empty body for custom http-client lib (optional)

    try:
        api_instance.app_invitations_reject(invitation_token, body=body)
    except Exception as e:
        print("Exception when calling AccountApi->app_invitations_reject: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invitation_token** | **str**| The app invitation token that was sent to the user | 
 **body** | **object**| allow empty body for custom http-client lib | [optional] 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_invitations_update_permissions**
> app_invitations_update_permissions(owner_name, app_name, user_email, app_invitations_update_permissions_request)



Update pending invitation permission

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.app_invitations_update_permissions_request import AppInvitationsUpdatePermissionsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    user_email = 'user_email_example' # str | The email of the user to invite
    app_invitations_update_permissions_request = openapi_client.AppInvitationsUpdatePermissionsRequest() # AppInvitationsUpdatePermissionsRequest | The value to update the user permission in the invite.

    try:
        api_instance.app_invitations_update_permissions(owner_name, app_name, user_email, app_invitations_update_permissions_request)
    except Exception as e:
        print("Exception when calling AccountApi->app_invitations_update_permissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **user_email** | **str**| The email of the user to invite | 
 **app_invitations_update_permissions_request** | [**AppInvitationsUpdatePermissionsRequest**](AppInvitationsUpdatePermissionsRequest.md)| The value to update the user permission in the invite. | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_create**
> AppsList200ResponseInner apps_create(apps_create_request)



Creates a new app and returns it to the caller

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.apps_create_request import AppsCreateRequest
from openapi_client.models.apps_list200_response_inner import AppsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    apps_create_request = openapi_client.AppsCreateRequest() # AppsCreateRequest | The data for the app

    try:
        api_response = api_instance.apps_create(apps_create_request)
        print("The response of AccountApi->apps_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->apps_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apps_create_request** | [**AppsCreateRequest**](AppsCreateRequest.md)| The data for the app | 

### Return type

[**AppsList200ResponseInner**](AppsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_create_for_org**
> AppsList200ResponseInner apps_create_for_org(org_name, apps_create_request)



Creates a new app for the organization and returns it to the caller

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.apps_create_request import AppsCreateRequest
from openapi_client.models.apps_list200_response_inner import AppsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    apps_create_request = openapi_client.AppsCreateRequest() # AppsCreateRequest | The data for the app

    try:
        api_response = api_instance.apps_create_for_org(org_name, apps_create_request)
        print("The response of AccountApi->apps_create_for_org:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->apps_create_for_org: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **apps_create_request** | [**AppsCreateRequest**](AppsCreateRequest.md)| The data for the app | 

### Return type

[**AppsList200ResponseInner**](AppsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**201** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_delete**
> apps_delete(app_name, owner_name)



Delete an app

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    app_name = 'app_name_example' # str | The name of the application
    owner_name = 'owner_name_example' # str | The name of the owner

    try:
        api_instance.apps_delete(app_name, owner_name)
    except Exception as e:
        print("Exception when calling AccountApi->apps_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_name** | **str**| The name of the application | 
 **owner_name** | **str**| The name of the owner | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_delete_avatar**
> AppsList200ResponseInner apps_delete_avatar(owner_name, app_name)



Deletes the uploaded app avatar

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.apps_list200_response_inner import AppsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.apps_delete_avatar(owner_name, app_name)
        print("The response of AccountApi->apps_delete_avatar:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->apps_delete_avatar: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**AppsList200ResponseInner**](AppsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_get**
> AppsList200ResponseInner apps_get(owner_name, app_name)



Return a specific app with the given app name which belongs to the given owner.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.apps_list200_response_inner import AppsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.apps_get(owner_name, app_name)
        print("The response of AccountApi->apps_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->apps_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**AppsList200ResponseInner**](AppsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_get_for_org_user**
> List[AppsList200ResponseInner] apps_get_for_org_user(org_name, user_name)



Get a user apps information from an organization by name

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.apps_list200_response_inner import AppsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    user_name = 'user_name_example' # str | The slug name of the user

    try:
        api_response = api_instance.apps_get_for_org_user(org_name, user_name)
        print("The response of AccountApi->apps_get_for_org_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->apps_get_for_org_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **user_name** | **str**| The slug name of the user | 

### Return type

[**List[AppsList200ResponseInner]**](AppsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_get_teams**
> List[AppsGetTeams200ResponseInner] apps_get_teams(app_name, owner_name)



Returns the details of all teams that have access to the app.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.apps_get_teams200_response_inner import AppsGetTeams200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    app_name = 'app_name_example' # str | The name of the application
    owner_name = 'owner_name_example' # str | The name of the owner

    try:
        api_response = api_instance.apps_get_teams(app_name, owner_name)
        print("The response of AccountApi->apps_get_teams:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->apps_get_teams: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_name** | **str**| The name of the application | 
 **owner_name** | **str**| The name of the owner | 

### Return type

[**List[AppsGetTeams200ResponseInner]**](AppsGetTeams200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_list**
> List[AppsList200ResponseInner] apps_list(order_by=order_by)



Returns a list of apps

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.apps_list200_response_inner import AppsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    order_by = 'order_by_example' # str | The name of the attribute by which to order the response by. By default, apps are in order of creation. All results are ordered in ascending order. (optional)

    try:
        api_response = api_instance.apps_list(order_by=order_by)
        print("The response of AccountApi->apps_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->apps_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_by** | **str**| The name of the attribute by which to order the response by. By default, apps are in order of creation. All results are ordered in ascending order. | [optional] 

### Return type

[**List[AppsList200ResponseInner]**](AppsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_list_for_org**
> List[AppsList200ResponseInner] apps_list_for_org(org_name)



Returns a list of apps for the organization

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.apps_list200_response_inner import AppsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name

    try:
        api_response = api_instance.apps_list_for_org(org_name)
        print("The response of AccountApi->apps_list_for_org:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->apps_list_for_org: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 

### Return type

[**List[AppsList200ResponseInner]**](AppsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_list_testers**
> List[AppInvitationsList200ResponseInvitedBy] apps_list_testers(owner_name, app_name)



Returns the testers associated with the app specified with the given app name which belongs to the given owner.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.app_invitations_list200_response_invited_by import AppInvitationsList200ResponseInvitedBy
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.apps_list_testers(owner_name, app_name)
        print("The response of AccountApi->apps_list_testers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->apps_list_testers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[AppInvitationsList200ResponseInvitedBy]**](AppInvitationsList200ResponseInvitedBy.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_remove_user**
> apps_remove_user(owner_name, app_name, user_email)



Removes the user from the app

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    user_email = 'user_email_example' # str | The user email of the user to delete

    try:
        api_instance.apps_remove_user(owner_name, app_name, user_email)
    except Exception as e:
        print("Exception when calling AccountApi->apps_remove_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **user_email** | **str**| The user email of the user to delete | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_transfer_ownership**
> AppsList200ResponseInner apps_transfer_ownership(owner_name, app_name, destination_owner_name, body=body)



Transfers ownership of an app to a different user or organization

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.apps_list200_response_inner import AppsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    destination_owner_name = 'destination_owner_name_example' # str | The name of the owner (user or organization) to which the app is being transferred
    body = None # object | allow empty body for custom http-client lib (optional)

    try:
        api_response = api_instance.apps_transfer_ownership(owner_name, app_name, destination_owner_name, body=body)
        print("The response of AccountApi->apps_transfer_ownership:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->apps_transfer_ownership: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **destination_owner_name** | **str**| The name of the owner (user or organization) to which the app is being transferred | 
 **body** | **object**| allow empty body for custom http-client lib | [optional] 

### Return type

[**AppsList200ResponseInner**](AppsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json, application/octet-stream
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_transfer_to_org**
> OrganizationsListAdministered200ResponseOrganizations apps_transfer_to_org(owner_name, app_name, body=body)



Transfers ownership of an app to a new organization

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.organizations_list_administered200_response_organizations import OrganizationsListAdministered200ResponseOrganizations
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    body = None # object | allow empty body for custom http-client lib (optional)

    try:
        api_response = api_instance.apps_transfer_to_org(owner_name, app_name, body=body)
        print("The response of AccountApi->apps_transfer_to_org:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->apps_transfer_to_org: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **body** | **object**| allow empty body for custom http-client lib | [optional] 

### Return type

[**OrganizationsListAdministered200ResponseOrganizations**](OrganizationsListAdministered200ResponseOrganizations.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_update**
> AppsList200ResponseInner apps_update(app_name, owner_name, apps_update_request=apps_update_request)



Partially updates a single app

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.apps_list200_response_inner import AppsList200ResponseInner
from openapi_client.models.apps_update_request import AppsUpdateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    app_name = 'app_name_example' # str | The name of the application
    owner_name = 'owner_name_example' # str | The name of the owner
    apps_update_request = openapi_client.AppsUpdateRequest() # AppsUpdateRequest | The partial data for the app (optional)

    try:
        api_response = api_instance.apps_update(app_name, owner_name, apps_update_request=apps_update_request)
        print("The response of AccountApi->apps_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->apps_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_name** | **str**| The name of the application | 
 **owner_name** | **str**| The name of the owner | 
 **apps_update_request** | [**AppsUpdateRequest**](AppsUpdateRequest.md)| The partial data for the app | [optional] 

### Return type

[**AppsList200ResponseInner**](AppsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_update_avatar**
> AppsList200ResponseInner apps_update_avatar(owner_name, app_name, avatar=avatar)



Sets the app avatar

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.apps_list200_response_inner import AppsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    avatar = None # bytearray | The image for an app avatar to upload. (optional)

    try:
        api_response = api_instance.apps_update_avatar(owner_name, app_name, avatar=avatar)
        print("The response of AccountApi->apps_update_avatar:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->apps_update_avatar: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **avatar** | **bytearray**| The image for an app avatar to upload. | [optional] 

### Return type

[**AppsList200ResponseInner**](AppsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_update_user_permissions**
> apps_update_user_permissions(owner_name, app_name, user_email, apps_update_user_permissions_request)



Update user permission for the app

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.apps_update_user_permissions_request import AppsUpdateUserPermissionsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    user_email = 'user_email_example' # str | The user email of the user to patch
    apps_update_user_permissions_request = openapi_client.AppsUpdateUserPermissionsRequest() # AppsUpdateUserPermissionsRequest | The value to update the user permission for the app.

    try:
        api_instance.apps_update_user_permissions(owner_name, app_name, user_email, apps_update_user_permissions_request)
    except Exception as e:
        print("Exception when calling AccountApi->apps_update_user_permissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **user_email** | **str**| The user email of the user to patch | 
 **apps_update_user_permissions_request** | [**AppsUpdateUserPermissionsRequest**](AppsUpdateUserPermissionsRequest.md)| The value to update the user permission for the app. | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **azure_subscription_delete_for_app**
> azure_subscription_delete_for_app(azure_subscription_id, owner_name, app_name)



Delete the azure subscriptions for the app

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    azure_subscription_id = 'azure_subscription_id_example' # str | The unique ID (UUID) of the azure subscription
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_instance.azure_subscription_delete_for_app(azure_subscription_id, owner_name, app_name)
    except Exception as e:
        print("Exception when calling AccountApi->azure_subscription_delete_for_app: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **azure_subscription_id** | **str**| The unique ID (UUID) of the azure subscription | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **azure_subscription_link_for_app**
> azure_subscription_link_for_app(owner_name, app_name, azure_subscription_link_for_app_request)



Link azure subscription to an app

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.azure_subscription_link_for_app_request import AzureSubscriptionLinkForAppRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    azure_subscription_link_for_app_request = openapi_client.AzureSubscriptionLinkForAppRequest() # AzureSubscriptionLinkForAppRequest | The azure subscription data needed to be link to the app.

    try:
        api_instance.azure_subscription_link_for_app(owner_name, app_name, azure_subscription_link_for_app_request)
    except Exception as e:
        print("Exception when calling AccountApi->azure_subscription_link_for_app: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **azure_subscription_link_for_app_request** | [**AzureSubscriptionLinkForAppRequest**](AzureSubscriptionLinkForAppRequest.md)| The azure subscription data needed to be link to the app. | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **azure_subscription_list_for_app**
> List[AppsList200ResponseInnerAllOfAzureSubscription] azure_subscription_list_for_app(owner_name, app_name)



Returns a list of azure subscriptions for the app

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.apps_list200_response_inner_all_of_azure_subscription import AppsList200ResponseInnerAllOfAzureSubscription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.azure_subscription_list_for_app(owner_name, app_name)
        print("The response of AccountApi->azure_subscription_list_for_app:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->azure_subscription_list_for_app: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[AppsList200ResponseInnerAllOfAzureSubscription]**](AppsList200ResponseInnerAllOfAzureSubscription.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **azure_subscription_list_for_org**
> List[AppsList200ResponseInnerAllOfAzureSubscription] azure_subscription_list_for_org(org_name)



Returns a list of azure subscriptions for the organization

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.apps_list200_response_inner_all_of_azure_subscription import AppsList200ResponseInnerAllOfAzureSubscription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name

    try:
        api_response = api_instance.azure_subscription_list_for_org(org_name)
        print("The response of AccountApi->azure_subscription_list_for_org:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->azure_subscription_list_for_org: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 

### Return type

[**List[AppsList200ResponseInnerAllOfAzureSubscription]**](AppsList200ResponseInnerAllOfAzureSubscription.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **azure_subscription_list_for_user**
> List[AppsList200ResponseInnerAllOfAzureSubscription] azure_subscription_list_for_user()



Returns a list of azure subscriptions for the user

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.apps_list200_response_inner_all_of_azure_subscription import AppsList200ResponseInnerAllOfAzureSubscription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)

    try:
        api_response = api_instance.azure_subscription_list_for_user()
        print("The response of AccountApi->azure_subscription_list_for_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->azure_subscription_list_for_user: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[AppsList200ResponseInnerAllOfAzureSubscription]**](AppsList200ResponseInnerAllOfAzureSubscription.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **distribution_group_invitations_accept_all**
> distribution_group_invitations_accept_all(body=body)



Accepts all pending invitations to distribution groups for the specified user

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    body = None # object | allow empty body for custom http-client lib (optional)

    try:
        api_instance.distribution_group_invitations_accept_all(body=body)
    except Exception as e:
        print("Exception when calling AccountApi->distribution_group_invitations_accept_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**| allow empty body for custom http-client lib | [optional] 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **distribution_groups_add_apps**
> distribution_groups_add_apps(org_name, distribution_group_name, distribution_groups_add_apps_request)



Add apps to distribution group in an org

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.distribution_groups_add_apps_request import DistributionGroupsAddAppsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    distribution_group_name = 'distribution_group_name_example' # str | The name of the distribution group
    distribution_groups_add_apps_request = openapi_client.DistributionGroupsAddAppsRequest() # DistributionGroupsAddAppsRequest | The name of the apps to be added to the distribution group. The apps have to be owned by the organization.

    try:
        api_instance.distribution_groups_add_apps(org_name, distribution_group_name, distribution_groups_add_apps_request)
    except Exception as e:
        print("Exception when calling AccountApi->distribution_groups_add_apps: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **distribution_group_name** | **str**| The name of the distribution group | 
 **distribution_groups_add_apps_request** | [**DistributionGroupsAddAppsRequest**](DistributionGroupsAddAppsRequest.md)| The name of the apps to be added to the distribution group. The apps have to be owned by the organization. | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **distribution_groups_add_user**
> List[DistributionGroupsAddUser200ResponseInner] distribution_groups_add_user(owner_name, app_name, distribution_group_name, distribution_groups_add_user_request)



Adds the members to the specified distribution group

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.distribution_groups_add_user200_response_inner import DistributionGroupsAddUser200ResponseInner
from openapi_client.models.distribution_groups_add_user_request import DistributionGroupsAddUserRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    distribution_group_name = 'distribution_group_name_example' # str | The name of the distribution group
    distribution_groups_add_user_request = openapi_client.DistributionGroupsAddUserRequest() # DistributionGroupsAddUserRequest | The list of members to add

    try:
        api_response = api_instance.distribution_groups_add_user(owner_name, app_name, distribution_group_name, distribution_groups_add_user_request)
        print("The response of AccountApi->distribution_groups_add_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->distribution_groups_add_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **distribution_group_name** | **str**| The name of the distribution group | 
 **distribution_groups_add_user_request** | [**DistributionGroupsAddUserRequest**](DistributionGroupsAddUserRequest.md)| The list of members to add | 

### Return type

[**List[DistributionGroupsAddUser200ResponseInner]**](DistributionGroupsAddUser200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **distribution_groups_add_users_for_org**
> List[DistributionGroupsAddUser200ResponseInner] distribution_groups_add_users_for_org(org_name, distribution_group_name, distribution_groups_add_user_request)



Accepts an array of user email addresses to get added to the specified group

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.distribution_groups_add_user200_response_inner import DistributionGroupsAddUser200ResponseInner
from openapi_client.models.distribution_groups_add_user_request import DistributionGroupsAddUserRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    distribution_group_name = 'distribution_group_name_example' # str | The name of the distribution group
    distribution_groups_add_user_request = openapi_client.DistributionGroupsAddUserRequest() # DistributionGroupsAddUserRequest | list of user email addresses that should get added as members to the specified group

    try:
        api_response = api_instance.distribution_groups_add_users_for_org(org_name, distribution_group_name, distribution_groups_add_user_request)
        print("The response of AccountApi->distribution_groups_add_users_for_org:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->distribution_groups_add_users_for_org: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **distribution_group_name** | **str**| The name of the distribution group | 
 **distribution_groups_add_user_request** | [**DistributionGroupsAddUserRequest**](DistributionGroupsAddUserRequest.md)| list of user email addresses that should get added as members to the specified group | 

### Return type

[**List[DistributionGroupsAddUser200ResponseInner]**](DistributionGroupsAddUser200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **distribution_groups_bulk_delete_apps**
> distribution_groups_bulk_delete_apps(org_name, distribution_group_name, distribution_groups_bulk_delete_apps_request)



Delete apps from distribution group in an org

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.distribution_groups_bulk_delete_apps_request import DistributionGroupsBulkDeleteAppsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    distribution_group_name = 'distribution_group_name_example' # str | The name of the distribution group
    distribution_groups_bulk_delete_apps_request = openapi_client.DistributionGroupsBulkDeleteAppsRequest() # DistributionGroupsBulkDeleteAppsRequest | The name of the apps to be deleted from the distribution group. The apps have to be owned by the organization.

    try:
        api_instance.distribution_groups_bulk_delete_apps(org_name, distribution_group_name, distribution_groups_bulk_delete_apps_request)
    except Exception as e:
        print("Exception when calling AccountApi->distribution_groups_bulk_delete_apps: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **distribution_group_name** | **str**| The name of the distribution group | 
 **distribution_groups_bulk_delete_apps_request** | [**DistributionGroupsBulkDeleteAppsRequest**](DistributionGroupsBulkDeleteAppsRequest.md)| The name of the apps to be deleted from the distribution group. The apps have to be owned by the organization. | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **distribution_groups_bulk_delete_users**
> distribution_groups_bulk_delete_users(org_name, distribution_group_name, distribution_groups_add_user_request)



Delete testers from distribution group in an org

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.distribution_groups_add_user_request import DistributionGroupsAddUserRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    distribution_group_name = 'distribution_group_name_example' # str | The name of the distribution group
    distribution_groups_add_user_request = openapi_client.DistributionGroupsAddUserRequest() # DistributionGroupsAddUserRequest | The list of members to add

    try:
        api_instance.distribution_groups_bulk_delete_users(org_name, distribution_group_name, distribution_groups_add_user_request)
    except Exception as e:
        print("Exception when calling AccountApi->distribution_groups_bulk_delete_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **distribution_group_name** | **str**| The name of the distribution group | 
 **distribution_groups_add_user_request** | [**DistributionGroupsAddUserRequest**](DistributionGroupsAddUserRequest.md)| The list of members to add | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **distribution_groups_create**
> DistributionGroupsList200ResponseInner distribution_groups_create(owner_name, app_name, distribution_groups_create_request)



Creates a new distribution group and returns it to the caller

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.distribution_groups_create_request import DistributionGroupsCreateRequest
from openapi_client.models.distribution_groups_list200_response_inner import DistributionGroupsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    distribution_groups_create_request = openapi_client.DistributionGroupsCreateRequest() # DistributionGroupsCreateRequest | The attributes to update for the distribution group

    try:
        api_response = api_instance.distribution_groups_create(owner_name, app_name, distribution_groups_create_request)
        print("The response of AccountApi->distribution_groups_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->distribution_groups_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **distribution_groups_create_request** | [**DistributionGroupsCreateRequest**](DistributionGroupsCreateRequest.md)| The attributes to update for the distribution group | 

### Return type

[**DistributionGroupsList200ResponseInner**](DistributionGroupsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **distribution_groups_create_for_org**
> DistributionGroupsList200ResponseInner distribution_groups_create_for_org(org_name, distribution_groups_create_request)



Creates a disribution goup which can be shared across apps under an organization

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.distribution_groups_create_request import DistributionGroupsCreateRequest
from openapi_client.models.distribution_groups_list200_response_inner import DistributionGroupsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    distribution_groups_create_request = openapi_client.DistributionGroupsCreateRequest() # DistributionGroupsCreateRequest | The attributes to update for the distribution group

    try:
        api_response = api_instance.distribution_groups_create_for_org(org_name, distribution_groups_create_request)
        print("The response of AccountApi->distribution_groups_create_for_org:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->distribution_groups_create_for_org: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **distribution_groups_create_request** | [**DistributionGroupsCreateRequest**](DistributionGroupsCreateRequest.md)| The attributes to update for the distribution group | 

### Return type

[**DistributionGroupsList200ResponseInner**](DistributionGroupsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **distribution_groups_delete**
> distribution_groups_delete(app_name, owner_name, distribution_group_name)



Deletes a distribution group

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    app_name = 'app_name_example' # str | The name of the application
    owner_name = 'owner_name_example' # str | The name of the owner
    distribution_group_name = 'distribution_group_name_example' # str | The name of the distribution group

    try:
        api_instance.distribution_groups_delete(app_name, owner_name, distribution_group_name)
    except Exception as e:
        print("Exception when calling AccountApi->distribution_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_name** | **str**| The name of the application | 
 **owner_name** | **str**| The name of the owner | 
 **distribution_group_name** | **str**| The name of the distribution group | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **distribution_groups_delete_for_org**
> distribution_groups_delete_for_org(org_name, distribution_group_name)



Deletes a single distribution group from an org with a given distribution group name

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    distribution_group_name = 'distribution_group_name_example' # str | The name of the distribution group

    try:
        api_instance.distribution_groups_delete_for_org(org_name, distribution_group_name)
    except Exception as e:
        print("Exception when calling AccountApi->distribution_groups_delete_for_org: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **distribution_group_name** | **str**| The name of the distribution group | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **distribution_groups_details_for_org**
> List[DistributionGroupsDetailsForOrg200ResponseInner] distribution_groups_details_for_org(org_name, apps_limit=apps_limit)



Returns a list of distribution groups with details for an organization

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.distribution_groups_details_for_org200_response_inner import DistributionGroupsDetailsForOrg200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    apps_limit = 3.4 # float | The max number of apps to include in the response (optional)

    try:
        api_response = api_instance.distribution_groups_details_for_org(org_name, apps_limit=apps_limit)
        print("The response of AccountApi->distribution_groups_details_for_org:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->distribution_groups_details_for_org: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **apps_limit** | **float**| The max number of apps to include in the response | [optional] 

### Return type

[**List[DistributionGroupsDetailsForOrg200ResponseInner]**](DistributionGroupsDetailsForOrg200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **distribution_groups_get**
> DistributionGroupsList200ResponseInner distribution_groups_get(owner_name, app_name, distribution_group_name)



Returns a single distribution group for a given distribution group name

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.distribution_groups_list200_response_inner import DistributionGroupsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    distribution_group_name = 'distribution_group_name_example' # str | The name of the distribution group

    try:
        api_response = api_instance.distribution_groups_get(owner_name, app_name, distribution_group_name)
        print("The response of AccountApi->distribution_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->distribution_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **distribution_group_name** | **str**| The name of the distribution group | 

### Return type

[**DistributionGroupsList200ResponseInner**](DistributionGroupsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **distribution_groups_get_apps**
> List[DistributionGroupsGetApps200ResponseInner] distribution_groups_get_apps(org_name, distribution_group_name)



Get apps from a distribution group in an org

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.distribution_groups_get_apps200_response_inner import DistributionGroupsGetApps200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    distribution_group_name = 'distribution_group_name_example' # str | The name of the distribution group

    try:
        api_response = api_instance.distribution_groups_get_apps(org_name, distribution_group_name)
        print("The response of AccountApi->distribution_groups_get_apps:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->distribution_groups_get_apps: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **distribution_group_name** | **str**| The name of the distribution group | 

### Return type

[**List[DistributionGroupsGetApps200ResponseInner]**](DistributionGroupsGetApps200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **distribution_groups_get_for_org**
> DistributionGroupsList200ResponseInner distribution_groups_get_for_org(org_name, distribution_group_name)



Returns a single distribution group in org for a given distribution group name

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.distribution_groups_list200_response_inner import DistributionGroupsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    distribution_group_name = 'distribution_group_name_example' # str | The name of the distribution group

    try:
        api_response = api_instance.distribution_groups_get_for_org(org_name, distribution_group_name)
        print("The response of AccountApi->distribution_groups_get_for_org:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->distribution_groups_get_for_org: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **distribution_group_name** | **str**| The name of the distribution group | 

### Return type

[**DistributionGroupsList200ResponseInner**](DistributionGroupsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **distribution_groups_list**
> List[DistributionGroupsList200ResponseInner] distribution_groups_list(owner_name, app_name)



Returns a list of distribution groups in the app specified

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.distribution_groups_list200_response_inner import DistributionGroupsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.distribution_groups_list(owner_name, app_name)
        print("The response of AccountApi->distribution_groups_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->distribution_groups_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[DistributionGroupsList200ResponseInner]**](DistributionGroupsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **distribution_groups_list_all_testers_for_org**
> List[DistributionGroupsListAllTestersForOrg200ResponseInner] distribution_groups_list_all_testers_for_org(org_name)



Returns a unique list of users including the whole organization members plus testers in any shared group of that org

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.distribution_groups_list_all_testers_for_org200_response_inner import DistributionGroupsListAllTestersForOrg200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name

    try:
        api_response = api_instance.distribution_groups_list_all_testers_for_org(org_name)
        print("The response of AccountApi->distribution_groups_list_all_testers_for_org:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->distribution_groups_list_all_testers_for_org: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 

### Return type

[**List[DistributionGroupsListAllTestersForOrg200ResponseInner]**](DistributionGroupsListAllTestersForOrg200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **distribution_groups_list_for_org**
> List[DistributionGroupsList200ResponseInner] distribution_groups_list_for_org(org_name)



Returns a list of distribution groups in the org specified

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.distribution_groups_list200_response_inner import DistributionGroupsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name

    try:
        api_response = api_instance.distribution_groups_list_for_org(org_name)
        print("The response of AccountApi->distribution_groups_list_for_org:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->distribution_groups_list_for_org: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 

### Return type

[**List[DistributionGroupsList200ResponseInner]**](DistributionGroupsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **distribution_groups_list_users**
> List[DistributionGroupsListUsers200ResponseInner] distribution_groups_list_users(owner_name, app_name, distribution_group_name, exclude_pending_invitations=exclude_pending_invitations)



Returns a list of member details in the distribution group specified

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.distribution_groups_list_users200_response_inner import DistributionGroupsListUsers200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    distribution_group_name = 'distribution_group_name_example' # str | The name of the distribution group
    exclude_pending_invitations = True # bool | Whether to exclude pending invitations in the response (optional)

    try:
        api_response = api_instance.distribution_groups_list_users(owner_name, app_name, distribution_group_name, exclude_pending_invitations=exclude_pending_invitations)
        print("The response of AccountApi->distribution_groups_list_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->distribution_groups_list_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **distribution_group_name** | **str**| The name of the distribution group | 
 **exclude_pending_invitations** | **bool**| Whether to exclude pending invitations in the response | [optional] 

### Return type

[**List[DistributionGroupsListUsers200ResponseInner]**](DistributionGroupsListUsers200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **distribution_groups_list_users_for_org**
> List[DistributionGroupsListUsers200ResponseInner] distribution_groups_list_users_for_org(org_name, distribution_group_name)



Returns a list of member in the distribution group specified

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.distribution_groups_list_users200_response_inner import DistributionGroupsListUsers200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    distribution_group_name = 'distribution_group_name_example' # str | The name of the distribution group

    try:
        api_response = api_instance.distribution_groups_list_users_for_org(org_name, distribution_group_name)
        print("The response of AccountApi->distribution_groups_list_users_for_org:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->distribution_groups_list_users_for_org: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **distribution_group_name** | **str**| The name of the distribution group | 

### Return type

[**List[DistributionGroupsListUsers200ResponseInner]**](DistributionGroupsListUsers200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **distribution_groups_patch_for_org**
> DistributionGroupsList200ResponseInner distribution_groups_patch_for_org(org_name, distribution_group_name, distribution_groups_update_request=distribution_groups_update_request)



Update one given distribution group name in an org

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.distribution_groups_list200_response_inner import DistributionGroupsList200ResponseInner
from openapi_client.models.distribution_groups_update_request import DistributionGroupsUpdateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    distribution_group_name = 'distribution_group_name_example' # str | The name of the distribution group
    distribution_groups_update_request = openapi_client.DistributionGroupsUpdateRequest() # DistributionGroupsUpdateRequest | The attributes to update for the distribution group (optional)

    try:
        api_response = api_instance.distribution_groups_patch_for_org(org_name, distribution_group_name, distribution_groups_update_request=distribution_groups_update_request)
        print("The response of AccountApi->distribution_groups_patch_for_org:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->distribution_groups_patch_for_org: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **distribution_group_name** | **str**| The name of the distribution group | 
 **distribution_groups_update_request** | [**DistributionGroupsUpdateRequest**](DistributionGroupsUpdateRequest.md)| The attributes to update for the distribution group | [optional] 

### Return type

[**DistributionGroupsList200ResponseInner**](DistributionGroupsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **distribution_groups_remove_user**
> List[DistributionGroupsRemoveUser200ResponseInner] distribution_groups_remove_user(owner_name, app_name, distribution_group_name, distribution_groups_add_user_request)



Remove the users from the distribution group

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.distribution_groups_add_user_request import DistributionGroupsAddUserRequest
from openapi_client.models.distribution_groups_remove_user200_response_inner import DistributionGroupsRemoveUser200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    distribution_group_name = 'distribution_group_name_example' # str | The name of the distribution group
    distribution_groups_add_user_request = openapi_client.DistributionGroupsAddUserRequest() # DistributionGroupsAddUserRequest | The list of members to add

    try:
        api_response = api_instance.distribution_groups_remove_user(owner_name, app_name, distribution_group_name, distribution_groups_add_user_request)
        print("The response of AccountApi->distribution_groups_remove_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->distribution_groups_remove_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **distribution_group_name** | **str**| The name of the distribution group | 
 **distribution_groups_add_user_request** | [**DistributionGroupsAddUserRequest**](DistributionGroupsAddUserRequest.md)| The list of members to add | 

### Return type

[**List[DistributionGroupsRemoveUser200ResponseInner]**](DistributionGroupsRemoveUser200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **distribution_groups_resend_invite**
> distribution_groups_resend_invite(owner_name, app_name, distribution_group_name, distribution_groups_add_user_request)



Resend distribution group app invite notification to previously invited testers

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.distribution_groups_add_user_request import DistributionGroupsAddUserRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    distribution_group_name = 'distribution_group_name_example' # str | The name of the distribution group
    distribution_groups_add_user_request = openapi_client.DistributionGroupsAddUserRequest() # DistributionGroupsAddUserRequest | The list of members to add

    try:
        api_instance.distribution_groups_resend_invite(owner_name, app_name, distribution_group_name, distribution_groups_add_user_request)
    except Exception as e:
        print("Exception when calling AccountApi->distribution_groups_resend_invite: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **distribution_group_name** | **str**| The name of the distribution group | 
 **distribution_groups_add_user_request** | [**DistributionGroupsAddUserRequest**](DistributionGroupsAddUserRequest.md)| The list of members to add | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **distribution_groups_resend_shared_invite**
> distribution_groups_resend_shared_invite(org_name, distribution_group_name, distribution_groups_add_user_request)



Resend shared distribution group invite notification to previously invited testers

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.distribution_groups_add_user_request import DistributionGroupsAddUserRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    distribution_group_name = 'distribution_group_name_example' # str | The name of the distribution group
    distribution_groups_add_user_request = openapi_client.DistributionGroupsAddUserRequest() # DistributionGroupsAddUserRequest | The list of members to add

    try:
        api_instance.distribution_groups_resend_shared_invite(org_name, distribution_group_name, distribution_groups_add_user_request)
    except Exception as e:
        print("Exception when calling AccountApi->distribution_groups_resend_shared_invite: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **distribution_group_name** | **str**| The name of the distribution group | 
 **distribution_groups_add_user_request** | [**DistributionGroupsAddUserRequest**](DistributionGroupsAddUserRequest.md)| The list of members to add | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **distribution_groups_update**
> DistributionGroupsList200ResponseInner distribution_groups_update(owner_name, app_name, distribution_group_name, distribution_groups_update_request)



Updates the attributes of distribution group

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.distribution_groups_list200_response_inner import DistributionGroupsList200ResponseInner
from openapi_client.models.distribution_groups_update_request import DistributionGroupsUpdateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    distribution_group_name = 'distribution_group_name_example' # str | The name of the distribution group
    distribution_groups_update_request = openapi_client.DistributionGroupsUpdateRequest() # DistributionGroupsUpdateRequest | The attributes to update for the distribution group

    try:
        api_response = api_instance.distribution_groups_update(owner_name, app_name, distribution_group_name, distribution_groups_update_request)
        print("The response of AccountApi->distribution_groups_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->distribution_groups_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **distribution_group_name** | **str**| The name of the distribution group | 
 **distribution_groups_update_request** | [**DistributionGroupsUpdateRequest**](DistributionGroupsUpdateRequest.md)| The attributes to update for the distribution group | 

### Return type

[**DistributionGroupsList200ResponseInner**](DistributionGroupsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **invitations_sent**
> List[InvitationsSent200ResponseInner] invitations_sent()



Returns all invitations sent by the caller

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.invitations_sent200_response_inner import InvitationsSent200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)

    try:
        api_response = api_instance.invitations_sent()
        print("The response of AccountApi->invitations_sent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->invitations_sent: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[InvitationsSent200ResponseInner]**](InvitationsSent200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_invitations**
> org_invitations(org_name, email, body=body)



Removes a user's invitation to an organization

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    email = 'email_example' # str | The email address of the user to send the password reset mail to.
    body = None # object | allow empty body for custom http-client lib (optional)

    try:
        api_instance.org_invitations(org_name, email, body=body)
    except Exception as e:
        print("Exception when calling AccountApi->org_invitations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **email** | **str**| The email address of the user to send the password reset mail to. | 
 **body** | **object**| allow empty body for custom http-client lib | [optional] 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_invitations_accept**
> org_invitations_accept(invitation_token, body=body)



Accepts a pending organization invitation for the specified user

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    invitation_token = 'invitation_token_example' # str | The app invitation token that was sent to the user
    body = None # object | allow empty body for custom http-client lib (optional)

    try:
        api_instance.org_invitations_accept(invitation_token, body=body)
    except Exception as e:
        print("Exception when calling AccountApi->org_invitations_accept: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invitation_token** | **str**| The app invitation token that was sent to the user | 
 **body** | **object**| allow empty body for custom http-client lib | [optional] 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_invitations_create**
> org_invitations_create(org_name, app_invitations_create_request)



Invites a new or existing user to an organization

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.app_invitations_create_request import AppInvitationsCreateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    app_invitations_create_request = openapi_client.AppInvitationsCreateRequest() # AppInvitationsCreateRequest | The email of the user to invite

    try:
        api_instance.org_invitations_create(org_name, app_invitations_create_request)
    except Exception as e:
        print("Exception when calling AccountApi->org_invitations_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **app_invitations_create_request** | [**AppInvitationsCreateRequest**](AppInvitationsCreateRequest.md)| The email of the user to invite | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_invitations_delete**
> org_invitations_delete(org_name, org_invitations_delete_request)



Removes a user's invitation to an organization

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.org_invitations_delete_request import OrgInvitationsDeleteRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    org_invitations_delete_request = openapi_client.OrgInvitationsDeleteRequest() # OrgInvitationsDeleteRequest | The email of the user whose invitation should be removed

    try:
        api_instance.org_invitations_delete(org_name, org_invitations_delete_request)
    except Exception as e:
        print("Exception when calling AccountApi->org_invitations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **org_invitations_delete_request** | [**OrgInvitationsDeleteRequest**](OrgInvitationsDeleteRequest.md)| The email of the user whose invitation should be removed | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_invitations_list_pending**
> List[OrgInvitationsListPending200ResponseInner] org_invitations_list_pending(org_name)



Gets the pending invitations for the organization

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.org_invitations_list_pending200_response_inner import OrgInvitationsListPending200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name

    try:
        api_response = api_instance.org_invitations_list_pending(org_name)
        print("The response of AccountApi->org_invitations_list_pending:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->org_invitations_list_pending: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 

### Return type

[**List[OrgInvitationsListPending200ResponseInner]**](OrgInvitationsListPending200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_invitations_reject**
> org_invitations_reject(invitation_token, body=body)



Rejects a pending organization invitation

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    invitation_token = 'invitation_token_example' # str | The app invitation token that was sent to the user
    body = None # object | allow empty body for custom http-client lib (optional)

    try:
        api_instance.org_invitations_reject(invitation_token, body=body)
    except Exception as e:
        print("Exception when calling AccountApi->org_invitations_reject: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invitation_token** | **str**| The app invitation token that was sent to the user | 
 **body** | **object**| allow empty body for custom http-client lib | [optional] 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_invitations_send_new_invitation**
> org_invitations_send_new_invitation(org_name, email, app_invitations_create_by_email_request=app_invitations_create_by_email_request)



Cancels an existing organization invitation for the user and sends a new one

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.app_invitations_create_by_email_request import AppInvitationsCreateByEmailRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    email = 'email_example' # str | The email address of the user to send the password reset mail to.
    app_invitations_create_by_email_request = openapi_client.AppInvitationsCreateByEmailRequest() # AppInvitationsCreateByEmailRequest | The role of the user to be added (optional)

    try:
        api_instance.org_invitations_send_new_invitation(org_name, email, app_invitations_create_by_email_request=app_invitations_create_by_email_request)
    except Exception as e:
        print("Exception when calling AccountApi->org_invitations_send_new_invitation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **email** | **str**| The email address of the user to send the password reset mail to. | 
 **app_invitations_create_by_email_request** | [**AppInvitationsCreateByEmailRequest**](AppInvitationsCreateByEmailRequest.md)| The role of the user to be added | [optional] 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_invitations_update**
> org_invitations_update(org_name, email, org_invitations_update_request)



Allows the role of an invited user to be changed

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.org_invitations_update_request import OrgInvitationsUpdateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    email = 'email_example' # str | The email address of the user to send the password reset mail to.
    org_invitations_update_request = openapi_client.OrgInvitationsUpdateRequest() # OrgInvitationsUpdateRequest | The new role of the user

    try:
        api_instance.org_invitations_update(org_name, email, org_invitations_update_request)
    except Exception as e:
        print("Exception when calling AccountApi->org_invitations_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **email** | **str**| The email address of the user to send the password reset mail to. | 
 **org_invitations_update_request** | [**OrgInvitationsUpdateRequest**](OrgInvitationsUpdateRequest.md)| The new role of the user | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organization_delete_avatar**
> OrganizationsListAdministered200ResponseOrganizations organization_delete_avatar(org_name)



Deletes the uploaded organization avatar

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.organizations_list_administered200_response_organizations import OrganizationsListAdministered200ResponseOrganizations
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name

    try:
        api_response = api_instance.organization_delete_avatar(org_name)
        print("The response of AccountApi->organization_delete_avatar:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->organization_delete_avatar: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 

### Return type

[**OrganizationsListAdministered200ResponseOrganizations**](OrganizationsListAdministered200ResponseOrganizations.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organization_update_avatar**
> OrganizationsListAdministered200ResponseOrganizations organization_update_avatar(org_name, avatar=avatar)



Sets the organization avatar

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.organizations_list_administered200_response_organizations import OrganizationsListAdministered200ResponseOrganizations
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    avatar = None # bytearray | The image for an Organization avatar to upload. (optional)

    try:
        api_response = api_instance.organization_update_avatar(org_name, avatar=avatar)
        print("The response of AccountApi->organization_update_avatar:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->organization_update_avatar: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **avatar** | **bytearray**| The image for an Organization avatar to upload. | [optional] 

### Return type

[**OrganizationsListAdministered200ResponseOrganizations**](OrganizationsListAdministered200ResponseOrganizations.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organizations_create_or_update**
> OrganizationsListAdministered200ResponseOrganizations organizations_create_or_update(organizations_create_or_update_request)



Creates a new organization and returns it to the caller

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.organizations_create_or_update_request import OrganizationsCreateOrUpdateRequest
from openapi_client.models.organizations_list_administered200_response_organizations import OrganizationsListAdministered200ResponseOrganizations
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    organizations_create_or_update_request = openapi_client.OrganizationsCreateOrUpdateRequest() # OrganizationsCreateOrUpdateRequest | The organization data

    try:
        api_response = api_instance.organizations_create_or_update(organizations_create_or_update_request)
        print("The response of AccountApi->organizations_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->organizations_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizations_create_or_update_request** | [**OrganizationsCreateOrUpdateRequest**](OrganizationsCreateOrUpdateRequest.md)| The organization data | 

### Return type

[**OrganizationsListAdministered200ResponseOrganizations**](OrganizationsListAdministered200ResponseOrganizations.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organizations_delete**
> organizations_delete(org_name)



Deletes a single organization

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name

    try:
        api_instance.organizations_delete(org_name)
    except Exception as e:
        print("Exception when calling AccountApi->organizations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organizations_get**
> OrganizationsListAdministered200ResponseOrganizations organizations_get(org_name)



Returns the details of a single organization

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.organizations_list_administered200_response_organizations import OrganizationsListAdministered200ResponseOrganizations
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name

    try:
        api_response = api_instance.organizations_get(org_name)
        print("The response of AccountApi->organizations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->organizations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 

### Return type

[**OrganizationsListAdministered200ResponseOrganizations**](OrganizationsListAdministered200ResponseOrganizations.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organizations_list**
> List[OrganizationsList200ResponseInner] organizations_list()



Returns a list of organizations the requesting user has access to

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.organizations_list200_response_inner import OrganizationsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)

    try:
        api_response = api_instance.organizations_list()
        print("The response of AccountApi->organizations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->organizations_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[OrganizationsList200ResponseInner]**](OrganizationsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organizations_list_administered**
> OrganizationsListAdministered200Response organizations_list_administered()



Returns a list organizations in which the requesting user is an admin

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.organizations_list_administered200_response import OrganizationsListAdministered200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)

    try:
        api_response = api_instance.organizations_list_administered()
        print("The response of AccountApi->organizations_list_administered:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->organizations_list_administered: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**OrganizationsListAdministered200Response**](OrganizationsListAdministered200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organizations_update**
> OrganizationsListAdministered200ResponseOrganizations organizations_update(org_name, organizations_update_request)



Returns a list of organizations the requesting user has access to

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.organizations_list_administered200_response_organizations import OrganizationsListAdministered200ResponseOrganizations
from openapi_client.models.organizations_update_request import OrganizationsUpdateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    organizations_update_request = openapi_client.OrganizationsUpdateRequest() # OrganizationsUpdateRequest | The data for the org

    try:
        api_response = api_instance.organizations_update(org_name, organizations_update_request)
        print("The response of AccountApi->organizations_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->organizations_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **organizations_update_request** | [**OrganizationsUpdateRequest**](OrganizationsUpdateRequest.md)| The data for the org | 

### Return type

[**OrganizationsListAdministered200ResponseOrganizations**](OrganizationsListAdministered200ResponseOrganizations.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sharedconnection_connections**
> List[SharedconnectionConnections200ResponseInner] sharedconnection_connections()



Gets all service connections of the service type for GDPR export.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.sharedconnection_connections200_response_inner import SharedconnectionConnections200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)

    try:
        api_response = api_instance.sharedconnection_connections()
        print("The response of AccountApi->sharedconnection_connections:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->sharedconnection_connections: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[SharedconnectionConnections200ResponseInner]**](SharedconnectionConnections200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | bad_request: proper details are not provided for connection in body.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_add_app**
> TeamsListApps200ResponseInner teams_add_app(org_name, team_name, distribution_groups_add_apps_request_apps_inner)



Adds an app to a team

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.distribution_groups_add_apps_request_apps_inner import DistributionGroupsAddAppsRequestAppsInner
from openapi_client.models.teams_list_apps200_response_inner import TeamsListApps200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    team_name = 'team_name_example' # str | The team's name
    distribution_groups_add_apps_request_apps_inner = openapi_client.DistributionGroupsAddAppsRequestAppsInner() # DistributionGroupsAddAppsRequestAppsInner | The name of the app to be added to the team. The app has to be owned by the organization.

    try:
        api_response = api_instance.teams_add_app(org_name, team_name, distribution_groups_add_apps_request_apps_inner)
        print("The response of AccountApi->teams_add_app:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->teams_add_app: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **team_name** | **str**| The team&#39;s name | 
 **distribution_groups_add_apps_request_apps_inner** | [**DistributionGroupsAddAppsRequestAppsInner**](DistributionGroupsAddAppsRequestAppsInner.md)| The name of the app to be added to the team. The app has to be owned by the organization. | 

### Return type

[**TeamsListApps200ResponseInner**](TeamsListApps200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_add_user**
> TeamsGetUsers200Response teams_add_user(org_name, team_name, org_invitations_delete_request)



Adds a new user to a team that is owned by an organization

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.org_invitations_delete_request import OrgInvitationsDeleteRequest
from openapi_client.models.teams_get_users200_response import TeamsGetUsers200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    team_name = 'team_name_example' # str | The team's name
    org_invitations_delete_request = openapi_client.OrgInvitationsDeleteRequest() # OrgInvitationsDeleteRequest | The email of the user to add to the team

    try:
        api_response = api_instance.teams_add_user(org_name, team_name, org_invitations_delete_request)
        print("The response of AccountApi->teams_add_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->teams_add_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **team_name** | **str**| The team&#39;s name | 
 **org_invitations_delete_request** | [**OrgInvitationsDeleteRequest**](OrgInvitationsDeleteRequest.md)| The email of the user to add to the team | 

### Return type

[**TeamsGetUsers200Response**](TeamsGetUsers200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_create_team**
> List[TeamsListAll200ResponseInner] teams_create_team(org_name, teams_create_team_request)



Creates a team and returns it

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.teams_create_team_request import TeamsCreateTeamRequest
from openapi_client.models.teams_list_all200_response_inner import TeamsListAll200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    teams_create_team_request = openapi_client.TeamsCreateTeamRequest() # TeamsCreateTeamRequest | The information used to create the team

    try:
        api_response = api_instance.teams_create_team(org_name, teams_create_team_request)
        print("The response of AccountApi->teams_create_team:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->teams_create_team: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **teams_create_team_request** | [**TeamsCreateTeamRequest**](TeamsCreateTeamRequest.md)| The information used to create the team | 

### Return type

[**List[TeamsListAll200ResponseInner]**](TeamsListAll200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_delete**
> teams_delete(org_name, team_name)



Deletes a single team

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    team_name = 'team_name_example' # str | The team's name

    try:
        api_instance.teams_delete(org_name, team_name)
    except Exception as e:
        print("Exception when calling AccountApi->teams_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **team_name** | **str**| The team&#39;s name | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_get_team**
> TeamsListAll200ResponseInner teams_get_team(org_name, team_name)



Returns the details of a single team

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.teams_list_all200_response_inner import TeamsListAll200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    team_name = 'team_name_example' # str | The team's name

    try:
        api_response = api_instance.teams_get_team(org_name, team_name)
        print("The response of AccountApi->teams_get_team:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->teams_get_team: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **team_name** | **str**| The team&#39;s name | 

### Return type

[**TeamsListAll200ResponseInner**](TeamsListAll200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_get_users**
> TeamsGetUsers200Response teams_get_users(org_name, team_name)



Returns the users of a team which is owned by an organization

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.teams_get_users200_response import TeamsGetUsers200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    team_name = 'team_name_example' # str | The team's name

    try:
        api_response = api_instance.teams_get_users(org_name, team_name)
        print("The response of AccountApi->teams_get_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->teams_get_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **team_name** | **str**| The team&#39;s name | 

### Return type

[**TeamsGetUsers200Response**](TeamsGetUsers200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_list_all**
> List[TeamsListAll200ResponseInner] teams_list_all(org_name)



Returns the list of all teams in this org

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.teams_list_all200_response_inner import TeamsListAll200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name

    try:
        api_response = api_instance.teams_list_all(org_name)
        print("The response of AccountApi->teams_list_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->teams_list_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 

### Return type

[**List[TeamsListAll200ResponseInner]**](TeamsListAll200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_list_apps**
> List[TeamsListApps200ResponseInner] teams_list_apps(org_name, team_name)



Returns the apps a team has access to

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.teams_list_apps200_response_inner import TeamsListApps200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    team_name = 'team_name_example' # str | The team's name

    try:
        api_response = api_instance.teams_list_apps(org_name, team_name)
        print("The response of AccountApi->teams_list_apps:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->teams_list_apps: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **team_name** | **str**| The team&#39;s name | 

### Return type

[**List[TeamsListApps200ResponseInner]**](TeamsListApps200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_remove_app**
> teams_remove_app(org_name, team_name, app_name)



Removes an app from a team

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    team_name = 'team_name_example' # str | The team's name
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_instance.teams_remove_app(org_name, team_name, app_name)
    except Exception as e:
        print("Exception when calling AccountApi->teams_remove_app: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **team_name** | **str**| The team&#39;s name | 
 **app_name** | **str**| The name of the application | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_remove_user**
> teams_remove_user(org_name, team_name, user_name)



Removes a user from a team that is owned by an organization

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    team_name = 'team_name_example' # str | The team's name
    user_name = 'user_name_example' # str | The slug name of the user

    try:
        api_instance.teams_remove_user(org_name, team_name, user_name)
    except Exception as e:
        print("Exception when calling AccountApi->teams_remove_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **team_name** | **str**| The team&#39;s name | 
 **user_name** | **str**| The slug name of the user | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_update**
> TeamsListAll200ResponseInner teams_update(org_name, team_name, teams_update_request)



Updates a single team

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.teams_list_all200_response_inner import TeamsListAll200ResponseInner
from openapi_client.models.teams_update_request import TeamsUpdateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    team_name = 'team_name_example' # str | The team's name
    teams_update_request = openapi_client.TeamsUpdateRequest() # TeamsUpdateRequest | The information used to update the team

    try:
        api_response = api_instance.teams_update(org_name, team_name, teams_update_request)
        print("The response of AccountApi->teams_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->teams_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **team_name** | **str**| The team&#39;s name | 
 **teams_update_request** | [**TeamsUpdateRequest**](TeamsUpdateRequest.md)| The information used to update the team | 

### Return type

[**TeamsListAll200ResponseInner**](TeamsListAll200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_update_permissions**
> TeamsListApps200ResponseInner teams_update_permissions(org_name, team_name, app_name, teams_update_permissions_request)



Updates the permissions the team has to the app

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.teams_list_apps200_response_inner import TeamsListApps200ResponseInner
from openapi_client.models.teams_update_permissions_request import TeamsUpdatePermissionsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    team_name = 'team_name_example' # str | The team's name
    app_name = 'app_name_example' # str | The name of the application
    teams_update_permissions_request = openapi_client.TeamsUpdatePermissionsRequest() # TeamsUpdatePermissionsRequest | 

    try:
        api_response = api_instance.teams_update_permissions(org_name, team_name, app_name, teams_update_permissions_request)
        print("The response of AccountApi->teams_update_permissions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->teams_update_permissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **team_name** | **str**| The team&#39;s name | 
 **app_name** | **str**| The name of the application | 
 **teams_update_permissions_request** | [**TeamsUpdatePermissionsRequest**](TeamsUpdatePermissionsRequest.md)|  | 

### Return type

[**TeamsListApps200ResponseInner**](TeamsListApps200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_api_tokens_delete**
> user_api_tokens_delete(api_token_id)



Delete the user api_token object with the specific id

### Example

* Basic Authentication (Basic):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: Basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    api_token_id = 'api_token_id_example' # str | The unique ID (UUID) of the api token

    try:
        api_instance.user_api_tokens_delete(api_token_id)
    except Exception as e:
        print("Exception when calling AccountApi->user_api_tokens_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_token_id** | **str**| The unique ID (UUID) of the api token | 

### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**400** | Error |  -  |
**401** | Unauthorized |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_api_tokens_list**
> List[UserApiTokensList200ResponseInner] user_api_tokens_list()



Returns api tokens for the authenticated user

### Example

* Basic Authentication (Basic):

```python
import openapi_client
from openapi_client.models.user_api_tokens_list200_response_inner import UserApiTokensList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: Basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)

    try:
        api_response = api_instance.user_api_tokens_list()
        print("The response of AccountApi->user_api_tokens_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->user_api_tokens_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[UserApiTokensList200ResponseInner]**](UserApiTokensList200ResponseInner.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Error |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_api_tokens_new**
> UserApiTokensNew201Response user_api_tokens_new(user_api_tokens_new_request=user_api_tokens_new_request)



Creates a new User API token

### Example

* Basic Authentication (Basic):

```python
import openapi_client
from openapi_client.models.user_api_tokens_new201_response import UserApiTokensNew201Response
from openapi_client.models.user_api_tokens_new_request import UserApiTokensNewRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: Basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    user_api_tokens_new_request = openapi_client.UserApiTokensNewRequest() # UserApiTokensNewRequest | Description of the token (optional)

    try:
        api_response = api_instance.user_api_tokens_new(user_api_tokens_new_request=user_api_tokens_new_request)
        print("The response of AccountApi->user_api_tokens_new:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->user_api_tokens_new: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_api_tokens_new_request** | [**UserApiTokensNewRequest**](UserApiTokensNewRequest.md)| Description of the token | [optional] 

### Return type

[**UserApiTokensNew201Response**](UserApiTokensNew201Response.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**400** | Error |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_get**
> AppInvitationsList200ResponseInvitedBy users_get()



Returns the user profile data

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.app_invitations_list200_response_invited_by import AppInvitationsList200ResponseInvitedBy
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)

    try:
        api_response = api_instance.users_get()
        print("The response of AccountApi->users_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->users_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**AppInvitationsList200ResponseInvitedBy**](AppInvitationsList200ResponseInvitedBy.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_get_for_org**
> UsersListForOrg200ResponseInner users_get_for_org(org_name, user_name)



Get a user information from an organization by name - if there is explicit permission return it, if not if not return highest implicit permission

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.users_list_for_org200_response_inner import UsersListForOrg200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    user_name = 'user_name_example' # str | The slug name of the user

    try:
        api_response = api_instance.users_get_for_org(org_name, user_name)
        print("The response of AccountApi->users_get_for_org:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->users_get_for_org: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **user_name** | **str**| The slug name of the user | 

### Return type

[**UsersListForOrg200ResponseInner**](UsersListForOrg200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_get_user_metadata**
> UsersGetUserMetadata200Response users_get_user_metadata()



### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.users_get_user_metadata200_response import UsersGetUserMetadata200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)

    try:
        api_response = api_instance.users_get_user_metadata()
        print("The response of AccountApi->users_get_user_metadata:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->users_get_user_metadata: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**UsersGetUserMetadata200Response**](UsersGetUserMetadata200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_list**
> List[AppInvitationsList200ResponseInvitedBy] users_list(owner_name, app_name)



Returns the users associated with the app specified with the given app name which belongs to the given owner.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.app_invitations_list200_response_invited_by import AppInvitationsList200ResponseInvitedBy
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.users_list(owner_name, app_name)
        print("The response of AccountApi->users_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->users_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[AppInvitationsList200ResponseInvitedBy]**](AppInvitationsList200ResponseInvitedBy.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_list_for_org**
> List[UsersListForOrg200ResponseInner] users_list_for_org(org_name)



Returns a list of users that belong to an organization

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.users_list_for_org200_response_inner import UsersListForOrg200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name

    try:
        api_response = api_instance.users_list_for_org(org_name)
        print("The response of AccountApi->users_list_for_org:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->users_list_for_org: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 

### Return type

[**List[UsersListForOrg200ResponseInner]**](UsersListForOrg200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_remove_from_org**
> users_remove_from_org(org_name, user_name)



Removes a user from an organization.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    user_name = 'user_name_example' # str | The slug name of the user

    try:
        api_instance.users_remove_from_org(org_name, user_name)
    except Exception as e:
        print("Exception when calling AccountApi->users_remove_from_org: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **user_name** | **str**| The slug name of the user | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_update**
> AppInvitationsList200ResponseInvitedBy users_update(users_update_request)



Updates the user profile and returns the updated user data

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.app_invitations_list200_response_invited_by import AppInvitationsList200ResponseInvitedBy
from openapi_client.models.users_update_request import UsersUpdateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    users_update_request = openapi_client.UsersUpdateRequest() # UsersUpdateRequest | The data for the created user

    try:
        api_response = api_instance.users_update(users_update_request)
        print("The response of AccountApi->users_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->users_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **users_update_request** | [**UsersUpdateRequest**](UsersUpdateRequest.md)| The data for the created user | 

### Return type

[**AppInvitationsList200ResponseInvitedBy**](AppInvitationsList200ResponseInvitedBy.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_update_org_role**
> UsersListForOrg200ResponseInner users_update_org_role(org_name, user_name, org_invitations_update_request)



Updates the given organization user

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.org_invitations_update_request import OrgInvitationsUpdateRequest
from openapi_client.models.users_list_for_org200_response_inner import UsersListForOrg200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    org_name = 'org_name_example' # str | The organization's name
    user_name = 'user_name_example' # str | The slug name of the user
    org_invitations_update_request = openapi_client.OrgInvitationsUpdateRequest() # OrgInvitationsUpdateRequest | 

    try:
        api_response = api_instance.users_update_org_role(org_name, user_name, org_invitations_update_request)
        print("The response of AccountApi->users_update_org_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->users_update_org_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_name** | **str**| The organization&#39;s name | 
 **user_name** | **str**| The slug name of the user | 
 **org_invitations_update_request** | [**OrgInvitationsUpdateRequest**](OrgInvitationsUpdateRequest.md)|  | 

### Return type

[**UsersListForOrg200ResponseInner**](UsersListForOrg200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

