# TextPosition

Position settings for text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**horizontal_alignment** | **str** | Horizontal alignment setting for the piece of text. | [optional] 

## Example

```python
from openapi_client.models.text_position import TextPosition

# TODO update the JSON string below
json = "{}"
# create an instance of TextPosition from a JSON string
text_position_instance = TextPosition.from_json(json)
# print the JSON string representation of the object
print(TextPosition.to_json())

# convert the object into a dict
text_position_dict = text_position_instance.to_dict()
# create an instance of TextPosition from a dict
text_position_from_dict = TextPosition.from_dict(text_position_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


