# DiagnosticsDescription

Describes the diagnostics options available

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_sink_refs** | **List[str]** | The sinks to be used if diagnostics is enabled. Sink choices can be overridden at the service and code package level. | [optional] 
**enabled** | **bool** | Status of whether or not sinks are enabled. | [optional] 
**sinks** | [**List[DiagnosticsSinkProperties]**](DiagnosticsSinkProperties.md) | List of supported sinks that can be referenced. | [optional] 

## Example

```python
from openapi_client.models.diagnostics_description import DiagnosticsDescription

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticsDescription from a JSON string
diagnostics_description_instance = DiagnosticsDescription.from_json(json)
# print the JSON string representation of the object
print(DiagnosticsDescription.to_json())

# convert the object into a dict
diagnostics_description_dict = diagnostics_description_instance.to_dict()
# create an instance of DiagnosticsDescription from a dict
diagnostics_description_from_dict = DiagnosticsDescription.from_dict(diagnostics_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


