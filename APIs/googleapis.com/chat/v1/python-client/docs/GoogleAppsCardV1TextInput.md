# GoogleAppsCardV1TextInput

A field in which users can enter text. Supports suggestions and on-change actions. For an example in Google Chat apps, see [Text input](https://developers.google.com/chat/ui/widgets/text-input). Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). When you need to collect undefined or abstract data from users, use a text input. To collect defined or enumerated data from users, use the SelectionInput widget. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_complete_action** | [**GoogleAppsCardV1Action**](GoogleAppsCardV1Action.md) |  | [optional] 
**hint_text** | **str** | Text that appears below the text input field meant to assist users by prompting them to enter a certain value. This text is always visible. Required if &#x60;label&#x60; is unspecified. Otherwise, optional. | [optional] 
**initial_suggestions** | [**GoogleAppsCardV1Suggestions**](GoogleAppsCardV1Suggestions.md) |  | [optional] 
**label** | **str** | The text that appears above the text input field in the user interface. Specify text that helps the user enter the information your app needs. For example, if you are asking someone&#39;s name, but specifically need their surname, write &#x60;surname&#x60; instead of &#x60;name&#x60;. Required if &#x60;hintText&#x60; is unspecified. Otherwise, optional. | [optional] 
**name** | **str** | The name by which the text input is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). | [optional] 
**on_change_action** | [**GoogleAppsCardV1Action**](GoogleAppsCardV1Action.md) |  | [optional] 
**placeholder_text** | **str** | Text that appears in the text input field when the field is empty. Use this text to prompt users to enter a value. For example, &#x60;Enter a number from 0 to 100&#x60;. [Google Chat apps](https://developers.google.com/chat): | [optional] 
**type** | **str** | How a text input field appears in the user interface. For example, whether the field is single or multi-line. | [optional] 
**value** | **str** | The value entered by a user, returned as part of a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_text_input import GoogleAppsCardV1TextInput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1TextInput from a JSON string
google_apps_card_v1_text_input_instance = GoogleAppsCardV1TextInput.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1TextInput.to_json())

# convert the object into a dict
google_apps_card_v1_text_input_dict = google_apps_card_v1_text_input_instance.to_dict()
# create an instance of GoogleAppsCardV1TextInput from a dict
google_apps_card_v1_text_input_from_dict = GoogleAppsCardV1TextInput.from_dict(google_apps_card_v1_text_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


