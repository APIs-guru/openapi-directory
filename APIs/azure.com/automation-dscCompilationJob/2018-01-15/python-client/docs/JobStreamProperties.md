# JobStreamProperties

Definition of the job stream.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_stream_id** | **str** | Gets or sets the id of the job stream. | [optional] 
**stream_text** | **str** | Gets or sets the stream text. | [optional] 
**stream_type** | **str** | Gets or sets the stream type. | [optional] 
**summary** | **str** | Gets or sets the summary. | [optional] 
**time** | **datetime** | Gets or sets the creation time of the job. | [optional] 
**value** | **Dict[str, object]** | Gets or sets the values of the job stream. | [optional] 

## Example

```python
from openapi_client.models.job_stream_properties import JobStreamProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JobStreamProperties from a JSON string
job_stream_properties_instance = JobStreamProperties.from_json(json)
# print the JSON string representation of the object
print(JobStreamProperties.to_json())

# convert the object into a dict
job_stream_properties_dict = job_stream_properties_instance.to_dict()
# create an instance of JobStreamProperties from a dict
job_stream_properties_from_dict = JobStreamProperties.from_dict(job_stream_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


