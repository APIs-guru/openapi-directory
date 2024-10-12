# DiagnosticLoggerCreateOrUpdate200Response

Logger details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DiagnosticLoggerListByService200ResponseValueInnerProperties**](DiagnosticLoggerListByService200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.diagnostic_logger_create_or_update200_response import DiagnosticLoggerCreateOrUpdate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticLoggerCreateOrUpdate200Response from a JSON string
diagnostic_logger_create_or_update200_response_instance = DiagnosticLoggerCreateOrUpdate200Response.from_json(json)
# print the JSON string representation of the object
print(DiagnosticLoggerCreateOrUpdate200Response.to_json())

# convert the object into a dict
diagnostic_logger_create_or_update200_response_dict = diagnostic_logger_create_or_update200_response_instance.to_dict()
# create an instance of DiagnosticLoggerCreateOrUpdate200Response from a dict
diagnostic_logger_create_or_update200_response_from_dict = DiagnosticLoggerCreateOrUpdate200Response.from_dict(diagnostic_logger_create_or_update200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


