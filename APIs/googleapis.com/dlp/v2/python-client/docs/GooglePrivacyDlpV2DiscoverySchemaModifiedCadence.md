# GooglePrivacyDlpV2DiscoverySchemaModifiedCadence

The cadence at which to update data profiles when a schema is modified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frequency** | **str** | How frequently profiles may be updated when schemas are modified. Defaults to monthly. | [optional] 
**types** | **List[str]** | The type of events to consider when deciding if the table&#39;s schema has been modified and should have the profile updated. Defaults to NEW_COLUMNS. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_discovery_schema_modified_cadence import GooglePrivacyDlpV2DiscoverySchemaModifiedCadence

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DiscoverySchemaModifiedCadence from a JSON string
google_privacy_dlp_v2_discovery_schema_modified_cadence_instance = GooglePrivacyDlpV2DiscoverySchemaModifiedCadence.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DiscoverySchemaModifiedCadence.to_json())

# convert the object into a dict
google_privacy_dlp_v2_discovery_schema_modified_cadence_dict = google_privacy_dlp_v2_discovery_schema_modified_cadence_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DiscoverySchemaModifiedCadence from a dict
google_privacy_dlp_v2_discovery_schema_modified_cadence_from_dict = GooglePrivacyDlpV2DiscoverySchemaModifiedCadence.from_dict(google_privacy_dlp_v2_discovery_schema_modified_cadence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


