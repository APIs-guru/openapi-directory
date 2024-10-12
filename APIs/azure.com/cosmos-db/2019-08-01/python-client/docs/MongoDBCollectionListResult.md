# MongoDBCollectionListResult

The List operation response, that contains the MongoDB collections and their properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[MongoDBCollectionGetResults]**](MongoDBCollectionGetResults.md) | List of MongoDB collections and their properties. | [optional] [readonly] 

## Example

```python
from openapi_client.models.mongo_db_collection_list_result import MongoDBCollectionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of MongoDBCollectionListResult from a JSON string
mongo_db_collection_list_result_instance = MongoDBCollectionListResult.from_json(json)
# print the JSON string representation of the object
print(MongoDBCollectionListResult.to_json())

# convert the object into a dict
mongo_db_collection_list_result_dict = mongo_db_collection_list_result_instance.to_dict()
# create an instance of MongoDBCollectionListResult from a dict
mongo_db_collection_list_result_from_dict = MongoDBCollectionListResult.from_dict(mongo_db_collection_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


