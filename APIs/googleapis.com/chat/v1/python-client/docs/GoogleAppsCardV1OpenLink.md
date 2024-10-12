# GoogleAppsCardV1OpenLink

Represents an `onClick` event that opens a hyperlink. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**on_close** | **str** | Whether the client forgets about a link after opening it, or observes it until the window closes. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons): | [optional] 
**open_as** | **str** | How to open a link. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons): | [optional] 
**url** | **str** | The URL to open. | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_open_link import GoogleAppsCardV1OpenLink

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1OpenLink from a JSON string
google_apps_card_v1_open_link_instance = GoogleAppsCardV1OpenLink.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1OpenLink.to_json())

# convert the object into a dict
google_apps_card_v1_open_link_dict = google_apps_card_v1_open_link_instance.to_dict()
# create an instance of GoogleAppsCardV1OpenLink from a dict
google_apps_card_v1_open_link_from_dict = GoogleAppsCardV1OpenLink.from_dict(google_apps_card_v1_open_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


