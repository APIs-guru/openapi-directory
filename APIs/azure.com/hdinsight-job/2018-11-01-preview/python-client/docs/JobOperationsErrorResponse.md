# JobOperationsErrorResponse

Describes the format of Error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.job_operations_error_response import JobOperationsErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of JobOperationsErrorResponse from a JSON string
job_operations_error_response_instance = JobOperationsErrorResponse.from_json(json)
# print the JSON string representation of the object
print(JobOperationsErrorResponse.to_json())

# convert the object into a dict
job_operations_error_response_dict = job_operations_error_response_instance.to_dict()
# create an instance of JobOperationsErrorResponse from a dict
job_operations_error_response_from_dict = JobOperationsErrorResponse.from_dict(job_operations_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


