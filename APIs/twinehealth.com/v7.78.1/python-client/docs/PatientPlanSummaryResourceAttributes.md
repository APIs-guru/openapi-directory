# PatientPlanSummaryResourceAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adherence** | **object** |  | [optional] [readonly] 
**critical** | **Dict[str, object]** |  | [optional] 
**effective_from** | **str** |  | [optional] [readonly] 
**time_zone** | **str** |  | [optional] 
**window_notification_times** | [**PatientPlanSummaryResourceAttributesWindowNotificationTimes**](PatientPlanSummaryResourceAttributesWindowNotificationTimes.md) |  | [optional] 
**window_order** | [**List[PatientPlanSummaryResourceAttributesWindowOrderInner]**](PatientPlanSummaryResourceAttributesWindowOrderInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.patient_plan_summary_resource_attributes import PatientPlanSummaryResourceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of PatientPlanSummaryResourceAttributes from a JSON string
patient_plan_summary_resource_attributes_instance = PatientPlanSummaryResourceAttributes.from_json(json)
# print the JSON string representation of the object
print(PatientPlanSummaryResourceAttributes.to_json())

# convert the object into a dict
patient_plan_summary_resource_attributes_dict = patient_plan_summary_resource_attributes_instance.to_dict()
# create an instance of PatientPlanSummaryResourceAttributes from a dict
patient_plan_summary_resource_attributes_from_dict = PatientPlanSummaryResourceAttributes.from_dict(patient_plan_summary_resource_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


