# MongoDBCollectionGetProperties

The properties of an Azure Cosmos DB MongoDB collection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | [**MongoDBCollectionGetPropertiesResource**](MongoDBCollectionGetPropertiesResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.mongo_db_collection_get_properties import MongoDBCollectionGetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MongoDBCollectionGetProperties from a JSON string
mongo_db_collection_get_properties_instance = MongoDBCollectionGetProperties.from_json(json)
# print the JSON string representation of the object
print(MongoDBCollectionGetProperties.to_json())

# convert the object into a dict
mongo_db_collection_get_properties_dict = mongo_db_collection_get_properties_instance.to_dict()
# create an instance of MongoDBCollectionGetProperties from a dict
mongo_db_collection_get_properties_from_dict = MongoDBCollectionGetProperties.from_dict(mongo_db_collection_get_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


