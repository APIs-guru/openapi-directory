# EventSourceUpdateParameters

Parameters supplied to the Update Event Source operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Key-value pairs of additional properties for the event source. | [optional] 

## Example

```python
from openapi_client.models.event_source_update_parameters import EventSourceUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of EventSourceUpdateParameters from a JSON string
event_source_update_parameters_instance = EventSourceUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(EventSourceUpdateParameters.to_json())

# convert the object into a dict
event_source_update_parameters_dict = event_source_update_parameters_instance.to_dict()
# create an instance of EventSourceUpdateParameters from a dict
event_source_update_parameters_from_dict = EventSourceUpdateParameters.from_dict(event_source_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


