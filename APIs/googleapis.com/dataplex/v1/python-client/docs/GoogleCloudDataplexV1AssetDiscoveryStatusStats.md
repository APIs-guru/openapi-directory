# GoogleCloudDataplexV1AssetDiscoveryStatusStats

The aggregated data statistics for the asset reported by discovery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_items** | **str** | The count of data items within the referenced resource. | [optional] 
**data_size** | **str** | The number of stored data bytes within the referenced resource. | [optional] 
**filesets** | **str** | The count of fileset entities within the referenced resource. | [optional] 
**tables** | **str** | The count of table entities within the referenced resource. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_asset_discovery_status_stats import GoogleCloudDataplexV1AssetDiscoveryStatusStats

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1AssetDiscoveryStatusStats from a JSON string
google_cloud_dataplex_v1_asset_discovery_status_stats_instance = GoogleCloudDataplexV1AssetDiscoveryStatusStats.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1AssetDiscoveryStatusStats.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_asset_discovery_status_stats_dict = google_cloud_dataplex_v1_asset_discovery_status_stats_instance.to_dict()
# create an instance of GoogleCloudDataplexV1AssetDiscoveryStatusStats from a dict
google_cloud_dataplex_v1_asset_discovery_status_stats_from_dict = GoogleCloudDataplexV1AssetDiscoveryStatusStats.from_dict(google_cloud_dataplex_v1_asset_discovery_status_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


