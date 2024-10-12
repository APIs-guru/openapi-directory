# ExportConfigurationAppInsightsKey

Configuration for export to Application Insights resource with customer provided intrumentation key

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instrumentation_key** | **str** | Instrumentation key for Application Insights resource | 
**backfill** | **bool** | Field to determine if backfilling should occur. The default value is true. If set to false export starts from date and time of config creation. | [optional] 
**export_entities** | **List[str]** |  | [optional] 
**resource_group** | **str** | The resource group name on azure | [optional] 
**resource_name** | **str** | The resource name on azure | [optional] 
**type** | **str** | Type of export configuration | 

## Example

```python
from openapi_client.models.export_configuration_app_insights_key import ExportConfigurationAppInsightsKey

# TODO update the JSON string below
json = "{}"
# create an instance of ExportConfigurationAppInsightsKey from a JSON string
export_configuration_app_insights_key_instance = ExportConfigurationAppInsightsKey.from_json(json)
# print the JSON string representation of the object
print(ExportConfigurationAppInsightsKey.to_json())

# convert the object into a dict
export_configuration_app_insights_key_dict = export_configuration_app_insights_key_instance.to_dict()
# create an instance of ExportConfigurationAppInsightsKey from a dict
export_configuration_app_insights_key_from_dict = ExportConfigurationAppInsightsKey.from_dict(export_configuration_app_insights_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


