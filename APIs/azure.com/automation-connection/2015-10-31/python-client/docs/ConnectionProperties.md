# ConnectionProperties

Definition of the connection properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_type** | [**ConnectionTypeAssociationProperty**](ConnectionTypeAssociationProperty.md) |  | [optional] 
**creation_time** | **datetime** | Gets the creation time. | [optional] [readonly] 
**description** | **str** | Gets or sets the description. | [optional] 
**field_definition_values** | **Dict[str, str]** | Gets the field definition values of the connection. | [optional] [readonly] 
**last_modified_time** | **datetime** | Gets the last modified time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connection_properties import ConnectionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionProperties from a JSON string
connection_properties_instance = ConnectionProperties.from_json(json)
# print the JSON string representation of the object
print(ConnectionProperties.to_json())

# convert the object into a dict
connection_properties_dict = connection_properties_instance.to_dict()
# create an instance of ConnectionProperties from a dict
connection_properties_from_dict = ConnectionProperties.from_dict(connection_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


