# DbMigrationExecutionRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**executed_migrations** | [**List[DbMigrationRead]**](DbMigrationRead.md) |  | [optional] 
**initial_version** | **str** |  | [optional] 
**target_version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.db_migration_execution_read import DbMigrationExecutionRead

# TODO update the JSON string below
json = "{}"
# create an instance of DbMigrationExecutionRead from a JSON string
db_migration_execution_read_instance = DbMigrationExecutionRead.from_json(json)
# print the JSON string representation of the object
print(DbMigrationExecutionRead.to_json())

# convert the object into a dict
db_migration_execution_read_dict = db_migration_execution_read_instance.to_dict()
# create an instance of DbMigrationExecutionRead from a dict
db_migration_execution_read_from_dict = DbMigrationExecutionRead.from_dict(db_migration_execution_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


