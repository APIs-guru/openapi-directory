# OSPolicyResourceGroup

Resource groups provide a mechanism to group OS policy resources. Resource groups enable OS policy authors to create a single OS policy to be applied to VMs running different operating Systems. When the OS policy is applied to a target VM, the appropriate resource group within the OS policy is selected based on the `OSFilter` specified within the resource group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventory_filters** | [**List[OSPolicyInventoryFilter]**](OSPolicyInventoryFilter.md) | List of inventory filters for the resource group. The resources in this resource group are applied to the target VM if it satisfies at least one of the following inventory filters. For example, to apply this resource group to VMs running either &#x60;RHEL&#x60; or &#x60;CentOS&#x60; operating systems, specify 2 items for the list with following values: inventory_filters[0].os_short_name&#x3D;&#39;rhel&#39; and inventory_filters[1].os_short_name&#x3D;&#39;centos&#39; If the list is empty, this resource group will be applied to the target VM unconditionally. | [optional] 
**resources** | [**List[OSPolicyResource]**](OSPolicyResource.md) | Required. List of resources configured for this resource group. The resources are executed in the exact order specified here. | [optional] 

## Example

```python
from openapi_client.models.os_policy_resource_group import OSPolicyResourceGroup

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyResourceGroup from a JSON string
os_policy_resource_group_instance = OSPolicyResourceGroup.from_json(json)
# print the JSON string representation of the object
print(OSPolicyResourceGroup.to_json())

# convert the object into a dict
os_policy_resource_group_dict = os_policy_resource_group_instance.to_dict()
# create an instance of OSPolicyResourceGroup from a dict
os_policy_resource_group_from_dict = OSPolicyResourceGroup.from_dict(os_policy_resource_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


