# InstancePoolVcoresCapability

The managed instance virtual cores capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The virtual cores identifier. | [optional] [readonly] 
**reason** | **str** | The reason for the capability not being available. | [optional] 
**status** | **str** | The status of the capability. | [optional] [readonly] 
**storage_limit** | [**MaxSizeCapability**](MaxSizeCapability.md) |  | [optional] 
**value** | **int** | The virtual cores value. | [optional] [readonly] 

## Example

```python
from openapi_client.models.instance_pool_vcores_capability import InstancePoolVcoresCapability

# TODO update the JSON string below
json = "{}"
# create an instance of InstancePoolVcoresCapability from a JSON string
instance_pool_vcores_capability_instance = InstancePoolVcoresCapability.from_json(json)
# print the JSON string representation of the object
print(InstancePoolVcoresCapability.to_json())

# convert the object into a dict
instance_pool_vcores_capability_dict = instance_pool_vcores_capability_instance.to_dict()
# create an instance of InstancePoolVcoresCapability from a dict
instance_pool_vcores_capability_from_dict = InstancePoolVcoresCapability.from_dict(instance_pool_vcores_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


