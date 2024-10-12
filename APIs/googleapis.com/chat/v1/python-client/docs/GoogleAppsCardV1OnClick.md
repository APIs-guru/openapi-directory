# GoogleAppsCardV1OnClick

Represents how to respond when users click an interactive element on a card, such as a button. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**GoogleAppsCardV1Action**](GoogleAppsCardV1Action.md) |  | [optional] 
**card** | [**GoogleAppsCardV1Card**](GoogleAppsCardV1Card.md) |  | [optional] 
**open_dynamic_link_action** | [**GoogleAppsCardV1Action**](GoogleAppsCardV1Action.md) |  | [optional] 
**open_link** | [**GoogleAppsCardV1OpenLink**](GoogleAppsCardV1OpenLink.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_on_click import GoogleAppsCardV1OnClick

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1OnClick from a JSON string
google_apps_card_v1_on_click_instance = GoogleAppsCardV1OnClick.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1OnClick.to_json())

# convert the object into a dict
google_apps_card_v1_on_click_dict = google_apps_card_v1_on_click_instance.to_dict()
# create an instance of GoogleAppsCardV1OnClick from a dict
google_apps_card_v1_on_click_from_dict = GoogleAppsCardV1OnClick.from_dict(google_apps_card_v1_on_click_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


