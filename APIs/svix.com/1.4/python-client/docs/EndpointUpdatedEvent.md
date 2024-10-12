# EndpointUpdatedEvent

Sent when an endpoint is updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**EndpointUpdatedEventData**](EndpointUpdatedEventData.md) |  | 
**type** | **str** |  | [optional] [default to 'endpoint.updated']

## Example

```python
from openapi_client.models.endpoint_updated_event import EndpointUpdatedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointUpdatedEvent from a JSON string
endpoint_updated_event_instance = EndpointUpdatedEvent.from_json(json)
# print the JSON string representation of the object
print(EndpointUpdatedEvent.to_json())

# convert the object into a dict
endpoint_updated_event_dict = endpoint_updated_event_instance.to_dict()
# create an instance of EndpointUpdatedEvent from a dict
endpoint_updated_event_from_dict = EndpointUpdatedEvent.from_dict(endpoint_updated_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


