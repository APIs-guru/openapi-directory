# GooglePrivacyDlpV2QuasiIdentifierField

A quasi-identifier column has a custom_tag, used to know which column in the data corresponds to which column in the statistical model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_tag** | **str** | A column can be tagged with a custom tag. In this case, the user must indicate an auxiliary table that contains statistical information on the possible values of this column (below). | [optional] 
**var_field** | [**GooglePrivacyDlpV2FieldId**](GooglePrivacyDlpV2FieldId.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_quasi_identifier_field import GooglePrivacyDlpV2QuasiIdentifierField

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2QuasiIdentifierField from a JSON string
google_privacy_dlp_v2_quasi_identifier_field_instance = GooglePrivacyDlpV2QuasiIdentifierField.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2QuasiIdentifierField.to_json())

# convert the object into a dict
google_privacy_dlp_v2_quasi_identifier_field_dict = google_privacy_dlp_v2_quasi_identifier_field_instance.to_dict()
# create an instance of GooglePrivacyDlpV2QuasiIdentifierField from a dict
google_privacy_dlp_v2_quasi_identifier_field_from_dict = GooglePrivacyDlpV2QuasiIdentifierField.from_dict(google_privacy_dlp_v2_quasi_identifier_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


