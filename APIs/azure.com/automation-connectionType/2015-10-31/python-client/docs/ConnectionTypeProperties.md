# ConnectionTypeProperties

Properties of the connection type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | Gets the creation time. | [optional] [readonly] 
**description** | **str** | Gets or sets the description. | [optional] 
**field_definitions** | [**Dict[str, FieldDefinition]**](FieldDefinition.md) | Gets the field definitions of the connection type. | [optional] [readonly] 
**is_global** | **bool** | Gets or sets a Boolean value to indicate if the connection type is global. | [optional] 
**last_modified_time** | **datetime** | Gets or sets the last modified time. | [optional] 

## Example

```python
from openapi_client.models.connection_type_properties import ConnectionTypeProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionTypeProperties from a JSON string
connection_type_properties_instance = ConnectionTypeProperties.from_json(json)
# print the JSON string representation of the object
print(ConnectionTypeProperties.to_json())

# convert the object into a dict
connection_type_properties_dict = connection_type_properties_instance.to_dict()
# create an instance of ConnectionTypeProperties from a dict
connection_type_properties_from_dict = ConnectionTypeProperties.from_dict(connection_type_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


