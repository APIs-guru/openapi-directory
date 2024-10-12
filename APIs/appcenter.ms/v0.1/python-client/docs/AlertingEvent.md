# AlertingEvent

Alerting event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_id** | **str** | A unique identifier for this event instance. Useful for deduplication | 
**event_timestamp** | **str** | ISO 8601 date time when event was generated | 
**properties** | **object** | Obsolete. Use emailProperties. | [optional] 

## Example

```python
from openapi_client.models.alerting_event import AlertingEvent

# TODO update the JSON string below
json = "{}"
# create an instance of AlertingEvent from a JSON string
alerting_event_instance = AlertingEvent.from_json(json)
# print the JSON string representation of the object
print(AlertingEvent.to_json())

# convert the object into a dict
alerting_event_dict = alerting_event_instance.to_dict()
# create an instance of AlertingEvent from a dict
alerting_event_from_dict = AlertingEvent.from_dict(alerting_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


