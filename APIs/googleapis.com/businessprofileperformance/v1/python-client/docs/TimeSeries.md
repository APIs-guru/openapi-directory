# TimeSeries

Represents a timeseries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dated_values** | [**List[DatedValue]**](DatedValue.md) | List of datapoints in the timeseries, where each datapoint is a date-value pair. | [optional] 

## Example

```python
from openapi_client.models.time_series import TimeSeries

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeries from a JSON string
time_series_instance = TimeSeries.from_json(json)
# print the JSON string representation of the object
print(TimeSeries.to_json())

# convert the object into a dict
time_series_dict = time_series_instance.to_dict()
# create an instance of TimeSeries from a dict
time_series_from_dict = TimeSeries.from_dict(time_series_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


