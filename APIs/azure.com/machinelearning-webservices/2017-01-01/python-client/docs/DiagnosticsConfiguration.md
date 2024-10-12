# DiagnosticsConfiguration

Diagnostics settings for an Azure ML web service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiry** | **datetime** | Specifies the date and time when the logging will cease. If null, diagnostic collection is not time limited. | [optional] 
**level** | **str** | Specifies the verbosity of the diagnostic output. Valid values are: None - disables tracing; Error - collects only error (stderr) traces; All - collects all traces (stdout and stderr). | 

## Example

```python
from openapi_client.models.diagnostics_configuration import DiagnosticsConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticsConfiguration from a JSON string
diagnostics_configuration_instance = DiagnosticsConfiguration.from_json(json)
# print the JSON string representation of the object
print(DiagnosticsConfiguration.to_json())

# convert the object into a dict
diagnostics_configuration_dict = diagnostics_configuration_instance.to_dict()
# create an instance of DiagnosticsConfiguration from a dict
diagnostics_configuration_from_dict = DiagnosticsConfiguration.from_dict(diagnostics_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


