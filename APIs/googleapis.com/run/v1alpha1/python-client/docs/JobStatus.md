# JobStatus

JobStatus represents the current state of a Job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **int** | Optional. The number of actively running instances. +optional | [optional] 
**completion_time** | **str** | Optional. Represents time when the job was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional | [optional] 
**conditions** | [**List[JobCondition]**](JobCondition.md) | Optional. The latest available observations of a job&#39;s current state. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ +optional | [optional] 
**failed** | **int** | Optional. The number of instances which reached phase Failed. +optional | [optional] 
**image_digest** | **str** | Optional. ImageDigest holds the resolved digest for the image specified within .Spec.Template.Spec.Container.Image. The digest is resolved during the creation of the Job. This field holds the digest value regardless of whether a tag or digest was originally specified in the Container object. | [optional] 
**instances** | [**List[InstanceStatus]**](InstanceStatus.md) | Optional. Status of completed, failed, and running instances. +optional | [optional] 
**observed_generation** | **int** | Optional. The &#39;generation&#39; of the job that was last processed by the controller. | [optional] 
**start_time** | **str** | Optional. Represents time when the job was acknowledged by the job controller. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional | [optional] 
**succeeded** | **int** | Optional. The number of instances which reached phase Succeeded. +optional | [optional] 

## Example

```python
from openapi_client.models.job_status import JobStatus

# TODO update the JSON string below
json = "{}"
# create an instance of JobStatus from a JSON string
job_status_instance = JobStatus.from_json(json)
# print the JSON string representation of the object
print(JobStatus.to_json())

# convert the object into a dict
job_status_dict = job_status_instance.to_dict()
# create an instance of JobStatus from a dict
job_status_from_dict = JobStatus.from_dict(job_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


