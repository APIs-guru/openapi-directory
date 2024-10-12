# NetworkConfig

Configuration parameters for a new network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth** | **str** | Interconnect bandwidth. Set only when type is CLIENT. | [optional] 
**cidr** | **str** | CIDR range of the network. | [optional] 
**id** | **str** | A transient unique identifier to identify a volume within an ProvisioningConfig request. | [optional] 
**location** | **str** | Location where to deploy the network. | [optional] 
**service_cidr** | **str** | Service CIDR, if any. | [optional] 
**type** | **str** | The type of this network. | [optional] 
**user_note** | **str** | User note field, it can be used by customers to add additional information for the BMS Ops team (b/194021617). | [optional] 
**vlan_attachments** | [**List[VlanAttachment]**](VlanAttachment.md) | List of VLAN attachments. As of now there are always 2 attachments, but it is going to change in the future (multi vlan). | [optional] 

## Example

```python
from openapi_client.models.network_config import NetworkConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkConfig from a JSON string
network_config_instance = NetworkConfig.from_json(json)
# print the JSON string representation of the object
print(NetworkConfig.to_json())

# convert the object into a dict
network_config_dict = network_config_instance.to_dict()
# create an instance of NetworkConfig from a dict
network_config_from_dict = NetworkConfig.from_dict(network_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


