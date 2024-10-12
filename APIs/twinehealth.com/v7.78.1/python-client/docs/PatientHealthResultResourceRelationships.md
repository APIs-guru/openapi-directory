# PatientHealthResultResourceRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**ActionResourceRelationshipsPlan**](ActionResourceRelationshipsPlan.md) |  | [optional] 
**metric** | [**ActionResourceRelationshipsPlan**](ActionResourceRelationshipsPlan.md) |  | [optional] 
**patient** | [**PatientHealthResultResourceRelationshipsPatient**](PatientHealthResultResourceRelationshipsPatient.md) |  | [optional] 

## Example

```python
from openapi_client.models.patient_health_result_resource_relationships import PatientHealthResultResourceRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of PatientHealthResultResourceRelationships from a JSON string
patient_health_result_resource_relationships_instance = PatientHealthResultResourceRelationships.from_json(json)
# print the JSON string representation of the object
print(PatientHealthResultResourceRelationships.to_json())

# convert the object into a dict
patient_health_result_resource_relationships_dict = patient_health_result_resource_relationships_instance.to_dict()
# create an instance of PatientHealthResultResourceRelationships from a dict
patient_health_result_resource_relationships_from_dict = PatientHealthResultResourceRelationships.from_dict(patient_health_result_resource_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


