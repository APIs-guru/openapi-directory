# DeploymentConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_service_configuration** | [**CloudServiceConfiguration**](CloudServiceConfiguration.md) |  | [optional] 
**virtual_machine_configuration** | [**VirtualMachineConfiguration**](VirtualMachineConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.deployment_configuration import DeploymentConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentConfiguration from a JSON string
deployment_configuration_instance = DeploymentConfiguration.from_json(json)
# print the JSON string representation of the object
print(DeploymentConfiguration.to_json())

# convert the object into a dict
deployment_configuration_dict = deployment_configuration_instance.to_dict()
# create an instance of DeploymentConfiguration from a dict
deployment_configuration_from_dict = DeploymentConfiguration.from_dict(deployment_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


