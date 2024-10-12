# openapi_client.SourceDefinitionApi

All URIs are relative to *http://airbyte.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_custom_source_definition**](SourceDefinitionApi.md#create_custom_source_definition) | **POST** /v1/source_definitions/create_custom | Creates a custom sourceDefinition for the given workspace
[**delete_source_definition**](SourceDefinitionApi.md#delete_source_definition) | **POST** /v1/source_definitions/delete | Delete a source definition
[**get_source_definition**](SourceDefinitionApi.md#get_source_definition) | **POST** /v1/source_definitions/get | Get source
[**get_source_definition_for_workspace**](SourceDefinitionApi.md#get_source_definition_for_workspace) | **POST** /v1/source_definitions/get_for_workspace | Get a sourceDefinition that is configured for the given workspace
[**grant_source_definition_to_workspace**](SourceDefinitionApi.md#grant_source_definition_to_workspace) | **POST** /v1/source_definitions/grant_definition | grant a private, non-custom sourceDefinition to a given workspace
[**list_latest_source_definitions**](SourceDefinitionApi.md#list_latest_source_definitions) | **POST** /v1/source_definitions/list_latest | List the latest sourceDefinitions Airbyte supports
[**list_private_source_definitions**](SourceDefinitionApi.md#list_private_source_definitions) | **POST** /v1/source_definitions/list_private | List all private, non-custom sourceDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace&#39;s grants.
[**list_source_definitions**](SourceDefinitionApi.md#list_source_definitions) | **POST** /v1/source_definitions/list | List all the sourceDefinitions the current Airbyte deployment is configured to use
[**list_source_definitions_for_workspace**](SourceDefinitionApi.md#list_source_definitions_for_workspace) | **POST** /v1/source_definitions/list_for_workspace | List all the sourceDefinitions the given workspace is configured to use
[**revoke_source_definition_from_workspace**](SourceDefinitionApi.md#revoke_source_definition_from_workspace) | **POST** /v1/source_definitions/revoke_definition | revoke a grant to a private, non-custom sourceDefinition from a given workspace
[**update_source_definition**](SourceDefinitionApi.md#update_source_definition) | **POST** /v1/source_definitions/update | Update a sourceDefinition


# **create_custom_source_definition**
> SourceDefinitionRead create_custom_source_definition(custom_source_definition_create=custom_source_definition_create)

Creates a custom sourceDefinition for the given workspace

### Example


```python
import openapi_client
from openapi_client.models.custom_source_definition_create import CustomSourceDefinitionCreate
from openapi_client.models.source_definition_read import SourceDefinitionRead
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
    api_instance = openapi_client.SourceDefinitionApi(api_client)
    custom_source_definition_create = openapi_client.CustomSourceDefinitionCreate() # CustomSourceDefinitionCreate |  (optional)

    try:
        # Creates a custom sourceDefinition for the given workspace
        api_response = api_instance.create_custom_source_definition(custom_source_definition_create=custom_source_definition_create)
        print("The response of SourceDefinitionApi->create_custom_source_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourceDefinitionApi->create_custom_source_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_source_definition_create** | [**CustomSourceDefinitionCreate**](CustomSourceDefinitionCreate.md)|  | [optional] 

### Return type

[**SourceDefinitionRead**](SourceDefinitionRead.md)

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

# **delete_source_definition**
> delete_source_definition(source_definition_id_request_body)

Delete a source definition

### Example


```python
import openapi_client
from openapi_client.models.source_definition_id_request_body import SourceDefinitionIdRequestBody
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
    api_instance = openapi_client.SourceDefinitionApi(api_client)
    source_definition_id_request_body = openapi_client.SourceDefinitionIdRequestBody() # SourceDefinitionIdRequestBody | 

    try:
        # Delete a source definition
        api_instance.delete_source_definition(source_definition_id_request_body)
    except Exception as e:
        print("Exception when calling SourceDefinitionApi->delete_source_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_definition_id_request_body** | [**SourceDefinitionIdRequestBody**](SourceDefinitionIdRequestBody.md)|  | 

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

# **get_source_definition**
> SourceDefinitionRead get_source_definition(source_definition_id_request_body)

Get source

### Example


```python
import openapi_client
from openapi_client.models.source_definition_id_request_body import SourceDefinitionIdRequestBody
from openapi_client.models.source_definition_read import SourceDefinitionRead
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
    api_instance = openapi_client.SourceDefinitionApi(api_client)
    source_definition_id_request_body = openapi_client.SourceDefinitionIdRequestBody() # SourceDefinitionIdRequestBody | 

    try:
        # Get source
        api_response = api_instance.get_source_definition(source_definition_id_request_body)
        print("The response of SourceDefinitionApi->get_source_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourceDefinitionApi->get_source_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_definition_id_request_body** | [**SourceDefinitionIdRequestBody**](SourceDefinitionIdRequestBody.md)|  | 

### Return type

[**SourceDefinitionRead**](SourceDefinitionRead.md)

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

# **get_source_definition_for_workspace**
> SourceDefinitionRead get_source_definition_for_workspace(source_definition_id_with_workspace_id)

Get a sourceDefinition that is configured for the given workspace

### Example


```python
import openapi_client
from openapi_client.models.source_definition_id_with_workspace_id import SourceDefinitionIdWithWorkspaceId
from openapi_client.models.source_definition_read import SourceDefinitionRead
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
    api_instance = openapi_client.SourceDefinitionApi(api_client)
    source_definition_id_with_workspace_id = openapi_client.SourceDefinitionIdWithWorkspaceId() # SourceDefinitionIdWithWorkspaceId | 

    try:
        # Get a sourceDefinition that is configured for the given workspace
        api_response = api_instance.get_source_definition_for_workspace(source_definition_id_with_workspace_id)
        print("The response of SourceDefinitionApi->get_source_definition_for_workspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourceDefinitionApi->get_source_definition_for_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_definition_id_with_workspace_id** | [**SourceDefinitionIdWithWorkspaceId**](SourceDefinitionIdWithWorkspaceId.md)|  | 

### Return type

[**SourceDefinitionRead**](SourceDefinitionRead.md)

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

# **grant_source_definition_to_workspace**
> PrivateSourceDefinitionRead grant_source_definition_to_workspace(source_definition_id_with_workspace_id)

grant a private, non-custom sourceDefinition to a given workspace

### Example


```python
import openapi_client
from openapi_client.models.private_source_definition_read import PrivateSourceDefinitionRead
from openapi_client.models.source_definition_id_with_workspace_id import SourceDefinitionIdWithWorkspaceId
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
    api_instance = openapi_client.SourceDefinitionApi(api_client)
    source_definition_id_with_workspace_id = openapi_client.SourceDefinitionIdWithWorkspaceId() # SourceDefinitionIdWithWorkspaceId | 

    try:
        # grant a private, non-custom sourceDefinition to a given workspace
        api_response = api_instance.grant_source_definition_to_workspace(source_definition_id_with_workspace_id)
        print("The response of SourceDefinitionApi->grant_source_definition_to_workspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourceDefinitionApi->grant_source_definition_to_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_definition_id_with_workspace_id** | [**SourceDefinitionIdWithWorkspaceId**](SourceDefinitionIdWithWorkspaceId.md)|  | 

### Return type

[**PrivateSourceDefinitionRead**](PrivateSourceDefinitionRead.md)

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

# **list_latest_source_definitions**
> SourceDefinitionReadList list_latest_source_definitions()

List the latest sourceDefinitions Airbyte supports

Guaranteed to retrieve the latest information on supported sources.

### Example


```python
import openapi_client
from openapi_client.models.source_definition_read_list import SourceDefinitionReadList
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
    api_instance = openapi_client.SourceDefinitionApi(api_client)

    try:
        # List the latest sourceDefinitions Airbyte supports
        api_response = api_instance.list_latest_source_definitions()
        print("The response of SourceDefinitionApi->list_latest_source_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourceDefinitionApi->list_latest_source_definitions: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**SourceDefinitionReadList**](SourceDefinitionReadList.md)

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

# **list_private_source_definitions**
> PrivateSourceDefinitionReadList list_private_source_definitions(workspace_id_request_body=workspace_id_request_body)

List all private, non-custom sourceDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.

### Example


```python
import openapi_client
from openapi_client.models.private_source_definition_read_list import PrivateSourceDefinitionReadList
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
    api_instance = openapi_client.SourceDefinitionApi(api_client)
    workspace_id_request_body = openapi_client.WorkspaceIdRequestBody() # WorkspaceIdRequestBody |  (optional)

    try:
        # List all private, non-custom sourceDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.
        api_response = api_instance.list_private_source_definitions(workspace_id_request_body=workspace_id_request_body)
        print("The response of SourceDefinitionApi->list_private_source_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourceDefinitionApi->list_private_source_definitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id_request_body** | [**WorkspaceIdRequestBody**](WorkspaceIdRequestBody.md)|  | [optional] 

### Return type

[**PrivateSourceDefinitionReadList**](PrivateSourceDefinitionReadList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_source_definitions**
> SourceDefinitionReadList list_source_definitions()

List all the sourceDefinitions the current Airbyte deployment is configured to use

### Example


```python
import openapi_client
from openapi_client.models.source_definition_read_list import SourceDefinitionReadList
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
    api_instance = openapi_client.SourceDefinitionApi(api_client)

    try:
        # List all the sourceDefinitions the current Airbyte deployment is configured to use
        api_response = api_instance.list_source_definitions()
        print("The response of SourceDefinitionApi->list_source_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourceDefinitionApi->list_source_definitions: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**SourceDefinitionReadList**](SourceDefinitionReadList.md)

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

# **list_source_definitions_for_workspace**
> SourceDefinitionReadList list_source_definitions_for_workspace(workspace_id_request_body=workspace_id_request_body)

List all the sourceDefinitions the given workspace is configured to use

### Example


```python
import openapi_client
from openapi_client.models.source_definition_read_list import SourceDefinitionReadList
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
    api_instance = openapi_client.SourceDefinitionApi(api_client)
    workspace_id_request_body = openapi_client.WorkspaceIdRequestBody() # WorkspaceIdRequestBody |  (optional)

    try:
        # List all the sourceDefinitions the given workspace is configured to use
        api_response = api_instance.list_source_definitions_for_workspace(workspace_id_request_body=workspace_id_request_body)
        print("The response of SourceDefinitionApi->list_source_definitions_for_workspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourceDefinitionApi->list_source_definitions_for_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id_request_body** | [**WorkspaceIdRequestBody**](WorkspaceIdRequestBody.md)|  | [optional] 

### Return type

[**SourceDefinitionReadList**](SourceDefinitionReadList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revoke_source_definition_from_workspace**
> revoke_source_definition_from_workspace(source_definition_id_with_workspace_id)

revoke a grant to a private, non-custom sourceDefinition from a given workspace

### Example


```python
import openapi_client
from openapi_client.models.source_definition_id_with_workspace_id import SourceDefinitionIdWithWorkspaceId
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
    api_instance = openapi_client.SourceDefinitionApi(api_client)
    source_definition_id_with_workspace_id = openapi_client.SourceDefinitionIdWithWorkspaceId() # SourceDefinitionIdWithWorkspaceId | 

    try:
        # revoke a grant to a private, non-custom sourceDefinition from a given workspace
        api_instance.revoke_source_definition_from_workspace(source_definition_id_with_workspace_id)
    except Exception as e:
        print("Exception when calling SourceDefinitionApi->revoke_source_definition_from_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_definition_id_with_workspace_id** | [**SourceDefinitionIdWithWorkspaceId**](SourceDefinitionIdWithWorkspaceId.md)|  | 

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

# **update_source_definition**
> SourceDefinitionRead update_source_definition(source_definition_update=source_definition_update)

Update a sourceDefinition

### Example


```python
import openapi_client
from openapi_client.models.source_definition_read import SourceDefinitionRead
from openapi_client.models.source_definition_update import SourceDefinitionUpdate
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
    api_instance = openapi_client.SourceDefinitionApi(api_client)
    source_definition_update = openapi_client.SourceDefinitionUpdate() # SourceDefinitionUpdate |  (optional)

    try:
        # Update a sourceDefinition
        api_response = api_instance.update_source_definition(source_definition_update=source_definition_update)
        print("The response of SourceDefinitionApi->update_source_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourceDefinitionApi->update_source_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_definition_update** | [**SourceDefinitionUpdate**](SourceDefinitionUpdate.md)|  | [optional] 

### Return type

[**SourceDefinitionRead**](SourceDefinitionRead.md)

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

