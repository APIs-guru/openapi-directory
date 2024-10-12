# NestedPowerPort


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**occupied** | **bool** |  | [optional] [readonly] 
**cable** | **int** |  | [optional] 
**device** | [**NestedDevice**](NestedDevice.md) |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_power_port import NestedPowerPort

# TODO update the JSON string below
json = "{}"
# create an instance of NestedPowerPort from a JSON string
nested_power_port_instance = NestedPowerPort.from_json(json)
# print the JSON string representation of the object
print(NestedPowerPort.to_json())

# convert the object into a dict
nested_power_port_dict = nested_power_port_instance.to_dict()
# create an instance of NestedPowerPort from a dict
nested_power_port_from_dict = NestedPowerPort.from_dict(nested_power_port_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


