# AssignmentMarkResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assessment_id** | **str** |  | [optional] 
**assessment_item_details** | **str** |  | [optional] 
**assessment_item_name** | **str** |  | [optional] 
**course_name** | **str** |  | [optional] 
**learner_email** | **str** |  | [optional] 
**learner_first_name** | **str** |  | [optional] 
**learner_last_name** | **str** |  | [optional] 
**learner_person_id** | **str** |  | [optional] 
**mark** | **str** |  | [optional] 
**mark_feedback** | **str** |  | [optional] 
**marked_by** | **str** |  | [optional] 
**marked_by_evaluator** | **bool** |  | [optional] 
**marked_by_facilitator** | **bool** |  | [optional] 
**marked_by_marker** | **bool** |  | [optional] 
**marked_date_time** | **datetime** |  | [optional] 
**submission_date_time** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.assignment_mark_response import AssignmentMarkResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentMarkResponse from a JSON string
assignment_mark_response_instance = AssignmentMarkResponse.from_json(json)
# print the JSON string representation of the object
print(AssignmentMarkResponse.to_json())

# convert the object into a dict
assignment_mark_response_dict = assignment_mark_response_instance.to_dict()
# create an instance of AssignmentMarkResponse from a dict
assignment_mark_response_from_dict = AssignmentMarkResponse.from_dict(assignment_mark_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


