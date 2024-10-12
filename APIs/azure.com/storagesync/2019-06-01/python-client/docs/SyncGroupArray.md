# SyncGroupArray

Array of SyncGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[SyncGroup]**](SyncGroup.md) | Collection of SyncGroup. | [optional] 

## Example

```python
from openapi_client.models.sync_group_array import SyncGroupArray

# TODO update the JSON string below
json = "{}"
# create an instance of SyncGroupArray from a JSON string
sync_group_array_instance = SyncGroupArray.from_json(json)
# print the JSON string representation of the object
print(SyncGroupArray.to_json())

# convert the object into a dict
sync_group_array_dict = sync_group_array_instance.to_dict()
# create an instance of SyncGroupArray from a dict
sync_group_array_from_dict = SyncGroupArray.from_dict(sync_group_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


