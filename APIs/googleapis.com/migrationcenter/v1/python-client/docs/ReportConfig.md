# ReportConfig

The groups and associated preference sets on which we can generate reports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The timestamp when the resource was created. | [optional] [readonly] 
**description** | **str** | Free-text description. | [optional] 
**display_name** | **str** | User-friendly display name. Maximum length is 63 characters. | [optional] 
**group_preferenceset_assignments** | [**List[ReportConfigGroupPreferenceSetAssignment]**](ReportConfigGroupPreferenceSetAssignment.md) | Required. Collection of combinations of groups and preference sets. | [optional] 
**name** | **str** | Output only. Name of resource. | [optional] [readonly] 
**update_time** | **str** | Output only. The timestamp when the resource was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.report_config import ReportConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ReportConfig from a JSON string
report_config_instance = ReportConfig.from_json(json)
# print the JSON string representation of the object
print(ReportConfig.to_json())

# convert the object into a dict
report_config_dict = report_config_instance.to_dict()
# create an instance of ReportConfig from a dict
report_config_from_dict = ReportConfig.from_dict(report_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


