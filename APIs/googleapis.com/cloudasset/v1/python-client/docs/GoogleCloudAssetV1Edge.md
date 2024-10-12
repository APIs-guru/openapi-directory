# GoogleCloudAssetV1Edge

A directional edge.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_node** | **str** | The source node of the edge. For example, it could be a full resource name for a resource node or an email of an identity. | [optional] 
**target_node** | **str** | The target node of the edge. For example, it could be a full resource name for a resource node or an email of an identity. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1_edge import GoogleCloudAssetV1Edge

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1Edge from a JSON string
google_cloud_asset_v1_edge_instance = GoogleCloudAssetV1Edge.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1Edge.to_json())

# convert the object into a dict
google_cloud_asset_v1_edge_dict = google_cloud_asset_v1_edge_instance.to_dict()
# create an instance of GoogleCloudAssetV1Edge from a dict
google_cloud_asset_v1_edge_from_dict = GoogleCloudAssetV1Edge.from_dict(google_cloud_asset_v1_edge_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


