# DeploymentParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_password** | [**DeploymentParametersAdminPassword**](DeploymentParametersAdminPassword.md) |  | [optional] 
**admin_username** | [**DeploymentParametersAdminUsername**](DeploymentParametersAdminUsername.md) |  | [optional] 
**dns_label_prefix** | [**DeploymentParametersDnsLabelPrefix**](DeploymentParametersDnsLabelPrefix.md) |  | [optional] 
**os_version** | [**DeploymentParametersOsVersion**](DeploymentParametersOsVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.deployment_parameters import DeploymentParameters

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentParameters from a JSON string
deployment_parameters_instance = DeploymentParameters.from_json(json)
# print the JSON string representation of the object
print(DeploymentParameters.to_json())

# convert the object into a dict
deployment_parameters_dict = deployment_parameters_instance.to_dict()
# create an instance of DeploymentParameters from a dict
deployment_parameters_from_dict = DeploymentParameters.from_dict(deployment_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


