# GoogleAppsCardV1Icon

An icon displayed in a widget on a card. For an example in Google Chat apps, see [Icon](https://developers.google.com/chat/ui/widgets/icon). Supports [built-in](https://developers.google.com/chat/format-messages#builtinicons) and [custom](https://developers.google.com/chat/format-messages#customicons) icons. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alt_text** | **str** | Optional. A description of the icon used for accessibility. If unspecified, the default value &#x60;Button&#x60; is provided. As a best practice, you should set a helpful description for what the icon displays, and if applicable, what it does. For example, &#x60;A user&#39;s account portrait&#x60;, or &#x60;Opens a new browser tab and navigates to the Google Chat developer documentation at https://developers.google.com/chat&#x60;. If the icon is set in a &#x60;Button&#x60;, the &#x60;altText&#x60; appears as helper text when the user hovers over the button. However, if the button also sets &#x60;text&#x60;, the icon&#39;s &#x60;altText&#x60; is ignored. | [optional] 
**icon_url** | **str** | Display a custom icon hosted at an HTTPS URL. For example: &#x60;&#x60;&#x60; \&quot;iconUrl\&quot;: \&quot;https://developers.google.com/chat/images/quickstart-app-avatar.png\&quot; &#x60;&#x60;&#x60; Supported file types include &#x60;.png&#x60; and &#x60;.jpg&#x60;. | [optional] 
**image_type** | **str** | The crop style applied to the image. In some cases, applying a &#x60;CIRCLE&#x60; crop causes the image to be drawn larger than a built-in icon. | [optional] 
**known_icon** | **str** | Display one of the built-in icons provided by Google Workspace. For example, to display an airplane icon, specify &#x60;AIRPLANE&#x60;. For a bus, specify &#x60;BUS&#x60;. For a full list of supported icons, see [built-in icons](https://developers.google.com/chat/format-messages#builtinicons). | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_icon import GoogleAppsCardV1Icon

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1Icon from a JSON string
google_apps_card_v1_icon_instance = GoogleAppsCardV1Icon.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1Icon.to_json())

# convert the object into a dict
google_apps_card_v1_icon_dict = google_apps_card_v1_icon_instance.to_dict()
# create an instance of GoogleAppsCardV1Icon from a dict
google_apps_card_v1_icon_from_dict = GoogleAppsCardV1Icon.from_dict(google_apps_card_v1_icon_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


