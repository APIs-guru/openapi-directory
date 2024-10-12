# AssignmentDeploymentJobResult

Result of each individual deployment in a blueprint assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**AzureResourceManagerError**](AzureResourceManagerError.md) |  | [optional] 
**resources** | [**List[AssignmentJobCreatedResource]**](AssignmentJobCreatedResource.md) | Resources created as result of the deployment job. | [optional] 

## Example

```python
from openapi_client.models.assignment_deployment_job_result import AssignmentDeploymentJobResult

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentDeploymentJobResult from a JSON string
assignment_deployment_job_result_instance = AssignmentDeploymentJobResult.from_json(json)
# print the JSON string representation of the object
print(AssignmentDeploymentJobResult.to_json())

# convert the object into a dict
assignment_deployment_job_result_dict = assignment_deployment_job_result_instance.to_dict()
# create an instance of AssignmentDeploymentJobResult from a dict
assignment_deployment_job_result_from_dict = AssignmentDeploymentJobResult.from_dict(assignment_deployment_job_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


