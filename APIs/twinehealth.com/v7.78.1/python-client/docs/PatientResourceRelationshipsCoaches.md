# PatientResourceRelationshipsCoaches


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PatientCreateResourceAllOfRelationshipsCoachesData]**](PatientCreateResourceAllOfRelationshipsCoachesData.md) |  | 
**links** | [**PatientResourceRelationshipsCoachesLinks**](PatientResourceRelationshipsCoachesLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.patient_resource_relationships_coaches import PatientResourceRelationshipsCoaches

# TODO update the JSON string below
json = "{}"
# create an instance of PatientResourceRelationshipsCoaches from a JSON string
patient_resource_relationships_coaches_instance = PatientResourceRelationshipsCoaches.from_json(json)
# print the JSON string representation of the object
print(PatientResourceRelationshipsCoaches.to_json())

# convert the object into a dict
patient_resource_relationships_coaches_dict = patient_resource_relationships_coaches_instance.to_dict()
# create an instance of PatientResourceRelationshipsCoaches from a dict
patient_resource_relationships_coaches_from_dict = PatientResourceRelationshipsCoaches.from_dict(patient_resource_relationships_coaches_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


