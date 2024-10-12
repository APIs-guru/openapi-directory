# LogicalNetwork

This resource represents a logical partition of physical network that is dedicated for a particular purpose.  A logical network comprises a collection of logical subnets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LogicalNetworkModel**](LogicalNetworkModel.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | The region where the resource is located. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key-value pairs. | [optional] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.logical_network import LogicalNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of LogicalNetwork from a JSON string
logical_network_instance = LogicalNetwork.from_json(json)
# print the JSON string representation of the object
print(LogicalNetwork.to_json())

# convert the object into a dict
logical_network_dict = logical_network_instance.to_dict()
# create an instance of LogicalNetwork from a dict
logical_network_from_dict = LogicalNetwork.from_dict(logical_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


