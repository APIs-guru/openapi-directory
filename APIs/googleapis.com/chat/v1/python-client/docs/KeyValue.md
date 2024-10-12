# KeyValue

A UI element contains a key (label) and a value (content). This element can also contain some actions such as `onclick` button.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bottom_label** | **str** | The text of the bottom label. Formatted text supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). | [optional] 
**button** | [**Button**](Button.md) |  | [optional] 
**content** | **str** | The text of the content. Formatted text supported and always required. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). | [optional] 
**content_multiline** | **bool** | If the content should be multiline. | [optional] 
**icon** | **str** | An enum value that&#39;s replaced by the Chat API with the corresponding icon image. | [optional] 
**icon_url** | **str** | The icon specified by a URL. | [optional] 
**on_click** | [**OnClick**](OnClick.md) |  | [optional] 
**top_label** | **str** | The text of the top label. Formatted text supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). | [optional] 

## Example

```python
from openapi_client.models.key_value import KeyValue

# TODO update the JSON string below
json = "{}"
# create an instance of KeyValue from a JSON string
key_value_instance = KeyValue.from_json(json)
# print the JSON string representation of the object
print(KeyValue.to_json())

# convert the object into a dict
key_value_dict = key_value_instance.to_dict()
# create an instance of KeyValue from a dict
key_value_from_dict = KeyValue.from_dict(key_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


