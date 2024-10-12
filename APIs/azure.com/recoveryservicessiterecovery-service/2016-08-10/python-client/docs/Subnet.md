# Subnet

Subnets of the network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_list** | **List[str]** | The list of addresses for the subnet. | [optional] 
**friendly_name** | **str** | The subnet friendly name. | [optional] 
**name** | **str** | The subnet name. | [optional] 

## Example

```python
from openapi_client.models.subnet import Subnet

# TODO update the JSON string below
json = "{}"
# create an instance of Subnet from a JSON string
subnet_instance = Subnet.from_json(json)
# print the JSON string representation of the object
print(Subnet.to_json())

# convert the object into a dict
subnet_dict = subnet_instance.to_dict()
# create an instance of Subnet from a dict
subnet_from_dict = Subnet.from_dict(subnet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


