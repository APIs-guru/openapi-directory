# Ipv6Config

Details related to the IPv6 address configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gateway** | **str** | The IPv6 gateway of the network adapter. | [optional] [readonly] 
**ip_address** | **str** | The IPv6 address of the network adapter. | [optional] [readonly] 
**prefix_length** | **int** | The IPv6 prefix of the network adapter. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ipv6_config import Ipv6Config

# TODO update the JSON string below
json = "{}"
# create an instance of Ipv6Config from a JSON string
ipv6_config_instance = Ipv6Config.from_json(json)
# print the JSON string representation of the object
print(Ipv6Config.to_json())

# convert the object into a dict
ipv6_config_dict = ipv6_config_instance.to_dict()
# create an instance of Ipv6Config from a dict
ipv6_config_from_dict = Ipv6Config.from_dict(ipv6_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


