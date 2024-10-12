# MongoDBCollectionGetPropertiesResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Name of the Cosmos DB MongoDB collection | 
**indexes** | [**List[MongoIndex]**](MongoIndex.md) | List of index keys | [optional] 
**shard_key** | **Dict[str, str]** | The shard key and partition kind pair, only support \&quot;Hash\&quot; partition kind | [optional] 
**etag** | **str** | A system generated property representing the resource etag required for optimistic concurrency control. | [optional] [readonly] 
**rid** | **str** | A system generated property. A unique identifier. | [optional] [readonly] 
**ts** | **object** | A system generated property that denotes the last updated timestamp of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.mongo_db_collection_get_properties_resource import MongoDBCollectionGetPropertiesResource

# TODO update the JSON string below
json = "{}"
# create an instance of MongoDBCollectionGetPropertiesResource from a JSON string
mongo_db_collection_get_properties_resource_instance = MongoDBCollectionGetPropertiesResource.from_json(json)
# print the JSON string representation of the object
print(MongoDBCollectionGetPropertiesResource.to_json())

# convert the object into a dict
mongo_db_collection_get_properties_resource_dict = mongo_db_collection_get_properties_resource_instance.to_dict()
# create an instance of MongoDBCollectionGetPropertiesResource from a dict
mongo_db_collection_get_properties_resource_from_dict = MongoDBCollectionGetPropertiesResource.from_dict(mongo_db_collection_get_properties_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


