# SubmissionMarkResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assessment_id** | **str** |  | [optional] 
**assessment_item_details** | **str** |  | [optional] 
**assessment_item_name** | **str** |  | [optional] 
**course_name** | **str** |  | [optional] 
**files** | [**List[Document]**](Document.md) |  | [optional] 
**html** | **str** |  | [optional] 
**learner_email** | **str** |  | [optional] 
**learner_first_name** | **str** |  | [optional] 
**learner_last_name** | **str** |  | [optional] 
**learner_person_id** | **str** |  | [optional] 
**marks** | [**List[Mark]**](Mark.md) |  | [optional] 
**status** | **str** |  | [optional] 
**submission_date_time** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.submission_mark_response import SubmissionMarkResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubmissionMarkResponse from a JSON string
submission_mark_response_instance = SubmissionMarkResponse.from_json(json)
# print the JSON string representation of the object
print(SubmissionMarkResponse.to_json())

# convert the object into a dict
submission_mark_response_dict = submission_mark_response_instance.to_dict()
# create an instance of SubmissionMarkResponse from a dict
submission_mark_response_from_dict = SubmissionMarkResponse.from_dict(submission_mark_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


