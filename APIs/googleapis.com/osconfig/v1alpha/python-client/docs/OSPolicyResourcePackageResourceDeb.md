# OSPolicyResourcePackageResourceDeb

A deb package file. dpkg packages only support INSTALLED state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pull_deps** | **bool** | Whether dependencies should also be installed. - install when false: &#x60;dpkg -i package&#x60; - install when true: &#x60;apt-get update &amp;&amp; apt-get -y install package.deb&#x60; | [optional] 
**source** | [**OSPolicyResourceFile**](OSPolicyResourceFile.md) |  | [optional] 

## Example

```python
from openapi_client.models.os_policy_resource_package_resource_deb import OSPolicyResourcePackageResourceDeb

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyResourcePackageResourceDeb from a JSON string
os_policy_resource_package_resource_deb_instance = OSPolicyResourcePackageResourceDeb.from_json(json)
# print the JSON string representation of the object
print(OSPolicyResourcePackageResourceDeb.to_json())

# convert the object into a dict
os_policy_resource_package_resource_deb_dict = os_policy_resource_package_resource_deb_instance.to_dict()
# create an instance of OSPolicyResourcePackageResourceDeb from a dict
os_policy_resource_package_resource_deb_from_dict = OSPolicyResourcePackageResourceDeb.from_dict(os_policy_resource_package_resource_deb_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


