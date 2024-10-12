# MongoDBDatabaseProperties

The properties of an Azure Cosmos DB MongoDB database

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Name of the Cosmos DB MongoDB database | 

## Example

```python
from openapi_client.models.mongo_db_database_properties import MongoDBDatabaseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MongoDBDatabaseProperties from a JSON string
mongo_db_database_properties_instance = MongoDBDatabaseProperties.from_json(json)
# print the JSON string representation of the object
print(MongoDBDatabaseProperties.to_json())

# convert the object into a dict
mongo_db_database_properties_dict = mongo_db_database_properties_instance.to_dict()
# create an instance of MongoDBDatabaseProperties from a dict
mongo_db_database_properties_from_dict = MongoDBDatabaseProperties.from_dict(mongo_db_database_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


