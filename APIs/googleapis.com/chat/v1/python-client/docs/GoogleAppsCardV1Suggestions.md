# GoogleAppsCardV1Suggestions

Suggested values that users can enter. These values appear when users click inside the text input field. As users type, the suggested values dynamically filter to match what the users have typed. For example, a text input field for programming language might suggest Java, JavaScript, Python, and C++. When users start typing `Jav`, the list of suggestions filters to show `Java` and `JavaScript`. Suggested values help guide users to enter values that your app can make sense of. When referring to JavaScript, some users might enter `javascript` and others `java script`. Suggesting `JavaScript` can standardize how users interact with your app. When specified, `TextInput.type` is always `SINGLE_LINE`, even if it's set to `MULTIPLE_LINE`. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[GoogleAppsCardV1SuggestionItem]**](GoogleAppsCardV1SuggestionItem.md) | A list of suggestions used for autocomplete recommendations in text input fields. | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_suggestions import GoogleAppsCardV1Suggestions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1Suggestions from a JSON string
google_apps_card_v1_suggestions_instance = GoogleAppsCardV1Suggestions.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1Suggestions.to_json())

# convert the object into a dict
google_apps_card_v1_suggestions_dict = google_apps_card_v1_suggestions_instance.to_dict()
# create an instance of GoogleAppsCardV1Suggestions from a dict
google_apps_card_v1_suggestions_from_dict = GoogleAppsCardV1Suggestions.from_dict(google_apps_card_v1_suggestions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


