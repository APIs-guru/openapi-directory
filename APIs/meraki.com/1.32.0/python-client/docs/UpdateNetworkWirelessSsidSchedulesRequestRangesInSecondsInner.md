# UpdateNetworkWirelessSsidSchedulesRequestRangesInSecondsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **int** | Seconds since Sunday at midnight when that outage range ends. | 
**start** | **int** | Seconds since Sunday at midnight when the outage range starts. | 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_schedules_request_ranges_in_seconds_inner import UpdateNetworkWirelessSsidSchedulesRequestRangesInSecondsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidSchedulesRequestRangesInSecondsInner from a JSON string
update_network_wireless_ssid_schedules_request_ranges_in_seconds_inner_instance = UpdateNetworkWirelessSsidSchedulesRequestRangesInSecondsInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidSchedulesRequestRangesInSecondsInner.to_json())

# convert the object into a dict
update_network_wireless_ssid_schedules_request_ranges_in_seconds_inner_dict = update_network_wireless_ssid_schedules_request_ranges_in_seconds_inner_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidSchedulesRequestRangesInSecondsInner from a dict
update_network_wireless_ssid_schedules_request_ranges_in_seconds_inner_from_dict = UpdateNetworkWirelessSsidSchedulesRequestRangesInSecondsInner.from_dict(update_network_wireless_ssid_schedules_request_ranges_in_seconds_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


