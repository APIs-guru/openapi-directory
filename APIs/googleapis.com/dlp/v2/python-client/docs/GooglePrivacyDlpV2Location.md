# GooglePrivacyDlpV2Location

Specifies the location of the finding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**byte_range** | [**GooglePrivacyDlpV2Range**](GooglePrivacyDlpV2Range.md) |  | [optional] 
**codepoint_range** | [**GooglePrivacyDlpV2Range**](GooglePrivacyDlpV2Range.md) |  | [optional] 
**container** | [**GooglePrivacyDlpV2Container**](GooglePrivacyDlpV2Container.md) |  | [optional] 
**content_locations** | [**List[GooglePrivacyDlpV2ContentLocation]**](GooglePrivacyDlpV2ContentLocation.md) | List of nested objects pointing to the precise location of the finding within the file or record. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_location import GooglePrivacyDlpV2Location

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2Location from a JSON string
google_privacy_dlp_v2_location_instance = GooglePrivacyDlpV2Location.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2Location.to_json())

# convert the object into a dict
google_privacy_dlp_v2_location_dict = google_privacy_dlp_v2_location_instance.to_dict()
# create an instance of GooglePrivacyDlpV2Location from a dict
google_privacy_dlp_v2_location_from_dict = GooglePrivacyDlpV2Location.from_dict(google_privacy_dlp_v2_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


