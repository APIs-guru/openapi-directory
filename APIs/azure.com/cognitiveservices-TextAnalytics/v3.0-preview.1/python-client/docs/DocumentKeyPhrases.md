# DocumentKeyPhrases


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique, non-empty document identifier. | 
**key_phrases** | **List[str]** | A list of representative words or phrases. The number of key phrases returned is proportional to the number of words in the input document. | 
**statistics** | [**DocumentStatistics**](DocumentStatistics.md) |  | [optional] 

## Example

```python
from openapi_client.models.document_key_phrases import DocumentKeyPhrases

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentKeyPhrases from a JSON string
document_key_phrases_instance = DocumentKeyPhrases.from_json(json)
# print the JSON string representation of the object
print(DocumentKeyPhrases.to_json())

# convert the object into a dict
document_key_phrases_dict = document_key_phrases_instance.to_dict()
# create an instance of DocumentKeyPhrases from a dict
document_key_phrases_from_dict = DocumentKeyPhrases.from_dict(document_key_phrases_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


