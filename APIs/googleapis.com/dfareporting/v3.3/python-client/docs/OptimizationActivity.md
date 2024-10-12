# OptimizationActivity

Creative optimization activity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**floodlight_activity_id** | **str** | Floodlight activity ID of this optimization activity. This is a required field. | [optional] 
**floodlight_activity_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**weight** | **int** | Weight associated with this optimization. The weight assigned will be understood in proportion to the weights assigned to the other optimization activities. Value must be greater than or equal to 1. | [optional] 

## Example

```python
from openapi_client.models.optimization_activity import OptimizationActivity

# TODO update the JSON string below
json = "{}"
# create an instance of OptimizationActivity from a JSON string
optimization_activity_instance = OptimizationActivity.from_json(json)
# print the JSON string representation of the object
print(OptimizationActivity.to_json())

# convert the object into a dict
optimization_activity_dict = optimization_activity_instance.to_dict()
# create an instance of OptimizationActivity from a dict
optimization_activity_from_dict = OptimizationActivity.from_dict(optimization_activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


