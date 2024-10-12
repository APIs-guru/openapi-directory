# PhraseListFeatureInfo

Phraselist Feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_exchangeable** | **bool** | An exchangeable phrase list feature are serves as single feature to the LUIS underlying training algorithm. It is used as a lexicon lookup feature where its value is 1 if the lexicon contains a given word or 0 if it doesn’t. Think of an exchangeable as a synonyms list. A non-exchangeable phrase list feature has all the phrases in the list serve as separate features to the underlying training algorithm. So, if you your phrase list feature contains 5 phrases, they will be mapped to 5 separate features. You can think of the non-exchangeable phrase list feature as an additional bag of words that you are willing to add to LUIS existing vocabulary features. Think of a non-exchangeable as set of different words. Default value is true. | [optional] 
**phrases** | **str** | A list of comma-separated values. | [optional] 
**id** | **int** | A six-digit ID used for Features. | [optional] 
**is_active** | **bool** | Indicates if the feature is enabled. | [optional] 
**name** | **str** | The name of the Feature. | [optional] 

## Example

```python
from openapi_client.models.phrase_list_feature_info import PhraseListFeatureInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PhraseListFeatureInfo from a JSON string
phrase_list_feature_info_instance = PhraseListFeatureInfo.from_json(json)
# print the JSON string representation of the object
print(PhraseListFeatureInfo.to_json())

# convert the object into a dict
phrase_list_feature_info_dict = phrase_list_feature_info_instance.to_dict()
# create an instance of PhraseListFeatureInfo from a dict
phrase_list_feature_info_from_dict = PhraseListFeatureInfo.from_dict(phrase_list_feature_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


