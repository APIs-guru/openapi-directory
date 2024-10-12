# MongoIndexKeys

Cosmos DB MongoDB collection resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keys** | **List[str]** | List of keys for each MongoDB collection in the Azure Cosmos DB service | [optional] 

## Example

```python
from openapi_client.models.mongo_index_keys import MongoIndexKeys

# TODO update the JSON string below
json = "{}"
# create an instance of MongoIndexKeys from a JSON string
mongo_index_keys_instance = MongoIndexKeys.from_json(json)
# print the JSON string representation of the object
print(MongoIndexKeys.to_json())

# convert the object into a dict
mongo_index_keys_dict = mongo_index_keys_instance.to_dict()
# create an instance of MongoIndexKeys from a dict
mongo_index_keys_from_dict = MongoIndexKeys.from_dict(mongo_index_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


