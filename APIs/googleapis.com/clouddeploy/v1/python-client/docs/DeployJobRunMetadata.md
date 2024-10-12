# DeployJobRunMetadata

DeployJobRunMetadata surfaces information associated with a `DeployJobRun` to the user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_run** | [**CloudRunMetadata**](CloudRunMetadata.md) |  | [optional] 
**custom** | [**CustomMetadata**](CustomMetadata.md) |  | [optional] 
**custom_target** | [**CustomTargetDeployMetadata**](CustomTargetDeployMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.deploy_job_run_metadata import DeployJobRunMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of DeployJobRunMetadata from a JSON string
deploy_job_run_metadata_instance = DeployJobRunMetadata.from_json(json)
# print the JSON string representation of the object
print(DeployJobRunMetadata.to_json())

# convert the object into a dict
deploy_job_run_metadata_dict = deploy_job_run_metadata_instance.to_dict()
# create an instance of DeployJobRunMetadata from a dict
deploy_job_run_metadata_from_dict = DeployJobRunMetadata.from_dict(deploy_job_run_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


