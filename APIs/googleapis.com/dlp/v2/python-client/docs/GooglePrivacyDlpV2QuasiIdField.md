# GooglePrivacyDlpV2QuasiIdField

A quasi-identifier column has a custom_tag, used to know which column in the data corresponds to which column in the statistical model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_tag** | **str** | A auxiliary field. | [optional] 
**var_field** | [**GooglePrivacyDlpV2FieldId**](GooglePrivacyDlpV2FieldId.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_quasi_id_field import GooglePrivacyDlpV2QuasiIdField

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2QuasiIdField from a JSON string
google_privacy_dlp_v2_quasi_id_field_instance = GooglePrivacyDlpV2QuasiIdField.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2QuasiIdField.to_json())

# convert the object into a dict
google_privacy_dlp_v2_quasi_id_field_dict = google_privacy_dlp_v2_quasi_id_field_instance.to_dict()
# create an instance of GooglePrivacyDlpV2QuasiIdField from a dict
google_privacy_dlp_v2_quasi_id_field_from_dict = GooglePrivacyDlpV2QuasiIdField.from_dict(google_privacy_dlp_v2_quasi_id_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


