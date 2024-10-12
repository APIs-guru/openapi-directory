# TextParagraph

A paragraph of text. Formatted text supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.text_paragraph import TextParagraph

# TODO update the JSON string below
json = "{}"
# create an instance of TextParagraph from a JSON string
text_paragraph_instance = TextParagraph.from_json(json)
# print the JSON string representation of the object
print(TextParagraph.to_json())

# convert the object into a dict
text_paragraph_dict = text_paragraph_instance.to_dict()
# create an instance of TextParagraph from a dict
text_paragraph_from_dict = TextParagraph.from_dict(text_paragraph_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


