# GoogleCloudRunV2Volume

Volume represents a named volume in a container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_sql_instance** | [**GoogleCloudRunV2CloudSqlInstance**](GoogleCloudRunV2CloudSqlInstance.md) |  | [optional] 
**empty_dir** | [**GoogleCloudRunV2EmptyDirVolumeSource**](GoogleCloudRunV2EmptyDirVolumeSource.md) |  | [optional] 
**gcs** | [**GoogleCloudRunV2GCSVolumeSource**](GoogleCloudRunV2GCSVolumeSource.md) |  | [optional] 
**name** | **str** | Required. Volume&#39;s name. | [optional] 
**nfs** | [**GoogleCloudRunV2NFSVolumeSource**](GoogleCloudRunV2NFSVolumeSource.md) |  | [optional] 
**secret** | [**GoogleCloudRunV2SecretVolumeSource**](GoogleCloudRunV2SecretVolumeSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_volume import GoogleCloudRunV2Volume

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2Volume from a JSON string
google_cloud_run_v2_volume_instance = GoogleCloudRunV2Volume.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2Volume.to_json())

# convert the object into a dict
google_cloud_run_v2_volume_dict = google_cloud_run_v2_volume_instance.to_dict()
# create an instance of GoogleCloudRunV2Volume from a dict
google_cloud_run_v2_volume_from_dict = GoogleCloudRunV2Volume.from_dict(google_cloud_run_v2_volume_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


