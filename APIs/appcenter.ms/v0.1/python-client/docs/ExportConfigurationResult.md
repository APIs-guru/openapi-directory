# ExportConfigurationResult

Export configuration result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **str** | Creation time in ISO 8601 format | 
**export_configuration** | [**ExportConfigurationsList200ResponseValuesInnerExportConfiguration**](ExportConfigurationsList200ResponseValuesInnerExportConfiguration.md) |  | [optional] 
**export_entities** | **List[str]** |  | [optional] 
**export_type** | **str** | Target resource type of export configuration | 
**id** | **str** | Export configuration id | 
**last_run_time** | **str** | Latest time in ISO 8601 format when export completed successfully | [optional] 
**resource_group** | **str** | resource group for the storage account/App Insights resource | [optional] 
**resource_name** | **str** | Storage accout or Appinsights resource name | [optional] 
**state** | **str** | State of the export job | 
**state_info** | **str** | Additional information about export configuration state | [optional] 

## Example

```python
from openapi_client.models.export_configuration_result import ExportConfigurationResult

# TODO update the JSON string below
json = "{}"
# create an instance of ExportConfigurationResult from a JSON string
export_configuration_result_instance = ExportConfigurationResult.from_json(json)
# print the JSON string representation of the object
print(ExportConfigurationResult.to_json())

# convert the object into a dict
export_configuration_result_dict = export_configuration_result_instance.to_dict()
# create an instance of ExportConfigurationResult from a dict
export_configuration_result_from_dict = ExportConfigurationResult.from_dict(export_configuration_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


