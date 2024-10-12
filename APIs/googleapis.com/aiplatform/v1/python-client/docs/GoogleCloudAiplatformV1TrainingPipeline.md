# GoogleCloudAiplatformV1TrainingPipeline

The TrainingPipeline orchestrates tasks associated with training a Model. It always executes the training task, and optionally may also export data from Vertex AI's Dataset which becomes the training input, upload the Model to Vertex AI, and evaluate the Model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time when the TrainingPipeline was created. | [optional] [readonly] 
**display_name** | **str** | Required. The user-defined name of this TrainingPipeline. | [optional] 
**encryption_spec** | [**GoogleCloudAiplatformV1EncryptionSpec**](GoogleCloudAiplatformV1EncryptionSpec.md) |  | [optional] 
**end_time** | **str** | Output only. Time when the TrainingPipeline entered any of the following states: &#x60;PIPELINE_STATE_SUCCEEDED&#x60;, &#x60;PIPELINE_STATE_FAILED&#x60;, &#x60;PIPELINE_STATE_CANCELLED&#x60;. | [optional] [readonly] 
**error** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**input_data_config** | [**GoogleCloudAiplatformV1InputDataConfig**](GoogleCloudAiplatformV1InputDataConfig.md) |  | [optional] 
**labels** | **Dict[str, str]** | The labels with user-defined metadata to organize TrainingPipelines. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels. | [optional] 
**model_id** | **str** | Optional. The ID to use for the uploaded Model, which will become the final component of the model resource name. This value may be up to 63 characters, and valid characters are &#x60;[a-z0-9_-]&#x60;. The first character cannot be a number or hyphen. | [optional] 
**model_to_upload** | [**GoogleCloudAiplatformV1Model**](GoogleCloudAiplatformV1Model.md) |  | [optional] 
**name** | **str** | Output only. Resource name of the TrainingPipeline. | [optional] [readonly] 
**parent_model** | **str** | Optional. When specify this field, the &#x60;model_to_upload&#x60; will not be uploaded as a new model, instead, it will become a new version of this &#x60;parent_model&#x60;. | [optional] 
**start_time** | **str** | Output only. Time when the TrainingPipeline for the first time entered the &#x60;PIPELINE_STATE_RUNNING&#x60; state. | [optional] [readonly] 
**state** | **str** | Output only. The detailed state of the pipeline. | [optional] [readonly] 
**training_task_definition** | **str** | Required. A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work. The definition files that can be used here are found in gs://google-cloud-aiplatform/schema/trainingjob/definition/. Note: The URI given on output will be immutable and probably different, including the URI scheme, than the one given on input. The output URI will point to a location where the user only has a read access. | [optional] 
**training_task_inputs** | **object** | Required. The training task&#39;s parameter(s), as specified in the training_task_definition&#39;s &#x60;inputs&#x60;. | [optional] 
**training_task_metadata** | **object** | Output only. The metadata information as specified in the training_task_definition&#39;s &#x60;metadata&#x60;. This metadata is an auxiliary runtime and final information about the training task. While the pipeline is running this information is populated only at a best effort basis. Only present if the pipeline&#39;s training_task_definition contains &#x60;metadata&#x60; object. | [optional] [readonly] 
**update_time** | **str** | Output only. Time when the TrainingPipeline was most recently updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_training_pipeline import GoogleCloudAiplatformV1TrainingPipeline

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1TrainingPipeline from a JSON string
google_cloud_aiplatform_v1_training_pipeline_instance = GoogleCloudAiplatformV1TrainingPipeline.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1TrainingPipeline.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_training_pipeline_dict = google_cloud_aiplatform_v1_training_pipeline_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1TrainingPipeline from a dict
google_cloud_aiplatform_v1_training_pipeline_from_dict = GoogleCloudAiplatformV1TrainingPipeline.from_dict(google_cloud_aiplatform_v1_training_pipeline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


