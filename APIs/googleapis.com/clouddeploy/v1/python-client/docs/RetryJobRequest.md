# RetryJobRequest

RetryJobRequest is the request object used by `RetryJob`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **str** | Required. The job ID for the Job to retry. | [optional] 
**phase_id** | **str** | Required. The phase ID the Job to retry belongs to. | [optional] 

## Example

```python
from openapi_client.models.retry_job_request import RetryJobRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RetryJobRequest from a JSON string
retry_job_request_instance = RetryJobRequest.from_json(json)
# print the JSON string representation of the object
print(RetryJobRequest.to_json())

# convert the object into a dict
retry_job_request_dict = retry_job_request_instance.to_dict()
# create an instance of RetryJobRequest from a dict
retry_job_request_from_dict = RetryJobRequest.from_dict(retry_job_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


