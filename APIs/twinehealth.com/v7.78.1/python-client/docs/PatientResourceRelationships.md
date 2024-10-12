# PatientResourceRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coaches** | [**PatientResourceRelationshipsCoaches**](PatientResourceRelationshipsCoaches.md) |  | [optional] 
**groups** | [**PatientResourceRelationshipsGroups**](PatientResourceRelationshipsGroups.md) |  | 

## Example

```python
from openapi_client.models.patient_resource_relationships import PatientResourceRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of PatientResourceRelationships from a JSON string
patient_resource_relationships_instance = PatientResourceRelationships.from_json(json)
# print the JSON string representation of the object
print(PatientResourceRelationships.to_json())

# convert the object into a dict
patient_resource_relationships_dict = patient_resource_relationships_instance.to_dict()
# create an instance of PatientResourceRelationships from a dict
patient_resource_relationships_from_dict = PatientResourceRelationships.from_dict(patient_resource_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


