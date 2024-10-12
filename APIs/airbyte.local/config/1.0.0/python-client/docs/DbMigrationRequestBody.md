# DbMigrationRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database** | **str** |  | 

## Example

```python
from openapi_client.models.db_migration_request_body import DbMigrationRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of DbMigrationRequestBody from a JSON string
db_migration_request_body_instance = DbMigrationRequestBody.from_json(json)
# print the JSON string representation of the object
print(DbMigrationRequestBody.to_json())

# convert the object into a dict
db_migration_request_body_dict = db_migration_request_body_instance.to_dict()
# create an instance of DbMigrationRequestBody from a dict
db_migration_request_body_from_dict = DbMigrationRequestBody.from_dict(db_migration_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


