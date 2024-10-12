# GooglePrivacyDlpV2TransformationSummary

Summary of a single transformation. Only one of 'transformation', 'field_transformation', or 'record_suppress' will be set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | [**GooglePrivacyDlpV2FieldId**](GooglePrivacyDlpV2FieldId.md) |  | [optional] 
**field_transformations** | [**List[GooglePrivacyDlpV2FieldTransformation]**](GooglePrivacyDlpV2FieldTransformation.md) | The field transformation that was applied. If multiple field transformations are requested for a single field, this list will contain all of them; otherwise, only one is supplied. | [optional] 
**info_type** | [**GooglePrivacyDlpV2InfoType**](GooglePrivacyDlpV2InfoType.md) |  | [optional] 
**record_suppress** | [**GooglePrivacyDlpV2RecordSuppression**](GooglePrivacyDlpV2RecordSuppression.md) |  | [optional] 
**results** | [**List[GooglePrivacyDlpV2SummaryResult]**](GooglePrivacyDlpV2SummaryResult.md) | Collection of all transformations that took place or had an error. | [optional] 
**transformation** | [**GooglePrivacyDlpV2PrimitiveTransformation**](GooglePrivacyDlpV2PrimitiveTransformation.md) |  | [optional] 
**transformed_bytes** | **str** | Total size in bytes that were transformed in some way. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_transformation_summary import GooglePrivacyDlpV2TransformationSummary

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2TransformationSummary from a JSON string
google_privacy_dlp_v2_transformation_summary_instance = GooglePrivacyDlpV2TransformationSummary.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2TransformationSummary.to_json())

# convert the object into a dict
google_privacy_dlp_v2_transformation_summary_dict = google_privacy_dlp_v2_transformation_summary_instance.to_dict()
# create an instance of GooglePrivacyDlpV2TransformationSummary from a dict
google_privacy_dlp_v2_transformation_summary_from_dict = GooglePrivacyDlpV2TransformationSummary.from_dict(google_privacy_dlp_v2_transformation_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


