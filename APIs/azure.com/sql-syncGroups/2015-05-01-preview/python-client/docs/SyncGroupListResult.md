# SyncGroupListResult

A list of sync groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[SyncGroup]**](SyncGroup.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sync_group_list_result import SyncGroupListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SyncGroupListResult from a JSON string
sync_group_list_result_instance = SyncGroupListResult.from_json(json)
# print the JSON string representation of the object
print(SyncGroupListResult.to_json())

# convert the object into a dict
sync_group_list_result_dict = sync_group_list_result_instance.to_dict()
# create an instance of SyncGroupListResult from a dict
sync_group_list_result_from_dict = SyncGroupListResult.from_dict(sync_group_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


