# GooglePrivacyDlpV2DiscoveryBigQueryConditions

Requirements that must be true before a table is scanned in discovery for the first time. There is an AND relationship between the top-level attributes. Additionally, minimum conditions with an OR relationship that must be met before Cloud DLP scans a table can be set (like a minimum row count or a minimum table age).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_after** | **str** | BigQuery table must have been created after this date. Used to avoid backfilling. | [optional] 
**or_conditions** | [**GooglePrivacyDlpV2OrConditions**](GooglePrivacyDlpV2OrConditions.md) |  | [optional] 
**type_collection** | **str** | Restrict discovery to categories of table types. | [optional] 
**types** | [**GooglePrivacyDlpV2BigQueryTableTypes**](GooglePrivacyDlpV2BigQueryTableTypes.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_discovery_big_query_conditions import GooglePrivacyDlpV2DiscoveryBigQueryConditions

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DiscoveryBigQueryConditions from a JSON string
google_privacy_dlp_v2_discovery_big_query_conditions_instance = GooglePrivacyDlpV2DiscoveryBigQueryConditions.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DiscoveryBigQueryConditions.to_json())

# convert the object into a dict
google_privacy_dlp_v2_discovery_big_query_conditions_dict = google_privacy_dlp_v2_discovery_big_query_conditions_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DiscoveryBigQueryConditions from a dict
google_privacy_dlp_v2_discovery_big_query_conditions_from_dict = GooglePrivacyDlpV2DiscoveryBigQueryConditions.from_dict(google_privacy_dlp_v2_discovery_big_query_conditions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


