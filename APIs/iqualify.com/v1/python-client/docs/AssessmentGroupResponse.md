# AssessmentGroupResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.assessment_group_response import AssessmentGroupResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AssessmentGroupResponse from a JSON string
assessment_group_response_instance = AssessmentGroupResponse.from_json(json)
# print the JSON string representation of the object
print(AssessmentGroupResponse.to_json())

# convert the object into a dict
assessment_group_response_dict = assessment_group_response_instance.to_dict()
# create an instance of AssessmentGroupResponse from a dict
assessment_group_response_from_dict = AssessmentGroupResponse.from_dict(assessment_group_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


