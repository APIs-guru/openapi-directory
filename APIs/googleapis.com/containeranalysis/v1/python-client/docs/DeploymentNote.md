# DeploymentNote

An artifact that can be deployed in some runtime.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_uri** | **List[str]** | Required. Resource URI for the artifact being deployed. | [optional] 

## Example

```python
from openapi_client.models.deployment_note import DeploymentNote

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentNote from a JSON string
deployment_note_instance = DeploymentNote.from_json(json)
# print the JSON string representation of the object
print(DeploymentNote.to_json())

# convert the object into a dict
deployment_note_dict = deployment_note_instance.to_dict()
# create an instance of DeploymentNote from a dict
deployment_note_from_dict = DeploymentNote.from_dict(deployment_note_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


