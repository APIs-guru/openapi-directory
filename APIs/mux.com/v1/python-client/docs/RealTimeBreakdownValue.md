# RealTimeBreakdownValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concurrent_viewers** | **int** |  | [optional] 
**display_value** | **str** |  | [optional] 
**metric_value** | **float** |  | [optional] 
**negative_impact** | **int** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.real_time_breakdown_value import RealTimeBreakdownValue

# TODO update the JSON string below
json = "{}"
# create an instance of RealTimeBreakdownValue from a JSON string
real_time_breakdown_value_instance = RealTimeBreakdownValue.from_json(json)
# print the JSON string representation of the object
print(RealTimeBreakdownValue.to_json())

# convert the object into a dict
real_time_breakdown_value_dict = real_time_breakdown_value_instance.to_dict()
# create an instance of RealTimeBreakdownValue from a dict
real_time_breakdown_value_from_dict = RealTimeBreakdownValue.from_dict(real_time_breakdown_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


