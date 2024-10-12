# GooglePrivacyDlpV2Color

Represents a color in the RGB color space.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blue** | **float** | The amount of blue in the color as a value in the interval [0, 1]. | [optional] 
**green** | **float** | The amount of green in the color as a value in the interval [0, 1]. | [optional] 
**red** | **float** | The amount of red in the color as a value in the interval [0, 1]. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_color import GooglePrivacyDlpV2Color

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2Color from a JSON string
google_privacy_dlp_v2_color_instance = GooglePrivacyDlpV2Color.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2Color.to_json())

# convert the object into a dict
google_privacy_dlp_v2_color_dict = google_privacy_dlp_v2_color_instance.to_dict()
# create an instance of GooglePrivacyDlpV2Color from a dict
google_privacy_dlp_v2_color_from_dict = GooglePrivacyDlpV2Color.from_dict(google_privacy_dlp_v2_color_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


