# RemediationDeploymentSummary

The deployment status summary for all deployments created by the remediation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed_deployments** | **int** | The number of deployments required by the remediation that have failed. | [optional] [readonly] 
**successful_deployments** | **int** | The number of deployments required by the remediation that have succeeded. | [optional] [readonly] 
**total_deployments** | **int** | The number of deployments required by the remediation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.remediation_deployment_summary import RemediationDeploymentSummary

# TODO update the JSON string below
json = "{}"
# create an instance of RemediationDeploymentSummary from a JSON string
remediation_deployment_summary_instance = RemediationDeploymentSummary.from_json(json)
# print the JSON string representation of the object
print(RemediationDeploymentSummary.to_json())

# convert the object into a dict
remediation_deployment_summary_dict = remediation_deployment_summary_instance.to_dict()
# create an instance of RemediationDeploymentSummary from a dict
remediation_deployment_summary_from_dict = RemediationDeploymentSummary.from_dict(remediation_deployment_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


