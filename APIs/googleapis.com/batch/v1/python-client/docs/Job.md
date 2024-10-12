# Job

The Cloud Batch Job description.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocation_policy** | [**AllocationPolicy**](AllocationPolicy.md) |  | [optional] 
**create_time** | **str** | Output only. When the Job was created. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Labels for the Job. Labels could be user provided or system generated. For example, \&quot;labels\&quot;: { \&quot;department\&quot;: \&quot;finance\&quot;, \&quot;environment\&quot;: \&quot;test\&quot; } You can assign up to 64 labels. [Google Compute Engine label restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) apply. Label names that start with \&quot;goog-\&quot; or \&quot;google-\&quot; are reserved. | [optional] 
**logs_policy** | [**LogsPolicy**](LogsPolicy.md) |  | [optional] 
**name** | **str** | Output only. Job name. For example: \&quot;projects/123456/locations/us-central1/jobs/job01\&quot;. | [optional] [readonly] 
**notifications** | [**List[JobNotification]**](JobNotification.md) | Notification configurations. | [optional] 
**priority** | **str** | Priority of the Job. The valid value range is [0, 100). Default value is 0. Higher value indicates higher priority. A job with higher priority value is more likely to run earlier if all other requirements are satisfied. | [optional] 
**status** | [**JobStatus**](JobStatus.md) |  | [optional] 
**task_groups** | [**List[TaskGroup]**](TaskGroup.md) | Required. TaskGroups in the Job. Only one TaskGroup is supported now. | [optional] 
**uid** | **str** | Output only. A system generated unique ID for the Job. | [optional] [readonly] 
**update_time** | **str** | Output only. The last time the Job was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job import Job

# TODO update the JSON string below
json = "{}"
# create an instance of Job from a JSON string
job_instance = Job.from_json(json)
# print the JSON string representation of the object
print(Job.to_json())

# convert the object into a dict
job_dict = job_instance.to_dict()
# create an instance of Job from a dict
job_from_dict = Job.from_dict(job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


