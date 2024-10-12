# QuestionGroupItem

Defines a question that comprises multiple questions grouped together.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**grid** | [**Grid**](Grid.md) |  | [optional] 
**image** | [**Image**](Image.md) |  | [optional] 
**questions** | [**List[Question]**](Question.md) | Required. A list of questions that belong in this question group. A question must only belong to one group. The &#x60;kind&#x60; of the group may affect what types of questions are allowed. | [optional] 

## Example

```python
from openapi_client.models.question_group_item import QuestionGroupItem

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionGroupItem from a JSON string
question_group_item_instance = QuestionGroupItem.from_json(json)
# print the JSON string representation of the object
print(QuestionGroupItem.to_json())

# convert the object into a dict
question_group_item_dict = question_group_item_instance.to_dict()
# create an instance of QuestionGroupItem from a dict
question_group_item_from_dict = QuestionGroupItem.from_dict(question_group_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


