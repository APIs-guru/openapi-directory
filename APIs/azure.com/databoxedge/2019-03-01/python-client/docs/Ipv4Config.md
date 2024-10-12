# Ipv4Config

Details related to the IPv4 address configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gateway** | **str** | The IPv4 gateway of the network adapter. | [optional] [readonly] 
**ip_address** | **str** | The IPv4 address of the network adapter. | [optional] [readonly] 
**subnet** | **str** | The IPv4 subnet of the network adapter. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ipv4_config import Ipv4Config

# TODO update the JSON string below
json = "{}"
# create an instance of Ipv4Config from a JSON string
ipv4_config_instance = Ipv4Config.from_json(json)
# print the JSON string representation of the object
print(Ipv4Config.to_json())

# convert the object into a dict
ipv4_config_dict = ipv4_config_instance.to_dict()
# create an instance of Ipv4Config from a dict
ipv4_config_from_dict = Ipv4Config.from_dict(ipv4_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


