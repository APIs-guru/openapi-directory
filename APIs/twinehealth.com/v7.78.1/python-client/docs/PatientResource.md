# PatientResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**PatientResourceAttributes**](PatientResourceAttributes.md) |  | 
**id** | **str** |  | [optional] 
**links** | [**PatientResourceLinks**](PatientResourceLinks.md) |  | [optional] 
**relationships** | [**PatientResourceRelationships**](PatientResourceRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.patient_resource import PatientResource

# TODO update the JSON string below
json = "{}"
# create an instance of PatientResource from a JSON string
patient_resource_instance = PatientResource.from_json(json)
# print the JSON string representation of the object
print(PatientResource.to_json())

# convert the object into a dict
patient_resource_dict = patient_resource_instance.to_dict()
# create an instance of PatientResource from a dict
patient_resource_from_dict = PatientResource.from_dict(patient_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


