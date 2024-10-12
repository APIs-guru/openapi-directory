# BatchCreateJobsRequest

Request to create a batch of jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobs** | [**List[Job]**](Job.md) | Required. The jobs to be created. A maximum of 200 jobs can be created in a batch. | [optional] 

## Example

```python
from openapi_client.models.batch_create_jobs_request import BatchCreateJobsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreateJobsRequest from a JSON string
batch_create_jobs_request_instance = BatchCreateJobsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchCreateJobsRequest.to_json())

# convert the object into a dict
batch_create_jobs_request_dict = batch_create_jobs_request_instance.to_dict()
# create an instance of BatchCreateJobsRequest from a dict
batch_create_jobs_request_from_dict = BatchCreateJobsRequest.from_dict(batch_create_jobs_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


