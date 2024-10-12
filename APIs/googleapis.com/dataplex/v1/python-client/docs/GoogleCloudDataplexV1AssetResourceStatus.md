# GoogleCloudDataplexV1AssetResourceStatus

Status of the resource referenced by an asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**managed_access_identity** | **str** | Output only. Service account associated with the BigQuery Connection. | [optional] [readonly] 
**message** | **str** | Additional information about the current state. | [optional] 
**state** | **str** | The current state of the managed resource. | [optional] 
**update_time** | **str** | Last update time of the status. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_asset_resource_status import GoogleCloudDataplexV1AssetResourceStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1AssetResourceStatus from a JSON string
google_cloud_dataplex_v1_asset_resource_status_instance = GoogleCloudDataplexV1AssetResourceStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1AssetResourceStatus.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_asset_resource_status_dict = google_cloud_dataplex_v1_asset_resource_status_instance.to_dict()
# create an instance of GoogleCloudDataplexV1AssetResourceStatus from a dict
google_cloud_dataplex_v1_asset_resource_status_from_dict = GoogleCloudDataplexV1AssetResourceStatus.from_dict(google_cloud_dataplex_v1_asset_resource_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


