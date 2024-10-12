# PatientPlanSummaryResourceRelationshipsPatient


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ActionResourceRelationshipsPlanData**](ActionResourceRelationshipsPlanData.md) |  | [optional] 
**links** | [**PatientPlanSummaryResourceRelationshipsActionsLinks**](PatientPlanSummaryResourceRelationshipsActionsLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.patient_plan_summary_resource_relationships_patient import PatientPlanSummaryResourceRelationshipsPatient

# TODO update the JSON string below
json = "{}"
# create an instance of PatientPlanSummaryResourceRelationshipsPatient from a JSON string
patient_plan_summary_resource_relationships_patient_instance = PatientPlanSummaryResourceRelationshipsPatient.from_json(json)
# print the JSON string representation of the object
print(PatientPlanSummaryResourceRelationshipsPatient.to_json())

# convert the object into a dict
patient_plan_summary_resource_relationships_patient_dict = patient_plan_summary_resource_relationships_patient_instance.to_dict()
# create an instance of PatientPlanSummaryResourceRelationshipsPatient from a dict
patient_plan_summary_resource_relationships_patient_from_dict = PatientPlanSummaryResourceRelationshipsPatient.from_dict(patient_plan_summary_resource_relationships_patient_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


