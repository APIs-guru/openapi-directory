# PostdeployJob

A postdeploy Job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **List[str]** | Output only. The custom actions that the postdeploy Job executes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.postdeploy_job import PostdeployJob

# TODO update the JSON string below
json = "{}"
# create an instance of PostdeployJob from a JSON string
postdeploy_job_instance = PostdeployJob.from_json(json)
# print the JSON string representation of the object
print(PostdeployJob.to_json())

# convert the object into a dict
postdeploy_job_dict = postdeploy_job_instance.to_dict()
# create an instance of PostdeployJob from a dict
postdeploy_job_from_dict = PostdeployJob.from_dict(postdeploy_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


