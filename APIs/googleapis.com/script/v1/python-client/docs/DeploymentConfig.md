# DeploymentConfig

Metadata the defines how a deployment is configured.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description for this deployment. | [optional] 
**manifest_file_name** | **str** | The manifest file name for this deployment. | [optional] 
**script_id** | **str** | The script project&#39;s Drive ID. | [optional] 
**version_number** | **int** | The version number on which this deployment is based. | [optional] 

## Example

```python
from openapi_client.models.deployment_config import DeploymentConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentConfig from a JSON string
deployment_config_instance = DeploymentConfig.from_json(json)
# print the JSON string representation of the object
print(DeploymentConfig.to_json())

# convert the object into a dict
deployment_config_dict = deployment_config_instance.to_dict()
# create an instance of DeploymentConfig from a dict
deployment_config_from_dict = DeploymentConfig.from_dict(deployment_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


