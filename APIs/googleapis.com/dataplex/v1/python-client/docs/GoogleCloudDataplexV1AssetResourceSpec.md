# GoogleCloudDataplexV1AssetResourceSpec

Identifies the cloud resource that is referenced by this asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Immutable. Relative name of the cloud resource that contains the data that is being managed within a lake. For example: projects/{project_number}/buckets/{bucket_id} projects/{project_number}/datasets/{dataset_id} | [optional] 
**read_access_mode** | **str** | Optional. Determines how read permissions are handled for each asset and their associated tables. Only available to storage buckets assets. | [optional] 
**type** | **str** | Required. Immutable. Type of resource. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_asset_resource_spec import GoogleCloudDataplexV1AssetResourceSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1AssetResourceSpec from a JSON string
google_cloud_dataplex_v1_asset_resource_spec_instance = GoogleCloudDataplexV1AssetResourceSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1AssetResourceSpec.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_asset_resource_spec_dict = google_cloud_dataplex_v1_asset_resource_spec_instance.to_dict()
# create an instance of GoogleCloudDataplexV1AssetResourceSpec from a dict
google_cloud_dataplex_v1_asset_resource_spec_from_dict = GoogleCloudDataplexV1AssetResourceSpec.from_dict(google_cloud_dataplex_v1_asset_resource_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


