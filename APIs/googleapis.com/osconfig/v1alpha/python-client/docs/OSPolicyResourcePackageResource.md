# OSPolicyResourcePackageResource

A resource that manages a system package.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apt** | [**OSPolicyResourcePackageResourceAPT**](OSPolicyResourcePackageResourceAPT.md) |  | [optional] 
**deb** | [**OSPolicyResourcePackageResourceDeb**](OSPolicyResourcePackageResourceDeb.md) |  | [optional] 
**desired_state** | **str** | Required. The desired state the agent should maintain for this package. | [optional] 
**googet** | [**OSPolicyResourcePackageResourceGooGet**](OSPolicyResourcePackageResourceGooGet.md) |  | [optional] 
**msi** | [**OSPolicyResourcePackageResourceMSI**](OSPolicyResourcePackageResourceMSI.md) |  | [optional] 
**rpm** | [**OSPolicyResourcePackageResourceRPM**](OSPolicyResourcePackageResourceRPM.md) |  | [optional] 
**yum** | [**OSPolicyResourcePackageResourceYUM**](OSPolicyResourcePackageResourceYUM.md) |  | [optional] 
**zypper** | [**OSPolicyResourcePackageResourceZypper**](OSPolicyResourcePackageResourceZypper.md) |  | [optional] 

## Example

```python
from openapi_client.models.os_policy_resource_package_resource import OSPolicyResourcePackageResource

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyResourcePackageResource from a JSON string
os_policy_resource_package_resource_instance = OSPolicyResourcePackageResource.from_json(json)
# print the JSON string representation of the object
print(OSPolicyResourcePackageResource.to_json())

# convert the object into a dict
os_policy_resource_package_resource_dict = os_policy_resource_package_resource_instance.to_dict()
# create an instance of OSPolicyResourcePackageResource from a dict
os_policy_resource_package_resource_from_dict = OSPolicyResourcePackageResource.from_dict(os_policy_resource_package_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


