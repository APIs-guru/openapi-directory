# GetOrganizationDevicesUplinksLossAndLatency200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip** | **str** | IP address of uplink | [optional] 
**network_id** | **str** | Network ID | [optional] 
**serial** | **str** | Serial of MX device | [optional] 
**time_series** | [**List[GetOrganizationDevicesUplinksLossAndLatency200ResponseInnerTimeSeriesInner]**](GetOrganizationDevicesUplinksLossAndLatency200ResponseInnerTimeSeriesInner.md) | Loss and latency timeseries data | [optional] 
**uplink** | **str** | Uplink interface (wan1, wan2, or cellular) | [optional] 

## Example

```python
from openapi_client.models.get_organization_devices_uplinks_loss_and_latency200_response_inner import GetOrganizationDevicesUplinksLossAndLatency200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationDevicesUplinksLossAndLatency200ResponseInner from a JSON string
get_organization_devices_uplinks_loss_and_latency200_response_inner_instance = GetOrganizationDevicesUplinksLossAndLatency200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationDevicesUplinksLossAndLatency200ResponseInner.to_json())

# convert the object into a dict
get_organization_devices_uplinks_loss_and_latency200_response_inner_dict = get_organization_devices_uplinks_loss_and_latency200_response_inner_instance.to_dict()
# create an instance of GetOrganizationDevicesUplinksLossAndLatency200ResponseInner from a dict
get_organization_devices_uplinks_loss_and_latency200_response_inner_from_dict = GetOrganizationDevicesUplinksLossAndLatency200ResponseInner.from_dict(get_organization_devices_uplinks_loss_and_latency200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


