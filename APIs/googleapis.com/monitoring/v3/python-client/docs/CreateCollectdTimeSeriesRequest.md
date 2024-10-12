# CreateCollectdTimeSeriesRequest

The CreateCollectdTimeSeries request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collectd_payloads** | [**List[CollectdPayload]**](CollectdPayload.md) | The collectd payloads representing the time series data. You must not include more than a single point for each time series, so no two payloads can have the same values for all of the fields plugin, plugin_instance, type, and type_instance. | [optional] 
**collectd_version** | **str** | The version of collectd that collected the data. Example: \&quot;5.3.0-192.el6\&quot;. | [optional] 
**resource** | [**MonitoredResource**](MonitoredResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_collectd_time_series_request import CreateCollectdTimeSeriesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCollectdTimeSeriesRequest from a JSON string
create_collectd_time_series_request_instance = CreateCollectdTimeSeriesRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCollectdTimeSeriesRequest.to_json())

# convert the object into a dict
create_collectd_time_series_request_dict = create_collectd_time_series_request_instance.to_dict()
# create an instance of CreateCollectdTimeSeriesRequest from a dict
create_collectd_time_series_request_from_dict = CreateCollectdTimeSeriesRequest.from_dict(create_collectd_time_series_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


