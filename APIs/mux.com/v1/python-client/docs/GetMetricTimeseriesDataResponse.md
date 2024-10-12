# GetMetricTimeseriesDataResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **List[List[str]]** |  | [optional] 
**timeframe** | **List[int]** |  | [optional] 
**total_row_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.get_metric_timeseries_data_response import GetMetricTimeseriesDataResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetMetricTimeseriesDataResponse from a JSON string
get_metric_timeseries_data_response_instance = GetMetricTimeseriesDataResponse.from_json(json)
# print the JSON string representation of the object
print(GetMetricTimeseriesDataResponse.to_json())

# convert the object into a dict
get_metric_timeseries_data_response_dict = get_metric_timeseries_data_response_instance.to_dict()
# create an instance of GetMetricTimeseriesDataResponse from a dict
get_metric_timeseries_data_response_from_dict = GetMetricTimeseriesDataResponse.from_dict(get_metric_timeseries_data_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


