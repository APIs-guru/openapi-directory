# RowQuestion

Configuration for a question that is part of a question group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** | Required. The title for the single row in the QuestionGroupItem. | [optional] 

## Example

```python
from openapi_client.models.row_question import RowQuestion

# TODO update the JSON string below
json = "{}"
# create an instance of RowQuestion from a JSON string
row_question_instance = RowQuestion.from_json(json)
# print the JSON string representation of the object
print(RowQuestion.to_json())

# convert the object into a dict
row_question_dict = row_question_instance.to_dict()
# create an instance of RowQuestion from a dict
row_question_from_dict = RowQuestion.from_dict(row_question_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


