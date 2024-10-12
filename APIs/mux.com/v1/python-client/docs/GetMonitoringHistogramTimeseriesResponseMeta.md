# GetMonitoringHistogramTimeseriesResponseMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buckets** | [**List[MonitoringHistogramTimeseriesBucket]**](MonitoringHistogramTimeseriesBucket.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_monitoring_histogram_timeseries_response_meta import GetMonitoringHistogramTimeseriesResponseMeta

# TODO update the JSON string below
json = "{}"
# create an instance of GetMonitoringHistogramTimeseriesResponseMeta from a JSON string
get_monitoring_histogram_timeseries_response_meta_instance = GetMonitoringHistogramTimeseriesResponseMeta.from_json(json)
# print the JSON string representation of the object
print(GetMonitoringHistogramTimeseriesResponseMeta.to_json())

# convert the object into a dict
get_monitoring_histogram_timeseries_response_meta_dict = get_monitoring_histogram_timeseries_response_meta_instance.to_dict()
# create an instance of GetMonitoringHistogramTimeseriesResponseMeta from a dict
get_monitoring_histogram_timeseries_response_meta_from_dict = GetMonitoringHistogramTimeseriesResponseMeta.from_dict(get_monitoring_histogram_timeseries_response_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


