# ListPerfSampleSeriesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**perf_sample_series** | [**List[PerfSampleSeries]**](PerfSampleSeries.md) | The resulting PerfSampleSeries sorted by id | [optional] 

## Example

```python
from openapi_client.models.list_perf_sample_series_response import ListPerfSampleSeriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPerfSampleSeriesResponse from a JSON string
list_perf_sample_series_response_instance = ListPerfSampleSeriesResponse.from_json(json)
# print the JSON string representation of the object
print(ListPerfSampleSeriesResponse.to_json())

# convert the object into a dict
list_perf_sample_series_response_dict = list_perf_sample_series_response_instance.to_dict()
# create an instance of ListPerfSampleSeriesResponse from a dict
list_perf_sample_series_response_from_dict = ListPerfSampleSeriesResponse.from_dict(list_perf_sample_series_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


