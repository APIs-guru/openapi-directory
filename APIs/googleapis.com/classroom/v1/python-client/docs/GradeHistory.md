# GradeHistory

The history of each grade on this submission.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actor_user_id** | **str** | The teacher who made the grade change. | [optional] 
**grade_change_type** | **str** | The type of grade change at this time in the submission grade history. | [optional] 
**grade_timestamp** | **str** | When the grade of the submission was changed. | [optional] 
**max_points** | **float** | The denominator of the grade at this time in the submission grade history. | [optional] 
**points_earned** | **float** | The numerator of the grade at this time in the submission grade history. | [optional] 

## Example

```python
from openapi_client.models.grade_history import GradeHistory

# TODO update the JSON string below
json = "{}"
# create an instance of GradeHistory from a JSON string
grade_history_instance = GradeHistory.from_json(json)
# print the JSON string representation of the object
print(GradeHistory.to_json())

# convert the object into a dict
grade_history_dict = grade_history_instance.to_dict()
# create an instance of GradeHistory from a dict
grade_history_from_dict = GradeHistory.from_dict(grade_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


