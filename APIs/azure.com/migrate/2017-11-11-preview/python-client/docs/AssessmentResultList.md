# AssessmentResultList

List of assessments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Assessment]**](Assessment.md) | List of assessments. | [optional] 

## Example

```python
from openapi_client.models.assessment_result_list import AssessmentResultList

# TODO update the JSON string below
json = "{}"
# create an instance of AssessmentResultList from a JSON string
assessment_result_list_instance = AssessmentResultList.from_json(json)
# print the JSON string representation of the object
print(AssessmentResultList.to_json())

# convert the object into a dict
assessment_result_list_dict = assessment_result_list_instance.to_dict()
# create an instance of AssessmentResultList from a dict
assessment_result_list_from_dict = AssessmentResultList.from_dict(assessment_result_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


