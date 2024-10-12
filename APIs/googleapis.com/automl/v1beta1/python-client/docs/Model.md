# Model

API proto representing a trained machine learning model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when the model training finished and can be used for prediction. | [optional] 
**dataset_id** | **str** | Required. The resource ID of the dataset used to create the model. The dataset must come from the same ancestor project and location. | [optional] 
**deployment_state** | **str** | Output only. Deployment state of the model. A model can only serve prediction requests after it gets deployed. | [optional] 
**display_name** | **str** | Required. The name of the model to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9. It must start with a letter. | [optional] 
**image_classification_model_metadata** | [**ImageClassificationModelMetadata**](ImageClassificationModelMetadata.md) |  | [optional] 
**image_object_detection_model_metadata** | [**ImageObjectDetectionModelMetadata**](ImageObjectDetectionModelMetadata.md) |  | [optional] 
**name** | **str** | Output only. Resource name of the model. Format: &#x60;projects/{project_id}/locations/{location_id}/models/{model_id}&#x60; | [optional] 
**tables_model_metadata** | [**TablesModelMetadata**](TablesModelMetadata.md) |  | [optional] 
**text_classification_model_metadata** | [**TextClassificationModelMetadata**](TextClassificationModelMetadata.md) |  | [optional] 
**text_extraction_model_metadata** | [**TextExtractionModelMetadata**](TextExtractionModelMetadata.md) |  | [optional] 
**text_sentiment_model_metadata** | **object** | Model metadata that is specific to text sentiment. | [optional] 
**train_example_count** | **int** | Output only. The number of examples in the training set used for the model creation. | [optional] [readonly] 
**translation_model_metadata** | [**TranslationModelMetadata**](TranslationModelMetadata.md) |  | [optional] 
**update_time** | **str** | Output only. Timestamp when this model was last updated. | [optional] 
**validate_example_count** | **int** | Output only. The number of examples in the validation set used for the model creation. | [optional] [readonly] 
**video_classification_model_metadata** | **object** | Model metadata specific to video classification. | [optional] 
**video_object_tracking_model_metadata** | **object** | Model metadata specific to video object tracking. | [optional] 

## Example

```python
from openapi_client.models.model import Model

# TODO update the JSON string below
json = "{}"
# create an instance of Model from a JSON string
model_instance = Model.from_json(json)
# print the JSON string representation of the object
print(Model.to_json())

# convert the object into a dict
model_dict = model_instance.to_dict()
# create an instance of Model from a dict
model_from_dict = Model.from_dict(model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


