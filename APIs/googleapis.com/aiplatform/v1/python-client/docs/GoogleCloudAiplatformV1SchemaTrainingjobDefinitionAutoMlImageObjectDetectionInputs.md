# GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageObjectDetectionInputs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**budget_milli_node_hours** | **str** | The training budget of creating this model, expressed in milli node hours i.e. 1,000 value in this field means 1 node hour. The actual metadata.costMilliNodeHours will be equal or less than this value. If further model training ceases to provide any improvements, it will stop without using the full budget and the metadata.successfulStopReason will be &#x60;model-converged&#x60;. Note, node_hour &#x3D; actual_hour * number_of_nodes_involved. For modelType &#x60;cloud&#x60;(default), the budget must be between 20,000 and 900,000 milli node hours, inclusive. The default value is 216,000 which represents one day in wall time, considering 9 nodes are used. For model types &#x60;mobile-tf-low-latency-1&#x60;, &#x60;mobile-tf-versatile-1&#x60;, &#x60;mobile-tf-high-accuracy-1&#x60; the training budget must be between 1,000 and 100,000 milli node hours, inclusive. The default value is 24,000 which represents one day in wall time on a single node that is used. | [optional] 
**disable_early_stopping** | **bool** | Use the entire training budget. This disables the early stopping feature. When false the early stopping feature is enabled, which means that AutoML Image Object Detection might stop training before the entire training budget has been used. | [optional] 
**model_type** | **str** |  | [optional] 
**tunable_parameter** | [**GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutomlImageTrainingTunableParameter**](GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutomlImageTrainingTunableParameter.md) |  | [optional] 
**uptrain_base_model_id** | **str** | The ID of &#x60;base&#x60; model for upTraining. If it is specified, the new model will be upTrained based on the &#x60;base&#x60; model for upTraining. Otherwise, the new model will be trained from scratch. The &#x60;base&#x60; model for upTraining must be in the same Project and Location as the new Model to train, and have the same modelType. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_object_detection_inputs import GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageObjectDetectionInputs

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageObjectDetectionInputs from a JSON string
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_object_detection_inputs_instance = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageObjectDetectionInputs.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageObjectDetectionInputs.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_object_detection_inputs_dict = google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_object_detection_inputs_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageObjectDetectionInputs from a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_object_detection_inputs_from_dict = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageObjectDetectionInputs.from_dict(google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_object_detection_inputs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


