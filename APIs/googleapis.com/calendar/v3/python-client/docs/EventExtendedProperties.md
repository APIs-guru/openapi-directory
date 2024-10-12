# EventExtendedProperties

Extended properties of the event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private** | **Dict[str, str]** | Properties that are private to the copy of the event that appears on this calendar. | [optional] 
**shared** | **Dict[str, str]** | Properties that are shared between copies of the event on other attendees&#39; calendars. | [optional] 

## Example

```python
from openapi_client.models.event_extended_properties import EventExtendedProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EventExtendedProperties from a JSON string
event_extended_properties_instance = EventExtendedProperties.from_json(json)
# print the JSON string representation of the object
print(EventExtendedProperties.to_json())

# convert the object into a dict
event_extended_properties_dict = event_extended_properties_instance.to_dict()
# create an instance of EventExtendedProperties from a dict
event_extended_properties_from_dict = EventExtendedProperties.from_dict(event_extended_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


