# UpdatePatientResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**PatientResource**](PatientResource.md) |  | 
**meta** | [**CreateOrUpdateMetaResponse**](CreateOrUpdateMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_patient_response import UpdatePatientResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePatientResponse from a JSON string
update_patient_response_instance = UpdatePatientResponse.from_json(json)
# print the JSON string representation of the object
print(UpdatePatientResponse.to_json())

# convert the object into a dict
update_patient_response_dict = update_patient_response_instance.to_dict()
# create an instance of UpdatePatientResponse from a dict
update_patient_response_from_dict = UpdatePatientResponse.from_dict(update_patient_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


