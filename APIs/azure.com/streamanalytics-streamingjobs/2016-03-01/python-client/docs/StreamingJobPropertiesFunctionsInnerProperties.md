# StreamingJobPropertiesFunctionsInnerProperties

The properties that are associated with a function.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | The current entity tag for the function. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. | [optional] [readonly] 
**type** | **str** | Indicates the type of function. | [optional] 

## Example

```python
from openapi_client.models.streaming_job_properties_functions_inner_properties import StreamingJobPropertiesFunctionsInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingJobPropertiesFunctionsInnerProperties from a JSON string
streaming_job_properties_functions_inner_properties_instance = StreamingJobPropertiesFunctionsInnerProperties.from_json(json)
# print the JSON string representation of the object
print(StreamingJobPropertiesFunctionsInnerProperties.to_json())

# convert the object into a dict
streaming_job_properties_functions_inner_properties_dict = streaming_job_properties_functions_inner_properties_instance.to_dict()
# create an instance of StreamingJobPropertiesFunctionsInnerProperties from a dict
streaming_job_properties_functions_inner_properties_from_dict = StreamingJobPropertiesFunctionsInnerProperties.from_dict(streaming_job_properties_functions_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


