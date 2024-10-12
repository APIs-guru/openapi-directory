# EventSource

Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** | Title of the source; for example a title of a web page or an email subject. | [optional] 
**url** | **str** | URL of the source pointing to a resource. The URL scheme must be HTTP or HTTPS. | [optional] 

## Example

```python
from openapi_client.models.event_source import EventSource

# TODO update the JSON string below
json = "{}"
# create an instance of EventSource from a JSON string
event_source_instance = EventSource.from_json(json)
# print the JSON string representation of the object
print(EventSource.to_json())

# convert the object into a dict
event_source_dict = event_source_instance.to_dict()
# create an instance of EventSource from a dict
event_source_from_dict = EventSource.from_dict(event_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


