# PatientResourceAttributesStatement

A patient's motivation statement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**updated_at** | **str** |  | [optional] 
**updated_by** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.patient_resource_attributes_statement import PatientResourceAttributesStatement

# TODO update the JSON string below
json = "{}"
# create an instance of PatientResourceAttributesStatement from a JSON string
patient_resource_attributes_statement_instance = PatientResourceAttributesStatement.from_json(json)
# print the JSON string representation of the object
print(PatientResourceAttributesStatement.to_json())

# convert the object into a dict
patient_resource_attributes_statement_dict = patient_resource_attributes_statement_instance.to_dict()
# create an instance of PatientResourceAttributesStatement from a dict
patient_resource_attributes_statement_from_dict = PatientResourceAttributesStatement.from_dict(patient_resource_attributes_statement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


