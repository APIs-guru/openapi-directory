# PatientPlanSummaryResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**PatientPlanSummaryResourceAttributes**](PatientPlanSummaryResourceAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**PatientPlanSummaryResourceLinks**](PatientPlanSummaryResourceLinks.md) |  | [optional] 
**relationships** | [**PatientPlanSummaryResourceRelationships**](PatientPlanSummaryResourceRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.patient_plan_summary_resource import PatientPlanSummaryResource

# TODO update the JSON string below
json = "{}"
# create an instance of PatientPlanSummaryResource from a JSON string
patient_plan_summary_resource_instance = PatientPlanSummaryResource.from_json(json)
# print the JSON string representation of the object
print(PatientPlanSummaryResource.to_json())

# convert the object into a dict
patient_plan_summary_resource_dict = patient_plan_summary_resource_instance.to_dict()
# create an instance of PatientPlanSummaryResource from a dict
patient_plan_summary_resource_from_dict = PatientPlanSummaryResource.from_dict(patient_plan_summary_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


