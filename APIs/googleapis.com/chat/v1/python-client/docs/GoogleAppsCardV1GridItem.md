# GoogleAppsCardV1GridItem

Represents an item in a grid layout. Items can contain text, an image, or both text and an image. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | A user-specified identifier for this grid item. This identifier is returned in the parent grid&#39;s &#x60;onClick&#x60; callback parameters. | [optional] 
**image** | [**GoogleAppsCardV1ImageComponent**](GoogleAppsCardV1ImageComponent.md) |  | [optional] 
**layout** | **str** | The layout to use for the grid item. | [optional] 
**subtitle** | **str** | The grid item&#39;s subtitle. | [optional] 
**title** | **str** | The grid item&#39;s title. | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_grid_item import GoogleAppsCardV1GridItem

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1GridItem from a JSON string
google_apps_card_v1_grid_item_instance = GoogleAppsCardV1GridItem.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1GridItem.to_json())

# convert the object into a dict
google_apps_card_v1_grid_item_dict = google_apps_card_v1_grid_item_instance.to_dict()
# create an instance of GoogleAppsCardV1GridItem from a dict
google_apps_card_v1_grid_item_from_dict = GoogleAppsCardV1GridItem.from_dict(google_apps_card_v1_grid_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


