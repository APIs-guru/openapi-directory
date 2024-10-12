# EventSourceCreateOrUpdateParameters

Parameters supplied to the Create or Update Event Source operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The kind of the event source. | 
**location** | **str** | The location of the resource. | 
**tags** | **Dict[str, str]** | Key-value pairs of additional properties for the resource. | [optional] 

## Example

```python
from openapi_client.models.event_source_create_or_update_parameters import EventSourceCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of EventSourceCreateOrUpdateParameters from a JSON string
event_source_create_or_update_parameters_instance = EventSourceCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(EventSourceCreateOrUpdateParameters.to_json())

# convert the object into a dict
event_source_create_or_update_parameters_dict = event_source_create_or_update_parameters_instance.to_dict()
# create an instance of EventSourceCreateOrUpdateParameters from a dict
event_source_create_or_update_parameters_from_dict = EventSourceCreateOrUpdateParameters.from_dict(event_source_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


