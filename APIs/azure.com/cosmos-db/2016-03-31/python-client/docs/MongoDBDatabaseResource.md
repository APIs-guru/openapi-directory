# MongoDBDatabaseResource

Cosmos DB MongoDB database id object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Name of the Cosmos DB MongoDB database | 

## Example

```python
from openapi_client.models.mongo_db_database_resource import MongoDBDatabaseResource

# TODO update the JSON string below
json = "{}"
# create an instance of MongoDBDatabaseResource from a JSON string
mongo_db_database_resource_instance = MongoDBDatabaseResource.from_json(json)
# print the JSON string representation of the object
print(MongoDBDatabaseResource.to_json())

# convert the object into a dict
mongo_db_database_resource_dict = mongo_db_database_resource_instance.to_dict()
# create an instance of MongoDBDatabaseResource from a dict
mongo_db_database_resource_from_dict = MongoDBDatabaseResource.from_dict(mongo_db_database_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


