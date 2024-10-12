# ManagedNetworkGroup

The Managed Network Group resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Responsibility role under which this Managed Network Group will be created | [optional] 
**properties** | [**ManagedNetworkGroupProperties**](ManagedNetworkGroupProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**location** | **str** | The geo-location where the resource lives | [optional] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_network_group import ManagedNetworkGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedNetworkGroup from a JSON string
managed_network_group_instance = ManagedNetworkGroup.from_json(json)
# print the JSON string representation of the object
print(ManagedNetworkGroup.to_json())

# convert the object into a dict
managed_network_group_dict = managed_network_group_instance.to_dict()
# create an instance of ManagedNetworkGroup from a dict
managed_network_group_from_dict = ManagedNetworkGroup.from_dict(managed_network_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


