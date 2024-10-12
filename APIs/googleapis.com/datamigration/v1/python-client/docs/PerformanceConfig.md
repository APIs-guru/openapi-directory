# PerformanceConfig

Performance configuration definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dump_parallel_level** | **str** | Initial dump parallelism level. | [optional] 

## Example

```python
from openapi_client.models.performance_config import PerformanceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PerformanceConfig from a JSON string
performance_config_instance = PerformanceConfig.from_json(json)
# print the JSON string representation of the object
print(PerformanceConfig.to_json())

# convert the object into a dict
performance_config_dict = performance_config_instance.to_dict()
# create an instance of PerformanceConfig from a dict
performance_config_from_dict = PerformanceConfig.from_dict(performance_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


