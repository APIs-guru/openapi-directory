# GetOrganizationDevicesUplinksLossAndLatency200ResponseInnerTimeSeriesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latency_ms** | **float** | Latency in milliseconds | [optional] 
**loss_percent** | **float** | Loss percentage | [optional] 
**ts** | **datetime** | Timestamp for this data point | [optional] 

## Example

```python
from openapi_client.models.get_organization_devices_uplinks_loss_and_latency200_response_inner_time_series_inner import GetOrganizationDevicesUplinksLossAndLatency200ResponseInnerTimeSeriesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationDevicesUplinksLossAndLatency200ResponseInnerTimeSeriesInner from a JSON string
get_organization_devices_uplinks_loss_and_latency200_response_inner_time_series_inner_instance = GetOrganizationDevicesUplinksLossAndLatency200ResponseInnerTimeSeriesInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationDevicesUplinksLossAndLatency200ResponseInnerTimeSeriesInner.to_json())

# convert the object into a dict
get_organization_devices_uplinks_loss_and_latency200_response_inner_time_series_inner_dict = get_organization_devices_uplinks_loss_and_latency200_response_inner_time_series_inner_instance.to_dict()
# create an instance of GetOrganizationDevicesUplinksLossAndLatency200ResponseInnerTimeSeriesInner from a dict
get_organization_devices_uplinks_loss_and_latency200_response_inner_time_series_inner_from_dict = GetOrganizationDevicesUplinksLossAndLatency200ResponseInnerTimeSeriesInner.from_dict(get_organization_devices_uplinks_loss_and_latency200_response_inner_time_series_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


