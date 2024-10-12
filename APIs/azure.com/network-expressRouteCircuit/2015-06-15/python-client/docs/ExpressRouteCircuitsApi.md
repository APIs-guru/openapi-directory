# openapi_client.ExpressRouteCircuitsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**express_route_circuits_create_or_update**](ExpressRouteCircuitsApi.md#express_route_circuits_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName} | 
[**express_route_circuits_delete**](ExpressRouteCircuitsApi.md#express_route_circuits_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName} | 
[**express_route_circuits_get**](ExpressRouteCircuitsApi.md#express_route_circuits_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName} | 
[**express_route_circuits_list**](ExpressRouteCircuitsApi.md#express_route_circuits_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits | 
[**express_route_circuits_list_all**](ExpressRouteCircuitsApi.md#express_route_circuits_list_all) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/expressRouteCircuits | 
[**express_route_circuits_list_arp_table**](ExpressRouteCircuitsApi.md#express_route_circuits_list_arp_table) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/arpTable | 
[**express_route_circuits_list_routes_table**](ExpressRouteCircuitsApi.md#express_route_circuits_list_routes_table) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/routesTable | 


# **express_route_circuits_create_or_update**
> ExpressRouteCircuit express_route_circuits_create_or_update(resource_group_name, circuit_name, api_version, subscription_id, parameters)



Creates or updates an express route circuit.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_circuit import ExpressRouteCircuit
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
    api_instance = openapi_client.ExpressRouteCircuitsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    circuit_name = 'circuit_name_example' # str | The name of the circuit.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ExpressRouteCircuit() # ExpressRouteCircuit | Parameters supplied to the create or update express route circuit operation.

    try:
        api_response = api_instance.express_route_circuits_create_or_update(resource_group_name, circuit_name, api_version, subscription_id, parameters)
        print("The response of ExpressRouteCircuitsApi->express_route_circuits_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteCircuitsApi->express_route_circuits_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **circuit_name** | **str**| The name of the circuit. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ExpressRouteCircuit**](ExpressRouteCircuit.md)| Parameters supplied to the create or update express route circuit operation. | 

### Return type

[**ExpressRouteCircuit**](ExpressRouteCircuit.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting ExpressRouteCircuit resource. |  -  |
**201** | Create successful. The operation returns the resulting ExpressRouteCircuit resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_circuits_delete**
> express_route_circuits_delete(resource_group_name, circuit_name, api_version, subscription_id)



Deletes the specified express route circuit.

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
    api_instance = openapi_client.ExpressRouteCircuitsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    circuit_name = 'circuit_name_example' # str | The name of the express route circuit.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.express_route_circuits_delete(resource_group_name, circuit_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ExpressRouteCircuitsApi->express_route_circuits_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **circuit_name** | **str**| The name of the express route circuit. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | Delete successful. |  -  |
**202** | Accepted. Sets &#39;Disabling&#39; provisioningState until the operation completes. Returns an operation URI that can be queried to find the current state of the operation. |  -  |
**204** | Delete successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_circuits_get**
> ExpressRouteCircuit express_route_circuits_get(resource_group_name, circuit_name, api_version, subscription_id)



Gets information about the specified express route circuit.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_circuit import ExpressRouteCircuit
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
    api_instance = openapi_client.ExpressRouteCircuitsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    circuit_name = 'circuit_name_example' # str | The name of express route circuit.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.express_route_circuits_get(resource_group_name, circuit_name, api_version, subscription_id)
        print("The response of ExpressRouteCircuitsApi->express_route_circuits_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteCircuitsApi->express_route_circuits_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **circuit_name** | **str**| The name of express route circuit. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ExpressRouteCircuit**](ExpressRouteCircuit.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting ExpressRouteCircuit resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_circuits_list**
> ExpressRouteCircuitListResult express_route_circuits_list(resource_group_name, api_version, subscription_id)



Gets all the express route circuits in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_circuit_list_result import ExpressRouteCircuitListResult
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
    api_instance = openapi_client.ExpressRouteCircuitsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.express_route_circuits_list(resource_group_name, api_version, subscription_id)
        print("The response of ExpressRouteCircuitsApi->express_route_circuits_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteCircuitsApi->express_route_circuits_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ExpressRouteCircuitListResult**](ExpressRouteCircuitListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting ExpressRouteCircuitAuthorization resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_circuits_list_all**
> ExpressRouteCircuitListResult express_route_circuits_list_all(api_version, subscription_id)



Gets all the express route circuits in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_circuit_list_result import ExpressRouteCircuitListResult
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
    api_instance = openapi_client.ExpressRouteCircuitsApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.express_route_circuits_list_all(api_version, subscription_id)
        print("The response of ExpressRouteCircuitsApi->express_route_circuits_list_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteCircuitsApi->express_route_circuits_list_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ExpressRouteCircuitListResult**](ExpressRouteCircuitListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of ExpressRouteCircuit resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_circuits_list_arp_table**
> ExpressRouteCircuitsArpTableListResult express_route_circuits_list_arp_table(resource_group_name, circuit_name, api_version, subscription_id)



The ListArpTable from ExpressRouteCircuit operation retrieves the currently advertised arp table associated with the ExpressRouteCircuits in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_circuits_arp_table_list_result import ExpressRouteCircuitsArpTableListResult
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
    api_instance = openapi_client.ExpressRouteCircuitsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    circuit_name = 'circuit_name_example' # str | The name of the circuit.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.express_route_circuits_list_arp_table(resource_group_name, circuit_name, api_version, subscription_id)
        print("The response of ExpressRouteCircuitsApi->express_route_circuits_list_arp_table:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteCircuitsApi->express_route_circuits_list_arp_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **circuit_name** | **str**| The name of the circuit. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ExpressRouteCircuitsArpTableListResult**](ExpressRouteCircuitsArpTableListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_circuits_list_routes_table**
> ExpressRouteCircuitsRoutesTableListResult express_route_circuits_list_routes_table(resource_group_name, circuit_name, api_version, subscription_id)



The ListRoutesTable from ExpressRouteCircuit operation retrieves the currently advertised routes table associated with the ExpressRouteCircuits in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_circuits_routes_table_list_result import ExpressRouteCircuitsRoutesTableListResult
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
    api_instance = openapi_client.ExpressRouteCircuitsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    circuit_name = 'circuit_name_example' # str | The name of the circuit.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.express_route_circuits_list_routes_table(resource_group_name, circuit_name, api_version, subscription_id)
        print("The response of ExpressRouteCircuitsApi->express_route_circuits_list_routes_table:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteCircuitsApi->express_route_circuits_list_routes_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **circuit_name** | **str**| The name of the circuit. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ExpressRouteCircuitsRoutesTableListResult**](ExpressRouteCircuitsRoutesTableListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

