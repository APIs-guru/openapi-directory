# ConnectionEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**ConsumerConnection**](ConsumerConnection.md) |  | [optional] 
**entity_id** | **str** | The service provider&#39;s ID of the entity that triggered this event | [optional] 
**entity_type** | **str** | The type entity that triggered this event | [optional] 
**event_id** | **str** | Unique reference to this request event | [optional] 
**event_type** | [**VaultEventType**](VaultEventType.md) |  | [optional] 
**execution_attempt** | **float** | The current count this request event has been attempted | [optional] 
**occurred_at** | **str** | ISO Datetime for when the original event occurred | [optional] 
**service_id** | **str** | Service provider identifier | [optional] 

## Example

```python
from openapi_client.models.connection_event import ConnectionEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionEvent from a JSON string
connection_event_instance = ConnectionEvent.from_json(json)
# print the JSON string representation of the object
print(ConnectionEvent.to_json())

# convert the object into a dict
connection_event_dict = connection_event_instance.to_dict()
# create an instance of ConnectionEvent from a dict
connection_event_from_dict = ConnectionEvent.from_dict(connection_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


