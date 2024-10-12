# RunJobRequest

Request message for creating a new execution of a job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overrides** | [**Overrides**](Overrides.md) |  | [optional] 

## Example

```python
from openapi_client.models.run_job_request import RunJobRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RunJobRequest from a JSON string
run_job_request_instance = RunJobRequest.from_json(json)
# print the JSON string representation of the object
print(RunJobRequest.to_json())

# convert the object into a dict
run_job_request_dict = run_job_request_instance.to_dict()
# create an instance of RunJobRequest from a dict
run_job_request_from_dict = RunJobRequest.from_dict(run_job_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


