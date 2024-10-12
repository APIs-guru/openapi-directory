# GoogleCloudDataplexV1Asset

An asset represents a cloud resource that is being managed within a lake as a member of a zone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time when the asset was created. | [optional] [readonly] 
**description** | **str** | Optional. Description of the asset. | [optional] 
**discovery_spec** | [**GoogleCloudDataplexV1AssetDiscoverySpec**](GoogleCloudDataplexV1AssetDiscoverySpec.md) |  | [optional] 
**discovery_status** | [**GoogleCloudDataplexV1AssetDiscoveryStatus**](GoogleCloudDataplexV1AssetDiscoveryStatus.md) |  | [optional] 
**display_name** | **str** | Optional. User friendly display name. | [optional] 
**labels** | **Dict[str, str]** | Optional. User defined labels for the asset. | [optional] 
**name** | **str** | Output only. The relative resource name of the asset, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}. | [optional] [readonly] 
**resource_spec** | [**GoogleCloudDataplexV1AssetResourceSpec**](GoogleCloudDataplexV1AssetResourceSpec.md) |  | [optional] 
**resource_status** | [**GoogleCloudDataplexV1AssetResourceStatus**](GoogleCloudDataplexV1AssetResourceStatus.md) |  | [optional] 
**security_status** | [**GoogleCloudDataplexV1AssetSecurityStatus**](GoogleCloudDataplexV1AssetSecurityStatus.md) |  | [optional] 
**state** | **str** | Output only. Current state of the asset. | [optional] [readonly] 
**uid** | **str** | Output only. System generated globally unique ID for the asset. This ID will be different if the asset is deleted and re-created with the same name. | [optional] [readonly] 
**update_time** | **str** | Output only. The time when the asset was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_asset import GoogleCloudDataplexV1Asset

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1Asset from a JSON string
google_cloud_dataplex_v1_asset_instance = GoogleCloudDataplexV1Asset.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1Asset.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_asset_dict = google_cloud_dataplex_v1_asset_instance.to_dict()
# create an instance of GoogleCloudDataplexV1Asset from a dict
google_cloud_dataplex_v1_asset_from_dict = GoogleCloudDataplexV1Asset.from_dict(google_cloud_dataplex_v1_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


