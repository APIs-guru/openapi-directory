# OutputPropertiesDiagnostics

Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**List[OutputPropertiesDiagnosticsConditionsInner]**](OutputPropertiesDiagnosticsConditionsInner.md) | A collection of zero or more conditions applicable to the resource, or to the job overall, that warrant customer attention. | [optional] [readonly] 

## Example

```python
from openapi_client.models.output_properties_diagnostics import OutputPropertiesDiagnostics

# TODO update the JSON string below
json = "{}"
# create an instance of OutputPropertiesDiagnostics from a JSON string
output_properties_diagnostics_instance = OutputPropertiesDiagnostics.from_json(json)
# print the JSON string representation of the object
print(OutputPropertiesDiagnostics.to_json())

# convert the object into a dict
output_properties_diagnostics_dict = output_properties_diagnostics_instance.to_dict()
# create an instance of OutputPropertiesDiagnostics from a dict
output_properties_diagnostics_from_dict = OutputPropertiesDiagnostics.from_dict(output_properties_diagnostics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


