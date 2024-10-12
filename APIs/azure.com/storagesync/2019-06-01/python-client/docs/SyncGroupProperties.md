# SyncGroupProperties

SyncGroup Properties object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sync_group_status** | **str** | Sync group status | [optional] [readonly] 
**unique_id** | **str** | Unique Id | [optional] [readonly] 

## Example

```python
from openapi_client.models.sync_group_properties import SyncGroupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SyncGroupProperties from a JSON string
sync_group_properties_instance = SyncGroupProperties.from_json(json)
# print the JSON string representation of the object
print(SyncGroupProperties.to_json())

# convert the object into a dict
sync_group_properties_dict = sync_group_properties_instance.to_dict()
# create an instance of SyncGroupProperties from a dict
sync_group_properties_from_dict = SyncGroupProperties.from_dict(sync_group_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


