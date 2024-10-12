# PerformanceLevel

A possible performance level of a service objective capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit** | **str** | Unit type used to measure service objective performance level. | [optional] [readonly] 
**value** | **int** | Performance level value. | [optional] [readonly] 

## Example

```python
from openapi_client.models.performance_level import PerformanceLevel

# TODO update the JSON string below
json = "{}"
# create an instance of PerformanceLevel from a JSON string
performance_level_instance = PerformanceLevel.from_json(json)
# print the JSON string representation of the object
print(PerformanceLevel.to_json())

# convert the object into a dict
performance_level_dict = performance_level_instance.to_dict()
# create an instance of PerformanceLevel from a dict
performance_level_from_dict = PerformanceLevel.from_dict(performance_level_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


