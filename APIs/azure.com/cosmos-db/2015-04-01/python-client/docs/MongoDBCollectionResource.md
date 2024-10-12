# MongoDBCollectionResource

Cosmos DB MongoDB collection resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Name of the Cosmos DB MongoDB collection | 
**indexes** | [**List[MongoIndex]**](MongoIndex.md) | List of index keys | [optional] 
**shard_key** | **Dict[str, str]** | The shard key and partition kind pair, only support \&quot;Hash\&quot; partition kind | [optional] 

## Example

```python
from openapi_client.models.mongo_db_collection_resource import MongoDBCollectionResource

# TODO update the JSON string below
json = "{}"
# create an instance of MongoDBCollectionResource from a JSON string
mongo_db_collection_resource_instance = MongoDBCollectionResource.from_json(json)
# print the JSON string representation of the object
print(MongoDBCollectionResource.to_json())

# convert the object into a dict
mongo_db_collection_resource_dict = mongo_db_collection_resource_instance.to_dict()
# create an instance of MongoDBCollectionResource from a dict
mongo_db_collection_resource_from_dict = MongoDBCollectionResource.from_dict(mongo_db_collection_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


