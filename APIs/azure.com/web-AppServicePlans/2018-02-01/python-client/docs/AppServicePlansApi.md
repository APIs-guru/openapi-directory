# openapi_client.AppServicePlansApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**app_service_plans_create_or_update**](AppServicePlansApi.md#app_service_plans_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name} | Creates or updates an App Service Plan.
[**app_service_plans_create_or_update_vnet_route**](AppServicePlansApi.md#app_service_plans_create_or_update_vnet_route) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections/{vnetName}/routes/{routeName} | Create or update a Virtual Network route in an App Service plan.
[**app_service_plans_delete**](AppServicePlansApi.md#app_service_plans_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name} | Delete an App Service plan.
[**app_service_plans_delete_hybrid_connection**](AppServicePlansApi.md#app_service_plans_delete_hybrid_connection) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/hybridConnectionNamespaces/{namespaceName}/relays/{relayName} | Delete a Hybrid Connection in use in an App Service plan.
[**app_service_plans_delete_vnet_route**](AppServicePlansApi.md#app_service_plans_delete_vnet_route) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections/{vnetName}/routes/{routeName} | Delete a Virtual Network route in an App Service plan.
[**app_service_plans_get**](AppServicePlansApi.md#app_service_plans_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name} | Get an App Service plan.
[**app_service_plans_get_hybrid_connection**](AppServicePlansApi.md#app_service_plans_get_hybrid_connection) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/hybridConnectionNamespaces/{namespaceName}/relays/{relayName} | Retrieve a Hybrid Connection in use in an App Service plan.
[**app_service_plans_get_hybrid_connection_plan_limit**](AppServicePlansApi.md#app_service_plans_get_hybrid_connection_plan_limit) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/hybridConnectionPlanLimits/limit | Get the maximum number of Hybrid Connections allowed in an App Service plan.
[**app_service_plans_get_route_for_vnet**](AppServicePlansApi.md#app_service_plans_get_route_for_vnet) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections/{vnetName}/routes/{routeName} | Get a Virtual Network route in an App Service plan.
[**app_service_plans_get_server_farm_skus**](AppServicePlansApi.md#app_service_plans_get_server_farm_skus) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/skus | Gets all selectable SKUs for a given App Service Plan
[**app_service_plans_get_vnet_from_server_farm**](AppServicePlansApi.md#app_service_plans_get_vnet_from_server_farm) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections/{vnetName} | Get a Virtual Network associated with an App Service plan.
[**app_service_plans_get_vnet_gateway**](AppServicePlansApi.md#app_service_plans_get_vnet_gateway) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections/{vnetName}/gateways/{gatewayName} | Get a Virtual Network gateway.
[**app_service_plans_list**](AppServicePlansApi.md#app_service_plans_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/serverfarms | Get all App Service plans for a subscription.
[**app_service_plans_list_by_resource_group**](AppServicePlansApi.md#app_service_plans_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms | Get all App Service plans in a resource group.
[**app_service_plans_list_capabilities**](AppServicePlansApi.md#app_service_plans_list_capabilities) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/capabilities | List all capabilities of an App Service plan.
[**app_service_plans_list_hybrid_connection_keys**](AppServicePlansApi.md#app_service_plans_list_hybrid_connection_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/hybridConnectionNamespaces/{namespaceName}/relays/{relayName}/listKeys | Get the send key name and value of a Hybrid Connection.
[**app_service_plans_list_hybrid_connections**](AppServicePlansApi.md#app_service_plans_list_hybrid_connections) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/hybridConnectionRelays | Retrieve all Hybrid Connections in use in an App Service plan.
[**app_service_plans_list_metric_defintions**](AppServicePlansApi.md#app_service_plans_list_metric_defintions) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/metricdefinitions | Get metrics that can be queried for an App Service plan, and their definitions.
[**app_service_plans_list_metrics**](AppServicePlansApi.md#app_service_plans_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/metrics | Get metrics for an App Service plan.
[**app_service_plans_list_routes_for_vnet**](AppServicePlansApi.md#app_service_plans_list_routes_for_vnet) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections/{vnetName}/routes | Get all routes that are associated with a Virtual Network in an App Service plan.
[**app_service_plans_list_usages**](AppServicePlansApi.md#app_service_plans_list_usages) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/usages | Gets server farm usage information
[**app_service_plans_list_vnets**](AppServicePlansApi.md#app_service_plans_list_vnets) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections | Get all Virtual Networks associated with an App Service plan.
[**app_service_plans_list_web_apps**](AppServicePlansApi.md#app_service_plans_list_web_apps) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/sites | Get all apps associated with an App Service plan.
[**app_service_plans_list_web_apps_by_hybrid_connection**](AppServicePlansApi.md#app_service_plans_list_web_apps_by_hybrid_connection) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/hybridConnectionNamespaces/{namespaceName}/relays/{relayName}/sites | Get all apps that use a Hybrid Connection in an App Service Plan.
[**app_service_plans_reboot_worker**](AppServicePlansApi.md#app_service_plans_reboot_worker) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/workers/{workerName}/reboot | Reboot a worker machine in an App Service plan.
[**app_service_plans_restart_web_apps**](AppServicePlansApi.md#app_service_plans_restart_web_apps) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/restartSites | Restart all apps in an App Service plan.
[**app_service_plans_update**](AppServicePlansApi.md#app_service_plans_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name} | Creates or updates an App Service Plan.
[**app_service_plans_update_vnet_gateway**](AppServicePlansApi.md#app_service_plans_update_vnet_gateway) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections/{vnetName}/gateways/{gatewayName} | Update a Virtual Network gateway.
[**app_service_plans_update_vnet_route**](AppServicePlansApi.md#app_service_plans_update_vnet_route) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections/{vnetName}/routes/{routeName} | Create or update a Virtual Network route in an App Service plan.


# **app_service_plans_create_or_update**
> AppServicePlansGet200Response app_service_plans_create_or_update(resource_group_name, name, subscription_id, api_version, app_service_plan)

Creates or updates an App Service Plan.

Creates or updates an App Service Plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_plans_get200_response import AppServicePlansGet200Response
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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service plan.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    app_service_plan = openapi_client.AppServicePlansGet200Response() # AppServicePlansGet200Response | Details of the App Service plan.

    try:
        # Creates or updates an App Service Plan.
        api_response = api_instance.app_service_plans_create_or_update(resource_group_name, name, subscription_id, api_version, app_service_plan)
        print("The response of AppServicePlansApi->app_service_plans_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service plan. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **app_service_plan** | [**AppServicePlansGet200Response**](AppServicePlansGet200Response.md)| Details of the App Service plan. | 

### Return type

[**AppServicePlansGet200Response**](AppServicePlansGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**201** | Created. |  -  |
**202** | Operation is in progress. |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_create_or_update_vnet_route**
> AppServicePlansCreateOrUpdateVnetRouteRequest app_service_plans_create_or_update_vnet_route(resource_group_name, name, vnet_name, route_name, subscription_id, api_version, route)

Create or update a Virtual Network route in an App Service plan.

Create or update a Virtual Network route in an App Service plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_plans_create_or_update_vnet_route_request import AppServicePlansCreateOrUpdateVnetRouteRequest
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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service plan.
    vnet_name = 'vnet_name_example' # str | Name of the Virtual Network.
    route_name = 'route_name_example' # str | Name of the Virtual Network route.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    route = openapi_client.AppServicePlansCreateOrUpdateVnetRouteRequest() # AppServicePlansCreateOrUpdateVnetRouteRequest | Definition of the Virtual Network route.

    try:
        # Create or update a Virtual Network route in an App Service plan.
        api_response = api_instance.app_service_plans_create_or_update_vnet_route(resource_group_name, name, vnet_name, route_name, subscription_id, api_version, route)
        print("The response of AppServicePlansApi->app_service_plans_create_or_update_vnet_route:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_create_or_update_vnet_route: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service plan. | 
 **vnet_name** | **str**| Name of the Virtual Network. | 
 **route_name** | **str**| Name of the Virtual Network route. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **route** | [**AppServicePlansCreateOrUpdateVnetRouteRequest**](AppServicePlansCreateOrUpdateVnetRouteRequest.md)| Definition of the Virtual Network route. | 

### Return type

[**AppServicePlansCreateOrUpdateVnetRouteRequest**](AppServicePlansCreateOrUpdateVnetRouteRequest.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**400** | Invalid request. Ensure that required parameters are given, and that addresses and address spaces are valid. |  -  |
**404** | Route not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_delete**
> app_service_plans_delete(resource_group_name, name, subscription_id, api_version)

Delete an App Service plan.

Delete an App Service plan.

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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service plan.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Delete an App Service plan.
        api_instance.app_service_plans_delete(resource_group_name, name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service plan. | 
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
**200** | OK. |  -  |
**204** | OK. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_delete_hybrid_connection**
> app_service_plans_delete_hybrid_connection(resource_group_name, name, namespace_name, relay_name, subscription_id, api_version)

Delete a Hybrid Connection in use in an App Service plan.

Delete a Hybrid Connection in use in an App Service plan.

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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service plan.
    namespace_name = 'namespace_name_example' # str | Name of the Service Bus namespace.
    relay_name = 'relay_name_example' # str | Name of the Service Bus relay.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Delete a Hybrid Connection in use in an App Service plan.
        api_instance.app_service_plans_delete_hybrid_connection(resource_group_name, name, namespace_name, relay_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_delete_hybrid_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service plan. | 
 **namespace_name** | **str**| Name of the Service Bus namespace. | 
 **relay_name** | **str**| Name of the Service Bus relay. | 
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
**200** | Successfully deleted hybrid connection |  -  |
**204** | Hybrid connection does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_delete_vnet_route**
> app_service_plans_delete_vnet_route(resource_group_name, name, vnet_name, route_name, subscription_id, api_version)

Delete a Virtual Network route in an App Service plan.

Delete a Virtual Network route in an App Service plan.

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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service plan.
    vnet_name = 'vnet_name_example' # str | Name of the Virtual Network.
    route_name = 'route_name_example' # str | Name of the Virtual Network route.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Delete a Virtual Network route in an App Service plan.
        api_instance.app_service_plans_delete_vnet_route(resource_group_name, name, vnet_name, route_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_delete_vnet_route: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service plan. | 
 **vnet_name** | **str**| Name of the Virtual Network. | 
 **route_name** | **str**| Name of the Virtual Network route. | 
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
**200** | Successfully deleted Virtual Network route. |  -  |
**404** | Specified Virtual Network route does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_get**
> AppServicePlansGet200Response app_service_plans_get(resource_group_name, name, subscription_id, api_version)

Get an App Service plan.

Get an App Service plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_plans_get200_response import AppServicePlansGet200Response
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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service plan.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get an App Service plan.
        api_response = api_instance.app_service_plans_get(resource_group_name, name, subscription_id, api_version)
        print("The response of AppServicePlansApi->app_service_plans_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service plan. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**AppServicePlansGet200Response**](AppServicePlansGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**404** | Not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_get_hybrid_connection**
> AppServicePlansGetHybridConnection200Response app_service_plans_get_hybrid_connection(resource_group_name, name, namespace_name, relay_name, subscription_id, api_version)

Retrieve a Hybrid Connection in use in an App Service plan.

Retrieve a Hybrid Connection in use in an App Service plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_plans_get_hybrid_connection200_response import AppServicePlansGetHybridConnection200Response
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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service plan.
    namespace_name = 'namespace_name_example' # str | Name of the Service Bus namespace.
    relay_name = 'relay_name_example' # str | Name of the Service Bus relay.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Retrieve a Hybrid Connection in use in an App Service plan.
        api_response = api_instance.app_service_plans_get_hybrid_connection(resource_group_name, name, namespace_name, relay_name, subscription_id, api_version)
        print("The response of AppServicePlansApi->app_service_plans_get_hybrid_connection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_get_hybrid_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service plan. | 
 **namespace_name** | **str**| Name of the Service Bus namespace. | 
 **relay_name** | **str**| Name of the Service Bus relay. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**AppServicePlansGetHybridConnection200Response**](AppServicePlansGetHybridConnection200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_get_hybrid_connection_plan_limit**
> HybridConnectionLimits app_service_plans_get_hybrid_connection_plan_limit(resource_group_name, name, subscription_id, api_version)

Get the maximum number of Hybrid Connections allowed in an App Service plan.

Get the maximum number of Hybrid Connections allowed in an App Service plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hybrid_connection_limits import HybridConnectionLimits
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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service plan.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get the maximum number of Hybrid Connections allowed in an App Service plan.
        api_response = api_instance.app_service_plans_get_hybrid_connection_plan_limit(resource_group_name, name, subscription_id, api_version)
        print("The response of AppServicePlansApi->app_service_plans_get_hybrid_connection_plan_limit:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_get_hybrid_connection_plan_limit: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service plan. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**HybridConnectionLimits**](HybridConnectionLimits.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_get_route_for_vnet**
> List[AppServicePlansListVnets200ResponseInnerPropertiesRoutesInner] app_service_plans_get_route_for_vnet(resource_group_name, name, vnet_name, route_name, subscription_id, api_version)

Get a Virtual Network route in an App Service plan.

Get a Virtual Network route in an App Service plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_plans_list_vnets200_response_inner_properties_routes_inner import AppServicePlansListVnets200ResponseInnerPropertiesRoutesInner
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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service plan.
    vnet_name = 'vnet_name_example' # str | Name of the Virtual Network.
    route_name = 'route_name_example' # str | Name of the Virtual Network route.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get a Virtual Network route in an App Service plan.
        api_response = api_instance.app_service_plans_get_route_for_vnet(resource_group_name, name, vnet_name, route_name, subscription_id, api_version)
        print("The response of AppServicePlansApi->app_service_plans_get_route_for_vnet:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_get_route_for_vnet: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service plan. | 
 **vnet_name** | **str**| Name of the Virtual Network. | 
 **route_name** | **str**| Name of the Virtual Network route. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**List[AppServicePlansListVnets200ResponseInnerPropertiesRoutesInner]**](AppServicePlansListVnets200ResponseInnerPropertiesRoutesInner.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**404** | Specified route does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_get_server_farm_skus**
> object app_service_plans_get_server_farm_skus(resource_group_name, name, subscription_id, api_version)

Gets all selectable SKUs for a given App Service Plan

Gets all selectable SKUs for a given App Service Plan

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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of App Service Plan
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets all selectable SKUs for a given App Service Plan
        api_response = api_instance.app_service_plans_get_server_farm_skus(resource_group_name, name, subscription_id, api_version)
        print("The response of AppServicePlansApi->app_service_plans_get_server_farm_skus:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_get_server_farm_skus: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of App Service Plan | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_get_vnet_from_server_farm**
> AppServicePlansGetVnetFromServerFarm200Response app_service_plans_get_vnet_from_server_farm(resource_group_name, name, vnet_name, subscription_id, api_version)

Get a Virtual Network associated with an App Service plan.

Get a Virtual Network associated with an App Service plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_plans_get_vnet_from_server_farm200_response import AppServicePlansGetVnetFromServerFarm200Response
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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service plan.
    vnet_name = 'vnet_name_example' # str | Name of the Virtual Network.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get a Virtual Network associated with an App Service plan.
        api_response = api_instance.app_service_plans_get_vnet_from_server_farm(resource_group_name, name, vnet_name, subscription_id, api_version)
        print("The response of AppServicePlansApi->app_service_plans_get_vnet_from_server_farm:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_get_vnet_from_server_farm: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service plan. | 
 **vnet_name** | **str**| Name of the Virtual Network. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**AppServicePlansGetVnetFromServerFarm200Response**](AppServicePlansGetVnetFromServerFarm200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**404** | Virtual network could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_get_vnet_gateway**
> AppServicePlansGetVnetGateway200Response app_service_plans_get_vnet_gateway(resource_group_name, name, vnet_name, gateway_name, subscription_id, api_version)

Get a Virtual Network gateway.

Get a Virtual Network gateway.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_plans_get_vnet_gateway200_response import AppServicePlansGetVnetGateway200Response
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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service plan.
    vnet_name = 'vnet_name_example' # str | Name of the Virtual Network.
    gateway_name = 'gateway_name_example' # str | Name of the gateway. Only the 'primary' gateway is supported.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get a Virtual Network gateway.
        api_response = api_instance.app_service_plans_get_vnet_gateway(resource_group_name, name, vnet_name, gateway_name, subscription_id, api_version)
        print("The response of AppServicePlansApi->app_service_plans_get_vnet_gateway:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_get_vnet_gateway: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service plan. | 
 **vnet_name** | **str**| Name of the Virtual Network. | 
 **gateway_name** | **str**| Name of the gateway. Only the &#39;primary&#39; gateway is supported. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**AppServicePlansGetVnetGateway200Response**](AppServicePlansGetVnetGateway200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_list**
> AppServicePlansList200Response app_service_plans_list(subscription_id, api_version, detailed=detailed)

Get all App Service plans for a subscription.

Get all App Service plans for a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_plans_list200_response import AppServicePlansList200Response
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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    detailed = True # bool | Specify <code>true</code> to return all App Service plan properties. The default is <code>false</code>, which returns a subset of the properties.  Retrieval of all properties may increase the API latency. (optional)

    try:
        # Get all App Service plans for a subscription.
        api_response = api_instance.app_service_plans_list(subscription_id, api_version, detailed=detailed)
        print("The response of AppServicePlansApi->app_service_plans_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **detailed** | **bool**| Specify &lt;code&gt;true&lt;/code&gt; to return all App Service plan properties. The default is &lt;code&gt;false&lt;/code&gt;, which returns a subset of the properties.  Retrieval of all properties may increase the API latency. | [optional] 

### Return type

[**AppServicePlansList200Response**](AppServicePlansList200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_list_by_resource_group**
> AppServicePlansList200Response app_service_plans_list_by_resource_group(resource_group_name, subscription_id, api_version)

Get all App Service plans in a resource group.

Get all App Service plans in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_plans_list200_response import AppServicePlansList200Response
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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all App Service plans in a resource group.
        api_response = api_instance.app_service_plans_list_by_resource_group(resource_group_name, subscription_id, api_version)
        print("The response of AppServicePlansApi->app_service_plans_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**AppServicePlansList200Response**](AppServicePlansList200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_list_capabilities**
> List[AppServicePlansList200ResponseValueInnerSkuCapabilitiesInner] app_service_plans_list_capabilities(resource_group_name, name, subscription_id, api_version)

List all capabilities of an App Service plan.

List all capabilities of an App Service plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_plans_list200_response_value_inner_sku_capabilities_inner import AppServicePlansList200ResponseValueInnerSkuCapabilitiesInner
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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service plan.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # List all capabilities of an App Service plan.
        api_response = api_instance.app_service_plans_list_capabilities(resource_group_name, name, subscription_id, api_version)
        print("The response of AppServicePlansApi->app_service_plans_list_capabilities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_list_capabilities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service plan. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**List[AppServicePlansList200ResponseValueInnerSkuCapabilitiesInner]**](AppServicePlansList200ResponseValueInnerSkuCapabilitiesInner.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_list_hybrid_connection_keys**
> AppServicePlansListHybridConnectionKeys200Response app_service_plans_list_hybrid_connection_keys(resource_group_name, name, namespace_name, relay_name, subscription_id, api_version)

Get the send key name and value of a Hybrid Connection.

Get the send key name and value of a Hybrid Connection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_plans_list_hybrid_connection_keys200_response import AppServicePlansListHybridConnectionKeys200Response
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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service plan.
    namespace_name = 'namespace_name_example' # str | The name of the Service Bus namespace.
    relay_name = 'relay_name_example' # str | The name of the Service Bus relay.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get the send key name and value of a Hybrid Connection.
        api_response = api_instance.app_service_plans_list_hybrid_connection_keys(resource_group_name, name, namespace_name, relay_name, subscription_id, api_version)
        print("The response of AppServicePlansApi->app_service_plans_list_hybrid_connection_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_list_hybrid_connection_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service plan. | 
 **namespace_name** | **str**| The name of the Service Bus namespace. | 
 **relay_name** | **str**| The name of the Service Bus relay. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**AppServicePlansListHybridConnectionKeys200Response**](AppServicePlansListHybridConnectionKeys200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_list_hybrid_connections**
> HybridConnectionCollection app_service_plans_list_hybrid_connections(resource_group_name, name, subscription_id, api_version)

Retrieve all Hybrid Connections in use in an App Service plan.

Retrieve all Hybrid Connections in use in an App Service plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hybrid_connection_collection import HybridConnectionCollection
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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service plan.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Retrieve all Hybrid Connections in use in an App Service plan.
        api_response = api_instance.app_service_plans_list_hybrid_connections(resource_group_name, name, subscription_id, api_version)
        print("The response of AppServicePlansApi->app_service_plans_list_hybrid_connections:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_list_hybrid_connections: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service plan. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**HybridConnectionCollection**](HybridConnectionCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_list_metric_defintions**
> AppServicePlansListMetricDefintions200Response app_service_plans_list_metric_defintions(resource_group_name, name, subscription_id, api_version)

Get metrics that can be queried for an App Service plan, and their definitions.

Get metrics that can be queried for an App Service plan, and their definitions.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_plans_list_metric_defintions200_response import AppServicePlansListMetricDefintions200Response
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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service plan.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get metrics that can be queried for an App Service plan, and their definitions.
        api_response = api_instance.app_service_plans_list_metric_defintions(resource_group_name, name, subscription_id, api_version)
        print("The response of AppServicePlansApi->app_service_plans_list_metric_defintions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_list_metric_defintions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service plan. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**AppServicePlansListMetricDefintions200Response**](AppServicePlansListMetricDefintions200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_list_metrics**
> AppServicePlansListMetrics200Response app_service_plans_list_metrics(resource_group_name, name, subscription_id, api_version, details=details, filter=filter)

Get metrics for an App Service plan.

Get metrics for an App Service plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_plans_list_metrics200_response import AppServicePlansListMetrics200Response
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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service plan.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    details = True # bool | Specify <code>true</code> to include instance details. The default is <code>false</code>. (optional)
    filter = 'filter_example' # str | Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'. (optional)

    try:
        # Get metrics for an App Service plan.
        api_response = api_instance.app_service_plans_list_metrics(resource_group_name, name, subscription_id, api_version, details=details, filter=filter)
        print("The response of AppServicePlansApi->app_service_plans_list_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_list_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service plan. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **details** | **bool**| Specify &lt;code&gt;true&lt;/code&gt; to include instance details. The default is &lt;code&gt;false&lt;/code&gt;. | [optional] 
 **filter** | **str**| Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter&#x3D;(name.value eq &#39;Metric1&#39; or name.value eq &#39;Metric2&#39;) and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration&#39;[Hour|Minute|Day]&#39;. | [optional] 

### Return type

[**AppServicePlansListMetrics200Response**](AppServicePlansListMetrics200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_list_routes_for_vnet**
> List[AppServicePlansListVnets200ResponseInnerPropertiesRoutesInner] app_service_plans_list_routes_for_vnet(resource_group_name, name, vnet_name, subscription_id, api_version)

Get all routes that are associated with a Virtual Network in an App Service plan.

Get all routes that are associated with a Virtual Network in an App Service plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_plans_list_vnets200_response_inner_properties_routes_inner import AppServicePlansListVnets200ResponseInnerPropertiesRoutesInner
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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service plan.
    vnet_name = 'vnet_name_example' # str | Name of the Virtual Network.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all routes that are associated with a Virtual Network in an App Service plan.
        api_response = api_instance.app_service_plans_list_routes_for_vnet(resource_group_name, name, vnet_name, subscription_id, api_version)
        print("The response of AppServicePlansApi->app_service_plans_list_routes_for_vnet:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_list_routes_for_vnet: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service plan. | 
 **vnet_name** | **str**| Name of the Virtual Network. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**List[AppServicePlansListVnets200ResponseInnerPropertiesRoutesInner]**](AppServicePlansListVnets200ResponseInnerPropertiesRoutesInner.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_list_usages**
> AppServicePlansListUsages200Response app_service_plans_list_usages(resource_group_name, name, subscription_id, api_version, filter=filter)

Gets server farm usage information

Gets server farm usage information

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_plans_list_usages200_response import AppServicePlansListUsages200Response
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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of App Service Plan
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    filter = 'filter_example' # str | Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2'). (optional)

    try:
        # Gets server farm usage information
        api_response = api_instance.app_service_plans_list_usages(resource_group_name, name, subscription_id, api_version, filter=filter)
        print("The response of AppServicePlansApi->app_service_plans_list_usages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_list_usages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of App Service Plan | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **filter** | **str**| Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter&#x3D;(name.value eq &#39;Metric1&#39; or name.value eq &#39;Metric2&#39;). | [optional] 

### Return type

[**AppServicePlansListUsages200Response**](AppServicePlansListUsages200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_list_vnets**
> List[AppServicePlansListVnets200ResponseInner] app_service_plans_list_vnets(resource_group_name, name, subscription_id, api_version)

Get all Virtual Networks associated with an App Service plan.

Get all Virtual Networks associated with an App Service plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_plans_list_vnets200_response_inner import AppServicePlansListVnets200ResponseInner
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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service plan.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all Virtual Networks associated with an App Service plan.
        api_response = api_instance.app_service_plans_list_vnets(resource_group_name, name, subscription_id, api_version)
        print("The response of AppServicePlansApi->app_service_plans_list_vnets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_list_vnets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service plan. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**List[AppServicePlansListVnets200ResponseInner]**](AppServicePlansListVnets200ResponseInner.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_list_web_apps**
> AppServicePlansListWebApps200Response app_service_plans_list_web_apps(resource_group_name, name, subscription_id, api_version, skip_token=skip_token, filter=filter, top=top)

Get all apps associated with an App Service plan.

Get all apps associated with an App Service plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_plans_list_web_apps200_response import AppServicePlansListWebApps200Response
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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service plan.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    skip_token = 'skip_token_example' # str | Skip to a web app in the list of webapps associated with app service plan. If specified, the resulting list will contain web apps starting from (including) the skipToken. Otherwise, the resulting list contains web apps from the start of the list (optional)
    filter = 'filter_example' # str | Supported filter: $filter=state eq running. Returns only web apps that are currently running (optional)
    top = 'top_example' # str | List page size. If specified, results are paged. (optional)

    try:
        # Get all apps associated with an App Service plan.
        api_response = api_instance.app_service_plans_list_web_apps(resource_group_name, name, subscription_id, api_version, skip_token=skip_token, filter=filter, top=top)
        print("The response of AppServicePlansApi->app_service_plans_list_web_apps:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_list_web_apps: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service plan. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **skip_token** | **str**| Skip to a web app in the list of webapps associated with app service plan. If specified, the resulting list will contain web apps starting from (including) the skipToken. Otherwise, the resulting list contains web apps from the start of the list | [optional] 
 **filter** | **str**| Supported filter: $filter&#x3D;state eq running. Returns only web apps that are currently running | [optional] 
 **top** | **str**| List page size. If specified, results are paged. | [optional] 

### Return type

[**AppServicePlansListWebApps200Response**](AppServicePlansListWebApps200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_list_web_apps_by_hybrid_connection**
> ResourceCollection app_service_plans_list_web_apps_by_hybrid_connection(resource_group_name, name, namespace_name, relay_name, subscription_id, api_version)

Get all apps that use a Hybrid Connection in an App Service Plan.

Get all apps that use a Hybrid Connection in an App Service Plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_collection import ResourceCollection
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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service plan.
    namespace_name = 'namespace_name_example' # str | Name of the Hybrid Connection namespace.
    relay_name = 'relay_name_example' # str | Name of the Hybrid Connection relay.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all apps that use a Hybrid Connection in an App Service Plan.
        api_response = api_instance.app_service_plans_list_web_apps_by_hybrid_connection(resource_group_name, name, namespace_name, relay_name, subscription_id, api_version)
        print("The response of AppServicePlansApi->app_service_plans_list_web_apps_by_hybrid_connection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_list_web_apps_by_hybrid_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service plan. | 
 **namespace_name** | **str**| Name of the Hybrid Connection namespace. | 
 **relay_name** | **str**| Name of the Hybrid Connection relay. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**ResourceCollection**](ResourceCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_reboot_worker**
> app_service_plans_reboot_worker(resource_group_name, name, worker_name, subscription_id, api_version)

Reboot a worker machine in an App Service plan.

Reboot a worker machine in an App Service plan.

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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service plan.
    worker_name = 'worker_name_example' # str | Name of worker machine, which typically starts with RD.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Reboot a worker machine in an App Service plan.
        api_instance.app_service_plans_reboot_worker(resource_group_name, name, worker_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_reboot_worker: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service plan. | 
 **worker_name** | **str**| Name of worker machine, which typically starts with RD. | 
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
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_restart_web_apps**
> app_service_plans_restart_web_apps(resource_group_name, name, subscription_id, api_version, soft_restart=soft_restart)

Restart all apps in an App Service plan.

Restart all apps in an App Service plan.

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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service plan.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    soft_restart = True # bool | Specify <code>true</code> to perform a soft restart, applies the configuration settings and restarts the apps if necessary. The default is <code>false</code>, which always restarts and reprovisions the apps (optional)

    try:
        # Restart all apps in an App Service plan.
        api_instance.app_service_plans_restart_web_apps(resource_group_name, name, subscription_id, api_version, soft_restart=soft_restart)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_restart_web_apps: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service plan. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **soft_restart** | **bool**| Specify &lt;code&gt;true&lt;/code&gt; to perform a soft restart, applies the configuration settings and restarts the apps if necessary. The default is &lt;code&gt;false&lt;/code&gt;, which always restarts and reprovisions the apps | [optional] 

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
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_update**
> AppServicePlansGet200Response app_service_plans_update(resource_group_name, name, subscription_id, api_version, app_service_plan)

Creates or updates an App Service Plan.

Creates or updates an App Service Plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_plan_patch_resource import AppServicePlanPatchResource
from openapi_client.models.app_service_plans_get200_response import AppServicePlansGet200Response
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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service plan.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    app_service_plan = openapi_client.AppServicePlanPatchResource() # AppServicePlanPatchResource | Details of the App Service plan.

    try:
        # Creates or updates an App Service Plan.
        api_response = api_instance.app_service_plans_update(resource_group_name, name, subscription_id, api_version, app_service_plan)
        print("The response of AppServicePlansApi->app_service_plans_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service plan. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **app_service_plan** | [**AppServicePlanPatchResource**](AppServicePlanPatchResource.md)| Details of the App Service plan. | 

### Return type

[**AppServicePlansGet200Response**](AppServicePlansGet200Response.md)

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
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_update_vnet_gateway**
> AppServicePlansGetVnetGateway200Response app_service_plans_update_vnet_gateway(resource_group_name, name, vnet_name, gateway_name, subscription_id, api_version, connection_envelope)

Update a Virtual Network gateway.

Update a Virtual Network gateway.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_plans_get_vnet_gateway200_response import AppServicePlansGetVnetGateway200Response
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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service plan.
    vnet_name = 'vnet_name_example' # str | Name of the Virtual Network.
    gateway_name = 'gateway_name_example' # str | Name of the gateway. Only the 'primary' gateway is supported.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    connection_envelope = openapi_client.AppServicePlansGetVnetGateway200Response() # AppServicePlansGetVnetGateway200Response | Definition of the gateway.

    try:
        # Update a Virtual Network gateway.
        api_response = api_instance.app_service_plans_update_vnet_gateway(resource_group_name, name, vnet_name, gateway_name, subscription_id, api_version, connection_envelope)
        print("The response of AppServicePlansApi->app_service_plans_update_vnet_gateway:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_update_vnet_gateway: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service plan. | 
 **vnet_name** | **str**| Name of the Virtual Network. | 
 **gateway_name** | **str**| Name of the gateway. Only the &#39;primary&#39; gateway is supported. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **connection_envelope** | [**AppServicePlansGetVnetGateway200Response**](AppServicePlansGetVnetGateway200Response.md)| Definition of the gateway. | 

### Return type

[**AppServicePlansGetVnetGateway200Response**](AppServicePlansGetVnetGateway200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_plans_update_vnet_route**
> AppServicePlansCreateOrUpdateVnetRouteRequest app_service_plans_update_vnet_route(resource_group_name, name, vnet_name, route_name, subscription_id, api_version, route)

Create or update a Virtual Network route in an App Service plan.

Create or update a Virtual Network route in an App Service plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_plans_create_or_update_vnet_route_request import AppServicePlansCreateOrUpdateVnetRouteRequest
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
    api_instance = openapi_client.AppServicePlansApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the App Service plan.
    vnet_name = 'vnet_name_example' # str | Name of the Virtual Network.
    route_name = 'route_name_example' # str | Name of the Virtual Network route.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    route = openapi_client.AppServicePlansCreateOrUpdateVnetRouteRequest() # AppServicePlansCreateOrUpdateVnetRouteRequest | Definition of the Virtual Network route.

    try:
        # Create or update a Virtual Network route in an App Service plan.
        api_response = api_instance.app_service_plans_update_vnet_route(resource_group_name, name, vnet_name, route_name, subscription_id, api_version, route)
        print("The response of AppServicePlansApi->app_service_plans_update_vnet_route:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServicePlansApi->app_service_plans_update_vnet_route: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the App Service plan. | 
 **vnet_name** | **str**| Name of the Virtual Network. | 
 **route_name** | **str**| Name of the Virtual Network route. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **route** | [**AppServicePlansCreateOrUpdateVnetRouteRequest**](AppServicePlansCreateOrUpdateVnetRouteRequest.md)| Definition of the Virtual Network route. | 

### Return type

[**AppServicePlansCreateOrUpdateVnetRouteRequest**](AppServicePlansCreateOrUpdateVnetRouteRequest.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**400** | Invalid request. Ensure that required parameters are given, and that addresses and address spaces are valid. |  -  |
**404** | Route not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

