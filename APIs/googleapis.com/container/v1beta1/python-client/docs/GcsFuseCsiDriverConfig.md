# GcsFuseCsiDriverConfig

Configuration for the Cloud Storage Fuse CSI driver.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the Cloud Storage Fuse CSI driver is enabled for this cluster. | [optional] 

## Example

```python
from openapi_client.models.gcs_fuse_csi_driver_config import GcsFuseCsiDriverConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GcsFuseCsiDriverConfig from a JSON string
gcs_fuse_csi_driver_config_instance = GcsFuseCsiDriverConfig.from_json(json)
# print the JSON string representation of the object
print(GcsFuseCsiDriverConfig.to_json())

# convert the object into a dict
gcs_fuse_csi_driver_config_dict = gcs_fuse_csi_driver_config_instance.to_dict()
# create an instance of GcsFuseCsiDriverConfig from a dict
gcs_fuse_csi_driver_config_from_dict = GcsFuseCsiDriverConfig.from_dict(gcs_fuse_csi_driver_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


