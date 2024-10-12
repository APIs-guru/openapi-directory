# GoogleCloudMlV1Job

Represents a training or prediction job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. When the job was created. | [optional] 
**end_time** | **str** | Output only. When the job processing was completed. | [optional] 
**error_message** | **str** | Output only. The details of a failure or a cancellation. | [optional] 
**etag** | **bytearray** | &#x60;etag&#x60; is used for optimistic concurrency control as a way to help prevent simultaneous updates of a job from overwriting each other. It is strongly suggested that systems make use of the &#x60;etag&#x60; in the read-modify-write cycle to perform job updates in order to avoid race conditions: An &#x60;etag&#x60; is returned in the response to &#x60;GetJob&#x60;, and systems are expected to put that etag in the request to &#x60;UpdateJob&#x60; to ensure that their change will be applied to the same version of the job. | [optional] 
**job_id** | **str** | Required. The user-specified id of the job. | [optional] 
**job_position** | **str** | Output only. It&#39;s only effect when the job is in QUEUED state. If it&#39;s positive, it indicates the job&#39;s position in the job scheduler. It&#39;s 0 when the job is already scheduled. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Optional. One or more labels that you can add, to organize your jobs. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels. | [optional] 
**prediction_input** | [**GoogleCloudMlV1PredictionInput**](GoogleCloudMlV1PredictionInput.md) |  | [optional] 
**prediction_output** | [**GoogleCloudMlV1PredictionOutput**](GoogleCloudMlV1PredictionOutput.md) |  | [optional] 
**start_time** | **str** | Output only. When the job processing was started. | [optional] 
**state** | **str** | Output only. The detailed state of a job. | [optional] 
**training_input** | [**GoogleCloudMlV1TrainingInput**](GoogleCloudMlV1TrainingInput.md) |  | [optional] 
**training_output** | [**GoogleCloudMlV1TrainingOutput**](GoogleCloudMlV1TrainingOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_job import GoogleCloudMlV1Job

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1Job from a JSON string
google_cloud_ml_v1_job_instance = GoogleCloudMlV1Job.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1Job.to_json())

# convert the object into a dict
google_cloud_ml_v1_job_dict = google_cloud_ml_v1_job_instance.to_dict()
# create an instance of GoogleCloudMlV1Job from a dict
google_cloud_ml_v1_job_from_dict = GoogleCloudMlV1Job.from_dict(google_cloud_ml_v1_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


