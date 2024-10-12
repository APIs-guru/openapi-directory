# TimeseriesProperties

Defines the properties of a timeseries

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_interval** | **str** | The aggregation interval of the Timeseries | [optional] 
**country** | **str** | The country associated with the Timeseries. Values are country ISO codes as specified here- https://www.iso.org/iso-3166-country-codes.html | [optional] 
**end_date_time_utc** | **str** | The end DateTime of the Timeseries in UTC | [optional] 
**endpoint** | **str** | The endpoint associated with the Timeseries data point | [optional] 
**start_date_time_utc** | **str** | The start DateTime of the Timeseries in UTC | [optional] 
**timeseries_data** | [**List[TimeseriesDataPoint]**](TimeseriesDataPoint.md) | The set of data points for the timeseries | [optional] 
**timeseries_type** | **str** | The type of Timeseries | [optional] 

## Example

```python
from openapi_client.models.timeseries_properties import TimeseriesProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TimeseriesProperties from a JSON string
timeseries_properties_instance = TimeseriesProperties.from_json(json)
# print the JSON string representation of the object
print(TimeseriesProperties.to_json())

# convert the object into a dict
timeseries_properties_dict = timeseries_properties_instance.to_dict()
# create an instance of TimeseriesProperties from a dict
timeseries_properties_from_dict = TimeseriesProperties.from_dict(timeseries_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


