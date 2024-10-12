# PerfSampleSeries

Resource representing a collection of performance samples (or data points)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic_perf_sample_series** | [**BasicPerfSampleSeries**](BasicPerfSampleSeries.md) |  | [optional] 
**execution_id** | **str** | A tool results execution ID. @OutputOnly | [optional] 
**history_id** | **str** | A tool results history ID. @OutputOnly | [optional] 
**project_id** | **str** | The cloud project @OutputOnly | [optional] 
**sample_series_id** | **str** | A sample series id @OutputOnly | [optional] 
**step_id** | **str** | A tool results step ID. @OutputOnly | [optional] 

## Example

```python
from openapi_client.models.perf_sample_series import PerfSampleSeries

# TODO update the JSON string below
json = "{}"
# create an instance of PerfSampleSeries from a JSON string
perf_sample_series_instance = PerfSampleSeries.from_json(json)
# print the JSON string representation of the object
print(PerfSampleSeries.to_json())

# convert the object into a dict
perf_sample_series_dict = perf_sample_series_instance.to_dict()
# create an instance of PerfSampleSeries from a dict
perf_sample_series_from_dict = PerfSampleSeries.from_dict(perf_sample_series_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


