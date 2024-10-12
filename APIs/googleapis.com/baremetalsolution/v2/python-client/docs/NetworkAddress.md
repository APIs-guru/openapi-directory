# NetworkAddress

A network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | IPv4 address to be assigned to the server. | [optional] 
**existing_network_id** | **str** | Name of the existing network to use. | [optional] 
**network_id** | **str** | Id of the network to use, within the same ProvisioningConfig request. | [optional] 

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


