# DiagnosticsRef

Reference to sinks in DiagnosticsDescription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Status of whether or not sinks are enabled. | [optional] 
**sink_refs** | **List[str]** | List of sinks to be used if enabled. References the list of sinks in DiagnosticsDescription. | [optional] 

## Example

```python
from openapi_client.models.diagnostics_ref import DiagnosticsRef

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticsRef from a JSON string
diagnostics_ref_instance = DiagnosticsRef.from_json(json)
# print the JSON string representation of the object
print(DiagnosticsRef.to_json())

# convert the object into a dict
diagnostics_ref_dict = diagnostics_ref_instance.to_dict()
# create an instance of DiagnosticsRef from a dict
diagnostics_ref_from_dict = DiagnosticsRef.from_dict(diagnostics_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


