# PatientPlanSummaryResourceRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**PatientPlanSummaryResourceRelationshipsActions**](PatientPlanSummaryResourceRelationshipsActions.md) |  | 
**bundles** | [**PatientPlanSummaryResourceRelationshipsActions**](PatientPlanSummaryResourceRelationshipsActions.md) |  | 
**current_results** | [**PatientPlanSummaryResourceRelationshipsActions**](PatientPlanSummaryResourceRelationshipsActions.md) |  | [optional] 
**patient** | [**PatientPlanSummaryResourceRelationshipsPatient**](PatientPlanSummaryResourceRelationshipsPatient.md) |  | 

## Example

```python
from openapi_client.models.patient_plan_summary_resource_relationships import PatientPlanSummaryResourceRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of PatientPlanSummaryResourceRelationships from a JSON string
patient_plan_summary_resource_relationships_instance = PatientPlanSummaryResourceRelationships.from_json(json)
# print the JSON string representation of the object
print(PatientPlanSummaryResourceRelationships.to_json())

# convert the object into a dict
patient_plan_summary_resource_relationships_dict = patient_plan_summary_resource_relationships_instance.to_dict()
# create an instance of PatientPlanSummaryResourceRelationships from a dict
patient_plan_summary_resource_relationships_from_dict = PatientPlanSummaryResourceRelationships.from_dict(patient_plan_summary_resource_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


