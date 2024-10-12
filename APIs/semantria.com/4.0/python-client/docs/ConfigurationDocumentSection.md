# ConfigurationDocumentSection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_categories_limit** | **int** | Limits the number of auto categories the service responds. Default: 5 | 
**concept_topics_limit** | **int** | Limits the number of concept topics the service responds. Default: 5 | 
**detect_language** | **bool** | Switches on language detection feature. Default: true | 
**entity_themes_limit** | **int** | Limits the number of entity themes the service responds. Default: 0 | 
**intentions** | **bool** | Switches on intentions detection feature. Default: false | 
**model_sentiment** | **bool** | Switches on/off model-based sentiment feature. Default: false | 
**named_entities_limit** | **int** | Limits the number of named entities the service responds. Default: 5 | 
**named_mentions_limit** | **int** | Limits the number of named entity related mentions. Default: 0 | 
**named_opinions_limit** | **int** | Limits the number of named entity opinions the service responds. Default: 0 | 
**named_relations_limit** | **int** | Limits the number of named entity relations the service responds. Default: 0 | 
**phrases_limit** | **int** | Limits the number of responded sentiment-bearing phrases for document. Default: 0 | 
**pos_types** | **str** | Defines parts-of-speech which will be responded by the server | 
**possible_phrases_limit** | **int** | Limits the number of responded possible phrases which may affect on sentiment score extraction. Default: 0 | 
**query_topics_limit** | **int** | Limits the number of query topics the service responds. Default: 5 | 
**summary_limit** | **int** | Limits the number of sentences for the document summary feature. Default: 3 | 
**theme_mentions_limit** | **int** | Limits the number of document and entity related theme mentions. Default: 0 | 
**themes_limit** | **int** | Limits the number of document themes the service responds. Default: 0 | 
**user_entities_limit** | **int** | Limits the number of user entities the service responds. Default: 5 | 
**user_mentions_limit** | **int** | Limits the number of user entity related mentions. Default: 0 | 
**user_opinions_limit** | **int** | Limits the number of concept topics the service responds. Default: 0 | 
**user_relations_limit** | **int** | Limits the number of user entity relations the service responds. Default: 0 | 

## Example

```python
from openapi_client.models.configuration_document_section import ConfigurationDocumentSection

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurationDocumentSection from a JSON string
configuration_document_section_instance = ConfigurationDocumentSection.from_json(json)
# print the JSON string representation of the object
print(ConfigurationDocumentSection.to_json())

# convert the object into a dict
configuration_document_section_dict = configuration_document_section_instance.to_dict()
# create an instance of ConfigurationDocumentSection from a dict
configuration_document_section_from_dict = ConfigurationDocumentSection.from_dict(configuration_document_section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


