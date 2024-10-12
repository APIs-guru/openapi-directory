# ReportStatus

Report status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finish_time** | **str** | Output only. The time when this report either completed successfully or failed. | [optional] [readonly] 
**format** | **str** | The file type of the report. | [optional] 
**state** | **str** | Output only. The state of the report. | [optional] [readonly] 

## Example

```python
from openapi_client.models.report_status import ReportStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ReportStatus from a JSON string
report_status_instance = ReportStatus.from_json(json)
# print the JSON string representation of the object
print(ReportStatus.to_json())

# convert the object into a dict
report_status_dict = report_status_instance.to_dict()
# create an instance of ReportStatus from a dict
report_status_from_dict = ReportStatus.from_dict(report_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


