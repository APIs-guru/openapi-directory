# SubnetFragment

Subnet information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_public_ip** | **str** | The permission policy of the subnet for allowing public IP addresses (i.e. Allow, Deny)). | [optional] 
**lab_subnet_name** | **str** | The name of the subnet as seen in the lab. | [optional] 
**resource_id** | **str** | The resource ID of the subnet. | [optional] 

## Example

```python
from openapi_client.models.subnet_fragment import SubnetFragment

# TODO update the JSON string below
json = "{}"
# create an instance of SubnetFragment from a JSON string
subnet_fragment_instance = SubnetFragment.from_json(json)
# print the JSON string representation of the object
print(SubnetFragment.to_json())

# convert the object into a dict
subnet_fragment_dict = subnet_fragment_instance.to_dict()
# create an instance of SubnetFragment from a dict
subnet_fragment_from_dict = SubnetFragment.from_dict(subnet_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


