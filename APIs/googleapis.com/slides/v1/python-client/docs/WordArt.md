# WordArt

A PageElement kind representing word art.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rendered_text** | **str** | The text rendered as word art. | [optional] 

## Example

```python
from openapi_client.models.word_art import WordArt

# TODO update the JSON string below
json = "{}"
# create an instance of WordArt from a JSON string
word_art_instance = WordArt.from_json(json)
# print the JSON string representation of the object
print(WordArt.to_json())

# convert the object into a dict
word_art_dict = word_art_instance.to_dict()
# create an instance of WordArt from a dict
word_art_from_dict = WordArt.from_dict(word_art_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


