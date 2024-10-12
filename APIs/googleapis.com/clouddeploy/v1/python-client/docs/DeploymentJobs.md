# DeploymentJobs

Deployment job composition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deploy_job** | [**Job**](Job.md) |  | [optional] 
**postdeploy_job** | [**Job**](Job.md) |  | [optional] 
**predeploy_job** | [**Job**](Job.md) |  | [optional] 
**verify_job** | [**Job**](Job.md) |  | [optional] 

## Example

```python
from openapi_client.models.deployment_jobs import DeploymentJobs

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentJobs from a JSON string
deployment_jobs_instance = DeploymentJobs.from_json(json)
# print the JSON string representation of the object
print(DeploymentJobs.to_json())

# convert the object into a dict
deployment_jobs_dict = deployment_jobs_instance.to_dict()
# create an instance of DeploymentJobs from a dict
deployment_jobs_from_dict = DeploymentJobs.from_dict(deployment_jobs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


