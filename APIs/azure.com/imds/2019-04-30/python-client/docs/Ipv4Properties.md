# Ipv4Properties

This contains the IPv4 properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private_ip_address** | **str** | This is the private IP address assigned to the interface. | [optional] 
**public_ip_address** | **str** | This is the public IP address assigned to the interface. | [optional] 

## Example

```python
from openapi_client.models.ipv4_properties import Ipv4Properties

# TODO update the JSON string below
json = "{}"
# create an instance of Ipv4Properties from a JSON string
ipv4_properties_instance = Ipv4Properties.from_json(json)
# print the JSON string representation of the object
print(Ipv4Properties.to_json())

# convert the object into a dict
ipv4_properties_dict = ipv4_properties_instance.to_dict()
# create an instance of Ipv4Properties from a dict
ipv4_properties_from_dict = Ipv4Properties.from_dict(ipv4_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


