# SqlContainerGetProperties

The properties of an Azure Cosmos DB container

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | [**SqlContainerGetPropertiesResource**](SqlContainerGetPropertiesResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.sql_container_get_properties import SqlContainerGetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SqlContainerGetProperties from a JSON string
sql_container_get_properties_instance = SqlContainerGetProperties.from_json(json)
# print the JSON string representation of the object
print(SqlContainerGetProperties.to_json())

# convert the object into a dict
sql_container_get_properties_dict = sql_container_get_properties_instance.to_dict()
# create an instance of SqlContainerGetProperties from a dict
sql_container_get_properties_from_dict = SqlContainerGetProperties.from_dict(sql_container_get_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


