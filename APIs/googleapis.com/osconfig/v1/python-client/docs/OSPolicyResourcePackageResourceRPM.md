# OSPolicyResourcePackageResourceRPM

An RPM package file. RPM packages only support INSTALLED state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pull_deps** | **bool** | Whether dependencies should also be installed. - install when false: &#x60;rpm --upgrade --replacepkgs package.rpm&#x60; - install when true: &#x60;yum -y install package.rpm&#x60; or &#x60;zypper -y install package.rpm&#x60; | [optional] 
**source** | [**OSPolicyResourceFile**](OSPolicyResourceFile.md) |  | [optional] 

## Example

```python
from openapi_client.models.os_policy_resource_package_resource_rpm import OSPolicyResourcePackageResourceRPM

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyResourcePackageResourceRPM from a JSON string
os_policy_resource_package_resource_rpm_instance = OSPolicyResourcePackageResourceRPM.from_json(json)
# print the JSON string representation of the object
print(OSPolicyResourcePackageResourceRPM.to_json())

# convert the object into a dict
os_policy_resource_package_resource_rpm_dict = os_policy_resource_package_resource_rpm_instance.to_dict()
# create an instance of OSPolicyResourcePackageResourceRPM from a dict
os_policy_resource_package_resource_rpm_from_dict = OSPolicyResourcePackageResourceRPM.from_dict(os_policy_resource_package_resource_rpm_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


