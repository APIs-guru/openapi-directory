# MongoDBDatabaseGetPropertiesResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Name of the Cosmos DB MongoDB database | 
**etag** | **str** | A system generated property representing the resource etag required for optimistic concurrency control. | [optional] [readonly] 
**rid** | **str** | A system generated property. A unique identifier. | [optional] [readonly] 
**ts** | **object** | A system generated property that denotes the last updated timestamp of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.mongo_db_database_get_properties_resource import MongoDBDatabaseGetPropertiesResource

# TODO update the JSON string below
json = "{}"
# create an instance of MongoDBDatabaseGetPropertiesResource from a JSON string
mongo_db_database_get_properties_resource_instance = MongoDBDatabaseGetPropertiesResource.from_json(json)
# print the JSON string representation of the object
print(MongoDBDatabaseGetPropertiesResource.to_json())

# convert the object into a dict
mongo_db_database_get_properties_resource_dict = mongo_db_database_get_properties_resource_instance.to_dict()
# create an instance of MongoDBDatabaseGetPropertiesResource from a dict
mongo_db_database_get_properties_resource_from_dict = MongoDBDatabaseGetPropertiesResource.from_dict(mongo_db_database_get_properties_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


