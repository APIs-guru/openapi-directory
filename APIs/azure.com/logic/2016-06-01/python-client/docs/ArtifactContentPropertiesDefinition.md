# ArtifactContentPropertiesDefinition

The artifact content properties definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **object** |  | [optional] 
**content_link** | [**ContentLink**](ContentLink.md) |  | [optional] 
**content_type** | **str** | The content type. | [optional] 
**changed_time** | **datetime** | The artifact changed time. | [optional] 
**created_time** | **datetime** | The artifact creation time. | [optional] 
**metadata** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.artifact_content_properties_definition import ArtifactContentPropertiesDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactContentPropertiesDefinition from a JSON string
artifact_content_properties_definition_instance = ArtifactContentPropertiesDefinition.from_json(json)
# print the JSON string representation of the object
print(ArtifactContentPropertiesDefinition.to_json())

# convert the object into a dict
artifact_content_properties_definition_dict = artifact_content_properties_definition_instance.to_dict()
# create an instance of ArtifactContentPropertiesDefinition from a dict
artifact_content_properties_definition_from_dict = ArtifactContentPropertiesDefinition.from_dict(artifact_content_properties_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


