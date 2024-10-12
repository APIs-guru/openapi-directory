# ConnectorDefinition

The Connector model definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Connector id | [optional] [readonly] 
**kind** | **str** | Connector kind (eg aws) | [optional] 
**name** | **str** | Connector name | [optional] [readonly] 
**properties** | [**ConnectorProperties**](ConnectorProperties.md) |  | [optional] 
**type** | **str** | Connector type | [optional] [readonly] 

## Example

```python
from openapi_client.models.connector_definition import ConnectorDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorDefinition from a JSON string
connector_definition_instance = ConnectorDefinition.from_json(json)
# print the JSON string representation of the object
print(ConnectorDefinition.to_json())

# convert the object into a dict
connector_definition_dict = connector_definition_instance.to_dict()
# create an instance of ConnectorDefinition from a dict
connector_definition_from_dict = ConnectorDefinition.from_dict(connector_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


