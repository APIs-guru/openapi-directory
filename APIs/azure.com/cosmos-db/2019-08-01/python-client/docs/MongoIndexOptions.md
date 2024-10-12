# MongoIndexOptions

Cosmos DB MongoDB collection index options

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expire_after_seconds** | **int** | Expire after seconds | [optional] 
**unique** | **bool** | Is unique or not | [optional] 

## Example

```python
from openapi_client.models.mongo_index_options import MongoIndexOptions

# TODO update the JSON string below
json = "{}"
# create an instance of MongoIndexOptions from a JSON string
mongo_index_options_instance = MongoIndexOptions.from_json(json)
# print the JSON string representation of the object
print(MongoIndexOptions.to_json())

# convert the object into a dict
mongo_index_options_dict = mongo_index_options_instance.to_dict()
# create an instance of MongoIndexOptions from a dict
mongo_index_options_from_dict = MongoIndexOptions.from_dict(mongo_index_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


