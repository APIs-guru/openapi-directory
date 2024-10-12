# PredictionGradesInner

The definition of a prediction grade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**grade_name** | **str** | Name of the grade. | [optional] 
**max_score_threshold** | **int** | Maximum score threshold. | [optional] 
**min_score_threshold** | **int** | Minimum score threshold. | [optional] 

## Example

```python
from openapi_client.models.prediction_grades_inner import PredictionGradesInner

# TODO update the JSON string below
json = "{}"
# create an instance of PredictionGradesInner from a JSON string
prediction_grades_inner_instance = PredictionGradesInner.from_json(json)
# print the JSON string representation of the object
print(PredictionGradesInner.to_json())

# convert the object into a dict
prediction_grades_inner_dict = prediction_grades_inner_instance.to_dict()
# create an instance of PredictionGradesInner from a dict
prediction_grades_inner_from_dict = PredictionGradesInner.from_dict(prediction_grades_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


