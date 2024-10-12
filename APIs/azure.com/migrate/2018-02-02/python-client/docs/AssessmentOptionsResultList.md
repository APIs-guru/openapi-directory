# AssessmentOptionsResultList

List of assessment options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reserved_instance_vm_families** | **List[str]** | List of supported VM Families. | [optional] [readonly] 
**vm_families** | [**List[VmFamily]**](VmFamily.md) | Dictionary of VM families grouped by vm family name describing the targeted azure locations of VM family and the category of the family. | [optional] [readonly] 

## Example

```python
from openapi_client.models.assessment_options_result_list import AssessmentOptionsResultList

# TODO update the JSON string below
json = "{}"
# create an instance of AssessmentOptionsResultList from a JSON string
assessment_options_result_list_instance = AssessmentOptionsResultList.from_json(json)
# print the JSON string representation of the object
print(AssessmentOptionsResultList.to_json())

# convert the object into a dict
assessment_options_result_list_dict = assessment_options_result_list_instance.to_dict()
# create an instance of AssessmentOptionsResultList from a dict
assessment_options_result_list_from_dict = AssessmentOptionsResultList.from_dict(assessment_options_result_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


