# SqlDatabaseGetPropertiesResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**colls** | **str** | A system generated property that specified the addressable path of the collections resource. | [optional] 
**users** | **str** | A system generated property that specifies the addressable path of the users resource. | [optional] 

## Example

```python
from openapi_client.models.sql_database_get_properties_resource import SqlDatabaseGetPropertiesResource

# TODO update the JSON string below
json = "{}"
# create an instance of SqlDatabaseGetPropertiesResource from a JSON string
sql_database_get_properties_resource_instance = SqlDatabaseGetPropertiesResource.from_json(json)
# print the JSON string representation of the object
print(SqlDatabaseGetPropertiesResource.to_json())

# convert the object into a dict
sql_database_get_properties_resource_dict = sql_database_get_properties_resource_instance.to_dict()
# create an instance of SqlDatabaseGetPropertiesResource from a dict
sql_database_get_properties_resource_from_dict = SqlDatabaseGetPropertiesResource.from_dict(sql_database_get_properties_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


