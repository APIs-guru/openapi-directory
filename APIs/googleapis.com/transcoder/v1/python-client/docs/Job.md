# Job

Transcoding job resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_mode_priority** | **int** | The processing priority of a batch job. This field can only be set for batch mode jobs. The default value is 0. This value cannot be negative. Higher values correspond to higher priorities for the job. | [optional] 
**config** | [**JobConfig**](JobConfig.md) |  | [optional] 
**create_time** | **str** | Output only. The time the job was created. | [optional] [readonly] 
**end_time** | **str** | Output only. The time the transcoding finished. | [optional] [readonly] 
**error** | [**Status**](Status.md) |  | [optional] 
**input_uri** | **str** | Input only. Specify the &#x60;input_uri&#x60; to populate empty &#x60;uri&#x60; fields in each element of &#x60;Job.config.inputs&#x60; or &#x60;JobTemplate.config.inputs&#x60; when using template. URI of the media. Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, &#x60;gs://bucket/inputs/file.mp4&#x60;). See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats). | [optional] 
**labels** | **Dict[str, str]** | The labels associated with this job. You can use these to organize and group your jobs. | [optional] 
**mode** | **str** | The processing mode of the job. The default is &#x60;PROCESSING_MODE_INTERACTIVE&#x60;. | [optional] 
**name** | **str** | The resource name of the job. Format: &#x60;projects/{project_number}/locations/{location}/jobs/{job}&#x60; | [optional] 
**optimization** | **str** | Optional. The optimization strategy of the job. The default is &#x60;AUTODETECT&#x60;. | [optional] 
**output_uri** | **str** | Input only. Specify the &#x60;output_uri&#x60; to populate an empty &#x60;Job.config.output.uri&#x60; or &#x60;JobTemplate.config.output.uri&#x60; when using template. URI for the output file(s). For example, &#x60;gs://my-bucket/outputs/&#x60;. See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats). | [optional] 
**start_time** | **str** | Output only. The time the transcoding started. | [optional] [readonly] 
**state** | **str** | Output only. The current state of the job. | [optional] [readonly] 
**template_id** | **str** | Input only. Specify the &#x60;template_id&#x60; to use for populating &#x60;Job.config&#x60;. The default is &#x60;preset/web-hd&#x60;, which is the only supported preset. User defined JobTemplate: &#x60;{job_template_id}&#x60; | [optional] 
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


