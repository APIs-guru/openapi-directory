# GooglePrivacyDlpV2RecordLocation

Location of a finding within a row or record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_id** | [**GooglePrivacyDlpV2FieldId**](GooglePrivacyDlpV2FieldId.md) |  | [optional] 
**record_key** | [**GooglePrivacyDlpV2RecordKey**](GooglePrivacyDlpV2RecordKey.md) |  | [optional] 
**table_location** | [**GooglePrivacyDlpV2TableLocation**](GooglePrivacyDlpV2TableLocation.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_record_location import GooglePrivacyDlpV2RecordLocation

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2RecordLocation from a JSON string
google_privacy_dlp_v2_record_location_instance = GooglePrivacyDlpV2RecordLocation.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2RecordLocation.to_json())

# convert the object into a dict
google_privacy_dlp_v2_record_location_dict = google_privacy_dlp_v2_record_location_instance.to_dict()
# create an instance of GooglePrivacyDlpV2RecordLocation from a dict
google_privacy_dlp_v2_record_location_from_dict = GooglePrivacyDlpV2RecordLocation.from_dict(google_privacy_dlp_v2_record_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


