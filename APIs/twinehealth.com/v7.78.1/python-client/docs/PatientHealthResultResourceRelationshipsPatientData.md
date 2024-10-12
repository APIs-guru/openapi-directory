# PatientHealthResultResourceRelationshipsPatientData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Required if the &#x60;meta.query&#x60; is not defined. | [optional] 
**meta** | [**PatientHealthMetricResourceRelationshipsPatientDataMeta**](PatientHealthMetricResourceRelationshipsPatientDataMeta.md) |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.patient_health_result_resource_relationships_patient_data import PatientHealthResultResourceRelationshipsPatientData

# TODO update the JSON string below
json = "{}"
# create an instance of PatientHealthResultResourceRelationshipsPatientData from a JSON string
patient_health_result_resource_relationships_patient_data_instance = PatientHealthResultResourceRelationshipsPatientData.from_json(json)
# print the JSON string representation of the object
print(PatientHealthResultResourceRelationshipsPatientData.to_json())

# convert the object into a dict
patient_health_result_resource_relationships_patient_data_dict = patient_health_result_resource_relationships_patient_data_instance.to_dict()
# create an instance of PatientHealthResultResourceRelationshipsPatientData from a dict
patient_health_result_resource_relationships_patient_data_from_dict = PatientHealthResultResourceRelationshipsPatientData.from_dict(patient_health_result_resource_relationships_patient_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


