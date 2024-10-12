# ArtifactProperties

The artifact properties definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changed_time** | **datetime** | The artifact changed time. | [optional] 
**created_time** | **datetime** | The artifact creation time. | [optional] 
**metadata** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.artifact_properties import ArtifactProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactProperties from a JSON string
artifact_properties_instance = ArtifactProperties.from_json(json)
# print the JSON string representation of the object
print(ArtifactProperties.to_json())

# convert the object into a dict
artifact_properties_dict = artifact_properties_instance.to_dict()
# create an instance of ArtifactProperties from a dict
artifact_properties_from_dict = ArtifactProperties.from_dict(artifact_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


