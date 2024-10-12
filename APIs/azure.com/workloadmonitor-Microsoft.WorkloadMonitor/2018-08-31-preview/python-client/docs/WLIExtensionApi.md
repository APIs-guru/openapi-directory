# openapi_client.WLIExtensionApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**components_get**](WLIExtensionApi.md#components_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.WorkloadMonitor/components/{componentId} | Get details of a component.
[**components_list_by_resource**](WLIExtensionApi.md#components_list_by_resource) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.WorkloadMonitor/components | Get list of components for a resource.
[**monitor_instances_get**](WLIExtensionApi.md#monitor_instances_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.WorkloadMonitor/monitorInstances/{monitorInstanceId} | Get details of a monitorInstance.
[**monitor_instances_list_by_resource**](WLIExtensionApi.md#monitor_instances_list_by_resource) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.WorkloadMonitor/monitorInstances | Get list of monitor instances for a resource.
[**monitors_get**](WLIExtensionApi.md#monitors_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.WorkloadMonitor/monitors/{monitorId} | Get details of a single monitor.
[**monitors_list_by_resource**](WLIExtensionApi.md#monitors_list_by_resource) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.WorkloadMonitor/monitors | Get list of a monitors of a resource.
[**monitors_update**](WLIExtensionApi.md#monitors_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.WorkloadMonitor/monitors/{monitorId} | Update a Monitor&#39;s configuration.
[**notification_settings_get**](WLIExtensionApi.md#notification_settings_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.WorkloadMonitor/notificationSettings/{notificationSettingName} | Get a of notification setting for a resource.
[**notification_settings_list_by_resource**](WLIExtensionApi.md#notification_settings_list_by_resource) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.WorkloadMonitor/notificationSettings | Get list of notification settings for a resource.
[**notification_settings_update**](WLIExtensionApi.md#notification_settings_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.WorkloadMonitor/notificationSettings/{notificationSettingName} | Update notification settings for a resource.


# **components_get**
> Component components_get(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, component_id, api_version, select=select, expand=expand)

Get details of a component.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.component import Component
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
    api_instance = openapi_client.WLIExtensionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    resource_namespace = 'resource_namespace_example' # str | The Namespace of the resource.
    resource_type = 'resource_type_example' # str | The type of the resource.
    resource_name = 'resource_name_example' # str | Name of the resource.
    component_id = 'component_id_example' # str | Component Id.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    select = 'select_example' # str | Properties to be returned in the response. (optional)
    expand = 'expand_example' # str | Include properties inline in the response. (optional)

    try:
        # Get details of a component.
        api_response = api_instance.components_get(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, component_id, api_version, select=select, expand=expand)
        print("The response of WLIExtensionApi->components_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WLIExtensionApi->components_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_namespace** | **str**| The Namespace of the resource. | 
 **resource_type** | **str**| The type of the resource. | 
 **resource_name** | **str**| Name of the resource. | 
 **component_id** | **str**| Component Id. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **select** | **str**| Properties to be returned in the response. | [optional] 
 **expand** | **str**| Include properties inline in the response. | [optional] 

### Return type

[**Component**](Component.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. component is found. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **components_list_by_resource**
> ComponentsCollection components_list_by_resource(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, api_version, select=select, filter=filter, apply=apply, orderby=orderby, expand=expand, top=top, skiptoken=skiptoken)

Get list of components for a resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.components_collection import ComponentsCollection
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
    api_instance = openapi_client.WLIExtensionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    resource_namespace = 'resource_namespace_example' # str | The Namespace of the resource.
    resource_type = 'resource_type_example' # str | The type of the resource.
    resource_name = 'resource_name_example' # str | Name of the resource.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    select = 'select_example' # str | Properties to be returned in the response. (optional)
    filter = 'filter_example' # str | Filter to be applied on the operation. (optional)
    apply = 'apply_example' # str | Apply aggregation. (optional)
    orderby = 'orderby_example' # str | Sort the result on one or more properties. (optional)
    expand = 'expand_example' # str | Include properties inline in the response. (optional)
    top = 'top_example' # str | Limit the result to the specified number of rows. (optional)
    skiptoken = 'skiptoken_example' # str | The page-continuation token to use with a paged version of this API. (optional)

    try:
        # Get list of components for a resource.
        api_response = api_instance.components_list_by_resource(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, api_version, select=select, filter=filter, apply=apply, orderby=orderby, expand=expand, top=top, skiptoken=skiptoken)
        print("The response of WLIExtensionApi->components_list_by_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WLIExtensionApi->components_list_by_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_namespace** | **str**| The Namespace of the resource. | 
 **resource_type** | **str**| The type of the resource. | 
 **resource_name** | **str**| Name of the resource. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **select** | **str**| Properties to be returned in the response. | [optional] 
 **filter** | **str**| Filter to be applied on the operation. | [optional] 
 **apply** | **str**| Apply aggregation. | [optional] 
 **orderby** | **str**| Sort the result on one or more properties. | [optional] 
 **expand** | **str**| Include properties inline in the response. | [optional] 
 **top** | **str**| Limit the result to the specified number of rows. | [optional] 
 **skiptoken** | **str**| The page-continuation token to use with a paged version of this API. | [optional] 

### Return type

[**ComponentsCollection**](ComponentsCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. At least one component found. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **monitor_instances_get**
> MonitorInstance monitor_instances_get(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, monitor_instance_id, api_version, select=select, expand=expand)

Get details of a monitorInstance.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.monitor_instance import MonitorInstance
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
    api_instance = openapi_client.WLIExtensionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    resource_namespace = 'resource_namespace_example' # str | The Namespace of the resource.
    resource_type = 'resource_type_example' # str | The type of the resource.
    resource_name = 'resource_name_example' # str | Name of the resource.
    monitor_instance_id = 'monitor_instance_id_example' # str | MonitorInstance Id.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    select = 'select_example' # str | Properties to be returned in the response. (optional)
    expand = 'expand_example' # str | Include properties inline in the response. (optional)

    try:
        # Get details of a monitorInstance.
        api_response = api_instance.monitor_instances_get(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, monitor_instance_id, api_version, select=select, expand=expand)
        print("The response of WLIExtensionApi->monitor_instances_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WLIExtensionApi->monitor_instances_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_namespace** | **str**| The Namespace of the resource. | 
 **resource_type** | **str**| The type of the resource. | 
 **resource_name** | **str**| Name of the resource. | 
 **monitor_instance_id** | **str**| MonitorInstance Id. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **select** | **str**| Properties to be returned in the response. | [optional] 
 **expand** | **str**| Include properties inline in the response. | [optional] 

### Return type

[**MonitorInstance**](MonitorInstance.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. monitorInstance is found. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **monitor_instances_list_by_resource**
> MonitorInstancesCollection monitor_instances_list_by_resource(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, api_version, select=select, filter=filter, apply=apply, orderby=orderby, expand=expand, top=top, skiptoken=skiptoken)

Get list of monitor instances for a resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.monitor_instances_collection import MonitorInstancesCollection
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
    api_instance = openapi_client.WLIExtensionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    resource_namespace = 'resource_namespace_example' # str | The Namespace of the resource.
    resource_type = 'resource_type_example' # str | The type of the resource.
    resource_name = 'resource_name_example' # str | Name of the resource.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    select = 'select_example' # str | Properties to be returned in the response. (optional)
    filter = 'filter_example' # str | Filter to be applied on the operation. (optional)
    apply = 'apply_example' # str | Apply aggregation. (optional)
    orderby = 'orderby_example' # str | Sort the result on one or more properties. (optional)
    expand = 'expand_example' # str | Include properties inline in the response. (optional)
    top = 'top_example' # str | Limit the result to the specified number of rows. (optional)
    skiptoken = 'skiptoken_example' # str | The page-continuation token to use with a paged version of this API. (optional)

    try:
        # Get list of monitor instances for a resource.
        api_response = api_instance.monitor_instances_list_by_resource(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, api_version, select=select, filter=filter, apply=apply, orderby=orderby, expand=expand, top=top, skiptoken=skiptoken)
        print("The response of WLIExtensionApi->monitor_instances_list_by_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WLIExtensionApi->monitor_instances_list_by_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_namespace** | **str**| The Namespace of the resource. | 
 **resource_type** | **str**| The type of the resource. | 
 **resource_name** | **str**| Name of the resource. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **select** | **str**| Properties to be returned in the response. | [optional] 
 **filter** | **str**| Filter to be applied on the operation. | [optional] 
 **apply** | **str**| Apply aggregation. | [optional] 
 **orderby** | **str**| Sort the result on one or more properties. | [optional] 
 **expand** | **str**| Include properties inline in the response. | [optional] 
 **top** | **str**| Limit the result to the specified number of rows. | [optional] 
 **skiptoken** | **str**| The page-continuation token to use with a paged version of this API. | [optional] 

### Return type

[**MonitorInstancesCollection**](MonitorInstancesCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **monitors_get**
> Monitor monitors_get(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, monitor_id, api_version)

Get details of a single monitor.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.monitor import Monitor
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
    api_instance = openapi_client.WLIExtensionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    resource_namespace = 'resource_namespace_example' # str | The Namespace of the resource.
    resource_type = 'resource_type_example' # str | The type of the resource.
    resource_name = 'resource_name_example' # str | Name of the resource.
    monitor_id = 'monitor_id_example' # str | Monitor Id.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        # Get details of a single monitor.
        api_response = api_instance.monitors_get(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, monitor_id, api_version)
        print("The response of WLIExtensionApi->monitors_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WLIExtensionApi->monitors_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_namespace** | **str**| The Namespace of the resource. | 
 **resource_type** | **str**| The type of the resource. | 
 **resource_name** | **str**| Name of the resource. | 
 **monitor_id** | **str**| Monitor Id. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**Monitor**](Monitor.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. monitor is found. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **monitors_list_by_resource**
> MonitorsCollection monitors_list_by_resource(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, api_version, filter=filter, skiptoken=skiptoken)

Get list of a monitors of a resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.monitors_collection import MonitorsCollection
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
    api_instance = openapi_client.WLIExtensionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    resource_namespace = 'resource_namespace_example' # str | The Namespace of the resource.
    resource_type = 'resource_type_example' # str | The type of the resource.
    resource_name = 'resource_name_example' # str | Name of the resource.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    filter = 'filter_example' # str | Filter to be applied on the operation. (optional)
    skiptoken = 'skiptoken_example' # str | The page-continuation token to use with a paged version of this API. (optional)

    try:
        # Get list of a monitors of a resource.
        api_response = api_instance.monitors_list_by_resource(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, api_version, filter=filter, skiptoken=skiptoken)
        print("The response of WLIExtensionApi->monitors_list_by_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WLIExtensionApi->monitors_list_by_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_namespace** | **str**| The Namespace of the resource. | 
 **resource_type** | **str**| The type of the resource. | 
 **resource_name** | **str**| Name of the resource. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **filter** | **str**| Filter to be applied on the operation. | [optional] 
 **skiptoken** | **str**| The page-continuation token to use with a paged version of this API. | [optional] 

### Return type

[**MonitorsCollection**](MonitorsCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. At least one monitor is found. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **monitors_update**
> Monitor monitors_update(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, monitor_id, api_version, body)

Update a Monitor's configuration.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.monitor import Monitor
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
    api_instance = openapi_client.WLIExtensionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    resource_namespace = 'resource_namespace_example' # str | The Namespace of the resource.
    resource_type = 'resource_type_example' # str | The type of the resource.
    resource_name = 'resource_name_example' # str | Name of the resource.
    monitor_id = 'monitor_id_example' # str | Monitor Id.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    body = openapi_client.Monitor() # Monitor | Body of the Monitor PATCH object.

    try:
        # Update a Monitor's configuration.
        api_response = api_instance.monitors_update(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, monitor_id, api_version, body)
        print("The response of WLIExtensionApi->monitors_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WLIExtensionApi->monitors_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_namespace** | **str**| The Namespace of the resource. | 
 **resource_type** | **str**| The type of the resource. | 
 **resource_name** | **str**| Name of the resource. | 
 **monitor_id** | **str**| Monitor Id. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **body** | [**Monitor**](Monitor.md)| Body of the Monitor PATCH object. | 

### Return type

[**Monitor**](Monitor.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Existing monitor is updated. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notification_settings_get**
> NotificationSetting notification_settings_get(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, notification_setting_name, api_version)

Get a of notification setting for a resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.notification_setting import NotificationSetting
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
    api_instance = openapi_client.WLIExtensionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    resource_namespace = 'resource_namespace_example' # str | The Namespace of the resource.
    resource_type = 'resource_type_example' # str | The type of the resource.
    resource_name = 'resource_name_example' # str | Name of the resource.
    notification_setting_name = 'notification_setting_name_example' # str | Default string modeled as parameter for URL to work correctly.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        # Get a of notification setting for a resource.
        api_response = api_instance.notification_settings_get(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, notification_setting_name, api_version)
        print("The response of WLIExtensionApi->notification_settings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WLIExtensionApi->notification_settings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_namespace** | **str**| The Namespace of the resource. | 
 **resource_type** | **str**| The type of the resource. | 
 **resource_name** | **str**| Name of the resource. | 
 **notification_setting_name** | **str**| Default string modeled as parameter for URL to work correctly. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**NotificationSetting**](NotificationSetting.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. At least one component found. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notification_settings_list_by_resource**
> NotificationSettingsCollection notification_settings_list_by_resource(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, api_version, skiptoken=skiptoken)

Get list of notification settings for a resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.notification_settings_collection import NotificationSettingsCollection
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
    api_instance = openapi_client.WLIExtensionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    resource_namespace = 'resource_namespace_example' # str | The Namespace of the resource.
    resource_type = 'resource_type_example' # str | The type of the resource.
    resource_name = 'resource_name_example' # str | Name of the resource.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    skiptoken = 'skiptoken_example' # str | The page-continuation token to use with a paged version of this API. (optional)

    try:
        # Get list of notification settings for a resource.
        api_response = api_instance.notification_settings_list_by_resource(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, api_version, skiptoken=skiptoken)
        print("The response of WLIExtensionApi->notification_settings_list_by_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WLIExtensionApi->notification_settings_list_by_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_namespace** | **str**| The Namespace of the resource. | 
 **resource_type** | **str**| The type of the resource. | 
 **resource_name** | **str**| Name of the resource. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **skiptoken** | **str**| The page-continuation token to use with a paged version of this API. | [optional] 

### Return type

[**NotificationSettingsCollection**](NotificationSettingsCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. At least one component found. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notification_settings_update**
> NotificationSetting notification_settings_update(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, notification_setting_name, api_version, body)

Update notification settings for a resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.notification_setting import NotificationSetting
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
    api_instance = openapi_client.WLIExtensionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    resource_namespace = 'resource_namespace_example' # str | The Namespace of the resource.
    resource_type = 'resource_type_example' # str | The type of the resource.
    resource_name = 'resource_name_example' # str | Name of the resource.
    notification_setting_name = 'notification_setting_name_example' # str | Default string modeled as parameter for URL to work correctly.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    body = openapi_client.NotificationSetting() # NotificationSetting | Body of the NotificationSetting PUT object.

    try:
        # Update notification settings for a resource.
        api_response = api_instance.notification_settings_update(subscription_id, resource_group_name, resource_namespace, resource_type, resource_name, notification_setting_name, api_version, body)
        print("The response of WLIExtensionApi->notification_settings_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WLIExtensionApi->notification_settings_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_namespace** | **str**| The Namespace of the resource. | 
 **resource_type** | **str**| The type of the resource. | 
 **resource_name** | **str**| Name of the resource. | 
 **notification_setting_name** | **str**| Default string modeled as parameter for URL to work correctly. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **body** | [**NotificationSetting**](NotificationSetting.md)| Body of the NotificationSetting PUT object. | 

### Return type

[**NotificationSetting**](NotificationSetting.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. At least one component found. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

