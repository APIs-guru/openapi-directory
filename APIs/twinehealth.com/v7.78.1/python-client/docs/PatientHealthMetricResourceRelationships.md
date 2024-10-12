# PatientHealthMetricResourceRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**patient** | [**PatientHealthMetricResourceRelationshipsPatient**](PatientHealthMetricResourceRelationshipsPatient.md) |  | [optional] 

## Example

```python
from openapi_client.models.patient_health_metric_resource_relationships import PatientHealthMetricResourceRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of PatientHealthMetricResourceRelationships from a JSON string
patient_health_metric_resource_relationships_instance = PatientHealthMetricResourceRelationships.from_json(json)
# print the JSON string representation of the object
print(PatientHealthMetricResourceRelationships.to_json())

# convert the object into a dict
patient_health_metric_resource_relationships_dict = patient_health_metric_resource_relationships_instance.to_dict()
# create an instance of PatientHealthMetricResourceRelationships from a dict
patient_health_metric_resource_relationships_from_dict = PatientHealthMetricResourceRelationships.from_dict(patient_health_metric_resource_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


