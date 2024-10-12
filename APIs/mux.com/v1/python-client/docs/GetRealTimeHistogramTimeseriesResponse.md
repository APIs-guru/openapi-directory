# GetRealTimeHistogramTimeseriesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[RealTimeHistogramTimeseriesDatapoint]**](RealTimeHistogramTimeseriesDatapoint.md) |  | [optional] 
**meta** | [**GetRealTimeHistogramTimeseriesResponseMeta**](GetRealTimeHistogramTimeseriesResponseMeta.md) |  | [optional] 
**timeframe** | **List[int]** |  | [optional] 
**total_row_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.get_real_time_histogram_timeseries_response import GetRealTimeHistogramTimeseriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetRealTimeHistogramTimeseriesResponse from a JSON string
get_real_time_histogram_timeseries_response_instance = GetRealTimeHistogramTimeseriesResponse.from_json(json)
# print the JSON string representation of the object
print(GetRealTimeHistogramTimeseriesResponse.to_json())

# convert the object into a dict
get_real_time_histogram_timeseries_response_dict = get_real_time_histogram_timeseries_response_instance.to_dict()
# create an instance of GetRealTimeHistogramTimeseriesResponse from a dict
get_real_time_histogram_timeseries_response_from_dict = GetRealTimeHistogramTimeseriesResponse.from_dict(get_real_time_histogram_timeseries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


