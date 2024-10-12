# Ipv6Properties

This contains the IPv6 properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private_ip_address** | **str** | This is the private IPv6 address assigned to the interface. | [optional] 

## Example

```python
from openapi_client.models.ipv6_properties import Ipv6Properties

# TODO update the JSON string below
json = "{}"
# create an instance of Ipv6Properties from a JSON string
ipv6_properties_instance = Ipv6Properties.from_json(json)
# print the JSON string representation of the object
print(Ipv6Properties.to_json())

# convert the object into a dict
ipv6_properties_dict = ipv6_properties_instance.to_dict()
# create an instance of Ipv6Properties from a dict
ipv6_properties_from_dict = Ipv6Properties.from_dict(ipv6_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


