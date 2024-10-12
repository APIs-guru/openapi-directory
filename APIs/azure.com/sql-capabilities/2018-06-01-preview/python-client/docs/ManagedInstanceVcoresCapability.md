# ManagedInstanceVcoresCapability

The managed instance virtual cores capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**included_max_size** | [**MaxSizeCapability**](MaxSizeCapability.md) |  | [optional] 
**instance_pool_supported** | **bool** | True if this service objective is supported for managed instances in an instance pool. | [optional] [readonly] 
**name** | **str** | The virtual cores identifier. | [optional] [readonly] 
**reason** | **str** | The reason for the capability not being available. | [optional] 
**standalone_supported** | **bool** | True if this service objective is supported for standalone managed instances. | [optional] [readonly] 
**status** | **str** | The status of the capability. | [optional] [readonly] 
**supported_storage_sizes** | [**List[MaxSizeRangeCapability]**](MaxSizeRangeCapability.md) | Storage size ranges. | [optional] [readonly] 
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


