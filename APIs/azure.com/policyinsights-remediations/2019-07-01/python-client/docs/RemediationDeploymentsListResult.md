# RemediationDeploymentsListResult

List of deployments for a remediation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[RemediationDeployment]**](RemediationDeployment.md) | Array of deployments for the remediation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.remediation_deployments_list_result import RemediationDeploymentsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RemediationDeploymentsListResult from a JSON string
remediation_deployments_list_result_instance = RemediationDeploymentsListResult.from_json(json)
# print the JSON string representation of the object
print(RemediationDeploymentsListResult.to_json())

# convert the object into a dict
remediation_deployments_list_result_dict = remediation_deployments_list_result_instance.to_dict()
# create an instance of RemediationDeploymentsListResult from a dict
remediation_deployments_list_result_from_dict = RemediationDeploymentsListResult.from_dict(remediation_deployments_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


