# PatientHealthResultResourceAttributesData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **object** | Can be any value (number, boolean, string, object) depending on the metric type. Most values are of type number | [optional] 

## Example

```python
from openapi_client.models.patient_health_result_resource_attributes_data import PatientHealthResultResourceAttributesData

# TODO update the JSON string below
json = "{}"
# create an instance of PatientHealthResultResourceAttributesData from a JSON string
patient_health_result_resource_attributes_data_instance = PatientHealthResultResourceAttributesData.from_json(json)
# print the JSON string representation of the object
print(PatientHealthResultResourceAttributesData.to_json())

# convert the object into a dict
patient_health_result_resource_attributes_data_dict = patient_health_result_resource_attributes_data_instance.to_dict()
# create an instance of PatientHealthResultResourceAttributesData from a dict
patient_health_result_resource_attributes_data_from_dict = PatientHealthResultResourceAttributesData.from_dict(patient_health_result_resource_attributes_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


