# GcePersistentDiskCsiDriverConfig

Configuration for the Compute Engine PD CSI driver.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the Compute Engine PD CSI driver is enabled for this cluster. | [optional] 

## Example

```python
from openapi_client.models.gce_persistent_disk_csi_driver_config import GcePersistentDiskCsiDriverConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GcePersistentDiskCsiDriverConfig from a JSON string
gce_persistent_disk_csi_driver_config_instance = GcePersistentDiskCsiDriverConfig.from_json(json)
# print the JSON string representation of the object
print(GcePersistentDiskCsiDriverConfig.to_json())

# convert the object into a dict
gce_persistent_disk_csi_driver_config_dict = gce_persistent_disk_csi_driver_config_instance.to_dict()
# create an instance of GcePersistentDiskCsiDriverConfig from a dict
gce_persistent_disk_csi_driver_config_from_dict = GcePersistentDiskCsiDriverConfig.from_dict(gce_persistent_disk_csi_driver_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


