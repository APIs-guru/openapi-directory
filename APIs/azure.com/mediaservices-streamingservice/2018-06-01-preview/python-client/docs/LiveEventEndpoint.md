# LiveEventEndpoint

The Live Event endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protocol** | **str** | The endpoint protocol. | [optional] 
**url** | **str** | The endpoint URL. | [optional] 

## Example

```python
from openapi_client.models.live_event_endpoint import LiveEventEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of LiveEventEndpoint from a JSON string
live_event_endpoint_instance = LiveEventEndpoint.from_json(json)
# print the JSON string representation of the object
print(LiveEventEndpoint.to_json())

# convert the object into a dict
live_event_endpoint_dict = live_event_endpoint_instance.to_dict()
# create an instance of LiveEventEndpoint from a dict
live_event_endpoint_from_dict = LiveEventEndpoint.from_dict(live_event_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


