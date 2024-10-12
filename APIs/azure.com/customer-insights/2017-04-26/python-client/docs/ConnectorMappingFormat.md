# ConnectorMappingFormat

Connector mapping property format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accept_language** | **str** | The oData language. | [optional] 
**array_separator** | **str** | Character separating array elements. | [optional] 
**column_delimiter** | **str** | The character that signifies a break between columns. | [optional] 
**format_type** | **str** | The type mapping format. | 
**quote_character** | **str** | Quote character, used to indicate enquoted fields. | [optional] 
**quote_escape_character** | **str** | Escape character for quotes, can be the same as the quoteCharacter. | [optional] 

## Example

```python
from openapi_client.models.connector_mapping_format import ConnectorMappingFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorMappingFormat from a JSON string
connector_mapping_format_instance = ConnectorMappingFormat.from_json(json)
# print the JSON string representation of the object
print(ConnectorMappingFormat.to_json())

# convert the object into a dict
connector_mapping_format_dict = connector_mapping_format_instance.to_dict()
# create an instance of ConnectorMappingFormat from a dict
connector_mapping_format_from_dict = ConnectorMappingFormat.from_dict(connector_mapping_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


