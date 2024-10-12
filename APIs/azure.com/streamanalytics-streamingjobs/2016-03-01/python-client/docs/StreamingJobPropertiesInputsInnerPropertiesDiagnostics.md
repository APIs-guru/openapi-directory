# StreamingJobPropertiesInputsInnerPropertiesDiagnostics

Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**List[StreamingJobPropertiesInputsInnerPropertiesDiagnosticsConditionsInner]**](StreamingJobPropertiesInputsInnerPropertiesDiagnosticsConditionsInner.md) | A collection of zero or more conditions applicable to the resource, or to the job overall, that warrant customer attention. | [optional] [readonly] 

## Example

```python
from openapi_client.models.streaming_job_properties_inputs_inner_properties_diagnostics import StreamingJobPropertiesInputsInnerPropertiesDiagnostics

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingJobPropertiesInputsInnerPropertiesDiagnostics from a JSON string
streaming_job_properties_inputs_inner_properties_diagnostics_instance = StreamingJobPropertiesInputsInnerPropertiesDiagnostics.from_json(json)
# print the JSON string representation of the object
print(StreamingJobPropertiesInputsInnerPropertiesDiagnostics.to_json())

# convert the object into a dict
streaming_job_properties_inputs_inner_properties_diagnostics_dict = streaming_job_properties_inputs_inner_properties_diagnostics_instance.to_dict()
# create an instance of StreamingJobPropertiesInputsInnerPropertiesDiagnostics from a dict
streaming_job_properties_inputs_inner_properties_diagnostics_from_dict = StreamingJobPropertiesInputsInnerPropertiesDiagnostics.from_dict(streaming_job_properties_inputs_inner_properties_diagnostics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


