# Events

Result of listing event summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[EventSummary]**](EventSummary.md) | The list of event summary. | [optional] [readonly] 

## Example

```python
from openapi_client.models.events import Events

# TODO update the JSON string below
json = "{}"
# create an instance of Events from a JSON string
events_instance = Events.from_json(json)
# print the JSON string representation of the object
print(Events.to_json())

# convert the object into a dict
events_dict = events_instance.to_dict()
# create an instance of Events from a dict
events_from_dict = Events.from_dict(events_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


