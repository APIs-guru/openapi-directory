# BasicPerfSampleSeries

Encapsulates the metadata for basic sample series represented by a line chart

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**perf_metric_type** | **str** |  | [optional] 
**perf_unit** | **str** |  | [optional] 
**sample_series_label** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.basic_perf_sample_series import BasicPerfSampleSeries

# TODO update the JSON string below
json = "{}"
# create an instance of BasicPerfSampleSeries from a JSON string
basic_perf_sample_series_instance = BasicPerfSampleSeries.from_json(json)
# print the JSON string representation of the object
print(BasicPerfSampleSeries.to_json())

# convert the object into a dict
basic_perf_sample_series_dict = basic_perf_sample_series_instance.to_dict()
# create an instance of BasicPerfSampleSeries from a dict
basic_perf_sample_series_from_dict = BasicPerfSampleSeries.from_dict(basic_perf_sample_series_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


