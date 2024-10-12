# GoogleCloudAssetV1p7beta1GcsDestination

A Cloud Storage location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | The URI of the Cloud Storage object. It&#39;s the same URI that is used by gsutil. Example: \&quot;gs://bucket_name/object_name\&quot;. See [Viewing and Editing Object Metadata](https://cloud.google.com/storage/docs/viewing-editing-metadata) for more information. | [optional] 
**uri_prefix** | **str** | The URI prefix of all generated Cloud Storage objects. Example: \&quot;gs://bucket_name/object_name_prefix\&quot;. Each object URI is in format: \&quot;gs://bucket_name/object_name_prefix/{ASSET_TYPE}/{SHARD_NUMBER} and only contains assets for that type. starts from 0. Example: \&quot;gs://bucket_name/object_name_prefix/compute.googleapis.com/Disk/0\&quot; is the first shard of output objects containing all compute.googleapis.com/Disk assets. An INVALID_ARGUMENT error will be returned if file with the same name \&quot;gs://bucket_name/object_name_prefix\&quot; already exists. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1p7beta1_gcs_destination import GoogleCloudAssetV1p7beta1GcsDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1p7beta1GcsDestination from a JSON string
google_cloud_asset_v1p7beta1_gcs_destination_instance = GoogleCloudAssetV1p7beta1GcsDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1p7beta1GcsDestination.to_json())

# convert the object into a dict
google_cloud_asset_v1p7beta1_gcs_destination_dict = google_cloud_asset_v1p7beta1_gcs_destination_instance.to_dict()
# create an instance of GoogleCloudAssetV1p7beta1GcsDestination from a dict
google_cloud_asset_v1p7beta1_gcs_destination_from_dict = GoogleCloudAssetV1p7beta1GcsDestination.from_dict(google_cloud_asset_v1p7beta1_gcs_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


