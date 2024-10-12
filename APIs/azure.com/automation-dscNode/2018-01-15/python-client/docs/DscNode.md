# DscNode

Definition of a DscNode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DscNodeProperties**](DscNodeProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dsc_node import DscNode

# TODO update the JSON string below
json = "{}"
# create an instance of DscNode from a JSON string
dsc_node_instance = DscNode.from_json(json)
# print the JSON string representation of the object
print(DscNode.to_json())

# convert the object into a dict
dsc_node_dict = dsc_node_instance.to_dict()
# create an instance of DscNode from a dict
dsc_node_from_dict = DscNode.from_dict(dsc_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


