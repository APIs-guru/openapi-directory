# Word


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_negated** | **bool** | A flag indicating if the token is or is part of a sentiment inverting construction | 
**sentiment_score** | **float** | The sentiment score associated with the word | 
**stemmed** | **str** | The stemmed form of the word | 
**tag** | **str** | POS marker of the word | 
**title** | **str** | The original word representation in text | 
**type** | **str** | Verbal representation of part of speech in addition to certain tag | 

## Example

```python
from openapi_client.models.word import Word

# TODO update the JSON string below
json = "{}"
# create an instance of Word from a JSON string
word_instance = Word.from_json(json)
# print the JSON string representation of the object
print(Word.to_json())

# convert the object into a dict
word_dict = word_instance.to_dict()
# create an instance of Word from a dict
word_from_dict = Word.from_dict(word_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


