# ApiDiagnosticLoggerListByService200Response

Paged Logger list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[ApiDiagnosticLoggerListByService200ResponseValueInner]**](ApiDiagnosticLoggerListByService200ResponseValueInner.md) | Logger values. | [optional] 

## Example

```python
from openapi_client.models.api_diagnostic_logger_list_by_service200_response import ApiDiagnosticLoggerListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiDiagnosticLoggerListByService200Response from a JSON string
api_diagnostic_logger_list_by_service200_response_instance = ApiDiagnosticLoggerListByService200Response.from_json(json)
# print the JSON string representation of the object
print(ApiDiagnosticLoggerListByService200Response.to_json())

# convert the object into a dict
api_diagnostic_logger_list_by_service200_response_dict = api_diagnostic_logger_list_by_service200_response_instance.to_dict()
# create an instance of ApiDiagnosticLoggerListByService200Response from a dict
api_diagnostic_logger_list_by_service200_response_from_dict = ApiDiagnosticLoggerListByService200Response.from_dict(api_diagnostic_logger_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


