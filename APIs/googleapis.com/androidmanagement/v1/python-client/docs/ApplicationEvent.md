# ApplicationEvent

An app-related event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The creation time of the event. | [optional] 
**event_type** | **str** | App event type. | [optional] 

## Example

```python
from openapi_client.models.application_event import ApplicationEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationEvent from a JSON string
application_event_instance = ApplicationEvent.from_json(json)
# print the JSON string representation of the object
print(ApplicationEvent.to_json())

# convert the object into a dict
application_event_dict = application_event_instance.to_dict()
# create an instance of ApplicationEvent from a dict
application_event_from_dict = ApplicationEvent.from_dict(application_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


