# PackageSharingPolicyInfo

Represents a policy for the package sharing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_sharing_scope** | [**PackageSharingPolicyScope**](PackageSharingPolicyScope.md) |  | [optional] 
**shared_package_name** | **str** | The name of code, configuration or data package that should be shared. | [optional] 

## Example

```python
from openapi_client.models.package_sharing_policy_info import PackageSharingPolicyInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PackageSharingPolicyInfo from a JSON string
package_sharing_policy_info_instance = PackageSharingPolicyInfo.from_json(json)
# print the JSON string representation of the object
print(PackageSharingPolicyInfo.to_json())

# convert the object into a dict
package_sharing_policy_info_dict = package_sharing_policy_info_instance.to_dict()
# create an instance of PackageSharingPolicyInfo from a dict
package_sharing_policy_info_from_dict = PackageSharingPolicyInfo.from_dict(package_sharing_policy_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


