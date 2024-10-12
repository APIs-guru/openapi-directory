# ConnectorMappingResourceFormat

The connector mapping resource format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ConnectorMapping**](ConnectorMapping.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connector_mapping_resource_format import ConnectorMappingResourceFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorMappingResourceFormat from a JSON string
connector_mapping_resource_format_instance = ConnectorMappingResourceFormat.from_json(json)
# print the JSON string representation of the object
print(ConnectorMappingResourceFormat.to_json())

# convert the object into a dict
connector_mapping_resource_format_dict = connector_mapping_resource_format_instance.to_dict()
# create an instance of ConnectorMappingResourceFormat from a dict
connector_mapping_resource_format_from_dict = ConnectorMappingResourceFormat.from_dict(connector_mapping_resource_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


