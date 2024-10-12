# PatientResourceRelationshipsGroups


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PatientResourceRelationshipsGroupsDataInner]**](PatientResourceRelationshipsGroupsDataInner.md) |  | 

## Example

```python
from openapi_client.models.patient_resource_relationships_groups import PatientResourceRelationshipsGroups

# TODO update the JSON string below
json = "{}"
# create an instance of PatientResourceRelationshipsGroups from a JSON string
patient_resource_relationships_groups_instance = PatientResourceRelationshipsGroups.from_json(json)
# print the JSON string representation of the object
print(PatientResourceRelationshipsGroups.to_json())

# convert the object into a dict
patient_resource_relationships_groups_dict = patient_resource_relationships_groups_instance.to_dict()
# create an instance of PatientResourceRelationshipsGroups from a dict
patient_resource_relationships_groups_from_dict = PatientResourceRelationshipsGroups.from_dict(patient_resource_relationships_groups_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


