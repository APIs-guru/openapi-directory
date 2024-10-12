# DiagnosticListByService200ResponseValueInnerProperties

Diagnostic Entity Properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**always_log** | **str** | Specifies for what type of messages sampling settings should not apply. | [optional] 
**backend** | [**DiagnosticListByService200ResponseValueInnerPropertiesBackend**](DiagnosticListByService200ResponseValueInnerPropertiesBackend.md) |  | [optional] 
**enable_http_correlation_headers** | **bool** | Whether to process Correlation Headers coming to Api Management Service. Only applicable to Application Insights diagnostics. Default is true. | [optional] 
**frontend** | [**DiagnosticListByService200ResponseValueInnerPropertiesBackend**](DiagnosticListByService200ResponseValueInnerPropertiesBackend.md) |  | [optional] 
**http_correlation_protocol** | **str** | Sets correlation protocol to use for Application Insights diagnostics. | [optional] 
**logger_id** | **str** | Resource Id of a target logger. | 
**sampling** | [**DiagnosticListByService200ResponseValueInnerPropertiesSampling**](DiagnosticListByService200ResponseValueInnerPropertiesSampling.md) |  | [optional] 
**verbosity** | **str** | The verbosity level applied to traces emitted by trace policies. | [optional] 

## Example

```python
from openapi_client.models.diagnostic_list_by_service200_response_value_inner_properties import DiagnosticListByService200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticListByService200ResponseValueInnerProperties from a JSON string
diagnostic_list_by_service200_response_value_inner_properties_instance = DiagnosticListByService200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(DiagnosticListByService200ResponseValueInnerProperties.to_json())

# convert the object into a dict
diagnostic_list_by_service200_response_value_inner_properties_dict = diagnostic_list_by_service200_response_value_inner_properties_instance.to_dict()
# create an instance of DiagnosticListByService200ResponseValueInnerProperties from a dict
diagnostic_list_by_service200_response_value_inner_properties_from_dict = DiagnosticListByService200ResponseValueInnerProperties.from_dict(diagnostic_list_by_service200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


