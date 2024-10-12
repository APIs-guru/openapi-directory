# DeploymentParametersAdminPassword


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Password for the Virtual Machine. | 

## Example

```python
from openapi_client.models.deployment_parameters_admin_password import DeploymentParametersAdminPassword

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentParametersAdminPassword from a JSON string
deployment_parameters_admin_password_instance = DeploymentParametersAdminPassword.from_json(json)
# print the JSON string representation of the object
print(DeploymentParametersAdminPassword.to_json())

# convert the object into a dict
deployment_parameters_admin_password_dict = deployment_parameters_admin_password_instance.to_dict()
# create an instance of DeploymentParametersAdminPassword from a dict
deployment_parameters_admin_password_from_dict = DeploymentParametersAdminPassword.from_dict(deployment_parameters_admin_password_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


