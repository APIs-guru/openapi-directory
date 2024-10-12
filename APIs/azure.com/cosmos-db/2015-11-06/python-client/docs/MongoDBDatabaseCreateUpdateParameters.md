# MongoDBDatabaseCreateUpdateParameters

Parameters to create and update Cosmos DB MongoDB database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MongoDBDatabaseCreateUpdateProperties**](MongoDBDatabaseCreateUpdateProperties.md) |  | 

## Example

```python
from openapi_client.models.mongo_db_database_create_update_parameters import MongoDBDatabaseCreateUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of MongoDBDatabaseCreateUpdateParameters from a JSON string
mongo_db_database_create_update_parameters_instance = MongoDBDatabaseCreateUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(MongoDBDatabaseCreateUpdateParameters.to_json())

# convert the object into a dict
mongo_db_database_create_update_parameters_dict = mongo_db_database_create_update_parameters_instance.to_dict()
# create an instance of MongoDBDatabaseCreateUpdateParameters from a dict
mongo_db_database_create_update_parameters_from_dict = MongoDBDatabaseCreateUpdateParameters.from_dict(mongo_db_database_create_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


