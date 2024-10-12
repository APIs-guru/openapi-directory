# DeploymentSummary

The deployment summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**successful_deployments** | **int** | The number of successful deployments. | [optional] 
**unsuccessful_deployments** | **int** | The number of unsuccessful deployments. | [optional] 

## Example

```python
from openapi_client.models.deployment_summary import DeploymentSummary

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentSummary from a JSON string
deployment_summary_instance = DeploymentSummary.from_json(json)
# print the JSON string representation of the object
print(DeploymentSummary.to_json())

# convert the object into a dict
deployment_summary_dict = deployment_summary_instance.to_dict()
# create an instance of DeploymentSummary from a dict
deployment_summary_from_dict = DeploymentSummary.from_dict(deployment_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


