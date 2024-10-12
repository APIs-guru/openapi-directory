# JobErrorDetails

This class contains the error details per object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | The creation time of job error. | [optional] 
**error_level** | **str** | Error level of error. | [optional] 
**provider_error_details** | [**ProviderError**](ProviderError.md) |  | [optional] 
**service_error_details** | [**ServiceError**](ServiceError.md) |  | [optional] 
**task_id** | **str** | The Id of the task. | [optional] 

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


