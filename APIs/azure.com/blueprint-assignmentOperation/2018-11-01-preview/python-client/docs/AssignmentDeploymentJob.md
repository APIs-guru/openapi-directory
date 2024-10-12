# AssignmentDeploymentJob

Represents individual job in given blueprint assignment operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Name of the action performed in this job. | [optional] 
**history** | [**List[AssignmentDeploymentJobResult]**](AssignmentDeploymentJobResult.md) | Result of this deployment job for each retry. | [optional] 
**job_id** | **str** | Id of this job. | [optional] 
**job_state** | **str** | State of this job. | [optional] 
**kind** | **str** | Kind of job. | [optional] 
**request_uri** | **str** | Reference to deployment job resource id. | [optional] 
**result** | [**AssignmentDeploymentJobResult**](AssignmentDeploymentJobResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.assignment_deployment_job import AssignmentDeploymentJob

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentDeploymentJob from a JSON string
assignment_deployment_job_instance = AssignmentDeploymentJob.from_json(json)
# print the JSON string representation of the object
print(AssignmentDeploymentJob.to_json())

# convert the object into a dict
assignment_deployment_job_dict = assignment_deployment_job_instance.to_dict()
# create an instance of AssignmentDeploymentJob from a dict
assignment_deployment_job_from_dict = AssignmentDeploymentJob.from_dict(assignment_deployment_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


