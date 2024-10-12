# FrontPortRearPort


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**label** | **str** | Physical label | [optional] 
**name** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.front_port_rear_port import FrontPortRearPort

# TODO update the JSON string below
json = "{}"
# create an instance of FrontPortRearPort from a JSON string
front_port_rear_port_instance = FrontPortRearPort.from_json(json)
# print the JSON string representation of the object
print(FrontPortRearPort.to_json())

# convert the object into a dict
front_port_rear_port_dict = front_port_rear_port_instance.to_dict()
# create an instance of FrontPortRearPort from a dict
front_port_rear_port_from_dict = FrontPortRearPort.from_dict(front_port_rear_port_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


