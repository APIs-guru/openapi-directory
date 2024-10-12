# GooglePrivacyDlpV2Expressions

An expression, consisting of an operator and conditions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**GooglePrivacyDlpV2Conditions**](GooglePrivacyDlpV2Conditions.md) |  | [optional] 
**logical_operator** | **str** | The operator to apply to the result of conditions. Default and currently only supported value is &#x60;AND&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_expressions import GooglePrivacyDlpV2Expressions

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2Expressions from a JSON string
google_privacy_dlp_v2_expressions_instance = GooglePrivacyDlpV2Expressions.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2Expressions.to_json())

# convert the object into a dict
google_privacy_dlp_v2_expressions_dict = google_privacy_dlp_v2_expressions_instance.to_dict()
# create an instance of GooglePrivacyDlpV2Expressions from a dict
google_privacy_dlp_v2_expressions_from_dict = GooglePrivacyDlpV2Expressions.from_dict(google_privacy_dlp_v2_expressions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


