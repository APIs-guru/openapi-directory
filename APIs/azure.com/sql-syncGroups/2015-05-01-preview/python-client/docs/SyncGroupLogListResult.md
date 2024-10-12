# SyncGroupLogListResult

A list of sync group log properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[SyncGroupLogProperties]**](SyncGroupLogProperties.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sync_group_log_list_result import SyncGroupLogListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SyncGroupLogListResult from a JSON string
sync_group_log_list_result_instance = SyncGroupLogListResult.from_json(json)
# print the JSON string representation of the object
print(SyncGroupLogListResult.to_json())

# convert the object into a dict
sync_group_log_list_result_dict = sync_group_log_list_result_instance.to_dict()
# create an instance of SyncGroupLogListResult from a dict
sync_group_log_list_result_from_dict = SyncGroupLogListResult.from_dict(sync_group_log_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


