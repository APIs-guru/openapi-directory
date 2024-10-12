# PatientScope

Apply consents given by a list of patients.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**patient_ids** | **List[str]** | Optional. The list of patient IDs whose Consent resources will be enforced. At most 10,000 patients can be specified. An empty list is equivalent to all patients (meaning the entire FHIR store). | [optional] 

## Example

```python
from openapi_client.models.patient_scope import PatientScope

# TODO update the JSON string below
json = "{}"
# create an instance of PatientScope from a JSON string
patient_scope_instance = PatientScope.from_json(json)
# print the JSON string representation of the object
print(PatientScope.to_json())

# convert the object into a dict
patient_scope_dict = patient_scope_instance.to_dict()
# create an instance of PatientScope from a dict
patient_scope_from_dict = PatientScope.from_dict(patient_scope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


