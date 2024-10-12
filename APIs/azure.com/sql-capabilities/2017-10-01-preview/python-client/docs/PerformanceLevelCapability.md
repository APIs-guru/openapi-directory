# PerformanceLevelCapability

The performance level capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit** | **str** | Unit type used to measure performance level. | [optional] [readonly] 
**value** | **float** | Performance level value. | [optional] [readonly] 

## Example

```python
from openapi_client.models.performance_level_capability import PerformanceLevelCapability

# TODO update the JSON string below
json = "{}"
# create an instance of PerformanceLevelCapability from a JSON string
performance_level_capability_instance = PerformanceLevelCapability.from_json(json)
# print the JSON string representation of the object
print(PerformanceLevelCapability.to_json())

# convert the object into a dict
performance_level_capability_dict = performance_level_capability_instance.to_dict()
# create an instance of PerformanceLevelCapability from a dict
performance_level_capability_from_dict = PerformanceLevelCapability.from_dict(performance_level_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


