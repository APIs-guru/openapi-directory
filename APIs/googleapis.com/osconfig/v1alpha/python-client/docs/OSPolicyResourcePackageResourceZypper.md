# OSPolicyResourcePackageResourceZypper

A package managed by Zypper. - install: `zypper -y install package` - remove: `zypper -y rm package`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. Package name. | [optional] 

## Example

```python
from openapi_client.models.os_policy_resource_package_resource_zypper import OSPolicyResourcePackageResourceZypper

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyResourcePackageResourceZypper from a JSON string
os_policy_resource_package_resource_zypper_instance = OSPolicyResourcePackageResourceZypper.from_json(json)
# print the JSON string representation of the object
print(OSPolicyResourcePackageResourceZypper.to_json())

# convert the object into a dict
os_policy_resource_package_resource_zypper_dict = os_policy_resource_package_resource_zypper_instance.to_dict()
# create an instance of OSPolicyResourcePackageResourceZypper from a dict
os_policy_resource_package_resource_zypper_from_dict = OSPolicyResourcePackageResourceZypper.from_dict(os_policy_resource_package_resource_zypper_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


