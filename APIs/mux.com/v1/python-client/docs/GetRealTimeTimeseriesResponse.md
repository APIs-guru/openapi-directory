# GetRealTimeTimeseriesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[RealTimeTimeseriesDatapoint]**](RealTimeTimeseriesDatapoint.md) |  | [optional] 
**timeframe** | **List[int]** |  | [optional] 
**total_row_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.get_real_time_timeseries_response import GetRealTimeTimeseriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetRealTimeTimeseriesResponse from a JSON string
get_real_time_timeseries_response_instance = GetRealTimeTimeseriesResponse.from_json(json)
# print the JSON string representation of the object
print(GetRealTimeTimeseriesResponse.to_json())

# convert the object into a dict
get_real_time_timeseries_response_dict = get_real_time_timeseries_response_instance.to_dict()
# create an instance of GetRealTimeTimeseriesResponse from a dict
get_real_time_timeseries_response_from_dict = GetRealTimeTimeseriesResponse.from_dict(get_real_time_timeseries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


