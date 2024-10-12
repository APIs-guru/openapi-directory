# GooglePrivacyDlpV2DiscoveryTarget

Target used to match against for Discovery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**big_query_target** | [**GooglePrivacyDlpV2BigQueryDiscoveryTarget**](GooglePrivacyDlpV2BigQueryDiscoveryTarget.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_discovery_target import GooglePrivacyDlpV2DiscoveryTarget

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DiscoveryTarget from a JSON string
google_privacy_dlp_v2_discovery_target_instance = GooglePrivacyDlpV2DiscoveryTarget.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DiscoveryTarget.to_json())

# convert the object into a dict
google_privacy_dlp_v2_discovery_target_dict = google_privacy_dlp_v2_discovery_target_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DiscoveryTarget from a dict
google_privacy_dlp_v2_discovery_target_from_dict = GooglePrivacyDlpV2DiscoveryTarget.from_dict(google_privacy_dlp_v2_discovery_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


