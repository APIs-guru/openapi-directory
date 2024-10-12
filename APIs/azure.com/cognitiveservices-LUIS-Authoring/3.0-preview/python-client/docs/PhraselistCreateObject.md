# PhraselistCreateObject

Object model for creating a phraselist model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled_for_all_models** | **bool** | Indicates if the Phraselist is enabled for all models in the application. | [optional] [default to True]
**is_exchangeable** | **bool** | An interchangeable phrase list feature serves as a list of synonyms for training. A non-exchangeable phrase list serves as separate features for training. So, if your non-interchangeable phrase list contains 5 phrases, they will be mapped to 5 separate features. You can think of the non-interchangeable phrase list as an additional bag of words to add to LUIS existing vocabulary features. It is used as a lexicon lookup feature where its value is 1 if the lexicon contains a given word or 0 if it doesn’t.  Default value is true. | [optional] [default to True]
**name** | **str** | The Phraselist name. | [optional] 
**phrases** | **str** | List of comma-separated phrases that represent the Phraselist. | [optional] 

## Example

```python
from openapi_client.models.phraselist_create_object import PhraselistCreateObject

# TODO update the JSON string below
json = "{}"
# create an instance of PhraselistCreateObject from a JSON string
phraselist_create_object_instance = PhraselistCreateObject.from_json(json)
# print the JSON string representation of the object
print(PhraselistCreateObject.to_json())

# convert the object into a dict
phraselist_create_object_dict = phraselist_create_object_instance.to_dict()
# create an instance of PhraselistCreateObject from a dict
phraselist_create_object_from_dict = PhraselistCreateObject.from_dict(phraselist_create_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


