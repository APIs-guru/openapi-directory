# CidrIpAddress

CIDR Ip address

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_ip_address** | **str** | IP address itself. | [optional] 
**prefix_length** | **int** | The length of the prefix of the ip address. | [optional] 

## Example

```python
from openapi_client.models.cidr_ip_address import CidrIpAddress

# TODO update the JSON string below
json = "{}"
# create an instance of CidrIpAddress from a JSON string
cidr_ip_address_instance = CidrIpAddress.from_json(json)
# print the JSON string representation of the object
print(CidrIpAddress.to_json())

# convert the object into a dict
cidr_ip_address_dict = cidr_ip_address_instance.to_dict()
# create an instance of CidrIpAddress from a dict
cidr_ip_address_from_dict = CidrIpAddress.from_dict(cidr_ip_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


