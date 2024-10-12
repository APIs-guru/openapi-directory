# FetchPatientResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**PatientResource**](PatientResource.md) |  | 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_patient_response import FetchPatientResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchPatientResponse from a JSON string
fetch_patient_response_instance = FetchPatientResponse.from_json(json)
# print the JSON string representation of the object
print(FetchPatientResponse.to_json())

# convert the object into a dict
fetch_patient_response_dict = fetch_patient_response_instance.to_dict()
# create an instance of FetchPatientResponse from a dict
fetch_patient_response_from_dict = FetchPatientResponse.from_dict(fetch_patient_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


