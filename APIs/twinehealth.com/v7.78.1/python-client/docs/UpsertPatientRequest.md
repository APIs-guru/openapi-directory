# UpsertPatientRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**PatientResource**](PatientResource.md) |  | 
**meta** | [**UpsertPatientRequestMeta**](UpsertPatientRequestMeta.md) |  | 

## Example

```python
from openapi_client.models.upsert_patient_request import UpsertPatientRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpsertPatientRequest from a JSON string
upsert_patient_request_instance = UpsertPatientRequest.from_json(json)
# print the JSON string representation of the object
print(UpsertPatientRequest.to_json())

# convert the object into a dict
upsert_patient_request_dict = upsert_patient_request_instance.to_dict()
# create an instance of UpsertPatientRequest from a dict
upsert_patient_request_from_dict = UpsertPatientRequest.from_dict(upsert_patient_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


