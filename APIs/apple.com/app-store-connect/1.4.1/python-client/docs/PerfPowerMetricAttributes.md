# PerfPowerMetricAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_type** | **str** |  | [optional] 
**metric_type** | **str** |  | [optional] 
**platform** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.perf_power_metric_attributes import PerfPowerMetricAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of PerfPowerMetricAttributes from a JSON string
perf_power_metric_attributes_instance = PerfPowerMetricAttributes.from_json(json)
# print the JSON string representation of the object
print(PerfPowerMetricAttributes.to_json())

# convert the object into a dict
perf_power_metric_attributes_dict = perf_power_metric_attributes_instance.to_dict()
# create an instance of PerfPowerMetricAttributes from a dict
perf_power_metric_attributes_from_dict = PerfPowerMetricAttributes.from_dict(perf_power_metric_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


