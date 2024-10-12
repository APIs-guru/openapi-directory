# CreateTimeSeriesRequest

The CreateTimeSeries request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time_series** | [**List[TimeSeries]**](TimeSeries.md) | Required. The new data to be added to a list of time series. Adds at most one data point to each of several time series. The new data point must be more recent than any other point in its time series. Each TimeSeries value must fully specify a unique time series by supplying all label values for the metric and the monitored resource.The maximum number of TimeSeries objects per Create request is 200. | [optional] 

## Example

```python
from openapi_client.models.create_time_series_request import CreateTimeSeriesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTimeSeriesRequest from a JSON string
create_time_series_request_instance = CreateTimeSeriesRequest.from_json(json)
# print the JSON string representation of the object
print(CreateTimeSeriesRequest.to_json())

# convert the object into a dict
create_time_series_request_dict = create_time_series_request_instance.to_dict()
# create an instance of CreateTimeSeriesRequest from a dict
create_time_series_request_from_dict = CreateTimeSeriesRequest.from_dict(create_time_series_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


