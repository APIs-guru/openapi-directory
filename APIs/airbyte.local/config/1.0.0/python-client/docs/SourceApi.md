# openapi_client.SourceApi

All URIs are relative to *http://airbyte.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**check_connection_to_source**](SourceApi.md#check_connection_to_source) | **POST** /v1/sources/check_connection | Check connection to the source
[**check_connection_to_source_for_update**](SourceApi.md#check_connection_to_source_for_update) | **POST** /v1/sources/check_connection_for_update | Check connection for a proposed update to a source
[**clone_source**](SourceApi.md#clone_source) | **POST** /v1/sources/clone | Clone source
[**create_source**](SourceApi.md#create_source) | **POST** /v1/sources/create | Create a source
[**delete_source**](SourceApi.md#delete_source) | **POST** /v1/sources/delete | Delete a source
[**discover_schema_for_source**](SourceApi.md#discover_schema_for_source) | **POST** /v1/sources/discover_schema | Discover the schema catalog of the source
[**get_most_recent_source_actor_catalog**](SourceApi.md#get_most_recent_source_actor_catalog) | **POST** /v1/sources/most_recent_source_actor_catalog | Get most recent ActorCatalog for source
[**get_source**](SourceApi.md#get_source) | **POST** /v1/sources/get | Get source
[**list_sources_for_workspace**](SourceApi.md#list_sources_for_workspace) | **POST** /v1/sources/list | List sources for workspace
[**search_sources**](SourceApi.md#search_sources) | **POST** /v1/sources/search | Search sources
[**update_source**](SourceApi.md#update_source) | **POST** /v1/sources/update | Update a source
[**write_discover_catalog_result**](SourceApi.md#write_discover_catalog_result) | **POST** /v1/sources/write_discover_catalog_result | Should only called from worker, to write result from discover activity back to DB.


# **check_connection_to_source**
> CheckConnectionRead check_connection_to_source(source_id_request_body)

Check connection to the source

### Example


```python
import openapi_client
from openapi_client.models.check_connection_read import CheckConnectionRead
from openapi_client.models.source_id_request_body import SourceIdRequestBody
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
    api_instance = openapi_client.SourceApi(api_client)
    source_id_request_body = openapi_client.SourceIdRequestBody() # SourceIdRequestBody | 

    try:
        # Check connection to the source
        api_response = api_instance.check_connection_to_source(source_id_request_body)
        print("The response of SourceApi->check_connection_to_source:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourceApi->check_connection_to_source: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_id_request_body** | [**SourceIdRequestBody**](SourceIdRequestBody.md)|  | 

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

# **check_connection_to_source_for_update**
> CheckConnectionRead check_connection_to_source_for_update(source_update)

Check connection for a proposed update to a source

### Example


```python
import openapi_client
from openapi_client.models.check_connection_read import CheckConnectionRead
from openapi_client.models.source_update import SourceUpdate
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
    api_instance = openapi_client.SourceApi(api_client)
    source_update = openapi_client.SourceUpdate() # SourceUpdate | 

    try:
        # Check connection for a proposed update to a source
        api_response = api_instance.check_connection_to_source_for_update(source_update)
        print("The response of SourceApi->check_connection_to_source_for_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourceApi->check_connection_to_source_for_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_update** | [**SourceUpdate**](SourceUpdate.md)|  | 

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

# **clone_source**
> SourceRead clone_source(source_clone_request_body)

Clone source

### Example


```python
import openapi_client
from openapi_client.models.source_clone_request_body import SourceCloneRequestBody
from openapi_client.models.source_read import SourceRead
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
    api_instance = openapi_client.SourceApi(api_client)
    source_clone_request_body = openapi_client.SourceCloneRequestBody() # SourceCloneRequestBody | 

    try:
        # Clone source
        api_response = api_instance.clone_source(source_clone_request_body)
        print("The response of SourceApi->clone_source:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourceApi->clone_source: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_clone_request_body** | [**SourceCloneRequestBody**](SourceCloneRequestBody.md)|  | 

### Return type

[**SourceRead**](SourceRead.md)

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

# **create_source**
> SourceRead create_source(source_create)

Create a source

### Example


```python
import openapi_client
from openapi_client.models.source_create import SourceCreate
from openapi_client.models.source_read import SourceRead
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
    api_instance = openapi_client.SourceApi(api_client)
    source_create = openapi_client.SourceCreate() # SourceCreate | 

    try:
        # Create a source
        api_response = api_instance.create_source(source_create)
        print("The response of SourceApi->create_source:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourceApi->create_source: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_create** | [**SourceCreate**](SourceCreate.md)|  | 

### Return type

[**SourceRead**](SourceRead.md)

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

# **delete_source**
> delete_source(source_id_request_body)

Delete a source

### Example


```python
import openapi_client
from openapi_client.models.source_id_request_body import SourceIdRequestBody
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
    api_instance = openapi_client.SourceApi(api_client)
    source_id_request_body = openapi_client.SourceIdRequestBody() # SourceIdRequestBody | 

    try:
        # Delete a source
        api_instance.delete_source(source_id_request_body)
    except Exception as e:
        print("Exception when calling SourceApi->delete_source: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_id_request_body** | [**SourceIdRequestBody**](SourceIdRequestBody.md)|  | 

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

# **discover_schema_for_source**
> SourceDiscoverSchemaRead discover_schema_for_source(source_discover_schema_request_body)

Discover the schema catalog of the source

### Example


```python
import openapi_client
from openapi_client.models.source_discover_schema_read import SourceDiscoverSchemaRead
from openapi_client.models.source_discover_schema_request_body import SourceDiscoverSchemaRequestBody
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
    api_instance = openapi_client.SourceApi(api_client)
    source_discover_schema_request_body = openapi_client.SourceDiscoverSchemaRequestBody() # SourceDiscoverSchemaRequestBody | 

    try:
        # Discover the schema catalog of the source
        api_response = api_instance.discover_schema_for_source(source_discover_schema_request_body)
        print("The response of SourceApi->discover_schema_for_source:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourceApi->discover_schema_for_source: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_discover_schema_request_body** | [**SourceDiscoverSchemaRequestBody**](SourceDiscoverSchemaRequestBody.md)|  | 

### Return type

[**SourceDiscoverSchemaRead**](SourceDiscoverSchemaRead.md)

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

# **get_most_recent_source_actor_catalog**
> ActorCatalogWithUpdatedAt get_most_recent_source_actor_catalog(source_id_request_body)

Get most recent ActorCatalog for source

### Example


```python
import openapi_client
from openapi_client.models.actor_catalog_with_updated_at import ActorCatalogWithUpdatedAt
from openapi_client.models.source_id_request_body import SourceIdRequestBody
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
    api_instance = openapi_client.SourceApi(api_client)
    source_id_request_body = openapi_client.SourceIdRequestBody() # SourceIdRequestBody | 

    try:
        # Get most recent ActorCatalog for source
        api_response = api_instance.get_most_recent_source_actor_catalog(source_id_request_body)
        print("The response of SourceApi->get_most_recent_source_actor_catalog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourceApi->get_most_recent_source_actor_catalog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_id_request_body** | [**SourceIdRequestBody**](SourceIdRequestBody.md)|  | 

### Return type

[**ActorCatalogWithUpdatedAt**](ActorCatalogWithUpdatedAt.md)

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

# **get_source**
> SourceRead get_source(source_id_request_body)

Get source

### Example


```python
import openapi_client
from openapi_client.models.source_id_request_body import SourceIdRequestBody
from openapi_client.models.source_read import SourceRead
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
    api_instance = openapi_client.SourceApi(api_client)
    source_id_request_body = openapi_client.SourceIdRequestBody() # SourceIdRequestBody | 

    try:
        # Get source
        api_response = api_instance.get_source(source_id_request_body)
        print("The response of SourceApi->get_source:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourceApi->get_source: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_id_request_body** | [**SourceIdRequestBody**](SourceIdRequestBody.md)|  | 

### Return type

[**SourceRead**](SourceRead.md)

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

# **list_sources_for_workspace**
> SourceReadList list_sources_for_workspace(workspace_id_request_body)

List sources for workspace

List sources for workspace. Does not return deleted sources.

### Example


```python
import openapi_client
from openapi_client.models.source_read_list import SourceReadList
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
    api_instance = openapi_client.SourceApi(api_client)
    workspace_id_request_body = openapi_client.WorkspaceIdRequestBody() # WorkspaceIdRequestBody | 

    try:
        # List sources for workspace
        api_response = api_instance.list_sources_for_workspace(workspace_id_request_body)
        print("The response of SourceApi->list_sources_for_workspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourceApi->list_sources_for_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id_request_body** | [**WorkspaceIdRequestBody**](WorkspaceIdRequestBody.md)|  | 

### Return type

[**SourceReadList**](SourceReadList.md)

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

# **search_sources**
> SourceReadList search_sources(source_search)

Search sources

### Example


```python
import openapi_client
from openapi_client.models.source_read_list import SourceReadList
from openapi_client.models.source_search import SourceSearch
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
    api_instance = openapi_client.SourceApi(api_client)
    source_search = openapi_client.SourceSearch() # SourceSearch | 

    try:
        # Search sources
        api_response = api_instance.search_sources(source_search)
        print("The response of SourceApi->search_sources:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourceApi->search_sources: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_search** | [**SourceSearch**](SourceSearch.md)|  | 

### Return type

[**SourceReadList**](SourceReadList.md)

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

# **update_source**
> SourceRead update_source(source_update)

Update a source

### Example


```python
import openapi_client
from openapi_client.models.source_read import SourceRead
from openapi_client.models.source_update import SourceUpdate
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
    api_instance = openapi_client.SourceApi(api_client)
    source_update = openapi_client.SourceUpdate() # SourceUpdate | 

    try:
        # Update a source
        api_response = api_instance.update_source(source_update)
        print("The response of SourceApi->update_source:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourceApi->update_source: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_update** | [**SourceUpdate**](SourceUpdate.md)|  | 

### Return type

[**SourceRead**](SourceRead.md)

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

# **write_discover_catalog_result**
> DiscoverCatalogResult write_discover_catalog_result(source_discover_schema_write_request_body)

Should only called from worker, to write result from discover activity back to DB.

### Example


```python
import openapi_client
from openapi_client.models.discover_catalog_result import DiscoverCatalogResult
from openapi_client.models.source_discover_schema_write_request_body import SourceDiscoverSchemaWriteRequestBody
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
    api_instance = openapi_client.SourceApi(api_client)
    source_discover_schema_write_request_body = openapi_client.SourceDiscoverSchemaWriteRequestBody() # SourceDiscoverSchemaWriteRequestBody | 

    try:
        # Should only called from worker, to write result from discover activity back to DB.
        api_response = api_instance.write_discover_catalog_result(source_discover_schema_write_request_body)
        print("The response of SourceApi->write_discover_catalog_result:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourceApi->write_discover_catalog_result: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_discover_schema_write_request_body** | [**SourceDiscoverSchemaWriteRequestBody**](SourceDiscoverSchemaWriteRequestBody.md)|  | 

### Return type

[**DiscoverCatalogResult**](DiscoverCatalogResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

