# PatientHealthMetricResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**PatientHealthMetricResourceAttributes**](PatientHealthMetricResourceAttributes.md) |  | [optional] 
**id** | **str** |  | 
**relationships** | [**PatientHealthMetricResourceRelationships**](PatientHealthMetricResourceRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.patient_health_metric_resource import PatientHealthMetricResource

# TODO update the JSON string below
json = "{}"
# create an instance of PatientHealthMetricResource from a JSON string
patient_health_metric_resource_instance = PatientHealthMetricResource.from_json(json)
# print the JSON string representation of the object
print(PatientHealthMetricResource.to_json())

# convert the object into a dict
patient_health_metric_resource_dict = patient_health_metric_resource_instance.to_dict()
# create an instance of PatientHealthMetricResource from a dict
patient_health_metric_resource_from_dict = PatientHealthMetricResource.from_dict(patient_health_metric_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


