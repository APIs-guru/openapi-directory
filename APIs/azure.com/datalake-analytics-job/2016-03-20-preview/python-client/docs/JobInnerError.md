# JobInnerError

The Data Lake Analytics job error details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component** | **str** | the component that failed. | [optional] [readonly] 
**description** | **str** | the error message description | [optional] [readonly] 
**details** | **str** | the details of the error message. | [optional] [readonly] 
**diagnostic_code** | **int** | the diagnostic error code. | [optional] [readonly] 
**error_id** | **str** | the specific identifier for the type of error encountered in the job. | [optional] [readonly] 
**help_link** | **str** | the link to MSDN or Azure help for this type of error, if any. | [optional] [readonly] 
**internal_diagnostics** | **str** | the internal diagnostic stack trace if the user requesting the job error details has sufficient permissions it will be retrieved, otherwise it will be empty. | [optional] [readonly] 
**message** | **str** | the user friendly error message for the failure. | [optional] [readonly] 
**resolution** | **str** | the recommended resolution for the failure, if any. | [optional] [readonly] 
**severity** | **str** | the severity level of the failure. | [optional] [readonly] 
**source** | **str** | the ultimate source of the failure (usually either SYSTEM or USER). | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_inner_error import JobInnerError

# TODO update the JSON string below
json = "{}"
# create an instance of JobInnerError from a JSON string
job_inner_error_instance = JobInnerError.from_json(json)
# print the JSON string representation of the object
print(JobInnerError.to_json())

# convert the object into a dict
job_inner_error_dict = job_inner_error_instance.to_dict()
# create an instance of JobInnerError from a dict
job_inner_error_from_dict = JobInnerError.from_dict(job_inner_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


