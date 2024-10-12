# IpAddress

IP address for the container group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_name_label** | **str** | The Dns name label for the IP. | [optional] 
**fqdn** | **str** | The FQDN for the IP. | [optional] [readonly] 
**ip** | **str** | The IP exposed to the public internet. | [optional] 
**ports** | [**List[Port]**](Port.md) | The list of ports exposed on the container group. | 
**type** | **str** | Specifies if the IP is exposed to the public internet. | 

## Example

```python
from openapi_client.models.ip_address import IpAddress

# TODO update the JSON string below
json = "{}"
# create an instance of IpAddress from a JSON string
ip_address_instance = IpAddress.from_json(json)
# print the JSON string representation of the object
print(IpAddress.to_json())

# convert the object into a dict
ip_address_dict = ip_address_instance.to_dict()
# create an instance of IpAddress from a dict
ip_address_from_dict = IpAddress.from_dict(ip_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


