# PerfPowerMetric


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**PerfPowerMetricAttributes**](PerfPowerMetricAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.perf_power_metric import PerfPowerMetric

# TODO update the JSON string below
json = "{}"
# create an instance of PerfPowerMetric from a JSON string
perf_power_metric_instance = PerfPowerMetric.from_json(json)
# print the JSON string representation of the object
print(PerfPowerMetric.to_json())

# convert the object into a dict
perf_power_metric_dict = perf_power_metric_instance.to_dict()
# create an instance of PerfPowerMetric from a dict
perf_power_metric_from_dict = PerfPowerMetric.from_dict(perf_power_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


