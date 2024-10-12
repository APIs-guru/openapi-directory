# DeploymentWhatIf

Deployment What-if operation parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location to store the deployment data. | [optional] 
**properties** | [**DeploymentWhatIfProperties**](DeploymentWhatIfProperties.md) |  | 

## Example

```python
from openapi_client.models.deployment_what_if import DeploymentWhatIf

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentWhatIf from a JSON string
deployment_what_if_instance = DeploymentWhatIf.from_json(json)
# print the JSON string representation of the object
print(DeploymentWhatIf.to_json())

# convert the object into a dict
deployment_what_if_dict = deployment_what_if_instance.to_dict()
# create an instance of DeploymentWhatIf from a dict
deployment_what_if_from_dict = DeploymentWhatIf.from_dict(deployment_what_if_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


