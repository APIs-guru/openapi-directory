# MongoDBDatabaseListResult

The List operation response, that contains the MongoDB databases and their properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[MongoDBDatabase]**](MongoDBDatabase.md) | List of MongoDB databases and their properties. | [optional] [readonly] 

## Example

```python
from openapi_client.models.mongo_db_database_list_result import MongoDBDatabaseListResult

# TODO update the JSON string below
json = "{}"
# create an instance of MongoDBDatabaseListResult from a JSON string
mongo_db_database_list_result_instance = MongoDBDatabaseListResult.from_json(json)
# print the JSON string representation of the object
print(MongoDBDatabaseListResult.to_json())

# convert the object into a dict
mongo_db_database_list_result_dict = mongo_db_database_list_result_instance.to_dict()
# create an instance of MongoDBDatabaseListResult from a dict
mongo_db_database_list_result_from_dict = MongoDBDatabaseListResult.from_dict(mongo_db_database_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


