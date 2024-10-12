# GetNetworkEvents200ResponseEventsInnerEventData

An object containing more data related to the event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aid** | **str** | The association ID of the client. | [optional] 
**channel** | **str** | The radio channel the client is connecting to. | [optional] 
**client_ip** | **str** | The client&#39;s IP address | [optional] 
**client_mac** | **str** | The client&#39;s MAC address | [optional] 
**radio** | **str** | The radio band number the client is trying to connect to. | [optional] 
**rssi** | **str** | The current received signal strength indication (RSSI) of the client connected to an AP. | [optional] 
**vap** | **str** | The virtual access point (VAP) number the client is connecting to. | [optional] 

## Example

```python
from openapi_client.models.get_network_events200_response_events_inner_event_data import GetNetworkEvents200ResponseEventsInnerEventData

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkEvents200ResponseEventsInnerEventData from a JSON string
get_network_events200_response_events_inner_event_data_instance = GetNetworkEvents200ResponseEventsInnerEventData.from_json(json)
# print the JSON string representation of the object
print(GetNetworkEvents200ResponseEventsInnerEventData.to_json())

# convert the object into a dict
get_network_events200_response_events_inner_event_data_dict = get_network_events200_response_events_inner_event_data_instance.to_dict()
# create an instance of GetNetworkEvents200ResponseEventsInnerEventData from a dict
get_network_events200_response_events_inner_event_data_from_dict = GetNetworkEvents200ResponseEventsInnerEventData.from_dict(get_network_events200_response_events_inner_event_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


