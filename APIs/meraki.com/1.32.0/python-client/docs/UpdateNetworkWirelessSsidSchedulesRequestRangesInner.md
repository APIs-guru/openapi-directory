# UpdateNetworkWirelessSsidSchedulesRequestRangesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_day** | **str** | Day of when the outage ends. Can be either full day name, or three letter abbreviation | 
**end_time** | **str** | 24 hour time when the outage ends. | 
**start_day** | **str** | Day of when the outage starts. Can be either full day name, or three letter abbreviation. | 
**start_time** | **str** | 24 hour time when the outage starts. | 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_schedules_request_ranges_inner import UpdateNetworkWirelessSsidSchedulesRequestRangesInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidSchedulesRequestRangesInner from a JSON string
update_network_wireless_ssid_schedules_request_ranges_inner_instance = UpdateNetworkWirelessSsidSchedulesRequestRangesInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidSchedulesRequestRangesInner.to_json())

# convert the object into a dict
update_network_wireless_ssid_schedules_request_ranges_inner_dict = update_network_wireless_ssid_schedules_request_ranges_inner_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidSchedulesRequestRangesInner from a dict
update_network_wireless_ssid_schedules_request_ranges_inner_from_dict = UpdateNetworkWirelessSsidSchedulesRequestRangesInner.from_dict(update_network_wireless_ssid_schedules_request_ranges_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


