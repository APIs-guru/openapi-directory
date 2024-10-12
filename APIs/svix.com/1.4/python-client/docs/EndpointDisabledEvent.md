# EndpointDisabledEvent

Sent when an endpoint has been automatically disabled after continuous failures.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**EndpointDisabledEventData**](EndpointDisabledEventData.md) |  | 
**type** | **str** |  | [optional] [default to 'endpoint.disabled']

## Example

```python
from openapi_client.models.endpoint_disabled_event import EndpointDisabledEvent

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointDisabledEvent from a JSON string
endpoint_disabled_event_instance = EndpointDisabledEvent.from_json(json)
# print the JSON string representation of the object
print(EndpointDisabledEvent.to_json())

# convert the object into a dict
endpoint_disabled_event_dict = endpoint_disabled_event_instance.to_dict()
# create an instance of EndpointDisabledEvent from a dict
endpoint_disabled_event_from_dict = EndpointDisabledEvent.from_dict(endpoint_disabled_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


