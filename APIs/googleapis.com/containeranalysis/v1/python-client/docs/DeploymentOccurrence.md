# DeploymentOccurrence

The period during which some deployable was active in a runtime.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Address of the runtime element hosting this deployment. | [optional] 
**config** | **str** | Configuration used to create this deployment. | [optional] 
**deploy_time** | **str** | Required. Beginning of the lifetime of this deployment. | [optional] 
**platform** | **str** | Platform hosting this deployment. | [optional] 
**resource_uri** | **List[str]** | Output only. Resource URI for the artifact being deployed taken from the deployable field with the same name. | [optional] 
**undeploy_time** | **str** | End of the lifetime of this deployment. | [optional] 
**user_email** | **str** | Identity of the user that triggered this deployment. | [optional] 

## Example

```python
from openapi_client.models.deployment_occurrence import DeploymentOccurrence

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentOccurrence from a JSON string
deployment_occurrence_instance = DeploymentOccurrence.from_json(json)
# print the JSON string representation of the object
print(DeploymentOccurrence.to_json())

# convert the object into a dict
deployment_occurrence_dict = deployment_occurrence_instance.to_dict()
# create an instance of DeploymentOccurrence from a dict
deployment_occurrence_from_dict = DeploymentOccurrence.from_dict(deployment_occurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


