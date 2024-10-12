# PatientCreateResourceAllOfRelationshipsGroupsData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Required if the &#x60;meta.query&#x60; is not defined. | [optional] 
**meta** | [**PatientCreateResourceAllOfRelationshipsGroupsMeta**](PatientCreateResourceAllOfRelationshipsGroupsMeta.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.patient_create_resource_all_of_relationships_groups_data import PatientCreateResourceAllOfRelationshipsGroupsData

# TODO update the JSON string below
json = "{}"
# create an instance of PatientCreateResourceAllOfRelationshipsGroupsData from a JSON string
patient_create_resource_all_of_relationships_groups_data_instance = PatientCreateResourceAllOfRelationshipsGroupsData.from_json(json)
# print the JSON string representation of the object
print(PatientCreateResourceAllOfRelationshipsGroupsData.to_json())

# convert the object into a dict
patient_create_resource_all_of_relationships_groups_data_dict = patient_create_resource_all_of_relationships_groups_data_instance.to_dict()
# create an instance of PatientCreateResourceAllOfRelationshipsGroupsData from a dict
patient_create_resource_all_of_relationships_groups_data_from_dict = PatientCreateResourceAllOfRelationshipsGroupsData.from_dict(patient_create_resource_all_of_relationships_groups_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


