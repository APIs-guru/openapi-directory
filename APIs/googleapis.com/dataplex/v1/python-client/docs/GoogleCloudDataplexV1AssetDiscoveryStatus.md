# GoogleCloudDataplexV1AssetDiscoveryStatus

Status of discovery for an asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_run_duration** | **str** | The duration of the last discovery run. | [optional] 
**last_run_time** | **str** | The start time of the last discovery run. | [optional] 
**message** | **str** | Additional information about the current state. | [optional] 
**state** | **str** | The current status of the discovery feature. | [optional] 
**stats** | [**GoogleCloudDataplexV1AssetDiscoveryStatusStats**](GoogleCloudDataplexV1AssetDiscoveryStatusStats.md) |  | [optional] 
**update_time** | **str** | Last update time of the status. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_asset_discovery_status import GoogleCloudDataplexV1AssetDiscoveryStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1AssetDiscoveryStatus from a JSON string
google_cloud_dataplex_v1_asset_discovery_status_instance = GoogleCloudDataplexV1AssetDiscoveryStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1AssetDiscoveryStatus.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_asset_discovery_status_dict = google_cloud_dataplex_v1_asset_discovery_status_instance.to_dict()
# create an instance of GoogleCloudDataplexV1AssetDiscoveryStatus from a dict
google_cloud_dataplex_v1_asset_discovery_status_from_dict = GoogleCloudDataplexV1AssetDiscoveryStatus.from_dict(google_cloud_dataplex_v1_asset_discovery_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


