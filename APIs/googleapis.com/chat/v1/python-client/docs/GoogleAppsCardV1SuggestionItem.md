# GoogleAppsCardV1SuggestionItem

One suggested value that users can enter in a text input field. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **str** | The value of a suggested input to a text input field. This is equivalent to what users enter themselves. | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_suggestion_item import GoogleAppsCardV1SuggestionItem

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1SuggestionItem from a JSON string
google_apps_card_v1_suggestion_item_instance = GoogleAppsCardV1SuggestionItem.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1SuggestionItem.to_json())

# convert the object into a dict
google_apps_card_v1_suggestion_item_dict = google_apps_card_v1_suggestion_item_instance.to_dict()
# create an instance of GoogleAppsCardV1SuggestionItem from a dict
google_apps_card_v1_suggestion_item_from_dict = GoogleAppsCardV1SuggestionItem.from_dict(google_apps_card_v1_suggestion_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


