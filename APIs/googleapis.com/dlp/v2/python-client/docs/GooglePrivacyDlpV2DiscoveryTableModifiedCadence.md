# GooglePrivacyDlpV2DiscoveryTableModifiedCadence

The cadence at which to update data profiles when a table is modified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frequency** | **str** | How frequently data profiles can be updated when tables are modified. Defaults to never. | [optional] 
**types** | **List[str]** | The type of events to consider when deciding if the table has been modified and should have the profile updated. Defaults to MODIFIED_TIMESTAMP. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_discovery_table_modified_cadence import GooglePrivacyDlpV2DiscoveryTableModifiedCadence

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DiscoveryTableModifiedCadence from a JSON string
google_privacy_dlp_v2_discovery_table_modified_cadence_instance = GooglePrivacyDlpV2DiscoveryTableModifiedCadence.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DiscoveryTableModifiedCadence.to_json())

# convert the object into a dict
google_privacy_dlp_v2_discovery_table_modified_cadence_dict = google_privacy_dlp_v2_discovery_table_modified_cadence_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DiscoveryTableModifiedCadence from a dict
google_privacy_dlp_v2_discovery_table_modified_cadence_from_dict = GooglePrivacyDlpV2DiscoveryTableModifiedCadence.from_dict(google_privacy_dlp_v2_discovery_table_modified_cadence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


