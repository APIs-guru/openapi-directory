# ApiDiagnosticGet200Response

Diagnostic details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApiDiagnosticListByService200ResponseValueInnerProperties**](ApiDiagnosticListByService200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_diagnostic_get200_response import ApiDiagnosticGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiDiagnosticGet200Response from a JSON string
api_diagnostic_get200_response_instance = ApiDiagnosticGet200Response.from_json(json)
# print the JSON string representation of the object
print(ApiDiagnosticGet200Response.to_json())

# convert the object into a dict
api_diagnostic_get200_response_dict = api_diagnostic_get200_response_instance.to_dict()
# create an instance of ApiDiagnosticGet200Response from a dict
api_diagnostic_get200_response_from_dict = ApiDiagnosticGet200Response.from_dict(api_diagnostic_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


