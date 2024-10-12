# AddressSpace

AddressSpace contains an array of IP address ranges that can be used by subnets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_prefixes** | **List[str]** | Gets or sets list of address blocks reserved for this virtual network in CIDR notation | [optional] 

## Example

```python
from openapi_client.models.address_space import AddressSpace

# TODO update the JSON string below
json = "{}"
# create an instance of AddressSpace from a JSON string
address_space_instance = AddressSpace.from_json(json)
# print the JSON string representation of the object
print(AddressSpace.to_json())

# convert the object into a dict
address_space_dict = address_space_instance.to_dict()
# create an instance of AddressSpace from a dict
address_space_from_dict = AddressSpace.from_dict(address_space_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


