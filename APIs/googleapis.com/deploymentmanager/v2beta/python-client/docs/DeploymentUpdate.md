# DeploymentUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Output only. An optional user-provided description of the deployment after the current update has been applied. | [optional] 
**labels** | [**List[DeploymentUpdateLabelEntry]**](DeploymentUpdateLabelEntry.md) | Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: &#x60;[a-z]([-a-z0-9]*[a-z0-9])?&#x60; Label values must be between 0 and 63 characters long and must conform to the regular expression &#x60;([a-z]([-a-z0-9]*[a-z0-9])?)?&#x60;. | [optional] 
**manifest** | **str** | Output only. URL of the manifest representing the update configuration of this deployment. | [optional] 

## Example

```python
from openapi_client.models.deployment_update import DeploymentUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentUpdate from a JSON string
deployment_update_instance = DeploymentUpdate.from_json(json)
# print the JSON string representation of the object
print(DeploymentUpdate.to_json())

# convert the object into a dict
deployment_update_dict = deployment_update_instance.to_dict()
# create an instance of DeploymentUpdate from a dict
deployment_update_from_dict = DeploymentUpdate.from_dict(deployment_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


