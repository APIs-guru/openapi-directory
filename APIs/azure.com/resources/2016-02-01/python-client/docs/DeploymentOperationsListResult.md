# DeploymentOperationsListResult

List of deployment operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[DeploymentOperation]**](DeploymentOperation.md) | The list of deployments. | [optional] 

## Example

```python
from openapi_client.models.deployment_operations_list_result import DeploymentOperationsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentOperationsListResult from a JSON string
deployment_operations_list_result_instance = DeploymentOperationsListResult.from_json(json)
# print the JSON string representation of the object
print(DeploymentOperationsListResult.to_json())

# convert the object into a dict
deployment_operations_list_result_dict = deployment_operations_list_result_instance.to_dict()
# create an instance of DeploymentOperationsListResult from a dict
deployment_operations_list_result_from_dict = DeploymentOperationsListResult.from_dict(deployment_operations_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


