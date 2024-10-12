# SubnetProperties

This contains the properties of the subnet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | This is the address range of the subnet. | [optional] 
**prefix** | **str** | This is the prefix of the subnet. | [optional] 

## Example

```python
from openapi_client.models.subnet_properties import SubnetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SubnetProperties from a JSON string
subnet_properties_instance = SubnetProperties.from_json(json)
# print the JSON string representation of the object
print(SubnetProperties.to_json())

# convert the object into a dict
subnet_properties_dict = subnet_properties_instance.to_dict()
# create an instance of SubnetProperties from a dict
subnet_properties_from_dict = SubnetProperties.from_dict(subnet_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


