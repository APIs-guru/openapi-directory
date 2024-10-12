# IgnoreJobRequest

The request object used by `IgnoreJob`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **str** | Required. The job ID for the Job to ignore. | [optional] 
**phase_id** | **str** | Required. The phase ID the Job to ignore belongs to. | [optional] 

## Example

```python
from openapi_client.models.ignore_job_request import IgnoreJobRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IgnoreJobRequest from a JSON string
ignore_job_request_instance = IgnoreJobRequest.from_json(json)
# print the JSON string representation of the object
print(IgnoreJobRequest.to_json())

# convert the object into a dict
ignore_job_request_dict = ignore_job_request_instance.to_dict()
# create an instance of IgnoreJobRequest from a dict
ignore_job_request_from_dict = IgnoreJobRequest.from_dict(ignore_job_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


