# MigrationSubTask

Disk migration child task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migration_sub_task_id** | **str** | The id of migration child task. | [optional] [readonly] 
**properties** | [**DiskMigrationJobsList200ResponseValueInnerPropertiesSubtasksInnerProperties**](DiskMigrationJobsList200ResponseValueInnerPropertiesSubtasksInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.migration_sub_task import MigrationSubTask

# TODO update the JSON string below
json = "{}"
# create an instance of MigrationSubTask from a JSON string
migration_sub_task_instance = MigrationSubTask.from_json(json)
# print the JSON string representation of the object
print(MigrationSubTask.to_json())

# convert the object into a dict
migration_sub_task_dict = migration_sub_task_instance.to_dict()
# create an instance of MigrationSubTask from a dict
migration_sub_task_from_dict = MigrationSubTask.from_dict(migration_sub_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


