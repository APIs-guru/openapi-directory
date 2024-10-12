# GooglePrivacyDlpV2DataProfilePubSubCondition

A condition for determining whether a Pub/Sub should be triggered.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expressions** | [**GooglePrivacyDlpV2PubSubExpressions**](GooglePrivacyDlpV2PubSubExpressions.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_data_profile_pub_sub_condition import GooglePrivacyDlpV2DataProfilePubSubCondition

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DataProfilePubSubCondition from a JSON string
google_privacy_dlp_v2_data_profile_pub_sub_condition_instance = GooglePrivacyDlpV2DataProfilePubSubCondition.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DataProfilePubSubCondition.to_json())

# convert the object into a dict
google_privacy_dlp_v2_data_profile_pub_sub_condition_dict = google_privacy_dlp_v2_data_profile_pub_sub_condition_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DataProfilePubSubCondition from a dict
google_privacy_dlp_v2_data_profile_pub_sub_condition_from_dict = GooglePrivacyDlpV2DataProfilePubSubCondition.from_dict(google_privacy_dlp_v2_data_profile_pub_sub_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


