# MongoDBCollectionProperties

The properties of an Azure Cosmos DB MongoDB collection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Name of the Cosmos DB MongoDB collection | 
**indexes** | [**List[MongoIndex]**](MongoIndex.md) | List of index keys | [optional] 
**shard_key** | **Dict[str, str]** | The shard key and partition kind pair, only support \&quot;Hash\&quot; partition kind | [optional] 

## Example

```python
from openapi_client.models.mongo_db_collection_properties import MongoDBCollectionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MongoDBCollectionProperties from a JSON string
mongo_db_collection_properties_instance = MongoDBCollectionProperties.from_json(json)
# print the JSON string representation of the object
print(MongoDBCollectionProperties.to_json())

# convert the object into a dict
mongo_db_collection_properties_dict = mongo_db_collection_properties_instance.to_dict()
# create an instance of MongoDBCollectionProperties from a dict
mongo_db_collection_properties_from_dict = MongoDBCollectionProperties.from_dict(mongo_db_collection_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


