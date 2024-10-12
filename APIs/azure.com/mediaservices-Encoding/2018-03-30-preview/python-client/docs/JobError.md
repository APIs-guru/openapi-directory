# JobError

Details of JobOutput errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Helps with categorization of errors. | [optional] [readonly] 
**code** | **str** | Error code describing the error. | [optional] [readonly] 
**details** | [**List[JobErrorDetail]**](JobErrorDetail.md) | An array of details about specific errors that led to this reported error. | [optional] [readonly] 
**message** | **str** | A human-readable language-dependent representation of the error. | [optional] [readonly] 
**retry** | **str** | Indicates that it may be possible to retry the Job. If retry is unsuccessful, please contact Azure support via Azure Portal. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_error import JobError

# TODO update the JSON string below
json = "{}"
# create an instance of JobError from a JSON string
job_error_instance = JobError.from_json(json)
# print the JSON string representation of the object
print(JobError.to_json())

# convert the object into a dict
job_error_dict = job_error_instance.to_dict()
# create an instance of JobError from a dict
job_error_from_dict = JobError.from_dict(job_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


