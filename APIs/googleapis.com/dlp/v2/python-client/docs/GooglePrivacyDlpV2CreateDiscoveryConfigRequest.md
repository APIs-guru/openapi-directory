# GooglePrivacyDlpV2CreateDiscoveryConfigRequest

Request message for CreateDiscoveryConfig.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_id** | **str** | The config ID can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: &#x60;[a-zA-Z\\d-_]+&#x60;. The maximum length is 100 characters. Can be empty to allow the system to generate one. | [optional] 
**discovery_config** | [**GooglePrivacyDlpV2DiscoveryConfig**](GooglePrivacyDlpV2DiscoveryConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_create_discovery_config_request import GooglePrivacyDlpV2CreateDiscoveryConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2CreateDiscoveryConfigRequest from a JSON string
google_privacy_dlp_v2_create_discovery_config_request_instance = GooglePrivacyDlpV2CreateDiscoveryConfigRequest.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2CreateDiscoveryConfigRequest.to_json())

# convert the object into a dict
google_privacy_dlp_v2_create_discovery_config_request_dict = google_privacy_dlp_v2_create_discovery_config_request_instance.to_dict()
# create an instance of GooglePrivacyDlpV2CreateDiscoveryConfigRequest from a dict
google_privacy_dlp_v2_create_discovery_config_request_from_dict = GooglePrivacyDlpV2CreateDiscoveryConfigRequest.from_dict(google_privacy_dlp_v2_create_discovery_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


