# StreamingJobPropertiesInputsInner

An input object, containing all information associated with the named input. All inputs are contained under a streaming job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StreamingJobPropertiesInputsInnerProperties**](StreamingJobPropertiesInputsInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.streaming_job_properties_inputs_inner import StreamingJobPropertiesInputsInner

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingJobPropertiesInputsInner from a JSON string
streaming_job_properties_inputs_inner_instance = StreamingJobPropertiesInputsInner.from_json(json)
# print the JSON string representation of the object
print(StreamingJobPropertiesInputsInner.to_json())

# convert the object into a dict
streaming_job_properties_inputs_inner_dict = streaming_job_properties_inputs_inner_instance.to_dict()
# create an instance of StreamingJobPropertiesInputsInner from a dict
streaming_job_properties_inputs_inner_from_dict = StreamingJobPropertiesInputsInner.from_dict(streaming_job_properties_inputs_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


