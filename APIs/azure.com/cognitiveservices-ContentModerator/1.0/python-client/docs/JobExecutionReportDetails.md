# JobExecutionReportDetails

Job Execution Report Values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**msg** | **str** | Message details. | [optional] 
**ts** | **str** | Time details. | [optional] 

## Example

```python
from openapi_client.models.job_execution_report_details import JobExecutionReportDetails

# TODO update the JSON string below
json = "{}"
# create an instance of JobExecutionReportDetails from a JSON string
job_execution_report_details_instance = JobExecutionReportDetails.from_json(json)
# print the JSON string representation of the object
print(JobExecutionReportDetails.to_json())

# convert the object into a dict
job_execution_report_details_dict = job_execution_report_details_instance.to_dict()
# create an instance of JobExecutionReportDetails from a dict
job_execution_report_details_from_dict = JobExecutionReportDetails.from_dict(job_execution_report_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


