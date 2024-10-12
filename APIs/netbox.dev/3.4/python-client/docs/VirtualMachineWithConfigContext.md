# VirtualMachineWithConfigContext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster** | [**NestedCluster**](NestedCluster.md) |  | [optional] 
**comments** | **str** |  | [optional] 
**config_context** | **object** |  | [optional] [readonly] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**device** | [**NestedDevice**](NestedDevice.md) |  | [optional] 
**disk** | **int** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**local_context_data** | **object** |  | [optional] 
**memory** | **int** |  | [optional] 
**name** | **str** |  | 
**platform** | [**NestedPlatform**](NestedPlatform.md) |  | [optional] 
**primary_ip** | [**NestedIPAddress**](NestedIPAddress.md) |  | [optional] 
**primary_ip4** | [**NestedIPAddress**](NestedIPAddress.md) |  | [optional] 
**primary_ip6** | [**NestedIPAddress**](NestedIPAddress.md) |  | [optional] 
**role** | [**NestedDeviceRole**](NestedDeviceRole.md) |  | [optional] 
**site** | [**NestedSite**](NestedSite.md) |  | [optional] 
**status** | [**Status8**](Status8.md) |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | [**NestedTenant**](NestedTenant.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**vcpus** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_with_config_context import VirtualMachineWithConfigContext

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineWithConfigContext from a JSON string
virtual_machine_with_config_context_instance = VirtualMachineWithConfigContext.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineWithConfigContext.to_json())

# convert the object into a dict
virtual_machine_with_config_context_dict = virtual_machine_with_config_context_instance.to_dict()
# create an instance of VirtualMachineWithConfigContext from a dict
virtual_machine_with_config_context_from_dict = VirtualMachineWithConfigContext.from_dict(virtual_machine_with_config_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


