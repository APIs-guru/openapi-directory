# MongoIndex

Cosmos DB MongoDB collection index key

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | [**MongoIndexKeys**](MongoIndexKeys.md) |  | [optional] 
**options** | [**MongoIndexOptions**](MongoIndexOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.mongo_index import MongoIndex

# TODO update the JSON string below
json = "{}"
# create an instance of MongoIndex from a JSON string
mongo_index_instance = MongoIndex.from_json(json)
# print the JSON string representation of the object
print(MongoIndex.to_json())

# convert the object into a dict
mongo_index_dict = mongo_index_instance.to_dict()
# create an instance of MongoIndex from a dict
mongo_index_from_dict = MongoIndex.from_dict(mongo_index_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


