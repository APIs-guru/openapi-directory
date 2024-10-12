# CreateTimeSeriesSummary

Summary of the result of a failed request to write data to a time series.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[Error]**](Error.md) | The number of points that failed to be written. Order is not guaranteed. | [optional] 
**success_point_count** | **int** | The number of points that were successfully written. | [optional] 
**total_point_count** | **int** | The number of points in the request. | [optional] 

## Example

```python
from openapi_client.models.create_time_series_summary import CreateTimeSeriesSummary

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTimeSeriesSummary from a JSON string
create_time_series_summary_instance = CreateTimeSeriesSummary.from_json(json)
# print the JSON string representation of the object
print(CreateTimeSeriesSummary.to_json())

# convert the object into a dict
create_time_series_summary_dict = create_time_series_summary_instance.to_dict()
# create an instance of CreateTimeSeriesSummary from a dict
create_time_series_summary_from_dict = CreateTimeSeriesSummary.from_dict(create_time_series_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


