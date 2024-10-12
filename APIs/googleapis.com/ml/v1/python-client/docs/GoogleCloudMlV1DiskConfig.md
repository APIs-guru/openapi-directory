# GoogleCloudMlV1DiskConfig

Represents the config of disk options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boot_disk_size_gb** | **int** | Size in GB of the boot disk (default is 100GB). | [optional] 
**boot_disk_type** | **str** | Type of the boot disk (default is \&quot;pd-ssd\&quot;). Valid values: \&quot;pd-ssd\&quot; (Persistent Disk Solid State Drive) or \&quot;pd-standard\&quot; (Persistent Disk Hard Disk Drive). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_disk_config import GoogleCloudMlV1DiskConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1DiskConfig from a JSON string
google_cloud_ml_v1_disk_config_instance = GoogleCloudMlV1DiskConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1DiskConfig.to_json())

# convert the object into a dict
google_cloud_ml_v1_disk_config_dict = google_cloud_ml_v1_disk_config_instance.to_dict()
# create an instance of GoogleCloudMlV1DiskConfig from a dict
google_cloud_ml_v1_disk_config_from_dict = GoogleCloudMlV1DiskConfig.from_dict(google_cloud_ml_v1_disk_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


