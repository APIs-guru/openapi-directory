# GooglePrivacyDlpV2RecordTransformations

A type of transformation that is applied over structured data such as a table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_transformations** | [**List[GooglePrivacyDlpV2FieldTransformation]**](GooglePrivacyDlpV2FieldTransformation.md) | Transform the record by applying various field transformations. | [optional] 
**record_suppressions** | [**List[GooglePrivacyDlpV2RecordSuppression]**](GooglePrivacyDlpV2RecordSuppression.md) | Configuration defining which records get suppressed entirely. Records that match any suppression rule are omitted from the output. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_record_transformations import GooglePrivacyDlpV2RecordTransformations

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2RecordTransformations from a JSON string
google_privacy_dlp_v2_record_transformations_instance = GooglePrivacyDlpV2RecordTransformations.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2RecordTransformations.to_json())

# convert the object into a dict
google_privacy_dlp_v2_record_transformations_dict = google_privacy_dlp_v2_record_transformations_instance.to_dict()
# create an instance of GooglePrivacyDlpV2RecordTransformations from a dict
google_privacy_dlp_v2_record_transformations_from_dict = GooglePrivacyDlpV2RecordTransformations.from_dict(google_privacy_dlp_v2_record_transformations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


