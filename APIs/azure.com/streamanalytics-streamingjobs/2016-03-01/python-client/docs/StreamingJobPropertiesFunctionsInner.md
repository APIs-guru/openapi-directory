# StreamingJobPropertiesFunctionsInner

A function object, containing all information associated with the named function. All functions are contained under a streaming job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StreamingJobPropertiesFunctionsInnerProperties**](StreamingJobPropertiesFunctionsInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.streaming_job_properties_functions_inner import StreamingJobPropertiesFunctionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingJobPropertiesFunctionsInner from a JSON string
streaming_job_properties_functions_inner_instance = StreamingJobPropertiesFunctionsInner.from_json(json)
# print the JSON string representation of the object
print(StreamingJobPropertiesFunctionsInner.to_json())

# convert the object into a dict
streaming_job_properties_functions_inner_dict = streaming_job_properties_functions_inner_instance.to_dict()
# create an instance of StreamingJobPropertiesFunctionsInner from a dict
streaming_job_properties_functions_inner_from_dict = StreamingJobPropertiesFunctionsInner.from_dict(streaming_job_properties_functions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


