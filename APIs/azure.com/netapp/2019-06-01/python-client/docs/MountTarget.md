# MountTarget

Mount Target

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**properties** | [**MountTargetProperties**](MountTargetProperties.md) |  | 
**tags** | **object** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.mount_target import MountTarget

# TODO update the JSON string below
json = "{}"
# create an instance of MountTarget from a JSON string
mount_target_instance = MountTarget.from_json(json)
# print the JSON string representation of the object
print(MountTarget.to_json())

# convert the object into a dict
mount_target_dict = mount_target_instance.to_dict()
# create an instance of MountTarget from a dict
mount_target_from_dict = MountTarget.from_dict(mount_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


