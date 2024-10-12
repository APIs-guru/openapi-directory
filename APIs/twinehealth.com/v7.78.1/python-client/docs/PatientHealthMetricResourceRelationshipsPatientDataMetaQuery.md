# PatientHealthMetricResourceRelationshipsPatientDataMetaQuery

The query must return one and only one patient.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | **List[str]** |  | [optional] 
**identifier** | [**PatientHealthMetricResourceAttributesCode**](PatientHealthMetricResourceAttributesCode.md) |  | 
**organization** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.patient_health_metric_resource_relationships_patient_data_meta_query import PatientHealthMetricResourceRelationshipsPatientDataMetaQuery

# TODO update the JSON string below
json = "{}"
# create an instance of PatientHealthMetricResourceRelationshipsPatientDataMetaQuery from a JSON string
patient_health_metric_resource_relationships_patient_data_meta_query_instance = PatientHealthMetricResourceRelationshipsPatientDataMetaQuery.from_json(json)
# print the JSON string representation of the object
print(PatientHealthMetricResourceRelationshipsPatientDataMetaQuery.to_json())

# convert the object into a dict
patient_health_metric_resource_relationships_patient_data_meta_query_dict = patient_health_metric_resource_relationships_patient_data_meta_query_instance.to_dict()
# create an instance of PatientHealthMetricResourceRelationshipsPatientDataMetaQuery from a dict
patient_health_metric_resource_relationships_patient_data_meta_query_from_dict = PatientHealthMetricResourceRelationshipsPatientDataMetaQuery.from_dict(patient_health_metric_resource_relationships_patient_data_meta_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


