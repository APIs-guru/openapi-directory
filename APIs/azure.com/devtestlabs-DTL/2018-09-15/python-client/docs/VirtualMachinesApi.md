# openapi_client.VirtualMachinesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_machines_add_data_disk**](VirtualMachinesApi.md#virtual_machines_add_data_disk) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/addDataDisk | 
[**virtual_machines_apply_artifacts**](VirtualMachinesApi.md#virtual_machines_apply_artifacts) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/applyArtifacts | 
[**virtual_machines_claim**](VirtualMachinesApi.md#virtual_machines_claim) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/claim | 
[**virtual_machines_create_or_update**](VirtualMachinesApi.md#virtual_machines_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name} | 
[**virtual_machines_delete**](VirtualMachinesApi.md#virtual_machines_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name} | 
[**virtual_machines_detach_data_disk**](VirtualMachinesApi.md#virtual_machines_detach_data_disk) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/detachDataDisk | 
[**virtual_machines_get**](VirtualMachinesApi.md#virtual_machines_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name} | 
[**virtual_machines_get_rdp_file_contents**](VirtualMachinesApi.md#virtual_machines_get_rdp_file_contents) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/getRdpFileContents | 
[**virtual_machines_list**](VirtualMachinesApi.md#virtual_machines_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines | 
[**virtual_machines_list_applicable_schedules**](VirtualMachinesApi.md#virtual_machines_list_applicable_schedules) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/listApplicableSchedules | 
[**virtual_machines_redeploy**](VirtualMachinesApi.md#virtual_machines_redeploy) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/redeploy | 
[**virtual_machines_resize**](VirtualMachinesApi.md#virtual_machines_resize) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/resize | 
[**virtual_machines_restart**](VirtualMachinesApi.md#virtual_machines_restart) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/restart | 
[**virtual_machines_start**](VirtualMachinesApi.md#virtual_machines_start) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/start | 
[**virtual_machines_stop**](VirtualMachinesApi.md#virtual_machines_stop) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/stop | 
[**virtual_machines_transfer_disks**](VirtualMachinesApi.md#virtual_machines_transfer_disks) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/transferDisks | 
[**virtual_machines_un_claim**](VirtualMachinesApi.md#virtual_machines_un_claim) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/unClaim | 
[**virtual_machines_update**](VirtualMachinesApi.md#virtual_machines_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name} | 


# **virtual_machines_add_data_disk**
> virtual_machines_add_data_disk(subscription_id, resource_group_name, lab_name, name, api_version, data_disk_properties)



Attach a new or existing data disk to virtual machine. This operation can take a while to complete.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_disk_properties import DataDiskProperties
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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the virtual machine.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    data_disk_properties = openapi_client.DataDiskProperties() # DataDiskProperties | Request body for adding a new or existing data disk to a virtual machine.

    try:
        api_instance.virtual_machines_add_data_disk(subscription_id, resource_group_name, lab_name, name, api_version, data_disk_properties)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_add_data_disk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the virtual machine. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **data_disk_properties** | [**DataDiskProperties**](DataDiskProperties.md)| Request body for adding a new or existing data disk to a virtual machine. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machines_apply_artifacts**
> virtual_machines_apply_artifacts(subscription_id, resource_group_name, lab_name, name, api_version, apply_artifacts_request)



Apply artifacts to virtual machine. This operation can take a while to complete.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.apply_artifacts_request import ApplyArtifactsRequest
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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the virtual machine.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    apply_artifacts_request = openapi_client.ApplyArtifactsRequest() # ApplyArtifactsRequest | Request body for applying artifacts to a virtual machine.

    try:
        api_instance.virtual_machines_apply_artifacts(subscription_id, resource_group_name, lab_name, name, api_version, apply_artifacts_request)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_apply_artifacts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the virtual machine. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **apply_artifacts_request** | [**ApplyArtifactsRequest**](ApplyArtifactsRequest.md)| Request body for applying artifacts to a virtual machine. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machines_claim**
> virtual_machines_claim(subscription_id, resource_group_name, lab_name, name, api_version)



Take ownership of an existing virtual machine This operation can take a while to complete.

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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the virtual machine.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')

    try:
        api_instance.virtual_machines_claim(subscription_id, resource_group_name, lab_name, name, api_version)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_claim: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the virtual machine. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]

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
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machines_create_or_update**
> LabVirtualMachine virtual_machines_create_or_update(subscription_id, resource_group_name, lab_name, name, api_version, lab_virtual_machine)



Create or replace an existing virtual machine. This operation can take a while to complete.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.lab_virtual_machine import LabVirtualMachine
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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the virtual machine.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    lab_virtual_machine = openapi_client.LabVirtualMachine() # LabVirtualMachine | A virtual machine.

    try:
        api_response = api_instance.virtual_machines_create_or_update(subscription_id, resource_group_name, lab_name, name, api_version, lab_virtual_machine)
        print("The response of VirtualMachinesApi->virtual_machines_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the virtual machine. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **lab_virtual_machine** | [**LabVirtualMachine**](LabVirtualMachine.md)| A virtual machine. | 

### Return type

[**LabVirtualMachine**](LabVirtualMachine.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machines_delete**
> virtual_machines_delete(subscription_id, resource_group_name, lab_name, name, api_version)



Delete virtual machine. This operation can take a while to complete.

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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the virtual machine.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')

    try:
        api_instance.virtual_machines_delete(subscription_id, resource_group_name, lab_name, name, api_version)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the virtual machine. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]

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
**200** | OK |  -  |
**202** | Accepted |  -  |
**204** | No Content |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machines_detach_data_disk**
> virtual_machines_detach_data_disk(subscription_id, resource_group_name, lab_name, name, api_version, detach_data_disk_properties)



Detach the specified disk from the virtual machine. This operation can take a while to complete.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.detach_data_disk_properties import DetachDataDiskProperties
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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the virtual machine.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    detach_data_disk_properties = openapi_client.DetachDataDiskProperties() # DetachDataDiskProperties | Request body for detaching data disk from a virtual machine.

    try:
        api_instance.virtual_machines_detach_data_disk(subscription_id, resource_group_name, lab_name, name, api_version, detach_data_disk_properties)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_detach_data_disk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the virtual machine. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **detach_data_disk_properties** | [**DetachDataDiskProperties**](DetachDataDiskProperties.md)| Request body for detaching data disk from a virtual machine. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machines_get**
> LabVirtualMachine virtual_machines_get(subscription_id, resource_group_name, lab_name, name, api_version, expand=expand)



Get virtual machine.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.lab_virtual_machine import LabVirtualMachine
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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the virtual machine.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($expand=artifacts,computeVm,networkInterface,applicableSchedule)' (optional)

    try:
        api_response = api_instance.virtual_machines_get(subscription_id, resource_group_name, lab_name, name, api_version, expand=expand)
        print("The response of VirtualMachinesApi->virtual_machines_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the virtual machine. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($expand&#x3D;artifacts,computeVm,networkInterface,applicableSchedule)&#39; | [optional] 

### Return type

[**LabVirtualMachine**](LabVirtualMachine.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machines_get_rdp_file_contents**
> RdpConnection virtual_machines_get_rdp_file_contents(subscription_id, resource_group_name, lab_name, name, api_version)



Gets a string that represents the contents of the RDP file for the virtual machine

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.rdp_connection import RdpConnection
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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the virtual machine.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')

    try:
        api_response = api_instance.virtual_machines_get_rdp_file_contents(subscription_id, resource_group_name, lab_name, name, api_version)
        print("The response of VirtualMachinesApi->virtual_machines_get_rdp_file_contents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_get_rdp_file_contents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the virtual machine. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]

### Return type

[**RdpConnection**](RdpConnection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machines_list**
> LabVirtualMachineList virtual_machines_list(subscription_id, resource_group_name, lab_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)



List virtual machines in a given lab.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.lab_virtual_machine_list import LabVirtualMachineList
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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($expand=artifacts,computeVm,networkInterface,applicableSchedule)' (optional)
    filter = 'filter_example' # str | The filter to apply to the operation. Example: '$filter=contains(name,'myName') (optional)
    top = 56 # int | The maximum number of resources to return from the operation. Example: '$top=10' (optional)
    orderby = 'orderby_example' # str | The ordering expression for the results, using OData notation. Example: '$orderby=name desc' (optional)

    try:
        api_response = api_instance.virtual_machines_list(subscription_id, resource_group_name, lab_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)
        print("The response of VirtualMachinesApi->virtual_machines_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($expand&#x3D;artifacts,computeVm,networkInterface,applicableSchedule)&#39; | [optional] 
 **filter** | **str**| The filter to apply to the operation. Example: &#39;$filter&#x3D;contains(name,&#39;myName&#39;) | [optional] 
 **top** | **int**| The maximum number of resources to return from the operation. Example: &#39;$top&#x3D;10&#39; | [optional] 
 **orderby** | **str**| The ordering expression for the results, using OData notation. Example: &#39;$orderby&#x3D;name desc&#39; | [optional] 

### Return type

[**LabVirtualMachineList**](LabVirtualMachineList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machines_list_applicable_schedules**
> ApplicableSchedule virtual_machines_list_applicable_schedules(subscription_id, resource_group_name, lab_name, name, api_version)



Lists the applicable start/stop schedules, if any.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.applicable_schedule import ApplicableSchedule
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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the virtual machine.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')

    try:
        api_response = api_instance.virtual_machines_list_applicable_schedules(subscription_id, resource_group_name, lab_name, name, api_version)
        print("The response of VirtualMachinesApi->virtual_machines_list_applicable_schedules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_list_applicable_schedules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the virtual machine. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]

### Return type

[**ApplicableSchedule**](ApplicableSchedule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machines_redeploy**
> virtual_machines_redeploy(subscription_id, resource_group_name, lab_name, name, api_version)



Redeploy a virtual machine This operation can take a while to complete.

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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the virtual machine.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')

    try:
        api_instance.virtual_machines_redeploy(subscription_id, resource_group_name, lab_name, name, api_version)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_redeploy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the virtual machine. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]

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
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machines_resize**
> virtual_machines_resize(subscription_id, resource_group_name, lab_name, name, api_version, resize_lab_virtual_machine_properties)



Resize Virtual Machine. This operation can take a while to complete.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resize_lab_virtual_machine_properties import ResizeLabVirtualMachineProperties
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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the virtual machine.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    resize_lab_virtual_machine_properties = openapi_client.ResizeLabVirtualMachineProperties() # ResizeLabVirtualMachineProperties | Request body for resizing a virtual machine.

    try:
        api_instance.virtual_machines_resize(subscription_id, resource_group_name, lab_name, name, api_version, resize_lab_virtual_machine_properties)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_resize: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the virtual machine. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **resize_lab_virtual_machine_properties** | [**ResizeLabVirtualMachineProperties**](ResizeLabVirtualMachineProperties.md)| Request body for resizing a virtual machine. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machines_restart**
> virtual_machines_restart(subscription_id, resource_group_name, lab_name, name, api_version)



Restart a virtual machine. This operation can take a while to complete.

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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the virtual machine.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')

    try:
        api_instance.virtual_machines_restart(subscription_id, resource_group_name, lab_name, name, api_version)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_restart: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the virtual machine. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]

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
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machines_start**
> virtual_machines_start(subscription_id, resource_group_name, lab_name, name, api_version)



Start a virtual machine. This operation can take a while to complete.

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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the virtual machine.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')

    try:
        api_instance.virtual_machines_start(subscription_id, resource_group_name, lab_name, name, api_version)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the virtual machine. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]

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
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machines_stop**
> virtual_machines_stop(subscription_id, resource_group_name, lab_name, name, api_version)



Stop a virtual machine This operation can take a while to complete.

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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the virtual machine.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')

    try:
        api_instance.virtual_machines_stop(subscription_id, resource_group_name, lab_name, name, api_version)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the virtual machine. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]

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
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machines_transfer_disks**
> virtual_machines_transfer_disks(subscription_id, resource_group_name, lab_name, name, api_version)



Transfers all data disks attached to the virtual machine to be owned by the current user. This operation can take a while to complete.

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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the virtual machine.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')

    try:
        api_instance.virtual_machines_transfer_disks(subscription_id, resource_group_name, lab_name, name, api_version)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_transfer_disks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the virtual machine. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]

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
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machines_un_claim**
> virtual_machines_un_claim(subscription_id, resource_group_name, lab_name, name, api_version)



Release ownership of an existing virtual machine This operation can take a while to complete.

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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the virtual machine.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')

    try:
        api_instance.virtual_machines_un_claim(subscription_id, resource_group_name, lab_name, name, api_version)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_un_claim: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the virtual machine. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]

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
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machines_update**
> LabVirtualMachine virtual_machines_update(subscription_id, resource_group_name, lab_name, name, api_version, lab_virtual_machine)



Allows modifying tags of virtual machines. All other properties will be ignored.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.lab_virtual_machine import LabVirtualMachine
from openapi_client.models.lab_virtual_machine_fragment import LabVirtualMachineFragment
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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the virtual machine.
    api_version = '2018-09-15' # str | Client API version. (default to '2018-09-15')
    lab_virtual_machine = openapi_client.LabVirtualMachineFragment() # LabVirtualMachineFragment | A virtual machine.

    try:
        api_response = api_instance.virtual_machines_update(subscription_id, resource_group_name, lab_name, name, api_version, lab_virtual_machine)
        print("The response of VirtualMachinesApi->virtual_machines_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the virtual machine. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-09-15&#39;]
 **lab_virtual_machine** | [**LabVirtualMachineFragment**](LabVirtualMachineFragment.md)| A virtual machine. | 

### Return type

[**LabVirtualMachine**](LabVirtualMachine.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

