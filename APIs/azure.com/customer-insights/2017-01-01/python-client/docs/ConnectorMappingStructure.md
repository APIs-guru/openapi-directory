# ConnectorMappingStructure

Connector mapping property structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_name** | **str** | The column name of the import file. | 
**custom_format_specifier** | **str** | Custom format specifier for input parsing. | [optional] 
**is_encrypted** | **bool** | Indicates if the column is encrypted. | [optional] 
**property_name** | **str** | The property name of the mapping entity. | 

## Example

```python
from openapi_client.models.connector_mapping_structure import ConnectorMappingStructure

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorMappingStructure from a JSON string
connector_mapping_structure_instance = ConnectorMappingStructure.from_json(json)
# print the JSON string representation of the object
print(ConnectorMappingStructure.to_json())

# convert the object into a dict
connector_mapping_structure_dict = connector_mapping_structure_instance.to_dict()
# create an instance of ConnectorMappingStructure from a dict
connector_mapping_structure_from_dict = ConnectorMappingStructure.from_dict(connector_mapping_structure_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


