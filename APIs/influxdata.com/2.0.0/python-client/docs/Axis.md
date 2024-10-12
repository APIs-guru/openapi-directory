# Axis

The description of a particular axis for a visualization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base** | **str** | Base represents the radix for formatting axis values. | [optional] 
**bounds** | **List[str]** | The extents of an axis in the form [lower, upper]. Clients determine whether bounds are to be inclusive or exclusive of their limits | [optional] 
**label** | **str** | Label is a description of this Axis | [optional] 
**prefix** | **str** | Prefix represents a label prefix for formatting axis values. | [optional] 
**scale** | [**AxisScale**](AxisScale.md) |  | [optional] 
**suffix** | **str** | Suffix represents a label suffix for formatting axis values. | [optional] 

## Example

```python
from openapi_client.models.axis import Axis

# TODO update the JSON string below
json = "{}"
# create an instance of Axis from a JSON string
axis_instance = Axis.from_json(json)
# print the JSON string representation of the object
print(Axis.to_json())

# convert the object into a dict
axis_dict = axis_instance.to_dict()
# create an instance of Axis from a dict
axis_from_dict = Axis.from_dict(axis_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


