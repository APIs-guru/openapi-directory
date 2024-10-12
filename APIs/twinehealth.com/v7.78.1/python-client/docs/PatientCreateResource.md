# PatientCreateResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**PatientResourceAttributes**](PatientResourceAttributes.md) |  | 
**id** | **str** |  | [optional] 
**links** | [**PatientResourceLinks**](PatientResourceLinks.md) |  | [optional] 
**relationships** | [**PatientCreateResourceAllOfRelationships**](PatientCreateResourceAllOfRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.patient_create_resource import PatientCreateResource

# TODO update the JSON string below
json = "{}"
# create an instance of PatientCreateResource from a JSON string
patient_create_resource_instance = PatientCreateResource.from_json(json)
# print the JSON string representation of the object
print(PatientCreateResource.to_json())

# convert the object into a dict
patient_create_resource_dict = patient_create_resource_instance.to_dict()
# create an instance of PatientCreateResource from a dict
patient_create_resource_from_dict = PatientCreateResource.from_dict(patient_create_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


