# DiagnosticListByService200ResponseValueInnerPropertiesBackendRequest

Http message diagnostic settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | [**DiagnosticListByService200ResponseValueInnerPropertiesBackendRequestBody**](DiagnosticListByService200ResponseValueInnerPropertiesBackendRequestBody.md) |  | [optional] 
**headers** | **List[str]** | Array of HTTP Headers to log. | [optional] 

## Example

```python
from openapi_client.models.diagnostic_list_by_service200_response_value_inner_properties_backend_request import DiagnosticListByService200ResponseValueInnerPropertiesBackendRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticListByService200ResponseValueInnerPropertiesBackendRequest from a JSON string
diagnostic_list_by_service200_response_value_inner_properties_backend_request_instance = DiagnosticListByService200ResponseValueInnerPropertiesBackendRequest.from_json(json)
# print the JSON string representation of the object
print(DiagnosticListByService200ResponseValueInnerPropertiesBackendRequest.to_json())

# convert the object into a dict
diagnostic_list_by_service200_response_value_inner_properties_backend_request_dict = diagnostic_list_by_service200_response_value_inner_properties_backend_request_instance.to_dict()
# create an instance of DiagnosticListByService200ResponseValueInnerPropertiesBackendRequest from a dict
diagnostic_list_by_service200_response_value_inner_properties_backend_request_from_dict = DiagnosticListByService200ResponseValueInnerPropertiesBackendRequest.from_dict(diagnostic_list_by_service200_response_value_inner_properties_backend_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


