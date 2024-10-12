# JobErrorDetails

The job error information containing the list of job errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The code intended for programmatic access. | [optional] [readonly] 
**error_details** | [**List[JobErrorItem]**](JobErrorItem.md) | The error details. | [optional] [readonly] 
**message** | **str** | The message that describes the error in detail. | [optional] [readonly] 

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


