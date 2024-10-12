# openapi_client.WorkspacesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workspaces_create_or_update**](WorkspacesApi.md#workspaces_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName} | 
[**workspaces_delete**](WorkspacesApi.md#workspaces_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName} | 
[**workspaces_disable_intelligence_pack**](WorkspacesApi.md#workspaces_disable_intelligence_pack) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/intelligencePacks/{intelligencePackName}/Disable | 
[**workspaces_enable_intelligence_pack**](WorkspacesApi.md#workspaces_enable_intelligence_pack) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/intelligencePacks/{intelligencePackName}/Enable | 
[**workspaces_get**](WorkspacesApi.md#workspaces_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName} | 
[**workspaces_get_shared_keys**](WorkspacesApi.md#workspaces_get_shared_keys) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/sharedKeys | 
[**workspaces_list**](WorkspacesApi.md#workspaces_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.OperationalInsights/workspaces | 
[**workspaces_list_by_resource_group**](WorkspacesApi.md#workspaces_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces | 
[**workspaces_list_intelligence_packs**](WorkspacesApi.md#workspaces_list_intelligence_packs) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/intelligencePacks | 
[**workspaces_list_management_groups**](WorkspacesApi.md#workspaces_list_management_groups) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/managementGroups | 
[**workspaces_list_usages**](WorkspacesApi.md#workspaces_list_usages) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/usages | 
[**workspaces_update**](WorkspacesApi.md#workspaces_update) | **PATCH** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName} | 


# **workspaces_create_or_update**
> Workspace workspaces_create_or_update(resource_group_name, workspace_name, api_version, subscription_id, parameters)



Create or update a workspace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workspace import Workspace
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the workspace.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.Workspace() # Workspace | The parameters required to create or update a workspace.

    try:
        api_response = api_instance.workspaces_create_or_update(resource_group_name, workspace_name, api_version, subscription_id, parameters)
        print("The response of WorkspacesApi->workspaces_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name of the workspace. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**Workspace**](Workspace.md)| The parameters required to create or update a workspace. | 

### Return type

[**Workspace**](Workspace.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**201** | Created response definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_delete**
> workspaces_delete(resource_group_name, workspace_name, api_version, subscription_id)



Deletes a workspace instance.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the workspace.
    workspace_name = 'workspace_name_example' # str | Name of the Log Analytics Workspace.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.workspaces_delete(resource_group_name, workspace_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name of the workspace. | 
 **workspace_name** | **str**| Name of the Log Analytics Workspace. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**204** | NoContent response definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_disable_intelligence_pack**
> workspaces_disable_intelligence_pack(resource_group_name, workspace_name, intelligence_pack_name, api_version, subscription_id)



Disables an intelligence pack for a given workspace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    workspace_name = 'workspace_name_example' # str | Name of the Log Analytics Workspace.
    intelligence_pack_name = 'intelligence_pack_name_example' # str | The name of the intelligence pack to be disabled.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.workspaces_disable_intelligence_pack(resource_group_name, workspace_name, intelligence_pack_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_disable_intelligence_pack: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **workspace_name** | **str**| Name of the Log Analytics Workspace. | 
 **intelligence_pack_name** | **str**| The name of the intelligence pack to be disabled. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_enable_intelligence_pack**
> workspaces_enable_intelligence_pack(resource_group_name, workspace_name, intelligence_pack_name, api_version, subscription_id)



Enables an intelligence pack for a given workspace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    workspace_name = 'workspace_name_example' # str | Name of the Log Analytics Workspace.
    intelligence_pack_name = 'intelligence_pack_name_example' # str | The name of the intelligence pack to be enabled.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.workspaces_enable_intelligence_pack(resource_group_name, workspace_name, intelligence_pack_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_enable_intelligence_pack: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **workspace_name** | **str**| Name of the Log Analytics Workspace. | 
 **intelligence_pack_name** | **str**| The name of the intelligence pack to be enabled. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_get**
> Workspace workspaces_get(resource_group_name, workspace_name, api_version, subscription_id)



Gets a workspace instance.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workspace import Workspace
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the workspace.
    workspace_name = 'workspace_name_example' # str | Name of the Log Analytics Workspace.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.workspaces_get(resource_group_name, workspace_name, api_version, subscription_id)
        print("The response of WorkspacesApi->workspaces_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name of the workspace. | 
 **workspace_name** | **str**| Name of the Log Analytics Workspace. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**Workspace**](Workspace.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_get_shared_keys**
> SharedKeys workspaces_get_shared_keys(resource_group_name, workspace_name, api_version, subscription_id)



Gets the shared keys for a workspace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.shared_keys import SharedKeys
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    workspace_name = 'workspace_name_example' # str | Name of the Log Analytics Workspace.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.workspaces_get_shared_keys(resource_group_name, workspace_name, api_version, subscription_id)
        print("The response of WorkspacesApi->workspaces_get_shared_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_get_shared_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **workspace_name** | **str**| Name of the Log Analytics Workspace. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**SharedKeys**](SharedKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_list**
> WorkspaceListResult workspaces_list(api_version, subscription_id)



Gets the workspaces in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workspace_list_result import WorkspaceListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspacesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.workspaces_list(api_version, subscription_id)
        print("The response of WorkspacesApi->workspaces_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**WorkspaceListResult**](WorkspaceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_list_by_resource_group**
> WorkspaceListResult workspaces_list_by_resource_group(resource_group_name, api_version, subscription_id)



Gets workspaces in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workspace_list_result import WorkspaceListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.workspaces_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of WorkspacesApi->workspaces_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**WorkspaceListResult**](WorkspaceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_list_intelligence_packs**
> List[IntelligencePack] workspaces_list_intelligence_packs(resource_group_name, workspace_name, api_version, subscription_id)



Lists all the intelligence packs possible and whether they are enabled or disabled for a given workspace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.intelligence_pack import IntelligencePack
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    workspace_name = 'workspace_name_example' # str | Name of the Log Analytics Workspace.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.workspaces_list_intelligence_packs(resource_group_name, workspace_name, api_version, subscription_id)
        print("The response of WorkspacesApi->workspaces_list_intelligence_packs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_list_intelligence_packs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **workspace_name** | **str**| Name of the Log Analytics Workspace. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**List[IntelligencePack]**](IntelligencePack.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_list_management_groups**
> WorkspaceListManagementGroupsResult workspaces_list_management_groups(resource_group_name, workspace_name, api_version, subscription_id)



Gets a list of management groups connected to a workspace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workspace_list_management_groups_result import WorkspaceListManagementGroupsResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.workspaces_list_management_groups(resource_group_name, workspace_name, api_version, subscription_id)
        print("The response of WorkspacesApi->workspaces_list_management_groups:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_list_management_groups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**WorkspaceListManagementGroupsResult**](WorkspaceListManagementGroupsResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_list_usages**
> WorkspaceListUsagesResult workspaces_list_usages(resource_group_name, workspace_name, api_version, subscription_id)



Gets a list of usage metrics for a workspace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workspace_list_usages_result import WorkspaceListUsagesResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.workspaces_list_usages(resource_group_name, workspace_name, api_version, subscription_id)
        print("The response of WorkspacesApi->workspaces_list_usages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_list_usages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**WorkspaceListUsagesResult**](WorkspaceListUsagesResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_update**
> Workspace workspaces_update(resource_group_name, workspace_name, api_version, subscription_id, parameters)



Updates a workspace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workspace import Workspace
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the workspace.
    workspace_name = 'workspace_name_example' # str | The name of the workspace.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.Workspace() # Workspace | The parameters required to patch a workspace.

    try:
        api_response = api_instance.workspaces_update(resource_group_name, workspace_name, api_version, subscription_id, parameters)
        print("The response of WorkspacesApi->workspaces_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name of the workspace. | 
 **workspace_name** | **str**| The name of the workspace. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**Workspace**](Workspace.md)| The parameters required to patch a workspace. | 

### Return type

[**Workspace**](Workspace.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The existing workspace was successfully updated. Check provisioningStatus to see detailed status. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

