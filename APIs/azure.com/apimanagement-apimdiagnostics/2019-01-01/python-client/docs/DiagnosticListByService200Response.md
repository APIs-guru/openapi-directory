# DiagnosticListByService200Response

Paged Diagnostic list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[DiagnosticListByService200ResponseValueInner]**](DiagnosticListByService200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.diagnostic_list_by_service200_response import DiagnosticListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticListByService200Response from a JSON string
diagnostic_list_by_service200_response_instance = DiagnosticListByService200Response.from_json(json)
# print the JSON string representation of the object
print(DiagnosticListByService200Response.to_json())

# convert the object into a dict
diagnostic_list_by_service200_response_dict = diagnostic_list_by_service200_response_instance.to_dict()
# create an instance of DiagnosticListByService200Response from a dict
diagnostic_list_by_service200_response_from_dict = DiagnosticListByService200Response.from_dict(diagnostic_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


