# ConnectorMapping

The connector mapping definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connector_mapping_name** | **str** | The connector mapping name | [optional] [readonly] 
**connector_name** | **str** | The connector name. | [optional] [readonly] 
**connector_type** | [**ConnectorType**](ConnectorType.md) |  | [optional] 
**created** | **datetime** | The created time. | [optional] [readonly] 
**data_format_id** | **str** | The DataFormat ID. | [optional] [readonly] 
**description** | **str** | The description of the connector mapping. | [optional] 
**display_name** | **str** | Display name for the connector mapping. | [optional] 
**entity_type** | **str** | Defines which entity type the file should map to. | 
**entity_type_name** | **str** | The mapping entity name. | 
**last_modified** | **datetime** | The last modified time. | [optional] [readonly] 
**mapping_properties** | [**ConnectorMappingProperties**](ConnectorMappingProperties.md) |  | 
**next_run_time** | **datetime** | The next run time based on customer&#39;s settings. | [optional] [readonly] 
**run_id** | **str** | The RunId. | [optional] [readonly] 
**state** | **str** | State of connector mapping. | [optional] [readonly] 
**tenant_id** | **str** | The hub name. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connector_mapping import ConnectorMapping

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorMapping from a JSON string
connector_mapping_instance = ConnectorMapping.from_json(json)
# print the JSON string representation of the object
print(ConnectorMapping.to_json())

# convert the object into a dict
connector_mapping_dict = connector_mapping_instance.to_dict()
# create an instance of ConnectorMapping from a dict
connector_mapping_from_dict = ConnectorMapping.from_dict(connector_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


