# ImageClassificationDatasetMetadata

Dataset metadata that is specific to image classification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classification_type** | **str** | Required. Type of the classification problem. | [optional] 

## Example

```python
from openapi_client.models.image_classification_dataset_metadata import ImageClassificationDatasetMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ImageClassificationDatasetMetadata from a JSON string
image_classification_dataset_metadata_instance = ImageClassificationDatasetMetadata.from_json(json)
# print the JSON string representation of the object
print(ImageClassificationDatasetMetadata.to_json())

# convert the object into a dict
image_classification_dataset_metadata_dict = image_classification_dataset_metadata_instance.to_dict()
# create an instance of ImageClassificationDatasetMetadata from a dict
image_classification_dataset_metadata_from_dict = ImageClassificationDatasetMetadata.from_dict(image_classification_dataset_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


