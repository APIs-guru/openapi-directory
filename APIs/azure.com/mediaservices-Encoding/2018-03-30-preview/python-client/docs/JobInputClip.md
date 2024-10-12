# JobInputClip

Represents input files for a Job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | **List[str]** | List of files. Required for JobInputHttp. | [optional] 

## Example

```python
from openapi_client.models.job_input_clip import JobInputClip

# TODO update the JSON string below
json = "{}"
# create an instance of JobInputClip from a JSON string
job_input_clip_instance = JobInputClip.from_json(json)
# print the JSON string representation of the object
print(JobInputClip.to_json())

# convert the object into a dict
job_input_clip_dict = job_input_clip_instance.to_dict()
# create an instance of JobInputClip from a dict
job_input_clip_from_dict = JobInputClip.from_dict(job_input_clip_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


