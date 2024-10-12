# GooglePrivacyDlpV2UpdateDiscoveryConfigRequest

Request message for UpdateDiscoveryConfig.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discovery_config** | [**GooglePrivacyDlpV2DiscoveryConfig**](GooglePrivacyDlpV2DiscoveryConfig.md) |  | [optional] 
**update_mask** | **str** | Mask to control which fields get updated. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_update_discovery_config_request import GooglePrivacyDlpV2UpdateDiscoveryConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2UpdateDiscoveryConfigRequest from a JSON string
google_privacy_dlp_v2_update_discovery_config_request_instance = GooglePrivacyDlpV2UpdateDiscoveryConfigRequest.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2UpdateDiscoveryConfigRequest.to_json())

# convert the object into a dict
google_privacy_dlp_v2_update_discovery_config_request_dict = google_privacy_dlp_v2_update_discovery_config_request_instance.to_dict()
# create an instance of GooglePrivacyDlpV2UpdateDiscoveryConfigRequest from a dict
google_privacy_dlp_v2_update_discovery_config_request_from_dict = GooglePrivacyDlpV2UpdateDiscoveryConfigRequest.from_dict(google_privacy_dlp_v2_update_discovery_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


