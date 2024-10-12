# JobErrorDetails

The Data Lake Analytics job error details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | the error message description | [optional] [readonly] 
**details** | **str** | the details of the error message. | [optional] [readonly] 
**end_offset** | **int** | the end offset in the job where the error was found. | [optional] [readonly] 
**error_id** | **str** | the specific identifier for the type of error encountered in the job. | [optional] [readonly] 
**file_path** | **str** | the path to any supplemental error files, if any. | [optional] [readonly] 
**help_link** | **str** | the link to MSDN or Azure help for this type of error, if any. | [optional] [readonly] 
**inner_error** | [**JobInnerError**](JobInnerError.md) |  | [optional] 
**internal_diagnostics** | **str** | the internal diagnostic stack trace if the user requesting the job error details has sufficient permissions it will be retrieved, otherwise it will be empty. | [optional] [readonly] 
**line_number** | **int** | the specific line number in the job where the error occurred. | [optional] [readonly] 
**message** | **str** | the user friendly error message for the failure. | [optional] [readonly] 
**resolution** | **str** | the recommended resolution for the failure, if any. | [optional] [readonly] 
**severity** | **str** | the severity level of the failure. | [optional] [readonly] 
**source** | **str** | the ultimate source of the failure (usually either SYSTEM or USER). | [optional] [readonly] 
**start_offset** | **int** | the start offset in the job where the error was found | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_error_details import JobErrorDetails

# TODO update the JSON string below
json = "{}"
# create an instance of JobErrorDetails from a JSON string
job_error_details_instance = JobErrorDetails.from_json(json)
# print the JSON string representation of the object
print(JobErrorDetails.to_json())

# convert the object into a dict
job_error_details_dict = job_error_details_instance.to_dict()
# create an instance of JobErrorDetails from a dict
job_error_details_from_dict = JobErrorDetails.from_dict(job_error_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


