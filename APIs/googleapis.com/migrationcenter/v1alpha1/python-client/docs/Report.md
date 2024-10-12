# Report

Report represents a point-in-time rendering of the ReportConfig results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Creation timestamp. | [optional] [readonly] 
**description** | **str** | Free-text description. | [optional] 
**display_name** | **str** | User-friendly display name. Maximum length is 63 characters. | [optional] 
**name** | **str** | Output only. Name of resource. | [optional] [readonly] 
**state** | **str** | Report creation state. | [optional] 
**summary** | [**ReportSummary**](ReportSummary.md) |  | [optional] 
**type** | **str** | Report type. | [optional] 
**update_time** | **str** | Output only. Last update timestamp. | [optional] [readonly] 

## Example

```python
from openapi_client.models.report import Report

# TODO update the JSON string below
json = "{}"
# create an instance of Report from a JSON string
report_instance = Report.from_json(json)
# print the JSON string representation of the object
print(Report.to_json())

# convert the object into a dict
report_dict = report_instance.to_dict()
# create an instance of Report from a dict
report_from_dict = Report.from_dict(report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


