# GooglePrivacyDlpV2DeidentifyConfig

The configuration that controls how the data will change.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_transformations** | [**GooglePrivacyDlpV2ImageTransformations**](GooglePrivacyDlpV2ImageTransformations.md) |  | [optional] 
**info_type_transformations** | [**GooglePrivacyDlpV2InfoTypeTransformations**](GooglePrivacyDlpV2InfoTypeTransformations.md) |  | [optional] 
**record_transformations** | [**GooglePrivacyDlpV2RecordTransformations**](GooglePrivacyDlpV2RecordTransformations.md) |  | [optional] 
**transformation_error_handling** | [**GooglePrivacyDlpV2TransformationErrorHandling**](GooglePrivacyDlpV2TransformationErrorHandling.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_deidentify_config import GooglePrivacyDlpV2DeidentifyConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DeidentifyConfig from a JSON string
google_privacy_dlp_v2_deidentify_config_instance = GooglePrivacyDlpV2DeidentifyConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DeidentifyConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_deidentify_config_dict = google_privacy_dlp_v2_deidentify_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DeidentifyConfig from a dict
google_privacy_dlp_v2_deidentify_config_from_dict = GooglePrivacyDlpV2DeidentifyConfig.from_dict(google_privacy_dlp_v2_deidentify_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


