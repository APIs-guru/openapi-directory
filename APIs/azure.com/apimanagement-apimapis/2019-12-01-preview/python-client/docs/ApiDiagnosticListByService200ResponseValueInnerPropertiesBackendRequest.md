# ApiDiagnosticListByService200ResponseValueInnerPropertiesBackendRequest

Http message diagnostic settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | [**ApiDiagnosticListByService200ResponseValueInnerPropertiesBackendRequestBody**](ApiDiagnosticListByService200ResponseValueInnerPropertiesBackendRequestBody.md) |  | [optional] 
**headers** | **List[str]** | Array of HTTP Headers to log. | [optional] 

## Example

```python
from openapi_client.models.api_diagnostic_list_by_service200_response_value_inner_properties_backend_request import ApiDiagnosticListByService200ResponseValueInnerPropertiesBackendRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiDiagnosticListByService200ResponseValueInnerPropertiesBackendRequest from a JSON string
api_diagnostic_list_by_service200_response_value_inner_properties_backend_request_instance = ApiDiagnosticListByService200ResponseValueInnerPropertiesBackendRequest.from_json(json)
# print the JSON string representation of the object
print(ApiDiagnosticListByService200ResponseValueInnerPropertiesBackendRequest.to_json())

# convert the object into a dict
api_diagnostic_list_by_service200_response_value_inner_properties_backend_request_dict = api_diagnostic_list_by_service200_response_value_inner_properties_backend_request_instance.to_dict()
# create an instance of ApiDiagnosticListByService200ResponseValueInnerPropertiesBackendRequest from a dict
api_diagnostic_list_by_service200_response_value_inner_properties_backend_request_from_dict = ApiDiagnosticListByService200ResponseValueInnerPropertiesBackendRequest.from_dict(api_diagnostic_list_by_service200_response_value_inner_properties_backend_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


