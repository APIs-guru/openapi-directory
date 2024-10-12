# ManagedNetworkGroupProperties

Properties of a Managed Network Group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**management_groups** | [**List[ResourceId]**](ResourceId.md) | The collection of management groups covered by the Managed Network | [optional] 
**subnets** | [**List[ResourceId]**](ResourceId.md) | The collection of  subnets covered by the Managed Network | [optional] 
**subscriptions** | [**List[ResourceId]**](ResourceId.md) | The collection of subscriptions covered by the Managed Network | [optional] 
**virtual_networks** | [**List[ResourceId]**](ResourceId.md) | The collection of virtual nets covered by the Managed Network | [optional] 
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**provisioning_state** | **str** | Provisioning state of the ManagedNetwork resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_network_group_properties import ManagedNetworkGroupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedNetworkGroupProperties from a JSON string
managed_network_group_properties_instance = ManagedNetworkGroupProperties.from_json(json)
# print the JSON string representation of the object
print(ManagedNetworkGroupProperties.to_json())

# convert the object into a dict
managed_network_group_properties_dict = managed_network_group_properties_instance.to_dict()
# create an instance of ManagedNetworkGroupProperties from a dict
managed_network_group_properties_from_dict = ManagedNetworkGroupProperties.from_dict(managed_network_group_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


