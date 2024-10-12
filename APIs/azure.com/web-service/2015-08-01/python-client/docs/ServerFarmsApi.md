# openapi_client.ServerFarmsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**server_farms_create_or_update_server_farm**](ServerFarmsApi.md#server_farms_create_or_update_server_farm) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name} | Creates or updates an App Service Plan
[**server_farms_create_or_update_vnet_route**](ServerFarmsApi.md#server_farms_create_or_update_vnet_route) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections/{vnetName}/routes/{routeName} | Creates a new route or updates an existing route for a vnet in an app service plan.
[**server_farms_delete_server_farm**](ServerFarmsApi.md#server_farms_delete_server_farm) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name} | Deletes a App Service Plan
[**server_farms_delete_vnet_route**](ServerFarmsApi.md#server_farms_delete_vnet_route) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections/{vnetName}/routes/{routeName} | Deletes an existing route for a vnet in an app service plan.
[**server_farms_get_route_for_vnet**](ServerFarmsApi.md#server_farms_get_route_for_vnet) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections/{vnetName}/routes/{routeName} | Gets a specific route associated with a vnet, in an app service plan
[**server_farms_get_routes_for_vnet**](ServerFarmsApi.md#server_farms_get_routes_for_vnet) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections/{vnetName}/routes | Gets a list of all routes associated with a vnet, in an app service plan
[**server_farms_get_server_farm**](ServerFarmsApi.md#server_farms_get_server_farm) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name} | Gets specified App Service Plan in a resource group
[**server_farms_get_server_farm_metric_defintions**](ServerFarmsApi.md#server_farms_get_server_farm_metric_defintions) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/metricdefinitions | List of metrics that can be queried for an App Service Plan
[**server_farms_get_server_farm_metrics**](ServerFarmsApi.md#server_farms_get_server_farm_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/metrics | Queries for App Service Plan metrics
[**server_farms_get_server_farm_operation**](ServerFarmsApi.md#server_farms_get_server_farm_operation) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/operationresults/{operationId} | Gets a server farm operation
[**server_farms_get_server_farm_sites**](ServerFarmsApi.md#server_farms_get_server_farm_sites) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/sites | Gets list of Apps associated with an App Service Plan
[**server_farms_get_server_farm_vnet_gateway**](ServerFarmsApi.md#server_farms_get_server_farm_vnet_gateway) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections/{vnetName}/gateways/{gatewayName} | Gets the vnet gateway.
[**server_farms_get_server_farms**](ServerFarmsApi.md#server_farms_get_server_farms) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms | Gets collection of App Service Plans in a resource group for a given subscription.
[**server_farms_get_vnet_from_server_farm**](ServerFarmsApi.md#server_farms_get_vnet_from_server_farm) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections/{vnetName} | Gets a vnet associated with an App Service Plan
[**server_farms_get_vnets_for_server_farm**](ServerFarmsApi.md#server_farms_get_vnets_for_server_farm) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections | Gets list of VNets associated with App Service Plan
[**server_farms_reboot_worker_for_server_farm**](ServerFarmsApi.md#server_farms_reboot_worker_for_server_farm) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/workers/{workerName}/reboot | Submit a reboot request for a worker machine in the specified server farm
[**server_farms_restart_sites_for_server_farm**](ServerFarmsApi.md#server_farms_restart_sites_for_server_farm) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/restartSites | Restarts web apps in a specified App Service Plan
[**server_farms_update_server_farm_vnet_gateway**](ServerFarmsApi.md#server_farms_update_server_farm_vnet_gateway) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections/{vnetName}/gateways/{gatewayName} | Updates the vnet gateway
[**server_farms_update_vnet_route**](ServerFarmsApi.md#server_farms_update_vnet_route) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections/{vnetName}/routes/{routeName} | Creates a new route or updates an existing route for a vnet in an app service plan.


# **server_farms_create_or_update_server_farm**
> ServerFarmWithRichSku server_farms_create_or_update_server_farm(resource_group_name, name, subscription_id, api_version, server_farm_envelope, allow_pending_state=allow_pending_state)

Creates or updates an App Service Plan

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.server_farm_with_rich_sku import ServerFarmWithRichSku
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
    api_instance = openapi_client.ServerFarmsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of App Service Plan
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    server_farm_envelope = openapi_client.ServerFarmWithRichSku() # ServerFarmWithRichSku | Details of App Service Plan
    allow_pending_state = True # bool | OBSOLETE: If true, allow pending state for App Service Plan (optional)

    try:
        # Creates or updates an App Service Plan
        api_response = api_instance.server_farms_create_or_update_server_farm(resource_group_name, name, subscription_id, api_version, server_farm_envelope, allow_pending_state=allow_pending_state)
        print("The response of ServerFarmsApi->server_farms_create_or_update_server_farm:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerFarmsApi->server_farms_create_or_update_server_farm: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of App Service Plan | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **server_farm_envelope** | [**ServerFarmWithRichSku**](ServerFarmWithRichSku.md)| Details of App Service Plan | 
 **allow_pending_state** | **bool**| OBSOLETE: If true, allow pending state for App Service Plan | [optional] 

### Return type

[**ServerFarmWithRichSku**](ServerFarmWithRichSku.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_farms_create_or_update_vnet_route**
> VnetRoute server_farms_create_or_update_vnet_route(resource_group_name, name, vnet_name, route_name, subscription_id, api_version, route)

Creates a new route or updates an existing route for a vnet in an app service plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vnet_route import VnetRoute
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
    api_instance = openapi_client.ServerFarmsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of App Service Plan
    vnet_name = 'vnet_name_example' # str | Name of virtual network
    route_name = 'route_name_example' # str | Name of the virtual network route
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    route = openapi_client.VnetRoute() # VnetRoute | The route object

    try:
        # Creates a new route or updates an existing route for a vnet in an app service plan.
        api_response = api_instance.server_farms_create_or_update_vnet_route(resource_group_name, name, vnet_name, route_name, subscription_id, api_version, route)
        print("The response of ServerFarmsApi->server_farms_create_or_update_vnet_route:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerFarmsApi->server_farms_create_or_update_vnet_route: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of App Service Plan | 
 **vnet_name** | **str**| Name of virtual network | 
 **route_name** | **str**| Name of the virtual network route | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **route** | [**VnetRoute**](VnetRoute.md)| The route object | 

### Return type

[**VnetRoute**](VnetRoute.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid request. Ensure that required parameters are given, and that addresses and address spaces are valid |  -  |
**404** | Route not found. This will only occur when using the PATCH verb. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_farms_delete_server_farm**
> object server_farms_delete_server_farm(resource_group_name, name, subscription_id, api_version)

Deletes a App Service Plan

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
    api_instance = openapi_client.ServerFarmsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of App Service Plan
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Deletes a App Service Plan
        api_response = api_instance.server_farms_delete_server_farm(resource_group_name, name, subscription_id, api_version)
        print("The response of ServerFarmsApi->server_farms_delete_server_farm:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerFarmsApi->server_farms_delete_server_farm: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of App Service Plan | 
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

# **server_farms_delete_vnet_route**
> object server_farms_delete_vnet_route(resource_group_name, name, vnet_name, route_name, subscription_id, api_version)

Deletes an existing route for a vnet in an app service plan.

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
    api_instance = openapi_client.ServerFarmsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of App Service Plan
    vnet_name = 'vnet_name_example' # str | Name of virtual network
    route_name = 'route_name_example' # str | Name of the virtual network route
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Deletes an existing route for a vnet in an app service plan.
        api_response = api_instance.server_farms_delete_vnet_route(resource_group_name, name, vnet_name, route_name, subscription_id, api_version)
        print("The response of ServerFarmsApi->server_farms_delete_vnet_route:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerFarmsApi->server_farms_delete_vnet_route: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of App Service Plan | 
 **vnet_name** | **str**| Name of virtual network | 
 **route_name** | **str**| Name of the virtual network route | 
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
**404** | Specified route does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_farms_get_route_for_vnet**
> List[VnetRoute] server_farms_get_route_for_vnet(resource_group_name, name, vnet_name, route_name, subscription_id, api_version)

Gets a specific route associated with a vnet, in an app service plan

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vnet_route import VnetRoute
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
    api_instance = openapi_client.ServerFarmsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of App Service Plan
    vnet_name = 'vnet_name_example' # str | Name of virtual network
    route_name = 'route_name_example' # str | Name of the virtual network route
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets a specific route associated with a vnet, in an app service plan
        api_response = api_instance.server_farms_get_route_for_vnet(resource_group_name, name, vnet_name, route_name, subscription_id, api_version)
        print("The response of ServerFarmsApi->server_farms_get_route_for_vnet:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerFarmsApi->server_farms_get_route_for_vnet: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of App Service Plan | 
 **vnet_name** | **str**| Name of virtual network | 
 **route_name** | **str**| Name of the virtual network route | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**List[VnetRoute]**](VnetRoute.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Specified route does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_farms_get_routes_for_vnet**
> List[VnetRoute] server_farms_get_routes_for_vnet(resource_group_name, name, vnet_name, subscription_id, api_version)

Gets a list of all routes associated with a vnet, in an app service plan

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vnet_route import VnetRoute
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
    api_instance = openapi_client.ServerFarmsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of App Service Plan
    vnet_name = 'vnet_name_example' # str | Name of virtual network
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets a list of all routes associated with a vnet, in an app service plan
        api_response = api_instance.server_farms_get_routes_for_vnet(resource_group_name, name, vnet_name, subscription_id, api_version)
        print("The response of ServerFarmsApi->server_farms_get_routes_for_vnet:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerFarmsApi->server_farms_get_routes_for_vnet: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of App Service Plan | 
 **vnet_name** | **str**| Name of virtual network | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**List[VnetRoute]**](VnetRoute.md)

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

# **server_farms_get_server_farm**
> ServerFarmWithRichSku server_farms_get_server_farm(resource_group_name, name, subscription_id, api_version)

Gets specified App Service Plan in a resource group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.server_farm_with_rich_sku import ServerFarmWithRichSku
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
    api_instance = openapi_client.ServerFarmsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of App Service Plan
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets specified App Service Plan in a resource group
        api_response = api_instance.server_farms_get_server_farm(resource_group_name, name, subscription_id, api_version)
        print("The response of ServerFarmsApi->server_farms_get_server_farm:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerFarmsApi->server_farms_get_server_farm: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of App Service Plan | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**ServerFarmWithRichSku**](ServerFarmWithRichSku.md)

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

# **server_farms_get_server_farm_metric_defintions**
> MetricDefinitionCollection server_farms_get_server_farm_metric_defintions(resource_group_name, name, subscription_id, api_version)

List of metrics that can be queried for an App Service Plan

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
    api_instance = openapi_client.ServerFarmsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of App Service Plan
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # List of metrics that can be queried for an App Service Plan
        api_response = api_instance.server_farms_get_server_farm_metric_defintions(resource_group_name, name, subscription_id, api_version)
        print("The response of ServerFarmsApi->server_farms_get_server_farm_metric_defintions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerFarmsApi->server_farms_get_server_farm_metric_defintions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of App Service Plan | 
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

# **server_farms_get_server_farm_metrics**
> ResourceMetricCollection server_farms_get_server_farm_metrics(resource_group_name, name, subscription_id, api_version, details=details, filter=filter)

Queries for App Service Plan metrics

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
    api_instance = openapi_client.ServerFarmsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of App Service Plan
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    details = True # bool | If true, metrics are broken down per App Service Plan instance (optional)
    filter = 'filter_example' # str | Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'. (optional)

    try:
        # Queries for App Service Plan metrics
        api_response = api_instance.server_farms_get_server_farm_metrics(resource_group_name, name, subscription_id, api_version, details=details, filter=filter)
        print("The response of ServerFarmsApi->server_farms_get_server_farm_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerFarmsApi->server_farms_get_server_farm_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of App Service Plan | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **details** | **bool**| If true, metrics are broken down per App Service Plan instance | [optional] 
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

# **server_farms_get_server_farm_operation**
> ServerFarmWithRichSku server_farms_get_server_farm_operation(resource_group_name, name, operation_id, subscription_id, api_version)

Gets a server farm operation

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.server_farm_with_rich_sku import ServerFarmWithRichSku
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
    api_instance = openapi_client.ServerFarmsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of server farm
    operation_id = 'operation_id_example' # str | Id of Server farm operation\"&gt;
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets a server farm operation
        api_response = api_instance.server_farms_get_server_farm_operation(resource_group_name, name, operation_id, subscription_id, api_version)
        print("The response of ServerFarmsApi->server_farms_get_server_farm_operation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerFarmsApi->server_farms_get_server_farm_operation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of server farm | 
 **operation_id** | **str**| Id of Server farm operation\&quot;&amp;gt; | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**ServerFarmWithRichSku**](ServerFarmWithRichSku.md)

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

# **server_farms_get_server_farm_sites**
> SiteCollection server_farms_get_server_farm_sites(resource_group_name, name, subscription_id, api_version, skip_token=skip_token, filter=filter, top=top)

Gets list of Apps associated with an App Service Plan

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
    api_instance = openapi_client.ServerFarmsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of App Service Plan
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    skip_token = 'skip_token_example' # str | Skip to of web apps in a list. If specified, the resulting list will contain web apps starting from (including) the skipToken. Else, the resulting list contains web apps from the start of the list (optional)
    filter = 'filter_example' # str | Supported filter: $filter=state eq running. Returns only web apps that are currently running (optional)
    top = 'top_example' # str | List page size. If specified, results are paged. (optional)

    try:
        # Gets list of Apps associated with an App Service Plan
        api_response = api_instance.server_farms_get_server_farm_sites(resource_group_name, name, subscription_id, api_version, skip_token=skip_token, filter=filter, top=top)
        print("The response of ServerFarmsApi->server_farms_get_server_farm_sites:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerFarmsApi->server_farms_get_server_farm_sites: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of App Service Plan | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **skip_token** | **str**| Skip to of web apps in a list. If specified, the resulting list will contain web apps starting from (including) the skipToken. Else, the resulting list contains web apps from the start of the list | [optional] 
 **filter** | **str**| Supported filter: $filter&#x3D;state eq running. Returns only web apps that are currently running | [optional] 
 **top** | **str**| List page size. If specified, results are paged. | [optional] 

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

# **server_farms_get_server_farm_vnet_gateway**
> VnetGateway server_farms_get_server_farm_vnet_gateway(resource_group_name, name, vnet_name, gateway_name, subscription_id, api_version)

Gets the vnet gateway.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vnet_gateway import VnetGateway
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
    api_instance = openapi_client.ServerFarmsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of the App Service Plan
    vnet_name = 'vnet_name_example' # str | Name of the virtual network
    gateway_name = 'gateway_name_example' # str | Name of the gateway. Only the 'primary' gateway is supported.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the vnet gateway.
        api_response = api_instance.server_farms_get_server_farm_vnet_gateway(resource_group_name, name, vnet_name, gateway_name, subscription_id, api_version)
        print("The response of ServerFarmsApi->server_farms_get_server_farm_vnet_gateway:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerFarmsApi->server_farms_get_server_farm_vnet_gateway: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of the App Service Plan | 
 **vnet_name** | **str**| Name of the virtual network | 
 **gateway_name** | **str**| Name of the gateway. Only the &#39;primary&#39; gateway is supported. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**VnetGateway**](VnetGateway.md)

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

# **server_farms_get_server_farms**
> ServerFarmCollection server_farms_get_server_farms(resource_group_name, subscription_id, api_version)

Gets collection of App Service Plans in a resource group for a given subscription.

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
    api_instance = openapi_client.ServerFarmsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets collection of App Service Plans in a resource group for a given subscription.
        api_response = api_instance.server_farms_get_server_farms(resource_group_name, subscription_id, api_version)
        print("The response of ServerFarmsApi->server_farms_get_server_farms:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerFarmsApi->server_farms_get_server_farms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
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

# **server_farms_get_vnet_from_server_farm**
> VnetInfo server_farms_get_vnet_from_server_farm(resource_group_name, name, vnet_name, subscription_id, api_version)

Gets a vnet associated with an App Service Plan

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vnet_info import VnetInfo
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
    api_instance = openapi_client.ServerFarmsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of App Service Plan
    vnet_name = 'vnet_name_example' # str | Name of virtual network
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets a vnet associated with an App Service Plan
        api_response = api_instance.server_farms_get_vnet_from_server_farm(resource_group_name, name, vnet_name, subscription_id, api_version)
        print("The response of ServerFarmsApi->server_farms_get_vnet_from_server_farm:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerFarmsApi->server_farms_get_vnet_from_server_farm: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of App Service Plan | 
 **vnet_name** | **str**| Name of virtual network | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**VnetInfo**](VnetInfo.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Virtual network could not be found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_farms_get_vnets_for_server_farm**
> List[VnetInfo] server_farms_get_vnets_for_server_farm(resource_group_name, name, subscription_id, api_version)

Gets list of VNets associated with App Service Plan

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vnet_info import VnetInfo
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
    api_instance = openapi_client.ServerFarmsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of App Service Plan
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets list of VNets associated with App Service Plan
        api_response = api_instance.server_farms_get_vnets_for_server_farm(resource_group_name, name, subscription_id, api_version)
        print("The response of ServerFarmsApi->server_farms_get_vnets_for_server_farm:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerFarmsApi->server_farms_get_vnets_for_server_farm: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of App Service Plan | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**List[VnetInfo]**](VnetInfo.md)

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

# **server_farms_reboot_worker_for_server_farm**
> object server_farms_reboot_worker_for_server_farm(resource_group_name, name, worker_name, subscription_id, api_version)

Submit a reboot request for a worker machine in the specified server farm

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
    api_instance = openapi_client.ServerFarmsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of server farm
    worker_name = 'worker_name_example' # str | Name of worker machine, typically starts with RD
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Submit a reboot request for a worker machine in the specified server farm
        api_response = api_instance.server_farms_reboot_worker_for_server_farm(resource_group_name, name, worker_name, subscription_id, api_version)
        print("The response of ServerFarmsApi->server_farms_reboot_worker_for_server_farm:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerFarmsApi->server_farms_reboot_worker_for_server_farm: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of server farm | 
 **worker_name** | **str**| Name of worker machine, typically starts with RD | 
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

# **server_farms_restart_sites_for_server_farm**
> object server_farms_restart_sites_for_server_farm(resource_group_name, name, subscription_id, api_version, soft_restart=soft_restart)

Restarts web apps in a specified App Service Plan

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
    api_instance = openapi_client.ServerFarmsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of App Service Plan
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    soft_restart = True # bool | Soft restart applies the configuration settings and restarts the apps if necessary. Hard restart always restarts and reprovisions the apps (optional)

    try:
        # Restarts web apps in a specified App Service Plan
        api_response = api_instance.server_farms_restart_sites_for_server_farm(resource_group_name, name, subscription_id, api_version, soft_restart=soft_restart)
        print("The response of ServerFarmsApi->server_farms_restart_sites_for_server_farm:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerFarmsApi->server_farms_restart_sites_for_server_farm: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of App Service Plan | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **soft_restart** | **bool**| Soft restart applies the configuration settings and restarts the apps if necessary. Hard restart always restarts and reprovisions the apps | [optional] 

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

# **server_farms_update_server_farm_vnet_gateway**
> VnetGateway server_farms_update_server_farm_vnet_gateway(resource_group_name, name, vnet_name, gateway_name, subscription_id, api_version, connection_envelope)

Updates the vnet gateway

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vnet_gateway import VnetGateway
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
    api_instance = openapi_client.ServerFarmsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group
    name = 'name_example' # str | The name of the App Service Plan
    vnet_name = 'vnet_name_example' # str | The name of the virtual network
    gateway_name = 'gateway_name_example' # str | The name of the gateway. Only 'primary' is supported.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    connection_envelope = openapi_client.VnetGateway() # VnetGateway | The gateway entity.

    try:
        # Updates the vnet gateway
        api_response = api_instance.server_farms_update_server_farm_vnet_gateway(resource_group_name, name, vnet_name, gateway_name, subscription_id, api_version, connection_envelope)
        print("The response of ServerFarmsApi->server_farms_update_server_farm_vnet_gateway:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerFarmsApi->server_farms_update_server_farm_vnet_gateway: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group | 
 **name** | **str**| The name of the App Service Plan | 
 **vnet_name** | **str**| The name of the virtual network | 
 **gateway_name** | **str**| The name of the gateway. Only &#39;primary&#39; is supported. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **connection_envelope** | [**VnetGateway**](VnetGateway.md)| The gateway entity. | 

### Return type

[**VnetGateway**](VnetGateway.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **server_farms_update_vnet_route**
> VnetRoute server_farms_update_vnet_route(resource_group_name, name, vnet_name, route_name, subscription_id, api_version, route)

Creates a new route or updates an existing route for a vnet in an app service plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vnet_route import VnetRoute
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
    api_instance = openapi_client.ServerFarmsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of App Service Plan
    vnet_name = 'vnet_name_example' # str | Name of virtual network
    route_name = 'route_name_example' # str | Name of the virtual network route
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    route = openapi_client.VnetRoute() # VnetRoute | The route object

    try:
        # Creates a new route or updates an existing route for a vnet in an app service plan.
        api_response = api_instance.server_farms_update_vnet_route(resource_group_name, name, vnet_name, route_name, subscription_id, api_version, route)
        print("The response of ServerFarmsApi->server_farms_update_vnet_route:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerFarmsApi->server_farms_update_vnet_route: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of App Service Plan | 
 **vnet_name** | **str**| Name of virtual network | 
 **route_name** | **str**| Name of the virtual network route | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **route** | [**VnetRoute**](VnetRoute.md)| The route object | 

### Return type

[**VnetRoute**](VnetRoute.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid request. Ensure that required parameters are given, and that addresses and address spaces are valid |  -  |
**404** | Route not found. This will only occur when using the PATCH verb. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

