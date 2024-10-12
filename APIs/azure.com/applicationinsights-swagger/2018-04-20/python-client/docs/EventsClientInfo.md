# EventsClientInfo

Client info for an event result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**browser** | **str** | Browser of the client | [optional] 
**city** | **str** | City of the client | [optional] 
**country_or_region** | **str** | Country or region of the client | [optional] 
**ip** | **str** | IP address of the client | [optional] 
**model** | **str** | Model of the client | [optional] 
**os** | **str** | Operating system of the client | [optional] 
**state_or_province** | **str** | State or province of the client | [optional] 
**type** | **str** | Type of the client | [optional] 

## Example

```python
from openapi_client.models.events_client_info import EventsClientInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EventsClientInfo from a JSON string
events_client_info_instance = EventsClientInfo.from_json(json)
# print the JSON string representation of the object
print(EventsClientInfo.to_json())

# convert the object into a dict
events_client_info_dict = events_client_info_instance.to_dict()
# create an instance of EventsClientInfo from a dict
events_client_info_from_dict = EventsClientInfo.from_dict(events_client_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


