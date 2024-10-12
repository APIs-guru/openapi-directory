# LogicalInterface

Logical interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Interface name. This is not a globally unique identifier. Name is unique only inside the ServerNetworkTemplate. This is of syntax or and forms part of the network template name. | [optional] 
**required** | **bool** | If true, interface must have network connected. | [optional] 
**type** | **str** | Interface type. | [optional] 

## Example

```python
from openapi_client.models.logical_interface import LogicalInterface

# TODO update the JSON string below
json = "{}"
# create an instance of LogicalInterface from a JSON string
logical_interface_instance = LogicalInterface.from_json(json)
# print the JSON string representation of the object
print(LogicalInterface.to_json())

# convert the object into a dict
logical_interface_dict = logical_interface_instance.to_dict()
# create an instance of LogicalInterface from a dict
logical_interface_from_dict = LogicalInterface.from_dict(logical_interface_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


