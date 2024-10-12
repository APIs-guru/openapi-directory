# GetNetworkEvents200ResponseEventsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The category that the event type belongs to | [optional] 
**client_description** | **str** | A description of the client. This is usually the client&#39;s device name. | [optional] 
**client_id** | **str** | A string identifying the client. This could be a client&#39;s MAC or IP address | [optional] 
**client_mac** | **str** | The client&#39;s MAC address. | [optional] 
**description** | **str** | A description of the event the happened. | [optional] 
**device_name** | **str** | The name of the device. Only shown if the device is an access point. | [optional] 
**device_serial** | **str** | The serial number of the device. Only shown if the device is an access point. | [optional] 
**event_data** | [**GetNetworkEvents200ResponseEventsInnerEventData**](GetNetworkEvents200ResponseEventsInnerEventData.md) |  | [optional] 
**network_id** | **str** | The ID of the network. | [optional] 
**occurred_at** | **str** | An UTC ISO8601 string of the time the event occurred at. | [optional] 
**ssid_number** | **int** | The SSID number of the device. | [optional] 
**type** | **str** | The type of event being listed. | [optional] 

## Example

```python
from openapi_client.models.get_network_events200_response_events_inner import GetNetworkEvents200ResponseEventsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkEvents200ResponseEventsInner from a JSON string
get_network_events200_response_events_inner_instance = GetNetworkEvents200ResponseEventsInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkEvents200ResponseEventsInner.to_json())

# convert the object into a dict
get_network_events200_response_events_inner_dict = get_network_events200_response_events_inner_instance.to_dict()
# create an instance of GetNetworkEvents200ResponseEventsInner from a dict
get_network_events200_response_events_inner_from_dict = GetNetworkEvents200ResponseEventsInner.from_dict(get_network_events200_response_events_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


