# Sentence

Represents a sentence in the input document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sentiment** | [**Sentiment**](Sentiment.md) |  | [optional] 
**text** | [**TextSpan**](TextSpan.md) |  | [optional] 

## Example

```python
from openapi_client.models.sentence import Sentence

# TODO update the JSON string below
json = "{}"
# create an instance of Sentence from a JSON string
sentence_instance = Sentence.from_json(json)
# print the JSON string representation of the object
print(Sentence.to_json())

# convert the object into a dict
sentence_dict = sentence_instance.to_dict()
# create an instance of Sentence from a dict
sentence_from_dict = Sentence.from_dict(sentence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


