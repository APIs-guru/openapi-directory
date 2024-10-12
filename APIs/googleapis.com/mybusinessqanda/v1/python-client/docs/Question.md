# Question

Represents a single question and some of its answers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**Author**](Author.md) |  | [optional] 
**create_time** | **str** | Output only. The timestamp for when the question was written. | [optional] [readonly] 
**name** | **str** | Immutable. The unique name for the question. locations/*/questions/* This field will be ignored if set during question creation. | [optional] 
**text** | **str** | Required. The text of the question. It should contain at least three words and the total length should be greater than or equal to 10 characters. The maximum length is 4096 characters. | [optional] 
**top_answers** | [**List[Answer]**](Answer.md) | Output only. A list of answers to the question, sorted by upvotes. This may not be a complete list of answers depending on the request parameters (answers_per_question) | [optional] [readonly] 
**total_answer_count** | **int** | Output only. The total number of answers posted for this question. | [optional] [readonly] 
**update_time** | **str** | Output only. The timestamp for when the question was last modified. | [optional] [readonly] 
**upvote_count** | **int** | Output only. The number of upvotes for the question. | [optional] [readonly] 

## Example

```python
from openapi_client.models.question import Question

# TODO update the JSON string below
json = "{}"
# create an instance of Question from a JSON string
question_instance = Question.from_json(json)
# print the JSON string representation of the object
print(Question.to_json())

# convert the object into a dict
question_dict = question_instance.to_dict()
# create an instance of Question from a dict
question_from_dict = Question.from_dict(question_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


