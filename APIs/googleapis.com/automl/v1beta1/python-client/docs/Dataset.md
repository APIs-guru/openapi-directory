# Dataset

A workspace for solving a single, particular machine learning (ML) problem. A workspace contains examples that may be annotated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when this dataset was created. | [optional] 
**description** | **str** | User-provided description of the dataset. The description can be up to 25000 characters long. | [optional] 
**display_name** | **str** | Required. The name of the dataset to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9. | [optional] 
**etag** | **str** | Used to perform consistent read-modify-write updates. If not set, a blind \&quot;overwrite\&quot; update happens. | [optional] 
**example_count** | **int** | Output only. The number of examples in the dataset. | [optional] 
**image_classification_dataset_metadata** | [**ImageClassificationDatasetMetadata**](ImageClassificationDatasetMetadata.md) |  | [optional] 
**image_object_detection_dataset_metadata** | **object** | Dataset metadata specific to image object detection. | [optional] 
**name** | **str** | Output only. The resource name of the dataset. Form: &#x60;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}&#x60; | [optional] 
**tables_dataset_metadata** | [**TablesDatasetMetadata**](TablesDatasetMetadata.md) |  | [optional] 
**text_classification_dataset_metadata** | [**TextClassificationDatasetMetadata**](TextClassificationDatasetMetadata.md) |  | [optional] 
**text_extraction_dataset_metadata** | **object** | Dataset metadata that is specific to text extraction | [optional] 
**text_sentiment_dataset_metadata** | [**TextSentimentDatasetMetadata**](TextSentimentDatasetMetadata.md) |  | [optional] 
**translation_dataset_metadata** | [**TranslationDatasetMetadata**](TranslationDatasetMetadata.md) |  | [optional] 
**video_classification_dataset_metadata** | **object** | Dataset metadata specific to video classification. All Video Classification datasets are treated as multi label. | [optional] 
**video_object_tracking_dataset_metadata** | **object** | Dataset metadata specific to video object tracking. | [optional] 

## Example

```python
from openapi_client.models.dataset import Dataset

# TODO update the JSON string below
json = "{}"
# create an instance of Dataset from a JSON string
dataset_instance = Dataset.from_json(json)
# print the JSON string representation of the object
print(Dataset.to_json())

# convert the object into a dict
dataset_dict = dataset_instance.to_dict()
# create an instance of Dataset from a dict
dataset_from_dict = Dataset.from_dict(dataset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


