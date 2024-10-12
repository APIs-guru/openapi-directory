# DeploymentScript

Deployment script object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**ManagedServiceIdentity**](ManagedServiceIdentity.md) |  | 
**kind** | **str** | Type of the script. | 
**location** | **str** | The location of the ACI and the storage account for the deployment script. | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | String Id used to locate any resource on Azure. | [optional] [readonly] 
**name** | **str** | Name of this resource. | [optional] [readonly] 
**type** | **str** | Type of this resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.deployment_script import DeploymentScript

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentScript from a JSON string
deployment_script_instance = DeploymentScript.from_json(json)
# print the JSON string representation of the object
print(DeploymentScript.to_json())

# convert the object into a dict
deployment_script_dict = deployment_script_instance.to_dict()
# create an instance of DeploymentScript from a dict
deployment_script_from_dict = DeploymentScript.from_dict(deployment_script_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


