# UpdatePatientPlanSummaryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**PatientPlanSummaryResource**](PatientPlanSummaryResource.md) |  | 

## Example

```python
from openapi_client.models.update_patient_plan_summary_request import UpdatePatientPlanSummaryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePatientPlanSummaryRequest from a JSON string
update_patient_plan_summary_request_instance = UpdatePatientPlanSummaryRequest.from_json(json)
# print the JSON string representation of the object
print(UpdatePatientPlanSummaryRequest.to_json())

# convert the object into a dict
update_patient_plan_summary_request_dict = update_patient_plan_summary_request_instance.to_dict()
# create an instance of UpdatePatientPlanSummaryRequest from a dict
update_patient_plan_summary_request_from_dict = UpdatePatientPlanSummaryRequest.from_dict(update_patient_plan_summary_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


