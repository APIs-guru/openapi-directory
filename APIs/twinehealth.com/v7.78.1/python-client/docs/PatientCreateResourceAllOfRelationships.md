# PatientCreateResourceAllOfRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coaches** | [**PatientCreateResourceAllOfRelationshipsCoaches**](PatientCreateResourceAllOfRelationshipsCoaches.md) |  | [optional] 
**groups** | [**PatientCreateResourceAllOfRelationshipsGroups**](PatientCreateResourceAllOfRelationshipsGroups.md) |  | 

## Example

```python
from openapi_client.models.patient_create_resource_all_of_relationships import PatientCreateResourceAllOfRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of PatientCreateResourceAllOfRelationships from a JSON string
patient_create_resource_all_of_relationships_instance = PatientCreateResourceAllOfRelationships.from_json(json)
# print the JSON string representation of the object
print(PatientCreateResourceAllOfRelationships.to_json())

# convert the object into a dict
patient_create_resource_all_of_relationships_dict = patient_create_resource_all_of_relationships_instance.to_dict()
# create an instance of PatientCreateResourceAllOfRelationships from a dict
patient_create_resource_all_of_relationships_from_dict = PatientCreateResourceAllOfRelationships.from_dict(patient_create_resource_all_of_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


