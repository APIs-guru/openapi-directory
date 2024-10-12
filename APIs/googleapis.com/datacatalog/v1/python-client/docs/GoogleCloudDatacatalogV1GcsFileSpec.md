# GoogleCloudDatacatalogV1GcsFileSpec

Specification of a single file in Cloud Storage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_path** | **str** | Required. Full file path. Example: &#x60;gs://bucket_name/a/b.txt&#x60;. | [optional] 
**gcs_timestamps** | [**GoogleCloudDatacatalogV1SystemTimestamps**](GoogleCloudDatacatalogV1SystemTimestamps.md) |  | [optional] 
**size_bytes** | **str** | Output only. File size in bytes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_gcs_file_spec import GoogleCloudDatacatalogV1GcsFileSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1GcsFileSpec from a JSON string
google_cloud_datacatalog_v1_gcs_file_spec_instance = GoogleCloudDatacatalogV1GcsFileSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1GcsFileSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_gcs_file_spec_dict = google_cloud_datacatalog_v1_gcs_file_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1GcsFileSpec from a dict
google_cloud_datacatalog_v1_gcs_file_spec_from_dict = GoogleCloudDatacatalogV1GcsFileSpec.from_dict(google_cloud_datacatalog_v1_gcs_file_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


