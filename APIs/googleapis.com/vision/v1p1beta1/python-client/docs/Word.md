# Word

A word representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_box** | [**BoundingPoly**](BoundingPoly.md) |  | [optional] 
**confidence** | **float** | Confidence of the OCR results for the word. Range [0, 1]. | [optional] 
**var_property** | [**TextProperty**](TextProperty.md) |  | [optional] 
**symbols** | [**List[Symbol]**](Symbol.md) | List of symbols in the word. The order of the symbols follows the natural reading order. | [optional] 

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


