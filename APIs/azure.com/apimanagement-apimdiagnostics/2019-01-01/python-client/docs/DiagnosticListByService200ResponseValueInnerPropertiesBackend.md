# DiagnosticListByService200ResponseValueInnerPropertiesBackend

Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request** | [**DiagnosticListByService200ResponseValueInnerPropertiesBackendRequest**](DiagnosticListByService200ResponseValueInnerPropertiesBackendRequest.md) |  | [optional] 
**response** | [**DiagnosticListByService200ResponseValueInnerPropertiesBackendRequest**](DiagnosticListByService200ResponseValueInnerPropertiesBackendRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.diagnostic_list_by_service200_response_value_inner_properties_backend import DiagnosticListByService200ResponseValueInnerPropertiesBackend

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticListByService200ResponseValueInnerPropertiesBackend from a JSON string
diagnostic_list_by_service200_response_value_inner_properties_backend_instance = DiagnosticListByService200ResponseValueInnerPropertiesBackend.from_json(json)
# print the JSON string representation of the object
print(DiagnosticListByService200ResponseValueInnerPropertiesBackend.to_json())

# convert the object into a dict
diagnostic_list_by_service200_response_value_inner_properties_backend_dict = diagnostic_list_by_service200_response_value_inner_properties_backend_instance.to_dict()
# create an instance of DiagnosticListByService200ResponseValueInnerPropertiesBackend from a dict
diagnostic_list_by_service200_response_value_inner_properties_backend_from_dict = DiagnosticListByService200ResponseValueInnerPropertiesBackend.from_dict(diagnostic_list_by_service200_response_value_inner_properties_backend_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


