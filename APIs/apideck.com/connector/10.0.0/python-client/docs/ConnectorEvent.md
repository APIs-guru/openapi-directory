# ConnectorEvent

Unify event that is supported on the connector. Events are delivered via Webhooks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**downstream_event_type** | **str** | Downstream event type | [optional] 
**entity_type** | **str** | Unify entity type | [optional] 
**event_source** | **str** | Unify event source | [optional] 
**event_type** | **str** | Unify event type | [optional] 
**resources** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.connector_event import ConnectorEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorEvent from a JSON string
connector_event_instance = ConnectorEvent.from_json(json)
# print the JSON string representation of the object
print(ConnectorEvent.to_json())

# convert the object into a dict
connector_event_dict = connector_event_instance.to_dict()
# create an instance of ConnectorEvent from a dict
connector_event_from_dict = ConnectorEvent.from_dict(connector_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


