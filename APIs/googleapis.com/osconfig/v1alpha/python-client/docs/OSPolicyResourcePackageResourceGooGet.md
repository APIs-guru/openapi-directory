# OSPolicyResourcePackageResourceGooGet

A package managed by GooGet. - install: `googet -noconfirm install package` - remove: `googet -noconfirm remove package`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. Package name. | [optional] 

## Example

```python
from openapi_client.models.os_policy_resource_package_resource_goo_get import OSPolicyResourcePackageResourceGooGet

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyResourcePackageResourceGooGet from a JSON string
os_policy_resource_package_resource_goo_get_instance = OSPolicyResourcePackageResourceGooGet.from_json(json)
# print the JSON string representation of the object
print(OSPolicyResourcePackageResourceGooGet.to_json())

# convert the object into a dict
os_policy_resource_package_resource_goo_get_dict = os_policy_resource_package_resource_goo_get_instance.to_dict()
# create an instance of OSPolicyResourcePackageResourceGooGet from a dict
os_policy_resource_package_resource_goo_get_from_dict = OSPolicyResourcePackageResourceGooGet.from_dict(os_policy_resource_package_resource_goo_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


