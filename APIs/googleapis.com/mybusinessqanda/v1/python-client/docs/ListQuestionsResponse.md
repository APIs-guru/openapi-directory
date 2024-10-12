# ListQuestionsResponse

Response message for QuestionsAndAnswers.ListQuestions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If the number of questions exceeds the requested max page size, this field is populated with a token to fetch the next page of questions on a subsequent call. If there are no more questions, this field is not present in the response. | [optional] 
**questions** | [**List[Question]**](Question.md) | The requested questions, | [optional] 
**total_size** | **int** | The total number of questions posted for this location across all pages. | [optional] 

## Example

```python
from openapi_client.models.list_questions_response import ListQuestionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListQuestionsResponse from a JSON string
list_questions_response_instance = ListQuestionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListQuestionsResponse.to_json())

# convert the object into a dict
list_questions_response_dict = list_questions_response_instance.to_dict()
# create an instance of ListQuestionsResponse from a dict
list_questions_response_from_dict = ListQuestionsResponse.from_dict(list_questions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


