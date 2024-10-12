# EventProperties

Event properties during the time range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_properties** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.event_properties import EventProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EventProperties from a JSON string
event_properties_instance = EventProperties.from_json(json)
# print the JSON string representation of the object
print(EventProperties.to_json())

# convert the object into a dict
event_properties_dict = event_properties_instance.to_dict()
# create an instance of EventProperties from a dict
event_properties_from_dict = EventProperties.from_dict(event_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


