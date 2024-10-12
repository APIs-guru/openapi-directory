# ArtifactSource

Properties of an artifact source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ArtifactSourceProperties**](ArtifactSourceProperties.md) |  | 
**id** | **str** | The identifier of the resource. | [optional] [readonly] 
**location** | **str** | The location of the resource. | [optional] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.artifact_source import ArtifactSource

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactSource from a JSON string
artifact_source_instance = ArtifactSource.from_json(json)
# print the JSON string representation of the object
print(ArtifactSource.to_json())

# convert the object into a dict
artifact_source_dict = artifact_source_instance.to_dict()
# create an instance of ArtifactSource from a dict
artifact_source_from_dict = ArtifactSource.from_dict(artifact_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


