# MetricBaselinesProperties

The response to a metric baselines query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baselines** | [**List[TimeSeriesBaseline]**](TimeSeriesBaseline.md) | The baseline for each time series that was queried. | 
**interval** | **str** | The interval (window size) for which the metric data was returned in.  This may be adjusted in the future and returned back from what was originally requested.  This is not present if a metadata request was made. | 
**namespace** | **str** | The namespace of the metrics been queried. | [optional] 
**timespan** | **str** | The timespan for which the data was retrieved. Its value consists of two datetimes concatenated, separated by &#39;/&#39;.  This may be adjusted in the future and returned back from what was originally requested. | 

## Example

```python
from openapi_client.models.metric_baselines_properties import MetricBaselinesProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MetricBaselinesProperties from a JSON string
metric_baselines_properties_instance = MetricBaselinesProperties.from_json(json)
# print the JSON string representation of the object
print(MetricBaselinesProperties.to_json())

# convert the object into a dict
metric_baselines_properties_dict = metric_baselines_properties_instance.to_dict()
# create an instance of MetricBaselinesProperties from a dict
metric_baselines_properties_from_dict = MetricBaselinesProperties.from_dict(metric_baselines_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


