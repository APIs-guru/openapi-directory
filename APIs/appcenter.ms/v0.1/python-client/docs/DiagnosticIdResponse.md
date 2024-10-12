# DiagnosticIdResponse

The diagnostic id for the given publish action

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**diagnostic_id** | **str** | diagnostic id | [optional] 

## Example

```python
from openapi_client.models.diagnostic_id_response import DiagnosticIdResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticIdResponse from a JSON string
diagnostic_id_response_instance = DiagnosticIdResponse.from_json(json)
# print the JSON string representation of the object
print(DiagnosticIdResponse.to_json())

# convert the object into a dict
diagnostic_id_response_dict = diagnostic_id_response_instance.to_dict()
# create an instance of DiagnosticIdResponse from a dict
diagnostic_id_response_from_dict = DiagnosticIdResponse.from_dict(diagnostic_id_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


