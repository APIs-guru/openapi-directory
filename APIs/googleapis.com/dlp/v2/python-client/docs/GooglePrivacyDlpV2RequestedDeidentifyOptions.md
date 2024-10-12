# GooglePrivacyDlpV2RequestedDeidentifyOptions

De-identification options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**snapshot_deidentify_template** | [**GooglePrivacyDlpV2DeidentifyTemplate**](GooglePrivacyDlpV2DeidentifyTemplate.md) |  | [optional] 
**snapshot_image_redact_template** | [**GooglePrivacyDlpV2DeidentifyTemplate**](GooglePrivacyDlpV2DeidentifyTemplate.md) |  | [optional] 
**snapshot_structured_deidentify_template** | [**GooglePrivacyDlpV2DeidentifyTemplate**](GooglePrivacyDlpV2DeidentifyTemplate.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_requested_deidentify_options import GooglePrivacyDlpV2RequestedDeidentifyOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2RequestedDeidentifyOptions from a JSON string
google_privacy_dlp_v2_requested_deidentify_options_instance = GooglePrivacyDlpV2RequestedDeidentifyOptions.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2RequestedDeidentifyOptions.to_json())

# convert the object into a dict
google_privacy_dlp_v2_requested_deidentify_options_dict = google_privacy_dlp_v2_requested_deidentify_options_instance.to_dict()
# create an instance of GooglePrivacyDlpV2RequestedDeidentifyOptions from a dict
google_privacy_dlp_v2_requested_deidentify_options_from_dict = GooglePrivacyDlpV2RequestedDeidentifyOptions.from_dict(google_privacy_dlp_v2_requested_deidentify_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


