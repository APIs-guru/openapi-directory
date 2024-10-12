# JobCreationReason

Reason about why a Job was created from a [`jobs.query`](https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query) method when used with `JOB_CREATION_OPTIONAL` Job creation mode. For [`jobs.insert`](https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/insert) method calls it will always be `REQUESTED`. This feature is not yet available. Jobs will always be created.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Output only. Specifies the high level reason why a Job was created. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_creation_reason import JobCreationReason

# TODO update the JSON string below
json = "{}"
# create an instance of JobCreationReason from a JSON string
job_creation_reason_instance = JobCreationReason.from_json(json)
# print the JSON string representation of the object
print(JobCreationReason.to_json())

# convert the object into a dict
job_creation_reason_dict = job_creation_reason_instance.to_dict()
# create an instance of JobCreationReason from a dict
job_creation_reason_from_dict = JobCreationReason.from_dict(job_creation_reason_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


