# TimeseriesDataPoint

Defines a timeseries datapoint used in a timeseries

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_time_utc** | **str** | The DateTime of the Timeseries data point in UTC | [optional] 
**value** | **float** | The Value of the Timeseries data point | [optional] 

## Example

```python
from openapi_client.models.timeseries_data_point import TimeseriesDataPoint

# TODO update the JSON string below
json = "{}"
# create an instance of TimeseriesDataPoint from a JSON string
timeseries_data_point_instance = TimeseriesDataPoint.from_json(json)
# print the JSON string representation of the object
print(TimeseriesDataPoint.to_json())

# convert the object into a dict
timeseries_data_point_dict = timeseries_data_point_instance.to_dict()
# create an instance of TimeseriesDataPoint from a dict
timeseries_data_point_from_dict = TimeseriesDataPoint.from_dict(timeseries_data_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


