# GoogleAppsCardV1Widgets

The supported widgets that you can include in a column. [Google Chat apps](https://developers.google.com/chat):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**button_list** | [**GoogleAppsCardV1ButtonList**](GoogleAppsCardV1ButtonList.md) |  | [optional] 
**date_time_picker** | [**GoogleAppsCardV1DateTimePicker**](GoogleAppsCardV1DateTimePicker.md) |  | [optional] 
**decorated_text** | [**GoogleAppsCardV1DecoratedText**](GoogleAppsCardV1DecoratedText.md) |  | [optional] 
**image** | [**GoogleAppsCardV1Image**](GoogleAppsCardV1Image.md) |  | [optional] 
**selection_input** | [**GoogleAppsCardV1SelectionInput**](GoogleAppsCardV1SelectionInput.md) |  | [optional] 
**text_input** | [**GoogleAppsCardV1TextInput**](GoogleAppsCardV1TextInput.md) |  | [optional] 
**text_paragraph** | [**GoogleAppsCardV1TextParagraph**](GoogleAppsCardV1TextParagraph.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_widgets import GoogleAppsCardV1Widgets

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1Widgets from a JSON string
google_apps_card_v1_widgets_instance = GoogleAppsCardV1Widgets.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1Widgets.to_json())

# convert the object into a dict
google_apps_card_v1_widgets_dict = google_apps_card_v1_widgets_instance.to_dict()
# create an instance of GoogleAppsCardV1Widgets from a dict
google_apps_card_v1_widgets_from_dict = GoogleAppsCardV1Widgets.from_dict(google_apps_card_v1_widgets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


