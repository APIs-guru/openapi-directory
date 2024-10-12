# UpdateDatabaseDdlMetadata

Metadata type for the operation returned by UpdateDatabaseDdl.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[DdlStatementActionInfo]**](DdlStatementActionInfo.md) | The brief action info for the DDL statements. &#x60;actions[i]&#x60; is the brief info for &#x60;statements[i]&#x60;. | [optional] 
**commit_timestamps** | **List[str]** | Reports the commit timestamps of all statements that have succeeded so far, where &#x60;commit_timestamps[i]&#x60; is the commit timestamp for the statement &#x60;statements[i]&#x60;. | [optional] 
**database** | **str** | The database being modified. | [optional] 
**progress** | [**List[OperationProgress]**](OperationProgress.md) | The progress of the UpdateDatabaseDdl operations. All DDL statements will have continuously updating progress, and &#x60;progress[i]&#x60; is the operation progress for &#x60;statements[i]&#x60;. Also, &#x60;progress[i]&#x60; will have start time and end time populated with commit timestamp of operation, as well as a progress of 100% once the operation has completed. | [optional] 
**statements** | **List[str]** | For an update this list contains all the statements. For an individual statement, this list contains only that statement. | [optional] 
**throttled** | **bool** | Output only. When true, indicates that the operation is throttled e.g. due to resource constraints. When resources become available the operation will resume and this field will be false again. | [optional] [readonly] 

## Example

```python
from openapi_client.models.update_database_ddl_metadata import UpdateDatabaseDdlMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDatabaseDdlMetadata from a JSON string
update_database_ddl_metadata_instance = UpdateDatabaseDdlMetadata.from_json(json)
# print the JSON string representation of the object
print(UpdateDatabaseDdlMetadata.to_json())

# convert the object into a dict
update_database_ddl_metadata_dict = update_database_ddl_metadata_instance.to_dict()
# create an instance of UpdateDatabaseDdlMetadata from a dict
update_database_ddl_metadata_from_dict = UpdateDatabaseDdlMetadata.from_dict(update_database_ddl_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


