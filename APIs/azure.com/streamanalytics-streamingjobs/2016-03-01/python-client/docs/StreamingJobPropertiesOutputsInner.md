# StreamingJobPropertiesOutputsInner

An output object, containing all information associated with the named output. All outputs are contained under a streaming job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StreamingJobPropertiesOutputsInnerProperties**](StreamingJobPropertiesOutputsInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.streaming_job_properties_outputs_inner import StreamingJobPropertiesOutputsInner

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingJobPropertiesOutputsInner from a JSON string
streaming_job_properties_outputs_inner_instance = StreamingJobPropertiesOutputsInner.from_json(json)
# print the JSON string representation of the object
print(StreamingJobPropertiesOutputsInner.to_json())

# convert the object into a dict
streaming_job_properties_outputs_inner_dict = streaming_job_properties_outputs_inner_instance.to_dict()
# create an instance of StreamingJobPropertiesOutputsInner from a dict
streaming_job_properties_outputs_inner_from_dict = StreamingJobPropertiesOutputsInner.from_dict(streaming_job_properties_outputs_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


