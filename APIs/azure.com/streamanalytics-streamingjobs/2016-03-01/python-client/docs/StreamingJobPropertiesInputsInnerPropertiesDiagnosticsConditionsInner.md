# StreamingJobPropertiesInputsInnerPropertiesDiagnosticsConditionsInner

Condition applicable to the resource, or to the job overall, that warrant customer attention.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The opaque diagnostic code. | [optional] [readonly] 
**message** | **str** | The human-readable message describing the condition in detail. Localized in the Accept-Language of the client request. | [optional] [readonly] 
**since** | **str** | The UTC timestamp of when the condition started. Customers should be able to find a corresponding event in the ops log around this time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.streaming_job_properties_inputs_inner_properties_diagnostics_conditions_inner import StreamingJobPropertiesInputsInnerPropertiesDiagnosticsConditionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingJobPropertiesInputsInnerPropertiesDiagnosticsConditionsInner from a JSON string
streaming_job_properties_inputs_inner_properties_diagnostics_conditions_inner_instance = StreamingJobPropertiesInputsInnerPropertiesDiagnosticsConditionsInner.from_json(json)
# print the JSON string representation of the object
print(StreamingJobPropertiesInputsInnerPropertiesDiagnosticsConditionsInner.to_json())

# convert the object into a dict
streaming_job_properties_inputs_inner_properties_diagnostics_conditions_inner_dict = streaming_job_properties_inputs_inner_properties_diagnostics_conditions_inner_instance.to_dict()
# create an instance of StreamingJobPropertiesInputsInnerPropertiesDiagnosticsConditionsInner from a dict
streaming_job_properties_inputs_inner_properties_diagnostics_conditions_inner_from_dict = StreamingJobPropertiesInputsInnerPropertiesDiagnosticsConditionsInner.from_dict(streaming_job_properties_inputs_inner_properties_diagnostics_conditions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


