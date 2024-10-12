# ApiDiagnosticListByService200ResponseValueInnerPropertiesBackend

Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request** | [**ApiDiagnosticListByService200ResponseValueInnerPropertiesBackendRequest**](ApiDiagnosticListByService200ResponseValueInnerPropertiesBackendRequest.md) |  | [optional] 
**response** | [**ApiDiagnosticListByService200ResponseValueInnerPropertiesBackendRequest**](ApiDiagnosticListByService200ResponseValueInnerPropertiesBackendRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_diagnostic_list_by_service200_response_value_inner_properties_backend import ApiDiagnosticListByService200ResponseValueInnerPropertiesBackend

# TODO update the JSON string below
json = "{}"
# create an instance of ApiDiagnosticListByService200ResponseValueInnerPropertiesBackend from a JSON string
api_diagnostic_list_by_service200_response_value_inner_properties_backend_instance = ApiDiagnosticListByService200ResponseValueInnerPropertiesBackend.from_json(json)
# print the JSON string representation of the object
print(ApiDiagnosticListByService200ResponseValueInnerPropertiesBackend.to_json())

# convert the object into a dict
api_diagnostic_list_by_service200_response_value_inner_properties_backend_dict = api_diagnostic_list_by_service200_response_value_inner_properties_backend_instance.to_dict()
# create an instance of ApiDiagnosticListByService200ResponseValueInnerPropertiesBackend from a dict
api_diagnostic_list_by_service200_response_value_inner_properties_backend_from_dict = ApiDiagnosticListByService200ResponseValueInnerPropertiesBackend.from_dict(api_diagnostic_list_by_service200_response_value_inner_properties_backend_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


