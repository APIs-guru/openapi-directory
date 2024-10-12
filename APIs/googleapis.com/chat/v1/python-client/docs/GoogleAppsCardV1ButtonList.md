# GoogleAppsCardV1ButtonList

A list of buttons layed out horizontally. For an example in Google Chat apps, see [Button list](https://developers.google.com/chat/ui/widgets/button-list). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buttons** | [**List[GoogleAppsCardV1Button]**](GoogleAppsCardV1Button.md) | An array of buttons. | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_button_list import GoogleAppsCardV1ButtonList

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1ButtonList from a JSON string
google_apps_card_v1_button_list_instance = GoogleAppsCardV1ButtonList.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1ButtonList.to_json())

# convert the object into a dict
google_apps_card_v1_button_list_dict = google_apps_card_v1_button_list_instance.to_dict()
# create an instance of GoogleAppsCardV1ButtonList from a dict
google_apps_card_v1_button_list_from_dict = GoogleAppsCardV1ButtonList.from_dict(google_apps_card_v1_button_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


