# StreamingJobPropertiesTransformation

A transformation object, containing all information associated with the named transformation. All transformations are contained under a streaming job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StreamingJobPropertiesTransformationProperties**](StreamingJobPropertiesTransformationProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.streaming_job_properties_transformation import StreamingJobPropertiesTransformation

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingJobPropertiesTransformation from a JSON string
streaming_job_properties_transformation_instance = StreamingJobPropertiesTransformation.from_json(json)
# print the JSON string representation of the object
print(StreamingJobPropertiesTransformation.to_json())

# convert the object into a dict
streaming_job_properties_transformation_dict = streaming_job_properties_transformation_instance.to_dict()
# create an instance of StreamingJobPropertiesTransformation from a dict
streaming_job_properties_transformation_from_dict = StreamingJobPropertiesTransformation.from_dict(streaming_job_properties_transformation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


