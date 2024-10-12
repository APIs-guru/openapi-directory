# GoogleAppsCardV1Image

An image that is specified by a URL and can have an `onClick` action. For an example, see [Image](https://developers.google.com/chat/ui/widgets/image). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alt_text** | **str** | The alternative text of this image that&#39;s used for accessibility. | [optional] 
**image_url** | **str** | The HTTPS URL that hosts the image. For example: &#x60;&#x60;&#x60; https://developers.google.com/chat/images/quickstart-app-avatar.png &#x60;&#x60;&#x60; | [optional] 
**on_click** | [**GoogleAppsCardV1OnClick**](GoogleAppsCardV1OnClick.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_image import GoogleAppsCardV1Image

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1Image from a JSON string
google_apps_card_v1_image_instance = GoogleAppsCardV1Image.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1Image.to_json())

# convert the object into a dict
google_apps_card_v1_image_dict = google_apps_card_v1_image_instance.to_dict()
# create an instance of GoogleAppsCardV1Image from a dict
google_apps_card_v1_image_from_dict = GoogleAppsCardV1Image.from_dict(google_apps_card_v1_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


