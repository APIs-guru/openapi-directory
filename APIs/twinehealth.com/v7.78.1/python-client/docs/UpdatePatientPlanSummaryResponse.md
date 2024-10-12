# UpdatePatientPlanSummaryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**PatientPlanSummaryResource**](PatientPlanSummaryResource.md) |  | 
**meta** | [**CreateOrUpdateMetaResponse**](CreateOrUpdateMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_patient_plan_summary_response import UpdatePatientPlanSummaryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePatientPlanSummaryResponse from a JSON string
update_patient_plan_summary_response_instance = UpdatePatientPlanSummaryResponse.from_json(json)
# print the JSON string representation of the object
print(UpdatePatientPlanSummaryResponse.to_json())

# convert the object into a dict
update_patient_plan_summary_response_dict = update_patient_plan_summary_response_instance.to_dict()
# create an instance of UpdatePatientPlanSummaryResponse from a dict
update_patient_plan_summary_response_from_dict = UpdatePatientPlanSummaryResponse.from_dict(update_patient_plan_summary_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


