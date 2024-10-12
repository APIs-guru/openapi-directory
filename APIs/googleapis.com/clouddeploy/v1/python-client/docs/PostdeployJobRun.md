# PostdeployJobRun

PostdeployJobRun contains information specific to a postdeploy `JobRun`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build** | **str** | Output only. The resource name of the Cloud Build &#x60;Build&#x60; object that is used to execute the custom actions associated with the postdeploy Job. Format is &#x60;projects/{project}/locations/{location}/builds/{build}&#x60;. | [optional] [readonly] 
**failure_cause** | **str** | Output only. The reason the postdeploy failed. This will always be unspecified while the postdeploy is in progress or if it succeeded. | [optional] [readonly] 
**failure_message** | **str** | Output only. Additional information about the postdeploy failure, if available. | [optional] [readonly] 

## Example

```python
from openapi_client.models.postdeploy_job_run import PostdeployJobRun

# TODO update the JSON string below
json = "{}"
# create an instance of PostdeployJobRun from a JSON string
postdeploy_job_run_instance = PostdeployJobRun.from_json(json)
# print the JSON string representation of the object
print(PostdeployJobRun.to_json())

# convert the object into a dict
postdeploy_job_run_dict = postdeploy_job_run_instance.to_dict()
# create an instance of PostdeployJobRun from a dict
postdeploy_job_run_from_dict = PostdeployJobRun.from_dict(postdeploy_job_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


