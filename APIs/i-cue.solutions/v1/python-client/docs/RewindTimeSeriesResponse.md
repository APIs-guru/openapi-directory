# RewindTimeSeriesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_error** | **float** |  | [optional] 
**error_diff** | **float** |  | [optional] 
**icue_error** | **float** |  | [optional] 
**time_series** | **str** |  | [optional] 
**total_cost** | **float** |  | [optional] 
**use_icue** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.rewind_time_series_response import RewindTimeSeriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RewindTimeSeriesResponse from a JSON string
rewind_time_series_response_instance = RewindTimeSeriesResponse.from_json(json)
# print the JSON string representation of the object
print(RewindTimeSeriesResponse.to_json())

# convert the object into a dict
rewind_time_series_response_dict = rewind_time_series_response_instance.to_dict()
# create an instance of RewindTimeSeriesResponse from a dict
rewind_time_series_response_from_dict = RewindTimeSeriesResponse.from_dict(rewind_time_series_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


