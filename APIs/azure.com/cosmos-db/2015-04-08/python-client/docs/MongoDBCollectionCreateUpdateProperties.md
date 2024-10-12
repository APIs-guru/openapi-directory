# MongoDBCollectionCreateUpdateProperties

Properties to create and update Azure Cosmos DB MongoDB collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**options** | **Dict[str, str]** | CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are \&quot;If-Match\&quot;, \&quot;If-None-Match\&quot;, \&quot;Session-Token\&quot; and \&quot;Throughput\&quot; | 
**resource** | [**MongoDBCollectionResource**](MongoDBCollectionResource.md) |  | 

## Example

```python
from openapi_client.models.mongo_db_collection_create_update_properties import MongoDBCollectionCreateUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MongoDBCollectionCreateUpdateProperties from a JSON string
mongo_db_collection_create_update_properties_instance = MongoDBCollectionCreateUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(MongoDBCollectionCreateUpdateProperties.to_json())

# convert the object into a dict
mongo_db_collection_create_update_properties_dict = mongo_db_collection_create_update_properties_instance.to_dict()
# create an instance of MongoDBCollectionCreateUpdateProperties from a dict
mongo_db_collection_create_update_properties_from_dict = MongoDBCollectionCreateUpdateProperties.from_dict(mongo_db_collection_create_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


