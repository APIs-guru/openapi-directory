# OSPolicyResourcePackageResourceYUM

A package managed by YUM. - install: `yum -y install package` - remove: `yum -y remove package`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. Package name. | [optional] 

## Example

```python
from openapi_client.models.os_policy_resource_package_resource_yum import OSPolicyResourcePackageResourceYUM

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyResourcePackageResourceYUM from a JSON string
os_policy_resource_package_resource_yum_instance = OSPolicyResourcePackageResourceYUM.from_json(json)
# print the JSON string representation of the object
print(OSPolicyResourcePackageResourceYUM.to_json())

# convert the object into a dict
os_policy_resource_package_resource_yum_dict = os_policy_resource_package_resource_yum_instance.to_dict()
# create an instance of OSPolicyResourcePackageResourceYUM from a dict
os_policy_resource_package_resource_yum_from_dict = OSPolicyResourcePackageResourceYUM.from_dict(os_policy_resource_package_resource_yum_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


