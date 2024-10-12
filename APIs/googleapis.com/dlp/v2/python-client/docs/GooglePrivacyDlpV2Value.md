# GooglePrivacyDlpV2Value

Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a 'Value' is based on its representation as a UTF-8 encoded string. For example, if 'integer_value' is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boolean_value** | **bool** | boolean | [optional] 
**date_value** | [**GoogleTypeDate**](GoogleTypeDate.md) |  | [optional] 
**day_of_week_value** | **str** | day of week | [optional] 
**float_value** | **float** | float | [optional] 
**integer_value** | **str** | integer | [optional] 
**string_value** | **str** | string | [optional] 
**time_value** | [**GoogleTypeTimeOfDay**](GoogleTypeTimeOfDay.md) |  | [optional] 
**timestamp_value** | **str** | timestamp | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_value import GooglePrivacyDlpV2Value

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2Value from a JSON string
google_privacy_dlp_v2_value_instance = GooglePrivacyDlpV2Value.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2Value.to_json())

# convert the object into a dict
google_privacy_dlp_v2_value_dict = google_privacy_dlp_v2_value_instance.to_dict()
# create an instance of GooglePrivacyDlpV2Value from a dict
google_privacy_dlp_v2_value_from_dict = GooglePrivacyDlpV2Value.from_dict(google_privacy_dlp_v2_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


