# GooglePrivacyDlpV2RecordTransformation

The field in a record to transform.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_timestamp** | **str** | Findings container modification timestamp, if applicable. | [optional] 
**container_version** | **str** | Container version, if available (\&quot;generation\&quot; for Cloud Storage). | [optional] 
**field_id** | [**GooglePrivacyDlpV2FieldId**](GooglePrivacyDlpV2FieldId.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_record_transformation import GooglePrivacyDlpV2RecordTransformation

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2RecordTransformation from a JSON string
google_privacy_dlp_v2_record_transformation_instance = GooglePrivacyDlpV2RecordTransformation.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2RecordTransformation.to_json())

# convert the object into a dict
google_privacy_dlp_v2_record_transformation_dict = google_privacy_dlp_v2_record_transformation_instance.to_dict()
# create an instance of GooglePrivacyDlpV2RecordTransformation from a dict
google_privacy_dlp_v2_record_transformation_from_dict = GooglePrivacyDlpV2RecordTransformation.from_dict(google_privacy_dlp_v2_record_transformation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


