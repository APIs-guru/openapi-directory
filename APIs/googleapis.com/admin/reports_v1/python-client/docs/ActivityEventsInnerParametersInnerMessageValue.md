# ActivityEventsInnerParametersInnerMessageValue

Nested parameter value pairs associated with this parameter. Complex value type for a parameter are returned as a list of parameter values. For example, the address parameter may have a value as `[{parameter: [{name: city, value: abc}]}]`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameter** | [**List[NestedParameter]**](NestedParameter.md) | Parameter values | [optional] 

## Example

```python
from openapi_client.models.activity_events_inner_parameters_inner_message_value import ActivityEventsInnerParametersInnerMessageValue

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityEventsInnerParametersInnerMessageValue from a JSON string
activity_events_inner_parameters_inner_message_value_instance = ActivityEventsInnerParametersInnerMessageValue.from_json(json)
# print the JSON string representation of the object
print(ActivityEventsInnerParametersInnerMessageValue.to_json())

# convert the object into a dict
activity_events_inner_parameters_inner_message_value_dict = activity_events_inner_parameters_inner_message_value_instance.to_dict()
# create an instance of ActivityEventsInnerParametersInnerMessageValue from a dict
activity_events_inner_parameters_inner_message_value_from_dict = ActivityEventsInnerParametersInnerMessageValue.from_dict(activity_events_inner_parameters_inner_message_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


