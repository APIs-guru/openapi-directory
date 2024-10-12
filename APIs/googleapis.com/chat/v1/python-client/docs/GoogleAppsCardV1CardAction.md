# GoogleAppsCardV1CardAction

A card action is the action associated with the card. For example, an invoice card might include actions such as delete invoice, email invoice, or open the invoice in a browser. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_label** | **str** | The label that displays as the action menu item. | [optional] 
**on_click** | [**GoogleAppsCardV1OnClick**](GoogleAppsCardV1OnClick.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_card_action import GoogleAppsCardV1CardAction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1CardAction from a JSON string
google_apps_card_v1_card_action_instance = GoogleAppsCardV1CardAction.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1CardAction.to_json())

# convert the object into a dict
google_apps_card_v1_card_action_dict = google_apps_card_v1_card_action_instance.to_dict()
# create an instance of GoogleAppsCardV1CardAction from a dict
google_apps_card_v1_card_action_from_dict = GoogleAppsCardV1CardAction.from_dict(google_apps_card_v1_card_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


