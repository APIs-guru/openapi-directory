# GoogleAppsCardV1BorderStyle

The style options for the border of a card or widget, including the border type and color. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**corner_radius** | **int** | The corner radius for the border. | [optional] 
**stroke_color** | [**Color**](Color.md) |  | [optional] 
**type** | **str** | The border type. | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_border_style import GoogleAppsCardV1BorderStyle

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1BorderStyle from a JSON string
google_apps_card_v1_border_style_instance = GoogleAppsCardV1BorderStyle.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1BorderStyle.to_json())

# convert the object into a dict
google_apps_card_v1_border_style_dict = google_apps_card_v1_border_style_instance.to_dict()
# create an instance of GoogleAppsCardV1BorderStyle from a dict
google_apps_card_v1_border_style_from_dict = GoogleAppsCardV1BorderStyle.from_dict(google_apps_card_v1_border_style_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


