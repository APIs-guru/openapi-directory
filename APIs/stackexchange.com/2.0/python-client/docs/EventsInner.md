# EventsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_date** | **int** |  | [optional] 
**event_type** | **str** |  | [optional] 
**excerpt** | **str** |  | [optional] 
**link** | **str** |  | [optional] 
**the_id_of_the_object__answer_comment_question_or_user_the_event_describes** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.events_inner import EventsInner

# TODO update the JSON string below
json = "{}"
# create an instance of EventsInner from a JSON string
events_inner_instance = EventsInner.from_json(json)
# print the JSON string representation of the object
print(EventsInner.to_json())

# convert the object into a dict
events_inner_dict = events_inner_instance.to_dict()
# create an instance of EventsInner from a dict
events_inner_from_dict = EventsInner.from_dict(events_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


