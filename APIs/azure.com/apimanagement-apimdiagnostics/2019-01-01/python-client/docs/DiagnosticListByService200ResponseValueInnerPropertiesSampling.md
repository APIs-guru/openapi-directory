# DiagnosticListByService200ResponseValueInnerPropertiesSampling

Sampling settings for Diagnostic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percentage** | **float** | Rate of sampling for fixed-rate sampling. | [optional] 
**sampling_type** | **str** | Sampling type. | [optional] 

## Example

```python
from openapi_client.models.diagnostic_list_by_service200_response_value_inner_properties_sampling import DiagnosticListByService200ResponseValueInnerPropertiesSampling

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticListByService200ResponseValueInnerPropertiesSampling from a JSON string
diagnostic_list_by_service200_response_value_inner_properties_sampling_instance = DiagnosticListByService200ResponseValueInnerPropertiesSampling.from_json(json)
# print the JSON string representation of the object
print(DiagnosticListByService200ResponseValueInnerPropertiesSampling.to_json())

# convert the object into a dict
diagnostic_list_by_service200_response_value_inner_properties_sampling_dict = diagnostic_list_by_service200_response_value_inner_properties_sampling_instance.to_dict()
# create an instance of DiagnosticListByService200ResponseValueInnerPropertiesSampling from a dict
diagnostic_list_by_service200_response_value_inner_properties_sampling_from_dict = DiagnosticListByService200ResponseValueInnerPropertiesSampling.from_dict(diagnostic_list_by_service200_response_value_inner_properties_sampling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


