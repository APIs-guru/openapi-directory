# NetworkAddress

A network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | IP address to be assigned to the server. | [optional] 
**existing_network_id** | **str** | Name of the existing network to use. Will be of the format at--vlan for pre-intake UI networks like for eg, at-123456-vlan001 or any user-defined name like for eg, my-network-name for networks provisioned using intake UI. The field is exclusively filled only in case of an already existing network. Mutually exclusive with network_id. | [optional] 
**network_id** | **str** | Name of the network to use, within the same ProvisioningConfig request. This represents a new network being provisioned in the same request. Can have any user-defined name like for eg, my-network-name. Mutually exclusive with existing_network_id. | [optional] 

## Example

```python
from openapi_client.models.network_address import NetworkAddress

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkAddress from a JSON string
network_address_instance = NetworkAddress.from_json(json)
# print the JSON string representation of the object
print(NetworkAddress.to_json())

# convert the object into a dict
network_address_dict = network_address_instance.to_dict()
# create an instance of NetworkAddress from a dict
network_address_from_dict = NetworkAddress.from_dict(network_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


