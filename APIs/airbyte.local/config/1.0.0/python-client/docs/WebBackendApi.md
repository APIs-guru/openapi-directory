# openapi_client.WebBackendApi

All URIs are relative to *http://airbyte.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_state_type**](WebBackendApi.md#get_state_type) | **POST** /v1/web_backend/state/get_type | Fetch the current state type for a connection.
[**web_backend_check_updates**](WebBackendApi.md#web_backend_check_updates) | **POST** /v1/web_backend/check_updates | Returns a summary of source and destination definitions that could be updated.
[**web_backend_create_connection**](WebBackendApi.md#web_backend_create_connection) | **POST** /v1/web_backend/connections/create | Create a connection
[**web_backend_get_connection**](WebBackendApi.md#web_backend_get_connection) | **POST** /v1/web_backend/connections/get | Get a connection
[**web_backend_get_workspace_state**](WebBackendApi.md#web_backend_get_workspace_state) | **POST** /v1/web_backend/workspace/state | Returns the current state of a workspace
[**web_backend_list_connections_for_workspace**](WebBackendApi.md#web_backend_list_connections_for_workspace) | **POST** /v1/web_backend/connections/list | Returns all non-deleted connections for a workspace.
[**web_backend_list_geographies**](WebBackendApi.md#web_backend_list_geographies) | **POST** /v1/web_backend/geographies/list | Returns available geographies can be selected to run data syncs in a particular geography. The &#39;auto&#39; entry indicates that the sync will be automatically assigned to a geography according to the platform default behavior. Entries other than &#39;auto&#39; are two-letter country codes that follow the ISO 3166-1 alpha-2 standard. 
[**web_backend_update_connection**](WebBackendApi.md#web_backend_update_connection) | **POST** /v1/web_backend/connections/update | Update a connection


# **get_state_type**
> ConnectionStateType get_state_type(connection_id_request_body)

Fetch the current state type for a connection.

### Example


```python
import openapi_client
from openapi_client.models.connection_id_request_body import ConnectionIdRequestBody
from openapi_client.models.connection_state_type import ConnectionStateType
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
    api_instance = openapi_client.WebBackendApi(api_client)
    connection_id_request_body = openapi_client.ConnectionIdRequestBody() # ConnectionIdRequestBody | 

    try:
        # Fetch the current state type for a connection.
        api_response = api_instance.get_state_type(connection_id_request_body)
        print("The response of WebBackendApi->get_state_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebBackendApi->get_state_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection_id_request_body** | [**ConnectionIdRequestBody**](ConnectionIdRequestBody.md)|  | 

### Return type

[**ConnectionStateType**](ConnectionStateType.md)

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

# **web_backend_check_updates**
> WebBackendCheckUpdatesRead web_backend_check_updates()

Returns a summary of source and destination definitions that could be updated.

### Example


```python
import openapi_client
from openapi_client.models.web_backend_check_updates_read import WebBackendCheckUpdatesRead
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
    api_instance = openapi_client.WebBackendApi(api_client)

    try:
        # Returns a summary of source and destination definitions that could be updated.
        api_response = api_instance.web_backend_check_updates()
        print("The response of WebBackendApi->web_backend_check_updates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebBackendApi->web_backend_check_updates: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**WebBackendCheckUpdatesRead**](WebBackendCheckUpdatesRead.md)

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

# **web_backend_create_connection**
> WebBackendConnectionRead web_backend_create_connection(web_backend_connection_create)

Create a connection

### Example


```python
import openapi_client
from openapi_client.models.web_backend_connection_create import WebBackendConnectionCreate
from openapi_client.models.web_backend_connection_read import WebBackendConnectionRead
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
    api_instance = openapi_client.WebBackendApi(api_client)
    web_backend_connection_create = openapi_client.WebBackendConnectionCreate() # WebBackendConnectionCreate | 

    try:
        # Create a connection
        api_response = api_instance.web_backend_create_connection(web_backend_connection_create)
        print("The response of WebBackendApi->web_backend_create_connection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebBackendApi->web_backend_create_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_backend_connection_create** | [**WebBackendConnectionCreate**](WebBackendConnectionCreate.md)|  | 

### Return type

[**WebBackendConnectionRead**](WebBackendConnectionRead.md)

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

# **web_backend_get_connection**
> WebBackendConnectionRead web_backend_get_connection(web_backend_connection_request_body)

Get a connection

### Example


```python
import openapi_client
from openapi_client.models.web_backend_connection_read import WebBackendConnectionRead
from openapi_client.models.web_backend_connection_request_body import WebBackendConnectionRequestBody
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
    api_instance = openapi_client.WebBackendApi(api_client)
    web_backend_connection_request_body = openapi_client.WebBackendConnectionRequestBody() # WebBackendConnectionRequestBody | 

    try:
        # Get a connection
        api_response = api_instance.web_backend_get_connection(web_backend_connection_request_body)
        print("The response of WebBackendApi->web_backend_get_connection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebBackendApi->web_backend_get_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_backend_connection_request_body** | [**WebBackendConnectionRequestBody**](WebBackendConnectionRequestBody.md)|  | 

### Return type

[**WebBackendConnectionRead**](WebBackendConnectionRead.md)

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

# **web_backend_get_workspace_state**
> WebBackendWorkspaceStateResult web_backend_get_workspace_state(web_backend_workspace_state=web_backend_workspace_state)

Returns the current state of a workspace

### Example


```python
import openapi_client
from openapi_client.models.web_backend_workspace_state import WebBackendWorkspaceState
from openapi_client.models.web_backend_workspace_state_result import WebBackendWorkspaceStateResult
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
    api_instance = openapi_client.WebBackendApi(api_client)
    web_backend_workspace_state = openapi_client.WebBackendWorkspaceState() # WebBackendWorkspaceState |  (optional)

    try:
        # Returns the current state of a workspace
        api_response = api_instance.web_backend_get_workspace_state(web_backend_workspace_state=web_backend_workspace_state)
        print("The response of WebBackendApi->web_backend_get_workspace_state:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebBackendApi->web_backend_get_workspace_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_backend_workspace_state** | [**WebBackendWorkspaceState**](WebBackendWorkspaceState.md)|  | [optional] 

### Return type

[**WebBackendWorkspaceStateResult**](WebBackendWorkspaceStateResult.md)

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

# **web_backend_list_connections_for_workspace**
> WebBackendConnectionReadList web_backend_list_connections_for_workspace(web_backend_connection_list_request_body)

Returns all non-deleted connections for a workspace.

### Example


```python
import openapi_client
from openapi_client.models.web_backend_connection_list_request_body import WebBackendConnectionListRequestBody
from openapi_client.models.web_backend_connection_read_list import WebBackendConnectionReadList
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
    api_instance = openapi_client.WebBackendApi(api_client)
    web_backend_connection_list_request_body = openapi_client.WebBackendConnectionListRequestBody() # WebBackendConnectionListRequestBody | 

    try:
        # Returns all non-deleted connections for a workspace.
        api_response = api_instance.web_backend_list_connections_for_workspace(web_backend_connection_list_request_body)
        print("The response of WebBackendApi->web_backend_list_connections_for_workspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebBackendApi->web_backend_list_connections_for_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_backend_connection_list_request_body** | [**WebBackendConnectionListRequestBody**](WebBackendConnectionListRequestBody.md)|  | 

### Return type

[**WebBackendConnectionReadList**](WebBackendConnectionReadList.md)

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

# **web_backend_list_geographies**
> WebBackendGeographiesListResult web_backend_list_geographies()

Returns available geographies can be selected to run data syncs in a particular geography. The 'auto' entry indicates that the sync will be automatically assigned to a geography according to the platform default behavior. Entries other than 'auto' are two-letter country codes that follow the ISO 3166-1 alpha-2 standard. 

Returns all available geographies in which a data sync can run.

### Example


```python
import openapi_client
from openapi_client.models.web_backend_geographies_list_result import WebBackendGeographiesListResult
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
    api_instance = openapi_client.WebBackendApi(api_client)

    try:
        # Returns available geographies can be selected to run data syncs in a particular geography. The 'auto' entry indicates that the sync will be automatically assigned to a geography according to the platform default behavior. Entries other than 'auto' are two-letter country codes that follow the ISO 3166-1 alpha-2 standard. 
        api_response = api_instance.web_backend_list_geographies()
        print("The response of WebBackendApi->web_backend_list_geographies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebBackendApi->web_backend_list_geographies: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**WebBackendGeographiesListResult**](WebBackendGeographiesListResult.md)

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

# **web_backend_update_connection**
> WebBackendConnectionRead web_backend_update_connection(web_backend_connection_update)

Update a connection

Apply a patch-style update to a connection. Only fields present on the update request body will be updated. Any operations that lack an ID will be created. Then, the newly created operationId will be applied to the connection along with the rest of the operationIds in the request body. Apply a patch-style update to a connection. Only fields present on the update request body will be updated. Note that if a catalog is present in the request body, the connection's entire catalog will be replaced with the catalog from the request. This means that to modify a single stream, the entire new catalog containing the updated stream needs to be sent. 

### Example


```python
import openapi_client
from openapi_client.models.web_backend_connection_read import WebBackendConnectionRead
from openapi_client.models.web_backend_connection_update import WebBackendConnectionUpdate
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
    api_instance = openapi_client.WebBackendApi(api_client)
    web_backend_connection_update = openapi_client.WebBackendConnectionUpdate() # WebBackendConnectionUpdate | 

    try:
        # Update a connection
        api_response = api_instance.web_backend_update_connection(web_backend_connection_update)
        print("The response of WebBackendApi->web_backend_update_connection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebBackendApi->web_backend_update_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_backend_connection_update** | [**WebBackendConnectionUpdate**](WebBackendConnectionUpdate.md)|  | 

### Return type

[**WebBackendConnectionRead**](WebBackendConnectionRead.md)

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

