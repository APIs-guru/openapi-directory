# GoogleAppsCardV1TextParagraph

A paragraph of text that supports formatting. For an example in Google Chat apps, see [Text paragraph](https://developers.google.com/chat/ui/widgets/text-paragraph). For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **str** | The text that&#39;s shown in the widget. | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_text_paragraph import GoogleAppsCardV1TextParagraph

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1TextParagraph from a JSON string
google_apps_card_v1_text_paragraph_instance = GoogleAppsCardV1TextParagraph.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1TextParagraph.to_json())

# convert the object into a dict
google_apps_card_v1_text_paragraph_dict = google_apps_card_v1_text_paragraph_instance.to_dict()
# create an instance of GoogleAppsCardV1TextParagraph from a dict
google_apps_card_v1_text_paragraph_from_dict = GoogleAppsCardV1TextParagraph.from_dict(google_apps_card_v1_text_paragraph_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


