# GoogleAppsCardV1Widget

Each card is made up of widgets. A widget is a composite object that can represent one of text, images, buttons, and other object types.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**button_list** | [**GoogleAppsCardV1ButtonList**](GoogleAppsCardV1ButtonList.md) |  | [optional] 
**columns** | [**GoogleAppsCardV1Columns**](GoogleAppsCardV1Columns.md) |  | [optional] 
**date_time_picker** | [**GoogleAppsCardV1DateTimePicker**](GoogleAppsCardV1DateTimePicker.md) |  | [optional] 
**decorated_text** | [**GoogleAppsCardV1DecoratedText**](GoogleAppsCardV1DecoratedText.md) |  | [optional] 
**divider** | **object** | Displays a divider between widgets as a horizontal line. For an example in Google Chat apps, see [Divider](https://developers.google.com/chat/ui/widgets/divider). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): For example, the following JSON creates a divider: &#x60;&#x60;&#x60; \&quot;divider\&quot;: {} &#x60;&#x60;&#x60; | [optional] 
**grid** | [**GoogleAppsCardV1Grid**](GoogleAppsCardV1Grid.md) |  | [optional] 
**horizontal_alignment** | **str** | Specifies whether widgets align to the left, right, or center of a column. | [optional] 
**image** | [**GoogleAppsCardV1Image**](GoogleAppsCardV1Image.md) |  | [optional] 
**selection_input** | [**GoogleAppsCardV1SelectionInput**](GoogleAppsCardV1SelectionInput.md) |  | [optional] 
**text_input** | [**GoogleAppsCardV1TextInput**](GoogleAppsCardV1TextInput.md) |  | [optional] 
**text_paragraph** | [**GoogleAppsCardV1TextParagraph**](GoogleAppsCardV1TextParagraph.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_widget import GoogleAppsCardV1Widget

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1Widget from a JSON string
google_apps_card_v1_widget_instance = GoogleAppsCardV1Widget.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1Widget.to_json())

# convert the object into a dict
google_apps_card_v1_widget_dict = google_apps_card_v1_widget_instance.to_dict()
# create an instance of GoogleAppsCardV1Widget from a dict
google_apps_card_v1_widget_from_dict = GoogleAppsCardV1Widget.from_dict(google_apps_card_v1_widget_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


