# GoogleAppsCardV1Column

A column. [Google Chat apps](https://developers.google.com/chat):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**horizontal_alignment** | **str** | Specifies whether widgets align to the left, right, or center of a column. | [optional] 
**horizontal_size_style** | **str** | Specifies how a column fills the width of the card. [Google Chat apps](https://developers.google.com/chat): | [optional] 
**vertical_alignment** | **str** | Specifies whether widgets align to the top, bottom, or center of a column. [Google Chat apps](https://developers.google.com/chat): | [optional] 
**widgets** | [**List[GoogleAppsCardV1Widgets]**](GoogleAppsCardV1Widgets.md) | An array of widgets included in a column. Widgets appear in the order that they are specified. | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_column import GoogleAppsCardV1Column

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1Column from a JSON string
google_apps_card_v1_column_instance = GoogleAppsCardV1Column.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1Column.to_json())

# convert the object into a dict
google_apps_card_v1_column_dict = google_apps_card_v1_column_instance.to_dict()
# create an instance of GoogleAppsCardV1Column from a dict
google_apps_card_v1_column_from_dict = GoogleAppsCardV1Column.from_dict(google_apps_card_v1_column_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


