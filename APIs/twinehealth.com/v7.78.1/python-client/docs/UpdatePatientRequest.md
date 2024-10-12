# UpdatePatientRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**PatientResource**](PatientResource.md) |  | 

## Example

```python
from openapi_client.models.update_patient_request import UpdatePatientRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePatientRequest from a JSON string
update_patient_request_instance = UpdatePatientRequest.from_json(json)
# print the JSON string representation of the object
print(UpdatePatientRequest.to_json())

# convert the object into a dict
update_patient_request_dict = update_patient_request_instance.to_dict()
# create an instance of UpdatePatientRequest from a dict
update_patient_request_from_dict = UpdatePatientRequest.from_dict(update_patient_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


