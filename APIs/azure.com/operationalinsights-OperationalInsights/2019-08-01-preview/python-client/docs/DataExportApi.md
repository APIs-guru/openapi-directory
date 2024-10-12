# openapi_client.DataExportApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**data_export_create_or_update**](DataExportApi.md#data_export_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/dataExports/{dataExportName} | 
[**data_export_delete**](DataExportApi.md#data_export_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/dataExports/{dataExportName} | 
[**data_export_get**](DataExportApi.md#data_export_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/dataExports/{dataExportName} | 
[**data_export_list_by_workspace**](DataExportApi.md#data_export_list_by_workspace) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/dataExports | 


# **data_export_create_or_update**
> DataExport data_export_create_or_update(subscription_id, resource_group_name, workspace_name, data_export_name, api_version, parameters)



Create or update a data export.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_export import DataExport
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
    api_instance = openapi_client.DataExportApi(api_client)
    subscription_id = 'subscription_id_example' # str | The workspace's resource subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The workspace's resource group name.
    workspace_name = 'workspace_name_example' # str | The Log Analytics workspace name.
    data_export_name = 'data_export_name_example' # str | The data export rule name.
    api_version = 'api_version_example' # str | The client API version.
    parameters = openapi_client.DataExport() # DataExport | The parameters required to create or update a data export.

    try:
        api_response = api_instance.data_export_create_or_update(subscription_id, resource_group_name, workspace_name, data_export_name, api_version, parameters)
        print("The response of DataExportApi->data_export_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataExportApi->data_export_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The workspace&#39;s resource subscription ID. | 
 **resource_group_name** | **str**| The workspace&#39;s resource group name. | 
 **workspace_name** | **str**| The Log Analytics workspace name. | 
 **data_export_name** | **str**| The data export rule name. | 
 **api_version** | **str**| The client API version. | 
 **parameters** | [**DataExport**](DataExport.md)| The parameters required to create or update a data export. | 

### Return type

[**DataExport**](DataExport.md)

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
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_export_delete**
> data_export_delete(subscription_id, resource_group_name, workspace_name, data_export_name, api_version)



Deletes the specified data export in a given workspace..

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
    api_instance = openapi_client.DataExportApi(api_client)
    subscription_id = 'subscription_id_example' # str | The workspace's resource subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The workspace's resource group name.
    workspace_name = 'workspace_name_example' # str | The Log Analytics workspace name.
    data_export_name = 'data_export_name_example' # str | The data export rule name.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_instance.data_export_delete(subscription_id, resource_group_name, workspace_name, data_export_name, api_version)
    except Exception as e:
        print("Exception when calling DataExportApi->data_export_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The workspace&#39;s resource subscription ID. | 
 **resource_group_name** | **str**| The workspace&#39;s resource group name. | 
 **workspace_name** | **str**| The Log Analytics workspace name. | 
 **data_export_name** | **str**| The data export rule name. | 
 **api_version** | **str**| The client API version. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**404** | Not found the specific data export. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_export_get**
> DataExport data_export_get(subscription_id, resource_group_name, workspace_name, data_export_name, api_version)



Gets a data export instance.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_export import DataExport
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
    api_instance = openapi_client.DataExportApi(api_client)
    subscription_id = 'subscription_id_example' # str | The workspace's resource subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The workspace's resource group name.
    workspace_name = 'workspace_name_example' # str | The Log Analytics workspace name.
    data_export_name = 'data_export_name_example' # str | The data export rule name.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_response = api_instance.data_export_get(subscription_id, resource_group_name, workspace_name, data_export_name, api_version)
        print("The response of DataExportApi->data_export_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataExportApi->data_export_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The workspace&#39;s resource subscription ID. | 
 **resource_group_name** | **str**| The workspace&#39;s resource group name. | 
 **workspace_name** | **str**| The Log Analytics workspace name. | 
 **data_export_name** | **str**| The data export rule name. | 
 **api_version** | **str**| The client API version. | 

### Return type

[**DataExport**](DataExport.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**404** | Not found the specific data export. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_export_list_by_workspace**
> DataExportListResult data_export_list_by_workspace(subscription_id, resource_group_name, workspace_name, api_version)



Lists the data export instances within a workspace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_export_list_result import DataExportListResult
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
    api_instance = openapi_client.DataExportApi(api_client)
    subscription_id = 'subscription_id_example' # str | The workspace's resource subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The workspace's resource group name.
    workspace_name = 'workspace_name_example' # str | The Log Analytics workspace name.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_response = api_instance.data_export_list_by_workspace(subscription_id, resource_group_name, workspace_name, api_version)
        print("The response of DataExportApi->data_export_list_by_workspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataExportApi->data_export_list_by_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The workspace&#39;s resource subscription ID. | 
 **resource_group_name** | **str**| The workspace&#39;s resource group name. | 
 **workspace_name** | **str**| The Log Analytics workspace name. | 
 **api_version** | **str**| The client API version. | 

### Return type

[**DataExportListResult**](DataExportListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

