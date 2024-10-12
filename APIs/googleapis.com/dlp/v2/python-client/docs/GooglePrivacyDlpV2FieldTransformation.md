# GooglePrivacyDlpV2FieldTransformation

The transformation to apply to the field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | [**GooglePrivacyDlpV2RecordCondition**](GooglePrivacyDlpV2RecordCondition.md) |  | [optional] 
**fields** | [**List[GooglePrivacyDlpV2FieldId]**](GooglePrivacyDlpV2FieldId.md) | Required. Input field(s) to apply the transformation to. When you have columns that reference their position within a list, omit the index from the FieldId. FieldId name matching ignores the index. For example, instead of \&quot;contact.nums[0].type\&quot;, use \&quot;contact.nums.type\&quot;. | [optional] 
**info_type_transformations** | [**GooglePrivacyDlpV2InfoTypeTransformations**](GooglePrivacyDlpV2InfoTypeTransformations.md) |  | [optional] 
**primitive_transformation** | [**GooglePrivacyDlpV2PrimitiveTransformation**](GooglePrivacyDlpV2PrimitiveTransformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_field_transformation import GooglePrivacyDlpV2FieldTransformation

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2FieldTransformation from a JSON string
google_privacy_dlp_v2_field_transformation_instance = GooglePrivacyDlpV2FieldTransformation.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2FieldTransformation.to_json())

# convert the object into a dict
google_privacy_dlp_v2_field_transformation_dict = google_privacy_dlp_v2_field_transformation_instance.to_dict()
# create an instance of GooglePrivacyDlpV2FieldTransformation from a dict
google_privacy_dlp_v2_field_transformation_from_dict = GooglePrivacyDlpV2FieldTransformation.from_dict(google_privacy_dlp_v2_field_transformation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


