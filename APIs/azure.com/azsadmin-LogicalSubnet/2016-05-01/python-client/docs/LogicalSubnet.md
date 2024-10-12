# LogicalSubnet

This resource represents a logical subnet.  A logical subnet is made of a subnet-vlan pair.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LogicalSubnetModel**](LogicalSubnetModel.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | The region where the resource is located. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key-value pairs. | [optional] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.logical_subnet import LogicalSubnet

# TODO update the JSON string below
json = "{}"
# create an instance of LogicalSubnet from a JSON string
logical_subnet_instance = LogicalSubnet.from_json(json)
# print the JSON string representation of the object
print(LogicalSubnet.to_json())

# convert the object into a dict
logical_subnet_dict = logical_subnet_instance.to_dict()
# create an instance of LogicalSubnet from a dict
logical_subnet_from_dict = LogicalSubnet.from_dict(logical_subnet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


