# Report

A report's metadata including the URL from which the report itself can be downloaded.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The date/time when this report was created. | [optional] 
**download_url** | **str** | The URL from which the report can be downloaded (max. 1000 characters). | [optional] 
**end_time** | **str** | The end of the time period that the report instance covers. The value is exclusive. | [optional] 
**id** | **str** | The server-generated ID of the report. | [optional] 
**job_expire_time** | **str** | The date/time when the job this report belongs to will expire/expired. | [optional] 
**job_id** | **str** | The ID of the job that created this report. | [optional] 
**start_time** | **str** | The start of the time period that the report instance covers. The value is inclusive. | [optional] 

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


