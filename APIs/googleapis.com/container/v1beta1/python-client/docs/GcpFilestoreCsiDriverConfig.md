# GcpFilestoreCsiDriverConfig

Configuration for the GCP Filestore CSI driver.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the GCP Filestore CSI driver is enabled for this cluster. | [optional] 

## Example

```python
from openapi_client.models.gcp_filestore_csi_driver_config import GcpFilestoreCsiDriverConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GcpFilestoreCsiDriverConfig from a JSON string
gcp_filestore_csi_driver_config_instance = GcpFilestoreCsiDriverConfig.from_json(json)
# print the JSON string representation of the object
print(GcpFilestoreCsiDriverConfig.to_json())

# convert the object into a dict
gcp_filestore_csi_driver_config_dict = gcp_filestore_csi_driver_config_instance.to_dict()
# create an instance of GcpFilestoreCsiDriverConfig from a dict
gcp_filestore_csi_driver_config_from_dict = GcpFilestoreCsiDriverConfig.from_dict(gcp_filestore_csi_driver_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


