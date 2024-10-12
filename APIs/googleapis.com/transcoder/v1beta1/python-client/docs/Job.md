# Job

Transcoding job resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**JobConfig**](JobConfig.md) |  | [optional] 
**create_time** | **str** | Output only. The time the job was created. | [optional] [readonly] 
**end_time** | **str** | Output only. The time the transcoding finished. | [optional] [readonly] 
**failure_details** | [**List[FailureDetail]**](FailureDetail.md) | Output only. List of failure details. This property may contain additional information about the failure when &#x60;failure_reason&#x60; is present. *Note*: This feature is not yet available. | [optional] [readonly] 
**failure_reason** | **str** | Output only. A description of the reason for the failure. This property is always present when &#x60;state&#x60; is &#x60;FAILED&#x60;. | [optional] [readonly] 
**input_uri** | **str** | Input only. Specify the &#x60;input_uri&#x60; to populate empty &#x60;uri&#x60; fields in each element of &#x60;Job.config.inputs&#x60; or &#x60;JobTemplate.config.inputs&#x60; when using template. URI of the media. Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, &#x60;gs://bucket/inputs/file.mp4&#x60;). | [optional] 
**name** | **str** | The resource name of the job. Format: &#x60;projects/{project}/locations/{location}/jobs/{job}&#x60; | [optional] 
**origin_uri** | [**OriginUri**](OriginUri.md) |  | [optional] 
**output_uri** | **str** | Input only. Specify the &#x60;output_uri&#x60; to populate an empty &#x60;Job.config.output.uri&#x60; or &#x60;JobTemplate.config.output.uri&#x60; when using template. URI for the output file(s). For example, &#x60;gs://my-bucket/outputs/&#x60;. | [optional] 
**priority** | **int** | Specify the priority of the job. Enter a value between 0 and 100, where 0 is the lowest priority and 100 is the highest priority. The default is 0. | [optional] 
**progress** | [**Progress**](Progress.md) |  | [optional] 
**start_time** | **str** | Output only. The time the transcoding started. | [optional] [readonly] 
**state** | **str** | Output only. The current state of the job. | [optional] [readonly] 
**template_id** | **str** | Input only. Specify the &#x60;template_id&#x60; to use for populating &#x60;Job.config&#x60;. The default is &#x60;preset/web-hd&#x60;. Preset Transcoder templates: - &#x60;preset/{preset_id}&#x60; - User defined JobTemplate: &#x60;{job_template_id}&#x60; | [optional] 
**ttl_after_completion_days** | **int** | Job time to live value in days, which will be effective after job completion. Job should be deleted automatically after the given TTL. Enter a value between 1 and 90. The default is 30. | [optional] 

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


