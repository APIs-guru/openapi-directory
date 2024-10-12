# GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageSegmentationInputs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_model_id** | **str** | The ID of the &#x60;base&#x60; model. If it is specified, the new model will be trained based on the &#x60;base&#x60; model. Otherwise, the new model will be trained from scratch. The &#x60;base&#x60; model must be in the same Project and Location as the new Model to train, and have the same modelType. | [optional] 
**budget_milli_node_hours** | **str** | The training budget of creating this model, expressed in milli node hours i.e. 1,000 value in this field means 1 node hour. The actual metadata.costMilliNodeHours will be equal or less than this value. If further model training ceases to provide any improvements, it will stop without using the full budget and the metadata.successfulStopReason will be &#x60;model-converged&#x60;. Note, node_hour &#x3D; actual_hour * number_of_nodes_involved. Or actual_wall_clock_hours &#x3D; train_budget_milli_node_hours / (number_of_nodes_involved * 1000) For modelType &#x60;cloud-high-accuracy-1&#x60;(default), the budget must be between 20,000 and 2,000,000 milli node hours, inclusive. The default value is 192,000 which represents one day in wall time (1000 milli * 24 hours * 8 nodes). | [optional] 
**model_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_segmentation_inputs import GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageSegmentationInputs

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageSegmentationInputs from a JSON string
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_segmentation_inputs_instance = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageSegmentationInputs.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageSegmentationInputs.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_segmentation_inputs_dict = google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_segmentation_inputs_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageSegmentationInputs from a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_segmentation_inputs_from_dict = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageSegmentationInputs.from_dict(google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_segmentation_inputs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


