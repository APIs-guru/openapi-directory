# ManagedNetworkProperties

Properties of Managed Network

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connectivity** | [**ConnectivityCollection**](ConnectivityCollection.md) |  | [optional] 
**scope** | [**Scope**](Scope.md) |  | [optional] 
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**provisioning_state** | **str** | Provisioning state of the ManagedNetwork resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_network_properties import ManagedNetworkProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedNetworkProperties from a JSON string
managed_network_properties_instance = ManagedNetworkProperties.from_json(json)
# print the JSON string representation of the object
print(ManagedNetworkProperties.to_json())

# convert the object into a dict
managed_network_properties_dict = managed_network_properties_instance.to_dict()
# create an instance of ManagedNetworkProperties from a dict
managed_network_properties_from_dict = ManagedNetworkProperties.from_dict(managed_network_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


