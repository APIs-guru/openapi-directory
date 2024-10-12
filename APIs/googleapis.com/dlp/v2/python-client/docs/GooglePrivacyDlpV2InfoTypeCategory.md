# GooglePrivacyDlpV2InfoTypeCategory

Classification of infoTypes to organize them according to geographic location, industry, and data type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**industry_category** | **str** | The group of relevant businesses where this infoType is commonly used | [optional] 
**location_category** | **str** | The region or country that issued the ID or document represented by the infoType. | [optional] 
**type_category** | **str** | The class of identifiers where this infoType belongs | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_info_type_category import GooglePrivacyDlpV2InfoTypeCategory

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2InfoTypeCategory from a JSON string
google_privacy_dlp_v2_info_type_category_instance = GooglePrivacyDlpV2InfoTypeCategory.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2InfoTypeCategory.to_json())

# convert the object into a dict
google_privacy_dlp_v2_info_type_category_dict = google_privacy_dlp_v2_info_type_category_instance.to_dict()
# create an instance of GooglePrivacyDlpV2InfoTypeCategory from a dict
google_privacy_dlp_v2_info_type_category_from_dict = GooglePrivacyDlpV2InfoTypeCategory.from_dict(google_privacy_dlp_v2_info_type_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


