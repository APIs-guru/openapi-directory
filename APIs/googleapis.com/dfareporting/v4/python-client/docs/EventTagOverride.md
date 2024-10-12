# EventTagOverride

Event tag override information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether this override is enabled. | [optional] 
**id** | **str** | ID of this event tag override. This is a read-only, auto-generated field. | [optional] 

## Example

```python
from openapi_client.models.event_tag_override import EventTagOverride

# TODO update the JSON string below
json = "{}"
# create an instance of EventTagOverride from a JSON string
event_tag_override_instance = EventTagOverride.from_json(json)
# print the JSON string representation of the object
print(EventTagOverride.to_json())

# convert the object into a dict
event_tag_override_dict = event_tag_override_instance.to_dict()
# create an instance of EventTagOverride from a dict
event_tag_override_from_dict = EventTagOverride.from_dict(event_tag_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


