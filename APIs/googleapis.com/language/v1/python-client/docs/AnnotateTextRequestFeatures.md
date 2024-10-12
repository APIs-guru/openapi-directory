# AnnotateTextRequestFeatures

All available features for sentiment, syntax, and semantic analysis. Setting each one to true will enable that specific analysis for the input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classification_model_options** | [**ClassificationModelOptions**](ClassificationModelOptions.md) |  | [optional] 
**classify_text** | **bool** | Classify the full document into categories. | [optional] 
**extract_document_sentiment** | **bool** | Extract document-level sentiment. | [optional] 
**extract_entities** | **bool** | Extract entities. | [optional] 
**extract_entity_sentiment** | **bool** | Extract entities and their associated sentiment. | [optional] 
**extract_syntax** | **bool** | Extract syntax information. | [optional] 
**moderate_text** | **bool** | Moderate the document for harmful and sensitive categories. | [optional] 

## Example

```python
from openapi_client.models.annotate_text_request_features import AnnotateTextRequestFeatures

# TODO update the JSON string below
json = "{}"
# create an instance of AnnotateTextRequestFeatures from a JSON string
annotate_text_request_features_instance = AnnotateTextRequestFeatures.from_json(json)
# print the JSON string representation of the object
print(AnnotateTextRequestFeatures.to_json())

# convert the object into a dict
annotate_text_request_features_dict = annotate_text_request_features_instance.to_dict()
# create an instance of AnnotateTextRequestFeatures from a dict
annotate_text_request_features_from_dict = AnnotateTextRequestFeatures.from_dict(annotate_text_request_features_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


