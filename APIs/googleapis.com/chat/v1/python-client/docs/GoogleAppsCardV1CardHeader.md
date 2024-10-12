# GoogleAppsCardV1CardHeader

Represents a card header. For an example in Google Chat apps, see [Card header](https://developers.google.com/chat/ui/widgets/card-header). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_alt_text** | **str** | The alternative text of this image that&#39;s used for accessibility. | [optional] 
**image_type** | **str** | The shape used to crop the image. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): | [optional] 
**image_url** | **str** | The HTTPS URL of the image in the card header. | [optional] 
**subtitle** | **str** | The subtitle of the card header. If specified, appears on its own line below the &#x60;title&#x60;. | [optional] 
**title** | **str** | Required. The title of the card header. The header has a fixed height: if both a title and subtitle are specified, each takes up one line. If only the title is specified, it takes up both lines. | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_card_header import GoogleAppsCardV1CardHeader

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1CardHeader from a JSON string
google_apps_card_v1_card_header_instance = GoogleAppsCardV1CardHeader.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1CardHeader.to_json())

# convert the object into a dict
google_apps_card_v1_card_header_dict = google_apps_card_v1_card_header_instance.to_dict()
# create an instance of GoogleAppsCardV1CardHeader from a dict
google_apps_card_v1_card_header_from_dict = GoogleAppsCardV1CardHeader.from_dict(google_apps_card_v1_card_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


