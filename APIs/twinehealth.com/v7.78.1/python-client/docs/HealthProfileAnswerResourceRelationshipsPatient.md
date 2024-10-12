# HealthProfileAnswerResourceRelationshipsPatient


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ActionResourceRelationshipsPlanData**](ActionResourceRelationshipsPlanData.md) |  | [optional] 
**links** | [**HealthProfileAnswerResourceRelationshipsPatientLinks**](HealthProfileAnswerResourceRelationshipsPatientLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.health_profile_answer_resource_relationships_patient import HealthProfileAnswerResourceRelationshipsPatient

# TODO update the JSON string below
json = "{}"
# create an instance of HealthProfileAnswerResourceRelationshipsPatient from a JSON string
health_profile_answer_resource_relationships_patient_instance = HealthProfileAnswerResourceRelationshipsPatient.from_json(json)
# print the JSON string representation of the object
print(HealthProfileAnswerResourceRelationshipsPatient.to_json())

# convert the object into a dict
health_profile_answer_resource_relationships_patient_dict = health_profile_answer_resource_relationships_patient_instance.to_dict()
# create an instance of HealthProfileAnswerResourceRelationshipsPatient from a dict
health_profile_answer_resource_relationships_patient_from_dict = HealthProfileAnswerResourceRelationshipsPatient.from_dict(health_profile_answer_resource_relationships_patient_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


