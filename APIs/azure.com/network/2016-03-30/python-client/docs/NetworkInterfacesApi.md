# openapi_client.NetworkInterfacesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**network_interfaces_create_or_update**](NetworkInterfacesApi.md#network_interfaces_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkInterfaces/{networkInterfaceName} | 
[**network_interfaces_delete**](NetworkInterfacesApi.md#network_interfaces_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkInterfaces/{networkInterfaceName} | 
[**network_interfaces_get**](NetworkInterfacesApi.md#network_interfaces_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkInterfaces/{networkInterfaceName} | 
[**network_interfaces_get_virtual_machine_scale_set_network_interface**](NetworkInterfacesApi.md#network_interfaces_get_virtual_machine_scale_set_network_interface) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/virtualMachines/{virtualmachineIndex}/networkInterfaces/{networkInterfaceName} | 
[**network_interfaces_list**](NetworkInterfacesApi.md#network_interfaces_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkInterfaces | 
[**network_interfaces_list_all**](NetworkInterfacesApi.md#network_interfaces_list_all) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/networkInterfaces | 
[**network_interfaces_list_virtual_machine_scale_set_network_interfaces**](NetworkInterfacesApi.md#network_interfaces_list_virtual_machine_scale_set_network_interfaces) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/networkInterfaces | 
[**network_interfaces_list_virtual_machine_scale_set_vm_network_interfaces**](NetworkInterfacesApi.md#network_interfaces_list_virtual_machine_scale_set_vm_network_interfaces) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/virtualMachines/{virtualmachineIndex}/networkInterfaces | 


# **network_interfaces_create_or_update**
> NetworkInterface network_interfaces_create_or_update(resource_group_name, network_interface_name, api_version, subscription_id, parameters)



The Put NetworkInterface operation creates/updates a networkInterface

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_interface import NetworkInterface
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
    api_instance = openapi_client.NetworkInterfacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_interface_name = 'network_interface_name_example' # str | The name of the network interface.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.NetworkInterface() # NetworkInterface | Parameters supplied to the create/update NetworkInterface operation

    try:
        api_response = api_instance.network_interfaces_create_or_update(resource_group_name, network_interface_name, api_version, subscription_id, parameters)
        print("The response of NetworkInterfacesApi->network_interfaces_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkInterfacesApi->network_interfaces_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_interface_name** | **str**| The name of the network interface. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**NetworkInterface**](NetworkInterface.md)| Parameters supplied to the create/update NetworkInterface operation | 

### Return type

[**NetworkInterface**](NetworkInterface.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_interfaces_delete**
> network_interfaces_delete(resource_group_name, network_interface_name, api_version, subscription_id)



The delete networkInterface operation deletes the specified networkInterface.

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
    api_instance = openapi_client.NetworkInterfacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_interface_name = 'network_interface_name_example' # str | The name of the network interface.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.network_interfaces_delete(resource_group_name, network_interface_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling NetworkInterfacesApi->network_interfaces_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_interface_name** | **str**| The name of the network interface. | 
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
**200** |  |  -  |
**202** |  |  -  |
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_interfaces_get**
> NetworkInterface network_interfaces_get(resource_group_name, network_interface_name, api_version, subscription_id, expand=expand)



The Get network interface operation retrieves information about the specified network interface.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_interface import NetworkInterface
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
    api_instance = openapi_client.NetworkInterfacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_interface_name = 'network_interface_name_example' # str | The name of the network interface.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    expand = 'expand_example' # str | expand references resources. (optional)

    try:
        api_response = api_instance.network_interfaces_get(resource_group_name, network_interface_name, api_version, subscription_id, expand=expand)
        print("The response of NetworkInterfacesApi->network_interfaces_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkInterfacesApi->network_interfaces_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_interface_name** | **str**| The name of the network interface. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **expand** | **str**| expand references resources. | [optional] 

### Return type

[**NetworkInterface**](NetworkInterface.md)

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

# **network_interfaces_get_virtual_machine_scale_set_network_interface**
> NetworkInterface network_interfaces_get_virtual_machine_scale_set_network_interface(resource_group_name, virtual_machine_scale_set_name, virtualmachine_index, network_interface_name, api_version, subscription_id, expand=expand)



The Get network interface operation retrieves information about the specified network interface in a virtual machine scale set.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_interface import NetworkInterface
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
    api_instance = openapi_client.NetworkInterfacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_machine_scale_set_name = 'virtual_machine_scale_set_name_example' # str | The name of the virtual machine scale set.
    virtualmachine_index = 'virtualmachine_index_example' # str | The virtual machine index.
    network_interface_name = 'network_interface_name_example' # str | The name of the network interface.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    expand = 'expand_example' # str | expand references resources. (optional)

    try:
        api_response = api_instance.network_interfaces_get_virtual_machine_scale_set_network_interface(resource_group_name, virtual_machine_scale_set_name, virtualmachine_index, network_interface_name, api_version, subscription_id, expand=expand)
        print("The response of NetworkInterfacesApi->network_interfaces_get_virtual_machine_scale_set_network_interface:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkInterfacesApi->network_interfaces_get_virtual_machine_scale_set_network_interface: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_machine_scale_set_name** | **str**| The name of the virtual machine scale set. | 
 **virtualmachine_index** | **str**| The virtual machine index. | 
 **network_interface_name** | **str**| The name of the network interface. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **expand** | **str**| expand references resources. | [optional] 

### Return type

[**NetworkInterface**](NetworkInterface.md)

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

# **network_interfaces_list**
> NetworkInterfaceListResult network_interfaces_list(resource_group_name, api_version, subscription_id)



The List networkInterfaces operation retrieves all the networkInterfaces in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_interface_list_result import NetworkInterfaceListResult
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
    api_instance = openapi_client.NetworkInterfacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.network_interfaces_list(resource_group_name, api_version, subscription_id)
        print("The response of NetworkInterfacesApi->network_interfaces_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkInterfacesApi->network_interfaces_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**NetworkInterfaceListResult**](NetworkInterfaceListResult.md)

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

# **network_interfaces_list_all**
> NetworkInterfaceListResult network_interfaces_list_all(api_version, subscription_id)



The List networkInterfaces operation retrieves all the networkInterfaces in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_interface_list_result import NetworkInterfaceListResult
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
    api_instance = openapi_client.NetworkInterfacesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.network_interfaces_list_all(api_version, subscription_id)
        print("The response of NetworkInterfacesApi->network_interfaces_list_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkInterfacesApi->network_interfaces_list_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**NetworkInterfaceListResult**](NetworkInterfaceListResult.md)

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

# **network_interfaces_list_virtual_machine_scale_set_network_interfaces**
> NetworkInterfaceListResult network_interfaces_list_virtual_machine_scale_set_network_interfaces(resource_group_name, virtual_machine_scale_set_name, api_version, subscription_id)



The list network interface operation retrieves information about all network interfaces in a virtual machine scale set.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_interface_list_result import NetworkInterfaceListResult
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
    api_instance = openapi_client.NetworkInterfacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_machine_scale_set_name = 'virtual_machine_scale_set_name_example' # str | The name of the virtual machine scale set.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.network_interfaces_list_virtual_machine_scale_set_network_interfaces(resource_group_name, virtual_machine_scale_set_name, api_version, subscription_id)
        print("The response of NetworkInterfacesApi->network_interfaces_list_virtual_machine_scale_set_network_interfaces:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkInterfacesApi->network_interfaces_list_virtual_machine_scale_set_network_interfaces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_machine_scale_set_name** | **str**| The name of the virtual machine scale set. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**NetworkInterfaceListResult**](NetworkInterfaceListResult.md)

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

# **network_interfaces_list_virtual_machine_scale_set_vm_network_interfaces**
> NetworkInterfaceListResult network_interfaces_list_virtual_machine_scale_set_vm_network_interfaces(resource_group_name, virtual_machine_scale_set_name, virtualmachine_index, api_version, subscription_id)



The list network interface operation retrieves information about all network interfaces in a virtual machine from a virtual machine scale set.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_interface_list_result import NetworkInterfaceListResult
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
    api_instance = openapi_client.NetworkInterfacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_machine_scale_set_name = 'virtual_machine_scale_set_name_example' # str | The name of the virtual machine scale set.
    virtualmachine_index = 'virtualmachine_index_example' # str | The virtual machine index.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.network_interfaces_list_virtual_machine_scale_set_vm_network_interfaces(resource_group_name, virtual_machine_scale_set_name, virtualmachine_index, api_version, subscription_id)
        print("The response of NetworkInterfacesApi->network_interfaces_list_virtual_machine_scale_set_vm_network_interfaces:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkInterfacesApi->network_interfaces_list_virtual_machine_scale_set_vm_network_interfaces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_machine_scale_set_name** | **str**| The name of the virtual machine scale set. | 
 **virtualmachine_index** | **str**| The virtual machine index. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**NetworkInterfaceListResult**](NetworkInterfaceListResult.md)

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

