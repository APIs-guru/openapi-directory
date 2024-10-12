# PatientHealthResultResourceAttributesSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | **object** | Can be any value | [optional] 
**name** | **str** |  | [optional] 
**source_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.patient_health_result_resource_attributes_source import PatientHealthResultResourceAttributesSource

# TODO update the JSON string below
json = "{}"
# create an instance of PatientHealthResultResourceAttributesSource from a JSON string
patient_health_result_resource_attributes_source_instance = PatientHealthResultResourceAttributesSource.from_json(json)
# print the JSON string representation of the object
print(PatientHealthResultResourceAttributesSource.to_json())

# convert the object into a dict
patient_health_result_resource_attributes_source_dict = patient_health_result_resource_attributes_source_instance.to_dict()
# create an instance of PatientHealthResultResourceAttributesSource from a dict
patient_health_result_resource_attributes_source_from_dict = PatientHealthResultResourceAttributesSource.from_dict(patient_health_result_resource_attributes_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


