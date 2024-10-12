# StreamingJobPropertiesInputsInnerProperties

The properties that are associated with an input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**diagnostics** | [**StreamingJobPropertiesInputsInnerPropertiesDiagnostics**](StreamingJobPropertiesInputsInnerPropertiesDiagnostics.md) |  | [optional] 
**etag** | **str** | The current entity tag for the input. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. | [optional] [readonly] 
**serialization** | [**StreamingJobPropertiesInputsInnerPropertiesSerialization**](StreamingJobPropertiesInputsInnerPropertiesSerialization.md) |  | [optional] 
**type** | **str** | Indicates whether the input is a source of reference data or stream data. Required on PUT (CreateOrReplace) requests. | [optional] 

## Example

```python
from openapi_client.models.streaming_job_properties_inputs_inner_properties import StreamingJobPropertiesInputsInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingJobPropertiesInputsInnerProperties from a JSON string
streaming_job_properties_inputs_inner_properties_instance = StreamingJobPropertiesInputsInnerProperties.from_json(json)
# print the JSON string representation of the object
print(StreamingJobPropertiesInputsInnerProperties.to_json())

# convert the object into a dict
streaming_job_properties_inputs_inner_properties_dict = streaming_job_properties_inputs_inner_properties_instance.to_dict()
# create an instance of StreamingJobPropertiesInputsInnerProperties from a dict
streaming_job_properties_inputs_inner_properties_from_dict = StreamingJobPropertiesInputsInnerProperties.from_dict(streaming_job_properties_inputs_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


