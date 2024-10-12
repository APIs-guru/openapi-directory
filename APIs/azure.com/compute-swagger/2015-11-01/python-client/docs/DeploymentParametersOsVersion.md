# DeploymentParametersOsVersion

Deployment operation parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The OS version for the VM. This will pick a fully patched image of this given OS version. | [default to '14.04.2-LTS']

## Example

```python
from openapi_client.models.deployment_parameters_os_version import DeploymentParametersOsVersion

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentParametersOsVersion from a JSON string
deployment_parameters_os_version_instance = DeploymentParametersOsVersion.from_json(json)
# print the JSON string representation of the object
print(DeploymentParametersOsVersion.to_json())

# convert the object into a dict
deployment_parameters_os_version_dict = deployment_parameters_os_version_instance.to_dict()
# create an instance of DeploymentParametersOsVersion from a dict
deployment_parameters_os_version_from_dict = DeploymentParametersOsVersion.from_dict(deployment_parameters_os_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


