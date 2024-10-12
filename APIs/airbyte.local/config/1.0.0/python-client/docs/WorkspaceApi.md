# openapi_client.WorkspaceApi

All URIs are relative to *http://airbyte.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_workspace**](WorkspaceApi.md#create_workspace) | **POST** /v1/workspaces/create | Creates a workspace
[**delete_workspace**](WorkspaceApi.md#delete_workspace) | **POST** /v1/workspaces/delete | Deletes a workspace
[**get_workspace**](WorkspaceApi.md#get_workspace) | **POST** /v1/workspaces/get | Find workspace by ID
[**get_workspace_by_connection_id**](WorkspaceApi.md#get_workspace_by_connection_id) | **POST** /v1/workspaces/get_by_connection_id | Find workspace by connection id
[**get_workspace_by_slug**](WorkspaceApi.md#get_workspace_by_slug) | **POST** /v1/workspaces/get_by_slug | Find workspace by slug
[**list_workspaces**](WorkspaceApi.md#list_workspaces) | **POST** /v1/workspaces/list | List all workspaces registered in the current Airbyte deployment
[**update_workspace**](WorkspaceApi.md#update_workspace) | **POST** /v1/workspaces/update | Update workspace state
[**update_workspace_feedback**](WorkspaceApi.md#update_workspace_feedback) | **POST** /v1/workspaces/tag_feedback_status_as_done | Update workspace feedback state
[**update_workspace_name**](WorkspaceApi.md#update_workspace_name) | **POST** /v1/workspaces/update_name | Update workspace name


# **create_workspace**
> WorkspaceRead create_workspace(workspace_create)

Creates a workspace

### Example


```python
import openapi_client
from openapi_client.models.workspace_create import WorkspaceCreate
from openapi_client.models.workspace_read import WorkspaceRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspaceApi(api_client)
    workspace_create = openapi_client.WorkspaceCreate() # WorkspaceCreate | 

    try:
        # Creates a workspace
        api_response = api_instance.create_workspace(workspace_create)
        print("The response of WorkspaceApi->create_workspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceApi->create_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_create** | [**WorkspaceCreate**](WorkspaceCreate.md)|  | 

### Return type

[**WorkspaceRead**](WorkspaceRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_workspace**
> delete_workspace(workspace_id_request_body)

Deletes a workspace

### Example


```python
import openapi_client
from openapi_client.models.workspace_id_request_body import WorkspaceIdRequestBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspaceApi(api_client)
    workspace_id_request_body = openapi_client.WorkspaceIdRequestBody() # WorkspaceIdRequestBody | 

    try:
        # Deletes a workspace
        api_instance.delete_workspace(workspace_id_request_body)
    except Exception as e:
        print("Exception when calling WorkspaceApi->delete_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id_request_body** | [**WorkspaceIdRequestBody**](WorkspaceIdRequestBody.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The resource was deleted successfully. |  -  |
**404** | Object with given id was not found. |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_workspace**
> WorkspaceRead get_workspace(workspace_id_request_body)

Find workspace by ID

### Example


```python
import openapi_client
from openapi_client.models.workspace_id_request_body import WorkspaceIdRequestBody
from openapi_client.models.workspace_read import WorkspaceRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspaceApi(api_client)
    workspace_id_request_body = openapi_client.WorkspaceIdRequestBody() # WorkspaceIdRequestBody | 

    try:
        # Find workspace by ID
        api_response = api_instance.get_workspace(workspace_id_request_body)
        print("The response of WorkspaceApi->get_workspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceApi->get_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id_request_body** | [**WorkspaceIdRequestBody**](WorkspaceIdRequestBody.md)|  | 

### Return type

[**WorkspaceRead**](WorkspaceRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**404** | Object with given id was not found. |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_workspace_by_connection_id**
> WorkspaceRead get_workspace_by_connection_id(connection_id_request_body)

Find workspace by connection id

### Example


```python
import openapi_client
from openapi_client.models.connection_id_request_body import ConnectionIdRequestBody
from openapi_client.models.workspace_read import WorkspaceRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspaceApi(api_client)
    connection_id_request_body = openapi_client.ConnectionIdRequestBody() # ConnectionIdRequestBody | 

    try:
        # Find workspace by connection id
        api_response = api_instance.get_workspace_by_connection_id(connection_id_request_body)
        print("The response of WorkspaceApi->get_workspace_by_connection_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceApi->get_workspace_by_connection_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection_id_request_body** | [**ConnectionIdRequestBody**](ConnectionIdRequestBody.md)|  | 

### Return type

[**WorkspaceRead**](WorkspaceRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**404** | Object with given id was not found. |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_workspace_by_slug**
> WorkspaceRead get_workspace_by_slug(slug_request_body)

Find workspace by slug

### Example


```python
import openapi_client
from openapi_client.models.slug_request_body import SlugRequestBody
from openapi_client.models.workspace_read import WorkspaceRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspaceApi(api_client)
    slug_request_body = openapi_client.SlugRequestBody() # SlugRequestBody | 

    try:
        # Find workspace by slug
        api_response = api_instance.get_workspace_by_slug(slug_request_body)
        print("The response of WorkspaceApi->get_workspace_by_slug:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceApi->get_workspace_by_slug: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug_request_body** | [**SlugRequestBody**](SlugRequestBody.md)|  | 

### Return type

[**WorkspaceRead**](WorkspaceRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**404** | Object with given id was not found. |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_workspaces**
> WorkspaceReadList list_workspaces()

List all workspaces registered in the current Airbyte deployment

### Example


```python
import openapi_client
from openapi_client.models.workspace_read_list import WorkspaceReadList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspaceApi(api_client)

    try:
        # List all workspaces registered in the current Airbyte deployment
        api_response = api_instance.list_workspaces()
        print("The response of WorkspaceApi->list_workspaces:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceApi->list_workspaces: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**WorkspaceReadList**](WorkspaceReadList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_workspace**
> WorkspaceRead update_workspace(workspace_update)

Update workspace state

### Example


```python
import openapi_client
from openapi_client.models.workspace_read import WorkspaceRead
from openapi_client.models.workspace_update import WorkspaceUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspaceApi(api_client)
    workspace_update = openapi_client.WorkspaceUpdate() # WorkspaceUpdate | 

    try:
        # Update workspace state
        api_response = api_instance.update_workspace(workspace_update)
        print("The response of WorkspaceApi->update_workspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceApi->update_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_update** | [**WorkspaceUpdate**](WorkspaceUpdate.md)|  | 

### Return type

[**WorkspaceRead**](WorkspaceRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**404** | Object with given id was not found. |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_workspace_feedback**
> update_workspace_feedback(workspace_give_feedback)

Update workspace feedback state

### Example


```python
import openapi_client
from openapi_client.models.workspace_give_feedback import WorkspaceGiveFeedback
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspaceApi(api_client)
    workspace_give_feedback = openapi_client.WorkspaceGiveFeedback() # WorkspaceGiveFeedback | 

    try:
        # Update workspace feedback state
        api_instance.update_workspace_feedback(workspace_give_feedback)
    except Exception as e:
        print("Exception when calling WorkspaceApi->update_workspace_feedback: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_give_feedback** | [**WorkspaceGiveFeedback**](WorkspaceGiveFeedback.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The feedback state has been properly updated |  -  |
**404** | Object with given id was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_workspace_name**
> WorkspaceRead update_workspace_name(workspace_update_name)

Update workspace name

### Example


```python
import openapi_client
from openapi_client.models.workspace_read import WorkspaceRead
from openapi_client.models.workspace_update_name import WorkspaceUpdateName
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspaceApi(api_client)
    workspace_update_name = openapi_client.WorkspaceUpdateName() # WorkspaceUpdateName | 

    try:
        # Update workspace name
        api_response = api_instance.update_workspace_name(workspace_update_name)
        print("The response of WorkspaceApi->update_workspace_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceApi->update_workspace_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_update_name** | [**WorkspaceUpdateName**](WorkspaceUpdateName.md)|  | 

### Return type

[**WorkspaceRead**](WorkspaceRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**404** | Object with given id was not found. |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

