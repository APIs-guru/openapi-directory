# PatientPlanSummaryResourceRelationshipsActions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PatientPlanSummaryResourceRelationshipsActionsDataInner]**](PatientPlanSummaryResourceRelationshipsActionsDataInner.md) |  | [optional] 
**links** | [**PatientPlanSummaryResourceRelationshipsActionsLinks**](PatientPlanSummaryResourceRelationshipsActionsLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.patient_plan_summary_resource_relationships_actions import PatientPlanSummaryResourceRelationshipsActions

# TODO update the JSON string below
json = "{}"
# create an instance of PatientPlanSummaryResourceRelationshipsActions from a JSON string
patient_plan_summary_resource_relationships_actions_instance = PatientPlanSummaryResourceRelationshipsActions.from_json(json)
# print the JSON string representation of the object
print(PatientPlanSummaryResourceRelationshipsActions.to_json())

# convert the object into a dict
patient_plan_summary_resource_relationships_actions_dict = patient_plan_summary_resource_relationships_actions_instance.to_dict()
# create an instance of PatientPlanSummaryResourceRelationshipsActions from a dict
patient_plan_summary_resource_relationships_actions_from_dict = PatientPlanSummaryResourceRelationshipsActions.from_dict(patient_plan_summary_resource_relationships_actions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


