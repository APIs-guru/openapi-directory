# DiagnosticListByServiceDefaultResponseErrorDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.diagnostic_list_by_service_default_response_error_details_inner import DiagnosticListByServiceDefaultResponseErrorDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticListByServiceDefaultResponseErrorDetailsInner from a JSON string
diagnostic_list_by_service_default_response_error_details_inner_instance = DiagnosticListByServiceDefaultResponseErrorDetailsInner.from_json(json)
# print the JSON string representation of the object
print(DiagnosticListByServiceDefaultResponseErrorDetailsInner.to_json())

# convert the object into a dict
diagnostic_list_by_service_default_response_error_details_inner_dict = diagnostic_list_by_service_default_response_error_details_inner_instance.to_dict()
# create an instance of DiagnosticListByServiceDefaultResponseErrorDetailsInner from a dict
diagnostic_list_by_service_default_response_error_details_inner_from_dict = DiagnosticListByServiceDefaultResponseErrorDetailsInner.from_dict(diagnostic_list_by_service_default_response_error_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


