# DataExportProperties

Data Export properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_tables** | **bool** | When ‘true’, all workspace&#39;s tables are exported. | [optional] 
**created_date** | **str** | The latest data export rule modification time. | [optional] 
**data_export_id** | **str** | The data export rule ID. | [optional] 
**destination** | [**Destination**](Destination.md) |  | [optional] 
**enable** | **bool** | Active when enabled. | [optional] 
**last_modified_date** | **str** | Date and time when the export was last modified. | [optional] 
**table_names** | **List[str]** | An array of tables to export, for example: [“Heartbeat, SecurityEvent”]. | [optional] 

## Example

```python
from openapi_client.models.data_export_properties import DataExportProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DataExportProperties from a JSON string
data_export_properties_instance = DataExportProperties.from_json(json)
# print the JSON string representation of the object
print(DataExportProperties.to_json())

# convert the object into a dict
data_export_properties_dict = data_export_properties_instance.to_dict()
# create an instance of DataExportProperties from a dict
data_export_properties_from_dict = DataExportProperties.from_dict(data_export_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


