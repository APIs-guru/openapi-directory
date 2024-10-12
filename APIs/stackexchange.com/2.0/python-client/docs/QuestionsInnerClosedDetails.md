# QuestionsInnerClosedDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**by_users** | **List[object]** |  | [optional] 
**description** | **str** |  | [optional] 
**on_hold** | **bool** |  | [optional] 
**original_questions** | **List[object]** |  | [optional] 
**reason** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.questions_inner_closed_details import QuestionsInnerClosedDetails

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionsInnerClosedDetails from a JSON string
questions_inner_closed_details_instance = QuestionsInnerClosedDetails.from_json(json)
# print the JSON string representation of the object
print(QuestionsInnerClosedDetails.to_json())

# convert the object into a dict
questions_inner_closed_details_dict = questions_inner_closed_details_instance.to_dict()
# create an instance of QuestionsInnerClosedDetails from a dict
questions_inner_closed_details_from_dict = QuestionsInnerClosedDetails.from_dict(questions_inner_closed_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


