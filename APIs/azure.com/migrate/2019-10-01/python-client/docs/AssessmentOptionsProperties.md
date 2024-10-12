# AssessmentOptionsProperties

Assessment options properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reserved_instance_supported_currencies** | **List[str]** | List of supported currencies for reserved instances. | [optional] [readonly] 
**reserved_instance_supported_locations** | **List[str]** | List of supported Azure regions for reserved instances. | [optional] [readonly] 
**reserved_instance_supported_offers** | **List[str]** | List of supported Azure offer codes for reserved instances. | [optional] [readonly] 
**reserved_instance_vm_families** | **List[str]** | List of supported VM Families. | [optional] [readonly] 
**vm_families** | [**List[VmFamily]**](VmFamily.md) | Dictionary of VM families grouped by vm family name describing the targeted azure locations of VM family and the category of the family. | [optional] [readonly] 

## Example

```python
from openapi_client.models.assessment_options_properties import AssessmentOptionsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AssessmentOptionsProperties from a JSON string
assessment_options_properties_instance = AssessmentOptionsProperties.from_json(json)
# print the JSON string representation of the object
print(AssessmentOptionsProperties.to_json())

# convert the object into a dict
assessment_options_properties_dict = assessment_options_properties_instance.to_dict()
# create an instance of AssessmentOptionsProperties from a dict
assessment_options_properties_from_dict = AssessmentOptionsProperties.from_dict(assessment_options_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


