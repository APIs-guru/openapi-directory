# Activity

An Activity resource is a combined view of multiple events. An activity has a list of individual events and a combined view of the common fields among all events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**combined_event** | [**Event**](Event.md) |  | [optional] 
**single_events** | [**List[Event]**](Event.md) | A list of all the Events that make up the Activity. | [optional] 

## Example

```python
from openapi_client.models.activity import Activity

# TODO update the JSON string below
json = "{}"
# create an instance of Activity from a JSON string
activity_instance = Activity.from_json(json)
# print the JSON string representation of the object
print(Activity.to_json())

# convert the object into a dict
activity_dict = activity_instance.to_dict()
# create an instance of Activity from a dict
activity_from_dict = Activity.from_dict(activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


