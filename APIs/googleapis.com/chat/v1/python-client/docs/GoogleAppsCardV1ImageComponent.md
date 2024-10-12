# GoogleAppsCardV1ImageComponent

Represents an image. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alt_text** | **str** | The accessibility label for the image. | [optional] 
**border_style** | [**GoogleAppsCardV1BorderStyle**](GoogleAppsCardV1BorderStyle.md) |  | [optional] 
**crop_style** | [**GoogleAppsCardV1ImageCropStyle**](GoogleAppsCardV1ImageCropStyle.md) |  | [optional] 
**image_uri** | **str** | The image URL. | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_image_component import GoogleAppsCardV1ImageComponent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1ImageComponent from a JSON string
google_apps_card_v1_image_component_instance = GoogleAppsCardV1ImageComponent.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1ImageComponent.to_json())

# convert the object into a dict
google_apps_card_v1_image_component_dict = google_apps_card_v1_image_component_instance.to_dict()
# create an instance of GoogleAppsCardV1ImageComponent from a dict
google_apps_card_v1_image_component_from_dict = GoogleAppsCardV1ImageComponent.from_dict(google_apps_card_v1_image_component_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


