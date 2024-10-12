# QuestionTimelineEventsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment_id** | **int** |  | [optional] 
**creation_date** | **int** |  | [optional] 
**down_vote_count** | **int** |  | [optional] 
**owner** | [**AnswersInnerLastEditor**](AnswersInnerLastEditor.md) |  | [optional] 
**post_id** | **int** |  | [optional] 
**question_id** | **int** |  | [optional] 
**revision_guid** | **str** |  | [optional] 
**timeline_type** | **str** |  | [optional] 
**up_vote_count** | **int** |  | [optional] 
**user** | [**AnswersInnerLastEditor**](AnswersInnerLastEditor.md) |  | [optional] 

## Example

```python
from openapi_client.models.question_timeline_events_inner import QuestionTimelineEventsInner

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionTimelineEventsInner from a JSON string
question_timeline_events_inner_instance = QuestionTimelineEventsInner.from_json(json)
# print the JSON string representation of the object
print(QuestionTimelineEventsInner.to_json())

# convert the object into a dict
question_timeline_events_inner_dict = question_timeline_events_inner_instance.to_dict()
# create an instance of QuestionTimelineEventsInner from a dict
question_timeline_events_inner_from_dict = QuestionTimelineEventsInner.from_dict(question_timeline_events_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


