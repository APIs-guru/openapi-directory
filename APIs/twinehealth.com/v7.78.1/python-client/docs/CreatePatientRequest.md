# CreatePatientRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**PatientCreateResource**](PatientCreateResource.md) |  | 
**meta** | [**CreatePatientRequestMeta**](CreatePatientRequestMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_patient_request import CreatePatientRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePatientRequest from a JSON string
create_patient_request_instance = CreatePatientRequest.from_json(json)
# print the JSON string representation of the object
print(CreatePatientRequest.to_json())

# convert the object into a dict
create_patient_request_dict = create_patient_request_instance.to_dict()
# create an instance of CreatePatientRequest from a dict
create_patient_request_from_dict = CreatePatientRequest.from_dict(create_patient_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


