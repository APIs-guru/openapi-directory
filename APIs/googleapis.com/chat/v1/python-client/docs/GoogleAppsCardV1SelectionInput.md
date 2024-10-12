# GoogleAppsCardV1SelectionInput

A widget that creates one or more UI items that users can select. For example, a dropdown menu or checkboxes. You can use this widget to collect data that can be predicted or enumerated. For an example in Google Chat apps, see [Selection input](https://developers.google.com/chat/ui/widgets/selection-input). Chat apps can process the value of items that users select or input. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). To collect undefined or abstract data from users, use the TextInput widget. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_data_source** | [**GoogleAppsCardV1Action**](GoogleAppsCardV1Action.md) |  | [optional] 
**items** | [**List[GoogleAppsCardV1SelectionItem]**](GoogleAppsCardV1SelectionItem.md) | An array of selectable items. For example, an array of radio buttons or checkboxes. Supports up to 100 items. | [optional] 
**label** | **str** | The text that appears above the selection input field in the user interface. Specify text that helps the user enter the information your app needs. For example, if users are selecting the urgency of a work ticket from a drop-down menu, the label might be \&quot;Urgency\&quot; or \&quot;Select urgency\&quot;. | [optional] 
**multi_select_max_selected_items** | **int** | For multiselect menus, the maximum number of items that a user can select. Minimum value is 1 item. If unspecified, defaults to 3 items. | [optional] 
**multi_select_min_query_length** | **int** | For multiselect menus, the number of text characters that a user inputs before the Chat app queries autocomplete and displays suggested items in the menu. If unspecified, defaults to 0 characters for static data sources and 3 characters for external data sources. | [optional] 
**name** | **str** | The name that identifies the selection input in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). | [optional] 
**on_change_action** | [**GoogleAppsCardV1Action**](GoogleAppsCardV1Action.md) |  | [optional] 
**platform_data_source** | [**GoogleAppsCardV1PlatformDataSource**](GoogleAppsCardV1PlatformDataSource.md) |  | [optional] 
**type** | **str** | The type of items that are displayed to users in a &#x60;SelectionInput&#x60; widget. Selection types support different types of interactions. For example, users can select one or more checkboxes, but they can only select one value from a dropdown menu. | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_selection_input import GoogleAppsCardV1SelectionInput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1SelectionInput from a JSON string
google_apps_card_v1_selection_input_instance = GoogleAppsCardV1SelectionInput.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1SelectionInput.to_json())

# convert the object into a dict
google_apps_card_v1_selection_input_dict = google_apps_card_v1_selection_input_instance.to_dict()
# create an instance of GoogleAppsCardV1SelectionInput from a dict
google_apps_card_v1_selection_input_from_dict = GoogleAppsCardV1SelectionInput.from_dict(google_apps_card_v1_selection_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


