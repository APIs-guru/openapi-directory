# DeploymentParametersAdminUsername


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Username for the Virtual Machine. | 

## Example

```python
from openapi_client.models.deployment_parameters_admin_username import DeploymentParametersAdminUsername

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentParametersAdminUsername from a JSON string
deployment_parameters_admin_username_instance = DeploymentParametersAdminUsername.from_json(json)
# print the JSON string representation of the object
print(DeploymentParametersAdminUsername.to_json())

# convert the object into a dict
deployment_parameters_admin_username_dict = deployment_parameters_admin_username_instance.to_dict()
# create an instance of DeploymentParametersAdminUsername from a dict
deployment_parameters_admin_username_from_dict = DeploymentParametersAdminUsername.from_dict(deployment_parameters_admin_username_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


