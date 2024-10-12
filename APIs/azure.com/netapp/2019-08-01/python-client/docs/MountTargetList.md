# MountTargetList

List of Mount Targets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[MountTarget]**](MountTarget.md) | A list of Mount targets | [optional] 

## Example

```python
from openapi_client.models.mount_target_list import MountTargetList

# TODO update the JSON string below
json = "{}"
# create an instance of MountTargetList from a JSON string
mount_target_list_instance = MountTargetList.from_json(json)
# print the JSON string representation of the object
print(MountTargetList.to_json())

# convert the object into a dict
mount_target_list_dict = mount_target_list_instance.to_dict()
# create an instance of MountTargetList from a dict
mount_target_list_from_dict = MountTargetList.from_dict(mount_target_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


