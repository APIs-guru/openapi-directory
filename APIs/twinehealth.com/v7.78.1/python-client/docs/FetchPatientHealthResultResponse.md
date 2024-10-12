# FetchPatientHealthResultResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PatientHealthResultResource]**](PatientHealthResultResource.md) |  | 
**links** | [**CollectionResponseLinks**](CollectionResponseLinks.md) |  | [optional] 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_patient_health_result_response import FetchPatientHealthResultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchPatientHealthResultResponse from a JSON string
fetch_patient_health_result_response_instance = FetchPatientHealthResultResponse.from_json(json)
# print the JSON string representation of the object
print(FetchPatientHealthResultResponse.to_json())

# convert the object into a dict
fetch_patient_health_result_response_dict = fetch_patient_health_result_response_instance.to_dict()
# create an instance of FetchPatientHealthResultResponse from a dict
fetch_patient_health_result_response_from_dict = FetchPatientHealthResultResponse.from_dict(fetch_patient_health_result_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


