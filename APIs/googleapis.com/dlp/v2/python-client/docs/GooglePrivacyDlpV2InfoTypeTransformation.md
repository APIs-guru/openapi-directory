# GooglePrivacyDlpV2InfoTypeTransformation

A transformation to apply to text that is identified as a specific info_type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info_types** | [**List[GooglePrivacyDlpV2InfoType]**](GooglePrivacyDlpV2InfoType.md) | InfoTypes to apply the transformation to. An empty list will cause this transformation to apply to all findings that correspond to infoTypes that were requested in &#x60;InspectConfig&#x60;. | [optional] 
**primitive_transformation** | [**GooglePrivacyDlpV2PrimitiveTransformation**](GooglePrivacyDlpV2PrimitiveTransformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_info_type_transformation import GooglePrivacyDlpV2InfoTypeTransformation

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2InfoTypeTransformation from a JSON string
google_privacy_dlp_v2_info_type_transformation_instance = GooglePrivacyDlpV2InfoTypeTransformation.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2InfoTypeTransformation.to_json())

# convert the object into a dict
google_privacy_dlp_v2_info_type_transformation_dict = google_privacy_dlp_v2_info_type_transformation_instance.to_dict()
# create an instance of GooglePrivacyDlpV2InfoTypeTransformation from a dict
google_privacy_dlp_v2_info_type_transformation_from_dict = GooglePrivacyDlpV2InfoTypeTransformation.from_dict(google_privacy_dlp_v2_info_type_transformation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


