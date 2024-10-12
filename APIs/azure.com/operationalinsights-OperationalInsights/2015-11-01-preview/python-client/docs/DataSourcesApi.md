# openapi_client.DataSourcesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**data_sources_create_or_update**](DataSourcesApi.md#data_sources_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/dataSources/{dataSourceName} | 
[**data_sources_delete**](DataSourcesApi.md#data_sources_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/dataSources/{dataSourceName} | 
[**data_sources_get**](DataSourcesApi.md#data_sources_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/dataSources/{dataSourceName} | 
[**data_sources_list_by_workspace**](DataSourcesApi.md#data_sources_list_by_workspace) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/dataSources | 


# **data_sources_create_or_update**
> DataSource data_sources_create_or_update(resource_group_name, workspace_name, data_source_name, api_version, subscription_id, parameters)



Create or update a data source.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_source import DataSource
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
    api_instance = openapi_client.DataSourcesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    workspace_name = 'workspace_name_example' # str | Name of the Log Analytics Workspace that will contain the datasource
    data_source_name = 'data_source_name_example' # str | The name of the datasource resource.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.DataSource() # DataSource | The parameters required to create or update a datasource.

    try:
        api_response = api_instance.data_sources_create_or_update(resource_group_name, workspace_name, data_source_name, api_version, subscription_id, parameters)
        print("The response of DataSourcesApi->data_sources_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataSourcesApi->data_sources_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **workspace_name** | **str**| Name of the Log Analytics Workspace that will contain the datasource | 
 **data_source_name** | **str**| The name of the datasource resource. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**DataSource**](DataSource.md)| The parameters required to create or update a datasource. | 

### Return type

[**DataSource**](DataSource.md)

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

# **data_sources_delete**
> data_sources_delete(resource_group_name, workspace_name, data_source_name, api_version, subscription_id)



Deletes a data source instance.

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
    api_instance = openapi_client.DataSourcesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    workspace_name = 'workspace_name_example' # str | Name of the Log Analytics Workspace that contains the datasource.
    data_source_name = 'data_source_name_example' # str | Name of the datasource.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.data_sources_delete(resource_group_name, workspace_name, data_source_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling DataSourcesApi->data_sources_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **workspace_name** | **str**| Name of the Log Analytics Workspace that contains the datasource. | 
 **data_source_name** | **str**| Name of the datasource. | 
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

# **data_sources_get**
> DataSource data_sources_get(resource_group_name, workspace_name, data_source_name, api_version, subscription_id)



Gets a datasource instance.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_source import DataSource
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
    api_instance = openapi_client.DataSourcesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    workspace_name = 'workspace_name_example' # str | Name of the Log Analytics Workspace that contains the datasource.
    data_source_name = 'data_source_name_example' # str | Name of the datasource
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.data_sources_get(resource_group_name, workspace_name, data_source_name, api_version, subscription_id)
        print("The response of DataSourcesApi->data_sources_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataSourcesApi->data_sources_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **workspace_name** | **str**| Name of the Log Analytics Workspace that contains the datasource. | 
 **data_source_name** | **str**| Name of the datasource | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**DataSource**](DataSource.md)

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

# **data_sources_list_by_workspace**
> DataSourceListResult data_sources_list_by_workspace(resource_group_name, workspace_name, filter, api_version, subscription_id, skiptoken=skiptoken)



Gets the first page of data source instances in a workspace with the link to the next page.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_source_list_result import DataSourceListResult
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
    api_instance = openapi_client.DataSourcesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    workspace_name = 'workspace_name_example' # str | The workspace that contains the data sources.
    filter = 'filter_example' # str | The filter to apply on the operation.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    skiptoken = 'skiptoken_example' # str | Starting point of the collection of data source instances. (optional)

    try:
        api_response = api_instance.data_sources_list_by_workspace(resource_group_name, workspace_name, filter, api_version, subscription_id, skiptoken=skiptoken)
        print("The response of DataSourcesApi->data_sources_list_by_workspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataSourcesApi->data_sources_list_by_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **workspace_name** | **str**| The workspace that contains the data sources. | 
 **filter** | **str**| The filter to apply on the operation. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **skiptoken** | **str**| Starting point of the collection of data source instances. | [optional] 

### Return type

[**DataSourceListResult**](DataSourceListResult.md)

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

