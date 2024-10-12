# AssessmentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** |  | [optional] 
**documents** | [**List[Document]**](Document.md) |  | [optional] 
**due_date** | **datetime** |  | [optional] 
**duration_minutes** | **int** |  | [optional] 
**filename** | **str** |  | [optional] 
**hidden** | **bool** |  | [optional] [default to False]
**id** | **str** |  | [optional] 
**mark_number** | **str** |  | [optional] 
**mark_type** | **str** |  | [optional] 
**max_attempts** | **int** |  | [optional] 
**open_date** | **datetime** |  | [optional] 
**pid** | **str** |  | [optional] 
**points** | **str** |  | [optional] 
**themes** | [**List[ThemeResponse]**](ThemeResponse.md) |  | [optional] 
**title** | **str** |  | [optional] 
**total_questions** | **int** |  | [optional] 
**total_themes** | **int** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.assessment_response import AssessmentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AssessmentResponse from a JSON string
assessment_response_instance = AssessmentResponse.from_json(json)
# print the JSON string representation of the object
print(AssessmentResponse.to_json())

# convert the object into a dict
assessment_response_dict = assessment_response_instance.to_dict()
# create an instance of AssessmentResponse from a dict
assessment_response_from_dict = AssessmentResponse.from_dict(assessment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


