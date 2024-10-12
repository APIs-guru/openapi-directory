# TextClassificationModelMetadata

Model metadata that is specific to text classification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classification_type** | **str** | Output only. Classification type of the dataset used to train this model. | [optional] 

## Example

```python
from openapi_client.models.text_classification_model_metadata import TextClassificationModelMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of TextClassificationModelMetadata from a JSON string
text_classification_model_metadata_instance = TextClassificationModelMetadata.from_json(json)
# print the JSON string representation of the object
print(TextClassificationModelMetadata.to_json())

# convert the object into a dict
text_classification_model_metadata_dict = text_classification_model_metadata_instance.to_dict()
# create an instance of TextClassificationModelMetadata from a dict
text_classification_model_metadata_from_dict = TextClassificationModelMetadata.from_dict(text_classification_model_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


