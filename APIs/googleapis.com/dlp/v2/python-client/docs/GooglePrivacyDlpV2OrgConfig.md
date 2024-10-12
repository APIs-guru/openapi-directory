# GooglePrivacyDlpV2OrgConfig

Project and scan location information. Only set when the parent is an org.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | [**GooglePrivacyDlpV2DiscoveryStartingLocation**](GooglePrivacyDlpV2DiscoveryStartingLocation.md) |  | [optional] 
**project_id** | **str** | The project that will run the scan. The DLP service account that exists within this project must have access to all resources that are profiled, and the Cloud DLP API must be enabled. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_org_config import GooglePrivacyDlpV2OrgConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2OrgConfig from a JSON string
google_privacy_dlp_v2_org_config_instance = GooglePrivacyDlpV2OrgConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2OrgConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_org_config_dict = google_privacy_dlp_v2_org_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2OrgConfig from a dict
google_privacy_dlp_v2_org_config_from_dict = GooglePrivacyDlpV2OrgConfig.from_dict(google_privacy_dlp_v2_org_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


