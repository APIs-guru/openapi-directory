# VmwareBundleConfig

VmwareBundleConfig represents configuration for the bundle.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**ResourceStatus**](ResourceStatus.md) |  | [optional] 
**version** | **str** | The version of the bundle. | [optional] 

## Example

```python
from openapi_client.models.vmware_bundle_config import VmwareBundleConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareBundleConfig from a JSON string
vmware_bundle_config_instance = VmwareBundleConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareBundleConfig.to_json())

# convert the object into a dict
vmware_bundle_config_dict = vmware_bundle_config_instance.to_dict()
# create an instance of VmwareBundleConfig from a dict
vmware_bundle_config_from_dict = VmwareBundleConfig.from_dict(vmware_bundle_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


