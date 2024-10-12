# PerformanceCounterConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance** | **str** |  | [optional] 
**name** | **str** |  | 
**sampling_period** | **str** |  | 

## Example

```python
from openapi_client.models.performance_counter_configuration import PerformanceCounterConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of PerformanceCounterConfiguration from a JSON string
performance_counter_configuration_instance = PerformanceCounterConfiguration.from_json(json)
# print the JSON string representation of the object
print(PerformanceCounterConfiguration.to_json())

# convert the object into a dict
performance_counter_configuration_dict = performance_counter_configuration_instance.to_dict()
# create an instance of PerformanceCounterConfiguration from a dict
performance_counter_configuration_from_dict = PerformanceCounterConfiguration.from_dict(performance_counter_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


