# GoogleCloudAiplatformV1beta1DiskSpec

Represents the spec of disk options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boot_disk_size_gb** | **int** | Size in GB of the boot disk (default is 100GB). | [optional] 
**boot_disk_type** | **str** | Type of the boot disk (default is \&quot;pd-ssd\&quot;). Valid values: \&quot;pd-ssd\&quot; (Persistent Disk Solid State Drive) or \&quot;pd-standard\&quot; (Persistent Disk Hard Disk Drive). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_disk_spec import GoogleCloudAiplatformV1beta1DiskSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1DiskSpec from a JSON string
google_cloud_aiplatform_v1beta1_disk_spec_instance = GoogleCloudAiplatformV1beta1DiskSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1DiskSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_disk_spec_dict = google_cloud_aiplatform_v1beta1_disk_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1DiskSpec from a dict
google_cloud_aiplatform_v1beta1_disk_spec_from_dict = GoogleCloudAiplatformV1beta1DiskSpec.from_dict(google_cloud_aiplatform_v1beta1_disk_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


