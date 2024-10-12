# GoogleCloudAiplatformV1beta1TensorboardRun

TensorboardRun maps to a specific execution of a training job with a given set of hyperparameter values, model definition, dataset, etc

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when this TensorboardRun was created. | [optional] [readonly] 
**description** | **str** | Description of this TensorboardRun. | [optional] 
**display_name** | **str** | Required. User provided name of this TensorboardRun. This value must be unique among all TensorboardRuns belonging to the same parent TensorboardExperiment. | [optional] 
**etag** | **str** | Used to perform a consistent read-modify-write updates. If not set, a blind \&quot;overwrite\&quot; update happens. | [optional] 
**labels** | **Dict[str, str]** | The labels with user-defined metadata to organize your TensorboardRuns. This field will be used to filter and visualize Runs in the Tensorboard UI. For example, a Vertex AI training job can set a label aiplatform.googleapis.com/training_job_id&#x3D;xxxxx to all the runs created within that job. An end user can set a label experiment_id&#x3D;xxxxx for all the runs produced in a Jupyter notebook. These runs can be grouped by a label value and visualized together in the Tensorboard UI. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one TensorboardRun (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with \&quot;aiplatform.googleapis.com/\&quot; and are immutable. | [optional] 
**name** | **str** | Output only. Name of the TensorboardRun. Format: &#x60;projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}&#x60; | [optional] [readonly] 
**update_time** | **str** | Output only. Timestamp when this TensorboardRun was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_tensorboard_run import GoogleCloudAiplatformV1beta1TensorboardRun

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1TensorboardRun from a JSON string
google_cloud_aiplatform_v1beta1_tensorboard_run_instance = GoogleCloudAiplatformV1beta1TensorboardRun.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1TensorboardRun.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_tensorboard_run_dict = google_cloud_aiplatform_v1beta1_tensorboard_run_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1TensorboardRun from a dict
google_cloud_aiplatform_v1beta1_tensorboard_run_from_dict = GoogleCloudAiplatformV1beta1TensorboardRun.from_dict(google_cloud_aiplatform_v1beta1_tensorboard_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


