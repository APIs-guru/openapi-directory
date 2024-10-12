# Deployment

The period during which some deployable was active in a runtime.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Address of the runtime element hosting this deployment. | [optional] 
**config** | **str** | Configuration used to create this deployment. | [optional] 
**deploy_time** | **str** | Beginning of the lifetime of this deployment. | [optional] 
**platform** | **str** | Platform hosting this deployment. | [optional] 
**resource_uri** | **List[str]** | Resource URI for the artifact being deployed taken from the deployable field with the same name. | [optional] 
**undeploy_time** | **str** | End of the lifetime of this deployment. | [optional] 
**user_email** | **str** | Identity of the user that triggered this deployment. | [optional] 

## Example

```python
from openapi_client.models.deployment import Deployment

# TODO update the JSON string below
json = "{}"
# create an instance of Deployment from a JSON string
deployment_instance = Deployment.from_json(json)
# print the JSON string representation of the object
print(Deployment.to_json())

# convert the object into a dict
deployment_dict = deployment_instance.to_dict()
# create an instance of Deployment from a dict
deployment_from_dict = Deployment.from_dict(deployment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


