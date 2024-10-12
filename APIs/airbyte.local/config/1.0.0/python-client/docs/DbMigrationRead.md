# DbMigrationRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migrated_at** | **int** |  | [optional] 
**migrated_by** | **str** |  | [optional] 
**migration_description** | **str** |  | 
**migration_script** | **str** |  | [optional] 
**migration_state** | [**DbMigrationState**](DbMigrationState.md) |  | [optional] 
**migration_type** | **str** |  | 
**migration_version** | **str** |  | 

## Example

```python
from openapi_client.models.db_migration_read import DbMigrationRead

# TODO update the JSON string below
json = "{}"
# create an instance of DbMigrationRead from a JSON string
db_migration_read_instance = DbMigrationRead.from_json(json)
# print the JSON string representation of the object
print(DbMigrationRead.to_json())

# convert the object into a dict
db_migration_read_dict = db_migration_read_instance.to_dict()
# create an instance of DbMigrationRead from a dict
db_migration_read_from_dict = DbMigrationRead.from_dict(db_migration_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


