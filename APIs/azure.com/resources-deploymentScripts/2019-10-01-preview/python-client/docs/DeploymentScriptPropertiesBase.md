# DeploymentScriptPropertiesBase

Common properties for the deployment script.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cleanup_preference** | **str** | The clean up preference when the script execution gets in a terminal state. Default setting is &#39;Always&#39;. | [optional] 
**outputs** | **Dict[str, object]** | List of script outputs. | [optional] [readonly] 
**provisioning_state** | **str** | State of the script execution. This only appears in the response. | [optional] [readonly] 
**status** | [**ScriptStatus**](ScriptStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.deployment_script_properties_base import DeploymentScriptPropertiesBase

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentScriptPropertiesBase from a JSON string
deployment_script_properties_base_instance = DeploymentScriptPropertiesBase.from_json(json)
# print the JSON string representation of the object
print(DeploymentScriptPropertiesBase.to_json())

# convert the object into a dict
deployment_script_properties_base_dict = deployment_script_properties_base_instance.to_dict()
# create an instance of DeploymentScriptPropertiesBase from a dict
deployment_script_properties_base_from_dict = DeploymentScriptPropertiesBase.from_dict(deployment_script_properties_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


