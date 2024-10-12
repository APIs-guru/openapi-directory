# DiagnosticSignaturesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[DiagnosticSignature]**](DiagnosticSignature.md) |  | 
**included** | [**List[DiagnosticLog]**](DiagnosticLog.md) |  | [optional] 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.diagnostic_signatures_response import DiagnosticSignaturesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticSignaturesResponse from a JSON string
diagnostic_signatures_response_instance = DiagnosticSignaturesResponse.from_json(json)
# print the JSON string representation of the object
print(DiagnosticSignaturesResponse.to_json())

# convert the object into a dict
diagnostic_signatures_response_dict = diagnostic_signatures_response_instance.to_dict()
# create an instance of DiagnosticSignaturesResponse from a dict
diagnostic_signatures_response_from_dict = DiagnosticSignaturesResponse.from_dict(diagnostic_signatures_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


