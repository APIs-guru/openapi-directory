# TextClassificationDatasetMetadata

Dataset metadata for classification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classification_type** | **str** | Required. Type of the classification problem. | [optional] 

## Example

```python
from openapi_client.models.text_classification_dataset_metadata import TextClassificationDatasetMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of TextClassificationDatasetMetadata from a JSON string
text_classification_dataset_metadata_instance = TextClassificationDatasetMetadata.from_json(json)
# print the JSON string representation of the object
print(TextClassificationDatasetMetadata.to_json())

# convert the object into a dict
text_classification_dataset_metadata_dict = text_classification_dataset_metadata_instance.to_dict()
# create an instance of TextClassificationDatasetMetadata from a dict
text_classification_dataset_metadata_from_dict = TextClassificationDatasetMetadata.from_dict(text_classification_dataset_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


