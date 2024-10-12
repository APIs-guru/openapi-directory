# GoogleCloudDataplexV1AssetStatus

Aggregated status of the underlying assets of a lake or zone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_assets** | **int** | Number of active assets. | [optional] 
**security_policy_applying_assets** | **int** | Number of assets that are in process of updating the security policy on attached resources. | [optional] 
**update_time** | **str** | Last update time of the status. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_asset_status import GoogleCloudDataplexV1AssetStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1AssetStatus from a JSON string
google_cloud_dataplex_v1_asset_status_instance = GoogleCloudDataplexV1AssetStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1AssetStatus.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_asset_status_dict = google_cloud_dataplex_v1_asset_status_instance.to_dict()
# create an instance of GoogleCloudDataplexV1AssetStatus from a dict
google_cloud_dataplex_v1_asset_status_from_dict = GoogleCloudDataplexV1AssetStatus.from_dict(google_cloud_dataplex_v1_asset_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


