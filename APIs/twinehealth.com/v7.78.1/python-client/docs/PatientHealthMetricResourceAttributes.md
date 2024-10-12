# PatientHealthMetricResourceAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | [**PatientHealthMetricResourceAttributesCode**](PatientHealthMetricResourceAttributesCode.md) |  | [optional] 
**diastolic** | **float** |  | [optional] 
**occurred_at** | **str** |  | [optional] 
**systolic** | **float** |  | [optional] 
**type** | **str** |  | [optional] 
**unit** | **str** |  | [optional] 
**value** | **object** | Can be any value (number, boolean, string, object) depending on the metric type. Most values are of type number. | [optional] 

## Example

```python
from openapi_client.models.patient_health_metric_resource_attributes import PatientHealthMetricResourceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of PatientHealthMetricResourceAttributes from a JSON string
patient_health_metric_resource_attributes_instance = PatientHealthMetricResourceAttributes.from_json(json)
# print the JSON string representation of the object
print(PatientHealthMetricResourceAttributes.to_json())

# convert the object into a dict
patient_health_metric_resource_attributes_dict = patient_health_metric_resource_attributes_instance.to_dict()
# create an instance of PatientHealthMetricResourceAttributes from a dict
patient_health_metric_resource_attributes_from_dict = PatientHealthMetricResourceAttributes.from_dict(patient_health_metric_resource_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


