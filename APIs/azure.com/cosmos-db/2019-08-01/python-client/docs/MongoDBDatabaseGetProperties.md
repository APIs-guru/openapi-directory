# MongoDBDatabaseGetProperties

The properties of an Azure Cosmos DB MongoDB database

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | [**MongoDBDatabaseGetPropertiesResource**](MongoDBDatabaseGetPropertiesResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.mongo_db_database_get_properties import MongoDBDatabaseGetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MongoDBDatabaseGetProperties from a JSON string
mongo_db_database_get_properties_instance = MongoDBDatabaseGetProperties.from_json(json)
# print the JSON string representation of the object
print(MongoDBDatabaseGetProperties.to_json())

# convert the object into a dict
mongo_db_database_get_properties_dict = mongo_db_database_get_properties_instance.to_dict()
# create an instance of MongoDBDatabaseGetProperties from a dict
mongo_db_database_get_properties_from_dict = MongoDBDatabaseGetProperties.from_dict(mongo_db_database_get_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


