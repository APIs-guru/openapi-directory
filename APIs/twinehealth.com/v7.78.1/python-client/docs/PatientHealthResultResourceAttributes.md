# PatientHealthResultResourceAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thread** | **str** | Links together results. This should be the same as the thread of _action, if it is defined | [optional] 
**aggregation** | **str** |  | [optional] 
**annotations** | [**List[PatientHealthResultResourceAttributesAnnotationsInner]**](PatientHealthResultResourceAttributesAnnotationsInner.md) |  | [optional] 
**channel** | **str** |  | [optional] 
**data** | [**PatientHealthResultResourceAttributesData**](PatientHealthResultResourceAttributesData.md) |  | [optional] 
**external_id** | **str** |  | [optional] 
**metric_type** | **str** |  | [optional] 
**occurred_at** | **str** |  | [optional] 
**occurred_at_time_zone** | **str** |  | [optional] 
**skipped** | **bool** |  | [optional] 
**source** | [**PatientHealthResultResourceAttributesSource**](PatientHealthResultResourceAttributesSource.md) |  | [optional] 
**type** | **str** | Type of result. Usually the same as metric_type except for lifestyle actions | [optional] 
**window** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.patient_health_result_resource_attributes import PatientHealthResultResourceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of PatientHealthResultResourceAttributes from a JSON string
patient_health_result_resource_attributes_instance = PatientHealthResultResourceAttributes.from_json(json)
# print the JSON string representation of the object
print(PatientHealthResultResourceAttributes.to_json())

# convert the object into a dict
patient_health_result_resource_attributes_dict = patient_health_result_resource_attributes_instance.to_dict()
# create an instance of PatientHealthResultResourceAttributes from a dict
patient_health_result_resource_attributes_from_dict = PatientHealthResultResourceAttributes.from_dict(patient_health_result_resource_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


