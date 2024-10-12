# DiagnosticGet200Response

Diagnostic details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DiagnosticListByService200ResponseValueInnerProperties**](DiagnosticListByService200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.diagnostic_get200_response import DiagnosticGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticGet200Response from a JSON string
diagnostic_get200_response_instance = DiagnosticGet200Response.from_json(json)
# print the JSON string representation of the object
print(DiagnosticGet200Response.to_json())

# convert the object into a dict
diagnostic_get200_response_dict = diagnostic_get200_response_instance.to_dict()
# create an instance of DiagnosticGet200Response from a dict
diagnostic_get200_response_from_dict = DiagnosticGet200Response.from_dict(diagnostic_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


