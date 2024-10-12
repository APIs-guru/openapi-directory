# GooglePrivacyDlpV2InfoTypeTransformations

A type of transformation that will scan unstructured text and apply various `PrimitiveTransformation`s to each finding, where the transformation is applied to only values that were identified as a specific info_type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transformations** | [**List[GooglePrivacyDlpV2InfoTypeTransformation]**](GooglePrivacyDlpV2InfoTypeTransformation.md) | Required. Transformation for each infoType. Cannot specify more than one for a given infoType. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_info_type_transformations import GooglePrivacyDlpV2InfoTypeTransformations

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2InfoTypeTransformations from a JSON string
google_privacy_dlp_v2_info_type_transformations_instance = GooglePrivacyDlpV2InfoTypeTransformations.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2InfoTypeTransformations.to_json())

# convert the object into a dict
google_privacy_dlp_v2_info_type_transformations_dict = google_privacy_dlp_v2_info_type_transformations_instance.to_dict()
# create an instance of GooglePrivacyDlpV2InfoTypeTransformations from a dict
google_privacy_dlp_v2_info_type_transformations_from_dict = GooglePrivacyDlpV2InfoTypeTransformations.from_dict(google_privacy_dlp_v2_info_type_transformations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


