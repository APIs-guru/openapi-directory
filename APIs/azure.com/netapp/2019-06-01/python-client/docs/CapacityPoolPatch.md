# CapacityPoolPatch

Capacity pool patch resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**properties** | [**PoolPatchProperties**](PoolPatchProperties.md) |  | [optional] 
**tags** | **object** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.capacity_pool_patch import CapacityPoolPatch

# TODO update the JSON string below
json = "{}"
# create an instance of CapacityPoolPatch from a JSON string
capacity_pool_patch_instance = CapacityPoolPatch.from_json(json)
# print the JSON string representation of the object
print(CapacityPoolPatch.to_json())

# convert the object into a dict
capacity_pool_patch_dict = capacity_pool_patch_instance.to_dict()
# create an instance of CapacityPoolPatch from a dict
capacity_pool_patch_from_dict = CapacityPoolPatch.from_dict(capacity_pool_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


