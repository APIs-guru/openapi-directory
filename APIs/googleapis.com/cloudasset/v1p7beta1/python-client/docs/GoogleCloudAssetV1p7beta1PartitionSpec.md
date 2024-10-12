# GoogleCloudAssetV1p7beta1PartitionSpec

Specifications of BigQuery partitioned table as export destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_key** | **str** | The partition key for BigQuery partitioned table. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1p7beta1_partition_spec import GoogleCloudAssetV1p7beta1PartitionSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1p7beta1PartitionSpec from a JSON string
google_cloud_asset_v1p7beta1_partition_spec_instance = GoogleCloudAssetV1p7beta1PartitionSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1p7beta1PartitionSpec.to_json())

# convert the object into a dict
google_cloud_asset_v1p7beta1_partition_spec_dict = google_cloud_asset_v1p7beta1_partition_spec_instance.to_dict()
# create an instance of GoogleCloudAssetV1p7beta1PartitionSpec from a dict
google_cloud_asset_v1p7beta1_partition_spec_from_dict = GoogleCloudAssetV1p7beta1PartitionSpec.from_dict(google_cloud_asset_v1p7beta1_partition_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


