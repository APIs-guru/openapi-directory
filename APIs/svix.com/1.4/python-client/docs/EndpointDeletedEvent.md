# EndpointDeletedEvent

Sent when an endpoint is deleted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**EndpointDeletedEventData**](EndpointDeletedEventData.md) |  | 
**type** | **str** |  | [optional] [default to 'endpoint.deleted']

## Example

```python
from openapi_client.models.endpoint_deleted_event import EndpointDeletedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointDeletedEvent from a JSON string
endpoint_deleted_event_instance = EndpointDeletedEvent.from_json(json)
# print the JSON string representation of the object
print(EndpointDeletedEvent.to_json())

# convert the object into a dict
endpoint_deleted_event_dict = endpoint_deleted_event_instance.to_dict()
# create an instance of EndpointDeletedEvent from a dict
endpoint_deleted_event_from_dict = EndpointDeletedEvent.from_dict(endpoint_deleted_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


