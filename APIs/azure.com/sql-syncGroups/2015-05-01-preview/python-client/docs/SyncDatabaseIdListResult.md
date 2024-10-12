# SyncDatabaseIdListResult

A list of sync database ID properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[SyncDatabaseIdProperties]**](SyncDatabaseIdProperties.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sync_database_id_list_result import SyncDatabaseIdListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SyncDatabaseIdListResult from a JSON string
sync_database_id_list_result_instance = SyncDatabaseIdListResult.from_json(json)
# print the JSON string representation of the object
print(SyncDatabaseIdListResult.to_json())

# convert the object into a dict
sync_database_id_list_result_dict = sync_database_id_list_result_instance.to_dict()
# create an instance of SyncDatabaseIdListResult from a dict
sync_database_id_list_result_from_dict = SyncDatabaseIdListResult.from_dict(sync_database_id_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


