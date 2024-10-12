# SubscriptionFeatureSectionDocument


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_categories** | **bool** | Indicates whether auto categories feature is allowed or not | 
**concept_topics** | **bool** | Indicates whether concept topics are allowed or not | 
**entity_themes** | **bool** | Indicates whether entity themes feature is allowed or not | 
**intentions** | **bool** | Indicates whether intentions feature is allowed or not. | 
**language_detection** | **bool** | Indicates whether language detection feature is allowed or not | 
**mentions** | **bool** | Indicates whether mentions for entities and themes are allowed or not | 
**model_sentiment** | **bool** | Indicates whether model-based sentiment feature is allowed or not | 
**named_entities** | **bool** | Indicates whether named entities feature is allowed or not | 
**named_relations** | **bool** | Indicates whether relations for named entities are allowed or not | 
**opinions** | **bool** | Indicates whether opinions feature is allowed or not | 
**phrases_detection** | **bool** | Indicates whether possible phrases detection feature is allowed or not | 
**pos_tagging** | **bool** | Indicates whether part of speech tagging feature is allowed or not | 
**query_topics** | **bool** | Indicates whether query defined topics are allowed or not | 
**sentiment_phrases** | **bool** | Indicates whether sentiment-bearing phrases output is allowed or not | 
**summary** | **bool** | Indicates whether summarization feature is allowed or not | 
**themes** | **bool** | Indicates whether document themes feature is allowed or not | 
**user_entities** | **bool** | Indicates whether user entities feature is allowed or not | 
**user_relations** | **bool** | Indicates whether relations for user entities are allowed or not | 

## Example

```python
from openapi_client.models.subscription_feature_section_document import SubscriptionFeatureSectionDocument

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionFeatureSectionDocument from a JSON string
subscription_feature_section_document_instance = SubscriptionFeatureSectionDocument.from_json(json)
# print the JSON string representation of the object
print(SubscriptionFeatureSectionDocument.to_json())

# convert the object into a dict
subscription_feature_section_document_dict = subscription_feature_section_document_instance.to_dict()
# create an instance of SubscriptionFeatureSectionDocument from a dict
subscription_feature_section_document_from_dict = SubscriptionFeatureSectionDocument.from_dict(subscription_feature_section_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


