# openapi_client.TeamsApi

All URIs are relative to *https://api.victorops.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_public_v1_team_get**](TeamsApi.md#api_public_v1_team_get) | **GET** /api-public/v1/team | List teams
[**api_public_v1_team_post**](TeamsApi.md#api_public_v1_team_post) | **POST** /api-public/v1/team | Add a team
[**api_public_v1_team_team_admins_get**](TeamsApi.md#api_public_v1_team_team_admins_get) | **GET** /api-public/v1/team/{team}/admins | Retrieve a list of team admins for a team
[**api_public_v1_team_team_delete**](TeamsApi.md#api_public_v1_team_team_delete) | **DELETE** /api-public/v1/team/{team} | Remove a team
[**api_public_v1_team_team_get**](TeamsApi.md#api_public_v1_team_team_get) | **GET** /api-public/v1/team/{team} | Retrieve information for a team
[**api_public_v1_team_team_members_get**](TeamsApi.md#api_public_v1_team_team_members_get) | **GET** /api-public/v1/team/{team}/members | Retrieve a list of members for a team
[**api_public_v1_team_team_members_post**](TeamsApi.md#api_public_v1_team_team_members_post) | **POST** /api-public/v1/team/{team}/members | Add a team member
[**api_public_v1_team_team_members_user_delete**](TeamsApi.md#api_public_v1_team_team_members_user_delete) | **DELETE** /api-public/v1/team/{team}/members/{user} | Remove a team member
[**api_public_v1_team_team_policies_get_0**](TeamsApi.md#api_public_v1_team_team_policies_get_0) | **GET** /api-public/v1/team/{team}/policies | Retrieve a list of escalation policies for a team
[**api_public_v1_team_team_put**](TeamsApi.md#api_public_v1_team_team_put) | **PUT** /api-public/v1/team/{team} | Update a team


# **api_public_v1_team_get**
> List[TeamDetail] api_public_v1_team_get(x_vo_api_id, x_vo_api_key)

List teams

Get a list of teams for your organization.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.team_detail import TeamDetail
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key

    try:
        # List teams
        api_response = api_instance.api_public_v1_team_get(x_vo_api_id, x_vo_api_key)
        print("The response of TeamsApi->api_public_v1_team_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsApi->api_public_v1_team_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 

### Return type

[**List[TeamDetail]**](TeamDetail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of teams for your organization |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Team not found |  -  |
**422** | You have reached your team limit.  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_team_post**
> TeamDetail api_public_v1_team_post(x_vo_api_id, x_vo_api_key, body)

Add a team

Add a team to your organization.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.add_team_payload import AddTeamPayload
from openapi_client.models.team_detail import TeamDetail
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    body = openapi_client.AddTeamPayload() # AddTeamPayload | The team information

    try:
        # Add a team
        api_response = api_instance.api_public_v1_team_post(x_vo_api_id, x_vo_api_key, body)
        print("The response of TeamsApi->api_public_v1_team_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsApi->api_public_v1_team_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **body** | [**AddTeamPayload**](AddTeamPayload.md)| The team information | 

### Return type

[**TeamDetail**](TeamDetail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Some details about the team that was added |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Team not found |  -  |
**422** | Team name or email is unavailable, or you have reached your team limit.  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_team_team_admins_get**
> TeamAdminsResponse api_public_v1_team_team_admins_get(x_vo_api_id, x_vo_api_key, team)

Retrieve a list of team admins for a team

Get the team admins for the specified team.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.team_admins_response import TeamAdminsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    team = 'team_example' # str | The VictorOps team

    try:
        # Retrieve a list of team admins for a team
        api_response = api_instance.api_public_v1_team_team_admins_get(x_vo_api_id, x_vo_api_key, team)
        print("The response of TeamsApi->api_public_v1_team_team_admins_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsApi->api_public_v1_team_team_admins_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **team** | **str**| The VictorOps team | 

### Return type

[**TeamAdminsResponse**](TeamAdminsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Some details about the team that was added |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Team not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_team_team_delete**
> api_public_v1_team_team_delete(x_vo_api_id, x_vo_api_key, team)

Remove a team

Remove a team from your organization.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    team = 'team_example' # str | The VictorOps team to be deleted

    try:
        # Remove a team
        api_instance.api_public_v1_team_team_delete(x_vo_api_id, x_vo_api_key, team)
    except Exception as e:
        print("Exception when calling TeamsApi->api_public_v1_team_team_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **team** | **str**| The VictorOps team to be deleted | 

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
**200** | Team was deleted |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Team not found |  -  |
**422** | There was a problem with the delete such as the replacement team was not found.  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_team_team_get**
> TeamDetail api_public_v1_team_team_get(x_vo_api_id, x_vo_api_key, team)

Retrieve information for a team

Get the information for the specified team.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.team_detail import TeamDetail
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    team = 'team_example' # str | The VictorOps team to fetch

    try:
        # Retrieve information for a team
        api_response = api_instance.api_public_v1_team_team_get(x_vo_api_id, x_vo_api_key, team)
        print("The response of TeamsApi->api_public_v1_team_team_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsApi->api_public_v1_team_team_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **team** | **str**| The VictorOps team to fetch | 

### Return type

[**TeamDetail**](TeamDetail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Some details about the team that was added |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Team not found |  -  |
**422** | Team name or email is unavailable, or you have reached your team limit.  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_team_team_members_get**
> ListTeamMembersResponse api_public_v1_team_team_members_get(x_vo_api_id, x_vo_api_key, team)

Retrieve a list of members for a team

Get the members for the specified team.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.list_team_members_response import ListTeamMembersResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    team = 'team_example' # str | The VictorOps team to fetch

    try:
        # Retrieve a list of members for a team
        api_response = api_instance.api_public_v1_team_team_members_get(x_vo_api_id, x_vo_api_key, team)
        print("The response of TeamsApi->api_public_v1_team_team_members_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsApi->api_public_v1_team_team_members_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **team** | **str**| The VictorOps team to fetch | 

### Return type

[**ListTeamMembersResponse**](ListTeamMembersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Some details about the team that was added |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Team not found |  -  |
**422** | Team name or email is unavailable, or you have reached your team limit.  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_team_team_members_post**
> ListTeamMembersResponse api_public_v1_team_team_members_post(x_vo_api_id, x_vo_api_key, team, body)

Add a team member

Add a team member to your team.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.add_team_member_payload import AddTeamMemberPayload
from openapi_client.models.list_team_members_response import ListTeamMembersResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    team = 'team_example' # str | The VictorOps team to fetch
    body = openapi_client.AddTeamMemberPayload() # AddTeamMemberPayload | 

    try:
        # Add a team member
        api_response = api_instance.api_public_v1_team_team_members_post(x_vo_api_id, x_vo_api_key, team, body)
        print("The response of TeamsApi->api_public_v1_team_team_members_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsApi->api_public_v1_team_team_members_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **team** | **str**| The VictorOps team to fetch | 
 **body** | [**AddTeamMemberPayload**](AddTeamMemberPayload.md)|  | 

### Return type

[**ListTeamMembersResponse**](ListTeamMembersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Some details about the team that was added |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Team not found |  -  |
**422** | Team name or email is unavailable, or you have reached your team limit.  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_team_team_members_user_delete**
> api_public_v1_team_team_members_user_delete(x_vo_api_id, x_vo_api_key, team, user, body)

Remove a team member

Remove a team from your organization.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.remove_team_member_payload import RemoveTeamMemberPayload
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    team = 'team_example' # str | The VictorOps team to be deleted
    user = 'user_example' # str | The team member username
    body = openapi_client.RemoveTeamMemberPayload() # RemoveTeamMemberPayload | The user information

    try:
        # Remove a team member
        api_instance.api_public_v1_team_team_members_user_delete(x_vo_api_id, x_vo_api_key, team, user, body)
    except Exception as e:
        print("Exception when calling TeamsApi->api_public_v1_team_team_members_user_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **team** | **str**| The VictorOps team to be deleted | 
 **user** | **str**| The team member username | 
 **body** | [**RemoveTeamMemberPayload**](RemoveTeamMemberPayload.md)| The user information | 

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
**200** | Team was deleted |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Team not found |  -  |
**422** | There was a problem with the delete such as the replacement team member was not found.  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_team_team_policies_get_0**
> EscalationPolicyList api_public_v1_team_team_policies_get_0(x_vo_api_id, x_vo_api_key, team)

Retrieve a list of escalation policies for a team

Get the escalation policies for the specified team.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.escalation_policy_list import EscalationPolicyList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    team = 'team_example' # str | The VictorOps team to fetch

    try:
        # Retrieve a list of escalation policies for a team
        api_response = api_instance.api_public_v1_team_team_policies_get_0(x_vo_api_id, x_vo_api_key, team)
        print("The response of TeamsApi->api_public_v1_team_team_policies_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsApi->api_public_v1_team_team_policies_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **team** | **str**| The VictorOps team to fetch | 

### Return type

[**EscalationPolicyList**](EscalationPolicyList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The escalation policy list. This does not include details about the actual notification steps of the policy. |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Team not found |  -  |
**422** | Team name or email is unavailable, or you have reached your team limit.  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_team_team_put**
> TeamDetail api_public_v1_team_team_put(x_vo_api_id, x_vo_api_key, team, body)

Update a team

Update the designated team  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.add_team_payload import AddTeamPayload
from openapi_client.models.team_detail import TeamDetail
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    team = 'team_example' # str | The VictorOps team to be updated
    body = openapi_client.AddTeamPayload() # AddTeamPayload | The team information

    try:
        # Update a team
        api_response = api_instance.api_public_v1_team_team_put(x_vo_api_id, x_vo_api_key, team, body)
        print("The response of TeamsApi->api_public_v1_team_team_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamsApi->api_public_v1_team_team_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **team** | **str**| The VictorOps team to be updated | 
 **body** | [**AddTeamPayload**](AddTeamPayload.md)| The team information | 

### Return type

[**TeamDetail**](TeamDetail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Some details about the team that was added |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Team not found |  -  |
**422** | Team name or email is unavailable, or you have reached your team limit.  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

