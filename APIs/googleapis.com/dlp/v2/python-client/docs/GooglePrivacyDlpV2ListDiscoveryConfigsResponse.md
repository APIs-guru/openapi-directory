# GooglePrivacyDlpV2ListDiscoveryConfigsResponse

Response message for ListDiscoveryConfigs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discovery_configs** | [**List[GooglePrivacyDlpV2DiscoveryConfig]**](GooglePrivacyDlpV2DiscoveryConfig.md) | List of configs, up to page_size in ListDiscoveryConfigsRequest. | [optional] 
**next_page_token** | **str** | If the next page is available then this value is the next page token to be used in the following ListDiscoveryConfigs request. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_list_discovery_configs_response import GooglePrivacyDlpV2ListDiscoveryConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ListDiscoveryConfigsResponse from a JSON string
google_privacy_dlp_v2_list_discovery_configs_response_instance = GooglePrivacyDlpV2ListDiscoveryConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ListDiscoveryConfigsResponse.to_json())

# convert the object into a dict
google_privacy_dlp_v2_list_discovery_configs_response_dict = google_privacy_dlp_v2_list_discovery_configs_response_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ListDiscoveryConfigsResponse from a dict
google_privacy_dlp_v2_list_discovery_configs_response_from_dict = GooglePrivacyDlpV2ListDiscoveryConfigsResponse.from_dict(google_privacy_dlp_v2_list_discovery_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


