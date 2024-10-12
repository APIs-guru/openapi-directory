# UpsertAnswerRequest

Request message for QuestionsAndAnswers.UpsertAnswer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer** | [**Answer**](Answer.md) |  | [optional] 

## Example

```python
from openapi_client.models.upsert_answer_request import UpsertAnswerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpsertAnswerRequest from a JSON string
upsert_answer_request_instance = UpsertAnswerRequest.from_json(json)
# print the JSON string representation of the object
print(UpsertAnswerRequest.to_json())

# convert the object into a dict
upsert_answer_request_dict = upsert_answer_request_instance.to_dict()
# create an instance of UpsertAnswerRequest from a dict
upsert_answer_request_from_dict = UpsertAnswerRequest.from_dict(upsert_answer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


