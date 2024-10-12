# DeploymentInstance

Deployment instance payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discovery_status** | **str** | Discovery status of the deployment instance | [optional] [readonly] 
**name** | **str** | Name of the deployment instance | [optional] [readonly] 
**reason** | **str** | Failed reason of the deployment instance | [optional] [readonly] 
**status** | **str** | Status of the deployment instance | [optional] [readonly] 

## Example

```python
from openapi_client.models.deployment_instance import DeploymentInstance

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentInstance from a JSON string
deployment_instance_instance = DeploymentInstance.from_json(json)
# print the JSON string representation of the object
print(DeploymentInstance.to_json())

# convert the object into a dict
deployment_instance_dict = deployment_instance_instance.to_dict()
# create an instance of DeploymentInstance from a dict
deployment_instance_from_dict = DeploymentInstance.from_dict(deployment_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


