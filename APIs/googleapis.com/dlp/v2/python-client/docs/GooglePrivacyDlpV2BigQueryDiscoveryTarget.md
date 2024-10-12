# GooglePrivacyDlpV2BigQueryDiscoveryTarget

Target used to match against for discovery with BigQuery tables

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cadence** | [**GooglePrivacyDlpV2DiscoveryGenerationCadence**](GooglePrivacyDlpV2DiscoveryGenerationCadence.md) |  | [optional] 
**conditions** | [**GooglePrivacyDlpV2DiscoveryBigQueryConditions**](GooglePrivacyDlpV2DiscoveryBigQueryConditions.md) |  | [optional] 
**disabled** | **object** | Do not profile the tables. | [optional] 
**filter** | [**GooglePrivacyDlpV2DiscoveryBigQueryFilter**](GooglePrivacyDlpV2DiscoveryBigQueryFilter.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_big_query_discovery_target import GooglePrivacyDlpV2BigQueryDiscoveryTarget

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2BigQueryDiscoveryTarget from a JSON string
google_privacy_dlp_v2_big_query_discovery_target_instance = GooglePrivacyDlpV2BigQueryDiscoveryTarget.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2BigQueryDiscoveryTarget.to_json())

# convert the object into a dict
google_privacy_dlp_v2_big_query_discovery_target_dict = google_privacy_dlp_v2_big_query_discovery_target_instance.to_dict()
# create an instance of GooglePrivacyDlpV2BigQueryDiscoveryTarget from a dict
google_privacy_dlp_v2_big_query_discovery_target_from_dict = GooglePrivacyDlpV2BigQueryDiscoveryTarget.from_dict(google_privacy_dlp_v2_big_query_discovery_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


