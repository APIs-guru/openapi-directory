# openapi_client.WorkspacesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workspaces_delete_gateways**](WorkspacesApi.md#workspaces_delete_gateways) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/gateways/{gatewayId} | 
[**workspaces_get_purge_status**](WorkspacesApi.md#workspaces_get_purge_status) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/operations/{purgeId} | 
[**workspaces_get_schema**](WorkspacesApi.md#workspaces_get_schema) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/schema | 
[**workspaces_list_keys**](WorkspacesApi.md#workspaces_list_keys) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/listKeys | 
[**workspaces_list_link_targets**](WorkspacesApi.md#workspaces_list_link_targets) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.OperationalInsights/linkTargets | 
[**workspaces_purge**](WorkspacesApi.md#workspaces_purge) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/purge | 
[**workspaces_regenerate_shared_keys**](WorkspacesApi.md#workspaces_regenerate_shared_keys) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/regenerateSharedKey | 


# **workspaces_delete_gateways**
> workspaces_delete_gateways(subscription_id, resource_group_name, workspace_name, gateway_id, api_version)



Delete a Log Analytics gateway.

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
    subscription_id = 'subscription_id_example' # str | The Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Resource Group name.
    workspace_name = 'workspace_name_example' # str | The Log Analytics Workspace name.
    gateway_id = 'gateway_id_example' # str | The Log Analytics gateway Id.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_instance.workspaces_delete_gateways(subscription_id, resource_group_name, workspace_name, gateway_id, api_version)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_delete_gateways: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription ID. | 
 **resource_group_name** | **str**| The Resource Group name. | 
 **workspace_name** | **str**| The Log Analytics Workspace name. | 
 **gateway_id** | **str**| The Log Analytics gateway Id. | 
 **api_version** | **str**| The client API version. | 

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
**200** | The specified gateway was deleted successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_get_purge_status**
> WorkspacePurgeStatusResponse workspaces_get_purge_status(resource_group_name, api_version, subscription_id, workspace_name, purge_id)



Gets status of an ongoing purge operation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workspace_purge_status_response import WorkspacePurgeStatusResponse
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
    resource_group_name = 'resource_group_name_example' # str | The Resource Group name.
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Subscription ID.
    workspace_name = 'workspace_name_example' # str | The Log Analytics Workspace name.
    purge_id = 'purge_id_example' # str | In a purge status request, this is the Id of the operation the status of which is returned.

    try:
        api_response = api_instance.workspaces_get_purge_status(resource_group_name, api_version, subscription_id, workspace_name, purge_id)
        print("The response of WorkspacesApi->workspaces_get_purge_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_get_purge_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The Resource Group name. | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Subscription ID. | 
 **workspace_name** | **str**| The Log Analytics Workspace name. | 
 **purge_id** | **str**| In a purge status request, this is the Id of the operation the status of which is returned. | 

### Return type

[**WorkspacePurgeStatusResponse**](WorkspacePurgeStatusResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns status of purge operation in body of response. e.g.:  running, completed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_get_schema**
> SearchGetSchemaResponse workspaces_get_schema(resource_group_name, workspace_name, api_version, subscription_id)



Gets the schema for a given workspace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.search_get_schema_response import SearchGetSchemaResponse
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
    resource_group_name = 'resource_group_name_example' # str | The Resource Group name.
    workspace_name = 'workspace_name_example' # str | The Log Analytics Workspace name.
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Subscription ID.

    try:
        api_response = api_instance.workspaces_get_schema(resource_group_name, workspace_name, api_version, subscription_id)
        print("The response of WorkspacesApi->workspaces_get_schema:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_get_schema: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The Resource Group name. | 
 **workspace_name** | **str**| The Log Analytics Workspace name. | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Subscription ID. | 

### Return type

[**SearchGetSchemaResponse**](SearchGetSchemaResponse.md)

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

# **workspaces_list_keys**
> SharedKeys workspaces_list_keys(subscription_id, resource_group_name, workspace_name, api_version)



Gets the shared keys for a Log Analytics Workspace. These keys are used to connect Microsoft Operational Insights agents to the workspace.

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
    subscription_id = 'subscription_id_example' # str | The Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Resource Group name.
    workspace_name = 'workspace_name_example' # str | The Log Analytics Workspace name.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_response = api_instance.workspaces_list_keys(subscription_id, resource_group_name, workspace_name, api_version)
        print("The response of WorkspacesApi->workspaces_list_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_list_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription ID. | 
 **resource_group_name** | **str**| The Resource Group name. | 
 **workspace_name** | **str**| The Log Analytics Workspace name. | 
 **api_version** | **str**| The client API version. | 

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
**200** | Returns the shared keys associated with the Log Analytics Workspace. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_list_link_targets**
> List[LinkTarget] workspaces_list_link_targets(api_version, subscription_id)



Get a list of workspaces which the current user has administrator privileges and are not associated with an Azure Subscription. The subscriptionId parameter in the Url is ignored.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.link_target import LinkTarget
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
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Subscription ID.

    try:
        api_response = api_instance.workspaces_list_link_targets(api_version, subscription_id)
        print("The response of WorkspacesApi->workspaces_list_link_targets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_list_link_targets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Subscription ID. | 

### Return type

[**List[LinkTarget]**](LinkTarget.md)

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

# **workspaces_purge**
> WorkspacePurgeResponse workspaces_purge(resource_group_name, api_version, subscription_id, workspace_name, body)



Purges data in an Log Analytics workspace by a set of user-defined filters.  In order to manage system resources, purge requests are throttled at 50 requests per hour. You should batch the execution of purge requests by sending a single command whose predicate includes all user identities that require purging. Use the in operator to specify multiple identities. You should run the query prior to using for a purge request to verify that the results are expected.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workspace_purge_body import WorkspacePurgeBody
from openapi_client.models.workspace_purge_response import WorkspacePurgeResponse
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
    resource_group_name = 'resource_group_name_example' # str | The Resource Group name.
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Subscription ID.
    workspace_name = 'workspace_name_example' # str | The Log Analytics Workspace name.
    body = openapi_client.WorkspacePurgeBody() # WorkspacePurgeBody | Describes the body of a request to purge data in a single table of an Log Analytics Workspace

    try:
        api_response = api_instance.workspaces_purge(resource_group_name, api_version, subscription_id, workspace_name, body)
        print("The response of WorkspacesApi->workspaces_purge:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_purge: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The Resource Group name. | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Subscription ID. | 
 **workspace_name** | **str**| The Log Analytics Workspace name. | 
 **body** | [**WorkspacePurgeBody**](WorkspacePurgeBody.md)| Describes the body of a request to purge data in a single table of an Log Analytics Workspace | 

### Return type

[**WorkspacePurgeResponse**](WorkspacePurgeResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted request for purging an Log Analytics workspace. |  * x-ms-status-location - The location from which to request the operation status. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspaces_regenerate_shared_keys**
> SharedKeys workspaces_regenerate_shared_keys(subscription_id, resource_group_name, workspace_name, api_version)



Regenerates the shared keys for a Log Analytics Workspace. These keys are used to connect Microsoft Operational Insights agents to the workspace.

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
    subscription_id = 'subscription_id_example' # str | The Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Resource Group name.
    workspace_name = 'workspace_name_example' # str | The Log Analytics Workspace name.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_response = api_instance.workspaces_regenerate_shared_keys(subscription_id, resource_group_name, workspace_name, api_version)
        print("The response of WorkspacesApi->workspaces_regenerate_shared_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_regenerate_shared_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription ID. | 
 **resource_group_name** | **str**| The Resource Group name. | 
 **workspace_name** | **str**| The Log Analytics Workspace name. | 
 **api_version** | **str**| The client API version. | 

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
**200** | Returns the new shared keys associated with the Log Analytics Workspace. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

