# Assessment

An assessment created for a group in the Migration project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**e_tag** | **str** | For optimistic concurrency control. | [optional] 
**id** | **str** | Path reference to this assessment. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessment/{assessmentName} | [optional] [readonly] 
**name** | **str** | Unique name of an assessment. | [optional] [readonly] 
**properties** | [**AssessmentProperties**](AssessmentProperties.md) |  | 
**type** | **str** | Type of the object &#x3D; [Microsoft.Migrate/assessmentProjects/groups/assessments]. | [optional] [readonly] 

## Example

```python
from openapi_client.models.assessment import Assessment

# TODO update the JSON string below
json = "{}"
# create an instance of Assessment from a JSON string
assessment_instance = Assessment.from_json(json)
# print the JSON string representation of the object
print(Assessment.to_json())

# convert the object into a dict
assessment_dict = assessment_instance.to_dict()
# create an instance of Assessment from a dict
assessment_from_dict = Assessment.from_dict(assessment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


