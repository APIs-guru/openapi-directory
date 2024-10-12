# GoogleAppsCardV1DecoratedText

A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget, or a button after the text. For an example in Google Chat apps, see [Decorated text](https://developers.google.com/chat/ui/widgets/decorated-text). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bottom_label** | **str** | The text that appears below &#x60;text&#x60;. Always wraps. | [optional] 
**button** | [**GoogleAppsCardV1Button**](GoogleAppsCardV1Button.md) |  | [optional] 
**end_icon** | [**GoogleAppsCardV1Icon**](GoogleAppsCardV1Icon.md) |  | [optional] 
**icon** | [**GoogleAppsCardV1Icon**](GoogleAppsCardV1Icon.md) |  | [optional] 
**on_click** | [**GoogleAppsCardV1OnClick**](GoogleAppsCardV1OnClick.md) |  | [optional] 
**start_icon** | [**GoogleAppsCardV1Icon**](GoogleAppsCardV1Icon.md) |  | [optional] 
**switch_control** | [**GoogleAppsCardV1SwitchControl**](GoogleAppsCardV1SwitchControl.md) |  | [optional] 
**text** | **str** | Required. The primary text. Supports simple formatting. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). | [optional] 
**top_label** | **str** | The text that appears above &#x60;text&#x60;. Always truncates. | [optional] 
**wrap_text** | **bool** | The wrap text setting. If &#x60;true&#x60;, the text wraps and displays on multiple lines. Otherwise, the text is truncated. Only applies to &#x60;text&#x60;, not &#x60;topLabel&#x60; and &#x60;bottomLabel&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_decorated_text import GoogleAppsCardV1DecoratedText

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1DecoratedText from a JSON string
google_apps_card_v1_decorated_text_instance = GoogleAppsCardV1DecoratedText.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1DecoratedText.to_json())

# convert the object into a dict
google_apps_card_v1_decorated_text_dict = google_apps_card_v1_decorated_text_instance.to_dict()
# create an instance of GoogleAppsCardV1DecoratedText from a dict
google_apps_card_v1_decorated_text_from_dict = GoogleAppsCardV1DecoratedText.from_dict(google_apps_card_v1_decorated_text_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


