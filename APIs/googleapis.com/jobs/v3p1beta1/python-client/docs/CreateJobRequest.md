# CreateJobRequest

Input only. Create job request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job** | [**Job**](Job.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_job_request import CreateJobRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateJobRequest from a JSON string
create_job_request_instance = CreateJobRequest.from_json(json)
# print the JSON string representation of the object
print(CreateJobRequest.to_json())

# convert the object into a dict
create_job_request_dict = create_job_request_instance.to_dict()
# create an instance of CreateJobRequest from a dict
create_job_request_from_dict = CreateJobRequest.from_dict(create_job_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


