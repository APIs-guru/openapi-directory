# MongoDBCollectionCreateUpdateParameters

Parameters to create and update Cosmos DB MongoDB collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MongoDBCollectionCreateUpdateProperties**](MongoDBCollectionCreateUpdateProperties.md) |  | 

## Example

```python
from openapi_client.models.mongo_db_collection_create_update_parameters import MongoDBCollectionCreateUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of MongoDBCollectionCreateUpdateParameters from a JSON string
mongo_db_collection_create_update_parameters_instance = MongoDBCollectionCreateUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(MongoDBCollectionCreateUpdateParameters.to_json())

# convert the object into a dict
mongo_db_collection_create_update_parameters_dict = mongo_db_collection_create_update_parameters_instance.to_dict()
# create an instance of MongoDBCollectionCreateUpdateParameters from a dict
mongo_db_collection_create_update_parameters_from_dict = MongoDBCollectionCreateUpdateParameters.from_dict(mongo_db_collection_create_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


