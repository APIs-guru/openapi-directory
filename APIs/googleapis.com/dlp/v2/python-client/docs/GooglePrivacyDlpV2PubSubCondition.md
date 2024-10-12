# GooglePrivacyDlpV2PubSubCondition

A condition consisting of a value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minimum_risk_score** | **str** | The minimum data risk score that triggers the condition. | [optional] 
**minimum_sensitivity_score** | **str** | The minimum sensitivity level that triggers the condition. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_pub_sub_condition import GooglePrivacyDlpV2PubSubCondition

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2PubSubCondition from a JSON string
google_privacy_dlp_v2_pub_sub_condition_instance = GooglePrivacyDlpV2PubSubCondition.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2PubSubCondition.to_json())

# convert the object into a dict
google_privacy_dlp_v2_pub_sub_condition_dict = google_privacy_dlp_v2_pub_sub_condition_instance.to_dict()
# create an instance of GooglePrivacyDlpV2PubSubCondition from a dict
google_privacy_dlp_v2_pub_sub_condition_from_dict = GooglePrivacyDlpV2PubSubCondition.from_dict(google_privacy_dlp_v2_pub_sub_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


