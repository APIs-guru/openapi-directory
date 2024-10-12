# VmwareDataplaneV2Config

Contains configurations for Dataplane V2, which is optimized dataplane for Kubernetes networking. For more information, see: https://cloud.google.com/kubernetes-engine/docs/concepts/dataplane-v2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advanced_networking** | **bool** | Enable advanced networking which requires dataplane_v2_enabled to be set true. | [optional] 
**dataplane_v2_enabled** | **bool** | Enables Dataplane V2. | [optional] 
**forward_mode** | **str** | Configure ForwardMode for Dataplane v2. | [optional] 
**windows_dataplane_v2_enabled** | **bool** | Enable Dataplane V2 for clusters with Windows nodes. | [optional] 

## Example

```python
from openapi_client.models.vmware_dataplane_v2_config import VmwareDataplaneV2Config

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareDataplaneV2Config from a JSON string
vmware_dataplane_v2_config_instance = VmwareDataplaneV2Config.from_json(json)
# print the JSON string representation of the object
print(VmwareDataplaneV2Config.to_json())

# convert the object into a dict
vmware_dataplane_v2_config_dict = vmware_dataplane_v2_config_instance.to_dict()
# create an instance of VmwareDataplaneV2Config from a dict
vmware_dataplane_v2_config_from_dict = VmwareDataplaneV2Config.from_dict(vmware_dataplane_v2_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


