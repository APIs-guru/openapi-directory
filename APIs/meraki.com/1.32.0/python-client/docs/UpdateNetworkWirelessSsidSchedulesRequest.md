# UpdateNetworkWirelessSsidSchedulesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | If true, the SSID outage schedule is enabled. | [optional] 
**ranges** | [**List[UpdateNetworkWirelessSsidSchedulesRequestRangesInner]**](UpdateNetworkWirelessSsidSchedulesRequestRangesInner.md) | List of outage ranges. Has a start date and time, and end date and time. If this parameter is passed in along with rangesInSeconds parameter, this will take precedence. | [optional] 
**ranges_in_seconds** | [**List[UpdateNetworkWirelessSsidSchedulesRequestRangesInSecondsInner]**](UpdateNetworkWirelessSsidSchedulesRequestRangesInSecondsInner.md) | List of outage ranges in seconds since Sunday at Midnight. Has a start and end. If this parameter is passed in along with the ranges parameter, ranges will take precedence. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_schedules_request import UpdateNetworkWirelessSsidSchedulesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidSchedulesRequest from a JSON string
update_network_wireless_ssid_schedules_request_instance = UpdateNetworkWirelessSsidSchedulesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidSchedulesRequest.to_json())

# convert the object into a dict
update_network_wireless_ssid_schedules_request_dict = update_network_wireless_ssid_schedules_request_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidSchedulesRequest from a dict
update_network_wireless_ssid_schedules_request_from_dict = UpdateNetworkWirelessSsidSchedulesRequest.from_dict(update_network_wireless_ssid_schedules_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


