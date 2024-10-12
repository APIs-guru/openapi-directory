# DeploymentExtended

Deployment information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the deployment. | [optional] [readonly] 
**name** | **str** | The name of the deployment. | 
**properties** | [**DeploymentPropertiesExtended**](DeploymentPropertiesExtended.md) |  | [optional] 

## Example

```python
from openapi_client.models.deployment_extended import DeploymentExtended

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentExtended from a JSON string
deployment_extended_instance = DeploymentExtended.from_json(json)
# print the JSON string representation of the object
print(DeploymentExtended.to_json())

# convert the object into a dict
deployment_extended_dict = deployment_extended_instance.to_dict()
# create an instance of DeploymentExtended from a dict
deployment_extended_from_dict = DeploymentExtended.from_dict(deployment_extended_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


