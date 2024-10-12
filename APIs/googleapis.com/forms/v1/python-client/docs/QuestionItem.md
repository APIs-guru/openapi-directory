# QuestionItem

A form item containing a single question.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | [**Image**](Image.md) |  | [optional] 
**question** | [**Question**](Question.md) |  | [optional] 

## Example

```python
from openapi_client.models.question_item import QuestionItem

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionItem from a JSON string
question_item_instance = QuestionItem.from_json(json)
# print the JSON string representation of the object
print(QuestionItem.to_json())

# convert the object into a dict
question_item_dict = question_item_instance.to_dict()
# create an instance of QuestionItem from a dict
question_item_from_dict = QuestionItem.from_dict(question_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


