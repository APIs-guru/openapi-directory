# PatientHealthResultResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**PatientHealthResultResourceAttributes**](PatientHealthResultResourceAttributes.md) |  | [optional] 
**id** | **str** |  | 
**relationships** | [**PatientHealthResultResourceRelationships**](PatientHealthResultResourceRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.patient_health_result_resource import PatientHealthResultResource

# TODO update the JSON string below
json = "{}"
# create an instance of PatientHealthResultResource from a JSON string
patient_health_result_resource_instance = PatientHealthResultResource.from_json(json)
# print the JSON string representation of the object
print(PatientHealthResultResource.to_json())

# convert the object into a dict
patient_health_result_resource_dict = patient_health_result_resource_instance.to_dict()
# create an instance of PatientHealthResultResource from a dict
patient_health_result_resource_from_dict = PatientHealthResultResource.from_dict(patient_health_result_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


