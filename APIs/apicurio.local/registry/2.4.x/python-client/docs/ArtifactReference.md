# ArtifactReference

A reference to a different artifact. Typically used with artifact types that can have dependencies like Protobuf.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_id** | **str** |  | 
**group_id** | **str** |  | 
**name** | **str** |  | 
**version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.artifact_reference import ArtifactReference

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactReference from a JSON string
artifact_reference_instance = ArtifactReference.from_json(json)
# print the JSON string representation of the object
print(ArtifactReference.to_json())

# convert the object into a dict
artifact_reference_dict = artifact_reference_instance.to_dict()
# create an instance of ArtifactReference from a dict
artifact_reference_from_dict = ArtifactReference.from_dict(artifact_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


