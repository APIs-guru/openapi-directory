# ListAnswersResponse

Response message for QuestionsAndAnswers.ListAnswers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answers** | [**List[Answer]**](Answer.md) | The requested answers. | [optional] 
**next_page_token** | **str** | If the number of answers exceeds the requested max page size, this field is populated with a token to fetch the next page of answers on a subsequent call. If there are no more answers, this field is not present in the response. | [optional] 
**total_size** | **int** | The total number of answers posted for this question across all pages. | [optional] 

## Example

```python
from openapi_client.models.list_answers_response import ListAnswersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAnswersResponse from a JSON string
list_answers_response_instance = ListAnswersResponse.from_json(json)
# print the JSON string representation of the object
print(ListAnswersResponse.to_json())

# convert the object into a dict
list_answers_response_dict = list_answers_response_instance.to_dict()
# create an instance of ListAnswersResponse from a dict
list_answers_response_from_dict = ListAnswersResponse.from_dict(list_answers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


