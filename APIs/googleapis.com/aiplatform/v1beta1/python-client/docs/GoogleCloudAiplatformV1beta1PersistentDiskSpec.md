# GoogleCloudAiplatformV1beta1PersistentDiskSpec

Represents the spec of persistent disk options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_size_gb** | **str** | Size in GB of the disk (default is 100GB). | [optional] 
**disk_type** | **str** | Type of the disk (default is \&quot;pd-standard\&quot;). Valid values: \&quot;pd-ssd\&quot; (Persistent Disk Solid State Drive) \&quot;pd-standard\&quot; (Persistent Disk Hard Disk Drive) \&quot;pd-balanced\&quot; (Balanced Persistent Disk) \&quot;pd-extreme\&quot; (Extreme Persistent Disk) | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_persistent_disk_spec import GoogleCloudAiplatformV1beta1PersistentDiskSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1PersistentDiskSpec from a JSON string
google_cloud_aiplatform_v1beta1_persistent_disk_spec_instance = GoogleCloudAiplatformV1beta1PersistentDiskSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1PersistentDiskSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_persistent_disk_spec_dict = google_cloud_aiplatform_v1beta1_persistent_disk_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1PersistentDiskSpec from a dict
google_cloud_aiplatform_v1beta1_persistent_disk_spec_from_dict = GoogleCloudAiplatformV1beta1PersistentDiskSpec.from_dict(google_cloud_aiplatform_v1beta1_persistent_disk_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


