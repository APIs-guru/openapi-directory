# GooglePrivacyDlpV2FieldId

General identifier of a data field in a storage service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name describing the field. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_field_id import GooglePrivacyDlpV2FieldId

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2FieldId from a JSON string
google_privacy_dlp_v2_field_id_instance = GooglePrivacyDlpV2FieldId.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2FieldId.to_json())

# convert the object into a dict
google_privacy_dlp_v2_field_id_dict = google_privacy_dlp_v2_field_id_instance.to_dict()
# create an instance of GooglePrivacyDlpV2FieldId from a dict
google_privacy_dlp_v2_field_id_from_dict = GooglePrivacyDlpV2FieldId.from_dict(google_privacy_dlp_v2_field_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


