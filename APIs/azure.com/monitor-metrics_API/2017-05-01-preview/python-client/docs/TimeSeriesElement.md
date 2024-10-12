# TimeSeriesElement

A time series result type. The discriminator value is always TimeSeries in this case.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[MetricValue]**](MetricValue.md) | An array of data points representing the metric values.  This is only returned if a result type of data is specified. | [optional] 
**metadatavalues** | [**List[MetadataValue]**](MetadataValue.md) | the metadata values returned if $filter was specified in the call. | [optional] 

## Example

```python
from openapi_client.models.time_series_element import TimeSeriesElement

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeriesElement from a JSON string
time_series_element_instance = TimeSeriesElement.from_json(json)
# print the JSON string representation of the object
print(TimeSeriesElement.to_json())

# convert the object into a dict
time_series_element_dict = time_series_element_instance.to_dict()
# create an instance of TimeSeriesElement from a dict
time_series_element_from_dict = TimeSeriesElement.from_dict(time_series_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


