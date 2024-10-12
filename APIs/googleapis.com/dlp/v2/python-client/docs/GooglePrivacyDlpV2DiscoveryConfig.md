# GooglePrivacyDlpV2DiscoveryConfig

Configuration for discovery to scan resources for profile generation. Only one discovery configuration may exist per organization, folder, or project. The generated data profiles are retained according to the [data retention policy] (https://cloud.google.com/sensitive-data-protection/docs/data-profiles#retention).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[GooglePrivacyDlpV2DataProfileAction]**](GooglePrivacyDlpV2DataProfileAction.md) | Actions to execute at the completion of scanning. | [optional] 
**create_time** | **str** | Output only. The creation timestamp of a DiscoveryConfig. | [optional] [readonly] 
**display_name** | **str** | Display name (max 100 chars) | [optional] 
**errors** | [**List[GooglePrivacyDlpV2Error]**](GooglePrivacyDlpV2Error.md) | Output only. A stream of errors encountered when the config was activated. Repeated errors may result in the config automatically being paused. Output only field. Will return the last 100 errors. Whenever the config is modified this list will be cleared. | [optional] [readonly] 
**inspect_templates** | **List[str]** | Detection logic for profile generation. Not all template features are used by Discovery. FindingLimits, include_quote and exclude_info_types have no impact on Discovery. Multiple templates may be provided if there is data in multiple regions. At most one template must be specified per-region (including \&quot;global\&quot;). Each region is scanned using the applicable template. If no region-specific template is specified, but a \&quot;global\&quot; template is specified, it will be copied to that region and used instead. If no global or region-specific template is provided for a region with data, that region&#39;s data will not be scanned. For more information, see https://cloud.google.com/sensitive-data-protection/docs/data-profiles#data-residency. | [optional] 
**last_run_time** | **str** | Output only. The timestamp of the last time this config was executed. | [optional] [readonly] 
**name** | **str** | Unique resource name for the DiscoveryConfig, assigned by the service when the DiscoveryConfig is created, for example &#x60;projects/dlp-test-project/locations/global/discoveryConfigs/53234423&#x60;. | [optional] 
**org_config** | [**GooglePrivacyDlpV2OrgConfig**](GooglePrivacyDlpV2OrgConfig.md) |  | [optional] 
**status** | **str** | Required. A status for this configuration. | [optional] 
**targets** | [**List[GooglePrivacyDlpV2DiscoveryTarget]**](GooglePrivacyDlpV2DiscoveryTarget.md) | Target to match against for determining what to scan and how frequently. | [optional] 
**update_time** | **str** | Output only. The last update timestamp of a DiscoveryConfig. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_discovery_config import GooglePrivacyDlpV2DiscoveryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DiscoveryConfig from a JSON string
google_privacy_dlp_v2_discovery_config_instance = GooglePrivacyDlpV2DiscoveryConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DiscoveryConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_discovery_config_dict = google_privacy_dlp_v2_discovery_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DiscoveryConfig from a dict
google_privacy_dlp_v2_discovery_config_from_dict = GooglePrivacyDlpV2DiscoveryConfig.from_dict(google_privacy_dlp_v2_discovery_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


