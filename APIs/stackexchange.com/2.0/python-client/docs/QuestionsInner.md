# QuestionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepted_answer_id** | **int** |  | [optional] 
**answer_count** | **int** |  | [optional] 
**answers** | **List[object]** |  | [optional] 
**body** | **str** |  | [optional] 
**body_markdown** | **str** |  | [optional] 
**bounty_amount** | **int** |  | [optional] 
**bounty_closes_date** | **int** |  | [optional] 
**bounty_user** | [**AnswersInnerLastEditor**](AnswersInnerLastEditor.md) |  | [optional] 
**can_close** | **bool** |  | [optional] 
**can_flag** | **bool** |  | [optional] 
**close_vote_count** | **int** |  | [optional] 
**closed_date** | **int** |  | [optional] 
**closed_details** | [**QuestionsInnerClosedDetails**](QuestionsInnerClosedDetails.md) |  | [optional] 
**closed_reason** | **str** |  | [optional] 
**comment_count** | **int** |  | [optional] 
**comments** | **List[object]** |  | [optional] 
**community_owned_date** | **int** |  | [optional] 
**creation_date** | **int** |  | [optional] 
**delete_vote_count** | **int** |  | [optional] 
**down_vote_count** | **int** |  | [optional] 
**downvoted** | **bool** |  | [optional] 
**favorite_count** | **int** |  | [optional] 
**favorited** | **bool** |  | [optional] 
**is_answered** | **bool** |  | [optional] 
**last_activity_date** | **int** |  | [optional] 
**last_edit_date** | **int** |  | [optional] 
**last_editor** | [**AnswersInnerLastEditor**](AnswersInnerLastEditor.md) |  | [optional] 
**link** | **str** |  | [optional] 
**locked_date** | **int** |  | [optional] 
**migrated_from** | [**QuestionsInnerMigratedFrom**](QuestionsInnerMigratedFrom.md) |  | [optional] 
**migrated_to** | [**QuestionsInnerMigratedFrom**](QuestionsInnerMigratedFrom.md) |  | [optional] 
**notice** | [**QuestionsInnerNotice**](QuestionsInnerNotice.md) |  | [optional] 
**owner** | [**AnswersInnerLastEditor**](AnswersInnerLastEditor.md) |  | [optional] 
**protected_date** | **int** |  | [optional] 
**question_id** | **int** |  | [optional] 
**reopen_vote_count** | **int** |  | [optional] 
**score** | **int** |  | [optional] 
**share_link** | **str** |  | [optional] 
**tags** | **List[object]** |  | [optional] 
**title** | **str** |  | [optional] 
**up_vote_count** | **int** |  | [optional] 
**upvoted** | **bool** |  | [optional] 
**view_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.questions_inner import QuestionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionsInner from a JSON string
questions_inner_instance = QuestionsInner.from_json(json)
# print the JSON string representation of the object
print(QuestionsInner.to_json())

# convert the object into a dict
questions_inner_dict = questions_inner_instance.to_dict()
# create an instance of QuestionsInner from a dict
questions_inner_from_dict = QuestionsInner.from_dict(questions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


