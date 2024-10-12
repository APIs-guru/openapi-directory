# DiagnosticListByServiceDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**DiagnosticListByServiceDefaultResponseError**](DiagnosticListByServiceDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.diagnostic_list_by_service_default_response import DiagnosticListByServiceDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticListByServiceDefaultResponse from a JSON string
diagnostic_list_by_service_default_response_instance = DiagnosticListByServiceDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(DiagnosticListByServiceDefaultResponse.to_json())

# convert the object into a dict
diagnostic_list_by_service_default_response_dict = diagnostic_list_by_service_default_response_instance.to_dict()
# create an instance of DiagnosticListByServiceDefaultResponse from a dict
diagnostic_list_by_service_default_response_from_dict = DiagnosticListByServiceDefaultResponse.from_dict(diagnostic_list_by_service_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


