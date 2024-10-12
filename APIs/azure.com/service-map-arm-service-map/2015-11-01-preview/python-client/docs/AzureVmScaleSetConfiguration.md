# AzureVmScaleSetConfiguration

Describes an Azure Virtual Machine Scale Set

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment** | **str** | Virtual Machine Scale Set deployment identifier | [optional] 
**instance_id** | **str** | Virtual Machine Scale Set instance identifier | [optional] 
**name** | **str** | Virtual Machine Scale Set name | [optional] 
**resource_id** | **str** | Unique identifier of the resource. | [optional] 

## Example

```python
from openapi_client.models.azure_vm_scale_set_configuration import AzureVmScaleSetConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of AzureVmScaleSetConfiguration from a JSON string
azure_vm_scale_set_configuration_instance = AzureVmScaleSetConfiguration.from_json(json)
# print the JSON string representation of the object
print(AzureVmScaleSetConfiguration.to_json())

# convert the object into a dict
azure_vm_scale_set_configuration_dict = azure_vm_scale_set_configuration_instance.to_dict()
# create an instance of AzureVmScaleSetConfiguration from a dict
azure_vm_scale_set_configuration_from_dict = AzureVmScaleSetConfiguration.from_dict(azure_vm_scale_set_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


