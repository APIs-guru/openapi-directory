# GoogleCloudRunV2VolumeMount

VolumeMount describes a mounting of a Volume within a container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mount_path** | **str** | Required. Path within the container at which the volume should be mounted. Must not contain &#39;:&#39;. For Cloud SQL volumes, it can be left empty, or must otherwise be &#x60;/cloudsql&#x60;. All instances defined in the Volume will be available as &#x60;/cloudsql/[instance]&#x60;. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run | [optional] 
**name** | **str** | Required. This must match the Name of a Volume. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_volume_mount import GoogleCloudRunV2VolumeMount

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2VolumeMount from a JSON string
google_cloud_run_v2_volume_mount_instance = GoogleCloudRunV2VolumeMount.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2VolumeMount.to_json())

# convert the object into a dict
google_cloud_run_v2_volume_mount_dict = google_cloud_run_v2_volume_mount_instance.to_dict()
# create an instance of GoogleCloudRunV2VolumeMount from a dict
google_cloud_run_v2_volume_mount_from_dict = GoogleCloudRunV2VolumeMount.from_dict(google_cloud_run_v2_volume_mount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


