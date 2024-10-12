# GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageSegmentation

A TrainingJob that trains and uploads an AutoML Image Segmentation Model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputs** | [**GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageSegmentationInputs**](GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageSegmentationInputs.md) |  | [optional] 
**metadata** | [**GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageSegmentationMetadata**](GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageSegmentationMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_segmentation import GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageSegmentation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageSegmentation from a JSON string
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_segmentation_instance = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageSegmentation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageSegmentation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_segmentation_dict = google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_segmentation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageSegmentation from a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_segmentation_from_dict = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionAutoMlImageSegmentation.from_dict(google_cloud_aiplatform_v1_schema_trainingjob_definition_auto_ml_image_segmentation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


