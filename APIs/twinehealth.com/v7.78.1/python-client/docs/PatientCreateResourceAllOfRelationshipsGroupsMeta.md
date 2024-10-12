# PatientCreateResourceAllOfRelationshipsGroupsMeta

Allows the specification of a query for a group rather than providing a group id directly

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | [**PatientCreateResourceAllOfRelationshipsGroupsMetaQuery**](PatientCreateResourceAllOfRelationshipsGroupsMetaQuery.md) |  | 

## Example

```python
from openapi_client.models.patient_create_resource_all_of_relationships_groups_meta import PatientCreateResourceAllOfRelationshipsGroupsMeta

# TODO update the JSON string below
json = "{}"
# create an instance of PatientCreateResourceAllOfRelationshipsGroupsMeta from a JSON string
patient_create_resource_all_of_relationships_groups_meta_instance = PatientCreateResourceAllOfRelationshipsGroupsMeta.from_json(json)
# print the JSON string representation of the object
print(PatientCreateResourceAllOfRelationshipsGroupsMeta.to_json())

# convert the object into a dict
patient_create_resource_all_of_relationships_groups_meta_dict = patient_create_resource_all_of_relationships_groups_meta_instance.to_dict()
# create an instance of PatientCreateResourceAllOfRelationshipsGroupsMeta from a dict
patient_create_resource_all_of_relationships_groups_meta_from_dict = PatientCreateResourceAllOfRelationshipsGroupsMeta.from_dict(patient_create_resource_all_of_relationships_groups_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


