# SqlTriggerGetProperties

The properties of an Azure Cosmos DB trigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | [**SqlTriggerGetPropertiesResource**](SqlTriggerGetPropertiesResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.sql_trigger_get_properties import SqlTriggerGetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SqlTriggerGetProperties from a JSON string
sql_trigger_get_properties_instance = SqlTriggerGetProperties.from_json(json)
# print the JSON string representation of the object
print(SqlTriggerGetProperties.to_json())

# convert the object into a dict
sql_trigger_get_properties_dict = sql_trigger_get_properties_instance.to_dict()
# create an instance of SqlTriggerGetProperties from a dict
sql_trigger_get_properties_from_dict = SqlTriggerGetProperties.from_dict(sql_trigger_get_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


