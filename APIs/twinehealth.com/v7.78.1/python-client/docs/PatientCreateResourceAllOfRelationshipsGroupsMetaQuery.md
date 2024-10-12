# PatientCreateResourceAllOfRelationshipsGroupsMetaQuery

1. If the query does not return any groups, a group with the specified name will be created and related to the patient. 2. If the query returns one group, that group will be related to the patient. 3. If the query returns more than one group, the creation of the patient will fail. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**organization** | **str** |  | 

## Example

```python
from openapi_client.models.patient_create_resource_all_of_relationships_groups_meta_query import PatientCreateResourceAllOfRelationshipsGroupsMetaQuery

# TODO update the JSON string below
json = "{}"
# create an instance of PatientCreateResourceAllOfRelationshipsGroupsMetaQuery from a JSON string
patient_create_resource_all_of_relationships_groups_meta_query_instance = PatientCreateResourceAllOfRelationshipsGroupsMetaQuery.from_json(json)
# print the JSON string representation of the object
print(PatientCreateResourceAllOfRelationshipsGroupsMetaQuery.to_json())

# convert the object into a dict
patient_create_resource_all_of_relationships_groups_meta_query_dict = patient_create_resource_all_of_relationships_groups_meta_query_instance.to_dict()
# create an instance of PatientCreateResourceAllOfRelationshipsGroupsMetaQuery from a dict
patient_create_resource_all_of_relationships_groups_meta_query_from_dict = PatientCreateResourceAllOfRelationshipsGroupsMetaQuery.from_dict(patient_create_resource_all_of_relationships_groups_meta_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


