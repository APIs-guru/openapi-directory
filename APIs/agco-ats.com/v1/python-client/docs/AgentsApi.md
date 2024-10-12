# openapi_client.AgentsApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**agents_delete_agent**](AgentsApi.md#agents_delete_agent) | **DELETE** /api/v2/agents/{agentID} | Delete an Agent
[**agents_get_agent_activity_run**](AgentsApi.md#agents_get_agent_activity_run) | **GET** /api/v2/agents/{agentID}/ActivityRun | Get an Agent&#39;s ActivityRun
[**agents_get_agent_async**](AgentsApi.md#agents_get_agent_async) | **GET** /api/v2/agents/{agentID} | Get Agent
[**agents_get_agents**](AgentsApi.md#agents_get_agents) | **GET** /api/v2/agents | Get Agents
[**agents_get_current_agent_activity_run**](AgentsApi.md#agents_get_current_agent_activity_run) | **GET** /api/v2/agents/Current/ActivityRun | Get the ActivityRun of Agent associated with the current user
[**agents_get_current_agent_async**](AgentsApi.md#agents_get_current_agent_async) | **GET** /api/v2/agents/Current | Get Agent associated with the current user
[**agents_post_agent**](AgentsApi.md#agents_post_agent) | **POST** /api/v2/agents | Create an Agent
[**agents_put_agent**](AgentsApi.md#agents_put_agent) | **PUT** /api/v2/agents/{agentID} | Update an Agent
[**agents_put_agent_activity_run**](AgentsApi.md#agents_put_agent_activity_run) | **PUT** /api/v2/agents/{agentID}/ActivityRun | Update the ActivityRun assigned to the Agent.
[**agents_put_agent_status**](AgentsApi.md#agents_put_agent_status) | **PUT** /api/v2/agents/{agentID}/Status | Update an Agent


# **agents_delete_agent**
> agents_delete_agent(agent_id)

Delete an Agent

Deletes an Agent. When successful, the response is empty.  If unsuccessful, an appropriate              ApiError is returned.

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
    api_instance = openapi_client.AgentsApi(api_client)
    agent_id = 56 # int | The id of the Agent to delete.

    try:
        # Delete an Agent
        api_instance.agents_delete_agent(agent_id)
    except Exception as e:
        print("Exception when calling AgentsApi->agents_delete_agent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agent_id** | **int**| The id of the Agent to delete. | 

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

# **agents_get_agent_activity_run**
> BuildSystemSharedDTOActivityRun agents_get_agent_activity_run(agent_id)

Get an Agent's ActivityRun

Gets the activity run assigned to an agent.  When successful, the response is the ActivityRun              assigned to the Agent.  If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.build_system_shared_dto_activity_run import BuildSystemSharedDTOActivityRun
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
    api_instance = openapi_client.AgentsApi(api_client)
    agent_id = 56 # int | The id of the Agent to get.

    try:
        # Get an Agent's ActivityRun
        api_response = api_instance.agents_get_agent_activity_run(agent_id)
        print("The response of AgentsApi->agents_get_agent_activity_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsApi->agents_get_agent_activity_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agent_id** | **int**| The id of the Agent to get. | 

### Return type

[**BuildSystemSharedDTOActivityRun**](BuildSystemSharedDTOActivityRun.md)

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

# **agents_get_agent_async**
> BuildSystemSharedDTOAgent agents_get_agent_async(agent_id)

Get Agent

Gets an Agent by ID. When successful, the response is the requested Agent.  If unsuccessful,              an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.build_system_shared_dto_agent import BuildSystemSharedDTOAgent
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
    api_instance = openapi_client.AgentsApi(api_client)
    agent_id = 56 # int | The id of the Agent to get.

    try:
        # Get Agent
        api_response = api_instance.agents_get_agent_async(agent_id)
        print("The response of AgentsApi->agents_get_agent_async:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsApi->agents_get_agent_async: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agent_id** | **int**| The id of the Agent to get. | 

### Return type

[**BuildSystemSharedDTOAgent**](BuildSystemSharedDTOAgent.md)

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

# **agents_get_agents**
> APIPagedResponseBuildSystemSharedDTOAgent agents_get_agents(limit=limit, offset=offset)

Get Agents

Gets a collection of Agents. When successful, the response is a PagedResponse of Agents.                If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_build_system_shared_dto_agent import APIPagedResponseBuildSystemSharedDTOAgent
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
    api_instance = openapi_client.AgentsApi(api_client)
    limit = 56 # int | Optional. The page limit.  If not specified, the default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset.  If not specified, the default page offset is 0. (optional)

    try:
        # Get Agents
        api_response = api_instance.agents_get_agents(limit=limit, offset=offset)
        print("The response of AgentsApi->agents_get_agents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsApi->agents_get_agents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. The page limit.  If not specified, the default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset.  If not specified, the default page offset is 0. | [optional] 

### Return type

[**APIPagedResponseBuildSystemSharedDTOAgent**](APIPagedResponseBuildSystemSharedDTOAgent.md)

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

# **agents_get_current_agent_activity_run**
> BuildSystemSharedDTOActivityRun agents_get_current_agent_activity_run()

Get the ActivityRun of Agent associated with the current user

Gets the activity run assigned to an agent.  When successful, the response is the ActivityRun              assigned to the Agent.  If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.build_system_shared_dto_activity_run import BuildSystemSharedDTOActivityRun
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
    api_instance = openapi_client.AgentsApi(api_client)

    try:
        # Get the ActivityRun of Agent associated with the current user
        api_response = api_instance.agents_get_current_agent_activity_run()
        print("The response of AgentsApi->agents_get_current_agent_activity_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsApi->agents_get_current_agent_activity_run: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**BuildSystemSharedDTOActivityRun**](BuildSystemSharedDTOActivityRun.md)

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

# **agents_get_current_agent_async**
> BuildSystemSharedDTOAgent agents_get_current_agent_async()

Get Agent associated with the current user

Gets the Agent associated with the current user. When successful, the response is the requested Agent.  If unsuccessful,              an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.build_system_shared_dto_agent import BuildSystemSharedDTOAgent
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
    api_instance = openapi_client.AgentsApi(api_client)

    try:
        # Get Agent associated with the current user
        api_response = api_instance.agents_get_current_agent_async()
        print("The response of AgentsApi->agents_get_current_agent_async:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsApi->agents_get_current_agent_async: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**BuildSystemSharedDTOAgent**](BuildSystemSharedDTOAgent.md)

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

# **agents_post_agent**
> int agents_post_agent(build_system_shared_dto_agent)

Create an Agent

Creates an Agent.  The body of the POST is the Agent to create.  The AgentID will be assigned              on creation of the Agent.  When successful, the response is the AgentID.  If unsuccessful, an              appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.build_system_shared_dto_agent import BuildSystemSharedDTOAgent
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
    api_instance = openapi_client.AgentsApi(api_client)
    build_system_shared_dto_agent = openapi_client.BuildSystemSharedDTOAgent() # BuildSystemSharedDTOAgent | The Agent to create.  The AgentID will be assigned on creation of the Agent.

    try:
        # Create an Agent
        api_response = api_instance.agents_post_agent(build_system_shared_dto_agent)
        print("The response of AgentsApi->agents_post_agent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsApi->agents_post_agent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **build_system_shared_dto_agent** | [**BuildSystemSharedDTOAgent**](BuildSystemSharedDTOAgent.md)| The Agent to create.  The AgentID will be assigned on creation of the Agent. | 

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

# **agents_put_agent**
> agents_put_agent(agent_id, build_system_shared_dto_agent)

Update an Agent

Updates an Agent.  The body of the PUT is the updated Agent.  When successful, the response is empty.              If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.build_system_shared_dto_agent import BuildSystemSharedDTOAgent
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
    api_instance = openapi_client.AgentsApi(api_client)
    agent_id = 56 # int | The id of the Agent to update.
    build_system_shared_dto_agent = openapi_client.BuildSystemSharedDTOAgent() # BuildSystemSharedDTOAgent | The updated Agent

    try:
        # Update an Agent
        api_instance.agents_put_agent(agent_id, build_system_shared_dto_agent)
    except Exception as e:
        print("Exception when calling AgentsApi->agents_put_agent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agent_id** | **int**| The id of the Agent to update. | 
 **build_system_shared_dto_agent** | [**BuildSystemSharedDTOAgent**](BuildSystemSharedDTOAgent.md)| The updated Agent | 

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

# **agents_put_agent_activity_run**
> agents_put_agent_activity_run(agent_id, build_system_shared_dto_activity_run)

Update the ActivityRun assigned to the Agent.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.build_system_shared_dto_activity_run import BuildSystemSharedDTOActivityRun
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
    api_instance = openapi_client.AgentsApi(api_client)
    agent_id = 56 # int | The id of the Agent to update.
    build_system_shared_dto_activity_run = openapi_client.BuildSystemSharedDTOActivityRun() # BuildSystemSharedDTOActivityRun | The ActivityRun assigned to the agent.  Only the ActivityRunID is used.

    try:
        # Update the ActivityRun assigned to the Agent.
        api_instance.agents_put_agent_activity_run(agent_id, build_system_shared_dto_activity_run)
    except Exception as e:
        print("Exception when calling AgentsApi->agents_put_agent_activity_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agent_id** | **int**| The id of the Agent to update. | 
 **build_system_shared_dto_activity_run** | [**BuildSystemSharedDTOActivityRun**](BuildSystemSharedDTOActivityRun.md)| The ActivityRun assigned to the agent.  Only the ActivityRunID is used. | 

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

# **agents_put_agent_status**
> agents_put_agent_status(agent_id, build_system_shared_dto_agent_status)

Update an Agent

Updates the status of an Agent.The body of the PUT is the updated Agent status.  When successful,              the response is empty.If unsuccessful, an appropriate ApiError is returned.

### Example


```python
import openapi_client
from openapi_client.models.build_system_shared_dto_agent_status import BuildSystemSharedDTOAgentStatus
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
    api_instance = openapi_client.AgentsApi(api_client)
    agent_id = 56 # int | The id of the Agent to update.
    build_system_shared_dto_agent_status = openapi_client.BuildSystemSharedDTOAgentStatus() # BuildSystemSharedDTOAgentStatus | The updated AgentStatus.

    try:
        # Update an Agent
        api_instance.agents_put_agent_status(agent_id, build_system_shared_dto_agent_status)
    except Exception as e:
        print("Exception when calling AgentsApi->agents_put_agent_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agent_id** | **int**| The id of the Agent to update. | 
 **build_system_shared_dto_agent_status** | [**BuildSystemSharedDTOAgentStatus**](BuildSystemSharedDTOAgentStatus.md)| The updated AgentStatus. | 

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

