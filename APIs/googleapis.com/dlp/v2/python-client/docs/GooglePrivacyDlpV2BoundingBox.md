# GooglePrivacyDlpV2BoundingBox

Bounding box encompassing detected text within an image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | Height of the bounding box in pixels. | [optional] 
**left** | **int** | Left coordinate of the bounding box. (0,0) is upper left. | [optional] 
**top** | **int** | Top coordinate of the bounding box. (0,0) is upper left. | [optional] 
**width** | **int** | Width of the bounding box in pixels. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_bounding_box import GooglePrivacyDlpV2BoundingBox

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2BoundingBox from a JSON string
google_privacy_dlp_v2_bounding_box_instance = GooglePrivacyDlpV2BoundingBox.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2BoundingBox.to_json())

# convert the object into a dict
google_privacy_dlp_v2_bounding_box_dict = google_privacy_dlp_v2_bounding_box_instance.to_dict()
# create an instance of GooglePrivacyDlpV2BoundingBox from a dict
google_privacy_dlp_v2_bounding_box_from_dict = GooglePrivacyDlpV2BoundingBox.from_dict(google_privacy_dlp_v2_bounding_box_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


