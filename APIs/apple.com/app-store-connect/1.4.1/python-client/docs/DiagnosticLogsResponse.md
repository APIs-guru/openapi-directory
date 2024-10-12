# DiagnosticLogsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[DiagnosticLog]**](DiagnosticLog.md) |  | 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.diagnostic_logs_response import DiagnosticLogsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticLogsResponse from a JSON string
diagnostic_logs_response_instance = DiagnosticLogsResponse.from_json(json)
# print the JSON string representation of the object
print(DiagnosticLogsResponse.to_json())

# convert the object into a dict
diagnostic_logs_response_dict = diagnostic_logs_response_instance.to_dict()
# create an instance of DiagnosticLogsResponse from a dict
diagnostic_logs_response_from_dict = DiagnosticLogsResponse.from_dict(diagnostic_logs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


