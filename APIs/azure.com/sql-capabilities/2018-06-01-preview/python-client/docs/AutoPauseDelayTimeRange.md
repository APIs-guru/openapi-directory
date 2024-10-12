# AutoPauseDelayTimeRange

Supported auto pause delay time range

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default** | **int** | Default value is no value is provided | [optional] [readonly] 
**do_not_pause_value** | **int** | Value that is used to not pause (infinite delay before pause) | [optional] [readonly] 
**max_value** | **int** | Maximum value | [optional] [readonly] 
**min_value** | **int** | Minimum value | [optional] [readonly] 
**step_size** | **int** | Step value for discrete values between the minimum value and the maximum value. | [optional] [readonly] 
**unit** | **str** | Unit of time that delay is expressed in | [optional] [readonly] 

## Example

```python
from openapi_client.models.auto_pause_delay_time_range import AutoPauseDelayTimeRange

# TODO update the JSON string below
json = "{}"
# create an instance of AutoPauseDelayTimeRange from a JSON string
auto_pause_delay_time_range_instance = AutoPauseDelayTimeRange.from_json(json)
# print the JSON string representation of the object
print(AutoPauseDelayTimeRange.to_json())

# convert the object into a dict
auto_pause_delay_time_range_dict = auto_pause_delay_time_range_instance.to_dict()
# create an instance of AutoPauseDelayTimeRange from a dict
auto_pause_delay_time_range_from_dict = AutoPauseDelayTimeRange.from_dict(auto_pause_delay_time_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


