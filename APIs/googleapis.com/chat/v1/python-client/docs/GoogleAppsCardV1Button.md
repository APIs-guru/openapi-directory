# GoogleAppsCardV1Button

A text, icon, or text and icon button that users can click. For an example in Google Chat apps, see [Button list](https://developers.google.com/chat/ui/widgets/button-list). To make an image a clickable button, specify an `Image` (not an `ImageComponent`) and set an `onClick` action. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alt_text** | **str** | The alternative text that&#39;s used for accessibility. Set descriptive text that lets users know what the button does. For example, if a button opens a hyperlink, you might write: \&quot;Opens a new browser tab and navigates to the Google Chat developer documentation at https://developers.google.com/chat\&quot;. | [optional] 
**color** | [**Color**](Color.md) |  | [optional] 
**disabled** | **bool** | If &#x60;true&#x60;, the button is displayed in an inactive state and doesn&#39;t respond to user actions. | [optional] 
**icon** | [**GoogleAppsCardV1Icon**](GoogleAppsCardV1Icon.md) |  | [optional] 
**on_click** | [**GoogleAppsCardV1OnClick**](GoogleAppsCardV1OnClick.md) |  | [optional] 
**text** | **str** | The text displayed inside the button. | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_button import GoogleAppsCardV1Button

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1Button from a JSON string
google_apps_card_v1_button_instance = GoogleAppsCardV1Button.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1Button.to_json())

# convert the object into a dict
google_apps_card_v1_button_dict = google_apps_card_v1_button_instance.to_dict()
# create an instance of GoogleAppsCardV1Button from a dict
google_apps_card_v1_button_from_dict = GoogleAppsCardV1Button.from_dict(google_apps_card_v1_button_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


