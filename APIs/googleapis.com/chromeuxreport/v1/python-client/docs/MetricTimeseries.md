# MetricTimeseries

A `metric timeseries` is a set of user experience data for a single web performance metric, like \"first contentful paint\". It contains a summary histogram of real world Chrome usage as a series of `bins`, where each bin has density values for a particular time period.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fraction_timeseries** | [**Dict[str, FractionTimeseries]**](FractionTimeseries.md) | Mapping from labels to timeseries of fractions attributed to this label. | [optional] 
**histogram_timeseries** | [**List[TimeseriesBin]**](TimeseriesBin.md) | The histogram of user experiences for a metric. The histogram will have at least one bin and the densities of all bins will add up to ~1, for each timeseries entry. | [optional] 
**percentiles_timeseries** | [**TimeseriesPercentiles**](TimeseriesPercentiles.md) |  | [optional] 

## Example

```python
from openapi_client.models.metric_timeseries import MetricTimeseries

# TODO update the JSON string below
json = "{}"
# create an instance of MetricTimeseries from a JSON string
metric_timeseries_instance = MetricTimeseries.from_json(json)
# print the JSON string representation of the object
print(MetricTimeseries.to_json())

# convert the object into a dict
metric_timeseries_dict = metric_timeseries_instance.to_dict()
# create an instance of MetricTimeseries from a dict
metric_timeseries_from_dict = MetricTimeseries.from_dict(metric_timeseries_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


