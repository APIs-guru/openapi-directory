# openapi_client.AppServiceEnvironmentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**app_service_environments_create_or_update**](AppServiceEnvironmentsApi.md#app_service_environments_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name} | Create or update an App Service Environment.
[**app_service_environments_create_or_update_multi_role_pool**](AppServiceEnvironmentsApi.md#app_service_environments_create_or_update_multi_role_pool) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools/default | Create or update a multi-role pool.
[**app_service_environments_create_or_update_worker_pool**](AppServiceEnvironmentsApi.md#app_service_environments_create_or_update_worker_pool) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools/{workerPoolName} | Create or update a worker pool.
[**app_service_environments_delete**](AppServiceEnvironmentsApi.md#app_service_environments_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name} | Delete an App Service Environment.
[**app_service_environments_get**](AppServiceEnvironmentsApi.md#app_service_environments_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name} | Get the properties of an App Service Environment.
[**app_service_environments_get_diagnostics_item**](AppServiceEnvironmentsApi.md#app_service_environments_get_diagnostics_item) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/diagnostics/{diagnosticsName} | Get a diagnostics item for an App Service Environment.
[**app_service_environments_get_multi_role_pool**](AppServiceEnvironmentsApi.md#app_service_environments_get_multi_role_pool) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools/default | Get properties of a multi-role pool.
[**app_service_environments_get_worker_pool**](AppServiceEnvironmentsApi.md#app_service_environments_get_worker_pool) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools/{workerPoolName} | Get properties of a worker pool.
[**app_service_environments_list**](AppServiceEnvironmentsApi.md#app_service_environments_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/hostingEnvironments | Get all App Service Environments for a subscription.
[**app_service_environments_list_app_service_plans**](AppServiceEnvironmentsApi.md#app_service_environments_list_app_service_plans) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/serverfarms | Get all App Service plans in an App Service Environment.
[**app_service_environments_list_by_resource_group**](AppServiceEnvironmentsApi.md#app_service_environments_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments | Get all App Service Environments in a resource group.
[**app_service_environments_list_capacities**](AppServiceEnvironmentsApi.md#app_service_environments_list_capacities) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/capacities/compute | Get the used, available, and total worker capacity an App Service Environment.
[**app_service_environments_list_diagnostics**](AppServiceEnvironmentsApi.md#app_service_environments_list_diagnostics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/diagnostics | Get diagnostic information for an App Service Environment.
[**app_service_environments_list_metric_definitions**](AppServiceEnvironmentsApi.md#app_service_environments_list_metric_definitions) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/metricdefinitions | Get global metric definitions of an App Service Environment.
[**app_service_environments_list_metrics**](AppServiceEnvironmentsApi.md#app_service_environments_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/metrics | Get global metrics of an App Service Environment.
[**app_service_environments_list_multi_role_metric_definitions**](AppServiceEnvironmentsApi.md#app_service_environments_list_multi_role_metric_definitions) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools/default/metricdefinitions | Get metric definitions for a multi-role pool of an App Service Environment.
[**app_service_environments_list_multi_role_metrics**](AppServiceEnvironmentsApi.md#app_service_environments_list_multi_role_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools/default/metrics | Get metrics for a multi-role pool of an App Service Environment.
[**app_service_environments_list_multi_role_pool_instance_metric_definitions**](AppServiceEnvironmentsApi.md#app_service_environments_list_multi_role_pool_instance_metric_definitions) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools/default/instances/{instance}/metricdefinitions | Get metric definitions for a specific instance of a multi-role pool of an App Service Environment.
[**app_service_environments_list_multi_role_pool_instance_metrics**](AppServiceEnvironmentsApi.md#app_service_environments_list_multi_role_pool_instance_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools/default/instances/{instance}/metrics | Get metrics for a specific instance of a multi-role pool of an App Service Environment.
[**app_service_environments_list_multi_role_pool_skus**](AppServiceEnvironmentsApi.md#app_service_environments_list_multi_role_pool_skus) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools/default/skus | Get available SKUs for scaling a multi-role pool.
[**app_service_environments_list_multi_role_pools**](AppServiceEnvironmentsApi.md#app_service_environments_list_multi_role_pools) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools | Get all multi-role pools.
[**app_service_environments_list_multi_role_usages**](AppServiceEnvironmentsApi.md#app_service_environments_list_multi_role_usages) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools/default/usages | Get usage metrics for a multi-role pool of an App Service Environment.
[**app_service_environments_list_operations**](AppServiceEnvironmentsApi.md#app_service_environments_list_operations) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/operations | List all currently running operations on the App Service Environment.
[**app_service_environments_list_usages**](AppServiceEnvironmentsApi.md#app_service_environments_list_usages) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/usages | Get global usage metrics of an App Service Environment.
[**app_service_environments_list_vips**](AppServiceEnvironmentsApi.md#app_service_environments_list_vips) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/capacities/virtualip | Get IP addresses assigned to an App Service Environment.
[**app_service_environments_list_web_apps**](AppServiceEnvironmentsApi.md#app_service_environments_list_web_apps) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/sites | Get all apps in an App Service Environment.
[**app_service_environments_list_web_worker_metric_definitions**](AppServiceEnvironmentsApi.md#app_service_environments_list_web_worker_metric_definitions) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools/{workerPoolName}/metricdefinitions | Get metric definitions for a worker pool of an App Service Environment.
[**app_service_environments_list_web_worker_metrics**](AppServiceEnvironmentsApi.md#app_service_environments_list_web_worker_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools/{workerPoolName}/metrics | Get metrics for a worker pool of a AppServiceEnvironment (App Service Environment).
[**app_service_environments_list_web_worker_usages**](AppServiceEnvironmentsApi.md#app_service_environments_list_web_worker_usages) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools/{workerPoolName}/usages | Get usage metrics for a worker pool of an App Service Environment.
[**app_service_environments_list_worker_pool_instance_metric_definitions**](AppServiceEnvironmentsApi.md#app_service_environments_list_worker_pool_instance_metric_definitions) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools/{workerPoolName}/instances/{instance}/metricdefinitions | Get metric definitions for a specific instance of a worker pool of an App Service Environment.
[**app_service_environments_list_worker_pool_instance_metrics**](AppServiceEnvironmentsApi.md#app_service_environments_list_worker_pool_instance_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools/{workerPoolName}/instances/{instance}/metrics | Get metrics for a specific instance of a worker pool of an App Service Environment.
[**app_service_environments_list_worker_pool_skus**](AppServiceEnvironmentsApi.md#app_service_environments_list_worker_pool_skus) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools/{workerPoolName}/skus | Get available SKUs for scaling a worker pool.
[**app_service_environments_list_worker_pools**](AppServiceEnvironmentsApi.md#app_service_environments_list_worker_pools) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools | Get all worker pools of an App Service Environment.
[**app_service_environments_reboot**](AppServiceEnvironmentsApi.md#app_service_environments_reboot) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/reboot | Reboot all machines in an App Service Environment.
[**app_service_environments_resume**](AppServiceEnvironmentsApi.md#app_service_environments_resume) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/resume | Resume an App Service Environment.
[**app_service_environments_suspend**](AppServiceEnvironmentsApi.md#app_service_environments_suspend) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/suspend | Suspend an App Service Environment.
[**app_service_environments_update**](AppServiceEnvironmentsApi.md#app_service_environments_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name} | Create or update an App Service Environment.
[**app_service_environments_update_multi_role_pool**](AppServiceEnvironmentsApi.md#app_service_environments_update_multi_role_pool) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools/default | Create or update a multi-role pool.
[**app_service_environments_update_worker_pool**](AppServiceEnvironmentsApi.md#app_service_environments_update_worker_pool) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools/{workerPoolName} | Create or update a worker pool.


# **app_service_environments_create_or_update**
> AppServiceEnvironmentResource app_service_environments_create_or_update(resource_group_name, name, subscription_id, api_version, hosting_environment_envelope)

Create or update an App Service Environment.

Create or update an App Service Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_environment_resource import AppServiceEnvironmentResource
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    hosting_environment_envelope = openapi_client.AppServiceEnvironmentResource() # AppServiceEnvironmentResource | Configuration details of the App Service Environment.

    try:
        # Create or update an App Service Environment.
        api_response = api_instance.app_service_environments_create_or_update(resource_group_name, name, subscription_id, api_version, hosting_environment_envelope)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **hosting_environment_envelope** | [**AppServiceEnvironmentResource**](AppServiceEnvironmentResource.md)| Configuration details of the App Service Environment. | 

### Return type

[**AppServiceEnvironmentResource**](AppServiceEnvironmentResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Operation is in progress. |  -  |
**400** | Bad request. |  -  |
**404** | Not found. |  -  |
**409** | Conflict. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_create_or_update_multi_role_pool**
> WorkerPoolResource app_service_environments_create_or_update_multi_role_pool(resource_group_name, name, subscription_id, api_version, multi_role_pool_envelope)

Create or update a multi-role pool.

Create or update a multi-role pool.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.worker_pool_resource import WorkerPoolResource
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    multi_role_pool_envelope = openapi_client.WorkerPoolResource() # WorkerPoolResource | Properties of the multi-role pool.

    try:
        # Create or update a multi-role pool.
        api_response = api_instance.app_service_environments_create_or_update_multi_role_pool(resource_group_name, name, subscription_id, api_version, multi_role_pool_envelope)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_create_or_update_multi_role_pool:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_create_or_update_multi_role_pool: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **multi_role_pool_envelope** | [**WorkerPoolResource**](WorkerPoolResource.md)| Properties of the multi-role pool. | 

### Return type

[**WorkerPoolResource**](WorkerPoolResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**202** | Operation is in progress. |  -  |
**400** | Bad request. |  -  |
**404** | Not found. |  -  |
**409** | Conflict. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_create_or_update_worker_pool**
> WorkerPoolResource app_service_environments_create_or_update_worker_pool(resource_group_name, name, worker_pool_name, subscription_id, api_version, worker_pool_envelope)

Create or update a worker pool.

Create or update a worker pool.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.worker_pool_resource import WorkerPoolResource
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    worker_pool_name = 'worker_pool_name_example' # str | Name of the worker pool.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    worker_pool_envelope = openapi_client.WorkerPoolResource() # WorkerPoolResource | Properties of the worker pool.

    try:
        # Create or update a worker pool.
        api_response = api_instance.app_service_environments_create_or_update_worker_pool(resource_group_name, name, worker_pool_name, subscription_id, api_version, worker_pool_envelope)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_create_or_update_worker_pool:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_create_or_update_worker_pool: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **worker_pool_name** | **str**| Name of the worker pool. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **worker_pool_envelope** | [**WorkerPoolResource**](WorkerPoolResource.md)| Properties of the worker pool. | 

### Return type

[**WorkerPoolResource**](WorkerPoolResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**202** | Operation is in progress. |  -  |
**400** | Bad request. |  -  |
**404** | Not found. |  -  |
**409** | Conflict. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_delete**
> app_service_environments_delete(resource_group_name, name, subscription_id, api_version, force_delete=force_delete)

Delete an App Service Environment.

Delete an App Service Environment.

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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    force_delete = True # bool | Specify <code>true</code> to force the deletion even if the App Service Environment contains resources. The default is <code>false</code>. (optional)

    try:
        # Delete an App Service Environment.
        api_instance.app_service_environments_delete(resource_group_name, name, subscription_id, api_version, force_delete=force_delete)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **force_delete** | **bool**| Specify &lt;code&gt;true&lt;/code&gt; to force the deletion even if the App Service Environment contains resources. The default is &lt;code&gt;false&lt;/code&gt;. | [optional] 

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
**202** | Operation is in progress. |  -  |
**204** | App Service Environment does not exist |  -  |
**400** | Bad request. |  -  |
**404** | Not found. |  -  |
**409** | Conflict. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_get**
> AppServiceEnvironmentResource app_service_environments_get(resource_group_name, name, subscription_id, api_version)

Get the properties of an App Service Environment.

Get the properties of an App Service Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_environment_resource import AppServiceEnvironmentResource
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get the properties of an App Service Environment.
        api_response = api_instance.app_service_environments_get(resource_group_name, name, subscription_id, api_version)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**AppServiceEnvironmentResource**](AppServiceEnvironmentResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_get_diagnostics_item**
> HostingEnvironmentDiagnostics app_service_environments_get_diagnostics_item(resource_group_name, name, diagnostics_name, subscription_id, api_version)

Get a diagnostics item for an App Service Environment.

Get a diagnostics item for an App Service Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hosting_environment_diagnostics import HostingEnvironmentDiagnostics
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    diagnostics_name = 'diagnostics_name_example' # str | Name of the diagnostics item.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get a diagnostics item for an App Service Environment.
        api_response = api_instance.app_service_environments_get_diagnostics_item(resource_group_name, name, diagnostics_name, subscription_id, api_version)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_get_diagnostics_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_get_diagnostics_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **diagnostics_name** | **str**| Name of the diagnostics item. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**HostingEnvironmentDiagnostics**](HostingEnvironmentDiagnostics.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_get_multi_role_pool**
> WorkerPoolResource app_service_environments_get_multi_role_pool(resource_group_name, name, subscription_id, api_version)

Get properties of a multi-role pool.

Get properties of a multi-role pool.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.worker_pool_resource import WorkerPoolResource
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get properties of a multi-role pool.
        api_response = api_instance.app_service_environments_get_multi_role_pool(resource_group_name, name, subscription_id, api_version)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_get_multi_role_pool:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_get_multi_role_pool: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**WorkerPoolResource**](WorkerPoolResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_get_worker_pool**
> WorkerPoolResource app_service_environments_get_worker_pool(resource_group_name, name, worker_pool_name, subscription_id, api_version)

Get properties of a worker pool.

Get properties of a worker pool.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.worker_pool_resource import WorkerPoolResource
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    worker_pool_name = 'worker_pool_name_example' # str | Name of the worker pool.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get properties of a worker pool.
        api_response = api_instance.app_service_environments_get_worker_pool(resource_group_name, name, worker_pool_name, subscription_id, api_version)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_get_worker_pool:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_get_worker_pool: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **worker_pool_name** | **str**| Name of the worker pool. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**WorkerPoolResource**](WorkerPoolResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_list**
> AppServiceEnvironmentCollection app_service_environments_list(subscription_id, api_version)

Get all App Service Environments for a subscription.

Get all App Service Environments for a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_environment_collection import AppServiceEnvironmentCollection
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all App Service Environments for a subscription.
        api_response = api_instance.app_service_environments_list(subscription_id, api_version)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**AppServiceEnvironmentCollection**](AppServiceEnvironmentCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_list_app_service_plans**
> AppServiceEnvironmentsListAppServicePlans200Response app_service_environments_list_app_service_plans(resource_group_name, name, subscription_id, api_version)

Get all App Service plans in an App Service Environment.

Get all App Service plans in an App Service Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_environments_list_app_service_plans200_response import AppServiceEnvironmentsListAppServicePlans200Response
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all App Service plans in an App Service Environment.
        api_response = api_instance.app_service_environments_list_app_service_plans(resource_group_name, name, subscription_id, api_version)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_list_app_service_plans:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_list_app_service_plans: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**AppServiceEnvironmentsListAppServicePlans200Response**](AppServiceEnvironmentsListAppServicePlans200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_list_by_resource_group**
> AppServiceEnvironmentCollection app_service_environments_list_by_resource_group(resource_group_name, subscription_id, api_version)

Get all App Service Environments in a resource group.

Get all App Service Environments in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_environment_collection import AppServiceEnvironmentCollection
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all App Service Environments in a resource group.
        api_response = api_instance.app_service_environments_list_by_resource_group(resource_group_name, subscription_id, api_version)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**AppServiceEnvironmentCollection**](AppServiceEnvironmentCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_list_capacities**
> StampCapacityCollection app_service_environments_list_capacities(resource_group_name, name, subscription_id, api_version)

Get the used, available, and total worker capacity an App Service Environment.

Get the used, available, and total worker capacity an App Service Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.stamp_capacity_collection import StampCapacityCollection
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get the used, available, and total worker capacity an App Service Environment.
        api_response = api_instance.app_service_environments_list_capacities(resource_group_name, name, subscription_id, api_version)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_list_capacities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_list_capacities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**StampCapacityCollection**](StampCapacityCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_list_diagnostics**
> List[HostingEnvironmentDiagnostics] app_service_environments_list_diagnostics(resource_group_name, name, subscription_id, api_version)

Get diagnostic information for an App Service Environment.

Get diagnostic information for an App Service Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hosting_environment_diagnostics import HostingEnvironmentDiagnostics
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get diagnostic information for an App Service Environment.
        api_response = api_instance.app_service_environments_list_diagnostics(resource_group_name, name, subscription_id, api_version)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_list_diagnostics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_list_diagnostics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**List[HostingEnvironmentDiagnostics]**](HostingEnvironmentDiagnostics.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_list_metric_definitions**
> MetricDefinition app_service_environments_list_metric_definitions(resource_group_name, name, subscription_id, api_version)

Get global metric definitions of an App Service Environment.

Get global metric definitions of an App Service Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_definition import MetricDefinition
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get global metric definitions of an App Service Environment.
        api_response = api_instance.app_service_environments_list_metric_definitions(resource_group_name, name, subscription_id, api_version)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_list_metric_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_list_metric_definitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**MetricDefinition**](MetricDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_list_metrics**
> AppServiceEnvironmentsListMetrics200Response app_service_environments_list_metrics(resource_group_name, name, subscription_id, api_version, details=details, filter=filter)

Get global metrics of an App Service Environment.

Get global metrics of an App Service Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_environments_list_metrics200_response import AppServiceEnvironmentsListMetrics200Response
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    details = True # bool | Specify <code>true</code> to include instance details. The default is <code>false</code>. (optional)
    filter = 'filter_example' # str | Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'. (optional)

    try:
        # Get global metrics of an App Service Environment.
        api_response = api_instance.app_service_environments_list_metrics(resource_group_name, name, subscription_id, api_version, details=details, filter=filter)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_list_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_list_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **details** | **bool**| Specify &lt;code&gt;true&lt;/code&gt; to include instance details. The default is &lt;code&gt;false&lt;/code&gt;. | [optional] 
 **filter** | **str**| Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter&#x3D;(name.value eq &#39;Metric1&#39; or name.value eq &#39;Metric2&#39;) and startTime eq &#39;2014-01-01T00:00:00Z&#39; and endTime eq &#39;2014-12-31T23:59:59Z&#39; and timeGrain eq duration&#39;[Hour|Minute|Day]&#39;. | [optional] 

### Return type

[**AppServiceEnvironmentsListMetrics200Response**](AppServiceEnvironmentsListMetrics200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_list_multi_role_metric_definitions**
> AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitions200Response app_service_environments_list_multi_role_metric_definitions(resource_group_name, name, subscription_id, api_version)

Get metric definitions for a multi-role pool of an App Service Environment.

Get metric definitions for a multi-role pool of an App Service Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_environments_list_multi_role_pool_instance_metric_definitions200_response import AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitions200Response
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get metric definitions for a multi-role pool of an App Service Environment.
        api_response = api_instance.app_service_environments_list_multi_role_metric_definitions(resource_group_name, name, subscription_id, api_version)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_list_multi_role_metric_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_list_multi_role_metric_definitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitions200Response**](AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitions200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_list_multi_role_metrics**
> AppServiceEnvironmentsListMetrics200Response app_service_environments_list_multi_role_metrics(resource_group_name, name, subscription_id, api_version, start_time=start_time, end_time=end_time, time_grain=time_grain, details=details, filter=filter)

Get metrics for a multi-role pool of an App Service Environment.

Get metrics for a multi-role pool of an App Service Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_environments_list_metrics200_response import AppServiceEnvironmentsListMetrics200Response
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    start_time = 'start_time_example' # str | Beginning time of the metrics query. (optional)
    end_time = 'end_time_example' # str | End time of the metrics query. (optional)
    time_grain = 'time_grain_example' # str | Time granularity of the metrics query. (optional)
    details = True # bool | Specify <code>true</code> to include instance details. The default is <code>false</code>. (optional)
    filter = 'filter_example' # str | Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'. (optional)

    try:
        # Get metrics for a multi-role pool of an App Service Environment.
        api_response = api_instance.app_service_environments_list_multi_role_metrics(resource_group_name, name, subscription_id, api_version, start_time=start_time, end_time=end_time, time_grain=time_grain, details=details, filter=filter)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_list_multi_role_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_list_multi_role_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **start_time** | **str**| Beginning time of the metrics query. | [optional] 
 **end_time** | **str**| End time of the metrics query. | [optional] 
 **time_grain** | **str**| Time granularity of the metrics query. | [optional] 
 **details** | **bool**| Specify &lt;code&gt;true&lt;/code&gt; to include instance details. The default is &lt;code&gt;false&lt;/code&gt;. | [optional] 
 **filter** | **str**| Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter&#x3D;(name.value eq &#39;Metric1&#39; or name.value eq &#39;Metric2&#39;) and startTime eq &#39;2014-01-01T00:00:00Z&#39; and endTime eq &#39;2014-12-31T23:59:59Z&#39; and timeGrain eq duration&#39;[Hour|Minute|Day]&#39;. | [optional] 

### Return type

[**AppServiceEnvironmentsListMetrics200Response**](AppServiceEnvironmentsListMetrics200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_list_multi_role_pool_instance_metric_definitions**
> AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitions200Response app_service_environments_list_multi_role_pool_instance_metric_definitions(resource_group_name, name, instance, subscription_id, api_version)

Get metric definitions for a specific instance of a multi-role pool of an App Service Environment.

Get metric definitions for a specific instance of a multi-role pool of an App Service Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_environments_list_multi_role_pool_instance_metric_definitions200_response import AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitions200Response
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    instance = 'instance_example' # str | Name of the instance in the multi-role pool.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get metric definitions for a specific instance of a multi-role pool of an App Service Environment.
        api_response = api_instance.app_service_environments_list_multi_role_pool_instance_metric_definitions(resource_group_name, name, instance, subscription_id, api_version)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_list_multi_role_pool_instance_metric_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_list_multi_role_pool_instance_metric_definitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **instance** | **str**| Name of the instance in the multi-role pool. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitions200Response**](AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitions200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_list_multi_role_pool_instance_metrics**
> AppServiceEnvironmentsListMetrics200Response app_service_environments_list_multi_role_pool_instance_metrics(resource_group_name, name, instance, subscription_id, api_version, details=details)

Get metrics for a specific instance of a multi-role pool of an App Service Environment.

Get metrics for a specific instance of a multi-role pool of an App Service Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_environments_list_metrics200_response import AppServiceEnvironmentsListMetrics200Response
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    instance = 'instance_example' # str | Name of the instance in the multi-role pool.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    details = True # bool | Specify <code>true</code> to include instance details. The default is <code>false</code>. (optional)

    try:
        # Get metrics for a specific instance of a multi-role pool of an App Service Environment.
        api_response = api_instance.app_service_environments_list_multi_role_pool_instance_metrics(resource_group_name, name, instance, subscription_id, api_version, details=details)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_list_multi_role_pool_instance_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_list_multi_role_pool_instance_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **instance** | **str**| Name of the instance in the multi-role pool. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **details** | **bool**| Specify &lt;code&gt;true&lt;/code&gt; to include instance details. The default is &lt;code&gt;false&lt;/code&gt;. | [optional] 

### Return type

[**AppServiceEnvironmentsListMetrics200Response**](AppServiceEnvironmentsListMetrics200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_list_multi_role_pool_skus**
> SkuInfoCollection app_service_environments_list_multi_role_pool_skus(resource_group_name, name, subscription_id, api_version)

Get available SKUs for scaling a multi-role pool.

Get available SKUs for scaling a multi-role pool.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sku_info_collection import SkuInfoCollection
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get available SKUs for scaling a multi-role pool.
        api_response = api_instance.app_service_environments_list_multi_role_pool_skus(resource_group_name, name, subscription_id, api_version)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_list_multi_role_pool_skus:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_list_multi_role_pool_skus: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**SkuInfoCollection**](SkuInfoCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_list_multi_role_pools**
> WorkerPoolCollection app_service_environments_list_multi_role_pools(resource_group_name, name, subscription_id, api_version)

Get all multi-role pools.

Get all multi-role pools.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.worker_pool_collection import WorkerPoolCollection
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all multi-role pools.
        api_response = api_instance.app_service_environments_list_multi_role_pools(resource_group_name, name, subscription_id, api_version)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_list_multi_role_pools:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_list_multi_role_pools: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**WorkerPoolCollection**](WorkerPoolCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_list_multi_role_usages**
> UsageCollection app_service_environments_list_multi_role_usages(resource_group_name, name, subscription_id, api_version)

Get usage metrics for a multi-role pool of an App Service Environment.

Get usage metrics for a multi-role pool of an App Service Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.usage_collection import UsageCollection
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get usage metrics for a multi-role pool of an App Service Environment.
        api_response = api_instance.app_service_environments_list_multi_role_usages(resource_group_name, name, subscription_id, api_version)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_list_multi_role_usages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_list_multi_role_usages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**UsageCollection**](UsageCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_list_operations**
> List[AppServiceEnvironmentsListOperations200ResponseInner] app_service_environments_list_operations(resource_group_name, name, subscription_id, api_version)

List all currently running operations on the App Service Environment.

List all currently running operations on the App Service Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_environments_list_operations200_response_inner import AppServiceEnvironmentsListOperations200ResponseInner
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # List all currently running operations on the App Service Environment.
        api_response = api_instance.app_service_environments_list_operations(resource_group_name, name, subscription_id, api_version)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_list_operations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_list_operations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**List[AppServiceEnvironmentsListOperations200ResponseInner]**](AppServiceEnvironmentsListOperations200ResponseInner.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_list_usages**
> AppServiceEnvironmentsListUsages200Response app_service_environments_list_usages(resource_group_name, name, subscription_id, api_version, filter=filter)

Get global usage metrics of an App Service Environment.

Get global usage metrics of an App Service Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_environments_list_usages200_response import AppServiceEnvironmentsListUsages200Response
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    filter = 'filter_example' # str | Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'. (optional)

    try:
        # Get global usage metrics of an App Service Environment.
        api_response = api_instance.app_service_environments_list_usages(resource_group_name, name, subscription_id, api_version, filter=filter)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_list_usages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_list_usages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **filter** | **str**| Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter&#x3D;(name.value eq &#39;Metric1&#39; or name.value eq &#39;Metric2&#39;) and startTime eq &#39;2014-01-01T00:00:00Z&#39; and endTime eq &#39;2014-12-31T23:59:59Z&#39; and timeGrain eq duration&#39;[Hour|Minute|Day]&#39;. | [optional] 

### Return type

[**AppServiceEnvironmentsListUsages200Response**](AppServiceEnvironmentsListUsages200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_list_vips**
> AddressResponse app_service_environments_list_vips(resource_group_name, name, subscription_id, api_version)

Get IP addresses assigned to an App Service Environment.

Get IP addresses assigned to an App Service Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.address_response import AddressResponse
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get IP addresses assigned to an App Service Environment.
        api_response = api_instance.app_service_environments_list_vips(resource_group_name, name, subscription_id, api_version)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_list_vips:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_list_vips: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**AddressResponse**](AddressResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_list_web_apps**
> AppServiceEnvironmentsResume200Response app_service_environments_list_web_apps(resource_group_name, name, subscription_id, api_version, properties_to_include=properties_to_include)

Get all apps in an App Service Environment.

Get all apps in an App Service Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_environments_resume200_response import AppServiceEnvironmentsResume200Response
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    properties_to_include = 'properties_to_include_example' # str | Comma separated list of app properties to include. (optional)

    try:
        # Get all apps in an App Service Environment.
        api_response = api_instance.app_service_environments_list_web_apps(resource_group_name, name, subscription_id, api_version, properties_to_include=properties_to_include)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_list_web_apps:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_list_web_apps: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **properties_to_include** | **str**| Comma separated list of app properties to include. | [optional] 

### Return type

[**AppServiceEnvironmentsResume200Response**](AppServiceEnvironmentsResume200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_list_web_worker_metric_definitions**
> AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitions200Response app_service_environments_list_web_worker_metric_definitions(resource_group_name, name, worker_pool_name, subscription_id, api_version)

Get metric definitions for a worker pool of an App Service Environment.

Get metric definitions for a worker pool of an App Service Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_environments_list_multi_role_pool_instance_metric_definitions200_response import AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitions200Response
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    worker_pool_name = 'worker_pool_name_example' # str | Name of the worker pool.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get metric definitions for a worker pool of an App Service Environment.
        api_response = api_instance.app_service_environments_list_web_worker_metric_definitions(resource_group_name, name, worker_pool_name, subscription_id, api_version)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_list_web_worker_metric_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_list_web_worker_metric_definitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **worker_pool_name** | **str**| Name of the worker pool. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitions200Response**](AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitions200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_list_web_worker_metrics**
> AppServiceEnvironmentsListMetrics200Response app_service_environments_list_web_worker_metrics(resource_group_name, name, worker_pool_name, subscription_id, api_version, details=details, filter=filter)

Get metrics for a worker pool of a AppServiceEnvironment (App Service Environment).

Get metrics for a worker pool of a AppServiceEnvironment (App Service Environment).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_environments_list_metrics200_response import AppServiceEnvironmentsListMetrics200Response
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    worker_pool_name = 'worker_pool_name_example' # str | Name of worker pool
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    details = True # bool | Specify <code>true</code> to include instance details. The default is <code>false</code>. (optional)
    filter = 'filter_example' # str | Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'. (optional)

    try:
        # Get metrics for a worker pool of a AppServiceEnvironment (App Service Environment).
        api_response = api_instance.app_service_environments_list_web_worker_metrics(resource_group_name, name, worker_pool_name, subscription_id, api_version, details=details, filter=filter)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_list_web_worker_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_list_web_worker_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **worker_pool_name** | **str**| Name of worker pool | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **details** | **bool**| Specify &lt;code&gt;true&lt;/code&gt; to include instance details. The default is &lt;code&gt;false&lt;/code&gt;. | [optional] 
 **filter** | **str**| Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter&#x3D;(name.value eq &#39;Metric1&#39; or name.value eq &#39;Metric2&#39;) and startTime eq &#39;2014-01-01T00:00:00Z&#39; and endTime eq &#39;2014-12-31T23:59:59Z&#39; and timeGrain eq duration&#39;[Hour|Minute|Day]&#39;. | [optional] 

### Return type

[**AppServiceEnvironmentsListMetrics200Response**](AppServiceEnvironmentsListMetrics200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_list_web_worker_usages**
> UsageCollection app_service_environments_list_web_worker_usages(resource_group_name, name, worker_pool_name, subscription_id, api_version)

Get usage metrics for a worker pool of an App Service Environment.

Get usage metrics for a worker pool of an App Service Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.usage_collection import UsageCollection
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    worker_pool_name = 'worker_pool_name_example' # str | Name of the worker pool.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get usage metrics for a worker pool of an App Service Environment.
        api_response = api_instance.app_service_environments_list_web_worker_usages(resource_group_name, name, worker_pool_name, subscription_id, api_version)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_list_web_worker_usages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_list_web_worker_usages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **worker_pool_name** | **str**| Name of the worker pool. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**UsageCollection**](UsageCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_list_worker_pool_instance_metric_definitions**
> AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitions200Response app_service_environments_list_worker_pool_instance_metric_definitions(resource_group_name, name, worker_pool_name, instance, subscription_id, api_version)

Get metric definitions for a specific instance of a worker pool of an App Service Environment.

Get metric definitions for a specific instance of a worker pool of an App Service Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_environments_list_multi_role_pool_instance_metric_definitions200_response import AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitions200Response
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    worker_pool_name = 'worker_pool_name_example' # str | Name of the worker pool.
    instance = 'instance_example' # str | Name of the instance in the worker pool.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get metric definitions for a specific instance of a worker pool of an App Service Environment.
        api_response = api_instance.app_service_environments_list_worker_pool_instance_metric_definitions(resource_group_name, name, worker_pool_name, instance, subscription_id, api_version)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_list_worker_pool_instance_metric_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_list_worker_pool_instance_metric_definitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **worker_pool_name** | **str**| Name of the worker pool. | 
 **instance** | **str**| Name of the instance in the worker pool. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitions200Response**](AppServiceEnvironmentsListMultiRolePoolInstanceMetricDefinitions200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_list_worker_pool_instance_metrics**
> AppServiceEnvironmentsListMetrics200Response app_service_environments_list_worker_pool_instance_metrics(resource_group_name, name, worker_pool_name, instance, subscription_id, api_version, details=details, filter=filter)

Get metrics for a specific instance of a worker pool of an App Service Environment.

Get metrics for a specific instance of a worker pool of an App Service Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_environments_list_metrics200_response import AppServiceEnvironmentsListMetrics200Response
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    worker_pool_name = 'worker_pool_name_example' # str | Name of the worker pool.
    instance = 'instance_example' # str | Name of the instance in the worker pool.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    details = True # bool | Specify <code>true</code> to include instance details. The default is <code>false</code>. (optional)
    filter = 'filter_example' # str | Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'. (optional)

    try:
        # Get metrics for a specific instance of a worker pool of an App Service Environment.
        api_response = api_instance.app_service_environments_list_worker_pool_instance_metrics(resource_group_name, name, worker_pool_name, instance, subscription_id, api_version, details=details, filter=filter)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_list_worker_pool_instance_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_list_worker_pool_instance_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **worker_pool_name** | **str**| Name of the worker pool. | 
 **instance** | **str**| Name of the instance in the worker pool. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **details** | **bool**| Specify &lt;code&gt;true&lt;/code&gt; to include instance details. The default is &lt;code&gt;false&lt;/code&gt;. | [optional] 
 **filter** | **str**| Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter&#x3D;(name.value eq &#39;Metric1&#39; or name.value eq &#39;Metric2&#39;) and startTime eq &#39;2014-01-01T00:00:00Z&#39; and endTime eq &#39;2014-12-31T23:59:59Z&#39; and timeGrain eq duration&#39;[Hour|Minute|Day]&#39;. | [optional] 

### Return type

[**AppServiceEnvironmentsListMetrics200Response**](AppServiceEnvironmentsListMetrics200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_list_worker_pool_skus**
> SkuInfoCollection app_service_environments_list_worker_pool_skus(resource_group_name, name, worker_pool_name, subscription_id, api_version)

Get available SKUs for scaling a worker pool.

Get available SKUs for scaling a worker pool.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sku_info_collection import SkuInfoCollection
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    worker_pool_name = 'worker_pool_name_example' # str | Name of the worker pool.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get available SKUs for scaling a worker pool.
        api_response = api_instance.app_service_environments_list_worker_pool_skus(resource_group_name, name, worker_pool_name, subscription_id, api_version)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_list_worker_pool_skus:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_list_worker_pool_skus: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **worker_pool_name** | **str**| Name of the worker pool. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**SkuInfoCollection**](SkuInfoCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_list_worker_pools**
> WorkerPoolCollection app_service_environments_list_worker_pools(resource_group_name, name, subscription_id, api_version)

Get all worker pools of an App Service Environment.

Get all worker pools of an App Service Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.worker_pool_collection import WorkerPoolCollection
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all worker pools of an App Service Environment.
        api_response = api_instance.app_service_environments_list_worker_pools(resource_group_name, name, subscription_id, api_version)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_list_worker_pools:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_list_worker_pools: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**WorkerPoolCollection**](WorkerPoolCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_reboot**
> app_service_environments_reboot(resource_group_name, name, subscription_id, api_version)

Reboot all machines in an App Service Environment.

Reboot all machines in an App Service Environment.

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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Reboot all machines in an App Service Environment.
        api_instance.app_service_environments_reboot(resource_group_name, name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_reboot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

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
**202** | Asynchronous operation in progress. |  -  |
**400** | Bad request. |  -  |
**404** | Not found. |  -  |
**409** | Conflict. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_resume**
> AppServiceEnvironmentsResume200Response app_service_environments_resume(resource_group_name, name, subscription_id, api_version)

Resume an App Service Environment.

Resume an App Service Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_environments_resume200_response import AppServiceEnvironmentsResume200Response
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Resume an App Service Environment.
        api_response = api_instance.app_service_environments_resume(resource_group_name, name, subscription_id, api_version)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_resume:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_resume: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**AppServiceEnvironmentsResume200Response**](AppServiceEnvironmentsResume200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**202** | Operation is in progress. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_suspend**
> AppServiceEnvironmentsResume200Response app_service_environments_suspend(resource_group_name, name, subscription_id, api_version)

Suspend an App Service Environment.

Suspend an App Service Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_environments_resume200_response import AppServiceEnvironmentsResume200Response
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Suspend an App Service Environment.
        api_response = api_instance.app_service_environments_suspend(resource_group_name, name, subscription_id, api_version)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_suspend:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_suspend: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**AppServiceEnvironmentsResume200Response**](AppServiceEnvironmentsResume200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**202** | Operation is in progress. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_update**
> AppServiceEnvironmentResource app_service_environments_update(resource_group_name, name, subscription_id, api_version, hosting_environment_envelope)

Create or update an App Service Environment.

Create or update an App Service Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_environment_patch_resource import AppServiceEnvironmentPatchResource
from openapi_client.models.app_service_environment_resource import AppServiceEnvironmentResource
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    hosting_environment_envelope = openapi_client.AppServiceEnvironmentPatchResource() # AppServiceEnvironmentPatchResource | Configuration details of the App Service Environment.

    try:
        # Create or update an App Service Environment.
        api_response = api_instance.app_service_environments_update(resource_group_name, name, subscription_id, api_version, hosting_environment_envelope)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **hosting_environment_envelope** | [**AppServiceEnvironmentPatchResource**](AppServiceEnvironmentPatchResource.md)| Configuration details of the App Service Environment. | 

### Return type

[**AppServiceEnvironmentResource**](AppServiceEnvironmentResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Operation is in progress. |  -  |
**400** | Bad request. |  -  |
**404** | Not found. |  -  |
**409** | Conflict. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_update_multi_role_pool**
> WorkerPoolResource app_service_environments_update_multi_role_pool(resource_group_name, name, subscription_id, api_version, multi_role_pool_envelope)

Create or update a multi-role pool.

Create or update a multi-role pool.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.worker_pool_resource import WorkerPoolResource
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    multi_role_pool_envelope = openapi_client.WorkerPoolResource() # WorkerPoolResource | Properties of the multi-role pool.

    try:
        # Create or update a multi-role pool.
        api_response = api_instance.app_service_environments_update_multi_role_pool(resource_group_name, name, subscription_id, api_version, multi_role_pool_envelope)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_update_multi_role_pool:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_update_multi_role_pool: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **multi_role_pool_envelope** | [**WorkerPoolResource**](WorkerPoolResource.md)| Properties of the multi-role pool. | 

### Return type

[**WorkerPoolResource**](WorkerPoolResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**202** | Operation is in progress. |  -  |
**400** | Bad request. |  -  |
**404** | Not found. |  -  |
**409** | Conflict. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_environments_update_worker_pool**
> WorkerPoolResource app_service_environments_update_worker_pool(resource_group_name, name, worker_pool_name, subscription_id, api_version, worker_pool_envelope)

Create or update a worker pool.

Create or update a worker pool.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.worker_pool_resource import WorkerPoolResource
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
    api_instance = openapi_client.AppServiceEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service Environment.
    worker_pool_name = 'worker_pool_name_example' # str | Name of the worker pool.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    worker_pool_envelope = openapi_client.WorkerPoolResource() # WorkerPoolResource | Properties of the worker pool.

    try:
        # Create or update a worker pool.
        api_response = api_instance.app_service_environments_update_worker_pool(resource_group_name, name, worker_pool_name, subscription_id, api_version, worker_pool_envelope)
        print("The response of AppServiceEnvironmentsApi->app_service_environments_update_worker_pool:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceEnvironmentsApi->app_service_environments_update_worker_pool: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service Environment. | 
 **worker_pool_name** | **str**| Name of the worker pool. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **worker_pool_envelope** | [**WorkerPoolResource**](WorkerPoolResource.md)| Properties of the worker pool. | 

### Return type

[**WorkerPoolResource**](WorkerPoolResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**202** | Operation is in progress. |  -  |
**400** | Bad request. |  -  |
**404** | Not found. |  -  |
**409** | Conflict. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

