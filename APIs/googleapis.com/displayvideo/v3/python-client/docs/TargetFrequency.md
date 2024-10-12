# TargetFrequency

Setting that controls the average number of times the ads will show to the same person over a certain period of time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_count** | **str** | The target number of times, on average, the ads will be shown to the same person in the timespan dictated by time_unit and time_unit_count. | [optional] 
**time_unit** | **str** | The unit of time in which the target frequency will be applied. The following time unit is applicable: * &#x60;TIME_UNIT_WEEKS&#x60; | [optional] 
**time_unit_count** | **int** | The number of time_unit the target frequency will last. The following restrictions apply based on the value of time_unit: * &#x60;TIME_UNIT_WEEKS&#x60; - must be 1 | [optional] 

## Example

```python
from openapi_client.models.target_frequency import TargetFrequency

# TODO update the JSON string below
json = "{}"
# create an instance of TargetFrequency from a JSON string
target_frequency_instance = TargetFrequency.from_json(json)
# print the JSON string representation of the object
print(TargetFrequency.to_json())

# convert the object into a dict
target_frequency_dict = target_frequency_instance.to_dict()
# create an instance of TargetFrequency from a dict
target_frequency_from_dict = TargetFrequency.from_dict(target_frequency_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


