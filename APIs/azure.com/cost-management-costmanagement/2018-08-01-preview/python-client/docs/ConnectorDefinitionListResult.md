# ConnectorDefinitionListResult

Result of listing connector definitions. It contains a list of available connector definitions in the scope provided.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ConnectorDefinition]**](ConnectorDefinition.md) | The list of connector definitions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connector_definition_list_result import ConnectorDefinitionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorDefinitionListResult from a JSON string
connector_definition_list_result_instance = ConnectorDefinitionListResult.from_json(json)
# print the JSON string representation of the object
print(ConnectorDefinitionListResult.to_json())

# convert the object into a dict
connector_definition_list_result_dict = connector_definition_list_result_instance.to_dict()
# create an instance of ConnectorDefinitionListResult from a dict
connector_definition_list_result_from_dict = ConnectorDefinitionListResult.from_dict(connector_definition_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


