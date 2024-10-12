# EventSchema

Event schema of all events within a given search span. Event schema is a set of property definitions. Properties are identified by both name and type. Different events can have properties with same name, but different type. Event schema may not be contain all persisted properties when there are too many properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**List[EventProperty]**](EventProperty.md) | A set of property definitions. When environment has no data, the returned array is empty. | [optional] [readonly] 

## Example

```python
from openapi_client.models.event_schema import EventSchema

# TODO update the JSON string below
json = "{}"
# create an instance of EventSchema from a JSON string
event_schema_instance = EventSchema.from_json(json)
# print the JSON string representation of the object
print(EventSchema.to_json())

# convert the object into a dict
event_schema_dict = event_schema_instance.to_dict()
# create an instance of EventSchema from a dict
event_schema_from_dict = EventSchema.from_dict(event_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


