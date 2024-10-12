# DeploymentListResult

List of deployments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the URL to get the next set of results. | [optional] 
**value** | [**List[DeploymentExtended]**](DeploymentExtended.md) | Gets or sets the list of deployments. | [optional] 

## Example

```python
from openapi_client.models.deployment_list_result import DeploymentListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentListResult from a JSON string
deployment_list_result_instance = DeploymentListResult.from_json(json)
# print the JSON string representation of the object
print(DeploymentListResult.to_json())

# convert the object into a dict
deployment_list_result_dict = deployment_list_result_instance.to_dict()
# create an instance of DeploymentListResult from a dict
deployment_list_result_from_dict = DeploymentListResult.from_dict(deployment_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


