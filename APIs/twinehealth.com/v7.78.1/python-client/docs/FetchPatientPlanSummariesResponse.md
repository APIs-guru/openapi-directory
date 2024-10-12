# FetchPatientPlanSummariesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PatientPlanSummaryResource]**](PatientPlanSummaryResource.md) |  | 
**included** | [**List[Resource]**](Resource.md) | Related resources which are included in the response based on the &#x60;include&#x60; param. Attributes of each resource will vary depending on the type. See [action](#operation/fetchAction), [bundle](#operation/fetchBundle) and [patient](#operation/fetchPatient)  | [optional] 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_patient_plan_summaries_response import FetchPatientPlanSummariesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchPatientPlanSummariesResponse from a JSON string
fetch_patient_plan_summaries_response_instance = FetchPatientPlanSummariesResponse.from_json(json)
# print the JSON string representation of the object
print(FetchPatientPlanSummariesResponse.to_json())

# convert the object into a dict
fetch_patient_plan_summaries_response_dict = fetch_patient_plan_summaries_response_instance.to_dict()
# create an instance of FetchPatientPlanSummariesResponse from a dict
fetch_patient_plan_summaries_response_from_dict = FetchPatientPlanSummariesResponse.from_dict(fetch_patient_plan_summaries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


