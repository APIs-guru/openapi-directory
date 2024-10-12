# openapi_client.HostingEnvironmentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hosting_environments_create_or_update_hosting_environment**](HostingEnvironmentsApi.md#hosting_environments_create_or_update_hosting_environment) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name} | Create or update a hostingEnvironment (App Service Environment).
[**hosting_environments_create_or_update_multi_role_pool**](HostingEnvironmentsApi.md#hosting_environments_create_or_update_multi_role_pool) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools/default | Create or update a multiRole pool.
[**hosting_environments_create_or_update_worker_pool**](HostingEnvironmentsApi.md#hosting_environments_create_or_update_worker_pool) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools/{workerPoolName} | Create or update a worker pool.
[**hosting_environments_delete_hosting_environment**](HostingEnvironmentsApi.md#hosting_environments_delete_hosting_environment) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name} | Delete a hostingEnvironment (App Service Environment).
[**hosting_environments_get_hosting_environment**](HostingEnvironmentsApi.md#hosting_environments_get_hosting_environment) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name} | Get properties of hostingEnvironment (App Service Environment).
[**hosting_environments_get_hosting_environment_capacities**](HostingEnvironmentsApi.md#hosting_environments_get_hosting_environment_capacities) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/capacities/compute | Get used, available, and total worker capacity for hostingEnvironment (App Service Environment).
[**hosting_environments_get_hosting_environment_diagnostics**](HostingEnvironmentsApi.md#hosting_environments_get_hosting_environment_diagnostics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/diagnostics | Get diagnostic information for hostingEnvironment (App Service Environment).
[**hosting_environments_get_hosting_environment_diagnostics_item**](HostingEnvironmentsApi.md#hosting_environments_get_hosting_environment_diagnostics_item) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/diagnostics/{diagnosticsName} | Get diagnostic information for hostingEnvironment (App Service Environment).
[**hosting_environments_get_hosting_environment_metric_definitions**](HostingEnvironmentsApi.md#hosting_environments_get_hosting_environment_metric_definitions) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/metricdefinitions | Get global metric definitions of hostingEnvironment (App Service Environment).
[**hosting_environments_get_hosting_environment_metrics**](HostingEnvironmentsApi.md#hosting_environments_get_hosting_environment_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/metrics | Get global metrics of hostingEnvironment (App Service Environment).
[**hosting_environments_get_hosting_environment_multi_role_metric_definitions**](HostingEnvironmentsApi.md#hosting_environments_get_hosting_environment_multi_role_metric_definitions) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools/default/metricdefinitions | Get metric definitions for a multiRole pool of a hostingEnvironment (App Service Environment).
[**hosting_environments_get_hosting_environment_multi_role_metrics**](HostingEnvironmentsApi.md#hosting_environments_get_hosting_environment_multi_role_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools/default/metrics | Get metrics for a multiRole pool of a hostingEnvironment (App Service Environment).
[**hosting_environments_get_hosting_environment_multi_role_usages**](HostingEnvironmentsApi.md#hosting_environments_get_hosting_environment_multi_role_usages) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools/default/usages | Get usages for a multiRole pool of a hostingEnvironment (App Service Environment).
[**hosting_environments_get_hosting_environment_operation**](HostingEnvironmentsApi.md#hosting_environments_get_hosting_environment_operation) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/operations/{operationId} | Get status of an operation on a hostingEnvironment (App Service Environment).
[**hosting_environments_get_hosting_environment_operations**](HostingEnvironmentsApi.md#hosting_environments_get_hosting_environment_operations) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/operations | List all currently running operations on the hostingEnvironment (App Service Environment)
[**hosting_environments_get_hosting_environment_server_farms**](HostingEnvironmentsApi.md#hosting_environments_get_hosting_environment_server_farms) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/serverfarms | Get all serverfarms (App Service Plans) on the hostingEnvironment (App Service Environment).
[**hosting_environments_get_hosting_environment_sites**](HostingEnvironmentsApi.md#hosting_environments_get_hosting_environment_sites) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/sites | Get all sites on the hostingEnvironment (App Service Environment).
[**hosting_environments_get_hosting_environment_usages**](HostingEnvironmentsApi.md#hosting_environments_get_hosting_environment_usages) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/usages | Get global usages of hostingEnvironment (App Service Environment).
[**hosting_environments_get_hosting_environment_vips**](HostingEnvironmentsApi.md#hosting_environments_get_hosting_environment_vips) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/capacities/virtualip | Get IP addresses assigned to the hostingEnvironment (App Service Environment).
[**hosting_environments_get_hosting_environment_web_hosting_plans**](HostingEnvironmentsApi.md#hosting_environments_get_hosting_environment_web_hosting_plans) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/webhostingplans | Get all serverfarms (App Service Plans) on the hostingEnvironment (App Service Environment).
[**hosting_environments_get_hosting_environment_web_worker_metric_definitions**](HostingEnvironmentsApi.md#hosting_environments_get_hosting_environment_web_worker_metric_definitions) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools/{workerPoolName}/metricdefinitions | Get metric definitions for a worker pool of a hostingEnvironment (App Service Environment).
[**hosting_environments_get_hosting_environment_web_worker_metrics**](HostingEnvironmentsApi.md#hosting_environments_get_hosting_environment_web_worker_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools/{workerPoolName}/metrics | Get metrics for a worker pool of a hostingEnvironment (App Service Environment).
[**hosting_environments_get_hosting_environment_web_worker_usages**](HostingEnvironmentsApi.md#hosting_environments_get_hosting_environment_web_worker_usages) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools/{workerPoolName}/usages | Get usages for a worker pool of a hostingEnvironment (App Service Environment).
[**hosting_environments_get_hosting_environments**](HostingEnvironmentsApi.md#hosting_environments_get_hosting_environments) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments | Get all hostingEnvironments (App Service Environments) in a resource group.
[**hosting_environments_get_multi_role_pool**](HostingEnvironmentsApi.md#hosting_environments_get_multi_role_pool) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools/default | Get properties of a multiRole pool.
[**hosting_environments_get_multi_role_pool_instance_metric_definitions**](HostingEnvironmentsApi.md#hosting_environments_get_multi_role_pool_instance_metric_definitions) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools/default/instances/{instance}/metricdefinitions | Get metric definitions for a specific instance of a multiRole pool of a hostingEnvironment (App Service Environment).
[**hosting_environments_get_multi_role_pool_instance_metrics**](HostingEnvironmentsApi.md#hosting_environments_get_multi_role_pool_instance_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools/default/instances/{instance}/metrics | Get metrics for a specific instance of a multiRole pool of a hostingEnvironment (App Service Environment).
[**hosting_environments_get_multi_role_pool_skus**](HostingEnvironmentsApi.md#hosting_environments_get_multi_role_pool_skus) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools/default/skus | Get available skus for scaling a multiRole pool.
[**hosting_environments_get_multi_role_pools**](HostingEnvironmentsApi.md#hosting_environments_get_multi_role_pools) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools | Get all multi role pools
[**hosting_environments_get_worker_pool**](HostingEnvironmentsApi.md#hosting_environments_get_worker_pool) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools/{workerPoolName} | Get properties of a worker pool.
[**hosting_environments_get_worker_pool_instance_metric_definitions**](HostingEnvironmentsApi.md#hosting_environments_get_worker_pool_instance_metric_definitions) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools/{workerPoolName}/instances/{instance}/metricdefinitions | Get metric definitions for a specific instance of a worker pool of a hostingEnvironment (App Service Environment).
[**hosting_environments_get_worker_pool_instance_metrics**](HostingEnvironmentsApi.md#hosting_environments_get_worker_pool_instance_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools/{workerPoolName}/instances/{instance}/metrics | Get metrics for a specific instance of a worker pool of a hostingEnvironment (App Service Environment).
[**hosting_environments_get_worker_pool_skus**](HostingEnvironmentsApi.md#hosting_environments_get_worker_pool_skus) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools/{workerPoolName}/skus | Get available skus for scaling a worker pool.
[**hosting_environments_get_worker_pools**](HostingEnvironmentsApi.md#hosting_environments_get_worker_pools) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools | Get all worker pools
[**hosting_environments_reboot_hosting_environment**](HostingEnvironmentsApi.md#hosting_environments_reboot_hosting_environment) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/reboot | Reboots all machines in a hostingEnvironment (App Service Environment).
[**hosting_environments_resume_hosting_environment**](HostingEnvironmentsApi.md#hosting_environments_resume_hosting_environment) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/resume | Resumes the hostingEnvironment.
[**hosting_environments_suspend_hosting_environment**](HostingEnvironmentsApi.md#hosting_environments_suspend_hosting_environment) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/suspend | Suspends the hostingEnvironment.


# **hosting_environments_create_or_update_hosting_environment**
> HostingEnvironment hosting_environments_create_or_update_hosting_environment(resource_group_name, name, subscription_id, api_version, hosting_environment_envelope)

Create or update a hostingEnvironment (App Service Environment).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hosting_environment import HostingEnvironment
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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    hosting_environment_envelope = openapi_client.HostingEnvironment() # HostingEnvironment | Properties of hostingEnvironment (App Service Environment)

    try:
        # Create or update a hostingEnvironment (App Service Environment).
        api_response = api_instance.hosting_environments_create_or_update_hosting_environment(resource_group_name, name, subscription_id, api_version, hosting_environment_envelope)
        print("The response of HostingEnvironmentsApi->hosting_environments_create_or_update_hosting_environment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_create_or_update_hosting_environment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **hosting_environment_envelope** | [**HostingEnvironment**](HostingEnvironment.md)| Properties of hostingEnvironment (App Service Environment) | 

### Return type

[**HostingEnvironment**](HostingEnvironment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Operation is in progress |  -  |
**400** | Bad request |  -  |
**404** | Not found |  -  |
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_create_or_update_multi_role_pool**
> WorkerPool hosting_environments_create_or_update_multi_role_pool(resource_group_name, name, subscription_id, api_version, multi_role_pool_envelope)

Create or update a multiRole pool.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.worker_pool import WorkerPool
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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    multi_role_pool_envelope = openapi_client.WorkerPool() # WorkerPool | Properties of multiRole pool

    try:
        # Create or update a multiRole pool.
        api_response = api_instance.hosting_environments_create_or_update_multi_role_pool(resource_group_name, name, subscription_id, api_version, multi_role_pool_envelope)
        print("The response of HostingEnvironmentsApi->hosting_environments_create_or_update_multi_role_pool:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_create_or_update_multi_role_pool: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **multi_role_pool_envelope** | [**WorkerPool**](WorkerPool.md)| Properties of multiRole pool | 

### Return type

[**WorkerPool**](WorkerPool.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Operation is in progress |  -  |
**400** | Bad request |  -  |
**404** | Not found |  -  |
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_create_or_update_worker_pool**
> WorkerPool hosting_environments_create_or_update_worker_pool(resource_group_name, name, worker_pool_name, subscription_id, api_version, worker_pool_envelope)

Create or update a worker pool.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.worker_pool import WorkerPool
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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    worker_pool_name = 'worker_pool_name_example' # str | Name of worker pool
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    worker_pool_envelope = openapi_client.WorkerPool() # WorkerPool | Properties of worker pool

    try:
        # Create or update a worker pool.
        api_response = api_instance.hosting_environments_create_or_update_worker_pool(resource_group_name, name, worker_pool_name, subscription_id, api_version, worker_pool_envelope)
        print("The response of HostingEnvironmentsApi->hosting_environments_create_or_update_worker_pool:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_create_or_update_worker_pool: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **worker_pool_name** | **str**| Name of worker pool | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **worker_pool_envelope** | [**WorkerPool**](WorkerPool.md)| Properties of worker pool | 

### Return type

[**WorkerPool**](WorkerPool.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Operation is in progress |  -  |
**400** | Bad request |  -  |
**404** | Not found |  -  |
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_delete_hosting_environment**
> object hosting_environments_delete_hosting_environment(resource_group_name, name, subscription_id, api_version, force_delete=force_delete)

Delete a hostingEnvironment (App Service Environment).

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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    force_delete = True # bool | Delete even if the hostingEnvironment (App Service Environment) contains resources (optional)

    try:
        # Delete a hostingEnvironment (App Service Environment).
        api_response = api_instance.hosting_environments_delete_hosting_environment(resource_group_name, name, subscription_id, api_version, force_delete=force_delete)
        print("The response of HostingEnvironmentsApi->hosting_environments_delete_hosting_environment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_delete_hosting_environment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **force_delete** | **bool**| Delete even if the hostingEnvironment (App Service Environment) contains resources | [optional] 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Operation is in progress |  -  |
**400** | Bad request |  -  |
**404** | Not found |  -  |
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_hosting_environment**
> HostingEnvironment hosting_environments_get_hosting_environment(resource_group_name, name, subscription_id, api_version)

Get properties of hostingEnvironment (App Service Environment).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hosting_environment import HostingEnvironment
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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get properties of hostingEnvironment (App Service Environment).
        api_response = api_instance.hosting_environments_get_hosting_environment(resource_group_name, name, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_hosting_environment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_hosting_environment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**HostingEnvironment**](HostingEnvironment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_hosting_environment_capacities**
> StampCapacityCollection hosting_environments_get_hosting_environment_capacities(resource_group_name, name, subscription_id, api_version)

Get used, available, and total worker capacity for hostingEnvironment (App Service Environment).

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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get used, available, and total worker capacity for hostingEnvironment (App Service Environment).
        api_response = api_instance.hosting_environments_get_hosting_environment_capacities(resource_group_name, name, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_hosting_environment_capacities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_hosting_environment_capacities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**StampCapacityCollection**](StampCapacityCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_hosting_environment_diagnostics**
> List[HostingEnvironmentDiagnostics] hosting_environments_get_hosting_environment_diagnostics(resource_group_name, name, subscription_id, api_version)

Get diagnostic information for hostingEnvironment (App Service Environment).

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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get diagnostic information for hostingEnvironment (App Service Environment).
        api_response = api_instance.hosting_environments_get_hosting_environment_diagnostics(resource_group_name, name, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_hosting_environment_diagnostics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_hosting_environment_diagnostics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**List[HostingEnvironmentDiagnostics]**](HostingEnvironmentDiagnostics.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_hosting_environment_diagnostics_item**
> HostingEnvironmentDiagnostics hosting_environments_get_hosting_environment_diagnostics_item(resource_group_name, name, diagnostics_name, subscription_id, api_version)

Get diagnostic information for hostingEnvironment (App Service Environment).

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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    diagnostics_name = 'diagnostics_name_example' # str | Name of the diagnostics
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get diagnostic information for hostingEnvironment (App Service Environment).
        api_response = api_instance.hosting_environments_get_hosting_environment_diagnostics_item(resource_group_name, name, diagnostics_name, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_hosting_environment_diagnostics_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_hosting_environment_diagnostics_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **diagnostics_name** | **str**| Name of the diagnostics | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**HostingEnvironmentDiagnostics**](HostingEnvironmentDiagnostics.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_hosting_environment_metric_definitions**
> MetricDefinition hosting_environments_get_hosting_environment_metric_definitions(resource_group_name, name, subscription_id, api_version)

Get global metric definitions of hostingEnvironment (App Service Environment).

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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get global metric definitions of hostingEnvironment (App Service Environment).
        api_response = api_instance.hosting_environments_get_hosting_environment_metric_definitions(resource_group_name, name, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_hosting_environment_metric_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_hosting_environment_metric_definitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**MetricDefinition**](MetricDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_hosting_environment_metrics**
> ResourceMetricCollection hosting_environments_get_hosting_environment_metrics(resource_group_name, name, subscription_id, api_version, details=details, filter=filter)

Get global metrics of hostingEnvironment (App Service Environment).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_metric_collection import ResourceMetricCollection
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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    details = True # bool | Include instance details (optional)
    filter = 'filter_example' # str | Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'. (optional)

    try:
        # Get global metrics of hostingEnvironment (App Service Environment).
        api_response = api_instance.hosting_environments_get_hosting_environment_metrics(resource_group_name, name, subscription_id, api_version, details=details, filter=filter)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_hosting_environment_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_hosting_environment_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **details** | **bool**| Include instance details | [optional] 
 **filter** | **str**| Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter&#x3D;(name.value eq &#39;Metric1&#39; or name.value eq &#39;Metric2&#39;) and startTime eq &#39;2014-01-01T00:00:00Z&#39; and endTime eq &#39;2014-12-31T23:59:59Z&#39; and timeGrain eq duration&#39;[Hour|Minute|Day]&#39;. | [optional] 

### Return type

[**ResourceMetricCollection**](ResourceMetricCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_hosting_environment_multi_role_metric_definitions**
> MetricDefinitionCollection hosting_environments_get_hosting_environment_multi_role_metric_definitions(resource_group_name, name, subscription_id, api_version)

Get metric definitions for a multiRole pool of a hostingEnvironment (App Service Environment).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_definition_collection import MetricDefinitionCollection
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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get metric definitions for a multiRole pool of a hostingEnvironment (App Service Environment).
        api_response = api_instance.hosting_environments_get_hosting_environment_multi_role_metric_definitions(resource_group_name, name, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_hosting_environment_multi_role_metric_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_hosting_environment_multi_role_metric_definitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**MetricDefinitionCollection**](MetricDefinitionCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_hosting_environment_multi_role_metrics**
> ResourceMetricCollection hosting_environments_get_hosting_environment_multi_role_metrics(resource_group_name, name, subscription_id, api_version, start_time=start_time, end_time=end_time, time_grain=time_grain, details=details, filter=filter)

Get metrics for a multiRole pool of a hostingEnvironment (App Service Environment).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_metric_collection import ResourceMetricCollection
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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    start_time = 'start_time_example' # str | Beginning time of metrics query (optional)
    end_time = 'end_time_example' # str | End time of metrics query (optional)
    time_grain = 'time_grain_example' # str | Time granularity of metrics query (optional)
    details = True # bool | Include instance details (optional)
    filter = 'filter_example' # str | Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'. (optional)

    try:
        # Get metrics for a multiRole pool of a hostingEnvironment (App Service Environment).
        api_response = api_instance.hosting_environments_get_hosting_environment_multi_role_metrics(resource_group_name, name, subscription_id, api_version, start_time=start_time, end_time=end_time, time_grain=time_grain, details=details, filter=filter)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_hosting_environment_multi_role_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_hosting_environment_multi_role_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **start_time** | **str**| Beginning time of metrics query | [optional] 
 **end_time** | **str**| End time of metrics query | [optional] 
 **time_grain** | **str**| Time granularity of metrics query | [optional] 
 **details** | **bool**| Include instance details | [optional] 
 **filter** | **str**| Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter&#x3D;(name.value eq &#39;Metric1&#39; or name.value eq &#39;Metric2&#39;) and startTime eq &#39;2014-01-01T00:00:00Z&#39; and endTime eq &#39;2014-12-31T23:59:59Z&#39; and timeGrain eq duration&#39;[Hour|Minute|Day]&#39;. | [optional] 

### Return type

[**ResourceMetricCollection**](ResourceMetricCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_hosting_environment_multi_role_usages**
> UsageCollection hosting_environments_get_hosting_environment_multi_role_usages(resource_group_name, name, subscription_id, api_version)

Get usages for a multiRole pool of a hostingEnvironment (App Service Environment).

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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get usages for a multiRole pool of a hostingEnvironment (App Service Environment).
        api_response = api_instance.hosting_environments_get_hosting_environment_multi_role_usages(resource_group_name, name, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_hosting_environment_multi_role_usages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_hosting_environment_multi_role_usages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**UsageCollection**](UsageCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_hosting_environment_operation**
> object hosting_environments_get_hosting_environment_operation(resource_group_name, name, operation_id, subscription_id, api_version)

Get status of an operation on a hostingEnvironment (App Service Environment).

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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    operation_id = 'operation_id_example' # str | operation identifier GUID
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get status of an operation on a hostingEnvironment (App Service Environment).
        api_response = api_instance.hosting_environments_get_hosting_environment_operation(resource_group_name, name, operation_id, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_hosting_environment_operation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_hosting_environment_operation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **operation_id** | **str**| operation identifier GUID | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Operation completed successfully |  -  |
**202** | Asynchronous operation in progress |  -  |
**404** | Not found |  -  |
**500** | Operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_hosting_environment_operations**
> object hosting_environments_get_hosting_environment_operations(resource_group_name, name, subscription_id, api_version)

List all currently running operations on the hostingEnvironment (App Service Environment)

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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # List all currently running operations on the hostingEnvironment (App Service Environment)
        api_response = api_instance.hosting_environments_get_hosting_environment_operations(resource_group_name, name, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_hosting_environment_operations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_hosting_environment_operations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_hosting_environment_server_farms**
> ServerFarmCollection hosting_environments_get_hosting_environment_server_farms(resource_group_name, name, subscription_id, api_version)

Get all serverfarms (App Service Plans) on the hostingEnvironment (App Service Environment).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.server_farm_collection import ServerFarmCollection
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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all serverfarms (App Service Plans) on the hostingEnvironment (App Service Environment).
        api_response = api_instance.hosting_environments_get_hosting_environment_server_farms(resource_group_name, name, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_hosting_environment_server_farms:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_hosting_environment_server_farms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**ServerFarmCollection**](ServerFarmCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_hosting_environment_sites**
> SiteCollection hosting_environments_get_hosting_environment_sites(resource_group_name, name, subscription_id, api_version, properties_to_include=properties_to_include)

Get all sites on the hostingEnvironment (App Service Environment).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_collection import SiteCollection
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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    properties_to_include = 'properties_to_include_example' # str | Comma separated list of site properties to include (optional)

    try:
        # Get all sites on the hostingEnvironment (App Service Environment).
        api_response = api_instance.hosting_environments_get_hosting_environment_sites(resource_group_name, name, subscription_id, api_version, properties_to_include=properties_to_include)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_hosting_environment_sites:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_hosting_environment_sites: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **properties_to_include** | **str**| Comma separated list of site properties to include | [optional] 

### Return type

[**SiteCollection**](SiteCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_hosting_environment_usages**
> CsmUsageQuotaCollection hosting_environments_get_hosting_environment_usages(resource_group_name, name, subscription_id, api_version, filter=filter)

Get global usages of hostingEnvironment (App Service Environment).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.csm_usage_quota_collection import CsmUsageQuotaCollection
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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    filter = 'filter_example' # str | Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'. (optional)

    try:
        # Get global usages of hostingEnvironment (App Service Environment).
        api_response = api_instance.hosting_environments_get_hosting_environment_usages(resource_group_name, name, subscription_id, api_version, filter=filter)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_hosting_environment_usages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_hosting_environment_usages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **filter** | **str**| Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter&#x3D;(name.value eq &#39;Metric1&#39; or name.value eq &#39;Metric2&#39;) and startTime eq &#39;2014-01-01T00:00:00Z&#39; and endTime eq &#39;2014-12-31T23:59:59Z&#39; and timeGrain eq duration&#39;[Hour|Minute|Day]&#39;. | [optional] 

### Return type

[**CsmUsageQuotaCollection**](CsmUsageQuotaCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_hosting_environment_vips**
> AddressResponse hosting_environments_get_hosting_environment_vips(resource_group_name, name, subscription_id, api_version)

Get IP addresses assigned to the hostingEnvironment (App Service Environment).

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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get IP addresses assigned to the hostingEnvironment (App Service Environment).
        api_response = api_instance.hosting_environments_get_hosting_environment_vips(resource_group_name, name, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_hosting_environment_vips:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_hosting_environment_vips: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**AddressResponse**](AddressResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_hosting_environment_web_hosting_plans**
> ServerFarmCollection hosting_environments_get_hosting_environment_web_hosting_plans(resource_group_name, name, subscription_id, api_version)

Get all serverfarms (App Service Plans) on the hostingEnvironment (App Service Environment).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.server_farm_collection import ServerFarmCollection
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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all serverfarms (App Service Plans) on the hostingEnvironment (App Service Environment).
        api_response = api_instance.hosting_environments_get_hosting_environment_web_hosting_plans(resource_group_name, name, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_hosting_environment_web_hosting_plans:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_hosting_environment_web_hosting_plans: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**ServerFarmCollection**](ServerFarmCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_hosting_environment_web_worker_metric_definitions**
> MetricDefinitionCollection hosting_environments_get_hosting_environment_web_worker_metric_definitions(resource_group_name, name, worker_pool_name, subscription_id, api_version)

Get metric definitions for a worker pool of a hostingEnvironment (App Service Environment).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_definition_collection import MetricDefinitionCollection
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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    worker_pool_name = 'worker_pool_name_example' # str | Name of worker pool
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get metric definitions for a worker pool of a hostingEnvironment (App Service Environment).
        api_response = api_instance.hosting_environments_get_hosting_environment_web_worker_metric_definitions(resource_group_name, name, worker_pool_name, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_hosting_environment_web_worker_metric_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_hosting_environment_web_worker_metric_definitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **worker_pool_name** | **str**| Name of worker pool | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**MetricDefinitionCollection**](MetricDefinitionCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_hosting_environment_web_worker_metrics**
> ResourceMetricCollection hosting_environments_get_hosting_environment_web_worker_metrics(resource_group_name, name, worker_pool_name, subscription_id, api_version, details=details, filter=filter)

Get metrics for a worker pool of a hostingEnvironment (App Service Environment).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_metric_collection import ResourceMetricCollection
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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    worker_pool_name = 'worker_pool_name_example' # str | Name of worker pool
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    details = True # bool | Include instance details (optional)
    filter = 'filter_example' # str | Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'. (optional)

    try:
        # Get metrics for a worker pool of a hostingEnvironment (App Service Environment).
        api_response = api_instance.hosting_environments_get_hosting_environment_web_worker_metrics(resource_group_name, name, worker_pool_name, subscription_id, api_version, details=details, filter=filter)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_hosting_environment_web_worker_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_hosting_environment_web_worker_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **worker_pool_name** | **str**| Name of worker pool | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **details** | **bool**| Include instance details | [optional] 
 **filter** | **str**| Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter&#x3D;(name.value eq &#39;Metric1&#39; or name.value eq &#39;Metric2&#39;) and startTime eq &#39;2014-01-01T00:00:00Z&#39; and endTime eq &#39;2014-12-31T23:59:59Z&#39; and timeGrain eq duration&#39;[Hour|Minute|Day]&#39;. | [optional] 

### Return type

[**ResourceMetricCollection**](ResourceMetricCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_hosting_environment_web_worker_usages**
> UsageCollection hosting_environments_get_hosting_environment_web_worker_usages(resource_group_name, name, worker_pool_name, subscription_id, api_version)

Get usages for a worker pool of a hostingEnvironment (App Service Environment).

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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    worker_pool_name = 'worker_pool_name_example' # str | Name of worker pool
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get usages for a worker pool of a hostingEnvironment (App Service Environment).
        api_response = api_instance.hosting_environments_get_hosting_environment_web_worker_usages(resource_group_name, name, worker_pool_name, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_hosting_environment_web_worker_usages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_hosting_environment_web_worker_usages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **worker_pool_name** | **str**| Name of worker pool | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**UsageCollection**](UsageCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_hosting_environments**
> HostingEnvironmentCollection hosting_environments_get_hosting_environments(resource_group_name, subscription_id, api_version)

Get all hostingEnvironments (App Service Environments) in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hosting_environment_collection import HostingEnvironmentCollection
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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all hostingEnvironments (App Service Environments) in a resource group.
        api_response = api_instance.hosting_environments_get_hosting_environments(resource_group_name, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_hosting_environments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_hosting_environments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**HostingEnvironmentCollection**](HostingEnvironmentCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_multi_role_pool**
> WorkerPool hosting_environments_get_multi_role_pool(resource_group_name, name, subscription_id, api_version)

Get properties of a multiRole pool.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.worker_pool import WorkerPool
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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get properties of a multiRole pool.
        api_response = api_instance.hosting_environments_get_multi_role_pool(resource_group_name, name, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_multi_role_pool:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_multi_role_pool: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**WorkerPool**](WorkerPool.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_multi_role_pool_instance_metric_definitions**
> object hosting_environments_get_multi_role_pool_instance_metric_definitions(resource_group_name, name, instance, subscription_id, api_version)

Get metric definitions for a specific instance of a multiRole pool of a hostingEnvironment (App Service Environment).

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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    instance = 'instance_example' # str | Name of instance in the multiRole pool&gt;
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get metric definitions for a specific instance of a multiRole pool of a hostingEnvironment (App Service Environment).
        api_response = api_instance.hosting_environments_get_multi_role_pool_instance_metric_definitions(resource_group_name, name, instance, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_multi_role_pool_instance_metric_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_multi_role_pool_instance_metric_definitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **instance** | **str**| Name of instance in the multiRole pool&amp;gt; | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_multi_role_pool_instance_metrics**
> object hosting_environments_get_multi_role_pool_instance_metrics(resource_group_name, name, instance, subscription_id, api_version, details=details)

Get metrics for a specific instance of a multiRole pool of a hostingEnvironment (App Service Environment).

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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    instance = 'instance_example' # str | Name of instance in the multiRole pool
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    details = True # bool | Include instance details (optional)

    try:
        # Get metrics for a specific instance of a multiRole pool of a hostingEnvironment (App Service Environment).
        api_response = api_instance.hosting_environments_get_multi_role_pool_instance_metrics(resource_group_name, name, instance, subscription_id, api_version, details=details)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_multi_role_pool_instance_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_multi_role_pool_instance_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **instance** | **str**| Name of instance in the multiRole pool | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **details** | **bool**| Include instance details | [optional] 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_multi_role_pool_skus**
> SkuInfoCollection hosting_environments_get_multi_role_pool_skus(resource_group_name, name, subscription_id, api_version)

Get available skus for scaling a multiRole pool.

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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get available skus for scaling a multiRole pool.
        api_response = api_instance.hosting_environments_get_multi_role_pool_skus(resource_group_name, name, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_multi_role_pool_skus:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_multi_role_pool_skus: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**SkuInfoCollection**](SkuInfoCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_multi_role_pools**
> WorkerPoolCollection hosting_environments_get_multi_role_pools(resource_group_name, name, subscription_id, api_version)

Get all multi role pools

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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all multi role pools
        api_response = api_instance.hosting_environments_get_multi_role_pools(resource_group_name, name, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_multi_role_pools:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_multi_role_pools: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**WorkerPoolCollection**](WorkerPoolCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_worker_pool**
> WorkerPool hosting_environments_get_worker_pool(resource_group_name, name, worker_pool_name, subscription_id, api_version)

Get properties of a worker pool.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.worker_pool import WorkerPool
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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    worker_pool_name = 'worker_pool_name_example' # str | Name of worker pool
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get properties of a worker pool.
        api_response = api_instance.hosting_environments_get_worker_pool(resource_group_name, name, worker_pool_name, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_worker_pool:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_worker_pool: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **worker_pool_name** | **str**| Name of worker pool | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**WorkerPool**](WorkerPool.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_worker_pool_instance_metric_definitions**
> object hosting_environments_get_worker_pool_instance_metric_definitions(resource_group_name, name, worker_pool_name, instance, subscription_id, api_version)

Get metric definitions for a specific instance of a worker pool of a hostingEnvironment (App Service Environment).

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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    worker_pool_name = 'worker_pool_name_example' # str | Name of worker pool
    instance = 'instance_example' # str | Name of instance in the worker pool
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get metric definitions for a specific instance of a worker pool of a hostingEnvironment (App Service Environment).
        api_response = api_instance.hosting_environments_get_worker_pool_instance_metric_definitions(resource_group_name, name, worker_pool_name, instance, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_worker_pool_instance_metric_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_worker_pool_instance_metric_definitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **worker_pool_name** | **str**| Name of worker pool | 
 **instance** | **str**| Name of instance in the worker pool | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_worker_pool_instance_metrics**
> object hosting_environments_get_worker_pool_instance_metrics(resource_group_name, name, worker_pool_name, instance, subscription_id, api_version, details=details, filter=filter)

Get metrics for a specific instance of a worker pool of a hostingEnvironment (App Service Environment).

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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    worker_pool_name = 'worker_pool_name_example' # str | Name of worker pool
    instance = 'instance_example' # str | Name of instance in the worker pool
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    details = True # bool | Include instance details (optional)
    filter = 'filter_example' # str | Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'. (optional)

    try:
        # Get metrics for a specific instance of a worker pool of a hostingEnvironment (App Service Environment).
        api_response = api_instance.hosting_environments_get_worker_pool_instance_metrics(resource_group_name, name, worker_pool_name, instance, subscription_id, api_version, details=details, filter=filter)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_worker_pool_instance_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_worker_pool_instance_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **worker_pool_name** | **str**| Name of worker pool | 
 **instance** | **str**| Name of instance in the worker pool | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **details** | **bool**| Include instance details | [optional] 
 **filter** | **str**| Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter&#x3D;(name.value eq &#39;Metric1&#39; or name.value eq &#39;Metric2&#39;) and startTime eq &#39;2014-01-01T00:00:00Z&#39; and endTime eq &#39;2014-12-31T23:59:59Z&#39; and timeGrain eq duration&#39;[Hour|Minute|Day]&#39;. | [optional] 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_worker_pool_skus**
> SkuInfoCollection hosting_environments_get_worker_pool_skus(resource_group_name, name, worker_pool_name, subscription_id, api_version)

Get available skus for scaling a worker pool.

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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    worker_pool_name = 'worker_pool_name_example' # str | Name of worker pool
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get available skus for scaling a worker pool.
        api_response = api_instance.hosting_environments_get_worker_pool_skus(resource_group_name, name, worker_pool_name, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_worker_pool_skus:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_worker_pool_skus: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **worker_pool_name** | **str**| Name of worker pool | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**SkuInfoCollection**](SkuInfoCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_get_worker_pools**
> WorkerPoolCollection hosting_environments_get_worker_pools(resource_group_name, name, subscription_id, api_version)

Get all worker pools

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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all worker pools
        api_response = api_instance.hosting_environments_get_worker_pools(resource_group_name, name, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_get_worker_pools:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_get_worker_pools: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**WorkerPoolCollection**](WorkerPoolCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_reboot_hosting_environment**
> object hosting_environments_reboot_hosting_environment(resource_group_name, name, subscription_id, api_version)

Reboots all machines in a hostingEnvironment (App Service Environment).

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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Reboots all machines in a hostingEnvironment (App Service Environment).
        api_response = api_instance.hosting_environments_reboot_hosting_environment(resource_group_name, name, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_reboot_hosting_environment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_reboot_hosting_environment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Asynchronous operation in progress |  -  |
**400** | Bad request |  -  |
**404** | Not found |  -  |
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_resume_hosting_environment**
> SiteCollection hosting_environments_resume_hosting_environment(resource_group_name, name, subscription_id, api_version)

Resumes the hostingEnvironment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_collection import SiteCollection
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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Resumes the hostingEnvironment.
        api_response = api_instance.hosting_environments_resume_hosting_environment(resource_group_name, name, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_resume_hosting_environment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_resume_hosting_environment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**SiteCollection**](SiteCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Operation is in progress |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hosting_environments_suspend_hosting_environment**
> SiteCollection hosting_environments_suspend_hosting_environment(resource_group_name, name, subscription_id, api_version)

Suspends the hostingEnvironment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_collection import SiteCollection
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
    api_instance = openapi_client.HostingEnvironmentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of hostingEnvironment (App Service Environment)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Suspends the hostingEnvironment.
        api_response = api_instance.hosting_environments_suspend_hosting_environment(resource_group_name, name, subscription_id, api_version)
        print("The response of HostingEnvironmentsApi->hosting_environments_suspend_hosting_environment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HostingEnvironmentsApi->hosting_environments_suspend_hosting_environment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of hostingEnvironment (App Service Environment) | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**SiteCollection**](SiteCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Operation is in progress |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

