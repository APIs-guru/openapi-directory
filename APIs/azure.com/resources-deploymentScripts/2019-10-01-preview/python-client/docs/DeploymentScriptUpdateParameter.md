# DeploymentScriptUpdateParameter

Deployment script parameters to be updated. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags to be updated. | [optional] 
**id** | **str** | String Id used to locate any resource on Azure. | [optional] [readonly] 
**name** | **str** | Name of this resource. | [optional] [readonly] 
**type** | **str** | Type of this resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.deployment_script_update_parameter import DeploymentScriptUpdateParameter

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentScriptUpdateParameter from a JSON string
deployment_script_update_parameter_instance = DeploymentScriptUpdateParameter.from_json(json)
# print the JSON string representation of the object
print(DeploymentScriptUpdateParameter.to_json())

# convert the object into a dict
deployment_script_update_parameter_dict = deployment_script_update_parameter_instance.to_dict()
# create an instance of DeploymentScriptUpdateParameter from a dict
deployment_script_update_parameter_from_dict = DeploymentScriptUpdateParameter.from_dict(deployment_script_update_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


