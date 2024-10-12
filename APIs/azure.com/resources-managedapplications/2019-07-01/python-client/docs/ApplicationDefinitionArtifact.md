# ApplicationDefinitionArtifact

Application definition artifact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | [**ApplicationDefinitionArtifactName**](ApplicationDefinitionArtifactName.md) |  | 
**type** | [**ApplicationArtifactType**](ApplicationArtifactType.md) |  | 
**uri** | **str** | The managed application definition artifact blob uri. | 

## Example

```python
from openapi_client.models.application_definition_artifact import ApplicationDefinitionArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationDefinitionArtifact from a JSON string
application_definition_artifact_instance = ApplicationDefinitionArtifact.from_json(json)
# print the JSON string representation of the object
print(ApplicationDefinitionArtifact.to_json())

# convert the object into a dict
application_definition_artifact_dict = application_definition_artifact_instance.to_dict()
# create an instance of ApplicationDefinitionArtifact from a dict
application_definition_artifact_from_dict = ApplicationDefinitionArtifact.from_dict(application_definition_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


