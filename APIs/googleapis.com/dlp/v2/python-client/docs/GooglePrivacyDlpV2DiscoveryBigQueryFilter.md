# GooglePrivacyDlpV2DiscoveryBigQueryFilter

Determines what tables will have profiles generated within an organization or project. Includes the ability to filter by regular expression patterns on project ID, dataset ID, and table ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**other_tables** | **object** | Catch-all for all other tables not specified by other filters. Should always be last, except for single-table configurations, which will only have a TableReference target. | [optional] 
**tables** | [**GooglePrivacyDlpV2BigQueryTableCollection**](GooglePrivacyDlpV2BigQueryTableCollection.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_discovery_big_query_filter import GooglePrivacyDlpV2DiscoveryBigQueryFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DiscoveryBigQueryFilter from a JSON string
google_privacy_dlp_v2_discovery_big_query_filter_instance = GooglePrivacyDlpV2DiscoveryBigQueryFilter.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DiscoveryBigQueryFilter.to_json())

# convert the object into a dict
google_privacy_dlp_v2_discovery_big_query_filter_dict = google_privacy_dlp_v2_discovery_big_query_filter_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DiscoveryBigQueryFilter from a dict
google_privacy_dlp_v2_discovery_big_query_filter_from_dict = GooglePrivacyDlpV2DiscoveryBigQueryFilter.from_dict(google_privacy_dlp_v2_discovery_big_query_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


