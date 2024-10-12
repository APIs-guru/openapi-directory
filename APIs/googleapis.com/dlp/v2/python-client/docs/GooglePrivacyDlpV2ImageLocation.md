# GooglePrivacyDlpV2ImageLocation

Location of the finding within an image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_boxes** | [**List[GooglePrivacyDlpV2BoundingBox]**](GooglePrivacyDlpV2BoundingBox.md) | Bounding boxes locating the pixels within the image containing the finding. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_image_location import GooglePrivacyDlpV2ImageLocation

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ImageLocation from a JSON string
google_privacy_dlp_v2_image_location_instance = GooglePrivacyDlpV2ImageLocation.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ImageLocation.to_json())

# convert the object into a dict
google_privacy_dlp_v2_image_location_dict = google_privacy_dlp_v2_image_location_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ImageLocation from a dict
google_privacy_dlp_v2_image_location_from_dict = GooglePrivacyDlpV2ImageLocation.from_dict(google_privacy_dlp_v2_image_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


