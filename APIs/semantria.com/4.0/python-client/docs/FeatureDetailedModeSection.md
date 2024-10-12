# FeatureDetailedModeSection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_categories** | **bool** | Represents whether auto-categories of entities supported for certain language or not | 
**entity_mentions** | **bool** | Represents whether mentions of entities supported for certain language or not | 
**entity_opinions** | **bool** | Represents whether opinions of entities supported for certain language or not | 
**entity_relations** | **bool** | Represents whether relations of entities supported for certain language or not | 
**entity_themes** | **bool** | Represents whether themes of entities supported for certain language or not | 
**intentions** | **bool** | Represents whether intentions detection supported for certain language or not | 
**language_detection** | **bool** | Represents whether language detection feature supported or not | 
**model_sentiment** | **bool** | Represents whether model-based sentiment supported for certain language or not | 
**named_entities** | **bool** | Represents whether named entities extraction supported for certain language or not | 
**pos_tagging** | **bool** | Represents whether POS tagging supported for certain language or not | 
**queries** | **bool** | Represents whether queries of entities supported for certain language or not | 
**sentiment** | **bool** | Represents whether sentiment detection supported for certain language or not | 
**sentiment_phrases** | **bool** | Represents whether sentiment phrases detection supported for certain language or not | 
**summarization** | **bool** | Represents whether summarization supported for certain language or not | 
**taxonomy** | **bool** | Represents whether taxonomy feature supported for certain language or not | 
**theme_mentions** | **bool** | Represents whether mentions of themes supported for certain language or not | 
**themes** | **bool** | Represents whether themes extraction supported for certain language or not | 
**user_categories** | **bool** | Represents whether user categories of entities supported for certain language or not | 
**user_entities** | **bool** | Represents whether user entities extraction supported for certain language or not | 

## Example

```python
from openapi_client.models.feature_detailed_mode_section import FeatureDetailedModeSection

# TODO update the JSON string below
json = "{}"
# create an instance of FeatureDetailedModeSection from a JSON string
feature_detailed_mode_section_instance = FeatureDetailedModeSection.from_json(json)
# print the JSON string representation of the object
print(FeatureDetailedModeSection.to_json())

# convert the object into a dict
feature_detailed_mode_section_dict = feature_detailed_mode_section_instance.to_dict()
# create an instance of FeatureDetailedModeSection from a dict
feature_detailed_mode_section_from_dict = FeatureDetailedModeSection.from_dict(feature_detailed_mode_section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


