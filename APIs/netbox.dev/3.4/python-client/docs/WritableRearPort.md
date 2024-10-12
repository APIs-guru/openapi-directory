# WritableRearPort


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
**positions** | **int** |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**type** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_rear_port import WritableRearPort

# TODO update the JSON string below
json = "{}"
# create an instance of WritableRearPort from a JSON string
writable_rear_port_instance = WritableRearPort.from_json(json)
# print the JSON string representation of the object
print(WritableRearPort.to_json())

# convert the object into a dict
writable_rear_port_dict = writable_rear_port_instance.to_dict()
# create an instance of WritableRearPort from a dict
writable_rear_port_from_dict = WritableRearPort.from_dict(writable_rear_port_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


