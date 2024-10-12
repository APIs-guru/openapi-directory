# LogicalNetwork

Logical network data model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LogicalNetworkProperties**](LogicalNetworkProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] 
**name** | **str** | Resource Name | [optional] [readonly] 
**type** | **str** | Resource Type | [optional] [readonly] 

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


