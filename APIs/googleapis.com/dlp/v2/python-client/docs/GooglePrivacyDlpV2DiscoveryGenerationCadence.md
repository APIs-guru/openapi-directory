# GooglePrivacyDlpV2DiscoveryGenerationCadence

What must take place for a profile to be updated and how frequently it should occur. New tables are scanned as quickly as possible depending on system capacity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema_modified_cadence** | [**GooglePrivacyDlpV2DiscoverySchemaModifiedCadence**](GooglePrivacyDlpV2DiscoverySchemaModifiedCadence.md) |  | [optional] 
**table_modified_cadence** | [**GooglePrivacyDlpV2DiscoveryTableModifiedCadence**](GooglePrivacyDlpV2DiscoveryTableModifiedCadence.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_discovery_generation_cadence import GooglePrivacyDlpV2DiscoveryGenerationCadence

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DiscoveryGenerationCadence from a JSON string
google_privacy_dlp_v2_discovery_generation_cadence_instance = GooglePrivacyDlpV2DiscoveryGenerationCadence.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DiscoveryGenerationCadence.to_json())

# convert the object into a dict
google_privacy_dlp_v2_discovery_generation_cadence_dict = google_privacy_dlp_v2_discovery_generation_cadence_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DiscoveryGenerationCadence from a dict
google_privacy_dlp_v2_discovery_generation_cadence_from_dict = GooglePrivacyDlpV2DiscoveryGenerationCadence.from_dict(google_privacy_dlp_v2_discovery_generation_cadence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


