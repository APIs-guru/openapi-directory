# JobInnerError

The Data Lake Analytics job error details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component** | **str** | The component that failed. | [optional] [readonly] 
**description** | **str** | The error message description. | [optional] [readonly] 
**details** | **str** | The details of the error message. | [optional] [readonly] 
**diagnostic_code** | **int** | The diagnostic error code. | [optional] [readonly] 
**error_id** | **str** | The specific identifier for the type of error encountered in the job. | [optional] [readonly] 
**help_link** | **str** | The link to MSDN or Azure help for this type of error, if any. | [optional] [readonly] 
**inner_error** | [**JobInnerError**](JobInnerError.md) |  | [optional] 
**internal_diagnostics** | **str** | The internal diagnostic stack trace if the user requesting the job error details has sufficient permissions it will be retrieved, otherwise it will be empty. | [optional] [readonly] 
**message** | **str** | The user friendly error message for the failure. | [optional] [readonly] 
**resolution** | **str** | The recommended resolution for the failure, if any. | [optional] [readonly] 
**severity** | **str** | The severity level of the failure. | [optional] [readonly] 
**source** | **str** | The ultimate source of the failure (usually either SYSTEM or USER). | [optional] [readonly] 

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


