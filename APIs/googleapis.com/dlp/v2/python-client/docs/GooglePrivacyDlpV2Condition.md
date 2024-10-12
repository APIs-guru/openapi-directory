# GooglePrivacyDlpV2Condition

The field type of `value` and `field` do not need to match to be considered equal, but not all comparisons are possible. EQUAL_TO and NOT_EQUAL_TO attempt to compare even with incompatible types, but all other comparisons are invalid with incompatible types. A `value` of type: - `string` can be compared against all other types - `boolean` can only be compared against other booleans - `integer` can be compared against doubles or a string if the string value can be parsed as an integer. - `double` can be compared against integers or a string if the string can be parsed as a double. - `Timestamp` can be compared against strings in RFC 3339 date string format. - `TimeOfDay` can be compared against timestamps and strings in the format of 'HH:mm:ss'. If we fail to compare do to type mismatch, a warning will be given and the condition will evaluate to false.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | [**GooglePrivacyDlpV2FieldId**](GooglePrivacyDlpV2FieldId.md) |  | [optional] 
**operator** | **str** | Required. Operator used to compare the field or infoType to the value. | [optional] 
**value** | [**GooglePrivacyDlpV2Value**](GooglePrivacyDlpV2Value.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_condition import GooglePrivacyDlpV2Condition

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2Condition from a JSON string
google_privacy_dlp_v2_condition_instance = GooglePrivacyDlpV2Condition.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2Condition.to_json())

# convert the object into a dict
google_privacy_dlp_v2_condition_dict = google_privacy_dlp_v2_condition_instance.to_dict()
# create an instance of GooglePrivacyDlpV2Condition from a dict
google_privacy_dlp_v2_condition_from_dict = GooglePrivacyDlpV2Condition.from_dict(google_privacy_dlp_v2_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


