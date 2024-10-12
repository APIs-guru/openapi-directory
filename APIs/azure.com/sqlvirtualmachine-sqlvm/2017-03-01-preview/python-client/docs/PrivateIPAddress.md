# PrivateIPAddress

A private IP address bound to the availability group listener.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | **str** | Private IP address bound to the availability group listener. | [optional] 
**subnet_resource_id** | **str** | Subnet used to include private IP. | [optional] 

## Example

```python
from openapi_client.models.private_ip_address import PrivateIPAddress

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateIPAddress from a JSON string
private_ip_address_instance = PrivateIPAddress.from_json(json)
# print the JSON string representation of the object
print(PrivateIPAddress.to_json())

# convert the object into a dict
private_ip_address_dict = private_ip_address_instance.to_dict()
# create an instance of PrivateIPAddress from a dict
private_ip_address_from_dict = PrivateIPAddress.from_dict(private_ip_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


