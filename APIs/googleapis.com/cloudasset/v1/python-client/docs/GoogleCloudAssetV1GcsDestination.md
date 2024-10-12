# GoogleCloudAssetV1GcsDestination

A Cloud Storage location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | Required. The URI of the Cloud Storage object. It&#39;s the same URI that is used by gsutil. Example: \&quot;gs://bucket_name/object_name\&quot;. See [Viewing and Editing Object Metadata](https://cloud.google.com/storage/docs/viewing-editing-metadata) for more information. If the specified Cloud Storage object already exists and there is no [hold](https://cloud.google.com/storage/docs/object-holds), it will be overwritten with the analysis result. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1_gcs_destination import GoogleCloudAssetV1GcsDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1GcsDestination from a JSON string
google_cloud_asset_v1_gcs_destination_instance = GoogleCloudAssetV1GcsDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1GcsDestination.to_json())

# convert the object into a dict
google_cloud_asset_v1_gcs_destination_dict = google_cloud_asset_v1_gcs_destination_instance.to_dict()
# create an instance of GoogleCloudAssetV1GcsDestination from a dict
google_cloud_asset_v1_gcs_destination_from_dict = GoogleCloudAssetV1GcsDestination.from_dict(google_cloud_asset_v1_gcs_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


