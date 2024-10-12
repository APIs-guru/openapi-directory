# ConnectionCreateOrUpdateProperties

The properties of the create connection properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_type** | [**ConnectionTypeAssociationProperty**](ConnectionTypeAssociationProperty.md) |  | 
**description** | **str** | Gets or sets the description of the connection. | [optional] 
**field_definition_values** | **Dict[str, str]** | Gets or sets the field definition properties of the connection. | [optional] 

## Example

```python
from openapi_client.models.connection_create_or_update_properties import ConnectionCreateOrUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionCreateOrUpdateProperties from a JSON string
connection_create_or_update_properties_instance = ConnectionCreateOrUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(ConnectionCreateOrUpdateProperties.to_json())

# convert the object into a dict
connection_create_or_update_properties_dict = connection_create_or_update_properties_instance.to_dict()
# create an instance of ConnectionCreateOrUpdateProperties from a dict
connection_create_or_update_properties_from_dict = ConnectionCreateOrUpdateProperties.from_dict(connection_create_or_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


