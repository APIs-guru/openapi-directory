# GetNetworkEvents200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**List[GetNetworkEvents200ResponseEventsInner]**](GetNetworkEvents200ResponseEventsInner.md) | An array of events that took place in the network. | [optional] 
**message** | **str** | A message regarding the events sent. Usually &#39;null&#39; unless there are no events | [optional] 
**page_end_at** | **str** | An UTC ISO8601 string of the latest occured at time of the listed events of the page. | [optional] 
**page_start_at** | **str** | An UTC ISO8601 string of the earliest occured at time of the listed events of the page. | [optional] 

## Example

```python
from openapi_client.models.get_network_events200_response import GetNetworkEvents200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkEvents200Response from a JSON string
get_network_events200_response_instance = GetNetworkEvents200Response.from_json(json)
# print the JSON string representation of the object
print(GetNetworkEvents200Response.to_json())

# convert the object into a dict
get_network_events200_response_dict = get_network_events200_response_instance.to_dict()
# create an instance of GetNetworkEvents200Response from a dict
get_network_events200_response_from_dict = GetNetworkEvents200Response.from_dict(get_network_events200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


