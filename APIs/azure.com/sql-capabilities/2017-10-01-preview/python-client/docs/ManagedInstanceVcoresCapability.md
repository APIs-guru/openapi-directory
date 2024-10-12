# ManagedInstanceVcoresCapability

The managed instance virtual cores capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The virtual cores identifier. | [optional] [readonly] 
**reason** | **str** | The reason for the capability not being available. | [optional] 
**status** | **str** | The status of the capability. | [optional] [readonly] 
**value** | **int** | The virtual cores value. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_instance_vcores_capability import ManagedInstanceVcoresCapability

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedInstanceVcoresCapability from a JSON string
managed_instance_vcores_capability_instance = ManagedInstanceVcoresCapability.from_json(json)
# print the JSON string representation of the object
print(ManagedInstanceVcoresCapability.to_json())

# convert the object into a dict
managed_instance_vcores_capability_dict = managed_instance_vcores_capability_instance.to_dict()
# create an instance of ManagedInstanceVcoresCapability from a dict
managed_instance_vcores_capability_from_dict = ManagedInstanceVcoresCapability.from_dict(managed_instance_vcores_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


