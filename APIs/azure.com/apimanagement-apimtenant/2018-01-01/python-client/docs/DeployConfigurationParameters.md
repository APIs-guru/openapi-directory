# DeployConfigurationParameters

Parameters supplied to the Deploy Configuration operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch** | **str** | The name of the Git branch from which the configuration is to be deployed to the configuration database. | 
**force** | **bool** | The value enforcing deleting subscriptions to products that are deleted in this update. | [optional] 

## Example

```python
from openapi_client.models.deploy_configuration_parameters import DeployConfigurationParameters

# TODO update the JSON string below
json = "{}"
# create an instance of DeployConfigurationParameters from a JSON string
deploy_configuration_parameters_instance = DeployConfigurationParameters.from_json(json)
# print the JSON string representation of the object
print(DeployConfigurationParameters.to_json())

# convert the object into a dict
deploy_configuration_parameters_dict = deploy_configuration_parameters_instance.to_dict()
# create an instance of DeployConfigurationParameters from a dict
deploy_configuration_parameters_from_dict = DeployConfigurationParameters.from_dict(deploy_configuration_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


