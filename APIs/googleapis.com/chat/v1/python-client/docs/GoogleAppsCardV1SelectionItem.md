# GoogleAppsCardV1SelectionItem

An item that users can select in a selection input, such as a checkbox or switch. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bottom_text** | **str** | For multiselect menus, a text description or label that&#39;s displayed below the item&#39;s &#x60;text&#x60; field. | [optional] 
**selected** | **bool** | Whether the item is selected by default. If the selection input only accepts one value (such as for radio buttons or a dropdown menu), only set this field for one item. | [optional] 
**start_icon_uri** | **str** | For multiselect menus, the URL for the icon displayed next to the item&#39;s &#x60;text&#x60; field. Supports PNG and JPEG files. Must be an &#x60;HTTPS&#x60; URL. For example, &#x60;https://developers.google.com/chat/images/quickstart-app-avatar.png&#x60;. | [optional] 
**text** | **str** | The text that identifies or describes the item to users. | [optional] 
**value** | **str** | The value associated with this item. The client should use this as a form input value. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_selection_item import GoogleAppsCardV1SelectionItem

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1SelectionItem from a JSON string
google_apps_card_v1_selection_item_instance = GoogleAppsCardV1SelectionItem.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1SelectionItem.to_json())

# convert the object into a dict
google_apps_card_v1_selection_item_dict = google_apps_card_v1_selection_item_instance.to_dict()
# create an instance of GoogleAppsCardV1SelectionItem from a dict
google_apps_card_v1_selection_item_from_dict = GoogleAppsCardV1SelectionItem.from_dict(google_apps_card_v1_selection_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


