# EndpointCreatedEvent

Sent when an endpoint is created.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**EndpointCreatedEventData**](EndpointCreatedEventData.md) |  | 
**type** | **str** |  | [optional] [default to 'endpoint.created']

## Example

```python
from openapi_client.models.endpoint_created_event import EndpointCreatedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointCreatedEvent from a JSON string
endpoint_created_event_instance = EndpointCreatedEvent.from_json(json)
# print the JSON string representation of the object
print(EndpointCreatedEvent.to_json())

# convert the object into a dict
endpoint_created_event_dict = endpoint_created_event_instance.to_dict()
# create an instance of EndpointCreatedEvent from a dict
endpoint_created_event_from_dict = EndpointCreatedEvent.from_dict(endpoint_created_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


