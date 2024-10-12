# PhraselistUpdateObject

Object model for updating a Phraselist.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_active** | **bool** | Indicates if the Phraselist is enabled. | [optional] [default to True]
**is_exchangeable** | **bool** | An exchangeable phrase list feature are serves as single feature to the LUIS underlying training algorithm. It is used as a lexicon lookup feature where its value is 1 if the lexicon contains a given word or 0 if it doesn’t. Think of an exchangeable as a synonyms list. A non-exchangeable phrase list feature has all the phrases in the list serve as separate features to the underlying training algorithm. So, if you your phrase list feature contains 5 phrases, they will be mapped to 5 separate features. You can think of the non-exchangeable phrase list feature as an additional bag of words that you are willing to add to LUIS existing vocabulary features. Think of a non-exchangeable as set of different words. Default value is true. | [optional] [default to True]
**name** | **str** | The Phraselist name. | [optional] 
**phrases** | **str** | List of comma-separated phrases that represent the Phraselist. | [optional] 

## Example

```python
from openapi_client.models.phraselist_update_object import PhraselistUpdateObject

# TODO update the JSON string below
json = "{}"
# create an instance of PhraselistUpdateObject from a JSON string
phraselist_update_object_instance = PhraselistUpdateObject.from_json(json)
# print the JSON string representation of the object
print(PhraselistUpdateObject.to_json())

# convert the object into a dict
phraselist_update_object_dict = phraselist_update_object_instance.to_dict()
# create an instance of PhraselistUpdateObject from a dict
phraselist_update_object_from_dict = PhraselistUpdateObject.from_dict(phraselist_update_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


