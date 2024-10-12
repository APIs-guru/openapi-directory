# GoogleCloudRunV2GCSVolumeSource

Represents a GCS Bucket mounted as a volume.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** | GCS Bucket name | [optional] 
**read_only** | **bool** | If true, mount the GCS bucket as read-only | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_gcs_volume_source import GoogleCloudRunV2GCSVolumeSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2GCSVolumeSource from a JSON string
google_cloud_run_v2_gcs_volume_source_instance = GoogleCloudRunV2GCSVolumeSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2GCSVolumeSource.to_json())

# convert the object into a dict
google_cloud_run_v2_gcs_volume_source_dict = google_cloud_run_v2_gcs_volume_source_instance.to_dict()
# create an instance of GoogleCloudRunV2GCSVolumeSource from a dict
google_cloud_run_v2_gcs_volume_source_from_dict = GoogleCloudRunV2GCSVolumeSource.from_dict(google_cloud_run_v2_gcs_volume_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


