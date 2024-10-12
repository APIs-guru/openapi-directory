# DbMigrationReadList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migrations** | [**List[DbMigrationRead]**](DbMigrationRead.md) |  | [optional] 

## Example

```python
from openapi_client.models.db_migration_read_list import DbMigrationReadList

# TODO update the JSON string below
json = "{}"
# create an instance of DbMigrationReadList from a JSON string
db_migration_read_list_instance = DbMigrationReadList.from_json(json)
# print the JSON string representation of the object
print(DbMigrationReadList.to_json())

# convert the object into a dict
db_migration_read_list_dict = db_migration_read_list_instance.to_dict()
# create an instance of DbMigrationReadList from a dict
db_migration_read_list_from_dict = DbMigrationReadList.from_dict(db_migration_read_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


