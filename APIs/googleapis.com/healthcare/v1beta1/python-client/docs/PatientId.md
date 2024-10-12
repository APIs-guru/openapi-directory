# PatientId

A patient identifier and associated type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | ID type. For example, MRN or NHS. | [optional] 
**value** | **str** | The patient&#39;s unique identifier. | [optional] 

## Example

```python
from openapi_client.models.patient_id import PatientId

# TODO update the JSON string below
json = "{}"
# create an instance of PatientId from a JSON string
patient_id_instance = PatientId.from_json(json)
# print the JSON string representation of the object
print(PatientId.to_json())

# convert the object into a dict
patient_id_dict = patient_id_instance.to_dict()
# create an instance of PatientId from a dict
patient_id_from_dict = PatientId.from_dict(patient_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


