# ApplicationDeploymentPolicy

Managed application deployment policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_mode** | [**DeploymentMode**](DeploymentMode.md) |  | 

## Example

```python
from openapi_client.models.application_deployment_policy import ApplicationDeploymentPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationDeploymentPolicy from a JSON string
application_deployment_policy_instance = ApplicationDeploymentPolicy.from_json(json)
# print the JSON string representation of the object
print(ApplicationDeploymentPolicy.to_json())

# convert the object into a dict
application_deployment_policy_dict = application_deployment_policy_instance.to_dict()
# create an instance of ApplicationDeploymentPolicy from a dict
application_deployment_policy_from_dict = ApplicationDeploymentPolicy.from_dict(application_deployment_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


