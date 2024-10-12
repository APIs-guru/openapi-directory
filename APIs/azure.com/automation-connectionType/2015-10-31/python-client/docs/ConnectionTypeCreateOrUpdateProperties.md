# ConnectionTypeCreateOrUpdateProperties

The properties of the create connection type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_definitions** | [**Dict[str, FieldDefinition]**](FieldDefinition.md) | Gets or sets the field definitions of the connection type. | 
**is_global** | **bool** | Gets or sets a Boolean value to indicate if the connection type is global. | [optional] 

## Example

```python
from openapi_client.models.connection_type_create_or_update_properties import ConnectionTypeCreateOrUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionTypeCreateOrUpdateProperties from a JSON string
connection_type_create_or_update_properties_instance = ConnectionTypeCreateOrUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(ConnectionTypeCreateOrUpdateProperties.to_json())

# convert the object into a dict
connection_type_create_or_update_properties_dict = connection_type_create_or_update_properties_instance.to_dict()
# create an instance of ConnectionTypeCreateOrUpdateProperties from a dict
connection_type_create_or_update_properties_from_dict = ConnectionTypeCreateOrUpdateProperties.from_dict(connection_type_create_or_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


