# TimeSeries

A collection of data points that describes the time-varying values of a metric. A time series is identified by a combination of a fully-specified monitored resource and a fully-specified metric. This type is used for both listing and creating time series.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**MonitoredResourceMetadata**](MonitoredResourceMetadata.md) |  | [optional] 
**metric** | [**Metric**](Metric.md) |  | [optional] 
**metric_kind** | **str** | The metric kind of the time series. When listing time series, this metric kind might be different from the metric kind of the associated metric if this time series is an alignment or reduction of other time series.When creating a time series, this field is optional. If present, it must be the same as the metric kind of the associated metric. If the associated metric&#39;s descriptor must be auto-created, then this field specifies the metric kind of the new descriptor and must be either GAUGE (the default) or CUMULATIVE. | [optional] 
**points** | [**List[Point]**](Point.md) | The data points of this time series. When listing time series, points are returned in reverse time order.When creating a time series, this field must contain exactly one point and the point&#39;s type must be the same as the value type of the associated metric. If the associated metric&#39;s descriptor must be auto-created, then the value type of the descriptor is determined by the point&#39;s type, which must be BOOL, INT64, DOUBLE, or DISTRIBUTION. | [optional] 
**resource** | [**MonitoredResource**](MonitoredResource.md) |  | [optional] 
**unit** | **str** | The units in which the metric value is reported. It is only applicable if the value_type is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of the stored metric values. | [optional] 
**value_type** | **str** | The value type of the time series. When listing time series, this value type might be different from the value type of the associated metric if this time series is an alignment or reduction of other time series.When creating a time series, this field is optional. If present, it must be the same as the type of the data in the points field. | [optional] 

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


