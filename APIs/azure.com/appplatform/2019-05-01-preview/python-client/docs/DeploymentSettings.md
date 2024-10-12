# DeploymentSettings

Deployment settings payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu** | **int** | Required CPU | [optional] [default to 1]
**environment_variables** | **Dict[str, str]** | Collection of environment variables | [optional] 
**instance_count** | **int** | Instance count | [optional] [default to 1]
**jvm_options** | **str** | JVM parameter | [optional] 
**memory_in_gb** | **int** | Required Memory size in GB | [optional] [default to 1]
**runtime_version** | **str** | Runtime version | [optional] 

## Example

```python
from openapi_client.models.deployment_settings import DeploymentSettings

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentSettings from a JSON string
deployment_settings_instance = DeploymentSettings.from_json(json)
# print the JSON string representation of the object
print(DeploymentSettings.to_json())

# convert the object into a dict
deployment_settings_dict = deployment_settings_instance.to_dict()
# create an instance of DeploymentSettings from a dict
deployment_settings_from_dict = DeploymentSettings.from_dict(deployment_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


