# JobStream

Definition of the job stream.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Gets or sets the id of the resource. | [optional] 
**properties** | [**JobStreamProperties**](JobStreamProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_stream import JobStream

# TODO update the JSON string below
json = "{}"
# create an instance of JobStream from a JSON string
job_stream_instance = JobStream.from_json(json)
# print the JSON string representation of the object
print(JobStream.to_json())

# convert the object into a dict
job_stream_dict = job_stream_instance.to_dict()
# create an instance of JobStream from a dict
job_stream_from_dict = JobStream.from_dict(job_stream_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


