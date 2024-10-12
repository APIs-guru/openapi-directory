# ConnectorMappingProperties

The connector mapping properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability** | [**ConnectorMappingAvailability**](ConnectorMappingAvailability.md) |  | 
**complete_operation** | [**ConnectorMappingCompleteOperation**](ConnectorMappingCompleteOperation.md) |  | 
**error_management** | [**ConnectorMappingErrorManagement**](ConnectorMappingErrorManagement.md) |  | 
**file_filter** | **str** | The file filter for the mapping. | [optional] 
**folder_path** | **str** | The folder path for the mapping. | [optional] 
**format** | [**ConnectorMappingFormat**](ConnectorMappingFormat.md) |  | 
**has_header** | **bool** | If the file contains a header or not. | [optional] 
**structure** | [**List[ConnectorMappingStructure]**](ConnectorMappingStructure.md) | Ingestion mapping information at property level. | 

## Example

```python
from openapi_client.models.connector_mapping_properties import ConnectorMappingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorMappingProperties from a JSON string
connector_mapping_properties_instance = ConnectorMappingProperties.from_json(json)
# print the JSON string representation of the object
print(ConnectorMappingProperties.to_json())

# convert the object into a dict
connector_mapping_properties_dict = connector_mapping_properties_instance.to_dict()
# create an instance of ConnectorMappingProperties from a dict
connector_mapping_properties_from_dict = ConnectorMappingProperties.from_dict(connector_mapping_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


