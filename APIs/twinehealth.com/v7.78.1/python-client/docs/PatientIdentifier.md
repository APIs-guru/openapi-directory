# PatientIdentifier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** |  | [optional] 
**system** | **str** |  | 
**unique** | **bool** | If &#x60;true&#x60;, the combination of system and value must be global unique among all patients and coaches in Fitbit Plus. | [optional] [default to True]
**value** | **str** |  | 

## Example

```python
from openapi_client.models.patient_identifier import PatientIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of PatientIdentifier from a JSON string
patient_identifier_instance = PatientIdentifier.from_json(json)
# print the JSON string representation of the object
print(PatientIdentifier.to_json())

# convert the object into a dict
patient_identifier_dict = patient_identifier_instance.to_dict()
# create an instance of PatientIdentifier from a dict
patient_identifier_from_dict = PatientIdentifier.from_dict(patient_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


