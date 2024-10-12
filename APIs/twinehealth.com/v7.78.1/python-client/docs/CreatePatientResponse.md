# CreatePatientResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**PatientResource**](PatientResource.md) |  | 
**meta** | [**CreateOrUpdateMetaResponse**](CreateOrUpdateMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_patient_response import CreatePatientResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePatientResponse from a JSON string
create_patient_response_instance = CreatePatientResponse.from_json(json)
# print the JSON string representation of the object
print(CreatePatientResponse.to_json())

# convert the object into a dict
create_patient_response_dict = create_patient_response_instance.to_dict()
# create an instance of CreatePatientResponse from a dict
create_patient_response_from_dict = CreatePatientResponse.from_dict(create_patient_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


