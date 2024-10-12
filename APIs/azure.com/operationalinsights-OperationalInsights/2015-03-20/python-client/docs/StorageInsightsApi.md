# openapi_client.StorageInsightsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storage_insights_create_or_update**](StorageInsightsApi.md#storage_insights_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/storageInsightConfigs/{storageInsightName} | 
[**storage_insights_delete**](StorageInsightsApi.md#storage_insights_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/storageInsightConfigs/{storageInsightName} | 
[**storage_insights_get**](StorageInsightsApi.md#storage_insights_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/storageInsightConfigs/{storageInsightName} | 
[**storage_insights_list_by_workspace**](StorageInsightsApi.md#storage_insights_list_by_workspace) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/storageInsightConfigs | 


# **storage_insights_create_or_update**
> StorageInsight storage_insights_create_or_update(resource_group_name, workspace_name, storage_insight_name, api_version, subscription_id, parameters)



Create or update a storage insight.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_insight import StorageInsight
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
    api_instance = openapi_client.StorageInsightsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The Resource Group name.
    workspace_name = 'workspace_name_example' # str | The Log Analytics Workspace name.
    storage_insight_name = 'storage_insight_name_example' # str | Name of the storageInsightsConfigs resource
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Subscription ID.
    parameters = openapi_client.StorageInsight() # StorageInsight | The parameters required to create or update a storage insight.

    try:
        api_response = api_instance.storage_insights_create_or_update(resource_group_name, workspace_name, storage_insight_name, api_version, subscription_id, parameters)
        print("The response of StorageInsightsApi->storage_insights_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageInsightsApi->storage_insights_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The Resource Group name. | 
 **workspace_name** | **str**| The Log Analytics Workspace name. | 
 **storage_insight_name** | **str**| Name of the storageInsightsConfigs resource | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Subscription ID. | 
 **parameters** | [**StorageInsight**](StorageInsight.md)| The parameters required to create or update a storage insight. | 

### Return type

[**StorageInsight**](StorageInsight.md)

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

# **storage_insights_delete**
> storage_insights_delete(resource_group_name, workspace_name, storage_insight_name, api_version, subscription_id)



Deletes a storageInsightsConfigs resource

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
    api_instance = openapi_client.StorageInsightsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The Resource Group name.
    workspace_name = 'workspace_name_example' # str | The Log Analytics Workspace name.
    storage_insight_name = 'storage_insight_name_example' # str | Name of the storageInsightsConfigs resource
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Subscription ID.

    try:
        api_instance.storage_insights_delete(resource_group_name, workspace_name, storage_insight_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling StorageInsightsApi->storage_insights_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The Resource Group name. | 
 **workspace_name** | **str**| The Log Analytics Workspace name. | 
 **storage_insight_name** | **str**| Name of the storageInsightsConfigs resource | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Subscription ID. | 

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

# **storage_insights_get**
> StorageInsight storage_insights_get(resource_group_name, workspace_name, storage_insight_name, api_version, subscription_id)



Gets a storage insight instance.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_insight import StorageInsight
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
    api_instance = openapi_client.StorageInsightsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The Resource Group name.
    workspace_name = 'workspace_name_example' # str | The Log Analytics Workspace name.
    storage_insight_name = 'storage_insight_name_example' # str | Name of the storageInsightsConfigs resource
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Subscription ID.

    try:
        api_response = api_instance.storage_insights_get(resource_group_name, workspace_name, storage_insight_name, api_version, subscription_id)
        print("The response of StorageInsightsApi->storage_insights_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageInsightsApi->storage_insights_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The Resource Group name. | 
 **workspace_name** | **str**| The Log Analytics Workspace name. | 
 **storage_insight_name** | **str**| Name of the storageInsightsConfigs resource | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Subscription ID. | 

### Return type

[**StorageInsight**](StorageInsight.md)

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

# **storage_insights_list_by_workspace**
> StorageInsightListResult storage_insights_list_by_workspace(resource_group_name, workspace_name, api_version, subscription_id)



Lists the storage insight instances within a workspace

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_insight_list_result import StorageInsightListResult
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
    api_instance = openapi_client.StorageInsightsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The Resource Group name.
    workspace_name = 'workspace_name_example' # str | The Log Analytics Workspace name.
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Subscription ID.

    try:
        api_response = api_instance.storage_insights_list_by_workspace(resource_group_name, workspace_name, api_version, subscription_id)
        print("The response of StorageInsightsApi->storage_insights_list_by_workspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageInsightsApi->storage_insights_list_by_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The Resource Group name. | 
 **workspace_name** | **str**| The Log Analytics Workspace name. | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Subscription ID. | 

### Return type

[**StorageInsightListResult**](StorageInsightListResult.md)

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

