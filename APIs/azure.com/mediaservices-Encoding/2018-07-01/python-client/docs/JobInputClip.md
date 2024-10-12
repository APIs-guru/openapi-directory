# JobInputClip

Represents input files for a Job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | [**ClipTime**](ClipTime.md) |  | [optional] 
**files** | **List[str]** | List of files. Required for JobInputHttp. Maximum of 4000 characters each. | [optional] 
**label** | **str** | A label that is assigned to a JobInputClip, that is used to satisfy a reference used in the Transform. For example, a Transform can be authored so as to take an image file with the label &#39;xyz&#39; and apply it as an overlay onto the input video before it is encoded. When submitting a Job, exactly one of the JobInputs should be the image file, and it should have the label &#39;xyz&#39;. | [optional] 
**start** | [**ClipTime**](ClipTime.md) |  | [optional] 

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


