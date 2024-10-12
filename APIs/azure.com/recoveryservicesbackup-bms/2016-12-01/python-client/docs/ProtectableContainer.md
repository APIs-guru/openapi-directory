# ProtectableContainer

Protectable Container Class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_management_type** | **str** | Type of backup management for the container. | [optional] 
**container_id** | **str** | Fabric Id of the container such as ARM Id. | [optional] 
**friendly_name** | **str** | Friendly name of the container. | [optional] 
**health_status** | **str** | Status of health of the container. | [optional] 
**protectable_container_type** | **str** | Type of the container. The value of this property for  1. Compute Azure VM is Microsoft.Compute/virtualMachines  2. Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines | [optional] [readonly] 

## Example

```python
from openapi_client.models.protectable_container import ProtectableContainer

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectableContainer from a JSON string
protectable_container_instance = ProtectableContainer.from_json(json)
# print the JSON string representation of the object
print(ProtectableContainer.to_json())

# convert the object into a dict
protectable_container_dict = protectable_container_instance.to_dict()
# create an instance of ProtectableContainer from a dict
protectable_container_from_dict = ProtectableContainer.from_dict(protectable_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


