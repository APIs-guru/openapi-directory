# WritableFrontPort


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**occupied** | **bool** |  | [optional] [readonly] 
**cable** | [**NestedCable**](NestedCable.md) |  | [optional] 
**cable_end** | **str** |  | [optional] [readonly] 
**color** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**device** | **int** |  | 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**label** | **str** | Physical label | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**link_peers** | **List[Optional[str]]** |  Return the appropriate serializer for the link termination model.  | [optional] [readonly] 
**link_peers_type** | **str** |  | [optional] [readonly] 
**mark_connected** | **bool** | Treat as if a cable is connected | [optional] 
**module** | **int** |  | [optional] 
**name** | **str** |  | 
**rear_port** | **int** |  | 
**rear_port_position** | **int** |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**type** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_front_port import WritableFrontPort

# TODO update the JSON string below
json = "{}"
# create an instance of WritableFrontPort from a JSON string
writable_front_port_instance = WritableFrontPort.from_json(json)
# print the JSON string representation of the object
print(WritableFrontPort.to_json())

# convert the object into a dict
writable_front_port_dict = writable_front_port_instance.to_dict()
# create an instance of WritableFrontPort from a dict
writable_front_port_from_dict = WritableFrontPort.from_dict(writable_front_port_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


