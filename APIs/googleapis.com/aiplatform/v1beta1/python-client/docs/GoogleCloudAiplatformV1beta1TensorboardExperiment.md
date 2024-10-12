# GoogleCloudAiplatformV1beta1TensorboardExperiment

A TensorboardExperiment is a group of TensorboardRuns, that are typically the results of a training job run, in a Tensorboard.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when this TensorboardExperiment was created. | [optional] [readonly] 
**description** | **str** | Description of this TensorboardExperiment. | [optional] 
**display_name** | **str** | User provided name of this TensorboardExperiment. | [optional] 
**etag** | **str** | Used to perform consistent read-modify-write updates. If not set, a blind \&quot;overwrite\&quot; update happens. | [optional] 
**labels** | **Dict[str, str]** | The labels with user-defined metadata to organize your TensorboardExperiment. Label keys and values cannot be longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one Dataset (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with &#x60;aiplatform.googleapis.com/&#x60; and are immutable. The following system labels exist for each Dataset: * &#x60;aiplatform.googleapis.com/dataset_metadata_schema&#x60;: output only. Its value is the metadata_schema&#39;s title. | [optional] 
**name** | **str** | Output only. Name of the TensorboardExperiment. Format: &#x60;projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}&#x60; | [optional] [readonly] 
**source** | **str** | Immutable. Source of the TensorboardExperiment. Example: a custom training job. | [optional] 
**update_time** | **str** | Output only. Timestamp when this TensorboardExperiment was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_tensorboard_experiment import GoogleCloudAiplatformV1beta1TensorboardExperiment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1TensorboardExperiment from a JSON string
google_cloud_aiplatform_v1beta1_tensorboard_experiment_instance = GoogleCloudAiplatformV1beta1TensorboardExperiment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1TensorboardExperiment.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_tensorboard_experiment_dict = google_cloud_aiplatform_v1beta1_tensorboard_experiment_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1TensorboardExperiment from a dict
google_cloud_aiplatform_v1beta1_tensorboard_experiment_from_dict = GoogleCloudAiplatformV1beta1TensorboardExperiment.from_dict(google_cloud_aiplatform_v1beta1_tensorboard_experiment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


