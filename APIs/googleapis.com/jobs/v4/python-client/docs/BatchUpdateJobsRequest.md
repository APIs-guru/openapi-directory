# BatchUpdateJobsRequest

Request to update a batch of jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobs** | [**List[Job]**](Job.md) | Required. The jobs to be updated. A maximum of 200 jobs can be updated in a batch. | [optional] 
**update_mask** | **str** | Strongly recommended for the best service experience. Be aware that it will also increase latency when checking the status of a batch operation. If update_mask is provided, only the specified fields in Job are updated. Otherwise all the fields are updated. A field mask to restrict the fields that are updated. Only top level fields of Job are supported. If update_mask is provided, The Job inside JobResult will only contains fields that is updated, plus the Id of the Job. Otherwise, Job will include all fields, which can yield a very large response. | [optional] 

## Example

```python
from openapi_client.models.batch_update_jobs_request import BatchUpdateJobsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateJobsRequest from a JSON string
batch_update_jobs_request_instance = BatchUpdateJobsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateJobsRequest.to_json())

# convert the object into a dict
batch_update_jobs_request_dict = batch_update_jobs_request_instance.to_dict()
# create an instance of BatchUpdateJobsRequest from a dict
batch_update_jobs_request_from_dict = BatchUpdateJobsRequest.from_dict(batch_update_jobs_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


