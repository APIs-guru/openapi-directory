# PerformanceThreshold

A PerformanceThreshold is used when each window is good when that window has a sufficiently high performance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic_sli_performance** | [**BasicSli**](BasicSli.md) |  | [optional] 
**performance** | [**RequestBasedSli**](RequestBasedSli.md) |  | [optional] 
**threshold** | **float** | If window performance &gt;&#x3D; threshold, the window is counted as good. | [optional] 

## Example

```python
from openapi_client.models.performance_threshold import PerformanceThreshold

# TODO update the JSON string below
json = "{}"
# create an instance of PerformanceThreshold from a JSON string
performance_threshold_instance = PerformanceThreshold.from_json(json)
# print the JSON string representation of the object
print(PerformanceThreshold.to_json())

# convert the object into a dict
performance_threshold_dict = performance_threshold_instance.to_dict()
# create an instance of PerformanceThreshold from a dict
performance_threshold_from_dict = PerformanceThreshold.from_dict(performance_threshold_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


