# TextWord

An object representing a word.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_box** | **List[float]** | Quadrangle bounding box, with coordinates specified relative to the top-left of the original image. The eight numbers represent the four points, clockwise from the top-left corner relative to the text orientation. For image, the (x, y) coordinates are measured in pixels. For PDF, the (x, y) coordinates are measured in inches. | 
**confidence** | **float** | Confidence value. | [optional] 
**text** | **str** | The text content of the word. | 

## Example

```python
from openapi_client.models.text_word import TextWord

# TODO update the JSON string below
json = "{}"
# create an instance of TextWord from a JSON string
text_word_instance = TextWord.from_json(json)
# print the JSON string representation of the object
print(TextWord.to_json())

# convert the object into a dict
text_word_dict = text_word_instance.to_dict()
# create an instance of TextWord from a dict
text_word_from_dict = TextWord.from_dict(text_word_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


