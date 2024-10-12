# openapi_client.WorkspaceCollectionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workspace_collections_check_name_availability**](WorkspaceCollectionsApi.md#workspace_collections_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.PowerBI/locations/{location}/checkNameAvailability | 
[**workspace_collections_create**](WorkspaceCollectionsApi.md#workspace_collections_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName} | 
[**workspace_collections_delete**](WorkspaceCollectionsApi.md#workspace_collections_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName} | 
[**workspace_collections_get_access_keys**](WorkspaceCollectionsApi.md#workspace_collections_get_access_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName}/listKeys | 
[**workspace_collections_get_by_name**](WorkspaceCollectionsApi.md#workspace_collections_get_by_name) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName} | 
[**workspace_collections_list_by_resource_group**](WorkspaceCollectionsApi.md#workspace_collections_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections | 
[**workspace_collections_list_by_subscription**](WorkspaceCollectionsApi.md#workspace_collections_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.PowerBI/workspaceCollections | 
[**workspace_collections_migrate**](WorkspaceCollectionsApi.md#workspace_collections_migrate) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/moveResources | 
[**workspace_collections_regenerate_key**](WorkspaceCollectionsApi.md#workspace_collections_regenerate_key) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName}/regenerateKey | 
[**workspace_collections_update**](WorkspaceCollectionsApi.md#workspace_collections_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName} | 


# **workspace_collections_check_name_availability**
> CheckNameResponse workspace_collections_check_name_availability(subscription_id, location, api_version, body)



Verify the specified Power BI Workspace Collection name is valid and not already in use.

### Example


```python
import openapi_client
from openapi_client.models.check_name_request import CheckNameRequest
from openapi_client.models.check_name_response import CheckNameResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspaceCollectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Azure location
    api_version = 'api_version_example' # str | Client Api Version.
    body = openapi_client.CheckNameRequest() # CheckNameRequest | Check name availability request

    try:
        api_response = api_instance.workspace_collections_check_name_availability(subscription_id, location, api_version, body)
        print("The response of WorkspaceCollectionsApi->workspace_collections_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceCollectionsApi->workspace_collections_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Azure location | 
 **api_version** | **str**| Client Api Version. | 
 **body** | [**CheckNameRequest**](CheckNameRequest.md)| Check name availability request | 

### Return type

[**CheckNameResponse**](CheckNameResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request completed successfully |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspace_collections_create**
> WorkspaceCollection workspace_collections_create(subscription_id, resource_group_name, workspace_collection_name, api_version, body)



Creates a new Power BI Workspace Collection with the specified properties. A Power BI Workspace Collection contains one or more workspaces, and can be used to provision keys that provide API access to those workspaces.

### Example


```python
import openapi_client
from openapi_client.models.create_workspace_collection_request import CreateWorkspaceCollectionRequest
from openapi_client.models.workspace_collection import WorkspaceCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspaceCollectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Azure resource group
    workspace_collection_name = 'workspace_collection_name_example' # str | Power BI Embedded Workspace Collection name
    api_version = 'api_version_example' # str | Client Api Version.
    body = openapi_client.CreateWorkspaceCollectionRequest() # CreateWorkspaceCollectionRequest | Create workspace collection request

    try:
        api_response = api_instance.workspace_collections_create(subscription_id, resource_group_name, workspace_collection_name, api_version, body)
        print("The response of WorkspaceCollectionsApi->workspace_collections_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceCollectionsApi->workspace_collections_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Azure resource group | 
 **workspace_collection_name** | **str**| Power BI Embedded Workspace Collection name | 
 **api_version** | **str**| Client Api Version. | 
 **body** | [**CreateWorkspaceCollectionRequest**](CreateWorkspaceCollectionRequest.md)| Create workspace collection request | 

### Return type

[**WorkspaceCollection**](WorkspaceCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Workspace collection created successfully |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspace_collections_delete**
> workspace_collections_delete(subscription_id, resource_group_name, workspace_collection_name, api_version)



Delete a Power BI Workspace Collection.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspaceCollectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Azure resource group
    workspace_collection_name = 'workspace_collection_name_example' # str | Power BI Embedded Workspace Collection name
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.workspace_collections_delete(subscription_id, resource_group_name, workspace_collection_name, api_version)
    except Exception as e:
        print("Exception when calling WorkspaceCollectionsApi->workspace_collections_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Azure resource group | 
 **workspace_collection_name** | **str**| Power BI Embedded Workspace Collection name | 
 **api_version** | **str**| Client Api Version. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Workspace collection deleted successfully |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspace_collections_get_access_keys**
> WorkspaceCollectionAccessKeys workspace_collections_get_access_keys(subscription_id, resource_group_name, workspace_collection_name, api_version)



Retrieves the primary and secondary access keys for the specified Power BI Workspace Collection.

### Example


```python
import openapi_client
from openapi_client.models.workspace_collection_access_keys import WorkspaceCollectionAccessKeys
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspaceCollectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Azure resource group
    workspace_collection_name = 'workspace_collection_name_example' # str | Power BI Embedded Workspace Collection name
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.workspace_collections_get_access_keys(subscription_id, resource_group_name, workspace_collection_name, api_version)
        print("The response of WorkspaceCollectionsApi->workspace_collections_get_access_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceCollectionsApi->workspace_collections_get_access_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Azure resource group | 
 **workspace_collection_name** | **str**| Power BI Embedded Workspace Collection name | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**WorkspaceCollectionAccessKeys**](WorkspaceCollectionAccessKeys.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get access keys completed successfully |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspace_collections_get_by_name**
> WorkspaceCollection workspace_collections_get_by_name(subscription_id, resource_group_name, workspace_collection_name, api_version)



Retrieves an existing Power BI Workspace Collection.

### Example


```python
import openapi_client
from openapi_client.models.workspace_collection import WorkspaceCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspaceCollectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Azure resource group
    workspace_collection_name = 'workspace_collection_name_example' # str | Power BI Embedded Workspace Collection name
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.workspace_collections_get_by_name(subscription_id, resource_group_name, workspace_collection_name, api_version)
        print("The response of WorkspaceCollectionsApi->workspace_collections_get_by_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceCollectionsApi->workspace_collections_get_by_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Azure resource group | 
 **workspace_collection_name** | **str**| Power BI Embedded Workspace Collection name | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**WorkspaceCollection**](WorkspaceCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Workspace collection created successfully |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspace_collections_list_by_resource_group**
> WorkspaceCollectionList workspace_collections_list_by_resource_group(subscription_id, resource_group_name, api_version)



Retrieves all existing Power BI workspace collections in the specified resource group.

### Example


```python
import openapi_client
from openapi_client.models.workspace_collection_list import WorkspaceCollectionList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspaceCollectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Azure resource group
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.workspace_collections_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of WorkspaceCollectionsApi->workspace_collections_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceCollectionsApi->workspace_collections_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Azure resource group | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**WorkspaceCollectionList**](WorkspaceCollectionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get workspaces response |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspace_collections_list_by_subscription**
> WorkspaceCollectionList workspace_collections_list_by_subscription(subscription_id, api_version)



Retrieves all existing Power BI workspace collections in the specified subscription.

### Example


```python
import openapi_client
from openapi_client.models.workspace_collection_list import WorkspaceCollectionList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspaceCollectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.workspace_collections_list_by_subscription(subscription_id, api_version)
        print("The response of WorkspaceCollectionsApi->workspace_collections_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceCollectionsApi->workspace_collections_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**WorkspaceCollectionList**](WorkspaceCollectionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get workspaces response |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspace_collections_migrate**
> workspace_collections_migrate(subscription_id, resource_group_name, api_version, body)



Migrates an existing Power BI Workspace Collection to a different resource group and/or subscription.

### Example


```python
import openapi_client
from openapi_client.models.migrate_workspace_collection_request import MigrateWorkspaceCollectionRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspaceCollectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Azure resource group
    api_version = 'api_version_example' # str | Client Api Version.
    body = openapi_client.MigrateWorkspaceCollectionRequest() # MigrateWorkspaceCollectionRequest | Workspace migration request

    try:
        api_instance.workspace_collections_migrate(subscription_id, resource_group_name, api_version, body)
    except Exception as e:
        print("Exception when calling WorkspaceCollectionsApi->workspace_collections_migrate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Azure resource group | 
 **api_version** | **str**| Client Api Version. | 
 **body** | [**MigrateWorkspaceCollectionRequest**](MigrateWorkspaceCollectionRequest.md)| Workspace migration request | 

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
**200** | Migration completed successfully |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspace_collections_regenerate_key**
> WorkspaceCollectionAccessKeys workspace_collections_regenerate_key(subscription_id, resource_group_name, workspace_collection_name, api_version, body)



Regenerates the primary or secondary access key for the specified Power BI Workspace Collection.

### Example


```python
import openapi_client
from openapi_client.models.workspace_collection_access_key import WorkspaceCollectionAccessKey
from openapi_client.models.workspace_collection_access_keys import WorkspaceCollectionAccessKeys
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspaceCollectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Azure resource group
    workspace_collection_name = 'workspace_collection_name_example' # str | Power BI Embedded Workspace Collection name
    api_version = 'api_version_example' # str | Client Api Version.
    body = openapi_client.WorkspaceCollectionAccessKey() # WorkspaceCollectionAccessKey | Access key to regenerate

    try:
        api_response = api_instance.workspace_collections_regenerate_key(subscription_id, resource_group_name, workspace_collection_name, api_version, body)
        print("The response of WorkspaceCollectionsApi->workspace_collections_regenerate_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceCollectionsApi->workspace_collections_regenerate_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Azure resource group | 
 **workspace_collection_name** | **str**| Power BI Embedded Workspace Collection name | 
 **api_version** | **str**| Client Api Version. | 
 **body** | [**WorkspaceCollectionAccessKey**](WorkspaceCollectionAccessKey.md)| Access key to regenerate | 

### Return type

[**WorkspaceCollectionAccessKeys**](WorkspaceCollectionAccessKeys.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get access keys completed successfully |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspace_collections_update**
> WorkspaceCollection workspace_collections_update(subscription_id, resource_group_name, workspace_collection_name, api_version, body)



Update an existing Power BI Workspace Collection with the specified properties.

### Example


```python
import openapi_client
from openapi_client.models.update_workspace_collection_request import UpdateWorkspaceCollectionRequest
from openapi_client.models.workspace_collection import WorkspaceCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspaceCollectionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Azure resource group
    workspace_collection_name = 'workspace_collection_name_example' # str | Power BI Embedded Workspace Collection name
    api_version = 'api_version_example' # str | Client Api Version.
    body = openapi_client.UpdateWorkspaceCollectionRequest() # UpdateWorkspaceCollectionRequest | Update workspace collection request

    try:
        api_response = api_instance.workspace_collections_update(subscription_id, resource_group_name, workspace_collection_name, api_version, body)
        print("The response of WorkspaceCollectionsApi->workspace_collections_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceCollectionsApi->workspace_collections_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Azure resource group | 
 **workspace_collection_name** | **str**| Power BI Embedded Workspace Collection name | 
 **api_version** | **str**| Client Api Version. | 
 **body** | [**UpdateWorkspaceCollectionRequest**](UpdateWorkspaceCollectionRequest.md)| Update workspace collection request | 

### Return type

[**WorkspaceCollection**](WorkspaceCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Workspace collection updated successfully |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

