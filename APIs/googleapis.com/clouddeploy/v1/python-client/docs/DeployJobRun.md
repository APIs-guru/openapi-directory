# DeployJobRun

DeployJobRun contains information specific to a deploy `JobRun`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact** | [**DeployArtifact**](DeployArtifact.md) |  | [optional] 
**build** | **str** | Output only. The resource name of the Cloud Build &#x60;Build&#x60; object that is used to deploy. Format is &#x60;projects/{project}/locations/{location}/builds/{build}&#x60;. | [optional] [readonly] 
**failure_cause** | **str** | Output only. The reason the deploy failed. This will always be unspecified while the deploy is in progress or if it succeeded. | [optional] [readonly] 
**failure_message** | **str** | Output only. Additional information about the deploy failure, if available. | [optional] [readonly] 
**metadata** | [**DeployJobRunMetadata**](DeployJobRunMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.deploy_job_run import DeployJobRun

# TODO update the JSON string below
json = "{}"
# create an instance of DeployJobRun from a JSON string
deploy_job_run_instance = DeployJobRun.from_json(json)
# print the JSON string representation of the object
print(DeployJobRun.to_json())

# convert the object into a dict
deploy_job_run_dict = deploy_job_run_instance.to_dict()
# create an instance of DeployJobRun from a dict
deploy_job_run_from_dict = DeployJobRun.from_dict(deploy_job_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


