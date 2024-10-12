# openapi_client.DestinationApi

All URIs are relative to *http://airbyte.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**check_connection_to_destination**](DestinationApi.md#check_connection_to_destination) | **POST** /v1/destinations/check_connection | Check connection to the destination
[**check_connection_to_destination_for_update**](DestinationApi.md#check_connection_to_destination_for_update) | **POST** /v1/destinations/check_connection_for_update | Check connection for a proposed update to a destination
[**clone_destination**](DestinationApi.md#clone_destination) | **POST** /v1/destinations/clone | Clone destination
[**create_destination**](DestinationApi.md#create_destination) | **POST** /v1/destinations/create | Create a destination
[**delete_destination**](DestinationApi.md#delete_destination) | **POST** /v1/destinations/delete | Delete the destination
[**get_destination**](DestinationApi.md#get_destination) | **POST** /v1/destinations/get | Get configured destination
[**list_destinations_for_workspace**](DestinationApi.md#list_destinations_for_workspace) | **POST** /v1/destinations/list | List configured destinations for a workspace
[**search_destinations**](DestinationApi.md#search_destinations) | **POST** /v1/destinations/search | Search destinations
[**update_destination**](DestinationApi.md#update_destination) | **POST** /v1/destinations/update | Update a destination


# **check_connection_to_destination**
> CheckConnectionRead check_connection_to_destination(destination_id_request_body)

Check connection to the destination

### Example


```python
import openapi_client
from openapi_client.models.check_connection_read import CheckConnectionRead
from openapi_client.models.destination_id_request_body import DestinationIdRequestBody
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
    api_instance = openapi_client.DestinationApi(api_client)
    destination_id_request_body = openapi_client.DestinationIdRequestBody() # DestinationIdRequestBody | 

    try:
        # Check connection to the destination
        api_response = api_instance.check_connection_to_destination(destination_id_request_body)
        print("The response of DestinationApi->check_connection_to_destination:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DestinationApi->check_connection_to_destination: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **destination_id_request_body** | [**DestinationIdRequestBody**](DestinationIdRequestBody.md)|  | 

### Return type

[**CheckConnectionRead**](CheckConnectionRead.md)

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

# **check_connection_to_destination_for_update**
> CheckConnectionRead check_connection_to_destination_for_update(destination_update)

Check connection for a proposed update to a destination

### Example


```python
import openapi_client
from openapi_client.models.check_connection_read import CheckConnectionRead
from openapi_client.models.destination_update import DestinationUpdate
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
    api_instance = openapi_client.DestinationApi(api_client)
    destination_update = openapi_client.DestinationUpdate() # DestinationUpdate | 

    try:
        # Check connection for a proposed update to a destination
        api_response = api_instance.check_connection_to_destination_for_update(destination_update)
        print("The response of DestinationApi->check_connection_to_destination_for_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DestinationApi->check_connection_to_destination_for_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **destination_update** | [**DestinationUpdate**](DestinationUpdate.md)|  | 

### Return type

[**CheckConnectionRead**](CheckConnectionRead.md)

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

# **clone_destination**
> DestinationRead clone_destination(destination_clone_request_body)

Clone destination

### Example


```python
import openapi_client
from openapi_client.models.destination_clone_request_body import DestinationCloneRequestBody
from openapi_client.models.destination_read import DestinationRead
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
    api_instance = openapi_client.DestinationApi(api_client)
    destination_clone_request_body = openapi_client.DestinationCloneRequestBody() # DestinationCloneRequestBody | 

    try:
        # Clone destination
        api_response = api_instance.clone_destination(destination_clone_request_body)
        print("The response of DestinationApi->clone_destination:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DestinationApi->clone_destination: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **destination_clone_request_body** | [**DestinationCloneRequestBody**](DestinationCloneRequestBody.md)|  | 

### Return type

[**DestinationRead**](DestinationRead.md)

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

# **create_destination**
> DestinationRead create_destination(destination_create)

Create a destination

### Example


```python
import openapi_client
from openapi_client.models.destination_create import DestinationCreate
from openapi_client.models.destination_read import DestinationRead
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
    api_instance = openapi_client.DestinationApi(api_client)
    destination_create = openapi_client.DestinationCreate() # DestinationCreate | 

    try:
        # Create a destination
        api_response = api_instance.create_destination(destination_create)
        print("The response of DestinationApi->create_destination:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DestinationApi->create_destination: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **destination_create** | [**DestinationCreate**](DestinationCreate.md)|  | 

### Return type

[**DestinationRead**](DestinationRead.md)

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

# **delete_destination**
> delete_destination(destination_id_request_body)

Delete the destination

### Example


```python
import openapi_client
from openapi_client.models.destination_id_request_body import DestinationIdRequestBody
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
    api_instance = openapi_client.DestinationApi(api_client)
    destination_id_request_body = openapi_client.DestinationIdRequestBody() # DestinationIdRequestBody | 

    try:
        # Delete the destination
        api_instance.delete_destination(destination_id_request_body)
    except Exception as e:
        print("Exception when calling DestinationApi->delete_destination: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **destination_id_request_body** | [**DestinationIdRequestBody**](DestinationIdRequestBody.md)|  | 

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

# **get_destination**
> DestinationRead get_destination(destination_id_request_body)

Get configured destination

### Example


```python
import openapi_client
from openapi_client.models.destination_id_request_body import DestinationIdRequestBody
from openapi_client.models.destination_read import DestinationRead
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
    api_instance = openapi_client.DestinationApi(api_client)
    destination_id_request_body = openapi_client.DestinationIdRequestBody() # DestinationIdRequestBody | 

    try:
        # Get configured destination
        api_response = api_instance.get_destination(destination_id_request_body)
        print("The response of DestinationApi->get_destination:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DestinationApi->get_destination: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **destination_id_request_body** | [**DestinationIdRequestBody**](DestinationIdRequestBody.md)|  | 

### Return type

[**DestinationRead**](DestinationRead.md)

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

# **list_destinations_for_workspace**
> DestinationReadList list_destinations_for_workspace(workspace_id_request_body)

List configured destinations for a workspace

### Example


```python
import openapi_client
from openapi_client.models.destination_read_list import DestinationReadList
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
    api_instance = openapi_client.DestinationApi(api_client)
    workspace_id_request_body = openapi_client.WorkspaceIdRequestBody() # WorkspaceIdRequestBody | 

    try:
        # List configured destinations for a workspace
        api_response = api_instance.list_destinations_for_workspace(workspace_id_request_body)
        print("The response of DestinationApi->list_destinations_for_workspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DestinationApi->list_destinations_for_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id_request_body** | [**WorkspaceIdRequestBody**](WorkspaceIdRequestBody.md)|  | 

### Return type

[**DestinationReadList**](DestinationReadList.md)

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

# **search_destinations**
> DestinationReadList search_destinations(destination_search)

Search destinations

### Example


```python
import openapi_client
from openapi_client.models.destination_read_list import DestinationReadList
from openapi_client.models.destination_search import DestinationSearch
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
    api_instance = openapi_client.DestinationApi(api_client)
    destination_search = openapi_client.DestinationSearch() # DestinationSearch | 

    try:
        # Search destinations
        api_response = api_instance.search_destinations(destination_search)
        print("The response of DestinationApi->search_destinations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DestinationApi->search_destinations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **destination_search** | [**DestinationSearch**](DestinationSearch.md)|  | 

### Return type

[**DestinationReadList**](DestinationReadList.md)

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

# **update_destination**
> DestinationRead update_destination(destination_update)

Update a destination

### Example


```python
import openapi_client
from openapi_client.models.destination_read import DestinationRead
from openapi_client.models.destination_update import DestinationUpdate
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
    api_instance = openapi_client.DestinationApi(api_client)
    destination_update = openapi_client.DestinationUpdate() # DestinationUpdate | 

    try:
        # Update a destination
        api_response = api_instance.update_destination(destination_update)
        print("The response of DestinationApi->update_destination:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DestinationApi->update_destination: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **destination_update** | [**DestinationUpdate**](DestinationUpdate.md)|  | 

### Return type

[**DestinationRead**](DestinationRead.md)

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

