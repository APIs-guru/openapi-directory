# ApiDiagnosticListByService200ResponseValueInnerPropertiesSampling

Sampling settings for Diagnostic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percentage** | **float** | Rate of sampling for fixed-rate sampling. | [optional] 
**sampling_type** | **str** | Sampling type. | [optional] 

## Example

```python
from openapi_client.models.api_diagnostic_list_by_service200_response_value_inner_properties_sampling import ApiDiagnosticListByService200ResponseValueInnerPropertiesSampling

# TODO update the JSON string below
json = "{}"
# create an instance of ApiDiagnosticListByService200ResponseValueInnerPropertiesSampling from a JSON string
api_diagnostic_list_by_service200_response_value_inner_properties_sampling_instance = ApiDiagnosticListByService200ResponseValueInnerPropertiesSampling.from_json(json)
# print the JSON string representation of the object
print(ApiDiagnosticListByService200ResponseValueInnerPropertiesSampling.to_json())

# convert the object into a dict
api_diagnostic_list_by_service200_response_value_inner_properties_sampling_dict = api_diagnostic_list_by_service200_response_value_inner_properties_sampling_instance.to_dict()
# create an instance of ApiDiagnosticListByService200ResponseValueInnerPropertiesSampling from a dict
api_diagnostic_list_by_service200_response_value_inner_properties_sampling_from_dict = ApiDiagnosticListByService200ResponseValueInnerPropertiesSampling.from_dict(api_diagnostic_list_by_service200_response_value_inner_properties_sampling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


