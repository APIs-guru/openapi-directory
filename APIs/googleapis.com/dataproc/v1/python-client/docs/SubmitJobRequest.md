# SubmitJobRequest

A request to submit a job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job** | [**Job**](Job.md) |  | [optional] 
**request_id** | **str** | Optional. A unique id used to identify the request. If the server receives two SubmitJobRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.SubmitJobRequest)s with the same id, then the second request will be ignored and the first Job created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. | [optional] 

## Example

```python
from openapi_client.models.submit_job_request import SubmitJobRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SubmitJobRequest from a JSON string
submit_job_request_instance = SubmitJobRequest.from_json(json)
# print the JSON string representation of the object
print(SubmitJobRequest.to_json())

# convert the object into a dict
submit_job_request_dict = submit_job_request_instance.to_dict()
# create an instance of SubmitJobRequest from a dict
submit_job_request_from_dict = SubmitJobRequest.from_dict(submit_job_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


