# WritableVirtualMachineWithConfigContext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster** | **int** |  | [optional] 
**comments** | **str** |  | [optional] 
**config_context** | **object** |  | [optional] [readonly] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**device** | **int** |  | [optional] 
**disk** | **int** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**local_context_data** | **object** |  | [optional] 
**memory** | **int** |  | [optional] 
**name** | **str** |  | 
**platform** | **int** |  | [optional] 
**primary_ip** | **str** |  | [optional] [readonly] 
**primary_ip4** | **int** |  | [optional] 
**primary_ip6** | **int** |  | [optional] 
**role** | **int** |  | [optional] 
**site** | **int** |  | [optional] 
**status** | **str** |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | **int** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**vcpus** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.writable_virtual_machine_with_config_context import WritableVirtualMachineWithConfigContext

# TODO update the JSON string below
json = "{}"
# create an instance of WritableVirtualMachineWithConfigContext from a JSON string
writable_virtual_machine_with_config_context_instance = WritableVirtualMachineWithConfigContext.from_json(json)
# print the JSON string representation of the object
print(WritableVirtualMachineWithConfigContext.to_json())

# convert the object into a dict
writable_virtual_machine_with_config_context_dict = writable_virtual_machine_with_config_context_instance.to_dict()
# create an instance of WritableVirtualMachineWithConfigContext from a dict
writable_virtual_machine_with_config_context_from_dict = WritableVirtualMachineWithConfigContext.from_dict(writable_virtual_machine_with_config_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


