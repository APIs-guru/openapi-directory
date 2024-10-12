# DiagnosticsSinkProperties

Properties of a DiagnosticsSink.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A description of the sink. | [optional] 
**kind** | [**DiagnosticsSinkKind**](DiagnosticsSinkKind.md) |  | 
**name** | **str** | Name of the sink. This value is referenced by DiagnosticsReferenceDescription | [optional] 

## Example

```python
from openapi_client.models.diagnostics_sink_properties import DiagnosticsSinkProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticsSinkProperties from a JSON string
diagnostics_sink_properties_instance = DiagnosticsSinkProperties.from_json(json)
# print the JSON string representation of the object
print(DiagnosticsSinkProperties.to_json())

# convert the object into a dict
diagnostics_sink_properties_dict = diagnostics_sink_properties_instance.to_dict()
# create an instance of DiagnosticsSinkProperties from a dict
diagnostics_sink_properties_from_dict = DiagnosticsSinkProperties.from_dict(diagnostics_sink_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


