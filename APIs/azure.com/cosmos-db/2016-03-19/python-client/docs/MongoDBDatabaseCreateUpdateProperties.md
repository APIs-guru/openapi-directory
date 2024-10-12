# MongoDBDatabaseCreateUpdateProperties

Properties to create and update Azure Cosmos DB MongoDB database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**options** | **Dict[str, str]** | CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are \&quot;If-Match\&quot;, \&quot;If-None-Match\&quot;, \&quot;Session-Token\&quot; and \&quot;Throughput\&quot; | 
**resource** | [**MongoDBDatabaseResource**](MongoDBDatabaseResource.md) |  | 

## Example

```python
from openapi_client.models.mongo_db_database_create_update_properties import MongoDBDatabaseCreateUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MongoDBDatabaseCreateUpdateProperties from a JSON string
mongo_db_database_create_update_properties_instance = MongoDBDatabaseCreateUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(MongoDBDatabaseCreateUpdateProperties.to_json())

# convert the object into a dict
mongo_db_database_create_update_properties_dict = mongo_db_database_create_update_properties_instance.to_dict()
# create an instance of MongoDBDatabaseCreateUpdateProperties from a dict
mongo_db_database_create_update_properties_from_dict = MongoDBDatabaseCreateUpdateProperties.from_dict(mongo_db_database_create_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


