# VmwarePlatformConfig

VmwarePlatformConfig represents configuration for the VMware platform.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundles** | [**List[VmwareBundleConfig]**](VmwareBundleConfig.md) | Output only. The list of bundles installed in the admin cluster. | [optional] [readonly] 
**platform_version** | **str** | Output only. The platform version e.g. 1.13.2. | [optional] [readonly] 
**required_platform_version** | **str** | Input only. The required platform version e.g. 1.13.1. If the current platform version is lower than the target version, the platform version will be updated to the target version. If the target version is not installed in the platform (bundle versions), download the target version bundle. | [optional] 
**status** | [**ResourceStatus**](ResourceStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.vmware_platform_config import VmwarePlatformConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwarePlatformConfig from a JSON string
vmware_platform_config_instance = VmwarePlatformConfig.from_json(json)
# print the JSON string representation of the object
print(VmwarePlatformConfig.to_json())

# convert the object into a dict
vmware_platform_config_dict = vmware_platform_config_instance.to_dict()
# create an instance of VmwarePlatformConfig from a dict
vmware_platform_config_from_dict = VmwarePlatformConfig.from_dict(vmware_platform_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


