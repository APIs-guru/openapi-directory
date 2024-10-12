# FeedbackRecordDTO

Active learning feedback record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**qna_id** | **int** | The qnaId for which the suggested question is provided as feedback. | [optional] 
**user_id** | **str** | Unique identifier for the user. | [optional] 
**user_question** | **str** | The suggested question being provided as feedback. | [optional] 

## Example

```python
from openapi_client.models.feedback_record_dto import FeedbackRecordDTO

# TODO update the JSON string below
json = "{}"
# create an instance of FeedbackRecordDTO from a JSON string
feedback_record_dto_instance = FeedbackRecordDTO.from_json(json)
# print the JSON string representation of the object
print(FeedbackRecordDTO.to_json())

# convert the object into a dict
feedback_record_dto_dict = feedback_record_dto_instance.to_dict()
# create an instance of FeedbackRecordDTO from a dict
feedback_record_dto_from_dict = FeedbackRecordDTO.from_dict(feedback_record_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


