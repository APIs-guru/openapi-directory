# PatientResourceAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**List[Address]**](Address.md) |  | [optional] 
**archive_history** | [**List[ArchiveHistory]**](ArchiveHistory.md) |  | [optional] 
**archived** | **bool** |  | [optional] [readonly] 
**birth_date** | **date** |  | [optional] 
**email_address** | **str** |  | [optional] 
**enrolled_at** | **str** |  | [optional] [readonly] 
**first_access_at** | **str** |  | [optional] [readonly] 
**first_name** | **str** |  | [optional] 
**gender** | **str** |  | [optional] 
**identifiers** | [**List[PatientIdentifier]**](PatientIdentifier.md) |  | [optional] 
**invited_at** | **str** |  | [optional] [readonly] 
**last_access_at** | **str** |  | [optional] [readonly] 
**last_name** | **str** |  | [optional] 
**note** | **str** | Coach&#39;s note about the patient. Not visible to the patient. | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) |  | [optional] 
**statement** | [**PatientResourceAttributesStatement**](PatientResourceAttributesStatement.md) |  | [optional] 
**updated_at** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.patient_resource_attributes import PatientResourceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of PatientResourceAttributes from a JSON string
patient_resource_attributes_instance = PatientResourceAttributes.from_json(json)
# print the JSON string representation of the object
print(PatientResourceAttributes.to_json())

# convert the object into a dict
patient_resource_attributes_dict = patient_resource_attributes_instance.to_dict()
# create an instance of PatientResourceAttributes from a dict
patient_resource_attributes_from_dict = PatientResourceAttributes.from_dict(patient_resource_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


