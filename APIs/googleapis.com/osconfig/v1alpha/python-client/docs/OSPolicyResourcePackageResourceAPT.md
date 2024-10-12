# OSPolicyResourcePackageResourceAPT

A package managed by APT. - install: `apt-get update && apt-get -y install [name]` - remove: `apt-get -y remove [name]`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. Package name. | [optional] 

## Example

```python
from openapi_client.models.os_policy_resource_package_resource_apt import OSPolicyResourcePackageResourceAPT

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyResourcePackageResourceAPT from a JSON string
os_policy_resource_package_resource_apt_instance = OSPolicyResourcePackageResourceAPT.from_json(json)
# print the JSON string representation of the object
print(OSPolicyResourcePackageResourceAPT.to_json())

# convert the object into a dict
os_policy_resource_package_resource_apt_dict = os_policy_resource_package_resource_apt_instance.to_dict()
# create an instance of OSPolicyResourcePackageResourceAPT from a dict
os_policy_resource_package_resource_apt_from_dict = OSPolicyResourcePackageResourceAPT.from_dict(os_policy_resource_package_resource_apt_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


