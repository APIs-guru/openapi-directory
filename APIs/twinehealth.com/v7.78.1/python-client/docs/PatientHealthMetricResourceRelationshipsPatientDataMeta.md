# PatientHealthMetricResourceRelationshipsPatientDataMeta

Allows the specification of a query for a patient rather than providing a patient id directly

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | [**PatientHealthMetricResourceRelationshipsPatientDataMetaQuery**](PatientHealthMetricResourceRelationshipsPatientDataMetaQuery.md) |  | 

## Example

```python
from openapi_client.models.patient_health_metric_resource_relationships_patient_data_meta import PatientHealthMetricResourceRelationshipsPatientDataMeta

# TODO update the JSON string below
json = "{}"
# create an instance of PatientHealthMetricResourceRelationshipsPatientDataMeta from a JSON string
patient_health_metric_resource_relationships_patient_data_meta_instance = PatientHealthMetricResourceRelationshipsPatientDataMeta.from_json(json)
# print the JSON string representation of the object
print(PatientHealthMetricResourceRelationshipsPatientDataMeta.to_json())

# convert the object into a dict
patient_health_metric_resource_relationships_patient_data_meta_dict = patient_health_metric_resource_relationships_patient_data_meta_instance.to_dict()
# create an instance of PatientHealthMetricResourceRelationshipsPatientDataMeta from a dict
patient_health_metric_resource_relationships_patient_data_meta_from_dict = PatientHealthMetricResourceRelationshipsPatientDataMeta.from_dict(patient_health_metric_resource_relationships_patient_data_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


