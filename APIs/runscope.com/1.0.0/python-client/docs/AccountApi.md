# openapi_client.AccountApi

All URIs are relative to *https://api.runscope.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**account_get**](AccountApi.md#account_get) | **GET** /account | Account Resource
[**teams_team_id_agents_get**](AccountApi.md#teams_team_id_agents_get) | **GET** /teams/{teamId}/agents | Team agents list
[**teams_team_id_integrations_get**](AccountApi.md#teams_team_id_integrations_get) | **GET** /teams/{teamId}/integrations | Team integrations list
[**teams_team_id_people_get**](AccountApi.md#teams_team_id_people_get) | **GET** /teams/{teamId}/people | Teams Resource


# **account_get**
> AccountGet200Response account_get()

Account Resource

Information about the authorized account.

### Example

* OAuth Authentication (runscope_auth):

```python
import openapi_client
from openapi_client.models.account_get200_response import AccountGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.runscope.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.runscope.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)

    try:
        # Account Resource
        api_response = api_instance.account_get()
        print("The response of AccountApi->account_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**AccountGet200Response**](AccountGet200Response.md)

### Authorization

[runscope_auth](../README.md#runscope_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Account owner and team information. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_team_id_agents_get**
> List[Agent] teams_team_id_agents_get(team_id)

Team agents list

List currently connected agents associated with a given team.

### Example

* OAuth Authentication (runscope_auth):

```python
import openapi_client
from openapi_client.models.agent import Agent
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.runscope.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.runscope.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    team_id = 'team_id_example' # str | Unique identifier for team

    try:
        # Team agents list
        api_response = api_instance.teams_team_id_agents_get(team_id)
        print("The response of AccountApi->teams_team_id_agents_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->teams_team_id_agents_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| Unique identifier for team | 

### Return type

[**List[Agent]**](Agent.md)

### Authorization

[runscope_auth](../README.md#runscope_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of the team’s currently connected agents. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_team_id_integrations_get**
> TeamsTeamIdIntegrationsGet200Response teams_team_id_integrations_get(team_id)

Team integrations list

Returns a list of integrations configured for the team.

### Example

* OAuth Authentication (runscope_auth):

```python
import openapi_client
from openapi_client.models.teams_team_id_integrations_get200_response import TeamsTeamIdIntegrationsGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.runscope.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.runscope.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    team_id = 'team_id_example' # str | Unique identifier for team

    try:
        # Team integrations list
        api_response = api_instance.teams_team_id_integrations_get(team_id)
        print("The response of AccountApi->teams_team_id_integrations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->teams_team_id_integrations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| Unique identifier for team | 

### Return type

[**TeamsTeamIdIntegrationsGet200Response**](TeamsTeamIdIntegrationsGet200Response.md)

### Authorization

[runscope_auth](../README.md#runscope_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of integrations associated with the team. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **teams_team_id_people_get**
> List[Account] teams_team_id_people_get(team_id)

Teams Resource

List people and integrations associated with a given team.

### Example

* OAuth Authentication (runscope_auth):

```python
import openapi_client
from openapi_client.models.account import Account
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.runscope.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.runscope.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    team_id = 'team_id_example' # str | Unique identifier for team

    try:
        # Teams Resource
        api_response = api_instance.teams_team_id_people_get(team_id)
        print("The response of AccountApi->teams_team_id_people_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->teams_team_id_people_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| Unique identifier for team | 

### Return type

[**List[Account]**](Account.md)

### Authorization

[runscope_auth](../README.md#runscope_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of people associated with the team. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

