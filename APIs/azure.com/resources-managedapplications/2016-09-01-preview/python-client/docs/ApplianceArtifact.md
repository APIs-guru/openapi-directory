# ApplianceArtifact

Appliance artifact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The appliance artifact name. | [optional] 
**type** | [**ApplianceArtifactType**](ApplianceArtifactType.md) |  | [optional] 
**uri** | **str** | The appliance artifact blob uri. | [optional] 

## Example

```python
from openapi_client.models.appliance_artifact import ApplianceArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of ApplianceArtifact from a JSON string
appliance_artifact_instance = ApplianceArtifact.from_json(json)
# print the JSON string representation of the object
print(ApplianceArtifact.to_json())

# convert the object into a dict
appliance_artifact_dict = appliance_artifact_instance.to_dict()
# create an instance of ApplianceArtifact from a dict
appliance_artifact_from_dict = ApplianceArtifact.from_dict(appliance_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


